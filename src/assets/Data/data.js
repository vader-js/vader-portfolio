import auth from '../images/auth.png'
import musicapp from '../images/music-app.png'
import githubPort from '../images/githubPort.png'
import socialMedia from '../images/social-media.png'
import homeEstate from '../images/home-estate.jpeg'
import Bernouli from '../images/Bernouli.jpeg'
import GithubP from '../images/GithubP.jpeg'
import vaderPort from '../images/vaderPort.jpeg'
import altcamp from '../images/altcamp.jpeg'
import chatter_app from '../images/vader-chatter-app.png'

export const Data = [
    {
        id: 7,
        name: 'Vader-chatter-app',
        image: chatter_app,
        liveLink: 'https://chatter-app-theta.vercel.app/',
        GithubLink: 'https://github.com/vader-js/chatterApp',
        topics: ['React', 'typescript','firebase'],
        description: 'In this age of pictures, hashtags, Reels, TikTok, likes, and comments, a traditional bookworm’s heaven would be a blog to access more text-based content. Chatter aims to be that heaven specifically for this kind of audience. It is a multi-functional platform for authors and readers to create and access content.'
    },
    {
        id: 1,
        name: 'Altcamp',
        image: altcamp,
        liveLink: 'https://altcampv1.netlify.app/',
        githubLink: 'https://github.com/AltCamp/altcampv1-frontend',
        topics: ['react', 'redux-toolkit', 'typescript'],
        description: 'In a bid to curb the problem of a lack of a more efficent way for Altschool student to get help from their peers and mentors, i and a couple of like-minded developers decided to build a platform that will help solve this problem.'
    },
    {
        id: 2,
        name: 'vader-music-app',
        image: musicapp,
        liveLink: 'https://vader-music-app.netlify.app/',
        GithubLink: 'https://github.com/vader-js/vader-music-app',
        topics: ['react', 'javascript'],
        description: 'This project was born as a result of my love for music. i was scrolling through Twitter and i came across a challenge coined as "November challenge for FrontEnd Developers" and this piqued my interest'
    },
    {
        id: 3,
        name: 'Altschool-github-portfolio-project',
        image: githubPort,
        liveLink: 'https://vaders-github-portfolio.netlify.app/',
        GithubLink: 'https://github.com/vader-js/Altschool-github-portfolio-project',
        topics: ['react', 'githubApi'],
        description: 'Introducing our new app that lets you easily create a mini portfolio for each of your GitHub repositories. This project was made to tackle the problem of having to create a portfolio for each of your GitHub repositories.'
    },
    {
        id: 4,
        name: 'My-Social-media',
        image: socialMedia,
        liveLink: 'https://vader-social-media.netlify.app',
        GithubLink: 'https://github.com/vader-js/My-Social-media',
        topics: ['react', 'javascript'],
        description: 'Simply upload your photos and share them with your contacts with just a few taps. With a minimalist design and intuitive interface, our app makes it easy to post and view photos on-the-go.'
    },
    {
        id: 5,
        name: 'Product-Search-with-Authentication',
        image: auth,
        liveLink: 'https://vader-product-auth.netlify.app',
        GithubLink: 'https://github.com/vader-js/Product-Search-with-Authentication',
        topics: ['vuejs', 'vueX', 'firebase'],
        description: 'A simple app for product search written with vue and having firebase authentication, built to test my knowledge of vuejs, vueX and firebase from a series of projects from Altschool.'
    },
    {
        id: 6,
        name: 'Home-Estate-Website',
        image: homeEstate,
        liveLink: 'https://vader-home-estate-site.netlify.app/',
        GithubLink: 'https://github.com/vader-js/Home-Estate-Website',
        topics: ['vue', 'javascript'],
        description: 'Find your dream home with ease using our home search app. With a user-friendly interface and powerful search tools, our app helps you explore the latest listings, filter results based on your preferences, and schedule viewings directly from your phone.'
    },

    
]

export const Post=[
    {
        id: 1,
        link: "https://vader.hashnode.dev/from-bernoullis-to-consolelog",
        image: Bernouli,
        desc: ["Beginer dev", "web developer", ]

    },
    {
        id: 2,
        link: "https://vader.hashnode.dev/build-a-github-portfolio-with-react",
        image: GithubP,
        desc: ["React", "Github", "Portfolio"]
    }
]