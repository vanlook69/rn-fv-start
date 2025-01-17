import React, { useState, useEffect, useRef } from "react";
import { FlatList, Dimensions } from "react-native";
import { forEach } from "lodash";
// import { Video } from "../../api";
// import { useAuth } from "../../hooks";
// import { VideoFeed } from "../../components/Shared";

const video = new Video();
const { height } = Dimensions.get("window");

export function VideosPublishedScreen(props) {
  const {
    route: { params },
  } = props;
  const [videos, setVideos] = useState(null);
  const [indexStart, setIndexStart] = useState(null);
  const { accessToken } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await video.getVideosUser(accessToken, params.idUser);
        setVideos(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [params]);

  useEffect(() => {
    if (videos) {
      forEach(videos, (video, index) => {
        if (video.id === params.idVideo) {
          setIndexStart(index);
        }
      });
    }
  }, [params, videos]);

  const onViewChangeRef = useRef(({ viewableItems }) => {
    setIndexStart(viewableItems[0].index);
  });

  if (!videos || indexStart === null) return null;

  return (
    <FlatList
      data={videos}
      decelerationRate="fast"
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item, index }) => (
        <VideoFeed
          item={item}
          index={index}
          indexShow={indexStart}
          style={{ height }}
        />
      )}
      removeClippedSubviews={false}
      showsVerticalScrollIndicator={false}
      snapToInterval={height}
      onViewableItemsChanged={onViewChangeRef.current}
      viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
      initialScrollIndex={indexStart}
      onScrollToIndexFailed={() => {}}
    />
  );
}
