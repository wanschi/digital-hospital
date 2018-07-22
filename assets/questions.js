import {
  signIn,
  signOut
} from '../redux/Auth'

const ANSWERTYPE = {
  BUTTON: 'Button',
  TEXT: 'Text',
}

const questions = [{
    currentQuestion: 10
  },
  {
    question: "Willkommen in der App des Unfallkrankenhauses Berlin (ukb). Um Ihren Aufenthalt so angenehm wie möglich zu machen würden wir Ihnen gerne vorab ein paar Fragen stellen.",
    answerType: ANSWERTYPE.BUTTON,
    answers: [{
      type: ANSWERTYPE.BUTTON,
      text: 'Verstanden',
      nextQuestion: 2,
    }]
  },
  {
    question: "Kommen Sie als Patient (stationär mit Voruntersuchung, ambulant ohne oder mit Voruntersuchung) oder als Besucher zu uns?",
    answerType: ANSWERTYPE.TEXT,
    answers: [{
      type: ANSWERTYPE.BUTTON,
      text: 'Ambulant',
      nextQuestion: 1,
    }, {
      type: ANSWERTYPE.BUTTON,
      text: 'Stationär',
      nextQuestion: 3,
    }, {
      type: ANSWERTYPE.BUTTON,
      text: 'Besucher',
      nextQuestion: 1,
      onPressFunction: [signOut(), signIn()]
    }, ]
  },
  {
    question: "Einige Medikamente können die Blutgerinnung oder die Narkose beeinflussen. Daher fragen wir Sie, ob sie einige Medikamente nehmen und geben Ihnen weitere Informationen.",
    answerType: ANSWERTYPE.TEXT,
    answers: [{
      type: ANSWERTYPE.BUTTON,
      text: 'Verstanden',
      nextQuestion: 4,
    }]
  },
  {
    question: "Nehmen Sie Medikamente mit ASS (Acetylsalicylsäure, z.B. Aspirin, Herz ASS, Thomapyrin, Kombinationsschmerzmnittel)?",
    answerType: ANSWERTYPE.TEXT,
    answers: [{
      type: ANSWERTYPE.BUTTON,
      text: 'Ja',
      nextQuestion: 5,
    }, {
      type: ANSWERTYPE.BUTTON,
      text: 'Nein',
      nextQuestion: 5,
    }]
  },
  {
    question: "Nehmen Sie Medikamente mit Clopidogrel, Prasugrel oder Ticagrelor (z.B. Isocover, Plavix, Efient, Brilique)?",
    answerType: ANSWERTYPE.TEXT,
    answers: [{
      type: ANSWERTYPE.BUTTON,
      text: 'Ja',
      nextQuestion: 6,
    }, {
      type: ANSWERTYPE.BUTTON,
      text: 'Nein',
      nextQuestion: 6,
    }]
  },
  {
    question: "Nehmen Sie Medikamtente mit Phenprocoumon (z.B. Marcumar, Falithrom)?",
    answerType: ANSWERTYPE.TEXT,
    answers: [{
      type: ANSWERTYPE.BUTTON,
      text: 'Ja',
      nextQuestion: 7,
    }, {
      type: ANSWERTYPE.BUTTON,
      text: 'Nein',
      nextQuestion: 7,
    }]
  },
  {
    question: "Nehmen Sie Medikamtente mit Rivaroxaban, Apixaban, Dabigatran (z.B. Xarelto, Eliquis, Pradaxa)?",
    answerType: ANSWERTYPE.TEXT,
    answers: [{
      type: ANSWERTYPE.BUTTON,
      text: 'Ja',
      nextQuestion: 8,
    }, {
      type: ANSWERTYPE.BUTTON,
      text: 'Nein',
      nextQuestion: 8,
    }]
  },
  {
    question: "Nehmen Sie Medikamtente mit Metformin (z.B. Glucophage, Siofor, Disbesin)?",
    answerType: ANSWERTYPE.TEXT,
    answers: [{
      type: ANSWERTYPE.BUTTON,
      text: 'Ja',
      nextQuestion: 9,
    }, {
      type: ANSWERTYPE.BUTTON,
      text: 'Nein',
      nextQuestion: 9,
    }]
  },
  {
    question: "Nehmen Sie Medikamtente mit Glibenclamid, Glinide, Gliptine (z.B. Euglucon, Maninil, Starlix, NovoNorm, Januvia, Galvus)?",
    answerType: ANSWERTYPE.TEXT,
    answers: [{
      type: ANSWERTYPE.BUTTON,
      text: 'Ja',
      nextQuestion: 10,
    }, {
      type: ANSWERTYPE.BUTTON,
      text: 'Nein',
      nextQuestion: 10,
    }]
  },
  {
    question: "Haben Sie bereits einen Termin zur Voruntersuchung vereinbart?",
    answerType: ANSWERTYPE.TEXT,
    answers: [{
      type: ANSWERTYPE.BUTTON,
      text: 'Ja',
      nextQuestion: 1,
      onPressFunction: [signOut(), signIn()]
    }, {
      type: ANSWERTYPE.BUTTON,
      text: 'Nein',
      onPressFunction: [signOut(), signIn()]
    }]
  }
]

export default questions;





// {
//   question: 'Welche <b>Immobilie</b> möchten Sie bewerten lassen?',
//   skipable: 'false',
//   answers: [{
//       text: 'Haus bewerten',
//       value: 'House',
//       nextQuestion: 1,
//       answerPath: 'type'
//     },
//     {
//       text: 'Wohnung bewerten',
//       value: 'Flat',
//       nextQuestion: 12,
//       answerPath: 'type'
//     }
//   ]
// },
