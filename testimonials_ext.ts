import { TESTIMONIALS_EN } from './testimonials';
import { Testimonial } from './types';

function createTranslations(strings: string[]): Testimonial[] {
  return TESTIMONIALS_EN.map((t, i) => ({
    ...t,
    text: strings[i] || t.text
  }));
}

const STRINGS_FR = [
  "Francisco a été de loin l'un des meilleurs Scrum Masters que nous ayons eus. Sa capacité à trouver des solutions est phénoménale.",
  "Professionnel de haut niveau ; son expertise en tant que Scrum Master aide les équipes à maintenir un rythme de travail exceptionnel.",
  "Il inspire les équipes comme peu peuvent le faire. Son style cordial guide les diverses personnalités directement vers l'objectif du produit.",
  "Il a géré le contrôle du projet de manière extrêmement efficace, sans jamais rien laisser passer. Le professionnel le plus organisé.",
  "En 7 ans d'agilité, il est l'un des meilleurs SM avec qui j'ai travaillé. Très proactif, résolu et un excellent gestionnaire.",
  "Il se démarque des autres. Capable de supprimer efficacement les points de blocage et de créer une dynamique qui soude l'équipe.",
  "Excellent professionnel capable de lire les demandes complexes des utilisateurs et de les traduire exactement en ce dont ils ont besoin.",
  "Les réunions d'équipe n'étaient jamais ennuyeuses. Empathique, extrêmement patient, toujours prêt à aider et à motiver tout le monde.",
  "Un leader exceptionnel et un Scrum Master très compétent. Son expertise a été vitale pour le succès de nos projets.",
  "Un leader inné qui trouve toujours des opportunités d'amélioration. Tout simplement un privilège de travailler aux côtés de Francisco.",
  "Profondément soucieux de ses équipes tant techniquement qu'humainement. Un excellent leader équipé pour relever tous les défis.",
  "Il promeut des espaces d'innovation et d'amélioration continue. Travailler avec lui était génial ; il est axé sur les résultats.",
  "Professionnel de haute performance. Sa capacité à s'adapter et à gérer les conflits dans des situations agiles difficiles est exceptionnelle.",
  "Un professionnel motivé par l'apprentissage et ouvert aux changements. Il a constamment fait preuve d'empathie et d'éthique de travail.",
  "Un grand collaborateur pour éliminer les blocages. Il met toujours ses connaissances techniques à la disposition de l'équipe.",
  "Déterminé à toujours stimuler l'équipe, obtenant ainsi une dynamique de travail incroyablement saine et des résultats optimaux.",
  "Un grand motivateur et leader cherchant la synergie de l'équipe pour avancer, avec de solides connaissances en technologies de pointe.",
  "Méthodique, organisé et avec un grand esprit d'équipe. Fortement recommandé pour tout projet de haut niveau.",
  "Toujours à jour avec les méthodes les plus récentes. Il gère les équipes de manière excellente ; il est innovant et responsable.",
  "De grandes compétences analytiques. Un mentor confiant qui guide les projets vers le succès, naviguant dans des situations complexes.",
  "Très responsable et affiche une maîtrise absolue et sans faille des méthodologies agiles.",
  "Un formidable professionnel très motivé pour innover et apporter constamment de nouvelles idées à ses équipes technologiques."
];

