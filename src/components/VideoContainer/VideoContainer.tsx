import React from 'react';
import ImageList from '../ImageList/ImageList';
import Styled from './VideoContainer.styles';

const VideoContainer: React.FC = () => {
  const [renderContainer, setRenderContainer] = React.useState(true);
  const videoRef: React.RefObject<HTMLVideoElement> = React.useRef(null);
  const [screenshots, setScreenshots] = React.useState<string[]>([]);

  const initializeWebcam = React.useCallback(() => {
    if (videoRef.current) {
      navigator.mediaDevices
        .getUserMedia?.({ video: true })
        .then((stream) => {
          setRenderContainer(true);
          if (videoRef.current) videoRef.current.srcObject = stream;
        })
        .catch((err) => {
          setRenderContainer(false);
          return err;
        });
    }
  }, []);

  const stopWebcam = React.useCallback(() => {
    const stream = videoRef.current?.srcObject as MediaStream;
    const tracks = stream.getTracks();

    tracks.forEach((track) => {
      track.stop();
    });

    if (videoRef.current) videoRef.current.srcObject = null;

    setRenderContainer(false);
  }, []);

  const takeSnapshot = React.useCallback(() => {
    const canvas = document.createElement('canvas');
    canvas.width = Number(videoRef.current?.videoWidth);
    canvas.height = Number(videoRef.current?.videoHeight);

    const ctx = canvas.getContext('2d');
    ctx?.drawImage(
      videoRef.current as HTMLVideoElement,
      0,
      0,
      canvas.width,
      canvas.height
    );

    const base64Snapshot = canvas.toDataURL('image/png');

    canvas.remove();

    setScreenshots((previousScreenshots) => [
      ...previousScreenshots,
      base64Snapshot,
    ]);

    return base64Snapshot;
  }, []);

  const clearList = React.useCallback(() => {
    setScreenshots([]);
  }, []);

  React.useEffect(() => {
    initializeWebcam();
  }, [initializeWebcam]);

  return renderContainer ? (
    <>
      <Styled.Container>
        <Styled.Video autoPlay ref={videoRef} muted />
      </Styled.Container>
      <Styled.ActionsContainer>
        <Styled.StopButton onClick={stopWebcam}>Stop ✋</Styled.StopButton>
        <Styled.SnapshotButton onClick={takeSnapshot}>
          Screenshot 📸
        </Styled.SnapshotButton>
        {Boolean(screenshots.length) && (
          <Styled.ClearListButton onClick={clearList}>
            Clear 🗑️
          </Styled.ClearListButton>
        )}
      </Styled.ActionsContainer>
      {Boolean(screenshots.length) && <ImageList images={screenshots} />}
    </>
  ) : null;
};

export default VideoContainer;
