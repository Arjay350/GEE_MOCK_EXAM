const questions = [
  { source: 2, topic: "POPULATIONS", text: "Threatened species are defined as species with ___________.", options: ["Enough individuals to survive in the short term, but not long term", "Few individual survivors that could soon become extinct", "Few individual survivors that could not become extinct", "Enough individuals to survive in the long term, but not short term"], answer: 0, explanation: "Threatened species have populations that may persist in the short term but face a risk of extinction over the longer term." },
  { source: 3, topic: "POPULATION GROWTH", text: "A J-shaped curve is characteristic of _______.", options: ["Exponential growth", "A population that has overshot its carrying capacity", "Logistic growth", "Zero population growth"], answer: 0, explanation: "Exponential growth produces a J-shaped curve when a population increases rapidly under favorable conditions." },
  { source: 4, topic: "HUMAN IMPACT", text: "The following factors have greater environmental impact in developed countries than in developing countries EXCEPT:", options: ["Population growth", "Pollution and waste", "Resource use", "Wealth and income"], answer: 0, explanation: "Population growth is typically greater in developing countries, while per-person resource use and waste are often higher in developed countries." },
  { source: 5, topic: "POPULATIONS", text: "What is the maximum population of a given species that a habitat can sustain indefinitely?", options: ["Carrying capacity", "Environmental resistance", "Limiting factors", "Range of tolerance"], answer: 0, explanation: "Carrying capacity is the population size an environment can support over the long term with its available resources." },
  { source: 6, topic: "ATMOSPHERE", text: "Global warming occurs in the ______ and ozone depletion occurs in the ______.", options: ["Troposphere; stratosphere", "Troposphere; lithosphere", "Stratosphere; thermosphere", "Stratosphere; mesosphere"], answer: 0, explanation: "Weather and the greenhouse effect occur primarily in the troposphere; the protective ozone layer is in the stratosphere." },
  { source: 7, topic: "SUSTAINABILITY", text: "Which statement correctly identifies examples of biofuels?", options: ["Both biodiesel and bioethanol", "Biodiesel only", "Bioethanol only", "Unleaded gasoline"], answer: 0, explanation: "Biodiesel and bioethanol are both fuels made from biological materials." },
  { source: 8, topic: "WATER CYCLE", text: "What is the process in which rainwater seeps through soil and becomes groundwater?", options: ["Infiltration", "Transpiration", "Precipitation", "Condensation"], answer: 0, explanation: "Infiltration is the movement of water from the land surface into the soil." },
  { source: 9, topic: "ENVIRONMENTAL POLICY", text: "Which is NOT categorized as an Environmentally Critical Project (ECP)?", options: ["Handicraft industry", "Golf course project", "Coal power plant", "Major mining and quarrying industry"], answer: 0, explanation: "The answer key identifies a handicraft industry as the exception; the other options are examples of ECPs." },
  { source: 10, topic: "BIOMES", text: "Which type of forest is found near the equator?", options: ["Tropical", "Temperate", "Cold forest", "Arctic tundra"], answer: 0, explanation: "Tropical forests are commonly found in equatorial regions with warm temperatures year-round." },
  { source: 11, topic: "WATER POLLUTION", text: "Which of the following is NOT a form of water pollution?", options: ["High dissolved oxygen", "Pathogenic bacteria", "Elevated temperature", "Heavy metals"], answer: 0, explanation: "High dissolved oxygen generally supports aquatic life. Pathogens, heat, and heavy metals can all pollute water." },
  { source: 12, topic: "POPULATIONS", text: "What is the average number of children born to women in a population during their reproductive years?", options: ["Total fertility rate", "Mortality rate", "Birth rate", "Crude birth rate"], answer: 0, explanation: "Total fertility rate estimates the average number of children a woman has over her reproductive years." },
  { source: 13, topic: "SPECIES INTERACTIONS", text: "What occurs when two species interact over a long period, with changes in one species' gene pool leading to changes in the other's?", options: ["Coevolution", "Immigration", "Ecological succession", "Interspecific competition"], answer: 0, explanation: "Coevolution is reciprocal evolutionary change between interacting species over generations." },
  { source: 14, topic: "ECOLOGY", text: "What is the place where a population or individual of a species lives?", options: ["Habitat", "Biodiversity", "Niche", "Population"], answer: 0, explanation: "A habitat is the place where an organism lives. A niche describes its role and way of life." },
  { source: 15, topic: "WASTE MANAGEMENT", text: "What is the controlled burning of waste with appropriate air pollution controls?", options: ["Incineration", "Dumping", "Landfilling", "Sedimentation"], answer: 0, explanation: "Incineration is the controlled combustion of waste, typically with pollution-control equipment." },
  { source: 16, topic: "BIODIVERSITY", text: "What is the extinction of many species in a relatively short period of geologic time called?", options: ["Mass extinction", "Short period extinction", "Common extinction", "Geologic extinction"], answer: 0, explanation: "A mass extinction is a geologically brief interval in which a large proportion of species disappear." },
  { source: 17, topic: "ECOSYSTEMS", text: "Which of these is NOT a biotic component?", options: ["Sunlight", "Humans", "Plants", "Migratory birds"], answer: 0, explanation: "Biotic components are living things. Sunlight is an abiotic factor." },
  { source: 18, topic: "ATMOSPHERE", text: "Which gases impede the exit of reflected solar energy from Earth's atmosphere?", options: ["Greenhouse gases", "Inert gases", "Nitrogenous gases", "Ozone gas"], answer: 0, explanation: "Greenhouse gases absorb and re-emit infrared radiation, trapping heat in the atmosphere." },
  { source: 19, topic: "CLIMATE", text: "What are the two main factors that determine climate?", options: ["Average temperature and average precipitation", "Average temperature and amount of cloud cover", "The jet stream and average amount of precipitation", "Proximity to a body of water and average temperature"], answer: 0, explanation: "Climate is primarily described by long-term patterns in average temperature and precipitation." },
  { source: 20, topic: "SUSTAINABILITY", text: "Sustainability is the ability of the ______ and ______ to survive, flourish, and adapt together over time.", options: ["Ecosystem; human cultural system", "Ecosystem; human being", "Human being; environment", "Human being; human cultural system"], answer: 0, explanation: "The provided answer key defines sustainability as the ability of ecosystems and human cultural systems to thrive together." },
  { source: 21, topic: "ECOLOGY", text: "Ecologists say that a niche is like a species' ______, while its habitat is like its ______.", options: ["Occupation; address", "Appearance; physiology", "Family history; occupation", "Education; occupation"], answer: 0, explanation: "A niche is an organism's role (its occupation); habitat is the place where it lives (its address)." },
];

questions.push(
  { source: 22, topic: "POLLUTION", text: "What is pollution that comes from single, fixed, often large identifiable sources called?", options: ["Point sources", "Non-point sources", "Mobile sources", "Movable sources"], answer: 0, explanation: "Point-source pollution comes from a distinct, identifiable location, such as a discharge pipe." },
  { source: 23, topic: "POPULATIONS", text: "What are species that reproduce rapidly under favorable environmental conditions?", options: ["Opportunists", "K-selected species", "R-selected species", "S-selected species"], answer: 2, explanation: "R-selected species tend to reproduce quickly and produce many offspring when conditions are favorable." },
  { source: 24, topic: "HUMAN IMPACT", text: "Which of the following is NOT a cause of environmental problems?", options: ["Conservation", "Poverty", "Rapid population growth", "Unsustainable resource use"], answer: 0, explanation: "Conservation helps protect natural resources; the other options can contribute to environmental problems." },
  { source: 25, topic: "LAND RESOURCES", text: "What are unfenced tropical or temperate grasslands that supply forage for grazing?", options: ["Rangelands", "Croplands", "Freshwater fisheries", "Ocean fisheries"], answer: 0, explanation: "Rangelands are natural grasslands and other open lands used for grazing." },
  { source: 26, topic: "WASTE MANAGEMENT", text: "What are corrosive, ignitable, reactive, toxic, and infectious wastes called?", options: ["Hazardous wastes", "Carcinogenic wastes", "Hospital wastes", "Radioactive wastes"], answer: 0, explanation: "Wastes with dangerous properties such as toxicity, reactivity, or ignitability are classified as hazardous." },
  { source: 27, topic: "SUSTAINABILITY", text: "Renewable resources are resources that are ______.", options: ["Replenished by natural processes within their sustainable yield", "Perpetually available and expected to last", "Available in fixed quantities that can be renewed", "Renewed through long-term geologic processes"], answer: 0, explanation: "Renewable resources can replenish naturally, provided they are not used faster than their sustainable yield." },
  { source: 28, topic: "ENVIRONMENTAL HEALTH", text: "What is the use of statistics to estimate harm from a hazard?", options: ["Risk assessment", "Risk management", "Risk analysis", "Hazard management"], answer: 0, explanation: "Risk assessment estimates the likelihood and potential consequences of harm from a hazard." },
  { source: 29, topic: "SPECIES INTERACTIONS", text: "What occurs when competing species evolve specialized traits that let them use shared resources at different times, in different ways, or in different places?", options: ["Resource partitioning", "Parasitism", "Ecological succession", "Coevolution"], answer: 0, explanation: "Resource partitioning reduces competition by allowing species to use shared resources differently." },
  { source: 30, topic: "ENVIRONMENTAL HEALTH", text: "What are certain viruses, some types of radiation, and chemicals that cause cancer called?", options: ["Carcinogens", "Mutagens", "Teratogens", "None of these"], answer: 0, explanation: "Carcinogens are agents that can cause cancer." },
  { source: 31, topic: "BIOMES", text: "Boreal forest is classified as a ______ forest.", options: ["Cold", "Arctic tundra", "Temperate", "Tropical"], answer: 0, explanation: "Boreal forests (taiga) are cold, high-latitude forests." },
  { source: 32, topic: "AIR POLLUTION", text: "What are minute pieces of solid materials dispersed into the atmosphere (less than 10 microns) called?", options: ["Particulates", "Volatile organic compounds", "Aerosols", "Dissolved organic matter"], answer: 0, explanation: "Particulates are tiny solid particles suspended in the air." },
  { source: 33, topic: "POPULATIONS", text: "Population change equals births plus immigration minus which of the following?", options: ["Deaths + emigration", "Deaths + immigration", "Deaths only", "Emigration only"], answer: 0, explanation: "Deaths and emigration reduce a population, so both are subtracted along with births and immigration." },
  { source: 34, topic: "ECOLOGY", text: "What is the normal, gradual change in species composition in a geographic area called?", options: ["Ecological succession", "Environmental resistance", "Limiting factor", "Population density"], answer: 0, explanation: "Ecological succession is the gradual change in the species composition of a community over time." },
  { source: 35, topic: "POPULATIONS", text: "Labor shortages and increased per capita health care costs are associated with ______.", options: ["Rapid population decline", "Slow population growth", "Slow population decline", "Rapid population growth"], answer: 0, explanation: "Rapid population decline can shrink the workforce while increasing costs per person for an aging population." },
  { source: 36, topic: "CLIMATE CHANGE", text: "The single most important step we can take to slow global warming is to decrease ______ emissions.", options: ["Carbon dioxide", "Methane", "Nitrogen oxide", "Sulfur dioxide"], answer: 0, explanation: "Reducing carbon dioxide emissions, especially from fossil fuels, is a key step in slowing global warming." },
  { source: 37, topic: "SUSTAINABILITY", text: "What is the highest rate at which a potentially renewable resource can be used without reducing its supply?", options: ["Sustainable yield", "Economic development", "Environmental degradation", "Ecological footprint"], answer: 0, explanation: "Sustainable yield is the rate of use that allows a renewable resource to replenish." },
  { source: 38, topic: "ENERGY FLOW", text: "A caterpillar eats a leaf, and a bird eats the caterpillar. In this interaction, the bird is a ______.", options: ["Secondary consumer", "Primary producer", "Primary consumer", "Decomposer"], answer: 0, explanation: "The bird eats a primary consumer (the caterpillar), making it a secondary consumer." },
  { source: 39, topic: "SUSTAINABILITY", text: "An/A ______ occurs when the ______ is larger than the biological capacity to replenish resources and absorb wastes.", options: ["Ecological deficit; ecological footprint", "Ecological footprint; ecological deficit", "Ecological services; ecological deficit", "Ecological deficit; ecological services"], answer: 0, explanation: "An ecological deficit occurs when a population's ecological footprint exceeds the area's biocapacity." },
  { source: 40, topic: "NATURAL CAPITAL", text: "Natural capital consists of ______ and ecological services.", options: ["Resources", "Economic services", "Climate change", "Gross National Product"], answer: 0, explanation: "Natural capital includes natural resources and the ecological services provided by natural systems." },
  { source: 41, topic: "BIODIVERSITY", text: "What is the variety of terrestrial and aquatic ecosystems found in an area or on Earth?", options: ["Ecological diversity", "Functional diversity", "Genetic diversity", "Species diversity"], answer: 0, explanation: "Ecological diversity refers to the variety of ecosystems and habitats in a region or on Earth." },
  { source: 42, topic: "ENVIRONMENTAL POLICY", text: "What certificate is issued to a project proponent authorizing the project to proceed with implementation?", options: ["Environmental Compliance Certificate", "Environmental Commitment Certificate", "Building Clearance Certificate", "Environmental Project Certificate"], answer: 0, explanation: "An Environmental Compliance Certificate (ECC) is the Philippine environmental clearance for a project." },
  { source: 43, topic: "NATURAL RESOURCES", text: "Which of the following is NOT a renewable resource?", options: ["Minerals", "Fertile soil", "Fresh water", "Fresh air"], answer: 0, explanation: "Minerals are nonrenewable on human timescales because they form through slow geologic processes." },
  { source: 44, topic: "EVOLUTION", text: "What is the process in which new species arise over generations from ancestral species?", options: ["Natural selection", "Geographic isolation", "Speciation", "Artificial selection"], answer: 2, explanation: "Speciation is the formation of new species. The source wording describes evolutionary change over generations." },
  { source: 45, topic: "BIODIVERSITY", text: "Which convention regulates the international trade of threatened and endangered species?", options: ["CITES", "CBD", "Kyoto Protocol", "Stockholm Convention"], answer: 0, explanation: "CITES is the Convention on International Trade in Endangered Species of Wild Fauna and Flora." },
  { source: 46, topic: "WATER RESOURCES", text: "What do we call a porous, water-saturated layer of sand, gravel, or bedrock through which groundwater flows?", options: ["Aquifer", "Euphotic zone", "Zone of aeration", "Watershed"], answer: 0, explanation: "An aquifer is a water-bearing geologic formation that stores and transmits groundwater." },
  { source: 47, topic: "SUSTAINABILITY", text: "What is development that meets present needs without compromising future generations' ability to meet their own needs?", options: ["Sustainable development", "Green development", "Ecological development", "Economic development"], answer: 0, explanation: "This is the widely used definition of sustainable development." },
  { source: 48, topic: "POPULATIONS", text: "Human populations grow or decline through the interplay of births, deaths, and ______.", options: ["Migration", "Level of economic development", "Illness", "Family planning"], answer: 0, explanation: "Migration, including immigration and emigration, changes population size along with births and deaths." },
  { source: 49, topic: "WATER RESOURCES", text: "What is the top of the zone of saturation of groundwater called?", options: ["Water table", "Water saturation", "Groundwater aquifer", "Recharge area"], answer: 0, explanation: "The water table is the upper surface of the groundwater-saturated zone." },
  { source: 50, topic: "ENERGY RESOURCES", text: "Which fossil fuel forms from decaying organic matter under heat and pressure over millions of years and is often called the dirtiest fossil fuel?", options: ["Coal", "Shale oil", "Tar sands", "Natural gas"], answer: 0, explanation: "Coal is a carbon-intensive fossil fuel formed from ancient plant matter." },
  { source: 51, topic: "SUSTAINABLE CITIES", text: "What results from ample affordable land, automobile use, highway funding, and inadequate urban planning?", options: ["Urban sprawl", "Eco-cities", "Smart tools", "Smart growth"], answer: 0, explanation: "Urban sprawl is low-density, car-dependent expansion of development into surrounding areas." },
  { source: 52, topic: "ENVIRONMENTAL POLICY", text: "According to the Philippine Clean Air Act of 1999, all sources of air pollution must have a valid ______.", options: ["Permit-to-Operate", "Discharge Permit", "Hospital Clearance", "NBI clearance"], answer: 0, explanation: "The Clean Air Act requires regulated sources to hold a Permit-to-Operate." },
  { source: 53, topic: "EVOLUTION", text: "What occurs when groups within the same population become physically separated by mountains, rivers, roads, or distance?", options: ["Geographic isolation", "Artificial selection", "Natural selection", "Reproductive isolation"], answer: 0, explanation: "Geographic isolation separates populations physically and can limit gene flow between them." },
  { source: 54, topic: "POPULATIONS", text: "What describes the number and percentages of people in young, middle, and old age categories?", options: ["Age structure", "Population stability", "Urbanization", "Population density"], answer: 0, explanation: "Age structure describes the distribution of a population among age groups." },
  { source: 55, topic: "BIODIVERSITY", text: "In the HIPPCO threats to biodiversity, the blanks are ______ and ______.", options: ["Invasive (nonnative) species; overexploitation", "Introduction of nonnative species; overgrazing", "Interactive relationship; ozone depletion", "Intrinsic valuation; on-site mining"], answer: 0, explanation: "HIPPCO includes invasive species and human population growth, along with pollution, climate change, and overexploitation." },
  { source: 56, topic: "SPECIES INTERACTIONS", text: "Which is NOT a method carnivores use to catch their prey?", options: ["Walk up their prey", "Camouflage", "Ambush", "Attack with chemical warfare"], answer: 0, explanation: "Carnivores may use camouflage, ambush, or chemical means; simply walking up to prey is not a typical capture strategy." },
  { source: 57, topic: "AGRICULTURE", text: "What efficient irrigation system pumps groundwater and sprays it from sprinklers on a mobile boom?", options: ["Center pivot", "Gravity flow", "Drip irrigation", "High-pressure flow"], answer: 0, explanation: "Center-pivot irrigation uses a rotating sprinkler system to water crops in a circular area." },
  { source: 58, topic: "ENVIRONMENTAL IMPACT", text: "What is the depletion or destruction of a potentially renewable resource when it is used faster than it is replenished?", options: ["Environmental degradation", "Environmental development", "Environmental impact", "Environmental tragedy"], answer: 0, explanation: "Environmental degradation is the deterioration of natural resources and ecosystems." },
  { source: 59, topic: "WASTE MANAGEMENT", text: "Where are solid wastes spread in thin layers, compacted, and covered daily with a fresh layer of material?", options: ["Sanitary landfill", "Open dumpsite", "Waste pit", "Incinerator"], answer: 0, explanation: "A sanitary landfill compacts waste in layers and covers it regularly to reduce environmental impacts." },
  { source: 60, topic: "ENVIRONMENTAL POLICY", text: "Which Philippine law requires local governments to prepare a 10-year solid waste management plan?", options: ["RA 9003", "RA 6969", "RA 8749", "RA 9275"], answer: 0, explanation: "Republic Act 9003 is the Ecological Solid Waste Management Act of 2000." },
  { source: 61, topic: "ECOSYSTEMS", text: "What is a group of organisms in a defined geographic area that interact with each other and their environment?", options: ["Ecosystem", "Economics", "Environment", "Environmentalism"], answer: 0, explanation: "An ecosystem includes a community of organisms and the physical environment with which they interact." },
  { source: 62, topic: "ENERGY FLOW", text: "Which description correctly represents the gases used in cellular respiration and photosynthesis?", options: ["Photosynthesis uses CO₂ and releases O₂; cellular respiration uses O₂ and releases CO₂", "Both processes use CO₂ and release O₂", "Photosynthesis uses O₂ and releases CO₂; cellular respiration uses CO₂ and releases O₂", "Both processes use O₂ and release CO₂"], answer: 0, explanation: "Photosynthesis takes in carbon dioxide and releases oxygen. Cellular respiration takes in oxygen and releases carbon dioxide. The original diagram choices were not included in the attachment." },
  { source: 63, topic: "POPULATIONS", text: "What is the number of individuals in a given geographic area called?", options: ["Population density", "Range of tolerance", "Limiting factor", "Carrying capacity"], answer: 0, explanation: "Population density is the number of individuals per unit area or volume." },
  { source: 64, topic: "POPULATIONS", text: "Which is currently the world's most populous country?", options: ["China", "Bangladesh", "Nigeria", "India"], answer: 3, explanation: "India is currently the world's most populous country." },
  { source: 65, topic: "POPULATIONS", text: "Which country would have the smallest base in an age-structure diagram?", options: ["Japan", "Afghanistan", "China", "Russia"], answer: 0, explanation: "Japan has a low birth rate and an aging population, resulting in a relatively narrow base." },
  { source: 66, topic: "BIOMES", text: "What is a major habitat or large ecosystem with distinct climates and species called?", options: ["Biome", "Climate", "Ecosystem", "Latitude"], answer: 0, explanation: "A biome is a large ecological region characterized by its climate and typical communities of organisms." },
  { source: 67, topic: "BIODIVERSITY", text: "Amphibian species in Central and South American tropical forests affected by climate change serve as ______.", options: ["Indicator species", "Keystone species", "Native species", "Nonnative species"], answer: 0, explanation: "Indicator species provide signals about environmental conditions or changes in an ecosystem." },
  { source: 68, topic: "LAND RESOURCES", text: "How does removing vegetation, especially on hillsides, affect risk?", options: ["It increases flooding risk", "It increases groundwater overdraft", "It increases sinkholes", "It increases land subsidence"], answer: 0, explanation: "Vegetation slows runoff and helps soil absorb water, so its removal can increase flooding." },
  { source: 69, topic: "ECOLOGY", text: "What science studies interactions among organisms and between organisms and their environment?", options: ["Ecology", "Economics", "Entomology", "Energetics"], answer: 0, explanation: "Ecology is the study of relationships between organisms and their environment." },
  { source: 70, topic: "POLLUTION", text: "What type of pollution source is dispersed and difficult to identify?", options: ["Nonpoint", "Point", "Stationary", "Stagnant"], answer: 0, explanation: "Nonpoint-source pollution comes from diffuse sources rather than one identifiable discharge point." },
  { source: 71, topic: "ENERGY FLOW", text: "What is each step in the flow of energy through an ecosystem called?", options: ["Trophic level", "Tropical level", "Food chain", "Food web"], answer: 0, explanation: "A trophic level is an organism's feeding position in an ecosystem." },
  { source: 72, topic: "BIODIVERSITY", text: "Species that have a strong influence on ecosystem structure, such as pollinators, are called ______ species.", options: ["Keystone", "Nonnative", "Invasive", "Indicator"], answer: 0, explanation: "Keystone species have a disproportionately large effect on ecosystem structure and function." },
  { source: 73, topic: "WATER RESOURCES", text: "What describes the total area that drains water into a stream or river?", options: ["Watershed", "Groundwater", "Aquifer", "Zone of saturation"], answer: 0, explanation: "A watershed is the land area that drains to a particular stream, river, or other water body." },
  { source: 74, topic: "SUSTAINABILITY", text: "What is the area of ocean needed to sustain the fish consumption of an average person, nation, or the world?", options: ["Fish Print", "Water Footprint", "Ecological Footprint", "Carbon Footprint"], answer: 0, explanation: "A fishprint estimates the ocean area needed to support seafood consumption." },
  { source: 75, topic: "BIODIVERSITY", text: "What happens when intact habitats are divided into smaller patches by roads, logging, fields, or urbanization?", options: ["Habitat fragmentation", "Habitat extinction", "Habitat degradation", "Habitat destruction"], answer: 0, explanation: "Habitat fragmentation divides continuous habitat into smaller, separated patches." },
  { source: 76, topic: "ENERGY RESOURCES", text: "Which type of energy comes from heat stored in soil, underground rocks, and fluids in Earth's mantle?", options: ["Geothermal", "Hydropower", "Wind", "Solar"], answer: 0, explanation: "Geothermal energy harnesses heat from within the Earth." },
  { source: 77, topic: "BIOMES", text: "Deserts are fragile because they have low rainfall and ______.", options: ["Slow plant growth", "Large amounts of water resources", "Fast nutrient recycling", "High tendency for evaporation of water"], answer: 0, explanation: "Sparse rainfall and slow plant growth mean desert ecosystems recover slowly from disturbance." },
  { source: 78, topic: "CLIMATE", text: "What is the direction of wind circulation in the Northern Hemisphere?", options: ["Clockwise", "Counterclockwise", "Upward", "Downward"], answer: 1, explanation: "The source answer key indicates counterclockwise circulation for the wind pattern shown in the lesson." },
  { source: 79, topic: "POLLUTION", text: "What does POPs stand for?", options: ["Persistent organic pollutants", "Partially organic plastics", "Persistent organic pesticides", "Plastic or paper"], answer: 0, explanation: "POPs are persistent organic pollutants that resist degradation and can accumulate in organisms." },
  { source: 80, topic: "SUSTAINABILITY", text: "Which is NOT one of the three scientific principles of sustainability?", options: ["Independence on solar energy", "Waste to useful resources", "Chemical cycling", "Biodiversity"], answer: 0, explanation: "The principle is dependence on solar energy, not independence from it. The source answer key marks this wording as the exception." },
  { source: 81, topic: "LAND RESOURCES", text: "Which of the following is NOT a cause of soil erosion?", options: ["Terracing and contour planting", "Wind", "Overgrazing", "Flowing water"], answer: 0, explanation: "Terracing and contour planting reduce runoff and soil erosion; wind, overgrazing, and flowing water can cause it." },
  { source: 82, topic: "ECOLOGY", text: "What is the ability to survive under various physical and chemical environmental conditions called?", options: ["Range of tolerance", "Range of distribution", "Law of conservation of energy", "Law of conservation of matter"], answer: 0, explanation: "An organism's range of tolerance is the range of environmental conditions it can withstand." },
  { source: 83, topic: "BIODIVERSITY", text: "Which type of species always has a narrow niche?", options: ["Specialist species", "Keystone species", "Generalist species", "Alien species"], answer: 0, explanation: "Specialist species have narrow niches and depend on a limited range of resources or conditions." },
  { source: 84, topic: "WATER RESOURCES", text: "What describes a lake or river with high nutrient levels?", options: ["Eutrophic", "Allotropic", "Basic", "Oligotrophic"], answer: 0, explanation: "Eutrophic waters have high nutrient levels and often support abundant plant and algal growth." },
  { source: 85, topic: "SPECIES INTERACTIONS", text: "What occurs when one species feeds on the body or energy used by a host, usually by living on or in it?", options: ["Parasitism", "Predation", "Mutualism", "Commensalism"], answer: 0, explanation: "In parasitism, the parasite benefits while its host is harmed." },
  { source: 86, topic: "SPECIES INTERACTIONS", text: "In the food web, which organisms compete for the mouse as a food source?", options: ["Hawk and snake", "Snake and kinglet", "Oak tree and pine tree", "Pine borer and salamander"], answer: 0, explanation: "The answer key identifies the hawk and snake as competing for the mouse. The food-web diagram was not included in the attachment." },
  { source: 87, topic: "ENERGY RESOURCES", text: "Which of the following is a perpetual resource?", options: ["Solar energy", "Fresh air", "Fertile soil", "Plants and animals"], answer: 0, explanation: "Solar energy is a perpetual resource because it is continuously available on human timescales." },
  { source: 88, topic: "POPULATIONS", text: "As countries industrialize and per capita income rises, ______ declines, and ______ grows more slowly.", options: ["Poverty; population", "Poverty; immigration", "Population; poverty", "Immigration; poverty"], answer: 0, explanation: "The provided answer key describes poverty declining and population growth slowing as countries develop." },
  { source: 89, topic: "ECOSYSTEMS", text: "What ecosystem components use solar energy and abiotic nutrients to produce organic matter through photosynthesis?", options: ["Autotrophs", "Consumers", "Decomposers", "Heterotrophs"], answer: 0, explanation: "Autotrophs, including plants, produce organic matter from inorganic materials using energy such as sunlight." },
  { source: 90, topic: "BIOMES", text: "On land, which factor is often the limiting factor?", options: ["Precipitation", "Acidity", "Salinity", "Dissolved oxygen"], answer: 0, explanation: "Water availability, commonly measured through precipitation, often limits terrestrial life and productivity." },
  { source: 91, topic: "POLLUTION", text: "What is an undesirable change in air, water, soil, or food that can harm organisms called?", options: ["Pollution", "Development", "Population", "Sustainability"], answer: 0, explanation: "Pollution is an undesirable environmental change that can adversely affect health, survival, or activity." },
  { source: 92, topic: "SPECIES INTERACTIONS", text: "Oxpeckers feed on ticks on impalas and warn them of approaching predators. What interaction is this?", options: ["Mutualism", "Commensalism", "Parasitism", "Predation"], answer: 0, explanation: "Both species benefit: oxpeckers gain food, and impalas have parasites removed and receive warnings." },
  { source: 93, topic: "ENVIRONMENTAL HEALTH", text: "Which of the following is a transmissible disease?", options: ["HIV", "Alzheimer's disease", "Cancer", "Diabetes"], answer: 0, explanation: "HIV can be transmitted between people through specific routes; the other choices are not transmissible diseases." },
  { source: 94, topic: "ENVIRONMENTAL POLICY", text: "Which environmental problem is addressed by Republic Act No. 8749?", options: ["Air pollution", "Hazardous waste", "Solid waste", "Water pollution"], answer: 0, explanation: "Republic Act 8749 is the Philippine Clean Air Act of 1999." },
  { source: 95, topic: "FOREST RESOURCES", text: "What is an efficient, low-cost way to harvest trees that removes all trees from an area and harms ecosystems?", options: ["Clear cutting", "Cost cutting", "Selective cutting", "Strip cutting"], answer: 0, explanation: "Clear-cutting removes all trees from a selected area and can cause substantial ecosystem disturbance." },
  { source: 96, topic: "EVOLUTION", text: "What are random changes in an organism's genetic code (DNA) called?", options: ["Mutation", "Evolution", "Revolution", "Selection"], answer: 0, explanation: "A mutation is a change in genetic material that can introduce new variation." },
  { source: 97, topic: "ECOLOGY", text: "What occurs when a disturbed or destroyed community retains some soil or bottom sediments?", options: ["Secondary succession", "Primary succession", "Tertiary succession", "Ternary succession"], answer: 0, explanation: "Secondary succession occurs after disturbance when soil or sediment remains." },
  { source: 98, topic: "SUSTAINABILITY", text: "Which does NOT represent an aspect of an environmentally sustainable society?", options: ["High ecological footprint", "Protecting biodiversity", "Recycling", "Solar power"], answer: 0, explanation: "A high ecological footprint indicates resource demand beyond what is environmentally sustainable." },
  { source: 99, topic: "BIOGEOCHEMICAL CYCLES", text: "Which biogeochemical cycle is involved in burning fossil fuels and photosynthesis by plants?", options: ["The carbon cycle", "The nitrogen cycle", "The phosphorus cycle", "The water cycle"], answer: 0, explanation: "Fossil-fuel combustion releases carbon dioxide, while photosynthesis removes it from the atmosphere." },
  { source: 100, topic: "POPULATIONS", text: "What is the sum of all factors that limit the growth of a population?", options: ["Environmental resistance", "Carrying capacity", "Limiting factor", "Range of tolerance"], answer: 0, explanation: "Environmental resistance is the combined effect of factors that limit population growth." },
  { source: 101, topic: "ENVIRONMENTAL POLICY", text: "What does EPA stand for?", options: ["Environmental Protection Agency", "Environmental Protection Administration", "Environmental Pollution Agency", "Environmental Pollution Administration"], answer: 0, explanation: "EPA stands for Environmental Protection Agency." },
);

