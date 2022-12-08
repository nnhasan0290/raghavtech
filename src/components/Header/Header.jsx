export default function Header() {
      return(
        <nav className="container justify-between pt-4 pb-2 mx-auto flexible h-[100px]">
            <div className="flexible">
                <img src="/head-logo.png" alt="logo" width={62} height={63}/>
                <div>
                    <h2 className="nav-heading">Raghav BuildTech</h2>
                    <p className="text-black second-small-font">Repairs to Rennovation</p>
                </div>
            </div>
            <div className="flexible  gap-[50px] second-small-font text-[#00215B]">
                <div>
                    Home
                </div>
                <div>
                    Services
                </div>
                <div>
                    About Us
                </div>
                <div>
                    Testimonials
                </div>
                <div>
                    Contact
                </div>
            </div>
        </nav>
      )
}