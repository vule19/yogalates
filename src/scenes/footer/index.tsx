import Logo from"@/assets/Logo.png";

type Props = {}

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img alt='logo' src={Logo} className="h-16"/>
                <p className="my-5">
                Try Yogalates to experience these benefits while enjoying a holistic approach to fitness and well-being!
                </p>
                <p>© 2025 by Anh Le.</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">Let's do it</p>
                <p className="my-5">Join Us</p>
                <p>Get fits</p>
            </div>
            <div>
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5">Yogalates</p>
                <p className="my-5">Anh Le</p>
                <p>352-000-0000</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer