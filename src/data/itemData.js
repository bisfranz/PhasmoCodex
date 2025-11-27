const emfDescription = "Equipo adquirible que mide la intensidad de <strong>campos electromagnéticos</strong> cercanos para detectar la evidencia <strong>EMF Nivel 5</strong>.<br>Su alcance y visualización dependen del nivel del dispositivo.<br>Sostenerlo activo a menos de <strong>7.5m</strong> del fantasma (o <strong>2.5m</strong> si es un <strong>Yokai</strong>) durante una cacería en el mismo piso <strong>atraerá al fantasma</strong>.<br>Durante cacerías o manifestaciones, los EMF dentro de <strong>10m</strong> (mayor distancia frente a un <strong>Raiju</strong>) <strong>fallarán</strong> y mostrarán valores aleatorios entre <strong>Nivel 1 y 4</strong>.<br><br><strong>Niveles EMF:</strong><br><strong>1</strong> - Azul: Sin actividad<br><strong>2</strong> - Verde: Interacción / Habilidad<br><strong>3</strong> - Amarillo: Objeto lanzado<br><strong>4</strong> - Naranja: Manifestación<br><strong>5</strong> - Rojo: <strong>Evidencia</strong> (33% probabilidad)";
const dotsDescription = "El <strong>Proyector D.O.T.S</strong> es un equipo electrónico inicial y también una forma de <strong>evidencia</strong>, utilizado para revelar el movimiento del fantasma.<br><br>Puede colocarse en una pared o en el piso de manera similar a un sensor de movimiento, emitiendo una matriz de <strong>puntos láser verdes brillantes</strong> en un área reducida. El <strong>Proyector D.O.T.S de Tier I</strong> además puede sostenerse y activarse para crear un <strong>cono de luz D.O.T.S</strong> hacia donde se apunte.<br>El Proyector D.O.T.S de Tier I <strong>no funcionará</strong> si las linternas están desactivadas en la configuración de dificultad personalizada.<br><br>Los fantasmas con que tengan como evidencia D.O.T.S, ocasionalmente entrarán en un <strong>estado/forma único</strong>. Durante este estado, una <strong>silhueta tenue</strong> del fantasma será visible únicamente cuando atraviese la malla de láseres.<br>El fantasma caminará hacia el <strong>jugador más cercano</strong> si hay uno en la misma habitación, o hacia un punto aleatorio si no hay jugadores cerca.<br>Aunque estas siluetas pueden verse a simple vista (a menos que el fantasma sea un <strong>Goryo</strong>), una <strong>cámara de video con visión nocturna</strong> puede ofrecer mejor visibilidad.<br><br><strong>Los jugadores muertos no pueden ver un fantasma en estado D.O.T.S por ningún medio.</strong><br><br>Aunque el Proyector D.O.T.S es un equipo electrónico, <strong>solo el Proyector D.O.T.S Tier I</strong> cuando está activado y sostenido <strong>atraerá al fantasma</strong> hacia el jugador durante una cacería; fuera de ese caso, es seguro llevarlo.";
const writingDescription = "El libro de escritura fantasma se utiliza para obtener la evidencia de <strong>Escritura Fantasma</strong> colocando el libro en cualquier superficie cercana a la habitación favorita del fantasma.<br>Al apuntar hacia una superficie y mantener presionado el botón de <strong>Uso Secundario</strong>, aparecerá una vista previa translúcida del libro abierto. Al soltar el botón, el libro será colocado.<brSi el fantasma de tu partida tiene como evidencia la <strong>Escritura Fantasma</strong>, este podrá interactuar escribiendo en el libro.<br>Cuando esto ocurra, el libro <strong>levitará ligeramente</strong> y la pluma comenzará a garabatear de forma frenética tanto de manera visual como audible, para luego ser <strong>arrojada al suelo</strong>.<br>Esta interacción generará un <strong>EMF Nivel 2</strong>, con un <strong>33% de probabilidad</strong> de convertirse en <strong>EMF Nivel 5</strong> si dicha evidencia forma parte del fantasma.<br>El fantasma no escribirá si el libro está <strong>cerrado</strong> o fuera de <strong>rango de influencia</strong>.<br><br>Un fantasma puede <strong>lanzar el Libro de Escritura</strong> únicamente si la evidencia de Escritura Fantasma <strong>no</strong> forma parte de sus evidencias o si esta se encuentra <strong>oculta</strong>.<br>Tras ser lanzado, el libro se <strong>cerrará automáticamente</strong>.";
const spiritBoxDescription = "Dispositivo que permite obtener la evidencia de <strong>Caja espectral</strong>.<br>Genera <strong>ruido blanco</strong> al sintonizar múltiples frecuencias de radio, lo que posibilita que el fantasma <strong>se comunique verbalmente</strong> con los jugadores.<br><br>Puede activarse o desactivarse mediante una tecla configurable, emitiendo un <strong>sonido estático constante</strong> mientras está encendido.<br>El indicador LED o icono del micrófono muestra si la Caja espectral está <strong>escuchando</strong> o <strong>recibiendo entrada de voz</strong> según el modo de chat utilizado (Push-to-Talk, Activación por Voz o Alternar).<br><br><strong>Formas de obtener una respuesta:</strong><br>• Hablar usando chat de voz con una pregunta válida.<br>• Seleccionar una de las preguntas desde la <strong>interfaz de texto</strong>.<br>• Usar el modo de reconocimiento <strong> Voz / Voz del Sistema / Ninguno </strong>, permitiendo que la Caja espectral <strong>pregunte automáticamente cada 10s</strong> mientras el chat de voz esté activo.<br><br>Una respuesta exitosa hará que el dispositivo muestre una <strong>confirmación visual</strong> dependiendo del nivel del equipo y reproducirá una <strong>voz distorsionada</strong> como evidencia.<br>Si se muestran indicadores de <strong>fallo</strong> (LEDs rojos o ícono de X), una o más condiciones no se han cumplido.<br><br><strong>Requisitos para obtener una respuesta:</strong><br>• El fantasma debe tener la <strong>Caja espectral</strong> como tipo de evidencia.<br>• Estar en la <strong>misma habitación</strong> que el fantasma.<br>• Estar dentro del rango adecuado: <strong>3m (Tier I)</strong>, <strong>4m (Tier II)</strong>, <strong>5m (Tier III)</strong>.<br>• Todas las <strong>luces de la habitación</strong> deben estar apagadas (las luces de otras salas no afectan).<br>• Responderá solo a una persona si el fantasma requiere estar <strong>solo</strong>; de lo contrario, responderá con personas <strong>en grupo</strong>.<br><br>Incluso cumpliendo todas las condiciones, la respuesta depende de una <strong>probabilidad</strong> que varía según el nivel del dispositivo.<br>La Caja espectral puede fallar repetidamente y mostrar indicadores negativos incluso si el fantasma posee esta evidencia.<br><br>Solo es necesario que la Caja espectral esté <strong>cerca del jugador</strong>, sin requerir ninguna ubicación específica.";
const thermometerDescription = "Equipo adquirible utilizado para medir la <strong>temperatura ambiental</strong> cercana y detectar la evidencia de <strong>Temperaturas Heladas</strong>.<br>Permite identificar rápidamente la <strong>habitación del fantasma</strong> al registrar valores anormalmente bajos en comparación con el resto del edificio.<br><br>Para obtener una lectura precisa, es recomendable <strong>apuntar directamente</strong> hacia diferentes puntos de la habitación y dejar <strong>tiempo suficiente</strong> para que la temperatura se estabilice después de que el fantasma se mueva o cambie de ubicación.<br><br>Las Temperaturas Heladas se manifiestan cuando el dispositivo registra valores por debajo de <strong>0°C</strong> (o <strong>32°F</strong>), acompañadas de <strong>vaho visible</strong> procedente de la respiración del jugador.<br><br>Durante cacerías o manifestaciones, el termómetro puede mostrar lecturas <strong>menos estables</strong> debido a cambios repentinos provocados por la actividad del fantasma.<br><br><strong>Rangos de lectura:</strong><br><strong>10°C a 20°C</strong> - Actividad normal / ambiente neutro<br><strong>5°C a 10°C</strong> - Actividad ligera del fantasma<br><strong>0.10°C a 5°C</strong> - Zona probable del fantasma<br><strong>< 0.9°C</strong> - <strong>Temperaturas Heladas</strong> (Evidencia)";





