import { FC } from "react";
import YouTube from "react-youtube";

type Props = {
  trailerKey: string;
  onClose: () => void;
};

const TrailerModal: FC<Props> = ({ trailerKey, onClose }) => {
  return (
    <div className="youtube-modal">
      <div className="youtube-overlay" onClick={onClose}></div>
      <div className="youtube-container">
        <YouTube
          videoId={trailerKey}
          className="reproductor"
          opts={{
            /*  width: "80%",
                height: "480", */
            width: "100%",
            height: "100%",
            playerVars: {
              autoplay: 1,
              controls: 0,
              cc_load_policy: 0,
              fs: 0,
              iv_load_policy: 3,
              modestbranding: 1,
              rel: 0,
              showinfo: 0,
            },
          }}
        />
      </div>
    </div>
  );
};

export default TrailerModal;
