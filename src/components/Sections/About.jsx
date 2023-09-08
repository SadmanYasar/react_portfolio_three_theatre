export default function About() {
    return (
        <section className="w-full min-h-screen max-w-5xl mx-auto px-4 font-sans">
            <div className="flex flex-col">
                <div className="p-1 rounded-full animate-text bg-gradient-to-r from-teal-300 via-purple-500 to-orange-500 self-center">
                    <img src={'/profile_pic_sadman_yasar_sayem.jpeg'} className="w-64 h-64 object-cover rounded-full filter brightness-125" />
                </div>
                <div className="text-3xl md:text-4xl text-center font-bold pt-12">
                    Full Stack Web Developer
                </div>
                <div className="text-center mt-8">
                    <span className="p-4 text-xl md:text-2xl rounded-lg md:bg-white/20">
                        Hello! I am a freelancer based in Johor Bahru.
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-16 pt-16">
                <div className="text-2xl md:text-right uppercase font-bold text-slate-300">
                    Education
                </div>
                <div className="text-2xl md:col-start-2 md:col-end-4 font-bold">
                    Universiti Teknologi Malaysia | Bsc Computer Science
                </div>
                <div className="text-md text-slate-300 font-mono">
                    Since March 2022
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-x-16 pt-16">
                <div className="text-2xl md:text-right uppercase font-bold text-slate-300">
                    Experience
                </div>
                <div className="text-2xl md:col-start-2 md:col-end-4">
                    <div className="font-bold">
                        Furtory and Proptory
                    </div>
                    <div className="text-md font-normal text-slate-300">Junior Full Stack Developer</div>
                </div>
                <div className="text-md text-slate-300 font-mono">
                    Jan 2023 - April 2023
                </div>
                <div className="text-2xl md:col-start-2 md:col-end-4">
                    <div className="font-bold">
                        IAYH
                    </div>
                    <div className="text-md font-normal text-slate-300">Web Developer</div>
                </div>
                <div className="text-md text-slate-300 font-mono">
                    Aug 2021 - Oct 2022
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-x-16 pt-16">
                <div className="text-2xl md:text-right uppercase font-bold text-slate-300">
                    I <span className="animate-text font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-red-500 to-orange-500">❤</span>
                </div>
                <div className="text-2xl md:col-start-2 md:col-end-4">
                    <div className="font-bold">
                        Music, Drawing, Playing Guitar, System Architecture
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-x-16 pt-16">
                <div className="text-2xl md:text-right uppercase font-bold text-slate-300">
                    On the Web
                </div>
                <div className="grid grid-cols-4 text-2xl md:col-start-2 md:col-end-4">
                    <a href="https://www.upwork.com/freelancers/~01cfd344d945d1f282?viewMode=1" target="_blank">
                        <img src={'/upwork.svg'} className="w-12 h-12 rounded-lg object-cover bg-white hover:bg-gradient-to-r from-teal-300 via-purple-500 to-orange-500 p-2 focus:text-white hover:animate-text" />
                    </a>
                    <a href="https://www.linkedin.com/in/Sadman-Yasar-Sayem/" target="_blank">
                        <img src={'/linkedin.svg'} className="w-12 h-12 object-cover rounded-lg bg-white hover:bg-gradient-to-r from-teal-300 via-purple-500 to-orange-500 p-2 focus:text-white hover:animate-text" />
                    </a>
                    <a href="https://github.com/SadmanYasar" target="_blank">
                        <img src={'/github.svg'} className="w-12 h-12 object-cover rounded-lg bg-white hover:bg-gradient-to-r from-teal-300 via-purple-500 to-orange-500 p-2 focus:text-white hover:animate-text" />
                    </a>
                    <a href="https://www.behance.net/sadmanyasar" target="_blank">
                        <img src={'/behance.svg'} className="w-12 h-12 object-cover rounded-lg bg-white hover:bg-gradient-to-r from-teal-300 via-purple-500 to-orange-500 p-2 focus:text-white hover:animate-text" />
                    </a>
                </div>
            </div>
        </section>
    );
}