const STRINGS_IT = [
  "Francisco è stato di gran lunga uno dei migliori Scrum Master che abbiamo avuto. La sua abilità nel trovare soluzioni è eccezionale.",
  "Professionista di alto livello; la sua competenza come Scrum Master aiuta i team a mantenere un ritmo di lavoro straordinario.",
  "Ispira i team come pochi sanno fare. Il suo stile cordiale guida le diverse personalità verso l'obiettivo del prodotto.",
  "Ha gestito il progetto in modo estremamente efficiente, senza mai trascurare nulla. Il professionista più organizzato.",
  "In 7 anni di agile, è uno dei migliori SM con cui ho lavorato. Altamente proattivo, risoluto e un grande manager.",
  "Si distingue dagli altri. Capace di rimuovere ostacoli in un attimo e di creare dinamiche che rafforzano il team.",
  "Un eccellente professionista capace di comprendere le richieste complesse degli utenti e tradurle esattamente in ciò di cui hanno bisogno.",
  "Le riunioni non erano mai noiose. Empatico, estremamente paziente e sempre disposto ad aiutare e motivare tutti.",
  "Un leader eccezionale e uno Scrum Master altamente competente. La sua esperienza è stata vitale per il successo dei nostri progetti.",
  "Un leader innato che trova sempre opportunità di miglioramento. Semplicemente un privilegio lavorare accanto a Francisco.",
  "Profondamente attento ai suoi team sia tecnicamente che umanamente. Un leader eccellente pronto ad affrontare ogni sfida.",
  "Promuove spazi per l'innovazione e il miglioramento continuo. Lavorare con lui è stato fantastico; è veramente orientato agli obiettivi.",
  "Professionista ad alte prestazioni. La sua capacità di adattarsi e gestire i conflitti in situazioni difficili è eccezionale.",
  "Un professionista guidato dall'apprendimento e aperto ai cambiamenti. Ha costantemente mostrato empatia, etica e professionalità.",
  "Un grande collaboratore nel risolvere blocchi. Mette sempre la sua profonda conoscenza tecnica a disposizione del team.",
  "Impegnato a mantenere il team sempre stimolato, ottenendo dinamiche di lavoro sane e risultati ottimali.",
  "Un grande motivatore, sempre alla ricerca della sinergia del team per andare avanti con solide conoscenze tecnologiche.",
  "Metodico, organizzato e con un grande spirito di squadra. Altamente raccomandato per qualsiasi progetto ad alto impatto.",
  "Sempre aggiornato con le nuove metodologie. Gestisce i team in modo eccellente; è innovativo e profondamente talentuoso.",
  "Grandi capacità analitiche. Un mentore sicuro che guida i progetti al successo, navigando facilmente in situazioni complesse.",
  "Molto responsabile e mostra un'assoluta e impeccabile padronanza delle metodologie agili.",
  "Un professionista eccezionale, fortemente motivato a innovare e portare costantemente nuove idee nei suoi team."
];

const STRINGS_DE = [
  "Francisco war bei weitem einer der besten Scrum Master, die wir je hatten. Seine Fähigkeit, Lösungen zu finden, ist phänomenal.",
  "Ein hochrangiger Profi; seine Expertise als Scrum Master hilft Teams, ein außergewöhnliches Arbeitstempo aufrechtzuerhalten.",
  "Er inspiriert Teams wie kaum ein anderer. Sein herzlicher Stil lenkt vielfältige Persönlichkeiten direkt auf das Produktziel.",
  "Er leitete die Projektsteuerung extrem effizient und ließ nie etwas durchrutschen. Der am besten organisierte Profi.",
  "In meinen 7 Jahren mit Agile ist er einer der besten SMs, mit denen ich je gearbeitet habe. Sehr proaktiv und zielstrebig.",
  "Er sticht aus der Masse heraus. Er ist fähig, Blockaden effizient zu beseitigen und Dynamiken zu schaffen, die das Team verbinden.",
  "Ein exzellenter Profi, der fähig ist, komplexe Benutzeranfragen genau in das zu übersetzen, was sie wirklich benötigen.",
  "Teammeetings waren nie langweilig. Empathisch, extrem geduldig und immer bereit, jedem zu helfen und zu motivieren.",
  "Ein außergewöhnlicher Führer und sehr kompetenter Scrum Master. Seine Expertise war entscheidend für den Erfolg unserer Projekte.",
  "Ein angeborener Leader, der immer Verbesserungsmöglichkeiten findet. Einfach ein Privileg, mit Francisco zu arbeiten.",
  "Er kümmert sich tiefgehend um seine Teams, sowohl technisch als auch menschlich. Ein exzellenter Leader für jede Herausforderung.",
  "Er fördert Räume für Innovation und kontinuierliche Verbesserung. Die Zusammenarbeit mit ihm war großartig; er ist zielorientiert.",
  "Ein Hochleistungsprofi. Seine Fähigkeit, sich anzupassen und Konflikte in schwierigen agilen Situationen zu bewältigen, ist herausragend.",
  "Ein Profi, angetrieben vom Lernen und offen für Veränderungen. Er zeigte stets Empathie und Professionalität.",
  "Ein großartiger Kollege beim Beseitigen von Hürden. Er stellt sein technisches und methodisches Wissen immer zur Verfügung.",
  "Er ist bestrebt, das Team stets anzuregen, und erreicht so eine unglaublich gesunde Arbeitsdynamik und optimale Ergebnisse.",
  "Toller Motivator auf der Suche nach Teamsynergien, ausgestattet mit fundiertem Wissen in modernster Technologie.",
  "Methodisch, organisiert und sehr engagiert. Sehr empfehlenswert für jede Art von hochrangigem technischem Projekt.",
  "Immer auf dem neuesten Stand der Methoden. Er führt Teams exzellent; er ist innovativ, talentiert und verantwortungsbewusst.",
  "Großartige analytische Fähigkeiten. Ein souveräner Mentor, der Projekte selbst durch extrem komplexe Situationen zum Erfolg führt.",
  "Sehr verantwortungsvoll und zeigt eine absolute, makellose Beherrschung agiler Methoden.",
  "Ein enorm engagierter Experte, der stark motiviert ist, Innovationen voranzutreiben und neue Ideen in seine Teams zu bringen."
];

