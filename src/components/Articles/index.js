import React from 'react';
import imgpost1 from '../../assets/img/img-post-1.png';
import imgpost2 from '../../assets/img/img-post-2.png';
import imgpost3 from '../../assets/img/img-post-3.png';
import imgpost4 from '../../assets/img/img-post-4.png';
import {
    ArticlesContainer,
    ArticlesTop,
    ArticlesTitle,
    ArticlesDsc,
    ArticlesBottom,
    ArticlesContent,
    ArticlesImg,
    ContentTitle,
    ContentDsc
} from './ArticlesElements';

const Articles = () => {
    return (
        <ArticlesContainer id="artikel">
            <ArticlesTop>
                <ArticlesTitle>Triasse Artikel</ArticlesTitle>
                <ArticlesDsc>Artikel terbit tiap Minggu</ArticlesDsc>
            </ArticlesTop>
            <ArticlesBottom>
                <ArticlesContent>
                    <ArticlesImg src={imgpost1} alt='articles1' />
                    <ContentTitle>Rapid test Covid-19 sekarang, bayar dengan EMPATKALI</ContentTitle>
                    <ContentDsc>
                        Untuk menjaga kesehatan bersama, Triasse kini menyediakan Rapid Test Covid-19 
                        melawan virus corona. Rapid Test Covid-19 dari Triasse ini memberikan hasil 
                        dengan akurasi 95 persen, dan prosesnya tesnya dilakukan oleh petugas medis. 
                        </ContentDsc>
                </ArticlesContent>
                <ArticlesContent>
                    <ArticlesImg src={imgpost2} alt='articles2' />
                    <ContentTitle>Apa itu meningitis? Semua yang Perlu Anda Tahu</ContentTitle>
                    <ContentDsc>
                    Penyakit ini merupakan kondisi serius yang menyebabkan lapisan 
                    di sekitar otak dan sumsum tulang belakang mengalami peradangan. Anak-anak, remaja, 
                    memiliki risiko yang paling besar, meskipun kondisi ini juga dapat 
                    menimpa orang dewasa.
                    </ContentDsc>
                </ArticlesContent>
                <ArticlesContent>
                    <ArticlesImg src={imgpost3} alt='articles3' />
                    <ContentTitle>Telat Haid: Gejala, Penyebab, dan cara mengatasinya</ContentTitle>
                    <ContentDsc>
                    Menstruasi, haid atau datang bulan adalah perubahan fisiologis dalam tubuh 
                    wanita yang terjadi secara berkala dan dipengaruhi oleh hormon reproduksi baik 
                    FSH-Estrogen atau LH-Progesteron. Periode ini penting dalam hal reproduksi.
                    </ContentDsc>
                </ArticlesContent>
                <ArticlesContent>
                    <ArticlesImg src={imgpost4} alt='articles4' />
                    <ContentTitle>Ingin Sukses? Ketahui 6 Tips Malam Pertama ini</ContentTitle>
                    <ContentDsc>
                    Bagi pasangan yang baru menikah, malam pertama adalah hal yang paling 
                    dinantikan. Namun, apakah Anda sudah tahu tips malam pertama paling ampuh demi memuaskan pasangan?
                    Triasse mengutip artikel dari buku yang ditulis oleh Susan Crain Bakos.
                    </ContentDsc>
                </ArticlesContent>
            </ArticlesBottom>
        </ArticlesContainer>
    )
}

export default Articles
