export function splitSentencesAfterClosingQuotationMark(content: string): string {
  return content
    .replace(/ {2}/g, ' ')
    .split('»')
    .map((sentence, index) => {
      if (index === 0) {
        return sentence;
      }

      if (sentence && sentence.startsWith('\n\n')) {
        return sentence;
      }

      if (sentence && sentence.startsWith('\n')) {
        return `\n${sentence}`;
      }

      if (sentence && sentence.startsWith(' ')) {
        return `\n\n${sentence}`;
      }

      return sentence;
    })
    .join('»')
    .replace(/» \n\n/g, '»\n\n');
}

export function splitSentencesOnStartOfQuotationMark(content: string): string {
  let previousSentence = '';

  return content
    .replace(/ {2}/g, ' ')
    .split(' :')
    .map((sentence, index) => {
      if (index === 0) {
        previousSentence = sentence;
        return sentence;
      }

      if (sentence && sentence.startsWith('\n\n')) {
        previousSentence = sentence;
        return sentence;
      }

      if (sentence && sentence.startsWith('\n')) {
        previousSentence = sentence;
        return `\n${sentence}`;
      }

      const lastTenWords = takeLastTenWordsOf(previousSentence);
      const isStartOfQuotation = isHintForStartOfQuotation(lastTenWords);
      const hasNotAlreadyBeenSplitted = !sentence.trim().startsWith('> ');
      if (sentence && sentence.startsWith(' ') && isStartOfQuotation && hasNotAlreadyBeenSplitted) {
        previousSentence = sentence;
        return `\n\n> ${sentence.trimLeft()}`;
      }

      previousSentence = sentence;
      return sentence;
    })
    .join(' :')
    .replace(/: \n\n/g, ':\n\n');
}

function takeLastTenWordsOf(content: string) {
  const words = content.split(' ');
  if (words.length < 15) {
    return content;
  }

  const numberOfWords = words.length;
  return words.filter((_word, index) => index >= numberOfWords - 15).join(' ');
}

const startOfQuotationRegex =
  /fit dire|firent dire|répétant| cri |cria|bénit|dirent|parla|de dire|une lettre|à parler|proclama|reprit|en répétant|appela|écrié|en disant|crier|criant|criait|Le prince dit|, dit| dit|en criant|s’écrièrent|leur disant|leur parla|en lui disant|disait|, disant|en ces mots|se disant|et disant|un dit|et dit|lui dire|et ajouta|ajoutant|Il adressa ainsi la parole|se dit|dit au|dit en se|dit devant|il demanda à|demanda aux|lui demanda|leur demanda|demanda à|lui demanderai|Il dit|ils dirent|Puis, il dit|et lui dit|Ensuite il dit|Ensuite, il dit|et il dit|a dit|et dit|Puis il dit|il se dit|il dit à|dit aux|dit en lui-même|Le roi dit à|il dit aux|dit à|lui dit|se dirent|lui dirent|lui diras|leur dit|dis-lui|répondit|répondre|ils s’écrièrent|en s’écriant|s’écria|ajouta en s’adressant|discours|la réponse|parla ainsi|envoya son salut|reprend|répliqua|apparut en|ces paroles|réponse|adressa|en ces termes|célébrer|voix s’éleva|parole|fit des questions|fit entendre|prononcer|la voix|demanda|message/i;

function isHintForStartOfQuotation(content: string): boolean {
  if (!content) {
    return false;
  }

  if (content.match(startOfQuotationRegex)) {
    return true;
  }

  return false;
}

export function spanQuotationMark(content: string): string {
  if (!content.includes('»')) {
    return content;
  }

  return content
    .replace(/ {2}/g, ' ')
    .split('»')
    .map((sentence, index) => {
      if (index % 1 === 0) {
        return addQuotationMarker(sentence);
      }
      return sentence;
    })
    .join('»');
}

function addQuotationMarker(content: string) {
  const blocs = content.split('\n\n> ');
  const lastIndex = blocs.length - 1;
  if (lastIndex <= 0) {
    return content;
  }

  return blocs
    .map((sentence, index) => {
      if (index !== lastIndex) {
        return sentence;
      }
      return sentence.replace(/\n\n/g, '\n>\n> ');
    })
    .join('\n\n> ');
}
