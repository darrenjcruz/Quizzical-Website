/*
Quesiton Objects & Quiz Objects created for the purpose of making a singular quiz page that would dynamically change
depending on the quiz chosen. Could not get it to work.
*/

import "./Project1\Quizzes\quiz_functions.js";

//Addition Quiz
var question1 = new Question("1 + 6", ["1", false], ['6', false], ['7', true], ['5', false]);
var question2 = new Question('6 + 4', ['10', true], ['2', false], ['8', false], ['12', false]);
var question3 = new Question('29 + 18', ['37', false], ['47', true], ['45', false], ['34', false]);
var question4 = new Question('16 + 8', ['26', false], ['34', false], ['20', false], ['24', true]);
var question5 = new Question('12 + 7', ['15', false], ['20', false], ['19', true], ['5', false]);
var question6 = new Question('51 + 15', ['66', true], ['56', false], ['65', false], ['99', false]);
var question7 = new Question('25 + 75', ['95', false], ['100', true], ['80', false], ['30', false]);
var question8 = new Question('33 + 44',  ['74', false], ['89', false], ['67', false], ['77', true]);
var question9 = new Question('45 + 105', ['137', false], ['150', true], ['47', false], ['125', false]);
var question10 = new Question('0 + 1', ['10', false], ['11', false], ['0', false], ['1', true]);
var quiz_questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
const addition_quiz = new Quiz("Addition Quiz", "Add them up!", quiz_questions);

//Multiplication Quiz
var question1 = new Question("8 X 3", ["32", false], ['9', false], ['16', false], ['24', true]);
var question2 = new Question('9 X 9', ['72', false], ['81', true], ['99', false], ['90', false]);
var question3 = new Question('12 X 8', ['144', false], ['88', false], ['96', true], ['48', false]);
var question4 = new Question('3 X 33', ['99', true], ['11', false], ['96', false], ['66', false]);
var question5 = new Question('2 X 17', ['35', false], ['54', false], ['34', true], ['51', false]);
var question6 = new Question('4 X 25', ['100', true], ['75', false], ['80', false], ['125', false]);
var question7 = new Question('7 X 7', ['77', false], ['54', false], ['63', false], ['49', true]);
var question8 = new Question('5 X 20',  ['80', false], ['125', false], ['250', false], ['100', true]);
var question9 = new Question('9 X 6', ['60', false], ['54', true], ['63', false], ['53', false]);
var question10 = new Question('7 X 8', ['45', false], ['63', false], ['65', false], ['56', true]);
var quiz_questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
const multiplication_quiz = new Quiz("Multiplication Quiz", "Do you know your time tables", quiz_questions);

//Subtraction Quiz
var question1 = new Question("15 - 3", ["12", true], ['9', false], ['18', false], ['8', false]);
var question2 = new Question('45 - 54', ['0', false], ['-9', true], ['9', false], ['6', false]);
var question3 = new Question('18 - 13', ['31', false], ['12', false], ['5', true], ['9', false]);
var question4 = new Question('10 - 4', ['10', false], ['5', false], ['4', false], ['6', true]);
var question5 = new Question('67 - 29', ['40', false], ['53', false], ['38', true], ['48', false]);
var question6 = new Question('-10 - 1', ['-9', false], ['-11', true], ['9', false], ['10', false]);
var question7 = new Question('65 - -17', ['82', true], ['48', false], ['33', false], ['59', false]);
var question8 = new Question('150 - 63',  ['77', false], ['87', true], ['67', false], ['76', false]);
var question9 = new Question('-37 - -45', ['82', false], ['13', false], ['12', true], ['-82', false]);
var question10 = new Question('0 - 1', ['0', false], ['1', false], ['11', false], ['-1', true]);
var quiz_questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
const Subtraction_quiz = new Quiz("Subtraction Quiz", "Hope you take away something.", quiz_questions);