const welcomeScreen = document.querySelector("#welcome-screen");
const examScreen = document.querySelector("#exam-screen");
const resultsScreen = document.querySelector("#results-screen");
const questionText = document.querySelector("#question-text");
const questionNumber = document.querySelector("#question-number");
const questionTopic = document.querySelector("#question-topic");
const answerList = document.querySelector("#answer-list");
const feedbackPanel = document.querySelector("#feedback-panel");
const answerStatus = document.querySelector("#answer-status");
const progressFill = document.querySelector("#progress-fill");
const progressLabel = document.querySelector("#progress-label");
const liveScore = document.querySelector("#live-score");
const questionGrid = document.querySelector("#question-grid");
const answeredCount = document.querySelector("#answered-count");
const previousButton = document.querySelector("#previous-button");
const nextButton = document.querySelector("#next-button");
const helpDialog = document.querySelector("#help-dialog");

let currentIndex = 0;
let responses = Array(questions.length).fill(null);

function getScore() {
  return responses.reduce((score, answer, index) => score + (answer === questions[index].answer ? 1 : 0), 0);
}

function startExam() {
  currentIndex = 0;
  responses = Array(questions.length).fill(null);
  questions.forEach((question) => {
    const correctOption = question.options[question.answer];
    for (let index = question.options.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [question.options[index], question.options[swapIndex]] = [question.options[swapIndex], question.options[index]];
    }
    question.answer = question.options.indexOf(correctOption);
  });
  welcomeScreen.classList.add("hidden");
  resultsScreen.classList.add("hidden");
  examScreen.classList.remove("hidden");
  renderQuestion();
}

