
export const PlaceHolder = ({ imageSrc, description }: any) => {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            <img src={imageSrc} alt="placeholder" className="w-80 h-80" />
            <p className="text-lg font-medium text-gray-900">{description}</p>
        </div>
    );
}