//US History Quiz
var question1 = new Question("Which US Political party is known as the Grand Old Party?", ["Reform Party", false], ['Republican Party', true], ['Democratic Party', false], ['Libertarian Party', false]);
var question2 = new Question('Which US president signed the Equal Pay Act, which mandated equal pay for equal work?', ['Lyndon B. Johnson', false], ['Dwight D. Eisenhower', false], ['Franklin D. Roosevelt', false], ['John F. Kennedy', true]);
var question3 = new Question('Which of these is the oldest institution of higher learning in the United States?', ['Yale University', false], ['Harvard University', true], ['Princton University', false], ['College of William & Mary', false]);
var question4 = new Question('In the US Presidential election of 1968, which Democratic candidate did Richard Nixon defeat?', ['Eugene McCarthy', false], ['Hubert Humphrey', true], ['Lyndon B. Johnson', false], ['Robert F. Kennedy', false]);
var question5 = new Question('In Which American organization did female pilots serve during World War II?', ['WAVES', false], ['WASP', true], ['WPA', false], ['WAC', false]);
var question6 = new Question('Which of these US states was the first in the country to grant women the right to vote?', ['California', false], ['Wyoming', true], ['Illinois', false], ['Washington', false]);
var question7 = new Question('How many versions did the American flag have?', ['9', false], ['19', false], ['27', true], ['34', false]);
var question8 = new Question('Which Massachusetts infantry unit, made up of African Americans, was famous for its fighting prowess and exceptional courage during the American Civil War?',  ['2nd Regiment', false], ['26th Regiment', false], ['54th Regiment', true], ['94th Regiment', false]);
var question9 = new Question('In 1987, "The Stars and Stripes Forever" was designated as the official march of the United States. Who composed it?', ['Scott Joplin', false], ['John Philip Sousa', true], ['Keith Brion', false], ['Karl King', false]);
var question10 = new Question('Who was the first American woman to travel into outer space?', ['Sally Ride', true], ['Eileen Collins', false], ['Mae Jemison', false], ['Anne McClain', false]);
var quiz_questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
const US_History_quiz = new Quiz("US History", "Do you know your history?", quiz_questions);

//Civil War Quiz
var question1 = new Question("Who commanded an African American regiment from a Northern state during the American Civil War?", ["William H. Carney", false], ['Frederick Douglass', false], ['Robert Gould Shaw', true], ['William Lloyd Garrison', false]);
var question2 = new Question('Where did Confederate General Robert E. Lee surrender to Union General Ulysses S. Grant at the end of the Civil War?', ['Point of Honor', false], ['Appomattox Court House', true], ['Anne Spencer House', false], ['The White House', false]);
var question3 = new Question('Who led the raid on Harpers Ferry in 1859, an event that was instrumental in heightening the animosities that led to the American Civil War?', ['Charles Sumner', false], ['Stephen A. Douglas', false], ['Henry Clay', false], ['John Brown', true]);
var question4 = new Question('In what year was Abraham Lincoln assassinated?', ['1861', false], ['1864', false], ['1862', false], ['1865', true]);
var question5 = new Question('Which era immediately followed the American Civil War?', ['Reconstruction', true], ['Renaissance', false], ['Gilded Age', false], ['Reformation', false]);
var question6 = new Question('Which of these US states was the first in the country to grant women the right to vote?', ['California', false], ['Wyoming', true], ['Illinois', false], ['Washington', false]);
var question7 = new Question('How many states were there in the Confederate States of America?', ['5', false], ['9', false], ['11', true], ['14', false]);
var question8 = new Question('Which of these ships fought in the first battle between ironclads?',  ['Pinafore', false], ['Lusitania', false], ['Titanic', false], ['Monitor', true]);
var question9 = new Question('Under which legislation was the South divided into five military districts after the war?', ['Alien and Sedition Acts', false], ['Reconstruction Acts', true], ['Pacific Railway Acts', false], ['Civil Rights Act', false]);
var question10 = new Question('Which amendment guaranteed civil and legal rights to African Americans and enslaved persons who were emancipated after the American Civil War?', ['Tenth Amendment', false], ['Sixteenth Amendment', false], ['Twelfth Amendment', false], ['Fourteenth Amendment', true]);
var quiz_questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
const Civil_War_quiz = new Quiz("Civil War", "Don't be divided.", quiz_questions);

