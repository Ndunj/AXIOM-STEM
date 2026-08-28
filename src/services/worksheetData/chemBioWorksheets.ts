import { SimulationWorksheetData } from "./types";

export const CHEM_BIO_WORKSHEETS: Record<string, SimulationWorksheetData> = {
  "sim-iupac-3d-chemistry": {
    drivingQuestion: "How do the number of carbon atoms and functional groups (like alcohols, acids, or double bonds) determine the 3D shape and scientific IUPAC names of organic molecules?",
    hypothesisPrompt: "If you add a single carbon atom to an alkane chain (for example, going from propane with 3 carbons to butane with 4 carbons), predict what happens to the molecular formula and the 3D chain structure.",
    tableHeaders: ["Trial", "Chemical Formula", "Number of Carbons (Prefix)", "Main Functional Group", "IUPAC Chemical Name", "Everyday Example / Use", "3D Shape Around Carbon"],
    tableRows: [
      ["1", "CH₄", "1 Carbon (Meth-)", "Alkane (All single bonds)", "Methane", "Natural gas for stove cooking", "Tetrahedral (Pyramid shape)"],
      ["2", "CH₃-CH₃", "2 Carbons (Eth-)", "Alkane (All single bonds)", "Ethane", "Fuel component", "Tetrahedral bonded carbons"],
      ["3", "CH₃-CH₂-CH₃", "3 Carbons (Prop-)", "Alkane (All single bonds)", "Propane", "Barbecue grill gas cylinder", "Zig-zag carbon chain"],
      ["4", "CH₃-CH₂-OH", "2 Carbons (Eth-)", "Alcohol (-OH group)", "Ethanol", "Hand sanitizer / Biofuel", "Bent at oxygen (-OH)"],
      ["5", "CH₃-COOH", "2 Carbons (Eth-)", "Carboxylic Acid (-COOH)", "Ethanoic acid (Acetic acid)", "Household vinegar", "Planar around C=O double bond"],
      ["6", "CH₃-C(=O)-CH₃", "3 Carbons (Prop-)", "Ketone (C=O carbonyl)", "Propan-2-one (Acetone)", "Nail polish remover", "Trigonal planar at C=O"]
    ],
    criticalQuestions: [
      {
        prompt: "1. Counting the Longest Carbon Chain",
        subtext: "In IUPAC naming, prefixes tell how many carbons are in the longest continuous chain: 1 = Meth-, 2 = Eth-, 3 = Prop-, 4 = But-, 5 = Pent-. Name an alkane with a straight chain of 5 carbon atoms (C₅H₁₂).",
        exemplarAnswer: "5 carbons uses the prefix 'Pent-' with the alkane ending '-ane'. The name is Pentane."
      },
      {
        prompt: "2. Identifying Functional Groups",
        subtext: "Look at Trial 4 (Ethanol) and Trial 5 (Ethanoic acid). What special group of atoms makes an alcohol (-OH) different from a carboxylic acid (-COOH)? How does the name ending change?",
        exemplarAnswer: "An alcohol contains a hydroxyl group (-OH) and ends in '-ol' (like ethanol). A carboxylic acid contains a carboxyl group (-COOH, which has both a C=O double bond and an -OH) and ends in '-oic acid' (like ethanoic acid)."
      },
      {
        prompt: "3. 3D Tetrahedral Bonding Around Carbon",
        subtext: "In the 3D molecular viewer, notice that carbon forms 4 single covalent bonds arranged in a 3D tripod shape (tetrahedral). Why aren't the bonds flat like on a 2D sheet of paper?",
        exemplarAnswer: "Electrons in chemical bonds are negatively charged and repel each other. To get as far apart as possible in 3D space, the 4 electron pairs point toward the corners of a tetrahedron with angles of about 109.5°."
      }
    ],
    realWorldScenario: {
      title: "Household Chemistry & Everyday Ingredients",
      scenario: "Many bottles under a kitchen sink or in a medicine cabinet have IUPAC scientific names on their ingredient labels.",
      task: "Match the following household items with their IUPAC names: (a) Vinegar, (b) Rubbing alcohol, and (c) Nail polish remover.",
      exemplarAnswer: "(a) Vinegar contains ethanoic acid (acetic acid), (b) Rubbing alcohol is propan-2-ol (isopropanol), and (c) Nail polish remover contains propan-2-one (acetone)."
    }
  },

  "sim-boiling-water-phase-change": {
    drivingQuestion: "What happens to the temperature and water molecules when liquid water is heated until it boils and turns into steam?",
    hypothesisPrompt: "When a pot of water reaches its boiling point at 100°C, predict whether the temperature will keep rising if you turn the stove burner higher, or if it will stay at 100°C. Where does the added heat energy go?",
    tableHeaders: ["Stage of Heating", "Time (seconds)", "Water Temperature (°C)", "State of Matter", "What the Molecules Are Doing", "Heat Energy Role"],
    tableRows: [
      ["1. Cold Water", "0 s", "20.0 °C", "Liquid water", "Molecules sliding past each other at room temperature", "Starting baseline"],
      ["2. Warm Water", "120 s", "60.0 °C", "Liquid water", "Molecules moving faster and bumping into each other", "Heat increases water temperature"],
      ["3. Boiling Begins", "240 s", "100.0 °C", "Hot liquid (bubbles forming)", "Vapor bubbles start forming at the bottom", "Reaching boiling point"],
      ["4. Active Boiling Plateau", "400 s", "100.0 °C", "Liquid + Steam mixture", "Heat breaks attractions between water molecules", "Temperature stays at 100°C (Latent Heat)"],
      ["5. Complete Steam", "800 s", "100.0 °C (Steam)", "Water vapor (Gas)", "Molecules completely free and bouncing far apart", "All liquid turned to gas"],
      ["6. Superheated Steam", "900 s", "115.0 °C", "Hot gas (Steam)", "Gas molecules moving at very high speeds in air", "Heat increases steam temperature"]
    ],
    criticalQuestions: [
      {
        prompt: "1. The Boiling Temperature Plateau",
        subtext: "Look at Stages 3, 4, and 5 in the table. Why does the thermometer stay stuck at 100°C even though heat from the burner is constantly being added?",
        exemplarAnswer: "During a phase change, the added heat energy (called latent heat) is used to overcome and break the attractive forces holding water molecules together in the liquid, rather than making the molecules move faster to raise the temperature."
      },
      {
        prompt: "2. Liquid vs. Gas at the Molecular Level",
        subtext: "Describe the difference in how water molecules move and how close they are to each other in liquid water versus steam (water vapor).",
        exemplarAnswer: "In liquid water, molecules are packed close together, touching and sliding past one another. In steam (gas), molecules are spread very far apart and fly around rapidly with lots of empty space between them."
      },
      {
        prompt: "3. Evaporation vs. Boiling",
        subtext: "Explain the difference between water evaporating slowly from a puddle on a sidewalk versus water boiling in a pot on a stove.",
        exemplarAnswer: "Evaporation happens only at the surface of a liquid at any temperature. Boiling happens throughout the entire liquid at a specific temperature (100°C for water), forming vapor bubbles that rise from the bottom."
      }
    ],
    realWorldScenario: {
      title: "Cooking Pasta & Why Sweating Cools Us Down",
      scenario: "When you exercise on a warm day, your body produces sweat (water droplets) on your skin.",
      task: "Explain how sweat evaporating off your skin uses the concept of latent heat to cool your body down.",
      exemplarAnswer: "As sweat droplets turn from liquid into water vapor, they absorb large amounts of heat energy (latent heat of vaporization) directly from your warm skin, cooling your body and keeping your temperature stable."
    }
  },

  "sim-photosynthesis-plant-growth": {
    drivingQuestion: "How do light intensity, carbon dioxide (CO₂), and temperature affect the rate of photosynthesis and plant growth?",
    hypothesisPrompt: "If you move a green plant from a dim corner of a room to a bright, sunny windowsill, predict what will happen to the number of oxygen bubbles it produces and its rate of growth.",
    tableHeaders: ["Trial", "Light Level (Brightness)", "CO₂ Level (Carbon Dioxide)", "Temperature (°C)", "Oxygen Bubbles / Minute", "Plant Growth Status", "Limiting Factor"],
    tableRows: [
      ["1", "Very Dim Light (50 units)", "Normal (400 ppm)", "22.0 °C", "3 bubbles / min", "Very slow growth", "Light is too dim (Not enough light)"],
      ["2", "Medium Light (200 units)", "Normal (400 ppm)", "22.0 °C", "12 bubbles / min", "Moderate healthy growth", "Light is increasing photosynthesis"],
      ["3", "Bright Light (600 units)", "Normal (400 ppm)", "22.0 °C", "25 bubbles / min", "Fast, vigorous growth", "Maximum light level for normal CO₂"],
      ["4", "Very Bright Light (1000 units)", "Normal (400 ppm)", "22.0 °C", "26 bubbles / min", "Growth stays steady (Plateau)", "CO₂ is now the limiting factor"],
      ["5", "Very Bright Light (1000 units)", "High CO₂ (1200 ppm)", "22.0 °C", "42 bubbles / min", "Maximum rapid growth", "All conditions optimal"],
      ["6", "Very Bright Light (1000 units)", "High CO₂ (1200 ppm)", "45.0 °C (Overheating)", "6 bubbles / min", "Plant wilts / Stressed", "Too hot (Heat damages plant cells)"]
    ],
    criticalQuestions: [
      {
        prompt: "1. The Photosynthesis Word Equation",
        subtext: "Plants use sunlight to turn carbon dioxide and water into glucose (food) and oxygen gas: Carbon Dioxide + Water + Sunlight → Glucose + Oxygen. What gas do plants take in from the air, and what gas do they release into the air?",
        exemplarAnswer: "Plants take in carbon dioxide (CO₂) from the air and water (H₂O) from the soil, and they release oxygen (O₂) into the air as a byproduct while making glucose sugar for energy."
      },
      {
        prompt: "2. Identifying a Limiting Factor",
        subtext: "Compare Trial 3 and Trial 4. When light was made even brighter, why did the rate of oxygen bubbles barely increase from 25 to 26? What happened when we gave the plant more CO₂ in Trial 5?",
        exemplarAnswer: "The plant had plenty of light, but it ran out of enough carbon dioxide to make more sugar (CO₂ was the limiting factor). Adding more CO₂ in Trial 5 allowed the plant to jump to 42 bubbles per minute."
      },
      {
        prompt: "3. The Effect of Extreme Temperature",
        subtext: "In Trial 6, the temperature was raised to 45°C (113°F). Why did the plant's photosynthesis rate drop drastically from 42 down to 6 bubbles per minute?",
        exemplarAnswer: "Extreme heat damages and breaks down (denatures) the plant's enzymes and causes the plant to close its leaf pores (stomata) to prevent drying out, which stops photosynthesis."
      }
    ],
    realWorldScenario: {
      title: "Caring for Houseplants and Garden Crops",
      scenario: "A student wants their tomato plant in a home garden to grow large, healthy tomatoes during the summer.",
      task: "Based on your virtual lab trials, list the three key environmental conditions the student should provide for their tomato plant.",
      exemplarAnswer: "1. Place the plant in full sunlight (bright light). 2. Ensure good airflow for carbon dioxide. 3. Keep the temperature in a warm, comfortable range (around 20°C to 25°C) with regular watering so the plant does not overheat."
    }
  },

  "sim-water-cycle-simulation": {
    drivingQuestion: "How do evaporation, condensation, precipitation, and groundwater flow continuously recycle Earth's water supply?",
    hypothesisPrompt: "When sunlight warms an ocean or lake, predict what phase change happens to the liquid water, and explain how that water vapor eventually forms clouds high in the sky.",
    tableHeaders: ["Water Cycle Stage", "What Powers It", "What Happens to the Water", "State of Matter Change", "Where It Moves", "Everyday Example"],
    tableRows: [
      ["1. Evaporation", "Heat from the Sun", "Liquid water warms and turns into invisible vapor", "Liquid → Gas (Vapor)", "Rises upward into the air", "Puddle drying up in the sun"],
      ["2. Transpiration", "Sun + Plant roots", "Plants release water vapor through tiny leaf pores", "Liquid (in plant) → Gas (Vapor)", "Rises from leaves into air", "Forests creating humid air"],
      ["3. Condensation", "Cool air at high altitudes", "Water vapor cools and forms tiny water droplets", "Gas (Vapor) → Liquid droplets", "Gathers together to form clouds", "Dew on grass / Foggy bathroom mirror"],
      ["4. Precipitation", "Gravity", "Droplets in clouds grow heavy and fall to Earth", "Liquid / Solid falling", "Falls as rain, snow, or hail", "Rainstorm watering a garden"],
      ["5. Surface Runoff", "Gravity", "Water flows across ground into streams and rivers", "Liquid flowing", "Moves downhill toward oceans", "Water flowing into street storm drains"],
      ["6. Infiltration / Groundwater", "Gravity & soil porosity", "Water soaks deep into soil and underground rocks", "Liquid underground", "Stored in aquifers / feeds wells", "Clear water pumped from a water well"]
    ],
    criticalQuestions: [
      {
        prompt: "1. Evaporation vs. Condensation",
        subtext: "Explain how evaporation and condensation are opposites. Which one requires heat to be added, and which one occurs when water vapor cools down?",
        exemplarAnswer: "Evaporation turns liquid water into gas when heat is added (warming). Condensation turns water vapor back into liquid droplets when water vapor cools down high in the atmosphere."
      },
      {
        prompt: "2. The Role of the Sun and Gravity",
        subtext: "What main source of energy drives water upward into the atmosphere (evaporation)? What force pulls water back down to Earth (rain and river flow)?",
        exemplarAnswer: "The Sun's heat energy drives water upward through evaporation and transpiration. The force of Gravity pulls water back down to Earth as rain/snow and causes rivers to flow downhill to the sea."
      },
      {
        prompt: "3. Conservation of Water on Earth",
        subtext: "Does Earth ever lose its water to outer space, or is the total amount of water on Earth always the same? Explain why the water you drink today is the same water dinosaurs drank millions of years ago.",
        exemplarAnswer: "Earth is a closed system held by gravity; water is never lost. It is constantly recycled through evaporation, condensation, and precipitation. The water molecules on Earth today have been cycling through clouds, oceans, and living things for billions of years."
      }
    ],
    realWorldScenario: {
      title: "Why Morning Dew Forms on Grass",
      scenario: "On a clear morning, you notice tiny water droplets covering the grass in your front yard even though it did not rain overnight.",
      task: "Explain using the water cycle how overnight cooling causes condensation on grass blades.",
      exemplarAnswer: "During the cool night, the ground and grass blades cool down. The invisible water vapor in the air touching the cold grass cools to its dew point and condenses from a gas into liquid water droplets (dew)."
    }
  },

  "sim-high-precision-acid-base-titration": {
    drivingQuestion: "How do volumetric acid-base titrations and chemical indicators enable high-precision determination of unknown sample molarities using stoichiometric equivalence (CaVa = CbVb)?",
    hypothesisPrompt: "If standard 0.10M sodium hydroxide (NaOH) is delivered dropwise into an unknown acid sample with phenolphthalein, predict how the pH and solution color will change as the delivered volume reaches and exceeds the equivalence point.",
    tableHeaders: ["Trial", "Reaction System", "Analyte Volume (Va)", "Indicator Used", "Equivalence Vol (Vb)", "Endpoint Color Change", "Calculated Acid Conc (Ca)"],
    tableRows: [
      ["1", "Unknown Acid + 0.10M NaOH", "25.0 cm³", "Phenolphthalein", "25.00 cm³", "Colorless → Persistent Faint Pink", "0.1000 M"],
      ["2", "Unknown HCl + 0.10M NaOH", "25.0 cm³", "Phenolphthalein", "22.50 cm³", "Colorless → Persistent Faint Pink", "0.0900 M"],
      ["3", "Unknown CH₃COOH + 0.10M NaOH", "25.0 cm³", "Phenolphthalein", "30.00 cm³", "Colorless → Vibrant Pink", "0.1200 M"],
      ["4", "Unknown NH₃ + 0.12M HCl", "25.0 cm³", "Methyl Orange", "18.75 cm³", "Yellow/Orange → Red/Pink", "0.0900 M"],
      ["5", "Unknown Acid (Micro-trial)", "10.0 cm³", "Bromothymol Blue", "10.00 cm³", "Yellow → Emerald Green (pH 7.0)", "0.1000 M"],
      ["6", "Over-Titration Analysis", "25.0 cm³", "Phenolphthalein", "35.00 cm³ (Overshot)", "Dark Magenta (Excess OH⁻)", "Overestimated (Error)"]
    ],
    criticalQuestions: [
      {
        prompt: "1. Equivalence Point vs. Experimental Endpoint",
        subtext: "Explain the fundamental difference between the theoretical equivalence point and the experimental endpoint observed in the laboratory.",
        exemplarAnswer: "The equivalence point is the exact stoichiometric point where moles of H⁺ ions equal moles of OH⁻ ions. The endpoint is the physical point where the indicator changes color. A well-chosen indicator has an endpoint pH range matching the equivalence point pH."
      },
      {
        prompt: "2. Deriving Concentration using CaVa = CbVb",
        subtext: "If 25.0 cm³ of unknown HCl sample is neutralized by 22.50 cm³ of 0.10 M NaOH titrant, calculate the molarity (Ca) of the acid sample step-by-step.",
        exemplarAnswer: "Using Ca = (Cb × Vb) / Va = (0.10 M × 22.50 cm³) / 25.0 cm³ = 2.25 / 25.0 = 0.0900 M."
      },
      {
        prompt: "3. Indicator Selection & Salt Hydrolysis",
        subtext: "Why is phenolphthalein suitable for a weak acid (CH₃COOH) titrated with a strong base (NaOH), while methyl orange is preferable for a weak base (NH₃) titrated with a strong acid (HCl)?",
        exemplarAnswer: "Neutralizing a weak acid with a strong base yields a basic salt solution (pH > 7) due to acetate ion hydrolysis, matching phenolphthalein's transition range (pH 8.2–10.0). Neutralizing a weak base with a strong acid yields an acidic salt solution (pH < 7), matching methyl orange's acidic transition range (pH 3.1–4.4)."
      }
    ],
    realWorldScenario: {
      title: "Quality Control in Food Science & Pharmaceutical Purity",
      scenario: "Commercial vinegar must contain between 4% and 5% acetic acid (CH₃COOH) by mass to meet FDA food safety standards. A food chemist performs a precision titration on a 25.0 cm³ vinegar sample using 0.10M standard NaOH.",
      task: "Explain why laboratory titrations are critical for quality control in pharmaceuticals and food manufacturing, and why dropwise flow control is essential near the endpoint.",
      exemplarAnswer: "Titration provides highly reproducible, quantitative verification of active ingredient concentrations. Dropwise delivery near the endpoint prevents overshooting the equivalence point, ensuring accurate dosage validation without costly chemical waste."
    }
  },

  "sim-galvanic-cell-nernst": {
    drivingQuestion: "How do spontaneous oxidation-reduction half-reactions and ion concentration gradients govern electric potential (voltage) across galvanic cells according to the Nernst Equation?",
    hypothesisPrompt: "If the concentration of the dissolved metal ion at the cathode (reduction) is increased from 0.01 M to 2.00 M while holding the anode constant, predict whether the measured cell potential (Ecell) will increase, decrease, or remain unchanged relative to the standard cell potential (E°cell).",
    tableHeaders: ["Trial", "Anode Half-Cell (Oxidation)", "Cathode Half-Cell (Reduction)", "[Anode Ion] (M)", "[Cathode Ion] (M)", "Temp (K)", "E°cell (V)", "Reaction Quotient (Q)", "Operating Ecell (V)", "Electron Flow Direction"],
    tableRows: [
      ["1", "Zn²⁺ / Zn (E° = -0.76 V)", "Cu²⁺ / Cu (E° = +0.34 V)", "1.00 M", "1.00 M", "298 K", "+1.10 V", "1.000", "+1.100 V", "Left (Zn) → Right (Cu)"],
      ["2", "Zn²⁺ / Zn (E° = -0.76 V)", "Cu²⁺ / Cu (E° = +0.34 V)", "0.01 M", "2.00 M", "298 K", "+1.10 V", "0.005", "+1.168 V (Increased)", "Left (Zn) → Right (Cu)"],
      ["3", "Zn²⁺ / Zn (E° = -0.76 V)", "Cu²⁺ / Cu (E° = +0.34 V)", "2.00 M", "0.01 M", "298 K", "+1.10 V", "200.000", "+1.032 V (Decreased)", "Left (Zn) → Right (Cu)"],
      ["4", "Mg²⁺ / Mg (E° = -2.37 V)", "Ag⁺ / Ag (E° = +0.80 V)", "1.00 M", "1.00 M", "298 K", "+3.17 V", "1.000", "+3.170 V", "Left (Mg) → Right (Ag)"],
      ["5", "Fe²⁺ / Fe (E° = -0.44 V)", "Ni²⁺ / Ni (E° = -0.25 V)", "1.00 M", "1.00 M", "350 K", "+0.19 V", "1.000", "+0.190 V", "Left (Fe) → Right (Ni)"],
      ["6", "Cu Concentration Cell", "Cu²⁺ / Cu (Dilute, 0.001 M)", "Cu²⁺ / Cu (Conc, 1.50 M)", "0.001 M", "1.500 M", "298 K", "0.00 V", "0.00067", "+0.094 V", "Dilute Anode → Concentrated Cathode"]
    ],
    criticalQuestions: [
      {
        prompt: "1. Distinguishing Standard (E°cell) vs. Operating (Ecell) Potential",
        subtext: "Why does the standard cell potential E°cell remain exactly +1.10 V across Trials 1, 2, and 3 regardless of concentration changes, while the operating voltage Ecell changes significantly?",
        exemplarAnswer: "By thermodynamic definition, standard potential E°cell is measured strictly under standard-state reference conditions where all ion concentrations are exactly 1.0 M (at 298.15 K, 1 atm). Because standard state explicitly locks concentrations at 1.0 M, E°cell is a thermodynamic constant for a given electrode pair. The actual operating potential Ecell shifts according to the Nernst equation Ecell = E°cell - (RT/nF)ln(Q) as ion concentrations depart from 1.0 M."
      },
      {
        prompt: "2. The Function of the Salt Bridge in Maintaining Electrical Neutrality",
        subtext: "What would happen to the electron flow and cell voltage if the KNO₃ salt bridge were removed from the galvanic cell? Explain the roles of NO₃⁻ anions and K⁺ cations during continuous cell operation.",
        exemplarAnswer: "Without the salt bridge, electron flow stops almost instantly and voltage drops to 0 V because positive charge accumulates in the anode beaker (due to Zn → Zn²⁺ + 2e⁻) and negative charge accumulates in the cathode beaker (as Cu²⁺ + 2e⁻ → Cu). The salt bridge maintains electrical neutrality by delivering NO₃⁻ anions into the anode half-cell to neutralize newly generated cations, while K⁺ cations migrate into the cathode half-cell to replace consumed copper ions."
      },
      {
        prompt: "3. Concentration Cells & Le Chatelier's Principle in Electrochemistry",
        subtext: "Examine Trial 6 where both electrodes are made of copper (E°cell = 0.00 V). How can a battery produce electrical voltage when both half-cells use the exact same chemical couple?",
        exemplarAnswer: "A concentration cell generates potential entirely from the entropy/concentration gradient between dilute (0.001 M) and concentrated (1.50 M) solutions. According to Le Chatelier's principle and the Nernst equation, the spontaneous process drives the dilute side to oxidize (increasing [Cu²⁺]) and the concentrated side to reduce (decreasing [Cu²⁺]) until concentrations equalize at equilibrium (Q = 1, Ecell = 0 V)."
      }
    ],
    realWorldScenario: {
      title: "Lithium-Ion Battery Degradation & Electric Vehicle (EV) Range",
      scenario: "Automotive engineers monitor individual cell voltages across electric vehicle battery packs. As a battery discharges during a long drive, internal reactant concentrations decrease while product concentrations accumulate.",
      task: "Using the Nernst equation, explain why an EV battery pack's output voltage gradually declines during discharge and why cold winter temperatures (T < 273 K) reduce available cell power output.",
      exemplarAnswer: "During discharge, the reaction quotient Q = [products]/[reactants] continuously increases, causing the (RT/nF)ln(Q) subtraction term in the Nernst equation to grow larger and lowering operating voltage Ecell until equilibrium (Ecell = 0 V, dead battery) is reached. In freezing winter weather, low temperatures reduce ionic diffusion rates through the electrolyte and increase internal resistance, causing significant voltage sag under heavy acceleration loads."
    }
  },

  "sim-le-chatelier-haber": {
    drivingQuestion: "How do temperature, pressure (volume), and concentration disturbances shift dynamic chemical equilibrium in the exothermic Haber synthesis of ammonia?",
    hypothesisPrompt: "If the temperature of the reaction vessel is increased from 350 K to 650 K, predict whether the equilibrium constant Kc and equilibrium yield of ammonia (NH₃) will increase, decrease, or remain constant.",
    tableHeaders: ["Trial", "Condition / Disturbance", "Temp (K)", "Volume (L)", "n(N₂) (mol)", "n(H₂) (mol)", "n(NH₃) (mol)", "Kc(T)", "Qc", "Equilibrium Shift Direction"],
    tableRows: [
      ["1", "Initial Baseline Equilibrium", "450 K", "2.5 L", "2.00 mol", "4.00 mol", "2.00 mol", "0.500", "0.500", "At Equilibrium (Q = K)"],
      ["2", "Temperature Increase (Heat Added)", "650 K", "2.5 L", "2.00 mol", "4.00 mol", "2.00 mol", "0.082", "0.500", "Shifts Left (Reverse ← absorbs heat)"],
      ["3", "Compression / Pressure Spike", "450 K", "1.0 L", "2.00 mol", "4.00 mol", "2.00 mol", "0.500", "0.080", "Shifts Right (Forward → fewer gas moles)"],
      ["4", "Reactant Injection (+3.0 mol H₂)", "450 K", "2.5 L", "2.00 mol", "7.00 mol", "2.00 mol", "0.500", "0.093", "Shifts Right (Forward → consumes H₂)"],
      ["5", "Continuous Product Removal (-1.5 mol NH₃)", "450 K", "2.5 L", "2.00 mol", "4.00 mol", "0.50 mol", "0.500", "0.031", "Shifts Right (Forward → replenishes NH₃)"],
      ["6", "Expansion / Depressurization", "450 K", "5.0 L", "2.00 mol", "4.00 mol", "2.00 mol", "0.500", "2.000", "Shifts Left (Reverse ← toward 4 gas moles)"]
    ],
    criticalQuestions: [
      {
        prompt: "1. Reaction Quotient (Qc) vs Equilibrium Constant (Kc)",
        subtext: "Explain mathematically why compressing the container from 2.5 L to 1.0 L causes Qc to drop below Kc, driving the forward synthesis of ammonia.",
        exemplarAnswer: "The expression for Qc is ([NH₃]²)/([N₂][H₂]³) = (n_NH₃² × V²)/(n_N₂ × n_H₂³). Because volume V appears squared in the numerator and cubed in the denominator (net V⁻² dependence), decreasing volume from 2.5 L to 1.0 L reduces the numerical value of Qc by a factor of (1.0/2.5)² = 0.16. Since Qc < Kc, the forward reaction accelerates to consume reactants and produce ammonia until Qc equals Kc."
      },
      {
        prompt: "2. Temperature Effects & The Van 't Hoff Relationship",
        subtext: "Why does increasing temperature decrease the equilibrium constant Kc for the Haber process (ΔH < 0), whereas changing concentration or pressure leaves Kc unchanged?",
        exemplarAnswer: "The synthesis of ammonia is exothermic (ΔH = -92.2 kJ/mol), releasing heat as a product. According to the van 't Hoff equation, the equilibrium constant Kc is purely a thermodynamic function of temperature. Adding thermal energy drives the endothermic reverse reaction to absorb heat, decreasing the ratio of products to reactants at equilibrium and lowering Kc. Concentration and volume changes alter instantaneous Qc but do not change the fundamental thermodynamic constant Kc."
      },
      {
        prompt: "3. Industrial Compromise in Chemical Engineering",
        subtext: "If low temperatures favor higher theoretical equilibrium yields of ammonia, why do commercial Haber-Bosch chemical plants operate at elevated temperatures (~400–450°C / 700 K)?",
        exemplarAnswer: "This represents the fundamental chemical engineering trade-off between thermodynamics and kinetics. While low temperatures maximize equilibrium conversion of reactants into ammonia (thermodynamics), the activation energy barrier for breaking the strong nitrogen triple bond (N≡N) is so high that the reaction rate is prohibitively slow at low temperatures (kinetics). Operating at ~450°C in the presence of an iron-based catalyst allows the reaction to achieve an economically viable reaction rate."
      }
    ],
    realWorldScenario: {
      title: "Global Agricultural Fertilizer Production (Haber-Bosch Process)",
      scenario: "The Haber-Bosch process synthesizes over 150 million metric tons of ammonia annually, providing nitrogen fertilizer that sustains approximately 50% of the world's current food supply.",
      task: "Using Le Châtelier's principle and chemical kinetics, describe how modern industrial ammonia synthesis loops continuously cycle unreacted N₂ and H₂ gases while condensing liquid NH₃ out of the reactor to maximize product yield.",
      exemplarAnswer: "Industrial synthesis reactors operate at high pressures (150–250 atm) to shift the equilibrium toward the smaller volume of product gas (4 moles → 2 moles). As the gas mixture leaves the catalyst bed, it is cooled to liquefy ammonia (boiling point -33°C), which is continuously drained from the loop. By constantly removing NH₃(l), Qc is maintained below Kc, driving continuous forward reaction while recycling unconverted N₂ and H₂ gases back through the reactor loop with minimal waste."
    }
  },

  "sim-vsepr-3d-geometry": {
    drivingQuestion: "How do the number of bonding electron pairs and non-bonding lone pairs determine the 3D molecular geometry, bond angles, and orbital hybridization of chemical compounds?",
    hypothesisPrompt: "If you substitute bonding pairs with non-bonding lone pairs around a central atom with steric number 4 (moving from CH₄ to NH₃ to H₂O), predict what will happen to the bond angles between the bonded atoms. Why do lone pairs exert stronger electrostatic repulsion than bonding pairs?",
    tableHeaders: ["Molecule", "Central Atom", "Steric Number (SN)", "Bonding Pairs", "Lone Pairs", "Electron Geometry", "Molecular Geometry", "Hybridization", "Ideal vs. Actual Bond Angle"],
    tableRows: [
      ["CO₂", "Carbon (C)", "2", "2", "0", "Linear", "Linear", "sp", "180° (Linear)"],
      ["CH₄", "Carbon (C)", "4", "4", "0", "Tetrahedral", "Tetrahedral", "sp³", "109.5° (Ideal Tetrahedral)"],
      ["NH₃", "Nitrogen (N)", "4", "3", "1", "Tetrahedral", "Trigonal Pyramidal", "sp³", "107° (Compressed by 1 lone pair)"],
      ["H₂O", "Oxygen (O)", "4", "2", "2", "Tetrahedral", "Bent", "sp³", "104.5° (Compressed by 2 lone pairs)"],
      ["PCl₅", "Phosphorus (P)", "5", "5", "0", "Trigonal Bipyramidal", "Trigonal Bipyramidal", "sp³d", "90° (Ax-Eq), 120° (Eq-Eq)"],
      ["SF₄", "Sulfur (S)", "5", "4", "1", "Trigonal Bipyramidal", "See-saw", "sp³d", "102°, 173° (Lone pair in equatorial site)"],
      ["XeF₂", "Xenon (Xe)", "5", "2", "3", "Trigonal Bipyramidal", "Linear", "sp³d", "180° (All 3 lone pairs equatorial)"],
      ["SF₆", "Sulfur (S)", "6", "6", "0", "Octahedral", "Octahedral", "sp³d²", "90° (All orthogonal)"],
      ["XeF₄", "Xenon (Xe)", "6", "4", "2", "Octahedral", "Square Planar", "sp³d²", "90° (Lone pairs 180° opposite)"]
    ],
    criticalQuestions: [
      {
        prompt: "1. Electron Domain Geometry vs. Molecular Geometry",
        subtext: "Explain why methane (CH₄), ammonia (NH₃), and water (H₂O) all share the same tetrahedral electron domain geometry, but possess three completely different molecular shapes (tetrahedral, trigonal pyramidal, and bent).",
        exemplarAnswer: "All three molecules have a steric number of 4 (4 electron domains around the central atom), causing electron clouds to adopt a tetrahedral electron geometry to minimize electrostatic repulsion. However, molecular geometry describes ONLY the spatial arrangement of the bonded nuclei. Because lone pairs are invisible in the final molecular skeleton, NH₃ with 1 lone pair is trigonal pyramidal, and H₂O with 2 lone pairs is bent."
      },
      {
        prompt: "2. The Repulsion Hierarchy and Lone Pair Angle Compression",
        subtext: "According to VSEPR theory, why do non-bonding lone pairs exert greater repulsive force than bonding pairs? How does this explain the progressive decrease in bond angles from 109.5° in CH₄ to 107° in NH₃ and 104.5° in H₂O?",
        exemplarAnswer: "Bonding electron pairs are held tightly between two positively charged nuclei, localizing their charge density. In contrast, non-bonding lone pairs are attracted to only one central nucleus, allowing their electron clouds to expand and occupy a larger angular volume. Because Lone Pair-Bonding Pair repulsion is stronger than Bonding Pair-Bonding Pair repulsion, the lone pairs push the bonded hydrogen atoms closer together, compressing the bond angle by ~2.5° per lone pair."
      },
      {
        prompt: "3. Equatorial Site Preference in Trigonal Bipyramidal Systems (SF₄ and XeF₂)",
        subtext: "In a 5-coordinate trigonal bipyramidal system like SF₄ (1 lone pair) or XeF₂ (3 lone pairs), why do lone pairs exclusively occupy equatorial positions (120° apart) rather than axial positions (90° apart)?",
        exemplarAnswer: "Repulsion at 90° is much more severe than repulsion at 120°. An axial lone pair would experience three harsh 90° repulsive interactions with equatorial domains. An equatorial lone pair experiences only two 90° interactions with axial domains and two mild 120° interactions. Placing lone pairs in the equatorial plane minimizes high-energy 90° repulsions, creating a See-saw shape for SF₄ and a symmetrical Linear shape for XeF₂."
      }
    ],
    realWorldScenario: {
      title: "Pharmaceutical Drug Design & Enzyme-Receptor Binding Pocket Docking",
      scenario: "Medicinal chemists design targeted inhibitor drugs (such as HIV protease inhibitors or cancer therapeutics) whose biological activity depends strictly on the 3D molecular geometry and bond angle orientations of pharmacophore functional groups fitting into specific enzyme binding pockets.",
      task: "Explain how VSEPR molecular geometry and lone pairs dictate the 3D shape, dipole moments, and hydrogen-bonding capabilities of pharmaceutical molecules interacting with protein active sites.",
      exemplarAnswer: "The 3D shape determined by VSEPR geometry governs whether a drug molecule can physically dock into a complementary lock-and-key enzyme cavity. Furthermore, non-bonding lone pairs (such as those on carbonyl oxygens or amine nitrogens) serve as directional hydrogen bond acceptors with defined vector angles, while bond polarities dictate overall dipole moments. If a molecule's VSEPR geometry creates steric clashes or misaligns lone pair hydrogen-bonding vectors, the drug will fail to bind to its biological target."
    }
  },

  "sim-dna-replication-protein-synthesis": {
    drivingQuestion: "How do DNA replication, mRNA transcription, and tRNA ribosomal translation work in harmony to transmit genetic information and synthesize functional proteins?",
    hypothesisPrompt: "If a DNA template sequence is 3'-TAC-TTC-AAA-CCG-ATT-5', predict the resulting mRNA codon sequence produced during transcription, and determine the corresponding polypeptide amino acid chain assembled during translation.",
    tableHeaders: ["Stage", "Primary Enzyme / Organelle", "Input Template Sequence", "Base Pairing Rule Applied", "Output Product", "Cellular Location"],
    tableRows: [
      ["1. Replication Unzipping", "DNA Helicase", "Double-stranded DNA Helix", "Hydrogen bonds broken at replication fork", "Separated leading & lagging single strands", "Nucleus (Eukaryotes)"],
      ["2. DNA Synthesis", "DNA Polymerase", "Single-stranded DNA (3'→5')", "A ↔ T, C ↔ G (Phosphodiester bonds)", "2 Identical semi-conservative DNA helices", "Nucleus"],
      ["3. Transcription", "RNA Polymerase", "Template DNA Strand (TAC...)", "DNA A → RNA U, T → A, C ↔ G", "Single-stranded messenger RNA (mRNA)", "Nucleus to Cytoplasm"],
      ["4. Translation (Initiation)", "Ribosome + Initiator tRNA", "mRNA Start Codon (5'-AUG-3')", "Anticodon UAC matches Codon AUG", "Methionine (Met) start amino acid", "Ribosome (Cytoplasm / RER)"],
      ["5. Translation (Elongation)", "Ribosome + tRNA Pool", "mRNA Triplets (AUG-AAG-UUU-GGC-UAA)", "tRNA anticodon complementary binding", "Growing polypeptide amino acid chain (Met-Lys-Phe-Gly)", "Ribosome A & P Sites"],
      ["6. Translation (Termination)", "Release Factor Protein", "mRNA Stop Codons (UAA, UAG, UGA)", "No tRNA matches; release factor binds", "Released polypeptide chain folds into protein", "Cytoplasm"]
    ],
    criticalQuestions: [
      {
        prompt: "1. The Central Dogma: Information Flow",
        subtext: "Explain the two-step flow of genetic information from DNA to functional protein: Transcription and Translation. How does Uracil (U) replace Thymine (T) during RNA synthesis?",
        exemplarAnswer: "The central dogma describes genetic information flow: DNA → RNA → Protein. During transcription in the nucleus, RNA Polymerase uses DNA as a template to synthesize messenger RNA (mRNA), substituting Uracil (U) for Thymine (T) to pair with Adenine (A). During translation in the cytoplasm, ribosomes decode mRNA triplets (codons) via transfer RNA (tRNA) anticodons that deliver specific amino acids to assemble a polypeptide chain."
      },
      {
        prompt: "2. Semi-Conservative DNA Replication",
        subtext: "What does 'semi-conservative' replication mean? How do DNA Helicase and DNA Polymerase ensure genetic fidelity between parent and daughter cells?",
        exemplarAnswer: "Semi-conservative replication means each newly formed double-stranded DNA molecule contains one original conserved parent strand and one newly synthesized daughter strand. DNA Helicase unzips the parental helix by breaking hydrogen bonds, and DNA Polymerase uses strict complementary base pairing (A-T, C-G) to build error-checked complementary strands, ensuring identical copies for cell division."
      },
      {
        prompt: "3. Decoding the Genetic Code & Mutations",
        subtext: "Using the universal codon chart: If the original DNA triplet TAC (mRNA codon AUG) mutates into TAG (mRNA codon AUC), what happens to the resulting amino acid, and how might this affect protein function?",
        exemplarAnswer: "The original codon AUG codes for Methionine (the Start codon). The mutated codon AUC codes for Isoleucine. Because the start codon was lost, the ribosome may fail to initiate translation, or a missense mutation occurs substituting Isoleucine, potentially disrupting the tertiary folding, active site, and enzymatic function of the resulting protein."
      }
    ],
    realWorldScenario: {
      title: "mRNA Vaccines & Molecular Therapeutics",
      scenario: "Modern biotechnology utilizes synthetic mRNA technology (such as mRNA vaccines for viruses) to instruct human cells to produce harmless antigen proteins without ever entering the host nucleus or altering chromosomal DNA.",
      task: "Using your understanding of transcription and translation, explain why synthetic mRNA introduced into human cells is translated directly in the cytoplasm by host ribosomes to trigger an immune response, and why it cannot integrate into our nuclear DNA.",
      exemplarAnswer: "Synthetic mRNA enters the cytoplasm directly where host ribosomes read its codons and tRNA brings amino acids to synthesize the target viral spike protein (translation). Because RNA lacks the reverse transcriptase enzyme and nuclear import machinery required to convert RNA into DNA and integrate into genomes, the mRNA is naturally degraded by cellular ribonucleases after a few days, safely leaving human nuclear DNA completely unchanged."
    }
  },

  "sim-natural-selection-population-genetics": {
    drivingQuestion: "How do selective predation pressures and differential camouflage contrast alter allele frequencies (p and q) across generations in a population of Peppered Moths?",
    hypothesisPrompt: "If the habitat changes from a Light Birch forest to a Dark Sooty forest, then the frequency of the dominant melanic allele p(D) will increase over subsequent generations because dark moths will experience lower predation rates due to superior camouflage.",
    tableHeaders: ["Generation", "Habitat Type", "Dominant Dark Allele p(D)", "Recessive Light Allele q(d)", "Total Population", "Observed Selection Outcome"],
    tableRows: [
      ["1 (Baseline)", "Light Birch Forest", "0.50", "0.50", "50", "Equal initial allele distribution (Hardy-Weinberg start)"],
      ["2 (Predation)", "Light Birch Forest", "0.38", "0.62", "50", "Dark moths (DD, Dd) more visible to predators; q increases"],
      ["3 (Light Shift)", "Light Birch Forest", "0.24", "0.76", "50", "Light phenotype (dd) dominant in frequency due to high camouflage"],
      ["4 (Env Change)", "Dark Sooty Forest", "0.24", "0.76", "50", "Habitat shifts to coal soot; light moths now stand out sharply"],
      ["5 (Directional)", "Dark Sooty Forest", "0.58", "0.42", "50", "Rapid directional selection against light morphs; p rises"],
      ["6 (Melanic Fixed)", "Dark Sooty Forest", "0.86", "0.14", "50", "Industrial melanism established; dark morphs dominate gene pool"]
    ],
    criticalQuestions: [
      {
        prompt: "1. Natural Selection vs. Hardy-Weinberg Equilibrium",
        subtext: "State the 5 conditions required for Hardy-Weinberg equilibrium. Which condition is violated when predatory birds selectively consume high-contrast moths?",
        exemplarAnswer: "The 5 conditions for Hardy-Weinberg equilibrium are: (1) No natural selection, (2) No mutations, (3) Large population (no genetic drift), (4) Random mating, and (5) No gene flow (migration). When predatory birds selectively hunt and remove visible moths, the 'no natural selection' condition is violated, causing differential survival and reproductive success that shifts allele frequencies p and q."
      },
      {
        prompt: "2. Directional Selection & Industrial Melanism",
        subtext: "Analyze how the Industrial Revolution served as a real-world selective agent for Biston betularia in Great Britain. Why did clean air legislation in the late 20th century cause a reversal in allele frequencies?",
        exemplarAnswer: "During the Industrial Revolution, airborne coal soot blackened lichen-covered tree trunks, conferring high camouflage on rare melanic (dark) moths while making light moths easy prey for birds, rapidly driving up allele p(D). Decades later, Clean Air Acts reduced industrial soot emissions, restoring light lichen to trees and reversing selective pressure, which favored light moths (dd) once again and drove recessive allele q(d) back upward."
      },
      {
        prompt: "3. Genetic Drift vs. Natural Selection",
        subtext: "Compare the effect of the 'Natural Disaster (Bottleneck)' button with standard predation. Why can small population bottlenecks cause beneficial alleles to be lost completely at random?",
        exemplarAnswer: "Natural selection is a non-random, deterministic process where fitness (camouflage) determines survival. In contrast, a bottleneck event is random genetic drift where a disaster indiscriminately eliminates individuals regardless of their phenotype. In small surviving populations, sampling error can randomly eliminate beneficial alleles purely by chance, demonstrating that small populations are vulnerable to stochastic evolutionary shifts."
      }
    ],
    realWorldScenario: {
      title: "Antibiotic Resistance in Bacterial Populations",
      scenario: "When a patient takes an incomplete course of antibiotics, bacteria with partial or full resistance mutations survive and reproduce, shifting the population's resistance allele frequency in a process analogous to directional selection in Peppered Moths.",
      task: "Using population genetics principles, explain why prescribing broad-spectrum antibiotics improperly leads to multi-drug resistant 'superbug' strains, and recommend 2 clinical strategies to minimize selective resistance pressure.",
      exemplarAnswer: "Broad-spectrum antibiotics act as a potent selective pressure, wiping out susceptible bacteria and removing competition for rare, resistant mutants. Surviving resistant bacteria proliferate rapidly, passing resistance plasmids horizontally and vertically. To mitigate this: (1) Prescribers must use targeted narrow-spectrum antibiotics guided by diagnostic cultures, (2) Patients must complete full prescribed courses to eliminate intermediate-tolerance strains, and (3) Hospitals must implement antimicrobial stewardship and rotational drug therapies."
    }
  },

  "sim-cell-membrane-transport-osmosis": {
    drivingQuestion: "How do passive diffusion, facilitated protein channels, and active transport ATP pumps regulate cellular volume, solute concentration gradients, and osmotic homeostasis?",
    hypothesisPrompt: "If an animal cell is placed in a hypertonic extracellular solution with high solute concentration, then water will move out of the cell via osmosis, causing cell crenation (shriveling), whereas in a hypotonic solution water will enter, causing swelling and potential lysis.",
    tableHeaders: ["Transport Mode", "Energy Required (ATP)", "Direction Relative to Gradient", "Membrane Component Involved", "Example Solute / Molecule", "Observed Cell Volume Effect"],
    tableRows: [
      ["Simple Diffusion (Osmosis)", "None (Passive)", "Down gradient (High → Low)", "Phospholipid Bilayer Core", "H₂O, O₂, CO₂ (Small / nonpolar)", "Drives swelling in hypotonic, shrinking in hypertonic"],
      ["Facilitated Diffusion", "None (Passive)", "Down gradient (High → Low)", "Transmembrane Protein Channels / Carriers", "Glucose, Na⁺, K⁺, Cl⁻ (Polar/Charged)", "Equilibrates specific solute concentrations across membrane"],
      ["Active Transport Pump", "Yes (ATP Hydrolysis)", "Against gradient (Low → High)", "Transmembrane ATP Pump (e.g. Na⁺/K⁺ ATPase)", "3 Na⁺ pumped out / 2 K⁺ pumped in", "Maintains resting membrane potential & electrochemical gradients"],
      ["Hypotonic Solution Test", "None", "Water influx > efflux", "Aquaporins / Lipid bilayer", "Extracellular Solute: 15 mM, H₂O: 140", "Cell swells (Turgid / Osmotic Lysis risk)"],
      ["Isotonic Solution Test", "None", "Dynamic Equilibrium (Influx = Efflux)", "Lipid bilayer & Channels", "Extracellular Solute: 50 mM, H₂O: 100", "Normal cell volume & morphology maintained"],
      ["Hypertonic Solution Test", "None", "Water efflux > influx", "Aquaporins / Lipid bilayer", "Extracellular Solute: 130 mM, H₂O: 60", "Cell shrivels / crenates (Plasmolysis)"]
    ],
    criticalQuestions: [
      {
        prompt: "1. The Fluid Mosaic Model & Selective Permeability",
        subtext: "Describe the structural properties of the phospholipid bilayer that prevent charged ions and large polar molecules from passing freely without protein channels.",
        exemplarAnswer: "The plasma membrane is composed of an amphipathic phospholipid bilayer with charged, hydrophilic phosphate heads on the outer surfaces and nonpolar, hydrophobic fatty acid tails sequestered in the interior. This hydrophobic core forms an impermeable energetic barrier to hydrophilic substances, polar molecules (like glucose), and charged ions (like Na⁺ and K⁺), requiring them to utilize transmembrane protein channels or carrier proteins for facilitated diffusion."
      },
      {
        prompt: "2. Osmoregulation in Animal vs. Plant Cells",
        subtext: "Contrast how animal cells and plant cells respond when placed in a hypotonic environment. Why do animal cells burst (lyse) while plant cells remain intact and turgid?",
        exemplarAnswer: "Animal cells possess only a flexible phospholipid plasma membrane; when placed in a hypotonic solution, continuous osmotic water influx increases hydrostatic internal pressure until the membrane ruptures (osmotic lysis). In contrast, plant cells are encased in a rigid cellulose cell wall that exerts opposing wall pressure (turgor pressure), preventing lysis and providing mechanical support (turgidity) that keeps the plant upright."
      },
      {
        prompt: "3. Bioenergetics of Primary Active Transport",
        subtext: "Explain why active transport requires ATP energy, and describe how maintaining electrochemical gradients via the Na⁺/K⁺ pump is essential for secondary transport and nerve impulse transmission.",
        exemplarAnswer: "Active transport moves solutes up (against) their thermodynamic concentration and electrical gradients, which requires energy input via ATP hydrolysis to induce conformational changes in pump proteins. The Na⁺/K⁺ ATPase pumps 3 Na⁺ out and 2 K⁺ in per ATP consumed, establishing a steep sodium concentration gradient and negative resting membrane potential. This stored electrochemical potential powers secondary active transport (e.g. glucose symporters) and enables action potential firing in neurons."
      }
    ],
    realWorldScenario: {
      title: "Intravenous (IV) Fluid Therapy & Medical Osmotherapy",
      scenario: "In hospital emergency departments, administering pure distilled water directly into a patient's bloodstream via IV would be fatal, while 0.9% Normal Saline is routinely infused for hydration.",
      task: "Using tonicity and osmosis principles, explain why 0.9% Normal Saline is isotonic to human red blood cells, what catastrophic cellular response occurs if pure distilled water is infused, and when hypertonic saline (3% NaCl) is clinically prescribed.",
      exemplarAnswer: "0.9% Normal Saline is isotonic to human blood plasma (approx. 290–300 mOsm/L), maintaining equal osmotic pressure so red blood cells retain their biconcave shape without net water flux. Infusing pure distilled water creates a severely hypotonic extracellular environment, causing rapid osmotic water influx into erythrocytes, leading to widespread hemolysis (cell bursting), acute anemia, and fatal hyperkalemia. Hypertonic saline (3% NaCl) is clinically prescribed in neuro-intensive care to treat acute cerebral edema; the high solute concentration draws excess water out of swollen brain tissue via osmosis back into the vasculature to reduce intracranial pressure."
    }
  },

  "sim-mitosis-vs-meiosis-cell-division": {
    drivingQuestion: "How do the distinct chromosomal segregation mechanisms of Mitosis and Meiosis account for genetic identity in somatic cells versus genetic variation and ploidy reduction in gametes?",
    hypothesisPrompt: "If homologous chromosomes pair and cross over during Meiosis I before separating into daughter cells, then Meiosis will yield 4 genetically unique haploid gametes (n), whereas Mitosis will separate identical sister chromatids into 2 identical diploid somatic cells (2n).",
    tableHeaders: ["Division Phase / Characteristic", "Mitosis (Somatic)", "Meiosis I (Reductional)", "Meiosis II (Equational)", "Chromosome State", "Genetic Significance"],
    tableRows: [
      ["Prophase Events", "Chromatin condenses; no synapsis", "Synapsis occurs; Homologous tetrads form chiasmata", "Spindle reforms; no DNA replication", "Double-stranded chromatids", "Crossing over exchanges alleles in Prophase I"],
      ["Metaphase Alignment", "Single-file at equatorial plate", "Double-file homologous tetrads at plate", "Single-file chromatids at plate", "Attached to spindle microtubules", "Independent assortment of maternal/paternal pairs in Meiosis I"],
      ["Anaphase Segregation", "Sister chromatids separate to poles", "Homologous pairs separate (Sister chromatids stay attached)", "Sister chromatids separate to poles", "Single vs. double stranded", "Reduction from diploid (2n) to haploid (n) occurs in Anaphase I"],
      ["Telophase & Cytokinesis", "Yields 2 diploid (2n=4) cells", "Yields 2 haploid (n=2 double) cells", "Yields 4 haploid (n=2 single) gametes", "Reformed nuclear envelopes", "Mitosis produces identical clones; Meiosis yields diverse gametes"],
      ["Genetic Recombination", "None (Clone preservation)", "Crossing over + Independent assortment", "Segregation of recombinant chromatids", "Recombinant mosaic chromatids", "Generates novel phenotypic combinations for sexual reproduction"],
      ["Final Daughter Output", "2 Identical Diploid Somatic Cells", "2 Intermediate Haploid Cells", "4 Genetically Unique Haploid Gametes", "n = 23 in humans (n = 2 in model)", "Fertilization restores 2n diploidy in zygotes"]
    ],
    criticalQuestions: [
      {
        prompt: "1. Chromosomal Segregation in Anaphase I vs. Anaphase of Mitosis",
        subtext: "Explain the fundamental difference between chromosome separation in Anaphase I of meiosis versus Anaphase of mitosis, and how this difference dictates final cell ploidy.",
        exemplarAnswer: "In Anaphase of mitosis, spindle fibers pull sister chromatids apart at the centromere, delivering a full identical set of individual chromosomes to each pole to preserve diploidy (2n). In Anaphase I of meiosis, entire homologous chromosome pairs are separated to opposite poles while sister chromatids remain physically attached at their centromeres. Because whole homologous chromosomes are partitioned, the chromosome number is halved, making Meiosis I a reductional division that transitions the cell from diploid (2n) to haploid (n)."
      },
      {
        prompt: "2. Sources of Genetic Variation in Sexual Reproduction",
        subtext: "Identify the two distinct meiotic events that generate genetic diversity in offspring, and explain when each occurs during the division cycle.",
        exemplarAnswer: "The two primary sources of meiotic genetic variation are: (1) Crossing over (recombination) during Prophase I, where non-sister chromatids of homologous pairs break and swap reciprocal segments at chiasmata, creating novel recombinant allele combinations; and (2) Independent assortment during Metaphase I, where homologous pairs orient randomly along the equatorial metaphase plate, allowing maternal and paternal chromosomes to segregate independently into 2ⁿ possible gametic combinations."
      },
      {
        prompt: "3. Nondisjunction & Chromosomal Aneuploidy",
        subtext: "Predict the consequences if homologous chromosomes fail to separate during Anaphase I versus sister chromatids failing to separate during Anaphase II (nondisjunction).",
        exemplarAnswer: "If nondisjunction occurs in Anaphase I, 100% of the resulting 4 gametes are abnormal: two gametes will have an extra chromosome (n+1) and two will lack a chromosome (n-1). If nondisjunction occurs in Anaphase II, only 50% of the gametes are affected (one n+1, one n-1), while the other two gametes develop normally (n). Upon fertilization, these abnormal gametes lead to embryonic aneuploidies such as Trisomy 21 (Down syndrome) or Monosomy X (Turner syndrome)."
      }
    ],
    realWorldScenario: {
      title: "Chemotherapy Spindle Inhibitors & Cancer Therapeutics",
      scenario: "Many clinical chemotherapy drugs, such as Paclitaxel (Taxol) and Vincristine, specifically target and disrupt microtubule spindle dynamics during cell division.",
      task: "Using mitotic spindle mechanics, explain why spindle inhibitors arrest cancer cells in Metaphase/Anaphase transitions, why this selectively harms rapidly dividing tumor tissue, and why patients experience side effects like hair loss and low white blood cell counts.",
      exemplarAnswer: "Taxanes and Vinca alkaloids bind tubulin to either hyper-stabilize or prevent polymerizing of mitotic spindle fibers. Without functioning dynamic spindle fibers, kinetochores cannot properly align chromosomes at the metaphase plate or pull chromatids apart in Anaphase, triggering the spindle assembly checkpoint (SAC) and inducing apoptotic cell death. Because malignant tumor cells divide uncontrollably, they are hypersensitive to mitotic arrest. However, healthy rapidly renewing somatic tissues—such as hair follicle matrix cells, gastrointestinal epithelium, and hematopoietic bone marrow progenitors—are also undergoing frequent mitosis, causing the hallmark side effects of alopecia, nausea, and leukopenia/neutropenia."
    }
  },

  "sim-genetics-mendelian-non-mendelian-inheritance": {
    drivingQuestion: "How do Mendelian principles (segregation & independent assortment) and non-Mendelian mechanisms (incomplete dominance, codominance, and sex-linkage) govern genotypic frequencies, phenotypic ratios, and pedigree inheritance patterns?",
    hypothesisPrompt: "If two dihybrid heterozygous parents (BbEe x BbEe) are crossed, then the offspring will express a 9:3:3:1 phenotypic ratio reflecting the independent assortment of alleles, whereas codominant and sex-linked traits will yield non-Mendelian phenotypic proportions.",
    tableHeaders: ["Cross Type / Inheritance Mode", "Parent 1 Genotype", "Parent 2 Genotype", "Predicted Offspring Genotypes", "Predicted Phenotypic Ratio", "Biological Mechanism"],
    tableRows: [
      ["Monohybrid Mendelian Cross", "Bb (Heterozygous Black)", "Bb (Heterozygous Black)", "1 BB : 2 Bb : 1 bb", "3 Black Fur : 1 Brown Fur (75% : 25%)", "Complete dominance; Law of Segregation"],
      ["Dihybrid Mendelian Cross", "BbEe (Dihybrid)", "BbEe (Dihybrid)", "9 B_E_ : 3 B_ee : 3 bbE_ : 1 bbee", "9 Black/Dark : 3 Black/Blue : 3 Brown/Dark : 1 Brown/Blue", "Law of Independent Assortment (unlinked genes)"],
      ["Incomplete Dominance", "RW (Pink Snapdragon)", "RW (Pink Snapdragon)", "1 RR : 2 RW : 1 WW", "1 Red : 2 Pink : 1 White (1:2:1)", "Neither allele completely dominant; intermediate blending"],
      ["Codominance (ABO Blood)", "Iᴬi (Heterozygous Type A)", "Iᴮi (Heterozygous Type B)", "1 IᴬIᴮ : 1 Iᴬi : 1 Iᴮi : 1 ii", "1 Type AB : 1 Type A : 1 Type B : 1 Type O (1:1:1:1)", "Multiple alleles; both Iᴬ and Iᴮ antigens expressed"],
      ["Sex-Linked Recessive", "XᴺY (Normal Male)", "XᴺXᶜ (Carrier Female)", "1 XᴺXᴺ : 1 XᴺXᶜ : 1 XᴺY : 1 XᶜY", "100% Females normal vision; 50% Males colorblind", "Hemizygosity in males (single maternal X chromosome)"],
      ["Autosomal Recessive Pedigree", "Aa (Carrier Father I-1)", "Aa (Carrier Mother I-2)", "1 AA : 2 Aa : 1 aa (25% affected risk)", "Unaffected parents produce affected child (II-3 aa)", "Trait skips generations via silent carrier heterozygotes"]
    ],
    criticalQuestions: [
      {
        prompt: "1. The Law of Independent Assortment vs. Genetic Linkage",
        subtext: "State the chromosomal basis of Mendel's Law of Independent Assortment during Meiosis I. Under what biological condition does a dihybrid cross deviate from the expected 9:3:3:1 ratio?",
        exemplarAnswer: "Mendel's Law of Independent Assortment is grounded in the random physical orientation of non-homologous chromosome tetrads along the equatorial metaphase plate during Metaphase I of meiosis. Maternal and paternal homologues segregate into gametes independently with equal probability. A dihybrid cross deviates from the 9:3:3:1 ratio when the two genes are physically located close together on the same chromosome (genetic linkage), causing parental allele combinations to be inherited together unless separated by meiotic crossing over."
      },
      {
        prompt: "2. Codominance vs. Incomplete Dominance",
        subtext: "Contrast the molecular mechanisms of incomplete dominance (such as pink snapdragon flowers) and codominance (such as ABO blood types). Why do both produce distinct 1:2:1 phenotypic ratios in monohybrid crosses?",
        exemplarAnswer: "In incomplete dominance, neither allele is fully dominant; a single functional allele in a heterozygote produces an intermediate quantity of functional pigment protein (haploinsufficiency), creating a blended intermediate phenotype (e.g. pink flower from red and white alleles). In codominance, both alleles encode distinct, fully functional gene products that are simultaneously expressed on the cell surface without blending (e.g. Iᴬ and Iᴮ produce both A and B glycoprotein antigens on erythrocytes). Both exhibit 1:2:1 phenotypic ratios in heterozygous crosses because the heterozygote is phenotypically distinct from both homozygous parents."
      },
      {
        prompt: "3. Pedigree Deduction & Hemizygous Inheritance",
        subtext: "Explain why X-linked recessive disorders (such as red-green colorblindness and hemophilia) manifest much more frequently in human biological males than females.",
        exemplarAnswer: "Human biological males have an XY sex chromosome constitution and are hemizygous for the X chromosome, carrying only a single copy of X-linked genes with no corresponding homologous allele on the smaller Y chromosome. Consequently, any recessive allele inherited on the maternal X chromosome will be expressed directly in the male phenotype. In contrast, females (XX) require two copies of the recessive mutant allele (one from each parent) to express the phenotype, as a single normal dominant allele on the second X chromosome will mask the condition."
      }
    ],
    realWorldScenario: {
      title: "Clinical Genetic Counseling & Prenatal Carrier Screening",
      scenario: "A prospective couple visits a genetic counselor. Both partners are healthy with no symptoms, but carrier screening reveals both carry a pathogenic recessive CFTR mutation associated with Cystic Fibrosis (autosomal recessive).",
      task: "Calculate the probability that their child will have Cystic Fibrosis, the probability of having an asymptomatic carrier child, and recommend prenatal diagnostic options (such as Amniocentesis or Preimplantation Genetic Diagnosis - PGD).",
      exemplarAnswer: "Because both parents are heterozygous carriers (Cc x Cc), standard Mendelian segregation yields: (1) A 25% probability (1 in 4) that the child will inherit both mutated alleles (cc) and be diagnosed with Cystic Fibrosis; (2) A 50% probability (2 in 4) that the child will be an asymptomatic carrier (Cc); and (3) A 25% probability (1 in 4) of inheriting two wild-type alleles (CC). For prenatal evaluation, the counselor can recommend: (a) Chorionic Villus Sampling (CVS at 10–13 weeks) or Amniocentesis (15–20 weeks) for fetal karyotyping and molecular DNA analysis, or (b) IVF with Preimplantation Genetic Diagnosis (PGD/PGT-M) to screen embryos for the CFTR mutation before uterine implantation."
    }
  },

  "sim-molecular-genetics-dna-replication-protein-synthesis": {
    drivingQuestion: "How does the central dogma of molecular biology coordinate DNA replication, RNA polymerase transcription, and ribosomal translation to accurately convert genetic code into functional proteins?",
    hypothesisPrompt: "If DNA helicase unzips the double helix, then RNA polymerase will transcribe the template strand into complementary mRNA using Uracil instead of Thymine, and tRNA anticodons will sequentially deliver amino acids to assemble a specific polypeptide.",
    tableHeaders: ["Process / Stage", "Key Enzymes / Complexes", "Input / Substrate", "Output / Product", "Complementary Pairing Rule", "Cellular Location"],
    tableRows: [
      ["DNA Replication (Unzipping)", "DNA Helicase, Topoisomerase", "Double-stranded DNA (dsDNA)", "Replication Fork (Leading & Lagging template strands)", "A ⇋ T (2 H-bonds), C ⇋ G (3 H-bonds)", "Nucleus (Eukaryotes) / Cytoplasm (Prokaryotes)"],
      ["DNA Polymerization", "DNA Polymerase III & I, Primase, Ligase", "Single-stranded template DNA + dNTPs", "Two identical semi-conservative dsDNA helices", "5' to 3' synthesis complementary to 3' to 5' template", "Nucleus"],
      ["Transcription", "RNA Polymerase II, Transcription Factors", "DNA Template Strand (3' to 5') + rNTPs", "Single-stranded messenger RNA (mRNA transcript)", "A ➔ U, T ➔ A, C ➔ G, G ➔ C", "Nucleus (pre-mRNA splicing occurs here)"],
      ["tRNA Charging & Transport", "Aminoacyl-tRNA Synthetases", "Free Amino Acids + specific tRNA + ATP", "Charged Aminoacyl-tRNA molecules", "Anticodon loop matches specific 3-base codon", "Cytoplasm"],
      ["Translation (Initiation & Elongation)", "Ribosome (Small & Large 70S/80S Subunits)", "mRNA transcript (5' cap to Poly-A tail)", "Nascent Polypeptide Chain (Amino acid sequence)", "Codon-Anticodon pairing (e.g., AUG ⇋ UAC)", "Ribosome at Rough ER / Cytoplasm"],
      ["Translation Termination", "Release Factors (RF1, RF2, RF3)", "Stop Codons (UAA, UAG, UGA)", "Completed protein release & ribosome dissociation", "No corresponding tRNA; Release factor hydrolyzes GTP", "Ribosome / Cytoplasm"]
    ],
    criticalQuestions: [
      {
        prompt: "1. Semi-Conservative Replication vs. Conservative Hypotheses",
        subtext: "Explain how the Meselson-Stahl density-gradient experiment proved that DNA replication is semi-conservative rather than conservative or dispersive, and describe the role of DNA Helicase in initiating this process.",
        exemplarAnswer: "Meselson and Stahl grew E. coli in heavy isotope ¹⁵N medium before switching to lighter ¹⁴N medium. After one generation of replication, centrifugation revealed a single intermediate density hybrid DNA band (¹⁵N-¹⁴N), ruling out the conservative model (which would yield two distinct heavy and light bands). After two generations, equal amounts of intermediate hybrid and light bands appeared, ruling out the dispersive model. DNA Helicase drives this semi-conservative process by breaking the hydrogen bonds between complementary base pairs at replication origins, separating the parental duplex into two single-stranded templates that each template the synthesis of a complementary daughter strand."
      },
      {
        prompt: "2. The Molecular Mechanism and Fidelity of Transcription",
        subtext: "Contrast DNA Polymerase and RNA Polymerase in terms of primer requirements, proofreading capability, and nucleotide selectivity (specifically why RNA incorporates Uracil rather than Thymine).",
        exemplarAnswer: "Unlike DNA Polymerase (which strictly requires a preexisting 3'-OH primer synthesized by primase), RNA Polymerase can initiate de novo synthesis directly onto promoter DNA sequences without a primer. RNA Polymerase exhibits lower proofreading fidelity (error rate ~1 in 10⁴–10⁵ vs. DNA Polymerase's ~1 in 10⁹ with 3'➔5' exonuclease proofreading) because transient mRNA errors do not permanently alter the genome. RNA Polymerase selectively incorporates Uracil (demethylated pyrimidine) instead of Thymine because rNTPs utilize ribose instead of 2-deoxyribose, and Uracil is energetically less costly for cells to produce during high-volume, transient mRNA transcription."
      },
      {
        prompt: "3. Point Mutations & Translation Reading Frames",
        subtext: "Analyze how a single nucleotide insertion/deletion (frameshift mutation) in an exon compares to a single nucleotide substitution (silent, missense, or nonsense mutation) in altering the downstream amino acid sequence and resulting tertiary protein structure.",
        exemplarAnswer: "A single nucleotide substitution alters only a single codon: it may be silent (wobble effect resulting in the same amino acid), missense (substituting a single chemically different amino acid that may or may not disrupt active site conformation), or nonsense (generating a premature stop codon UAA/UAG/UGA, leading to a truncated non-functional protein). In contrast, an insertion or deletion of a non-multiple of three nucleotides shifts the entire downstream reading frame (frameshift mutation). This scrambles every single subsequent amino acid codon and almost inevitably introduces a premature stop codon, completely destroying tertiary folding, catalytic motifs, and protein functionality."
      }
    ],
    realWorldScenario: {
      title: "Targeted Therapeutics: Protein Synthesis Inhibitors & Antibiotic Mechanisms",
      scenario: "A pharmaceutical laboratory is developing novel antimicrobial compounds targeting bacterial protein synthesis while sparing human host cells.",
      task: "Compare how aminoglycosides (e.g., Streptomycin binding the 30S ribosomal subunit), macrolides (e.g., Azithromycin blocking the 50S exit tunnel), and puromycin (a tyrosyl-tRNA mimic causing premature chain termination) disrupt translation. Explain why eukaryotic ribosomes (80S: 40S + 60S) provide a therapeutic window of selective toxicity.",
      exemplarAnswer: "Bacterial protein synthesis inhibitors exploit structural evolutionary divergences between prokaryotic (70S: 30S + 50S) and eukaryotic (80S: 40S + 60S) ribosomes. (1) Aminoglycosides bind the 16S rRNA of the 30S subunit, distorting the A-site decoding center and causing severe codon misreading and faulty membrane-destabilizing proteins; (2) Macrolides bind 23S rRNA in the 50S subunit exit tunnel, sterically obstructing nascent peptide elongation and inducing peptidyl-tRNA drop-off; (3) Puromycin mimics the 3'-terminal aminoacyl-adenosine of tyrosyl-tRNA, entering the ribosomal A-site and participating in peptide bond formation, but prematurely terminates elongation because its amide linkage cannot undergo further nucleophilic attack. Because human cytosolic ribosomes possess larger, structurally distinct 80S complexes, these antibiotics selectively kill bacterial pathogens without inhibiting human host cytoplasmic translation (though potential mitochondrial 70S cross-reactivity underlies dose-dependent toxicity)."
    }
  }
};

