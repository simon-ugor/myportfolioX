import { useEffect } from "react"

const MobileAboutMe = (props) => {

    useEffect(() => {
        props.menuClose()
    }, [])

    return(
        <div className="mobile-div-1">
            <h1 className="simon-ugor-heading">About Me</h1>
            <p className="about-me-caption">My name is Šimon Ugor and I am currently studying Informatics in Krems and der Donau, Austria. Since the beginning of Covid19 I study from home, Slovakia, meaning I have a lot more time for self-studies. I decided to focus on Web Development simply because that was what I enjoyed the most. Started with the basics of HTML, CSS and Javascript, ended up diving into ReactJS framework and really enjoying it. I am currently looking for a real-world working experience and trying my best to find a job in this field. You can find more information about me in my CV which you can download in My CV section. I created this website fully from scratch using ReactJS and some more really interesting technologies. If you are interested in looking into the code of my portfolio or any other app included, feel free to contact me and I will provide anything you need.</p>
        </div>
    )
}

export default MobileAboutMe