//US Presidents Quiz
var question1 = new Question("Which US president, after his presidency, served as the chief justice of the United States?", ["Calvin Coolidge", false], ['William McKinley', false], ['Franklin Pierce', false], ['William H. Taft', true]);
var question2 = new Question('George W. Bush was governor of which state before becoming the President?', ['Texas', true], ['Arkansas', false], ['California', false], ['Ohio', false]);
var question3 = new Question('Which US president drafted the first ten amendments to the Constitution?', ['Franklin D. Roosevelt', false], ['Zachary Taylor', false], ['Thomas Jefferson', false], ['James Madison', true]);
var question4 = new Question('Which US president was dubbed as "His Accidency" by his opponent?', ['John Adams', false], ['James Monroe', false], ['John Tyler', true], ['Martin Van Buren', false]);
var question5 = new Question('Which US president enacted a law allowing female attorney to practice in the Supreme Court?', ['Richard Nixon', false], ['Rutherford B. Hayes', true], ['John Quincy Adams', false], ['Herbert Hoover', false]);
var question6 = new Question('How many US presidents have served more than two terms?', ['3', false], ['4', false], ['2', false], ['1', true]);
var question7 = new Question('What government office was first held by Thomas Jeffereson before being elected as the president of the United States?', ['Secretary of the Interior', false], ['Secretary of Defense', false], ['Secretary of Labor', false], ['Secretary of State', true]);
var question8 = new Question('In which year did Theodore Roosevelt win the Nobel Peace Prize?',  ['1912', false], ['1925', false], ['1919', false], ['1906', true]);
var question9 = new Question('Which US president signed the Louisiana Purchase?', ['George Washington', false], ['Thomas Jefferson', true], ['James K. Polk', false], ['John Adams', false]);
var question10 = new Question('Who was named president after Abraham Lincoln was assassinated?', ['Ulysses S. Grant', false], ['Theodore Roosevelt', false], ['Andrew Johnson', true], ['Grover Cleveland', false]);
var quiz_questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
const US_Presidents_quiz = new Quiz("US Presidents", "The president did what?", quiz_questions);

//Shakespeare Quiz
var question1 = new Question("The writings of which man acted as the main source of historical material for many Elizabethan playwrights, including Shakespeare?", ["Sir Thomas North", false], ['Edward Hall', false], ['Raphael Holinshed', true], ['Henry Ellis', false]);
var question2 = new Question('Which was the first play on Roman themes written by Shakespeare?', ['Titus Andronicus', true], ['Coriolanus', false], ['Julius Caesar', false], ['Antony and Cleopatra', false]);
var question3 = new Question('In which play by Shakespeare do witches play an important role?', ['King Lear', false], ['Hamlet', false], ['Macbeth', true], ['Othello', false]);
var question4 = new Question('Between whom does a "merry war" of words go on in Shakespeares Much Ado About Nothing?', ['Benedick and Beatrice', true], ['Dogberry and Don Pedro', false], ['Hero and Claudio', false], ['Helena and Bertram', false]);
var question5 = new Question('In which of the following plays by Shakespeare does the character Claudius appear?', ['The Tempest', false], ['Hamlet', true], ['Macbeth', false], ['King Lear', false]);
var question6 = new Question('In which of Shakespeares plays does the group of clowns Feste, Malvolio, Sir Toby Belch, and Sir Andrew Aguecheek appear?', ['As You Like It', false], ['Macbeth', false], ['Comedy of Errors', false], ['Twelfth Night', true]);
var question7 = new Question('Which play by Shakespeare opens with these words: "If music be the food of love, play on"?', ['Loves Labours Lost', false], ['King Lear', false], ['Hamlet', false], ['Twelfth Night', true]);
var question8 = new Question('Which historical character created by Shakespeare boasts that he can "set murtherous Machevil to school"?',  ['Henry VI', false], ['Richard II', false], ['Richard, duke of Gloucester', true], ['Henry V', false]);
var question9 = new Question('In which of the following plays by Shakespeare does the comic character Falstaff appear?', ['Henry IV, Part 1 and Henry IV, Part 2', true], ['As You Like It', false], ['Antony and Cleopatra', false], ['Richard III', false]);
var question10 = new Question('Which of these plays by Shakespeare uses a statue to reveal a most dramatic secret?', ['Timon of Athens', false], ['The Winters Tale', true], ['King Lear', false], ['Hamlet', false]);
var quiz_questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
const Shakespeare_quiz = new Quiz("Shakespeare", "To be, or not to be? That is the question.", quiz_questions);

