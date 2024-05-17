const greeting = () => {
    const time = new Date().getHours();
    let greet = ''
    if (time < 12) {
        greet = "Good Morning"
    }
    else if (time >= 12 && time < 17) {
        greet = "Good Afternoon"
    }
    else {
        greet = "Good Evening"
    }
    return `${greet}, Welcome`
}

export const HomePage = () => {
    return (
        <div className="relative min-h-screen isolate overflow-hidden pt-14">
            <img
                src="https://media.licdn.com/dms/image/D5612AQEN4dV-DgLwNA/article-cover_image-shrink_600_2000/0/1690814547641?e=2147483647&v=beta&t=qU7ECD33uYKDYm0TVqj3p-Hcia9t4n_i7ztjUnATawM"
                alt="bg"
                className="absolute inset-0 -z-10 h-screen w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-black opacity-50"></div>
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="mx-auto  max-w-4xl py-32 sm:py-48 lg:py-56">
                <div className="text-center text-white space-y-6 px-4 ">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        {greeting()}
                    </h1>
                    <p className="text-2xl mb-8 font-semibold leading-8 text-white">
                        Empowering education through seamless management and innovative solutions.
                    </p>
                    <div className="flex py-12 justify-center">
                        <p className="bg-white text-black p-2 rounded-lg hover:bg-gray-600 hover:text-white">Get Started</p>
                    </div>
                </div>
            </div>
            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </div>
    )
}