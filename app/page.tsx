import { CarouselDemo } from "@/components/Carousel";
import Link from "next/link";
import Image from "next/image";
import * as React from "react";

export default function Home() {
  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="flex-center min-h-screen w-full flex max-md:flex-col-reverse max-md:nav-padding">
        <div className="flex-start relative min-h-[250px] w-full flex-col rounded-xl text-center">
          <h3 className="sm:body-reguler body-medium mb-6 text-start bg-black-300 x-paddings p-3 rounded-md text-teal-400">
            Frontend Developer
          </h3>
          <h1 className="sm:heading2 body-reguler mb-6 text-start w-full text-white max-lg:w-[400px] max-lg:heading3">
            Selamat Datang di Jasa Pembuatan Website Profesional
          </h1>
          <p className="body-reguler mb-6 text-start w-full text-gray-400">
            Solusi Profesional untuk Bisnis Pribadi Anda. Selamat datang di Ryo
            Jasa Pembuatan Website, tempat di mana visi online Anda menjadi
            kenyataan. Saya adalah mitra yang dapat diandalkan untuk membantu
            Anda, sebagai individu, membangun keberadaan online yang menarik dan
            efektif. Dengan fokus pada kebutuhan dan tujuan pribadi Anda, saya
            berkomitmen untuk memberikan layanan terbaik yang sesuai dengan
            anggaran Anda.
          </p>
          <Link
            href="https://wa.me/6285648983077?text=bisa%20konsultasi%20terkait%20website?"
            target="_blank"
            className="bg-black-300 rounded-md p-3 hover:bg-black-400 text-teal-400 body-text"
          >
            Mulai Ngobrol
          </Link>
        </div>
        <div className="flex-start mx-auto bg-black-400 rounded-full mb-6 px-12 w-full">
          <Image
            src="/logo.jpg"
            width={500}
            height={500}
            alt={"ryosaputra"}
            quality={60}
            loading="lazy"
          />
        </div>
      </section>
      {/* {About Section} */}
      <section
        className="flex-between nav-padding w-full max-w-screen-2xl max-md:flex-col flex-start"
        id="about"
      >
        <div className="flex-start mr-[0.5rem] flex-col padding w-full">
          <div className="flex-start paddings bg-black-400 shadow-lg shadow-black-300 flex-col mb-6 rounded-2xl w-full max-lg:w-[400px]">
            <h1 className="text-teal-400 sm:base-bold mb-6">Desain Kreatif</h1>
            <p>
              Saya menciptakan desain website yang menarik dan sesuai dengan
              identitas Anda.
            </p>
          </div>
          <div className="flex-start paddings bg-black-400 flex-col mb-6 rounded-2xl w-full max-lg:w-[400px]">
            <h1 className="text-teal-400 sm:base-bold mb-6">
              Website Responsif
            </h1>
            <p>
              Website saya dioptimalkan untuk pengalaman pengguna yang mulus di
              semua perangkat.
            </p>
          </div>
          <div className="flex-start paddings bg-black-400 flex-col mb-6 rounded-2xl w-full max-lg:w-[400px]">
            <h1 className="text-teal-400 sm:base-bold mb-6">Optimisasi SEO</h1>
            <p>
              Saya membantu meningkatkan visibilitas online bisnis Anda melalui
              strategi SEO yang efektif.
            </p>
          </div>
        </div>
        <div className="flex-between ml-[3.5rem] w-full max-w-screen-2xl max-lg:flex-col flex-start mobile-visible">
          <div className="flex-start relative w-full flex-col rounded-xl text-center max-lg:flex-col">
            <h3 className="sm:body-reguler body-medium mb-6 text-start rounded-md text-teal-400 max-lg:body-regular">
              Perkenalkan
            </h3>
            <h1 className="sm:heading2 body-reguler mb-6 text-start w-[800px] text-white max-lg:heading3 body-reguler">
              Hallo! Saya Ryo Saputra
            </h1>
            <h1 className="sm:base-regular body-reguler mb-6 text-start w-[800px] text-white">
              Mengapa Memilih Ryo Jasa Pembuatan Website?
            </h1>
            <p className="body-text mb-6 text-start w-[500px] text-gray-400 max-lg:w-[350px]">
              Saya adalah seorang profesional dengan perhatian besar pada
              detail. Saya mengerti bahwa sebagai individu, Anda memiliki
              kebutuhan yang unik. Itulah mengapa saya mengambil pendekatan yang
              sangat personal dalam setiap proyek, memastikan bahwa setiap
              detail sesuai dengan keinginan dan ekspektasi Anda.
            </p>
          </div>
        </div>
      </section>
      {/* Portofolio */}
      <section
        className="flex flex-row nav-padding w-full max-w-screen-2xl max-lg:flex-col"
        id="portfolio"
      >
        <div className="flex-col">
          <h1 className="sm:heading2 body-reguler mb-6 text-start w-[800px] text-white max-lg:heading3">
            Portfolio
          </h1>
          <p className="body-text mb-6 text-start w-[600px] text-gray-400 max-lg:w-[350px]">
            Lihat Hasil Kerja Saya Saya bangga dengan hasil kerja saya dan ingin
            Anda juga melihatnya. Telusuri portofolio saya untuk melihat beragam
            proyek yang telah saya selesaikan untuk berbagai klien individu.
            Saya yakin, portofolio saya akan menginspirasi Anda untuk
            mempercayakan proyek website Anda kepada saya.
          </p>
          <Link
            href="https://wa.me/6285648983077?text=bisa%20konsultasi%20terkait%20website?"
            target="_blank"
            className="sm:base-regular body-reguler text-start w-[800px] text-teal-400"
          >
            Semua Proyek
          </Link>
        </div>
        <CarouselDemo />
      </section>
      {/* hubungi kami */}
      <section
        className="flex flex-col nav-padding w-full max-w-screen-2xl"
        id="hubungikami"
      >
        <div className="flex-between max-lg:flex-col flex-start">
          <div className="flex-col w-full">
            <h1 className="sm:heading2 y-paddings max-lg:heading3">Hubungi Saya</h1>
            <p className="w-[400px] text-gray-400 max-lg:w-[350px]">
              Jadikan Saya Mitra Digital Anda Jangan ragu untuk menghubungi saya
              untuk mendiskusikan ide dan kebutuhan Anda. Saya siap membantu
              mewujudkan visi online Anda menjadi kenyataan. Mulailah langkah
              pertama menuju kesuksesan online dengan menghubungi saya hari ini.
            </p>
          </div>
          <div className="flex-col flex-start leading-9 y-paddings">
            <p className="sm:heading3 bosy-regular mb-6 max-lg:heading3">Informasi</p>
            <h3 className="w-full text-gray-400 mb-6 max-lg:w-[350px]">
              Jl. Puntadewa No.12, Bunton, Sidorahayu, Kec. Wagir, Kabupaten
              Malang, Jawa Timur 65158
            </h3>
            <ul className="flex-start flex-col max-md:hidden md:gap-x-10">
              <li className="body-text text-teal-400 mb-3 !font-bold">
                <Link href="#about">Tentang saya</Link>
              </li>
              <li className="body-text !font-normal mb-3 hover:text-teal-400">
                <Link href="#portfolio">Portofolio</Link>
              </li>
              <li className="body-text !font-normal mb-3 hover:text-teal-400">
                <Link href="#hubungikami">Hubungi saya</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