const STRINGS_JA = [
  "Franciscoは私たちが経験した中で間違いなく最高のスクラムマスターの一人です。解決策を見つける能力は驚異的です。",
  "高レベルの専門家であり、彼の専門知識はチームが例外的な作業ペースを維持するのに役立ちます。",
  "彼は他の誰とも違うやり方でチームを鼓舞します。その温かいスタイルは、多様な個性を直接目標へと導きます。",
  "彼はプロジェクト管理を非常に効率的に行い、細部まで見逃しません。最も組織化された専門家です。",
  "私の7年間のアジャイル経験の中で最高のSMの一人です。非常にプロアクティブで問題解決能力に優れています。",
  "彼は他を圧倒しています。ブロッカーを効率的に排除し、チームの絆を深めるダイナミクスを生み出します。",
  "ユーザーの複雑な要求を読み取り、正確に必要なものに翻訳することができる優れた専門家です。",
  "チームミーティングは決して退屈しませんでした。共感的で非常に忍耐強く、常に他人を助けようとしてくれます。",
  "卓越したリーダーであり、非常に有能なスクラムマスターです。彼の知識はプロジェクトの成功に不可欠でした。",
  "常に改善の機会を見つける天性のリーダーです。Franciscoと共に働くことはまさに特権です。",
  "技術的にも人間的にもチームを深く思いやります。あらゆる課題に取り組む能力を備えた優れたリーダーです。",
  "彼は革新と継続的な改善のための空間を促進します。彼との仕事は素晴らしく、常に目標志向でした。",
  "高いパフォーマンスを発揮するプロです。困難な状況での適応や対立管理の能力は傑出しています。",
  "変化に対してオープンであり、継続的に学習する専門家。共感力と労働倫理を常に示してくれました。",
  "障害を取り除く優れた協力者です。彼は常にその深い技術的・方法論的知識をチームに提供してくれました。",
  "常にチームを大いに刺激し、信じられないほど健全なダイナミクスと最適な結果を達成してくれます。",
  "前進するためにチームの相乗効果を追求する偉大な指導者であり、最先端技術に深い知識を持っています。",
  "整然として組織的で、チームプレーヤーとして深く献身しています。大きな影響を与える技術的なプロジェクトに強く推奨します。",
  "常に新しい方法論を取り入れています。チーム管理が素晴らしく、革新的で非常に才能があり、責任感があります。",
  "優れた分析スキル。あらゆる複雑な状況を簡単に切り抜け、プロジェクトを確実に成功へと導くメンターです。",
  "非常に責任感が強く、アジャイル手法の完全かつ完璧な熟練度を示しています。",
  "自身の技術チームに常に新しいアイデアを持ち込み、革新を推進する意欲に満ちた素晴らしいプロフェッショナルです。"
];

