import React from 'react';
import { Footer } from '../../Footer/Footer';
import { PartnershipFirstSection, Title , Description, LinkItem, Subtitle, PartnershipSecondSection, SectionItem, ItemSubtitle} from './PartnershipStyle.js';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { MdMenuBook } from 'react-icons/md';
import { BsFillPeopleFill } from 'react-icons/bs';
import { GiPoland } from 'react-icons/gi';

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
      <PartnershipSecondSection>
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
      </PartnershipSecondSection>
      <Footer/>
    </>
    
      
    
  )
}

