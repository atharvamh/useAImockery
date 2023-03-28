import jocerImg from "../assets/jocer.jpg";

export default function Header() {
    return (
        <div>
            <div className="header">
                <h1 style={{ color : "#fff"}}>TSonGPT</h1>
                <img 
                    src={jocerImg} width={80} height={"auto"} alt="jocer image"
                    className="jocer-image"
                />
            </div>
        </div>
    )
}