const STRINGS_KO = [
  "Francisco는 우리가 경험한 최고의 스크럼 마스터 중 하나입니다. 해결책을 찾는 그의 능력은 경이롭습니다.",
  "고급 전문가이며, 그의 전문 지식은 팀이 탁월한 작업 속도를 유지하도록 돕습니다.",
  "그는 드물게 팀에 영감을 줍니다. 그의 따뜻한 스타일은 다양한 성격을 제품의 목표로 직접 인도합니다.",
  "그는 프로젝트 관리를 매우 효율적으로 수행하며 결코 놓치는 것이 없습니다. 가장 조직적인 전문가입니다.",
  "제 7년의 애자일 경험 중 최고의 SM 중 하나입니다. 매우 주도적이고 문제를 잘 해결합니다.",
  "그는 다릅니다. 장애물을 효율적으로 제거하고 팀을 결속시키는 역학을 만들어 냅니다.",
  "사용자의 복잡한 요청을 읽고 필요한 것으로 정확하게 번역할 수 있는 훌륭한 전문가입니다.",
  "팀 회의는 결코 지루하지 않았습니다. 공감하고 참을성이 많으며 항상 다른 사람들을 도울 준비가 되어 있습니다.",
  "탁월한 리더이자 매우 유능한 스크럼 마스터입니다. 그의 전문 지식은 프로젝트 성공에 필수적이었습니다.",
  "항상 개선 기회를 찾는 타고난 리더입니다. Francisco와 함께 일하는 것은 특권입니다.",
  "기술적으로나 인간적으로 팀을 깊이 생각합니다. 모든 도전에 대처할 능력을 갖춘 훌륭한 리더입니다.",
  "혁신과 지속적인 개선을 위한 공간을 촉진합니다. 그와 함께 일하는 것은 훌륭했고 그는 목표 지향적입니다.",
  "높은 성과를 내는 전문가입니다. 어려운 상황에서 적응하고 갈등을 관리하는 능력은 탁월합니다.",
  "학습을 주도하고 변화에 열려 있는 전문가입니다. 그는 항상 공감과 직업 윤리를 보여주었습니다.",
  "장애물 제거의 빛나는 협력자입니다. 팀을 위해 항상 깊은 기술적, 방법론적 지식을 제공합니다.",
  "항상 팀을 자극하여 팀에 활력을 불어넣고 건강한 작업 환경과 최상의 결과를 얻게 합니다.",
  "팀 시너지를 추구하고 앞으로 나아가려는 훌륭한 동기 부여 자이며, 최첨단 기술의 탄탄한 지식을 가지고 있습니다.",
  "체계적이고 조직적이며 헌신적인 팀 플레이어입니다. 영향력 있는 기술 프로젝트에 강력히 추천합니다.",
  "늘 새로운 방법론에 업데이트 되어 있습니다. 훌륭한 관리 능력, 혁신, 깊은 재능과 책임감을 가졌습니다.",
  "뛰어난 분석 기술. 매우 복잡한 상황을 쉽게 헤쳐나가고 프로젝트를 성공으로 이끄는 자신감 있는 멘토입니다.",
  "매우 책임감이 강하고 애자일 방법론에 대한 완벽하고 흠결없는 숙련도를 보여줍니다.",
  "혁신에 강한 동기를 부여하고 기술 팀에 지속적으로 새로운 아이디어를 가져오는 엄청난 전문가입니다."
];

