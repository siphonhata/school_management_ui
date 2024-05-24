
export const PlaceHolder = ({ imageSrc, description, size }: any) => {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            {/* "w-80 h-80" */}
            <img src={imageSrc} alt="placeholder" className={size} />
            <p className="text-lg font-medium mt-4 text-gray-900">{description}</p>
        </div>
    );
}