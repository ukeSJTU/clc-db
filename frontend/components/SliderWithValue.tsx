import { Slider } from "@/components/ui/slider";

const SliderWithValue: React.FC<{
    value: number;
    min: number;
    max: number;
    step: number;
    onChange: (value: number) => void;
}> = ({ value, min, max, step, onChange }) => {
    return (
        <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-4">
                <div className="w-16 flex items-center justify-center bg-gray-100 rounded-md px-2 py-1">
                    <span className="text-sm font-semibold">{min}</span>
                </div>
                <div className="flex-1">
                    <Slider
                        value={[value]}
                        min={min}
                        max={max}
                        step={step}
                        onValueChange={(value) => onChange(value[0])}
                    />
                </div>
                <div className="w-16 flex items-center justify-center bg-gray-100 rounded-md px-2 py-1">
                    <span className="text-sm font-semibold">{max}</span>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-16 flex items-center justify-center bg-blue-100 rounded-md px-2 py-1">
                    <span className="text-sm font-semibold">{value}</span>
                </div>
            </div>
        </div>
    );
};

export default SliderWithValue;
