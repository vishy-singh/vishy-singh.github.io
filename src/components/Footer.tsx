const Footer = () => {
    return (
        <footer
            className="px-5 md:px-10 py-8"
            style={{borderTop: "1px solid var(--pp-border)"}}
        >
            <div className="flex flex-col justify-center items-center text-center">
                <p style={{color: "var(--pp-muted)", fontSize: "13px", fontWeight: 500}}>
                    © {new Date().getFullYear()} Vishwajeet Pratap Singh. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
