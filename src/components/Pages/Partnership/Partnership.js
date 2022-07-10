import React from 'react';
import { Footer } from '../../Footer/Footer';
import { PartnershipFirstSection, Title , Description, LinkItem, Subtitle, PartnershipSection, SectionItem, ItemSubtitle, Hr} from './PartnershipStyle.js';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { MdMenuBook } from 'react-icons/md';
import { BsFillPeopleFill } from 'react-icons/bs';
import { GiPoland } from 'react-icons/gi';
import { RiEdit2Fill } from 'react-icons/ri';
import { VscDebugStart } from 'react-icons/vsc';

export const Partnership = () => {
  return (
    <>
      <PartnershipFirstSection>
        <Title>Dołącz do Gastronautów</Title>
        <Description>Portal, stworzony dla restauratorów i ich zamawiających</Description>
        <LinkItem  
          to=""
        >
          Zacznij teraz
        </LinkItem>
      </PartnershipFirstSection>
      <Subtitle>Dlaczego Gastronauci?</Subtitle>
      <PartnershipSection>
        <SectionItem>
          <AiOutlineClockCircle size={55} color="var(--primary)" />
          <ItemSubtitle>Uruchomienie nawet w 1 dzień</ItemSubtitle>
          <p>Zwiększymy Twoją sprzedaż w Sieci szybciej, niż inni odpiszą na Twojego maila</p>
        </SectionItem>
        <SectionItem>
          <FaMoneyBillAlt size={55} color="var(--primary)" />
          <ItemSubtitle>Niska, przejrzysta stawka</ItemSubtitle>
          <p>Nasza prowizja wynosi jedynie 5%. To prawie dwa razy mniej, niż w wypadku zagranicznych portali. Brak kosztów stałych, dodatkowych, lub aktywacyjnych.</p>
        </SectionItem>
        <SectionItem>
          <MdMenuBook size={55} color="var(--primary)" />
          <ItemSubtitle>Dowolność w edycji menu</ItemSubtitle>
          <p>Nie musisz czekać 2 tygodnie, na aktualizację menu. U nas możesz zrobić to "od ręki". Wprowadzimy dla Ciebie podstawowe menu oraz nauczymy Cię nim zarządzać.</p>
        </SectionItem>
        <SectionItem>
          <BsFillPeopleFill size={55} color="var(--primary)" />
          <ItemSubtitle>Budujesz bazę klientów</ItemSubtitle>
          <p>Z naszym modułem marketingowym zabezpieczysz się, przed utratą zamawiającego oraz zwiększysz skuteczność kampanii marketingowych.</p>
        </SectionItem>
        <SectionItem>
          <GiPoland size={55} color="var(--primary)" />
          <ItemSubtitle>Wspierasz polskie!</ItemSubtitle>
          <p>Jesteśmy polską firmą, stworzoną z własnych środków, nie zagranicznych inwestorów. Żyjemy w Polsce i tutaj płacimy podatki.</p>
        </SectionItem>
      </PartnershipSection>
      <Hr></Hr>
      <Subtitle>Jak rozpocząć współpracę?</Subtitle>
      <PartnershipSection>
        <SectionItem>
          <MdMenuBook size={55} color="var(--primary)" />
          <ItemSubtitle>Wprowadzamy Twoje menu</ItemSubtitle>
          <p>Skontaktuj się z nami dzwoniąc pod numer +48 123 456 789 lub wysyłając wiadomość na adres wspolpraca@gastronauci.pl w celu dostarczenia menu, a my wprowadzimy je i wrócimy z informacją w ciągu 24 godzin.</p>
        </SectionItem>
        <SectionItem>
          <RiEdit2Fill size={55} color="var(--primary)" />
          <ItemSubtitle>Skonfigurujemy system dla Ciebie</ItemSubtitle>
          <p>Otrzymasz dostęp do aplikacji, którą możesz używać na dowolnym urządzeniu z dostępem do Sieci - laptopie, tablecie i nawet komórce.</p>
        </SectionItem>
        <SectionItem>
          <VscDebugStart size={55} color="var(--primary)" />
          <ItemSubtitle>Zaczynamy!</ItemSubtitle>
          <p>Przeprowadzimy kampanię marketingową, aby Twoi klienci dowiedzieli się, jak łatwo mogą składać u Ciebie zamówienia.</p>
        </SectionItem>
      </PartnershipSection>
      <Footer/>
    </>
  )
}