function renderQuestion() {
  const question = questions[currentIndex];
  const response = responses[currentIndex];
  questionText.textContent = question.text;
  questionNumber.textContent = `QUESTION ${String(currentIndex + 1).padStart(2, "0")} · SOURCE ${question.source}`;
  questionTopic.textContent = question.topic;
  progressLabel.textContent = `QUESTION ${currentIndex + 1} OF ${questions.length}`;
  progressFill.style.width = `${((currentIndex + 1) / questions.length) * 100}%`;
  liveScore.textContent = getScore();
  answeredCount.textContent = `${responses.filter((answer) => answer !== null).length} / ${questions.length}`;
  previousButton.disabled = currentIndex === 0;
  nextButton.disabled = response === null;
  nextButton.innerHTML = currentIndex === questions.length - 1
    ? 'Finish exam <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11m-4-4 4 4-4 4" /></svg>'
    : 'Next question <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11m-4-4 4 4-4 4" /></svg>';
  answerStatus.textContent = response === null ? "Choose one answer to continue" : "Answer saved · Select another to change";

  answerList.replaceChildren();
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option";
    button.setAttribute("aria-pressed", response === index ? "true" : "false");
    if (response !== null && index === question.answer) button.classList.add("is-correct");
    if (response === index && response !== question.answer) button.classList.add("is-wrong");
    const letter = document.createElement("span");
    letter.className = "option-letter";
    letter.textContent = String.fromCharCode(65 + index);
    const text = document.createElement("span");
    text.className = "option-text";
    text.textContent = option;
    button.append(letter, text);
    if (response !== null && index === question.answer) {
      const marker = document.createElement("span");
      marker.className = "option-result";
      marker.textContent = "CORRECT";
      button.append(marker);
    } else if (response === index) {
      const marker = document.createElement("span");
      marker.className = "option-result";
      marker.textContent = "YOUR ANSWER";
      button.append(marker);
    }
    button.addEventListener("click", () => selectAnswer(index));
    answerList.append(button);
  });

  feedbackPanel.classList.toggle("hidden", response === null);
  feedbackPanel.classList.toggle("is-incorrect", response !== null && response !== question.answer);
  if (response !== null) {
    const heading = response === question.answer ? "That’s right." : "Not quite.";
    feedbackPanel.innerHTML = `<strong>${heading}</strong> ${question.explanation}`;
  }
  renderQuestionGrid();
}

