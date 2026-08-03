const floraCards = [
  {
    id: 1,
    image: "./images/illustration-00.png",
    name: "Doryanthes excelsa 01",
    description:
      "Commonly known as 'gymea lily', is a flowering plant endemic to coastal areas \
      of New South Wales, near Sydney.",
  },
  {
    id: 2,
    image: "./images/illustration-01.png",
    name: "Doryanthes excelsa 02",
    description:
      "Commonly known as 'gymea lily', is a flowering plant endemic to coastal areas \
      of New South Wales, near Sydney.",
  },
  {
    id: 3,
    image: "./images/illustration-02.png",
    name: "Doryanthes excelsa 03",
    description:
      "Commonly known as 'gymea lily', is a flowering plant endemic to coastal areas \
       of New South Wales, near Sydney.",
  },
  {
    id: 4,
    image: "./images/illustration-03.png",
    name: "Grevillea banksii",
    description:
      "Commonly known as 'red flowered silky oak', is a flowering plant endemic to Queensland.",
  },
  {
    id: 5,
    image: "./images/illustration-04.png",
    name: "Chiloglottis diphylla",
    description:
      "Commonly known as 'wasp orchid', is a species of orchid endemic to Australia.",
  },
  {
    id: 6,
    image: "./images/illustration-05.png",
    name: "Banksia coccinea",
    description:
      "Commonly known as 'scarlet banksia', is an erect shrub or small tree\
       [distributed in the wild] along the southwest coast of Western Australia.",
  },
  {
    id: 7,
    image: "./images/illustration-06.png",
    name: "Brunonia sericea",
    description:
      "Commonly known as the 'blue pincushion' or 'native cornflower', \
      is an is a flowering herb found in woodlands, open forests and sand plains across Australia.",
  },
  {
    id: 8,
    image: "./images/illustration-07.png",
    name: "Cloanthes stoechadis",
    description:
      "A species of flowering plants [with] shrubs, \
      hairy foliage, blistered or wrinkly leaves and flowers \
      with five petals fused at the baser, usually with two 'lips'.",
  },
  {
    id: 9,
    image: "./images/illustration-08.png",
    name: "Aneilema crispata (crispatum)",
    description:
      "Commonly known as 'Pollia crispata' or 'fringed bluebell'. The plant features bright green \
      leaves with distinct wavy margins, growing along ascending stems. It produces \
      delicate white flowers and glossy berries.",
  },
  {
    id: 10,
    image: "./images/illustration-09.png",
    name: "Johnsonia lupulina",
    description:
      "Commonly known as 'hooded lily', is a plant endemic to the south of Western Australia. \
      It is a rhizomatous (subterranean rhizome) plant. The stem sends out roots from its \
      nodes...[and] they develop buds that grow horizontally as creamy-white flowers.",
  },
  {
    id: 11,
    image: "./images/illustration-10.png",
    name: "Stylidium violaceum",
    description:
      "Commonly known as the 'violet triggerplant', is primarily found in the southwestern region \
      of Western Australia. It is a 'dicotyledonous' plant (dicots). The name refers to its seed \
      having two embyonic leaves or 'cotyledons' (seed leafs).",
  },
  {
    id: 12,
    image: "./images/illustration-11.png",
    name: "Caronema spicatum",
    description:
      "Herb in the 'Comelinaceae' family of flowering plants, referred to as  the 'dayflower' family. \
      It blossoms between January and July producing yellow flowers. Found in the Kimberley region in \
      Western Australia.",
  },
];

/**
 * Retrieves a card object by its ID from the floraCards array.
 *
 * @param {string} cardId - The unique identifier of the card to retrieve
 * @returns {object|undefined} The card object if found, undefined otherwise
 */
function getCardByID(cardId) {
  return floraCards.find((card) => card.id === cardId);
}

export { floraCards, getCardByID };