const STRINGS_ZH = [
  "Francisco是我们共事过的最好的Scrum Master之一。他寻找解决方案的能力令人惊叹。",
  "高级专业人员；他作为Scrum Master的专业知识可帮助团队保持卓越的工作节奏。",
  "他总是能激励团队。他热情的沟通方式引导各种性格的人朝着产品的目标前进。",
  "他极其高效地管理项目，从不遗漏任何事情。他是见过的最讲究条理的专业人士。",
  "在我7年的敏捷开发经验中，他是我合作过的最好的SM之一。他非常积极主动，解决问题能力强。",
  "他总是超群绝伦。能高效地清除障碍，并开展让团队紧密相连的活动。",
  "杰出的高水平专业人士，能够读懂用户复杂的请求并精准地转化为他们所需的内容。",
  "团队会议从不枯燥。他富有同理心，极具耐心，总是乐于助人并激励大家。",
  "一位卓越的领导者和极具能力的Scrum Master。他的专业知识对我们极具挑战性项目的成功至关重要。",
  "他是一位天生的领导者，总是能发现改进的机会。能与Francisco一起工作绝对是一种特权。",
  "不仅在技术上，更在人文上深切关怀他的团队。一位具备应对任何挑战能力的卓越领导者。",
  "他积极推动创新和持续改进的空间。与他合作是很棒的体验；他是一个极其目标导向的人。",
  "高绩效的职业人士。他在艰难的敏捷环境中适应和化解冲突的能力非常出色。",
  "一位热爱学习并乐于拥抱变化的专业人士。他一直表现出强烈的同理心、职业道德和敬业精神。",
  "清除开发障碍的绝佳协作者。他总是把深厚的技术和方法论知识分享给团队。",
  "致力于始终保持团队的干劲，从而实现极其健康的工作动力和最佳的产出。",
  "伟大的激励者和领导者，总是寻求团队协同以共同前进，在尖端技术方面展示出扎实的知识。",
  "讲究方法、有条理且极具团队奉献精神。强烈推荐给任何类型的高影响力技术项目。",
  "始终掌握最新的方法论。他管理团队非常出色；他极具创新性，才华横溢并且非常有责任感。",
  "强大的分析能力。一位充满自信的导师，无论在多么复杂的情况下都能引导项目走向成功。",
  "非常负责任，展现出了对敏捷方法论绝对且无懈可击的掌握程度。",
  "一位了不起的自我驱动型专家，满怀创新热情，并持续为他的技术团队引入新理念。"
];

const STRINGS_AR = [
  "فرانسيسكو هو من أفضل مدراء سكروم الذين عملنا معهم على الإطلاق. قدرته على إيجاد الحلول مذهلة.",
  "محترف عالي المستوى؛ تساعد خبرته كمدير سكروم الفرق على الحفاظ على وتيرة عمل استثنائية.",
  "يلهم الفرق كما لا يستطيع الكثيرون. أسلوبه الودي يوجه الشخصيات المتنوعة مباشرة نحو هدف المنتج.",
  "أدار التحكم في المشروع بكفاءة عالية، ولم يترك شيئًا للصدفة. هو المحترف الأكثر تنظيماً.",
  "في 7 سنوات من العمل الرشيق (Agile)، هو من أفضل مدراء سكروم. مبادر ومتميز في حل المشكلات.",
  "يتميز عن البقية. قادر على إزالة العقبات بكفاءة وإدارة ديناميكيات تربط الفريق معاً.",
  "محترف ممتاز قادر على قراءة طلبات المستخدمين المعقدة وترجمتها بالضبط إلى ما يحتاجون إليه.",
  "اجتماعات الفريق لم تكن مملة أبداً. متعاطف، صبور للغاية، ودائماً مستعد للمساعدة والتحفيز.",
  "قائد استثنائي ومدير سكروم كفؤ للغاية. كانت خبرته حيوية لنجاح مشاريعنا المليئة بالتحديات.",
  "قائد بالفطرة يجد دائماً فرصاً للتحسين. ببساطة، العمل بجانب فرانسيسكو هو امتياز.",
  "يهتم بعمق بفرقه من الناحيتين التقنية والإنسانية. قائد ممتاز مجهز للتعامل مع أي تحدٍ.",
  "يعزز مساحات الابتكار والتحسين المستمر. العمل معه كان رائعاً؛ هو شخص موجه نحو الأهداف حقاً.",
  "محترف عالي الأداء. قدرته على التكيف وإدارة النزاعات في المواقف الصعبة رائعة جداً.",
  "محترف مدفوع بالتعلم ومنفتح على التغييرات. أظهر باستمرار تعاطفاً واحترافية وأخلاقيات عمل لا تضاهى.",
  "متعاون رائع في إزالة العقبات. يضع دائماً معرفته التقنية والمنهجية العميقة تحت تصرف الفريق.",
  "ملتزم بإبقاء الفريق محفزاً دائماً، مما يحقق ديناميكية عمل صحية للغاية ونتائج مثالية.",
  "محفز وقائد عظيم، يسعى دائماً للتآزر للمضي قدماً، ويظهر معرفة قوية بأحدث التقنيات.",
  "منهجي ومنظم وعضو فريق متفاني بعمق. موصى به بشدة لأي نوع من المشاريع التقنية ذات التأثير العالي.",
  "مُحدث دائماً بأحدث المنهجيات. يتعامل مع الفرق بشكل ممتاز؛ هو مبتكر وموهوب ومسؤول.",
  "مهارات تحليلية عظيمة. مرشد واثق يوجه المشاريع نحو النجاح، ويتنقل بسهولة في المواقف المعقدة.",
  "مسؤول جداً ويُظهر إتقاناً مطلقاً لا تشوبه شائبة للمنهجيات الرشيقة.",
  "محترف عصامي هائل، متحمس بشدة للابتكار وإدخال أفكار جديدة باستمرار في فرقه التقنية."
];

