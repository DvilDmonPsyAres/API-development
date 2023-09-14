console.log('citas-running');

const citasDeFe = [
  {
    cita:"Santiago 1:6",
    verso:"Pero tiene que pedir con fe y sin dudar nada, porque el que duda es como las olas del mar, que el viento agita y lleva de un lado a otro (Stg 1:6)."
  },
  {
    cita:"Salmos 3:5",
    verso:"Yo me acuesto, y duermo y despierto, porque tú, Señor, me sostienes (Sal 3:5)."
  },
  {
    cita:"Salmos 4:8",
    verso:"Por eso me acuesto y duermo en paz, porque sólo tú, Señor, me haces vivir confiado (Sal 4:8)."
  },
  {
    cita:"Salmos 5:11",
    verso:"Pero que se alegren todos los que en ti confían; que griten siempre de júbilo, porque tú los defiendes; que vivan felices los que aman tu nombre (Sal 5:11)."
  },
  {
    cita:"Salmos 13:5",
    verso:"Yo confío en tu misericordia; mi corazón se alegra en tu salvación (Sal 13:5)."
  },
  {
    cita:"Salmos 16:1",
    verso:"Cuídame, oh Dios, porque en ti confío (Sal 16:1)."
  },
  {
    cita:"Salmos 18:2",
    verso:"Mi Señor y Dios, tú eres mi roca, mi defensor, ¡mi libertador! Tú eres mi fuerza y mi escudo, mi poderosa salvación, mi alto refugio. ¡En ti confío! (Sal 18:2)."
  },
  {
    cita:"Salmos 22:9",
    verso:"Pero eres tú quien me dio la vida, eres tú quien me infundió confianza desde que era un niño de pecho (Sal 22:9)."
  },
  {
    cita:"Salmos 27:3",
    verso:"Aunque un ejército acampe contra mí, mi corazón no se amedrentará; aunque me ataquen y me declaren la guerra, en esto fincaré mi confianza (Sal 27:3)."
  },
  {
    cita:"Salmos 34:8",
    verso:"¡Prueben ustedes mismos la bondad del Señor! ¡Dichoso aquél que en él confía! (Sal 34:8)."
  },
  {
    cita:"Salmos 37:5",
    verso:"Pon tu camino en las manos del Señor; confía en él, y él se encargará de todo (Sal 37:5)."
  },
  {
    cita:"Salmos 56:11",
    verso:"Confío en ti, mi Dios, y no tengo miedo; ¿qué me puede hacer un simple mortal? (Sal 56:11)."
  },
  {
    cita:"Salmos 115:11",
    verso:"Ustedes, temerosos del Señor, confíen en él; él es quien los ayuda y los protege (Sal 115:11)."
  },
  {
    cita:"Hebreos 11:1",
    verso:"Ahora bien, tener fe es estar seguro de lo que se espera; es estar convencido de lo que no se ve (He 11:1)."
  },
  {
    cita:"Romanos 10:17",
    verso:"Así que la fe proviene del oír, y el oír proviene de la palabra de Dios (Ro 10:17)."
  },
  {
    cita:"2 Corintios 5:7",
    verso:"Porque vivimos por la fe, no por la vista (1 Co 5:7)."
  },
  {
    cita:"Gálatas 5:6",
    verso:"Porque en Cristo Jesús nada valen la circuncisión ni la incircuncisión, sino la fe que obra por el amor (Ga 5:6)."
  },
  {
    cita:"Hebreos 11:6",
    verso:"Sin fe es imposible agradar a Dios, porque es necesario que el que se acerca a Dios crea que él existe, y que sabe recompensar a quienes lo buscan (He 11:6)."
  },
  {
    cita:"Romanos 1:17",
    verso:"Porque en el evangelio se revela la justicia de Dios, que de principio a fin es por medio de la fe, tal como está escrito: «El justo por la fe vivirá» (Ro 1:17)."
  },
  {
    cita:"Efesios 2:8",
    verso:"Ciertamente la gracia de Dios los ha salvado por medio de la fe. Ésta no nació de ustedes, sino que es un don de Dios (Ef 2:8)."
  },
  {
    cita:"Romanos 5:1",
    verso:"Así, pues, justificados por la fe tenemos paz con Dios por medio de nuestro Señor Jesucristo (Ro 5:1)."
  },
  {
    cita:"Gálatas 3:24",
    verso:"De manera que la ley ha sido nuestro tutor, para llevarnos a Cristo, a fin de que fuéramos justificados por la fe (Ga 3:24)."
  },
  {
    cita:"1 Timoteo 4:12",
    verso:"Ninguno tenga en poco tu juventud, sino sé ejemplo de los creyentes en palabra, conducta, amor, espíritu, fe y pureza (1 Ti 4:12)."
  },
  {
    cita:"2 Timoteo 4:7",
    verso:"He peleado la buena batalla, he acabado la carrera, he guardado la fe (2 Ti 4:7)."
  },
  {
    cita:"Santiago 2:17",
    verso:"Así también la fe, si no tiene obras, es muerta en sí misma (Stg 2:17)."
  },
  {
    cita:"Gálatas 3:11",
    verso:"Y es evidente que por la ley ninguno se justifica para con Dios, porque «El justo por la fe vivirá» (Ga 3:11)."
  },
  {
    cita:"1 Pedro 1:7",
    verso:"Pero cuando la fe de ustedes sea puesta a prueba, como el oro, habrá de manifestarse en alabanza, gloria y honra el día que Jesucristo se revele. El oro es perecedero y, sin embargo, se prueba en el fuego; ¡y la fe de ustedes es mucho más preciosa que el oro! (1 Pe 1:7)."
  },
  {
    cita:"1 Juan 5:4",
    verso:"Porque todo el que ha nacido de Dios vence al mundo. Y ésta es la victoria que ha vencido al mundo: nuestra fe (1 Jn 5:4)."
  },
  {
    cita:"Mateo 21:21",
    verso:"Jesús les respondió: De cierto les digo, que si ustedes tuvieran fe y no dudaran, no sólo harían esto a la higuera, sino que a este monte le dirían “¡Quítate de ahí y échate en el mar!”, y así se haría (Mt 21:21)."
  },
  {
    cita:"Romanos 14:1",
    verso:"Recibid al débil en la fe, pero no para contender sobre opiniones (Ro 14:1)."
  },
  {
    cita:"1 Corintios 2:5",
    verso:"Para que la fe de ustedes no esté fundada en la sabiduría de los hombres, sino en el poder de Dios (1 Co 2:5)."
  },
  {
    cita:"Lucas 17:5",
    verso:"Los apóstoles le dijeron al Señor: «Auméntanos la fe» (Lc 17:5)."
  },
  {
    cita:"Romanos 14:23",
    verso:"Pero el que duda acerca de lo que come, ya se ha condenado, porque no lo hace por convicción; y todo lo que no se hace por convicción es pecado (Ro 14:23)."
  },
  {
    cita:"Marcos 16:16",
    verso:"El que crea y sea bautizado, se salvará; pero el que no crea, será condenado (Mr 16:16)."
  },
  {
    cita:"Juan 1:12",
    verso:"Pero a todos los que la recibieron, a los que creen en su nombre, les dio la potestad de ser hechos hijos de Dios (Jn 1:12)."
  },
  {
    cita:"Juan 3:16",
    verso:"Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree no se pierda, sino que tenga vida eterna (Jn 3:16)."
  },
  {
    cita:"Juan 3:36",
    verso:"El que cree en el Hijo tiene vida eterna, pero el que se niega a creer en el Hijo no verá la vida, sino que la ira de Dios recae sobre él (Jn 3:36)."
  },
  {
    cita:"Juan 6:40",
    verso:"Y ésta es la voluntad de mi Padre: Que todo aquel que ve al Hijo, y cree en él, tenga vida eterna; y yo lo resucitaré en el día final (Jn 6:40)."
  },
  {
    cita:"Juan 6:47",
    verso:"De cierto, de cierto les digo: El que cree en mí, tiene vida eterna (Jn 6:47)."
  },
  {
    cita:"Juan 7:38",
    verso:"Del interior del que cree en mí, correrán ríos de agua viva, como dice la Escritura (Jn7:38)."
  },
  {
    cita:"Juan 11:25",
    verso:"Jesús le dijo: Yo soy la resurrección y la vida; el que cree en mí, aunque esté muerto, vivirá (Jn 11:25)."
  },
  {
    cita:"Hechos 16:31",
    verso:"Ellos le dijeron: «Cree en el Señor Jesucristo, y se salvarán tú y tu familia» (Hch 16:31)."
  },
  {
    cita:"Filipenses 3:9",
    verso:"Y ser hallado en él, no por tener mi propia justicia, que viene por la ley, sino por tener la justicia que es de Dios y que viene por la fe, la fe en Cristo (Filp 3:9)."
  },
  {
    cita:"Colosenses 2:12",
    verso:"Cuando ustedes fueron bautizados, fueron también sepultados con él, pero al mismo tiempo resucitaron con él, por la fe en el poder de Dios, que lo levantó de los muertos (Co 2:12)."
  },
  {
    cita:"2 Tesalonicenses 2:13",
    verso:"Pero nosotros siempre debemos dar gracias a Dios por ustedes, hermanos amados por el Señor, de que desde el principio Dios los haya escogido para salvación, mediante la santificación por el Espíritu y la fe en la verdad (2 Tes 2:13)."
  },
  {
    cita:"1 Pedro 1:9",
    verso:"Obteniendo el fin de vuestra fe, que es la salvación de vuestras almas (1 Pe 1:9)."
  },
  {
    cita:"Salmos 9:10",
    verso:"En ti confían los que conocen tu nombre, porque tú, Señor, proteges a los que te buscan (Sal 9:10)."
  },
  {
    cita:"Salmos 20:7",
    verso:"Algunos confían en sus carros de guerra; otros confían en su caballería, Pero nosotros confiamos en el Nombre, ¡confiamos en el Señor, nuestro Dios! (Sal 20:7)."
  },
  {
    cita:"Salmos 22:5",
    verso:"A ti clamaron, y fueron librados; en ti confiaron, y no quedaron en vergüenza (Sal 22:5)."
  },
  {
    cita:"Salmos 37:5",
    verso:"Pon tu camino en las manos del Señor; confía en él, y él se encargará de todo (Sal 37:5)."
  },
  {
    cita:"Salmos 40:4",
    verso:"Dichoso el hombre que confía en el Señor y no en gente soberbia y mentirosa (Sal 40:4)."
  },
  {
    cita:"Salmos 64:10",
    verso:"Los justos se regocijarán en el Señor y pondrán en él su confianza. ¡Todos los rectos de corazón lo alabarán! (Sal 64:10)."
  },
  {
    cita:"Salmos 94:22",
    verso:"Pero tú, Señor, eres mi refugio; eres mi Dios y la roca en que confío (Sal 94:22)."
  },
  {
    cita:"Salmos 118:8",
    verso:"Es mejor confiar en el Señor que confiar en simples mortales (Sal 118:8)."
  },
  {
    cita:"Salmos 141:8",
    verso:"Por eso, Señor y Dios, mis ojos te buscan. En ti confío. ¡No me desampares! (Sal 141:8)."
  },
  {
    cita:"Salmos 144:2",
    verso:"Tú eres mi castillo de misericordia, mi fortaleza, mi libertador; eres mi escudo, y en ti me refugio; ¡tú haces que los pueblos se sometan a mí! (Sal 144:2)."
  },
  {
    cita:"Proverbios 3:5",
    verso:"Confía en el Señor de todo corazón, y no te apoyes en tu propia prudencia (Pr 3:5)."
  },
  {
    cita:"Proverbios 3:26",
    verso:"El Señor te infundirá confianza, y evitará que tus pies queden atrapados (Pr 3:26)."
  },
  {
    cita:"Proverbios 29:25",
    verso:"El miedo a los hombres es una trampa, pero el que confía en el Señor es exaltado (Pr 29:25)."
  },
  {
    cita:"Isaías 26:3",
    verso:"Tú guardas en completa paz a quien siempre piensa en ti y pone en ti su confianza (Is 26:3)."
  },
  {
    cita:"Jeremías 17:7",
    verso:"Pero bendito el hombre que confía en mí, que soy el Señor, y que en mí pone su confianza (Jr 17:7)."
  },
  {
    cita:"Nahúm 1:7",
    verso:"El Señor es bueno; es un refugio en el día de la angustia. El Señor conoce a los que en él confían (Nah 1:7)."
  },
  {
    cita:"Habacuc 2:4",
    verso:"Aquel cuya alma no es recta, es arrogante; pero el justo vivirá por su fe (Hab 2:4)."
  },
  {
    cita:"Romanos 4:3",
    verso:"Pues ¿qué es lo que dice la Escritura? Que Abrahán le creyó a Dios, y esto se le tomó en cuenta como justicia (Ro 4:3)."
  },
  {
    cita:"1 Corintios 16:13",
    verso:"Manténganse atentos y firmes en la fe; sean fuertes y valientes ( 1 Co 16:13)."
  },
  {
    cita:"Efesios 3:17",
    verso:"Para que por la fe Cristo habite en sus corazones, y para que, arraigados y cimentados en amor (Ef 3:17)."
  },
  {
    cita:"Efesios 6:16",
    verso:"Además de todo esto, protéjanse con el escudo de la fe, para que puedan apagar todas las flechas incendiarias del maligno (Ef 6:16)."
  },
  {
    cita:"1 Tesalonicenses 5:8",
    verso:"Pero nosotros, los que somos del día, debemos ser sobrios, ya que nos hemos revestido de la coraza de la fe y del amor, y tenemos como casco la esperanza de la salvación (1 Tes 5:8)."
  },
  {
    cita:"2 Timoteo 2:22",
    verso:"Huye también de las pasiones juveniles, y sigue la justicia, la fe, el amor y la paz, junto con aquellos que con un corazón limpio invocan al Señor (2 Ti 2:22)."
  },
  {
    cita:"Hebreos 10:38",
    verso:"Pero el justo vivirá por la fe; y si se vuelve atrás, no será de mi agrado (He 10:38)."
  },
]

const nuevoVerso = document.getElementById('nueva__cita');
nuevoVerso.addEventListener('click', async () => {
  try {
    const citaContainer = document.createElement('div');
    const citaDiv = document.createElement('div');
    const versoDiv = document.createElement('div');
    const cita = citasDeFe[Math.floor(Math.random() * citasDeFe.length)];

    citaDiv.innerText = cita.cita;
    versoDiv.innerText = cita.verso;
    citaDiv.setAttribute('id', 'cita');
    versoDiv.setAttribute('id', 'verso');
    citaContainer.setAttribute('id', 'citas__biblicas-container');

    citaContainer.appendChild(citaDiv);
    citaContainer.appendChild(versoDiv);

    const currCita = document.getElementById('citas__biblicas-container');

    currCita.remove()

    const workingDiv = document.getElementById('citas__biblicas');
    setTimeout(() => {
      workingDiv.appendChild(citaContainer);

    }, 100)

    console.log(citaContainer)

  } catch(error) {
    console.error('Error: ', error);
  }
})
