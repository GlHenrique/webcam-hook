import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { VideoContainer } from './components/VideoContainer';
import Styled from './App.styles';

const langs = ['en', 'es', 'pt-BR'];

const App = () => {
  const { i18n } = useTranslation();
  const [language, setLang] = useState(i18n.language);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLang(lang);
  };

  return (
    <div className='wrapper'>
      <Styled.TranslatorContainer>
        🌎
        <Styled.Select
          onChange={(e) => changeLanguage(e.target.value)}
          value={language}
        >
          {langs.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </Styled.Select>
      </Styled.TranslatorContainer>
      <VideoContainer />
    </div>
  );
};

export default App;