const STRINGS_HI = [
  "फ्रांसिस्को यकीनन हमारे अब तक के सबसे बेहतरीन स्क्रम मास्टर्स में से एक थे। समाधान खोजने की उनकी क्षमता अभूतपूर्व है।",
  "एक उच्च-स्तरीय पेशेवर; स्क्रम मास्टर के रूप में उनकी विशेषज्ञता टीमों को उत्कृष्ट गति बनाए रखने में मदद करती है।",
  "वह टीमों को प्रेरित करते हैं। उनका सौहार्दपूर्ण व्यवहार विविध व्यक्तित्वों को सीधे उत्पाद के लक्ष्य की ओर मार्गदर्शन करता है।",
  "उन्होंने परियोजना को बेहद कुशलता से प्रबंधित किया, कभी कोई चूक नहीं होने दी। सबसे व्यवस्थित पेशेवर।",
  "एजाइल में मेरे 7 वर्षों में, वह सबसे अच्छे एसएम हैं। बहुत अधिक सक्रिय, संकल्पशील और एक महान प्रबंधक।",
  "वह सबसे अलग खड़े होते हैं। बाधाओं को कुशलतापूर्वक दूर करने और टीम को बाँधने में सक्षम हैं।",
  "एक उत्कृष्ट पेशेवर जो उपयोगकर्ता के जटिल अनुरोधों को समझने और उन्हें ठीक उसी में अनुवाद करने में सक्षम है जो उन्हें चाहिए।",
  "टीम की बैठकें कभी उबाऊ नहीं होती थीं। सहानुभूतिपूर्ण, बेहद धैर्यवान और हमेशा सबकी मदद के लिए तैयार।",
  "एक असाधारण नेता और बेहद सक्षम स्क्रम मास्टर। उनकी विशेषज्ञता हमारी जटिल परियोजनाओं की सफलता के लिए महत्वपूर्ण थी।",
  "एक सहज नेता जो हमेशा सुधार के अवसर खोजता है। फ्रांसिस्को के साथ काम करना वास्तव में एक विशेषाधिकार है।",
  "तकनीकी और मानवीय दोनों रूप से अपनी टीमों की गहरी देखभाल। किसी भी चुनौती से निपटने के लिए सुसज्जित एक उत्कृष्ट नेता।",
  "वह नवाचार और निरंतर सुधार के लिए स्थान को बढ़ावा देते हैं। उनके साथ काम करना बहुत अच्छा था; वह लक्ष्य-उन्मुख हैं।",
  "उच्च प्रदर्शन वाले पेशेवर। कठिन एजाइल स्थितियों में अनुकूलन और संघर्ष का प्रबंधन करने की उनकी क्षमता उत्कृष्ट है।",
  "सीखने से प्रेरित और परिवर्तनों के लिए खुले एक पेशेवर। उन्होंने लगातार सहानुभूति और कार्य नैतिकता प्रदर्शित की।",
  "बाधाओं को दूर करने में महान सहयोगी। वह हमेशा टीम के निपटान में अपने तकनीकी और पद्धतिगत ज्ञान को रखते हैं।",
  "टीम को हमेशा उत्साहित और प्रेरित रखने के लिए प्रतिबद्ध, जिससे अविश्वसनीय रूप से स्वस्थ कामकाजी गतिशीलता प्राप्त होती है।",
  "महान प्रेरक और नेता, हमेशा आगे बढ़ने के लिए टीम तालमेल की तलाश में, अत्याधुनिक तकनीक में ठोस ज्ञान दिखाते हैं।",
  "व्यवस्थित, संगठित और गहराई से समर्पित टीम लीडर। किसी भी प्रकार की उच्च प्रभाव वाली तकनीकी परियोजना के लिए अनुशंसित।",
  "हमेशा नवीनतम कार्यप्रणालियों के साथ अद्यतित। टीमों को बेहतरीन तरीके से संभालता है; वह नवीन, प्रतिभाशाली और जिम्मेदार है।",
  "महान विश्लेषणात्मक कौशल। एक आश्वस्त गुरु जो परियोजनाओं को सफलता की ओर ले जाता है और जटिल स्थितियों में नेविगेट करता है।",
  "बहुत जिम्मेदार और एजाइल कार्यप्रणालियों में पूर्ण और निर्दोष महारत प्रदर्शित करते हैं।",
  "एक जबरदस्त स्व-प्रेरित पेशेवर, नवाचार करने और अपनी तकनीकी टीमों में लगातार नए विचार लाने के लिए दृढ़ता से प्रेरित।"
];

