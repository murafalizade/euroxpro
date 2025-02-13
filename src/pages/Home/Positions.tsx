import { useNavigate } from "react-router-dom";

const areas = [
    "LCVP oGV", "LCVP oGT", "LCVP ICX", "LCP", "LCVP iGT",
    "MCVP oGV", "MCVP oGT", "MCVP iGT", "MCP", "MCPe",
    "MCVP Marketing", "LCVP Marketing"
];

const Positions = () => {
    const navigate = useNavigate();

    return (
        <div className="positions-container">
            {areas.map((area) => (
                <button
                    key={area}
                    className="position-button"
                    onClick={() => navigate(`/delegates?position=${encodeURIComponent(area)}`)}
                >
                    {area}
                </button>
            ))}
        </div>
    );
};

export default Positions;
