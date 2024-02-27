import "../App.css";
type ImageButtonProps = {
  image: string;
  onClick: () => void;
};

export default function ImageButton({ image, onClick }: ImageButtonProps) {
  return (
    <button className="imageButton" onClick={onClick}>
      <img src={image} />
    </button>
  );
}