function selectAnswer(index) {
  responses[currentIndex] = index;
  renderQuestion();
}

function renderQuestionGrid() {
  questionGrid.replaceChildren();
  questions.forEach((_, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "grid-button";
    button.textContent = String(index + 1);
    button.setAttribute("aria-label", `Go to question ${index + 1}${responses[index] !== null ? ", answered" : ""}`);
    if (index === currentIndex) button.classList.add("is-current");
    if (responses[index] !== null) button.classList.add("is-answered");
    button.addEventListener("click", () => {
      currentIndex = index;
      renderQuestion();
    });
    questionGrid.append(button);
  });
}

function showResults() {
  const score = getScore();
  const percentage = Math.round((score / questions.length) * 100);
  examScreen.classList.add("hidden");
  resultsScreen.classList.remove("hidden");
  document.querySelector("#final-score").textContent = score;
  document.querySelector("#correct-count").textContent = score;
  document.querySelector("#incorrect-count").textContent = questions.length - score;
  document.querySelector("#percentage").textContent = `${percentage}%`;
  document.querySelector("#results-meter-fill").style.width = `${percentage}%`;
  document.querySelector("#results-title").textContent = percentage >= 80 ? "Excellent work." : percentage >= 60 ? "Good progress." : "Keep exploring.";
  document.querySelector("#results-subtitle").textContent = percentage >= 80
    ? "You’ve built a strong foundation. Keep connecting the big ideas."
    : "Review what you missed and give it another go.";
}

function beginReview() {
  currentIndex = 0;
  examScreen.classList.remove("hidden");
  resultsScreen.classList.add("hidden");
  renderQuestion();
}

document.querySelector("#start-button").addEventListener("click", startExam);
document.querySelector("#retake-button").addEventListener("click", startExam);
document.querySelector("#review-button").addEventListener("click", beginReview);
previousButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
    renderQuestion();
  }
});
nextButton.addEventListener("click", () => {
  if (currentIndex < questions.length - 1) {
    currentIndex += 1;
    renderQuestion();
  } else {
    showResults();
  }
});
document.querySelector("#help-button").addEventListener("click", () => helpDialog.showModal());
document.querySelector("#dialog-close").addEventListener("click", () => helpDialog.close());
document.querySelector("#dialog-done").addEventListener("click", () => helpDialog.close());