//SAT Vocabulary Quiz
var question1 = new Question("Despite the 'cacophony', the student tried to study.", ["Loud sounds", true], ['Late hour', false], ['Low lighting', false], ['Difficult subject', false]);
var question2 = new Question('The directors latest movie has a "redoubtable" cast.', ['Celebrated', true], ['Inexperienced', false], ['Small in number', false], ['Great in number', false]);
var question3 = new Question('Shes very "punctilious about grammar.', ['Precise', true], ['Forgetful', false], ['Unconcerned', false], ['Lazy', false]);
var question4 = new Question('The young man enjoyed only "ephemeral" pleasures.', ['Temporary', true], ['Wholesome', false], ['Intellectual', false], ['Nighttime', false]);
var question5 = new Question('The "demagogue" easily captured everyones attention.', ['Provocative politician', true], ['Athletics instructor', false], ['Street musician', false], ['Exotic animal', false]);
var question6 = new Question('The website has "galvanized" support for the project.', ['Questioned', false], ['Stimulated', true], ['Crushed', false], ['Disclosed', false]);
var question7 = new Question('Rediscovering the diary she kept as a teen, she found some entries "mawkish".', ['Hard to decipher', false], ['Prophetic', false], ['Insightful', false], ['Overly sentimental', true]);
var question8 = new Question('The boss "upbraided" her employees.',  ['Scolded', true], ['Downsized', false], ['Promoted', false], ['Relocated', false]);
var question9 = new Question('The waiter answered questions about the menu "brusquely".', ['Enthusiastically', false], ['In execssive detail', false], ['Rudely short', true], ['With a foreign accent', false]);
var question10 = new Question('The first time she met her future husband was "serendipity".', ['Unremarkable', false], ['Lucky happenstance', true], ['Carefully arranged', false], ['Did not go well', false]);
var quiz_questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
const SAT_Vocabulary_quiz = new Quiz("SAT Vocabulary", "Study to get a 800 on English", quiz_questions);

//Grammar Quiz
var question1 = new Question("In which figure of speech, a striking opposition or contrast of words is made in the same sentence to secure emphasis?", ["Diction", false], ['Apologues', false], ['Hubris', false], ['Antithesis', true]);
var question2 = new Question('Which figure of speech is characterized by the deliberate omission of a word or words?', ['Imagery', false], ['Neologism', false], ['Malapropism', false], ['Ellipsis', true]);
var question3 = new Question('In grammar, what is the name of a word for a peson, place, or thing?', ['Adverb', false], ['Noun', true], ['Adjective', false], ['Verb', false]);
var question4 = new Question('What is the plural form of the word "goose"?', ['Gouse', false], ['Geese', true], ['Geeses', false], ['Gooses', false]);
var question5 = new Question('What is the plural form of the word "moose"?', ['Moose', true], ['Moos', false], ['Meese', false], ['Mooses', false]);
var question6 = new Question('What type of syllable ends with a vowel?', ['Open syllable', true], ['Closed syllable', false], ['Consonant-le syllable', false], ['Diphthong syllable', false]);
var question7 = new Question('In grammar, what is the name of a word that adds meaning to the basic meaning of the main verb?', ['Auxiliary verb', true], ['Intransitive verb', false], ['Stative verb', false], ['Transitive verb', false]);
var question8 = new Question('In the sentence "John kicked the football across the yard," what is the verb?',  ['John', false], ['football', false], ['across', false], ['kicked', true]);
var question9 = new Question('What word describes the formation of a word by changing the base or by adding a prefix or a suffix?', ['Inflection', false], ['Derivation', true], ['Exposition', false], ['Harangue', false]);
var question10 = new Question('What is a word or a group of words that is self-contradicting called?', ['Synedoche', false], ['Oxymoron', true], ['Antithesis', false], ['Litotes', false]);
var quiz_questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
const Grammar_quiz = new Quiz("Grammar", "You can do it?", quiz_questions);

//Periodic Table Quiz
var question1 = new Question("What is the chemical element for the symbol O?", ["Oganesson", false], ['Oxygen', true], ['Molybdenum', false], ['Osmium', false]);
var question2 = new Question('What is the checmial element for the symbol Cr?', ['Cobalt', false], ['Copernicium', false], ['Carbon', false], ['Chromium', true]);
var question3 = new Question('What is the chemical element for the symbol F?', ['Iron', false], ['Francium', false], ['Fluorine', true], ['Fermium', false]);
var question4 = new Question('What is the chemical element for the symbol Tl?', ['Titanium', false], ['Tellurium', false], ['Thallium', true], ['Thorium', false]);
var question5 = new Question('What is the chemical element for the symbol Ac?', ['Cesium', false], ['Actinium', true], ['Aluminum', false], ['Americium', false]);
var question6 = new Question('What is the chemical element for the symbol Pt?', ['Praseodymium', false], ['Platinum', true], ['Protactinium', false], ['Potassium', false]);
var question7 = new Question('What is the chemical element for the symbol Nb?', ['Neodymium', false], ['Niobium', true], ['Nickel', false], ['Nobelium', false]);
var question8 = new Question('What is the chemical element for the symbol Ru?', ['Rubidium', false], ['Rhenium', false], ['Rhodium', false], ['Ruthenium', true]);
var question9 = new Question('What is the chemical element for the symbol Kr?', ['Potassium', false], ['Krypton', true], ['Argon', false], ['Radon', false]);
var question10 = new Question('What is the chemical element for the symbol Lv?', ['Lithium', false], ['Lead', false], ['Livermorium', true], ['Lutetium', false]);
var quiz_questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
const Periodic_Table_quiz = new Quiz("Periodic Table", "Thorium Iodine Nitrogen Potassium!", quiz_questions);

