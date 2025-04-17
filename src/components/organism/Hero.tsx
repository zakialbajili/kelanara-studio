const HeroHome = () => {
    return(
        <div className="w-full min-h-[487px] h-[50vh] bg-[url('/assets/images/bg-hero-mobile.png')] lg:bg-[url('/assets/images/bg-hero.png')] bg-cover bg-top lg:bg-center relative">
            <div className="w-full bg-linear-to-t from-white to-transparent absolute bottom-0 py-3 lg:py-0">
                <h1 className="text-[32px] lg:text-[64px] font-bold px-4 lg:px-10 py-2 font-merriweather leading-9 lg:leading-16">Selamat Datang di Konservasi Burung</h1>
                <p className="lg:text-2xl px-4 lg:px-10 py-2">Kami berkomitmen untuk melindungi burung yang terancam punah dan habitatnya. Bergabunglah dengan kami dalam upaya pelestarian ini.</p>
            </div>
        </div>
    )
}
export default HeroHome