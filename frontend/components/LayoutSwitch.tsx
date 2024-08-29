import React from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface LayoutSwitchProps {
    currentLayout: "grid" | "table";
    onToggleLayout: (layout: "grid" | "table") => void;
}

const LayoutSwitch: React.FC<LayoutSwitchProps> = ({
    currentLayout,
    onToggleLayout,
}) => {
    const handleToggle = () => {
        const newLayout = currentLayout === "grid" ? "table" : "grid";
        onToggleLayout(newLayout);
    };

    return (
        <div className="flex justify-center items-center gap-2">
            <Label htmlFor="layout-switch">Grid</Label>
            <Switch
                id="layout-switch"
                checked={currentLayout === "grid"}
                onCheckedChange={handleToggle}
            />
            <Label htmlFor="layout-switch">Table</Label>
        </div>
    );
};

export default LayoutSwitch;