const STRINGS_GU = [
  "ફ્રાન્સિસ્કો નિઃશંકપણે અમારા શ્રેષ્ઠ સ્ક્રમ માસ્ટર્સમાંના એક હતા. ઉકેલો શોધવાની તેમની ક્ષમતા અસાધારણ છે.",
  "ઉચ્ચ સ્તરીય વ્યાવસાયિક; સ્ક્રમ માસ્ટર તરીકેની તેમની નિપુણતા ટીમોને અસાધારણ ગતિ જાળવી રાખવામાં મદદ કરે છે.",
  "તે કોઈની પણ જેમ ટીમોને પ્રેરણા આપે છે. તેમની મૈત્રીપૂર્ણ શૈલી વિવિધ વ્યક્તિત્વોને લક્ષ્ય તરફ ચોક્કસ દોરી જાય છે.",
  "તેણે પ્રોજેક્ટ કંટ્રોલનું ખૂબ જ અસરકારક રીતે સંચાલન કર્યું, ક્યારેય કોઈ ચૂક થવા ન દીધી. સૌથી આયોજિત વ્યાવસાયિક.",
  "એજાઇલના મારા 7 વર્ષોમાં, તે શ્રેષ્ઠ SM પૈકી એક છે. અત્યંત સક્રિય, નિર્ણાયક અને મહાન મેનેજર.",
  "તે સૌથી અલગ તરી આવે છે. અવરોધોને દૂર કરવા અને ટીમને બાંધી રાખવાની ગતિશીલતા ચલાવવામાં સક્ષમ.",
  "એક ઉત્કૃષ્ટ ઉચ્ચ-સ્તરના વ્યાવસાયિક, વપરાશકર્તાની વિનંતીઓને સમજવામાં અને તેમને જોઈતા પરિણામોમાં અનુવાદિત કરવામાં સક્ષમ.",
  "ટીમની મીટિંગ્સ ક્યારેય કંટાળાજનક નહોતી. સહાનુભૂતિવાળા, અત્યંત ધીરજવાન અને હંમેશા મદદ માટે તૈયાર.",
  "એક અસાધારણ અગ્રણી અને ખૂબ સક્ષમ સ્ક્રમ માસ્ટર. અમારા પડકારરૂપ પ્રોજેક્ટ્સની સફળતા માટે તેમની નિપુણતા અમૂલ્ય હતી.",
  "સહજ નેતા જે હંમેશા સુધારણાની તકો શોધે છે. ફ્રાન્સિસ્કો સાથે કામ કરવું એ ખરેખર એક લહાવો છે.",
  "તકનીકી અને માનવીય રીતે તેમની ટીમોની ઊંડી સંભાળ રાખે છે. કોઈપણ પડકારનો સામનો કરવા સજ્જ એક ઉત્તમ નેતા.",
  "તે નવીનતા અને સતત સુધારણા માટે જગ્યાને પ્રોત્સાહન આપે છે. તેમની સાથે કામ કરવું ખૂબ સરસ હતું.",
  "ઉચ્ચ-પ્રદર્શન વ્યાવસાયિક. મુશ્કેલ પરિસ્થિતિઓમાં અનુકૂલન સાધવાની અને સંઘર્ષનું સંચાલન કરવાની તેમની ક્ષમતા ઉત્કૃષ્ટ છે.",
  "શીખવા માટે પ્રેરિત અને ફેરફારો માટે ખુલ્લા એક વ્યાવસાયિક. તેણે સતત સહાનુભૂતિ અને કાર્ય નૈતિકતા દર્શાવી.",
  "અવરોધો દૂર કરવામાં શ્રેષ્ઠ સાથીદાર. તે હંમેશા પોતાનું ઊંડું તકનીકી અને પદ્ધતિસરનું જ્ઞાન ટીમ માટે મૂકે છે.",
  "ટીમને હંમેશા ઉત્સાહિત રાખવા માટે પ્રતિબદ્ધ, જેનાથી સ્વસ્થ કાર્ય ગતિશીલતા અને શ્રેષ્ઠ પરિણામો પ્રાપ્ત થાય છે.",
  "મહાન પ્રેરક અને નેતા, હંમેશા આગળ વધવા માટે ટીમમાં સુમેળની શોધમાં, નવી તકનીકમાં નક્કર જ્ઞાન દર્શાવે છે.",
  "પદ્ધતિસરના, સંગઠિત અને સમર્પિત ટીમ પ્લેયર. ઉચ્ચ પ્રભાવવાળા તકનીકી પ્રોજેક્ટ્સ માટે ઉત્તમ ભલામણ.",
  "નવીનતમ પદ્ધતિઓ સાથે હંમેશા અપડેટ રહે છે. ટીમોને ઉત્તમ રીતે સંભાળે છે; તે નવીન, પ્રતિભાશાળી અને જવાબદાર છે.",
  "મહાન વિશ્લેષણાત્મક કુશળતા. આત્મવિશ્વાસુ માર્ગદર્શક જે પ્રોજેક્ટ્સને સફળતા તરફ દોરી જાય છે.",
  "ખૂબ જ જવાબદાર અને એજાઇલ મેથડોલોજી પર સંપૂર્ણ, દોષરહિત નિપુણતા દર્શાવે છે.",
  "એક જબરદસ્ત સ્વ-પ્રેરિત વ્યાવસાયિક, નવીનતા લાવવા અને તેમની ટીમોમાં સતત નવા વિચારો લાવવા માટે સખત પ્રેરિત."
];

export const TESTIMONIALS_FR = createTranslations(STRINGS_FR);
export const TESTIMONIALS_IT = createTranslations(STRINGS_IT);
export const TESTIMONIALS_DE = createTranslations(STRINGS_DE);
export const TESTIMONIALS_JA = createTranslations(STRINGS_JA);
export const TESTIMONIALS_KO = createTranslations(STRINGS_KO);
export const TESTIMONIALS_ZH = createTranslations(STRINGS_ZH);
export const TESTIMONIALS_AR = createTranslations(STRINGS_AR);
export const TESTIMONIALS_HI = createTranslations(STRINGS_HI);
export const TESTIMONIALS_GU = createTranslations(STRINGS_GU);