//Biology Quiz
var question1 = new Question("Some flagellates are animal-like and some are plantlike, but all belong to which group of organisms?", ["Bacteria", false], ['Viruses', false], ['Protozoans', true], ['Fungi', false]);
var question2 = new Question('Which of these amino acids, first isolated from gelatin, is the simplest?', ['Alanine', false], ['Tyrosine', false], ['Glycine', true], ['Tryptophan', false]);
var question3 = new Question('What are produced in response to foreign substances called antigens?', ['Toxins', false], ['Lymphocytes', false], ['Antiglobulin', false], ['Antibodies', true]);
var question4 = new Question('What is the name of the dormant state in which an animals body temperature decreases and heartbeat and breathing rate slow down?', ['Adolescence', false], ['Sleep apnea', false], ['Hidrosis', false], ['Hibernation', true]);
var question5 = new Question('People get sick from eating salmonella, but what is it?', ['An insect', false], ['An industrial chemical', false], ['Bacteria', true], ['A fish', false]);
var question6 = new Question('What is another name for harvestmen, a group of arachnids that look like spiders but are not?', ['Daddy longlegs', true], ['Fiddler crabs', false], ['Praying mantids', false], ['Whiptail scorpions', false]);
var question7 = new Question('What is a sea cucumber?', ['A seaweed', false], ['A type of vegetable', false], ['A fish', false], ['A marine invertebrate', true]);
var question8 = new Question('What term is given to the emission of light by living organisms such as a fireflies or bacteria?', ['Radioluminescence', false], ['Electroluminescence', false], ['Photoluminescence', false], ['Bioluminescence', true]);
var question9 = new Question('How many pairs of chromosomes are found in the human body?', ['21 pairs', false], ['22 pairs', false], ['24 pairs', false], ['23 pairs', true]);
var question10 = new Question('What are the building blocks of proteins?', ['Amino acids', true], ['Carbohydrates', false], ['Nucleic acids', false], ['Enzymes', false]);
var quiz_questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
const Biology_quiz = new Quiz("Biology", "It's in everything.", quiz_questions);

//Chemistry Quiz
var question1 = new Question("Which of the following can be a major cause of ozone depletion in the Earth's atmosphere?", ["Acid rain", false], ['Methane', false], ['Space debris', false], ['Chlorofluorocarbons', true]);
var question2 = new Question('Which law states that the weight of a gas dissolved by a liquid is proportional to the pressure of the gas upon the liquid?', ['Faradays law', false], ['Henrys law', true], ['Daltons law', false], ['Boyles law', false]);
var question3 = new Question('Which of the following is used as an ingredient in alcoholic beverages?', ['Ethanol', true], ['Butanol', false], ['Catechol', false], ['Phenol', false]);
var question4 = new Question('What is the atomic weight of cobalt?', ['58.933', true], ['63.546', false], ['44.956', false], ['47.867', false]);
var question5 = new Question('What is the name of an outbreak of fire without application of heat from an external source?', ['Spontaneous combustion', true], ['Thermokarst', false], ['Flash point', false], ['Enthalpy', false]);
var question6 = new Question('What chemical element did Dirk Coster and George Charles von Hevesy discover?', ['Germanium', false], ['Osmium', false], ['Lutetium', false], ['Hafnium', true]);
var question7 = new Question('Which hormone in plants is responsible for fruit ripening?', ['Methanol', false], ['Methane', false], ['Acetylene', false], ['Ethylene', true]);
var question8 = new Question('What toxic gas with a musty hay odor was used during World War I?', ['Tear gas', false], ['Phosgene', true], ['Chlorine', false], ['Mustard gas', false]);
var question9 = new Question('Who won the first Nobel Prize for Chemistry?', ['Whilhelm Ostwald', false], ["Jacobus Henricus van't Hoff", true], ['Eduard Buchner', false], ['Henri Moissan', false]);
var question10 = new Question('Which among the following is a noble gas?', ['Nobelium', false], ['Nitrogen', false], ['Argon', true], ['Oxygen', false]);
var quiz_questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
const Chemistry_quiz = new Quiz("Chemistry", "Are you a mad scientist?", quiz_questions);