export const itemData = [
    {
        id: 1,
        name: 'Medidor EMF',
        icon: require('../img/items/emf3.png'),
        tiers: {
            1: {
                icon: require('../img/items/emf1.png'),
                description: emfDescription,
                precision: "Baja",
                rango: "1,7 metros",
                type: "Electrónico",
                extra: "El <strong>Medidor EMF de Tier I</strong> es un <strong>GheistField Meter</strong> de modelo antiguo, similar a un contador Geiger, con un alcance de <strong>1.7 metros</strong> para captar lecturas.<br>Al estar dentro del rango de una lectura EMF, comenzará a emitir clics y la aguja se moverá a la zona aproximada correspondiente al valor detectado, aunque puede oscilar hacia arriba o abajo debido a su antigüedad.<br><br>Cuando se detecta un <strong>EMF Nivel 5</strong>, la aguja se moverá rápidamente hasta el extremo derecho y oscilará mucho menos, manteniéndose <strong>por encima de la marca de nivel 5</strong> (quedarse en ella o por debajo <strong>no cuenta</strong>)."
            },
            2: {
                icon: require('../img/items/emf2.png'),
                description: emfDescription,
                precision: "Media",
                rango: "2 metros",
                extras: "Indicador de audio",
                type: "Electrónico",
                extra: "El <strong>Medidor EMF de Tier II</strong> es un modelo <strong>K2 Meter</strong>, un dispositivo compacto de color negro con <strong>cinco luces LED de colores</strong>, cada una indicando un nivel distinto de lectura EMF.<br>Posee un alcance efectivo de <strong>2 metros</strong>.<br><br>Al detectar una emisión EMF, el K2 encenderá distintas cantidades de LEDs, acompañados de un <strong>tono sonoro</strong> relacionado con la intensidad de la lectura.<br>Si múltiples fuentes EMF están dentro del alcance, el dispositivo mostrará <strong>la lectura más alta</strong>, aunque una posición específica del jugador puede cambiar cuál lectura se detecta.<br><br>Cuando se detecta un <strong>EMF Nivel 5</strong>, las <strong>cinco luces</strong> se encenderán y sonará un <strong>tono agudo</strong>."
            },
            3: {
                icon: require('../img/items/emf3.png'),
                description: emfDescription,
                precision: "Alta",
                rango: "3,5 metros",
                extras: [
                    "Indicador de audio",
                    "Indicador de distancia",
                    "Indicador direccional",
                    "Con pantalla"
                ],
                type: "Electrónico",
                extra: "El <strong>Medidor EMF de Tier III:</strong> es un modelo <strong>EMF ParaMeter</strong>, con un diseño similar a una PDA, carcasa plástica negra y una <strong>pantalla central grande</strong>.<br>Posee un alcance de <strong>3.5 metros</strong> y puede <strong>registrar hasta tres interacciones simultáneamente</strong>.<br><br>Muestra el nivel EMF llenando una serie de guiones, además de indicar <strong>distancia</strong> (en metros) y <strong>dirección</strong> desde donde ocurrió la lectura, permitiendo localizar rápidamente el origen de la emisión.<br><br>Al detectar un nivel inferior a <strong>EMF 5</strong>, emitirá un <strong>beep</strong> normal.<br>Cuando detecta <strong>EMF Nivel 5</strong>, <strong>todos los guiones se llenarán</strong> y reproducirá un beep único de tono más agudo."
            }
        }
    },
    {
        id: 2,
        name: 'Proyector D.O.T.S.',
        icon: require('../img/items/dots3.png'),
        tiers: {
            1: {
                icon: require('../img/items/dots1.png'),
                description: dotsDescription,
                rango: "5 metros",
                foco: "Estrecho",
                extras: [
                    "Colocable",
                ],
                type: "Electrónico",
                extra: "El <strong>Proyector D.O.T.S de Tier I</strong> es un dispositivo básico de luz láser verde diseñado para revelar la <strong>silueta del fantasma</strong> cuando se mueve a través de su área de proyección.<br>Cuenta con un <strong>alcance muy limitado</strong> y una cobertura pequeña, lo que hace que sea fácil que el fantasma pase sin ser detectado si no está bien colocado.<br><br>Debido a su baja potencia, la proyección es <strong>menos visible</strong> y más tenue que en versiones superiores, por lo que es recomendable utilizarlo en habitaciones pequeñas o pasillos estrechos.<br><br>Si el fantasma atraviesa el área iluminada, su figura se verá <strong>ligeramente difusa y rápida</strong>, por lo que se requiere mucha atención al observarlo."
            },
            2: {
                icon: require('../img/items/dots2.png'),
                description: dotsDescription,
                rango: "2.5 metros",
                extras: [
                    "Iluminación en área",
                    "Colocable",
                ],
                type: "Electrónico",
                extra: "El <strong>Proyector D.O.T.S de Tier II</strong> es una versión mejorada con una matriz láser más potente y un área de cobertura <strong>notablemente mayor</strong> que la del Tier I.<br>Su proyección es más clara y visible, facilitando la detección de la <strong>forma completa del fantasma</strong> cuando atraviesa el campo iluminado.<br><br>Puede colocarse tanto en <strong>paredes como en el suelo</strong>, y es ideal para habitaciones medianas o zonas abiertas donde el fantasma tiende a desplazarse con frecuencia.<br><br>Al activarse, la figura del fantasma se mostrará de manera <strong>más definida y estable</strong>, permitiendo reconocerla sin necesidad de observar con tanta precisión."
            },
            3: {
                icon: require('../img/items/dots3.png'),
                description: dotsDescription,
                rango: "7 metros",
                foco: "Amplio",
                extras: [
                    "Escaneo",
                    "Colocable",
                ],
                type: "Electrónico",
                extra: "El <strong>Proyector D.O.T.S de Tier III</strong> es la versión más avanzada, capaz de cubrir un área <strong>muy amplia</strong> con una proyección láser extremadamente nítida y brillante.<br>Su alcance permite iluminar <strong>habitaciones grandes</strong> e incluso áreas abiertas con excelente visibilidad, haciendo mucho más fácil identificar el movimiento del fantasma.<br><br>Incluye un sistema de <strong>autosincronización</strong> que mantiene la intensidad y estabilidad de la proyección sin parpadeos, incluso durante eventos paranormales intensos.<br><br>Cuando el fantasma cruza la zona iluminada, su silueta aparece <strong>completa, clara y de larga duración</strong>, permitiendo observar su desplazamiento sin dificultad y confirmar la evidencia con rapidez."
            }
        }
    },
    {
        id: 3,
        name: 'Libro de escritura fantasma',
        icon: require('../img/items/writing3.png'),
        tiers: {
            1: {
                icon: require('../img/items/writing1.png'),
                description: writingDescription,
                rango: "3 metros",
                tasaInteraccion: "Baja",
                extra: "El <strong>Libro de Escritura fantasma de Tier I</strong> es un cuaderno simple utilizado para intentar obtener la evidencia de <strong>Escritura Fantasma</strong> colocándolo cerca de la actividad espiritual.<br>Su diseño básico <strongapenas ofrece indicaciones claras</strong> de cuándo el fantasma interactúa con él.<br><br>Debido a su limitada calidad, el fantasma puede tardar más tiempo en escribir, y solo lo hará si se encuentra <strong>muy cerca</strong> y en línea directa con el libro.<br><br>Si el fantasma escribe, las páginas mostrarán garabatos o símbolos oscuros sin animaciones adicionales, y se generará una lectura de <strong>EMF Nivel 2</strong> con un <strong>33% de probabilidad</strong> de ser <strong>Nivel 5</strong> si esta evidencia forma parte del fantasma."
            },
            2: {
                icon: require('../img/items/writing2.png'),
                description: writingDescription,
                rango: "4 metros",
                tasaInteraccion: "Media",
                extra: "El <strong>Libro de Escritura fantasma de Tier II</strong> poseé un rango ligeramente mayor que facilita que el fantasma interactúe sin necesidad de colocarlo tan cerca.<br><br>Al activarse, el libro <strong>vibra suavemente</strong> y la pluma realiza trazos visibles sobre las páginas, haciendo mucho más evidente la interacción.<br><br>De igual manera, esta acción producirá una lectura de <strong>EMF Nivel 2</strong> con un <strong>33% de probabilidad</strong> de convertirse en <strong>Nivel 5</strong> si es evidencia válida del fantasma."
            },
            3: {
                icon: require('../img/items/writing3.png'),
                description: writingDescription,
                rango: "5 metros",
                tasaInteraccion: "Alta",
                extra: "El <strong>Libro de Escritura fantasma de Tier III</strong> es la versión más avanzada del libro, su rango de interacción aumenta a <strong>5 metros</strong> y permite registrar escritura incluso desde mayor distancia o en espacios más abiertos.<br><br>Cuando el fantasma escribe, el libro <strong>levita</strong> y la pluma realiza un garabateo <strong>rápido y ruidoso</strong> antes de ser <strong>lanzada</strong> al suelo de forma dramática.<br><br>Este evento generará una lectura de <strong>EMF Nivel 2</strong> con un <strong>33% de probabilidad</strong> de convertirse en <strong>EMF Nivel 5</strong> si la Escritura Fantasma forma parte de sus evidencias."
            }
        }
    },
    {
        id: 4,
        name: 'Caja espectral',
        icon: require('../img/items/spiritbox3.png'),
        tiers: {
            1: {
                icon: require('../img/items/spiritbox1.png'),
                description: spiritBoxDescription,
                calidadAudio: "Baja",
                tasaRespuesta: "Baja",
                rango: "3 metros",
                type: "Electrónico",
                extra: "La <strong>Caja espectral de Tier I</strong> es un dispositivo básico de radio diseñado para intentar obtener la evidencia de <strong>Caja espectral</strong> mediante comunicación directa con el fantasma.<br>Emite <strong>ruido blanco constante</strong> mientras salta rápidamente entre múltiples frecuencias, pero su recepción es <strong>poco estable</strong>.<br><br>Posee un <strong>rango de detección muy limitado</strong>, requiriendo estar casi junto al fantasma para obtener respuesta, y solo permite interacción dentro de <strong>3 metros</strong>.<br><br>Una respuesta exitosa hará que el indicador del fantasma se <strong>ilumine en blanco</strong> acompañado de una <strong>voz distorsionada</strong> escuchada a través del dispositivo."
            },
            2: {
                icon: require('../img/items/spiritbox2.png'),
                description: spiritBoxDescription,
                calidadAudio: "Media",
                tasaRespuesta: "Media",
                rango: "4 metros",
                extras: [
                    "Con pantalla",
                ],
                type: "Electrónico",
                extra: "La <strong>Caja espectral de Tier II</strong> mejora notablemente la calidad de recepción e incorpora un <strong>indicador visual digital</strong> que muestra si el fantasma está respondiendo o rechazando la pregunta.<br>Su capacidad de alcance se amplía, permitiendo interacción efectiva dentro de <strong>4 metros</strong> del fantasma y facilitando su uso en espacios más grandes.<br><br>Una respuesta válida hará que el <strong>icono del fantasma</strong> aparezca en pantalla junto a una <strong>respuesta de voz distorsionada</strong>, confirmando la evidencia. Si falla, se mostrará un <strong>icono de X</strong> indicando que alguna condición no fue cumplida."
            },
            3: {
                icon: require('../img/items/spiritbox3.png'),
                description: spiritBoxDescription,
                calidadAudio: "Alta",
                tasaRespuesta: "Alta",
                rango: "5 metros",
                type: "Electrónico",
                extra: "La <strong>Caja Espectral de Tier III</strong> es la versión más avanzada del dispositivo, ofreciendo <strong>máxima claridad de audio</strong> y <strong>retroalimentación visual precisa</strong> para detectar respuestas del fantasma con gran facilidad.<br>Cuenta con un <strong>rango extendido de 5 metros</strong>, permitiendo obtener evidencia desde largas distancias.<br><br>Cuando el fantasma responde correctamente, los indicadores se <strong>iluminan completamente en blanco</strong> y se reproduce una <strong>voz distorsionada mucho más nítida</strong> a través del equipo. En caso de fallo, los LEDs se <strong>encienden en rojo</strong> para indicar rechazo inmediato."
            }
        }
    },
    {
        id: 5,
        name: 'Termómetro',
        icon: require('../img/items/thermometer3.png'),
        tiers: {
            1: {
                icon: require('../img/items/thermometer1.png'),
                description: thermometerDescription,
                precision: "Baja",
                tasaRefresco: "Baja",
                extra: "El <strong>Termómetro de Tier I</strong> mide de forma <strong>pasiva</strong> la temperatura de la última habitación donde fue sostenido, mostrando el resultado a través del <strong>líquido rojo</strong> interno que sube o baja según el cambio de temperatura del entorno.<br><br>Actualiza sus lecturas de manera <strong>muy lenta</strong>, a una tasa aproximada de <strong>0.33°C por segundo</strong>, lo que puede dificultar detectar cambios repentinos. Sin embargo, tiene la ventaja de no ser un <strong>dispositivo electrónico</strong>, por lo que <strong>no atraerá al fantasma</strong> al sostenerlo durante una cacería.<br><br>Puede mostrar valores tanto en <strong>Celsius (°C)</strong> como en <strong>Fahrenheit (°F)</strong>, con la escala Celsius ubicada a la izquierda y Fahrenheit a la derecha.<br><br>La lectura puede variar ligeramente respecto al valor real, con una desviación de hasta <strong>+3°C</strong>."
            },
            2: {
                icon: require('../img/items/thermometer2.png'),
                description: thermometerDescription,
                precision: "Media",
                tasaRefresco: "Media",
                type: "Electrónico",
                extra: "El <strong>Termómetro de Tier II</strong> permite activar una <strong>pantalla digital</strong> para mostrar la temperatura ambiente de la habitación actual.<br>Al mantener presionado el botón de <strong>Uso</strong>, el dispositivo actualizará la lectura cada <strong>2.5 segundos</strong> en grados <strong>Celsius (°C)</strong>, pudiendo cambiarse a <strong>Fahrenheit (°F)</strong> desde el menú de configuración.<br><br>Las mediciones pueden variar ligeramente respecto al valor real, con una desviación máxima de <strong>+3°C</strong> debido a fluctuaciones ambientales."
            },
            3: {
                icon: require('../img/items/thermometer3.png'),
                description: thermometerDescription,
                precision: "Alta",
                tasaRefresco: "Alta",
                type: "Electrónico",
                extra: "Similar al <strong>Termómetro de Tier II</strong>, puede alternarse para activar la pantalla y obtener una lectura manteniendo presionado el botón de uso.<br>En comparación con el modelo de Tier II, es <strong>mucho más rápido</strong> al mostrar resultados, tardando solo <strong>1.5 segundos</strong> entre cada medición.<br><br>De forma predeterminada, la lectura se mostrará en <strong>grados Celsius (°C)</strong>; esto puede cambiarse a <strong>Fahrenheit (°F)</strong> desde la configuración.<br><br>La medición tendrá una variación máxima de <strong>+2 grados</strong> en Celsius respecto al valor real."
            }
        }
    },
























];