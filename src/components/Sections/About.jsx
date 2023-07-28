export default function About() {
    return (
        <section className="w-full min-h-screen max-w-5xl mx-auto px-4">
            <div className="flex flex-col">
                <div className="p-1 rounded-full animate-text bg-gradient-to-r from-teal-300 via-purple-500 to-orange-500 self-center">
                    <img src={'/profile_pic_sadman_yasar_sayem.jpeg'} className="w-64 h-64 object-cover rounded-full" />
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
                <div className="text-md text-slate-300">
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
                <div className="text-md text-slate-300">
                    Jan 2023 - April 2023
                </div>
                <div className="text-2xl md:col-start-2 md:col-end-4">
                    <div className="font-bold">
                        IAYH
                    </div>
                    <div className="text-md font-normal text-slate-300">Web Developer</div>
                </div>
                <div className="text-md text-slate-300">
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
                <div className="text-2xl md:col-start-2 md:col-end-4">
                    <a href="https://links-sadmanyasar.netlify.app/" target="_blank" className="font-bold rounded-lg animate-text bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-purple-500 to-orange-500 p-2 focus:text-white hover:text-white">
                        @sadmanyasar_
                    </a>
                </div>
            </div>
        </section>
    );
}