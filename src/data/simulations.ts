import { SimulationItem, CurriculumStandard } from "../types";

// The 19 creator-authored STEM Simulation Apps
export const STEM_SIMULATIONS: SimulationItem[] = [
  {
    id: "sim-molecular-genetics-dna-replication-protein-synthesis",
    title: "Molecular Genetics Lab: DNA Replication & Protein Synthesis",
    tagline: "Interactive molecular biology suite with 3-stage central dogma pipeline: helicase unzipping, RNA polymerase transcription, and tRNA anticodon translation with 3D photorealistic DNA helix",
    discipline: "biology",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["NGSS HS-LS1-1", "NGSS HS-LS3-1", "NGSS MS-LS1-1", "AP Bio Unit 6", "CCSS.ELA-LITERACY.RST.11-12.3"],
    description: "An interactive molecular genetics virtual laboratory exploring the central dogma of biology. Experience DNA semi-conservative replication with helicase unzipping, nuclear transcription with RNA polymerase matching uracil and ribonucleotides, and cytoplasmic translation with tRNA anticodon drag-and-drop peptide synthesis alongside a real-time rotating 3D photorealistic double helix.",
    learningObjectives: [
      "Model semi-conservative DNA replication including helicase action and complementary base pairing rules (A-T, C-G)",
      "Simulate mRNA transcription via RNA polymerase and verify the substitution of Uracil (U) for Thymine (T)",
      "Execute ribosome translation by matching mRNA codons with complementary tRNA anticodons to assemble polypeptides",
      "Interpret standard genetic code codon charts to predict amino acid sequences from DNA and mRNA templates"
    ],
    thumbnailGradient: "from-teal-500 via-emerald-600 to-indigo-700",
    badgeColor: "bg-teal-500/10 text-teal-300 border-teal-500/20",
    iconName: "Dna",
    rating: 4.99,
    reviewCount: 112,
    teacherCount: 425,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "3-Stage Central Dogma Pipeline: DNA Replication, Transcription, and Translation",
      "Interactive DNA Helicase unzipping with smooth slider and auto-play controls",
      "RNA Polymerase step-by-step transcription with synchronized nucleotide pairing",
      "Drag-and-Drop tRNA Anticodon matching at the Ribosome A-Site with feedback",
      "Rotating 3D Photorealistic Double Helix with synchronized base pairing colors",
      "Built-in Voice Narration & Explanatory Lesson Notes for guided classroom instruction",
      "Interactive 64-Codon Genetic Code Reference Modal"
    ],
    parameterDefaults: {
      stage: "replication"
    },
    parameterControls: [
      {
        key: "stage",
        label: "Molecular Process",
        min: 1,
        max: 3,
        step: 1,
        unit: "stage",
        description: "1 = Replication, 2 = Transcription, 3 = Translation"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-molgen-1",
        title: "Semi-Conservative Unzipping",
        instruction: "Activate DNA Helicase and complete 100% strand separation to observe leading and lagging strand template formation.",
        targetMetric: "Helicase Unzip Progress",
        targetValue: 100,
        tolerance: 0,
        currentValueKey: "unzip_progress",
        rewardBadge: "Helicase Operator"
      },
      {
        id: "ch-molgen-2",
        title: "Polypeptide Assembly Master",
        instruction: "Switch to Stage 3 Translation, drag the correct matching tRNA anticodons to the ribosome, and synthesize the complete polypeptide chain.",
        targetMetric: "Synthesized Amino Acids",
        targetValue: 4,
        tolerance: 0,
        currentValueKey: "peptide_length",
        rewardBadge: "Master Ribosome Synthesizer"
      }
    ],
    previewFacts: [
      "The human genome contains over 3 billion base pairs of DNA packed into the nucleus of almost every cell in our body.",
      "Ribosomes can link amino acids together at speeds of up to 20 peptide bonds per second during active translation."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/molecular-genetics-dna-replication-protein-synthesis.html"
  },
  {
    id: "sim-genetics-mendelian-non-mendelian-inheritance",
    title: "Genetics & Inheritance Laboratory (Mendelian, Non-Mendelian & Pedigrees)",
    tagline: "Comprehensive genetics suite featuring monohybrid/dihybrid Punnett matrices, incomplete dominance, ABO blood codominance, sex-linked crosses, and interactive 3-generation pedigree deduction",
    discipline: "biology",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["NGSS HS-LS3-1", "NGSS HS-LS3-2", "NGSS HS-LS3-3", "NGSS MS-LS3-2", "AP Bio Unit 5", "CCSS.MATH.CONTENT.HSS.MD.B.6"],
    description: "An interactive genetics virtual laboratory exploring classical Mendelian genetics, non-Mendelian inheritance patterns, and family pedigree analysis. Perform monohybrid and 4x4 dihybrid crosses with real-time phenotypic and genotypic probability calculators. Investigate snapdragon incomplete dominance, human ABO blood group codominance, and X-linked colorblindness hemizygous inheritance. Solve 3-generation pedigree deduction puzzles across autosomal dominant, autosomal recessive, and sex-linked traits.",
    learningObjectives: [
      "Model Mendel's Law of Segregation and Law of Independent Assortment using 2x2 and 4x4 Punnett squares",
      "Calculate theoretical genotypic and phenotypic probability ratios for monohybrid and dihybrid parental crosses",
      "Distinguish between complete dominance, incomplete dominance (intermediate blending), codominance (multiple alleles), and sex-linked inheritance",
      "Deduce unknown parental and offspring genotypes across 3-generation pedigree charts based on phenotypic inheritance patterns"
    ],
    thumbnailGradient: "from-sky-500 via-indigo-600 to-rose-600",
    badgeColor: "bg-sky-500/10 text-sky-300 border-sky-500/20",
    iconName: "Dna",
    rating: 4.99,
    reviewCount: 96,
    teacherCount: 380,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "3 Comprehensive Simulation Modes: Mendelian Crosses, Non-Mendelian Patterns, and Interactive Pedigree Deduction",
      "Monohybrid and 4x4 Dihybrid Punnett Matrix with automated gamete combination and percentage breakdown",
      "Incomplete Dominance (Snapdragons RR x WW = Pink RW) & Codominance (ABO Blood Types IA, IB, i)",
      "Sex-Linked Recessive inheritance modeling hemizygous male vs. female carrier traits",
      "Interactive 3-Generation Pedigree Tree with individual deduction inspector and progress tracking",
      "Built-in High School Reference Guide & Notes for cytogenetics and inheritance laws"
    ],
    parameterDefaults: {
      mode: "mendelian",
      crossType: "monohybrid"
    },
    parameterControls: [
      {
        key: "crossType",
        label: "Cross Complexity",
        min: 1,
        max: 2,
        step: 1,
        unit: "traits",
        description: "1 = Monohybrid (1 Trait), 2 = Dihybrid (2 Traits)"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-gen-1",
        title: "Dihybrid Heterozygous F2 Ratio",
        instruction: "Cross two dihybrid heterozygous parents (BbEe x BbEe) and verify the classical 9:3:3:1 phenotypic ratio in the offspring probabilities panel.",
        targetMetric: "9:3:3:1 Ratio Verified",
        targetValue: 1,
        tolerance: 0,
        currentValueKey: "dihybrid_ratio",
        rewardBadge: "Mendelian Ratio Master"
      },
      {
        id: "ch-gen-2",
        title: "Pedigree Detective Certification",
        instruction: "Switch to Pedigree Deduction mode, select an Autosomal Recessive case, and correctly deduce all 7 individual genotypes across the 3 generations.",
        targetMetric: "Solved Genotypes",
        targetValue: 7,
        tolerance: 0,
        currentValueKey: "pedigree_solved",
        rewardBadge: "Clinical Geneticist"
      }
    ],
    previewFacts: [
      "Gregor Mendel's 1865 pea plant experiments established that inherited traits are determined by discrete cellular units (alleles) that separate during gametogenesis without blending.",
      "In human ABO blood typing, alleles IA and IB exhibit codominance with each other (producing AB blood with both A and B antigens) while being completely dominant over the recessive i allele."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/genetics-mendelian-non-mendelian-inheritance.html"
  },
  {
    id: "sim-mitosis-vs-meiosis-cell-division",
    title: "Mitosis vs. Meiosis & Ploidy Simulator",
    tagline: "Interactive cytology & genetics laboratory exploring somatic cell division, gametogenesis, crossing over, and chromosome reduction",
    discipline: "biology",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["NGSS HS-LS1-4", "NGSS HS-LS3-1", "NGSS HS-LS3-2", "NGSS MS-LS3-2", "AP Bio Unit 4", "AP Bio Unit 5"],
    description: "An interactive cell biology and genetics laboratory comparing Mitosis (somatic cell division) and Meiosis (gametogenesis). Visualize chromosomal dynamics step-by-step with synchronized 2D animated canvas models, toggleable anatomical diagram callouts (centrosomes, spindle fibers, nuclear envelopes, centromeres, sister chromatids), interactive Synapsis & Crossing Over mechanics in Prophase I, single vs. double-file equatorial metaphase plate alignments, and real-time ploidy tracking (diploid 2n vs. haploid n).",
    learningObjectives: [
      "Contrast the biological purpose, daughter cell yields, and genetic outcomes of Mitosis (2 identical 2n somatic cells) versus Meiosis (4 unique n gametes)",
      "Identify the distinct phases of mitosis and meiosis (Interphase, Prophase I/II, Metaphase I/II, Anaphase I/II, Telophase/Cytokinesis)",
      "Model how synapsis and crossing over (chiasmata exchange) during Prophase I generate recombinant chromatids and genetic diversity",
      "Explain the cytological basis of independent assortment and chromosome reduction division during Anaphase I"
    ],
    thumbnailGradient: "from-sky-500 via-indigo-600 to-rose-600",
    badgeColor: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
    iconName: "GitCommit",
    rating: 4.98,
    reviewCount: 88,
    teacherCount: 345,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "3 viewing modes: Dedicated Mitosis view, Dedicated Meiosis (I & II) view, and Side-by-Side comparison",
      "Interactive Step-by-Step timeline with Play/Pause, stage stepping, and variable playback speeds",
      "Interactive Crossing Over mechanic in Prophase I enabling visible DNA swapping on homologous tetrads",
      "Toggleable Diagram Labels overlay highlighting centrosomes, spindle fibers, nuclear envelope, and centromeres",
      "Live Ploidy & Genetic Status tracker updating dynamically across each division phase",
      "Comprehensive modal study guide covering cytology structures and comparative division mechanics"
    ],
    parameterDefaults: {
      viewMode: "mitosis",
      showLabels: true
    },
    parameterControls: [
      {
        key: "viewMode",
        label: "Division Mode",
        min: 0,
        max: 2,
        step: 1,
        unit: "mode",
        description: "0 = Mitosis, 1 = Meiosis, 2 = Side-by-Side"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-div-1",
        title: "Recombinant Gametogenesis in Meiosis I",
        instruction: "Navigate to Meiosis Prophase I, trigger crossing over to create recombinant tetrads, and advance through Telophase II to yield 4 unique gametes.",
        targetMetric: "Recombinant Gametes",
        targetValue: 1,
        tolerance: 0,
        currentValueKey: "recombinant_complete",
        rewardBadge: "Genetic Diversity Architect"
      },
      {
        id: "ch-div-2",
        title: "Metaphase Alignment Comparison",
        instruction: "Use Side-by-Side mode to compare Metaphase of Mitosis (single-file sister chromatids) vs Metaphase I of Meiosis (double-file homologous pairs).",
        targetMetric: "Side-by-Side Analysis",
        targetValue: 1,
        tolerance: 0,
        currentValueKey: "sidebyside_metaphase",
        rewardBadge: "Cytology Master"
      }
    ],
    previewFacts: [
      "Crossing over occurs during Prophase I of meiosis, where homologous non-sister chromatids form chiasmata and exchange reciprocal DNA segments, driving near-infinite genetic variation.",
      "While Mitosis preserves ploidy (2n to 2n) through a single division, Meiosis undergoes two sequential divisions without an intervening S phase, reducing chromosome numbers by half (2n to n)."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/mitosis-vs-meiosis-cell-division.html"
  },
  {
    id: "sim-cell-membrane-transport-osmosis",
    title: "Cell Membrane Transport & Osmosis Simulator",
    tagline: "Interactive cellular physiology laboratory exploring phospholipid bilayers, simple/facilitated diffusion, active transport ATP pumps, and tonicity",
    discipline: "biology",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["NGSS HS-LS1-2", "NGSS HS-LS1-3", "NGSS MS-LS1-2", "AP Bio Unit 2", "CCSS.ELA-LITERACY.RST.9-10.7"],
    description: "An interactive cell membrane physiology laboratory modeling molecular transport dynamics across a fluid mosaic phospholipid bilayer. Experiment with 3 distinct transport mechanisms: Simple Diffusion of water and small molecules, Facilitated Diffusion through transmembrane protein channels, and Active Transport utilizing Na+/K+ ATP pumps against concentration gradients. Observe real-time osmotic swelling and crenation across Hypotonic, Isotonic, and Hypertonic extracellular solutions with live particle counting and comprehensive explanatory notes.",
    learningObjectives: [
      "Explain the fluid mosaic model and amphipathic structure of the phospholipid bilayer (polar hydrophilic heads and nonpolar fatty acid tails)",
      "Distinguish between passive transport (simple diffusion, facilitated diffusion, osmosis) and energy-requiring active transport",
      "Predict net water movement and morphological cell volume changes in hypotonic (lysis/turgor), isotonic (equilibrium), and hypertonic (crenation/plasmolysis) environments",
      "Model how transmembrane transport protein channels and active ATP ion pumps regulate cellular homeostasis"
    ],
    thumbnailGradient: "from-sky-500 via-indigo-600 to-purple-700",
    badgeColor: "bg-sky-500/10 text-sky-300 border-sky-500/20",
    iconName: "Shield",
    rating: 4.97,
    reviewCount: 72,
    teacherCount: 310,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Dynamic 2D canvas with animated phospholipid bilayer, hydrophobic tails, and hydrophilic heads",
      "4 transmembrane protein channels enabling facilitated diffusion and active transport",
      "Real-time osmotic cell radius morphing (swelling/turgor in hypotonic vs shrinking/crenation in hypertonic)",
      "3 quick tonicity presets (Hypotonic, Isotonic, Hypertonic) + continuous solute/water concentration sliders",
      "Independent toggle switches for Simple Diffusion, Facilitated Channels, and Active ATP Pumps",
      "Live particle counters (Hâ‚‚O In/Out, Solute In/Out, Large Molecules, ATP consumed) and built-in explanatory notes modal"
    ],
    parameterDefaults: {
      soluteConcentration: 50,
      waterVolume: 100
    },
    parameterControls: [
      {
        key: "soluteConcentration",
        label: "Extracellular Solute",
        min: 10,
        max: 150,
        step: 5,
        unit: "mM",
        description: "Concentration of extracellular solutes (salt/glucose)"
      },
      {
        key: "waterVolume",
        label: "Extracellular Hâ‚‚O",
        min: 40,
        max: 200,
        step: 10,
        unit: "vol",
        description: "Relative water volume outside the cell"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-cell-1",
        title: "Achieve Dynamic Isotonic Equilibrium",
        instruction: "Adjust extracellular solute and water sliders until net osmotic flow reaches equilibrium with equal inward and outward particle flux.",
        targetMetric: "Isotonic State",
        targetValue: 1,
        tolerance: 0,
        currentValueKey: "isotonic_state",
        rewardBadge: "Homeostasis Champion"
      },
      {
        id: "ch-cell-2",
        title: "Active Transport Against Concentration Gradient",
        instruction: "Enable the Active Transport pump to drive solutes into the cell against the gradient and consume at least 15 ATP units.",
        targetMetric: "ATP Consumed",
        targetValue: 15,
        tolerance: 0,
        currentValueKey: "atp_used",
        rewardBadge: "ATP Bioenergetics Master"
      }
    ],
    previewFacts: [
      "Osmosis is a passive process driven by water potential: water moves down its own concentration gradient from regions of lower solute concentration (hypotonic) to higher solute concentration (hypertonic).",
      "Animal cells lack rigid cell walls, making them susceptible to osmotic lysis (bursting) in hypotonic solutions and crenation (shriveling) in hypertonic environments."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/cell-membrane-transport-osmosis.html"
  },
  {
    id: "sim-natural-selection-population-genetics",
    title: "Natural Selection & Allele Frequency Simulator",
    tagline: "Interactive Peppered Moth evolution laboratory modeling Hardy-Weinberg equilibrium, differential predation, and genetic drift",
    discipline: "biology",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["NGSS HS-LS4-2", "NGSS HS-LS4-3", "NGSS HS-LS4-4", "NGSS MS-LS4-4", "AP Bio Unit 7", "CCSS.MATH.CONTENT.HSS.ID.B.6"],
    description: "An interactive evolutionary biology and population genetics simulator based on the classic Peppered Moth (Biston betularia) industrial melanism study. Students explore how differential camouflage contrast drives natural selection across changing habitats (Light Birch, Sooty Forest, and Desert Sand). Features both interactive timed hunting modes and automated contrast-based predation, dynamic Hardy-Weinberg allele frequency tracking (p & q calculations over multiple generations), adjustable mutation rates, and stochastic genetic drift / bottleneck disaster events.",
    learningObjectives: [
      "Demonstrate how natural selection alters phenotypic distributions and allele frequencies (p and q) in response to changing environmental pressures",
      "Calculate allele frequencies and genotype proportions using Hardy-Weinberg principles (pÂ² + 2pq + qÂ² = 1)",
      "Compare the evolutionary impacts of deterministic natural selection versus stochastic genetic drift (population bottlenecks)",
      "Analyze multi-generation line graphs showing changes in dominant (D) versus recessive (d) alleles over evolutionary time"
    ],
    thumbnailGradient: "from-emerald-500 via-teal-600 to-slate-800",
    badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    iconName: "Bug",
    rating: 4.96,
    reviewCount: 54,
    teacherCount: 260,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Dynamic 2D canvas with animated moth flight physics and camouflage rendering",
      "3 selectable habitats: Light Birch Forest, Dark Sooty Industrial Forest, and Desert Sand",
      "Interactive 15-second predator hunting challenge with real-time target HUD",
      "Automated predation algorithm based on pixel contrast visibility against background",
      "Real-time Hardy-Weinberg allele frequency graph (p = dominant dark, q = recessive light)",
      "Configurable mutation rates (0%, 2%, 8%) and catastrophic population bottleneck events"
    ],
    parameterDefaults: {
      environment: "birch",
      mutationRate: 0.02
    },
    parameterControls: [
      {
        key: "mutationRate",
        label: "Mutation Rate",
        min: 0,
        max: 0.08,
        step: 0.02,
        unit: "%",
        description: "Rate of spontaneous allele mutations during reproduction"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-moth-1",
        title: "Industrial Melanism Shift",
        instruction: "Switch habitat to Dark Sooty Forest and run 5 generations of predation to increase dominant dark allele frequency p(D) above 0.85.",
        targetMetric: "Dominant Allele Frequency p(D)",
        targetValue: 0.85,
        tolerance: 0.05,
        currentValueKey: "p_frequency",
        rewardBadge: "Industrial Melanism Pioneer"
      },
      {
        id: "ch-moth-2",
        title: "Genetic Drift & Bottleneck Recovery",
        instruction: "Trigger a Population Bottleneck disaster and observe how small sample sizes rapidly skew allele frequencies without selective pressure.",
        targetMetric: "Bottleneck Survival",
        targetValue: 1,
        tolerance: 0,
        currentValueKey: "bottleneck_event",
        rewardBadge: "Genetic Drift Analyst"
      }
    ],
    previewFacts: [
      "The Peppered Moth (Biston betularia) is the premier real-world example of directional natural selection, where industrial coal soot darkened tree trunks and shifted populations from light to melanic morphs.",
      "Hardy-Weinberg equilibrium establishes that allele frequencies remain constant across generations in the absence of evolutionary forces: selection, mutation, migration, genetic drift, and non-random mating."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/natural-selection-population-genetics.html"
  },
  {
    id: "sim-dna-replication-protein-synthesis",
    title: "DNA Replication & Protein Synthesis Suite",
    tagline: "Interactive 3-stage molecular biology laboratory exploring DNA Helicase replication, RNA Polymerase transcription, and ribosomal tRNA translation",
    discipline: "biology",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["NGSS HS-LS1-1", "NGSS HS-LS3-1", "NGSS MS-LS1-1", "AP Bio Unit 6", "CCSS.ELA-LITERACY.RST.11-12.3"],
    description: "An interactive molecular genetics laboratory providing real-time visual simulation of the central dogma of molecular biology. Step through 3 core cellular stages: (1) DNA Replication unzipping via DNA Helicase and complementary DNA Polymerase synthesis, (2) Transcription with RNA Polymerase creating single-stranded mRNA from template DNA, and (3) Ribosomal Translation with interactive drag-and-drop tRNA anticodon matching to synthesize polypeptide amino acid chains using an interactive mRNA codon reference table.",
    learningObjectives: [
      "Model how DNA Helicase separates double-stranded DNA and DNA Polymerase synthesizes complementary daughter strands (A-T, C-G)",
      "Explain the process of transcription where RNA Polymerase reads template DNA to create messenger RNA with Uracil (A-U, C-G)",
      "Demonstrate ribosomal translation by decoding mRNA triplets using tRNA anticodons to assemble specific amino acid polypeptide chains",
      "Interpret the universal mRNA codon reference chart to identify Start codons (AUG) and Stop codons (UAA, UAG, UGA)"
    ],
    thumbnailGradient: "from-sky-500 via-purple-600 to-rose-600",
    badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    iconName: "Dna",
    rating: 4.98,
    reviewCount: 68,
    teacherCount: 295,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "3-in-1 Central Dogma Suite: Replication, Transcription, and Translation modes",
      "Dynamic 2D canvas with animated enzyme action (DNA Helicase & RNA Polymerase)",
      "Color-coded nitrogenous bases (A-Red, T-Blue, C-Green, G-Yellow, U-Purple)",
      "Interactive drag-and-drop tRNA anticodon matching inside the ribosome A-Site",
      "Real-time growing polypeptide amino acid chain visualizer",
      "Full interactive 64-codon reference table lookup modal"
    ],
    parameterDefaults: {
      step: 1
    },
    parameterControls: [
      {
        key: "step",
        label: "Process Stage",
        min: 1,
        max: 3,
        step: 1,
        unit: "stage",
        description: "1=Replication, 2=Transcription, 3=Translation"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-dna-1",
        title: "Synthesize Complementary Daughter Strands",
        instruction: "Activate DNA Helicase to unzip the double helix, then synthesize the leading and lagging strands with DNA Polymerase.",
        targetMetric: "Replication Complete",
        targetValue: 1,
        tolerance: 0,
        currentValueKey: "replication_done",
        rewardBadge: "Helicase Master"
      },
      {
        id: "ch-dna-2",
        title: "Assemble the Polypeptide Chain",
        instruction: "Switch to Translation mode and drag matching tRNA anticodons to decode the entire mRNA strand into a functional protein.",
        targetMetric: "Polypeptide Synthesized",
        targetValue: 5,
        tolerance: 0,
        currentValueKey: "amino_acids_linked",
        rewardBadge: "Master of Translation"
      }
    ],
    previewFacts: [
      "The central dogma of molecular biology describes the two-step flow of genetic information: DNA to RNA (transcription) and RNA to protein (translation).",
      "During translation, each mRNA triplet (codon) is paired with a complementary 3-base tRNA anticodon delivering the corresponding amino acid."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/dna-replication-protein-synthesis.html"
  },
  {
    id: "sim-linear-quadratic-equations",
    title: "Linear & Quadratic Equations Visualizer",
    tagline: "Interactive step-by-step graphical solution of simultaneous linear and quadratic systems with dynamic substitution tables and animated curve intersections",
    discipline: "mathematics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM"],
    standards: ["CCSS.MATH.HSA.REI.C.7", "CCSS.MATH.HSA.REI.D.11", "CCSS.MATH.HSA.CED.A.2", "NGSS SEP-5"],
    description: "An interactive step-by-step mathematical laboratory for solving simultaneous linear-quadratic systems graphically. Features random quadratic (parabola) and linear equation generators, sequential coordinate plotting for curves and lines, smooth slow-motion animated curve drawing, dynamic substitution tables, and highlighted dual intersection points with axis projection lines.",
    learningObjectives: [
      "Understand how simultaneous systems involving a quadratic curve (parabola) and a straight line produce up to two points of intersection",
      "Evaluate algebraic substitution of x-values into quadratic form y = axÂ² + bx + c and linear form y = mx + k",
      "Interpret intersections on a 2D Cartesian coordinate plane as coordinate pairs that simultaneously satisfy both equations",
      "Analyze axis projection lines showing the corresponding x and y solution values"
    ],
    thumbnailGradient: "from-sky-500 via-pink-600 to-emerald-600",
    badgeColor: "bg-pink-500/10 text-pink-300 border-pink-500/20",
    iconName: "TrendingUp",
    rating: 4.97,
    reviewCount: 46,
    teacherCount: 184,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive 2D Cartesian grid with dynamic axes and coordinate labels",
      "Random system generator producing integer roots with clear geometric intersections",
      "Step-by-step point-by-point plotting progress for quadratic parabola and linear line",
      "Slow-motion animated curve/line drawing connecting plotted points",
      "Dynamic algebraic substitution tables showing real-time calculations for each coordinate pair",
      "Automatic intersection identification with dashed axis projections and coordinate labels"
    ],
    parameterDefaults: {
      plotStep: 1
    },
    parameterControls: [
      {
        key: "plotStep",
        label: "Plotting Progress",
        min: 1,
        max: 7,
        step: 1,
        unit: "pt",
        description: "Point plotting sequence index"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-linquad-1",
        title: "Plot and Trace the Parabola",
        instruction: "Plot all quadratic coordinate points and trigger the slow curve animation to visualize the parabola.",
        targetMetric: "Curve Complete",
        targetValue: 1,
        tolerance: 0,
        currentValueKey: "curve_drawn",
        rewardBadge: "Parabola Master"
      },
      {
        id: "ch-linquad-2",
        title: "Find Both Intersection Points",
        instruction: "Plot both equations and identify both points (x1, y1) and (x2, y2) where the straight line intersects the quadratic curve.",
        targetMetric: "System Solved",
        targetValue: 2,
        tolerance: 0,
        currentValueKey: "intersections_found",
        rewardBadge: "Quadratic Linear Solver"
      }
    ],
    previewFacts: [
      "A linear-quadratic system can have 0, 1 (tangent line), or 2 distinct real solutions representing points of intersection.",
      "The x-coordinates of the intersection points are roots of the combined quadratic equation (a)xÂ² + (b - m)x + (c - k) = 0."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/linear-quadratic-equations.html"
  },
  {
    id: "sim-simultaneous-linear-equations",
    title: "Simultaneous Linear Equations Visualizer",
    tagline: "Interactive step-by-step graphical solution of simultaneous linear equations with dynamic substitution tables and animated line intersection",
    discipline: "mathematics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM"],
    standards: ["CCSS.MATH.HSA.REI.C.6", "CCSS.MATH.8.EE.C.8", "CCSS.MATH.HSA.CED.A.2", "NGSS SEP-5"],
    description: "An interactive step-by-step mathematical laboratory for solving simultaneous linear equations graphically. Features random equation generators with integer focus, sequential coordinate plotting (0/5 points per line), animated line-joining transitions, real-time substitution calculation tables, and highlighted intersection solution coordinate identification.",
    learningObjectives: [
      "Understand how simultaneous linear equations represent two straight lines on a Cartesian coordinate plane",
      "Calculate and verify coordinate pairs (x, y) through step-by-step algebraic substitution into slope-intercept form (y = mx + c)",
      "Identify the point of intersection as the unique simultaneous solution satisfying both linear equations",
      "Connect algebraic solutions with geometric representations on a 2D coordinate grid"
    ],
    thumbnailGradient: "from-sky-600 via-pink-700 to-slate-950",
    badgeColor: "bg-sky-500/10 text-sky-300 border-sky-500/20",
    iconName: "TrendingUp",
    rating: 4.96,
    reviewCount: 52,
    teacherCount: 218,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive 2D Cartesian grid canvas with dynamic coordinate axes and integer grid lines",
      "Sequential point-by-point plotting controls with live progress counters for Equation 1 and Equation 2",
      "Smooth animated line-drawing transitions connecting plotted coordinate points",
      "Real-time dynamic substitution and calculation tables for each x-value",
      "Clear intersection indicator with dashed projection lines to X and Y axes and coordinate callouts"
    ],
    parameterDefaults: {
      step: 1
    },
    parameterControls: [
      {
        key: "step",
        label: "Plot Step",
        min: 1,
        max: 5,
        step: 1,
        unit: "pt",
        description: "Point plotting sequence progress"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-lineq-1",
        title: "Plot and Connect Equation 1",
        instruction: "Plot all 5 coordinate points for Equation 1 and trigger the animated line draw to construct the first linear function.",
        targetMetric: "Eq 1 Line Joined",
        targetValue: 1,
        tolerance: 0,
        currentValueKey: "eq1_joined",
        rewardBadge: "Linear Plotter"
      },
      {
        id: "ch-lineq-2",
        title: "Find the Point of Intersection",
        instruction: "Plot both equations and identify the exact (x, y) coordinates where the two straight lines intersect.",
        targetMetric: "Intersection Found",
        targetValue: 1,
        tolerance: 0,
        currentValueKey: "intersection_found",
        rewardBadge: "System Solver"
      }
    ],
    previewFacts: [
      "If two linear equations have distinct slopes (m1 â‰  m2), their graphs are non-parallel lines that intersect at exactly one unique point.",
      "The point of intersection represents the unique set of coordinates (x, y) that simultaneously satisfies both linear equations."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/simultaneous-linear-equations.html"
  },
  {
    id: "sim-solar-eclipse-orbital-dynamics",
    title: "3D Solar Eclipse & Orbital Dynamics",
    tagline: "Interactive 3D celestial mechanics modeling total, partial, and annular solar eclipses, umbra vs. penumbra shadows, and lunar inclination",
    discipline: "physics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["MS-ESS1-1", "MS-ESS1-2", "HS-ESS1-4", "NGSS SEP-2", "NGSS SEP-5"],
    description: "A precision 3D WebGL orbital dynamics laboratory and solar eclipse simulation. Illustrates the celestial mechanics of Earth revolving anticlockwise around the Sun, Moon orbiting Earth, directional sunlight rays, umbra and penumbra shadow cone geometry, and real-time eclipse alignment controls with live tracking annotations.",
    learningObjectives: [
      "Understand the geometric alignment required between the Sun, Moon, and Earth to produce total, partial, and annular solar eclipses",
      "Differentiate between the dark inner umbra shadow core and the lighter outer penumbra zone during eclipse totality",
      "Analyze planetary orbital mechanics including anticlockwise revolution and lunar orbital inclination relative to the ecliptic plane",
      "Practice safe solar observation principles and identify the Sun's atmospheric corona revealed during total solar eclipses"
    ],
    thumbnailGradient: "from-amber-600 via-stone-800 to-indigo-950",
    badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    iconName: "Sun",
    rating: 4.97,
    reviewCount: 68,
    teacherCount: 242,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive 3D WebGL celestial mechanics simulation featuring procedural Earth, Moon, and Sun textures",
      "Dynamic volumetric golden sunlight ray field connecting the solar core to the Earth-Moon system",
      "One-click 'Align Eclipse' control to instantly configure total eclipse syzygy alignment",
      "Real-time orbit speed adjustments, pause/resume mechanics, and 360-degree OrbitControls camera navigation",
      "Comprehensive educational HUD detailing eclipse classifications (Total, Partial, Annular, Hybrid) and viewing safety"
    ],
    parameterDefaults: {
      speed: 0.002
    },
    parameterControls: [
      {
        key: "speed",
        label: "Orbit Speed",
        min: 0,
        max: 0.01,
        step: 0.0005,
        unit: "rad/s",
        description: "Rate of Earth revolution and lunar orbital progression"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-eclipse-1",
        title: "Achieve Syzygy Alignment",
        instruction: "Use the 'Align Eclipse' control or orbit speed adjustments to align the Moon directly between the Earth and Sun, observing the umbra shadow cast onto Earth's surface.",
        targetMetric: "Eclipse Syzygy Alignment",
        targetValue: 1,
        tolerance: 0,
        currentValueKey: "syzygy_aligned",
        rewardBadge: "Eclipse Master"
      },
      {
        id: "ch-eclipse-2",
        title: "Examine Umbra vs. Penumbra Geometry",
        instruction: "Inspect the shadow dynamics and explain why observers in the umbra witness totality while those in the penumbra witness a partial eclipse.",
        targetMetric: "Shadow Zone Analysis",
        targetValue: 1,
        tolerance: 0,
        currentValueKey: "shadow_analyzed",
        rewardBadge: "Shadow Dynamicist"
      }
    ],
    previewFacts: [
      "A total solar eclipse is only visible along a narrow path on Earth called the 'path of totality', usually only about 100 to 160 km wide.",
      "Because the Moon's orbit is tilted about 5 degrees relative to Earth's orbit around the Sun, solar eclipses happen only 2 to 5 times per year instead of every month."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/solar-eclipse-orbital-dynamics.html"
  },
  {
    id: "sim-saturn-moons-educational-simulation",
    title: "Saturn & Moons Educational Simulation",
    tagline: "Interactive 3D planetary astronomy simulation modeling Saturn's multi-layered ring system, 7 major orbiting moons, asteroids, and dynamic comets",
    discipline: "physics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["MS-ESS1-1", "MS-ESS1-2", "HS-ESS1-4", "NGSS SEP-2", "NGSS SEP-5"],
    description: "An interactive 3D WebGL astronomy laboratory and celestial mechanics simulation of Saturn and its surrounding orbital environment. Features Saturn's multi-colored concentric ring system with distinct boundaries, real-time orbital progression for 7 major natural satellites (Mimas, Enceladus, Tethys, Dione, Rhea, Titan, Iapetus), atmospheric banding lines, a pulsating solar core with golden radial glow, traveling deep-space asteroids, and dynamic comets.",
    learningObjectives: [
      "Explore the multi-layered architecture of Saturn's ring system composed of water ice, rocky debris, and dust particles",
      "Examine orbital periods, relative velocities, and distances of Saturn's 7 primary moons including Titan and Enceladus",
      "Analyze gas giant atmospheric features and fine equatorial banding patterns formed by high-speed planetary winds",
      "Investigate celestial mechanics, roving asteroid trajectories, and hyperbolic comet passages in the outer Solar System"
    ],
    thumbnailGradient: "from-amber-500 via-yellow-600 to-slate-950",
    badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    iconName: "Globe",
    rating: 4.98,
    reviewCount: 76,
    teacherCount: 295,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Precision 3D WebGL Sun-Saturn planetary engine with 3,500-star deep-space background",
      "Multi-colored concentric ring system featuring 5 distinct physical optical layers and sharp white outlines",
      "7 real-time orbital moons (Mimas, Enceladus, Tethys, Dione, Rhea, Titan, Iapetus) with individual circular orbit paths and labels",
      "Dynamic deep-space objects including orbiting irregular dodecahedron asteroids and traversing comets with luminous particle tails",
      "Interactive information HUD detailing Saturnian density, atmospheric wind banding, and planetary ring physics"
    ],
    parameterDefaults: {
      orbitSpeed: 1.0
    },
    parameterControls: [
      {
        key: "orbitSpeed",
        label: "Orbit Speed",
        min: 0.1,
        max: 3.0,
        step: 0.1,
        unit: "x",
        description: "Orbital speed multiplier for planetary revolution and lunar motion"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-saturn-1",
        title: "Track Titan's Outer Orbit",
        instruction: "Use orbital controls to follow Titan (the largest moon) and compare its orbital velocity with inner moons like Mimas and Enceladus.",
        targetMetric: "Moon Orbital Hierarchy",
        targetValue: 1,
        tolerance: 0,
        currentValueKey: "titan_orbit",
        rewardBadge: "Saturnian Astronomer"
      },
      {
        id: "ch-saturn-2",
        title: "Analyze Ring System Thickness",
        instruction: "Inspect the multi-colored concentric ring boundaries and observe how the optical density varies across inner and outer ring layers.",
        targetMetric: "Ring Structure Analysis",
        targetValue: 1,
        tolerance: 0,
        currentValueKey: "ring_analysis",
        rewardBadge: "Ring Dynamicist"
      }
    ],
    previewFacts: [
      "Saturn is the least dense planet in the Solar Systemâ€”with an average density of ~0.687 g/cmÂ³, it is less dense than water.",
      "Saturn's rings span up to 282,000 kilometers across, yet their average vertical thickness is only about 10 to 100 meters."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/saturn-moons-educational-simulation.html"
  },
  {
    id: "sim-keplers-laws-3d",
    title: "3D Kepler's Laws Simulation",
    tagline: "Interactive 3D orbital dynamics demonstrating elliptical orbits, equal-time swept area sectors, and harmonic period ratios (TÂ² âˆ aÂ³)",
    discipline: "physics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["HS-PS2-4", "HS-ESS1-4", "AP Physics 1: Gravitation & Circular Motion", "NGSS SEP-2", "NGSS SEP-5"],
    description: "A precision 3D orbital mechanics laboratory demonstrating Kepler's Three Laws of Planetary Motion. Solves Kepler's equation numerically (M = E - e sin E) in real-time, features elliptical trajectory modeling with variable semi-major axis (a) and eccentricity (e), live equal-time swept sector area calculations (2nd Law), instantaneous orbital velocity vectors, and real-time harmonic ratio validation (TÂ²/aÂ³).",
    learningObjectives: [
      "Verify Kepler's First Law by modifying orbital scale (a) and eccentricity (e) to observe elliptical geometry around the primary focus",
      "Demonstrate Kepler's Second Law through real-time discrete equal-time sector sweeps and instantaneous velocity variations between perihelion and aphelion",
      "Confirm Kepler's Third Law (Harmonic Law) by validating the constant ratio between period squared and semi-major axis cubed (TÂ²/aÂ³)"
    ],
    thumbnailGradient: "from-blue-600 via-sky-600 to-indigo-950",
    badgeColor: "bg-sky-500/10 text-sky-300 border-sky-500/20",
    iconName: "Orbit",
    rating: 4.99,
    reviewCount: 88,
    teacherCount: 340,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Precision 3D WebGL orbital dynamics solver (Newton-Raphson Kepler equation solver)",
      "Interactive elliptical orbit geometry with adjustable semi-major axis (a = 50-140 AU) and eccentricity (e = 0.0-0.75)",
      "Equal-time sector area visualizer dynamically rendering swept fan triangles and live AUÂ² area readouts",
      "Instantaneous velocity vector arrow scaling dynamically with vis-viva orbital speed",
      "Live telemetry deck tracking distance (r), velocity (v), period (T), and TÂ²/aÂ³ ratio consistency"
    ],
    parameterDefaults: {
      semimajor: 75,
      eccentricity: 0.5,
      speed: 1.0,
      showSweeps: 1,
      showVectors: 1
    },
    parameterControls: [
      {
        key: "semimajor",
        label: "Orbital Scale (a)",
        min: 50,
        max: 140,
        step: 1,
        unit: " AU",
        description: "Semi-major axis of the planet's elliptical orbit"
      },
      {
        key: "eccentricity",
        label: "Eccentricity (e)",
        min: 0,
        max: 0.75,
        step: 0.01,
        unit: "",
        description: "Orbital eccentricity (0 = circle, >0 = ellipse)"
      },
      {
        key: "speed",
        label: "Orbital Speed",
        min: 0.1,
        max: 5.0,
        step: 0.1,
        unit: "x",
        description: "Simulation time warp multiplier"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-kepler-1",
        title: "Test Perihelion Velocity Boost",
        instruction: "Set eccentricity to 0.65 and observe the instantaneous velocity vector expand as the planet whips around perihelion versus aphelion.",
        targetMetric: "Eccentricity Velocity Contrast",
        targetValue: 1,
        tolerance: 0,
        currentValueKey: "eccentricity",
        rewardBadge: "Orbital Dynamicist"
      },
      {
        id: "ch-kepler-2",
        title: "Verify Harmonic Constant",
        instruction: "Change orbital scale (a) across multiple values and verify that TÂ²/aÂ³ remains constant.",
        targetMetric: "Harmonic Invariance",
        targetValue: 1,
        tolerance: 0.05,
        currentValueKey: "ratio",
        rewardBadge: "Kepler Scholar"
      }
    ],
    previewFacts: [
      "Kepler's Second Law implies that angular momentum is conserved in any central force field: the planet sweeps out equal areas in equal time intervals.",
      "Kepler's Third Law (TÂ² âˆ aÂ³) was published in Harmonices Mundi (1619) and laid the mathematical foundation for Newton's Universal Law of Gravitation."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/keplers-laws-3d.html"
  },
  {
    id: "sim-spacetime-curvature-embedding",
    title: "Spacetime Embedding Diagram & Interactive Explanations",
    tagline: "General relativity spacetime curvature well, Schwarzschild event horizon, and geodesic orbital trajectories",
    discipline: "physics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["HS-PS2-4", "HS-ESS1-1", "AP Physics C: Gravitation", "NGSS SEP-2", "NGSS SEP-5"],
    description: "An interactive 3D WebGL general relativity simulator displaying a 2D polar spatial embedding of curved 4D spacetime around a central gravitational mass. Features dynamic mass well depth adjustments, real-time geodesic particle orbits with Newtonian/relativistic gravitational acceleration, escape velocity and event horizon boundary markers, and interactive conceptual guides on singularities and geodesics.",
    learningObjectives: [
      "Visualize how mass warps surrounding spacetime geometry using a smooth polar radial embedding funnel",
      "Observe geodesic trajectories and test particle orbits governed by warped spacetime curvature rather than classical pulling forces",
      "Identify the event horizon boundary radius where escape velocity equals light speed (v_esc = c) and analyze particle trapping dynamics"
    ],
    thumbnailGradient: "from-sky-600 via-indigo-900 to-slate-950",
    badgeColor: "bg-sky-500/10 text-sky-300 border-sky-500/20",
    iconName: "Globe",
    rating: 4.98,
    reviewCount: 64,
    teacherCount: 290,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive 3D WebGL spacetime mesh with real-time radial dip and gravitational well depth controls",
      "Dynamic test particle launcher simulating stable geodesic orbits and sub-horizon capture states",
      "Visual Schwarzschild black hole sphere and luminous cyan event horizon ring (v_esc = c)",
      "Educational modal and callouts explaining spacetime grids, geodesic paths, and gravitational singularities",
      "Intuitive OrbitControls with dampening and responsive viewport resizing"
    ],
    parameterDefaults: {
      massWellDepth: 18
    },
    parameterControls: [
      {
        key: "massWellDepth",
        label: "Gravitational Mass Well (Depth)",
        min: 6,
        max: 32,
        step: 1,
        unit: "",
        description: "Depth factor of spacetime warping around the central mass"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-spacetime-1",
        title: "Trap Particles Past Horizon",
        instruction: "Increase the mass well depth to observe orbital degradation and particles crossing the cyan event horizon into the trapped red state.",
        targetMetric: "Trapped Particle State",
        targetValue: 1,
        tolerance: 0,
        currentValueKey: "trapped_state",
        rewardBadge: "Relativity Pioneer"
      },
      {
        id: "ch-spacetime-2",
        title: "Maintain Stable Outer Geodesic",
        instruction: "Launch test particles at lower mass well depths to sustain stable green geodesic orbits outside the event horizon.",
        targetMetric: "Orbital Stability",
        targetValue: 1,
        tolerance: 0,
        currentValueKey: "stable_orbit",
        rewardBadge: "Geodesic Navigator"
      }
    ],
    previewFacts: [
      "According to General Relativity, gravity is not a physical pulling force; it is the curvature of spacetime caused by mass-energy density.",
      "The event horizon marks the boundary where the spacetime fabric dips so steeply that the escape velocity exceeds the speed of light."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/spacetime-curvature-embedding.html"
  },
  {
    id: "sim-jupiter-dynamics-libration-vectors",
    title: "Jupiter Dynamics & Libration Vectors",
    tagline: "Orbital mechanics with instantaneous velocity and gravitational force vector overlays across Jupiter, Galilean moons, and Trojan swarms",
    discipline: "physics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["HS-PS2-1", "HS-PS2-4", "HS-ESS1-4", "AP Physics 1: Kinematics & Gravitation", "NGSS SEP-5"],
    description: "An advanced 3D WebGL orbital dynamics laboratory modeling vector mechanics in the Jovian planetary and Lagrangian system. Features real-time vector overlays including tangential velocity arrows (v) and centripetal gravitational force arrows (F_g) for Jupiter, its 4 Galilean moons (Io, Europa, Ganymede, Callisto), and sample asteroids in the L4 Greek and L5 Trojan camps undergoing libration.",
    learningObjectives: [
      "Analyze the relationship between tangential orbital velocity vectors (v) and centripetal gravitational force vectors (Fg) in circular and perturbed orbital motion",
      "Observe Kepler's Third Law and speed differentials across Jupiter's Galilean moons (Io, Europa, Ganymede, Callisto)",
      "Examine how Coriolis and gravitational force balances drive libration oscillations in L4 and L5 Lagrangian asteroid clusters"
    ],
    thumbnailGradient: "from-cyan-500 via-sky-600 to-slate-950",
    badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    iconName: "Compass",
    rating: 4.99,
    reviewCount: 76,
    teacherCount: 310,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Dynamic 3D WebGL orbital simulation with 12,000-star field and interactive OrbitControls",
      "Toggleable real-time vector overlays: Green velocity vectors (v) and Red gravitational force vectors (Fg)",
      "Galilean moon dynamics with Keplerian velocity gradients and directional centripetal arrows",
      "Lagrangian L4 (Greek) and L5 (Trojan) asteroid swarms featuring per-body libration oscillations and vector tracking",
      "High-contrast HUD labels, expanded astronomical text sprites, and collapsible educational controls panel"
    ],
    parameterDefaults: {
      moonVectors: 1,
      jupiterVectors: 1,
      trojanVectors: 1
    },
    parameterControls: [
      {
        key: "moonVectors",
        label: "Galilean Moon Vectors",
        min: 0,
        max: 1,
        step: 1,
        unit: "",
        description: "Toggle velocity and force arrows on Galilean moons"
      },
      {
        key: "jupiterVectors",
        label: "Jupiter Orbital Vectors",
        min: 0,
        max: 1,
        step: 1,
        unit: "",
        description: "Toggle velocity and force arrows on Jupiter"
      },
      {
        key: "trojanVectors",
        label: "Trojan Swarm Vectors",
        min: 0,
        max: 1,
        step: 1,
        unit: "",
        description: "Toggle velocity and force arrows on sample Trojan asteroids"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-jup-vec-1",
        title: "Observe Vector Orthogonality",
        instruction: "Examine the angle between Jupiter's velocity vector (green) and gravitational force vector (red) to confirm circular orbit perpendicularity (90Â°).",
        targetMetric: "Orthogonality Angle",
        targetValue: 90,
        tolerance: 2,
        currentValueKey: "angle",
        rewardBadge: "Kinematics Master"
      },
      {
        id: "ch-jup-vec-2",
        title: "Compare Moon Velocities",
        instruction: "Inspect the velocity arrows of Io versus Callisto to verify Keplerian speed decay with increasing orbital distance.",
        targetMetric: "Velocity Differential",
        targetValue: 1,
        tolerance: 0,
        currentValueKey: "keplerian_ratio",
        rewardBadge: "Keplerian Orbitalist"
      }
    ],
    previewFacts: [
      "In circular orbits, the net gravitational force vector points directly toward the central body and is always perpendicular to the instantaneous velocity vector.",
      "Trojan asteroids undergo libration along kidney-shaped orbits around the L4 and L5 equilibrium points with period cycles lasting over a century."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/jupiter-dynamics-libration-vectors.html"
  },
  {
    id: "sim-chemistry-workbench",
    title: "Comprehensive Chemistry Workbench",
    tagline: "Orbital configurations (spdf & Bohr), variable valency compound builder with feasibility rules, polyatomic ions, and reaction balancer",
    discipline: "chemistry",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["HS-PS1-1", "HS-PS1-2", "HS-PS1-7", "NGSS SEP-2", "NGSS SEP-5"],
    description: "A comprehensive chemistry laboratory and interactive workbench covering element exploration (atomic numbers, K/L/M/N shells, spdf subshell configurations, live animated 3D-styled Bohr orbital canvas), compound synthesizer with valency criss-cross calculations and real-world chemical feasibility analysis, polyatomic ions database, valency vs. oxidation state comparison tool, and interactive chemical equation balancer with live atom tallies.",
    learningObjectives: [
      "Examine atomic structures, subshell electron configurations (spdf), valence electrons, and orbital shell dynamics for elements Z=1 to 82",
      "Apply the criss-cross method to synthesize ionic and covalent compounds while evaluating real-world chemical stability and feasibility",
      "Distinguish structural valency (combining capacity) from formal oxidation states across varied molecular species",
      "Balance complex chemical equations and verify the Law of Conservation of Mass through real-time atom tallies"
    ],
    thumbnailGradient: "from-blue-600 via-teal-600 to-indigo-900",
    badgeColor: "bg-teal-500/10 text-teal-300 border-teal-500/20",
    iconName: "Atom",
    rating: 4.99,
    reviewCount: 92,
    teacherCount: 380,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Element Explorer with periodic data, spdf subshell electron configurations, and animated Bohr orbit canvas",
      "Compound Builder featuring criss-cross ratio simplifier and thermodynamic real-world feasibility checker",
      "Polyatomic Ions Reference with structural descriptions, formal charges, and bonding mechanisms",
      "Valency vs. Oxidation State interactive comparative module with detailed contextual explanations",
      "Chemical Equation Balancer with multi-species coefficient steppers and real-time atom count validation"
    ],
    parameterDefaults: {
      activeTab: "explorer"
    },
    parameterControls: [
      {
        key: "activeTab",
        label: "Workbench Module",
        min: 0,
        max: 4,
        step: 1,
        unit: "",
        description: "Active laboratory workbench module"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-chem-balance-1",
        title: "Balance Iron Oxidation",
        instruction: "Use the equation balancer to find integer coefficients that balance the synthesis of Iron (III) oxide: Fe + O2 -> Fe2O3.",
        targetMetric: "Conservation State",
        targetValue: 1,
        tolerance: 0,
        currentValueKey: "balanced",
        rewardBadge: "Stoichiometry Specialist"
      },
      {
        id: "ch-chem-synth-2",
        title: "Synthesize Stable Hydroxide Salt",
        instruction: "Use the Compound Builder to synthesize a stable real-world metal hydroxide compound with verified feasibility.",
        targetMetric: "Feasibility",
        targetValue: 1,
        tolerance: 0,
        currentValueKey: "feasible",
        rewardBadge: "Synthesis Chemist"
      }
    ],
    previewFacts: [
      "Valency represents an atom's combining capacity (number of bonds formed), whereas oxidation state is the hypothetical formal charge if all bonds were purely ionic.",
      "The criss-cross method simplifies chemical formula subscripts by finding the greatest common divisor between cation and anion valencies."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/comprehensive-chemistry-workbench.html"
  },
  {
    id: "sim-jupiter-trojan-asteroids",
    title: "Jupiter & Trojan Asteroids Dynamics",
    tagline: "Explore the L4 Greek and L5 Trojan Lagrange equilibrium swarms, Jupiter's orbital dynamics, and Galilean moons in interactive 3D WebGL",
    discipline: "physics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM"],
    standards: ["MS-ESS1-2", "HS-ESS1-4", "HS-PS2-4", "NGSS SEP-2"],
    description: "An interactive 3D WebGL orbital dynamics laboratory modeling the Sun-Jupiter-Lagrange system. Features realistic pitted asteroid swarms trapped in the L4 (Greek Camp, 60Â° leading) and L5 (Trojan Camp, 60Â° trailing) stable gravitational Lagrange pockets undergoing libration, alongside Jupiter's 4 Galilean natural satellites (Io, Europa, Ganymede, Callisto) orbiting with physically proportional speeds and distances.",
    learningObjectives: [
      "Understand the gravitational and centrifugal force balance at the L4 and L5 triangular Lagrange equilibrium points in a restricted three-body celestial system",
      "Observe asteroid swarm libration oscillations around stable equilibrium orbits",
      "Examine Jupiter's orbital mechanics and the orbital velocities of the 4 Galilean moons (Io, Europa, Ganymede, and Callisto)"
    ],
    thumbnailGradient: "from-amber-600 via-sky-600 to-indigo-950",
    badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    iconName: "Globe",
    rating: 4.97,
    reviewCount: 68,
    teacherCount: 295,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive 3D WebGL celestial canvas with orbit controls and realistic starfield",
      "Dynamic L4 Greek and L5 Trojan asteroid swarms with per-asteroid libration and procedural rock deformation",
      "Jupiter planetary globe with Galilean moons (Io, Europa, Ganymede, Callisto) orbiting along its equatorial plane",
      "Lagrange equilibrium point spatial markers, orbital path lines, and dynamic text billboard sprites",
      "Interactive information drawer with astronomical details, celestial body guides, and visual color legend"
    ],
    parameterDefaults: {
      orbitSpeed: 1,
      librationAmplitude: 1,
      numAsteroids: 170
    },
    parameterControls: [
      {
        key: "orbitSpeed",
        label: "Orbital Time Rate",
        min: 0.2,
        max: 3.0,
        step: 0.1,
        unit: "x",
        description: "Simulation orbital progression speed multiplier"
      },
      {
        key: "librationAmplitude",
        label: "Libration Amplitude",
        min: 0.2,
        max: 2.0,
        step: 0.1,
        unit: "x",
        description: "Asteroid oscillation excursion around L4/L5 centers"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-trojan-1",
        title: "Identify the L4 Greek Camp",
        instruction: "Rotate the 3D orbital view to identify the asteroid swarm leading Jupiter by 60Â° in its orbital direction.",
        targetMetric: "Lead Angle",
        targetValue: 60,
        tolerance: 5,
        currentValueKey: "angle",
        rewardBadge: "Lagrangian Navigator"
      }
    ],
    previewFacts: [
      "The L4 and L5 Lagrange points are stable equilibrium locations formed by the balance of the Sun's gravity, Jupiter's gravity, and orbital centrifugal force.",
      "Jupiter has more than 10,000 cataloged Trojan asteroids named after mythological figures from the Trojan War."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/jupiter-trojan-asteroids.html"
  },
  {
    id: "sim-ac-circuit-analyzer",
    title: "AC Circuit Interactive Simulation & Waveform Analyzer",
    tagline: "Dynamic RLC reactance calculations, static vector phasor diagrams, live electron drift loops, and dual sinusoidal waveforms",
    discipline: "physics",
    gradeLevel: ["High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["HS-PS2-5", "HS-PS3-5", "AP Physics C: E&M", "NGSS SEP-5"],
    description: "A comprehensive AC circuit interactive simulation and laboratory for analyzing pure R, L, C, and compound RL, RC, and RLC networks. Features real-time electron drift circuit animation, static vector phasor diagram with phase angle arcs, dual sinusoidal voltage and current waveform oscilloscope with RMS dashed overlays, comprehensive live readouts (v(t), i(t), p(t), Vrms, Irms, XL, XC, Z, Ï•), and dynamic step-by-step mathematical substitution panels.",
    learningObjectives: [
      "Analyze how resistance (R), inductive reactance (XL = 2Ï€fL), and capacitive reactance (XC = 1/(2Ï€fC)) govern total circuit impedance (Z = âˆš(RÂ² + (XL-XC)Â²))",
      "Observe phase angle shifts (Ï• = atan((XL-XC)/R)) between sinusoidal voltage and current waveforms across Pure R, Pure L, Pure C, RL, RC, and RLC modes",
      "Correlate vector phasor representations with instantaneous sinusoidal waveforms, peak values, and RMS effective values"
    ],
    thumbnailGradient: "from-sky-500 via-indigo-600 to-rose-600",
    badgeColor: "bg-sky-500/10 text-sky-300 border-sky-500/20",
    iconName: "Activity",
    rating: 4.98,
    reviewCount: 84,
    teacherCount: 340,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "7 interactive circuit topologies: Pure R, Pure L, Pure C, Pure LC, RL, RC, and series RLC",
      "Dynamic schematic with live voltmeter probes and real-time electron drift particle visualization",
      "Interactive vector phasor diagram illustrating voltage components (VR, VL, VC, Vtotal) and phase angle Ï•",
      "Dual-channel waveform oscilloscope with moving signal particles, leading endpoints, and RMS overlay guides",
      "Dynamic step-by-step formula substitutions and comprehensive live electrodynamics calculation readouts"
    ],
    parameterDefaults: {
      resistance: 50,
      inductance: 100,
      capacitance: 10,
      frequency: 50,
      vrms: 100
    },
    parameterControls: [
      {
        key: "resistance",
        label: "Resistance (R)",
        min: 0,
        max: 100,
        step: 1,
        unit: "Î©",
        description: "Circuit series resistance"
      },
      {
        key: "inductance",
        label: "Inductance (L)",
        min: 10,
        max: 200,
        step: 5,
        unit: "mH",
        description: "Inductor coil inductance"
      },
      {
        key: "capacitance",
        label: "Capacitance (C)",
        min: 1,
        max: 50,
        step: 1,
        unit: "ÂµF",
        description: "Capacitor plate capacitance"
      },
      {
        key: "frequency",
        label: "Frequency (f)",
        min: 10,
        max: 200,
        step: 1,
        unit: "Hz",
        description: "AC source frequency"
      },
      {
        key: "vrms",
        label: "RMS Voltage (Vrms)",
        min: 10,
        max: 240,
        step: 5,
        unit: "V",
        description: "AC source root-mean-square voltage"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-ac-res-1",
        title: "Achieve Resonant State (XL = XC)",
        instruction: "Adjust frequency (f), inductance (L), and capacitance (C) until inductive reactance XL equals capacitive reactance XC, minimizing net impedance Z.",
        targetMetric: "Phase Angle (Ï•)",
        targetValue: 0,
        tolerance: 1,
        currentValueKey: "phi",
        rewardBadge: "Resonance Master"
      },
      {
        id: "ch-ac-lead-2",
        title: "Create Inductive Leading Phase (+45Â°)",
        instruction: "Configure an RL or RLC circuit where inductive reactance exceeds resistance such that the phase angle Ï• reaches +45Â°.",
        targetMetric: "Phase Angle (Ï•)",
        targetValue: 45,
        tolerance: 2,
        currentValueKey: "phi",
        rewardBadge: "Inductive Specialist"
      }
    ],
    previewFacts: [
      "In pure inductive circuits, voltage leads current by 90Â° (+Ï€/2 rad); in pure capacitive circuits, voltage lags current by 90Â° (-Ï€/2 rad).",
      "At resonance (XL = XC), total impedance equals pure resistance (Z = R), maximizing current flow and bringing voltage and current perfectly in phase."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/ac-circuit-lab.html"
  },
  {
    id: "sim-ac-generator-induction",
    title: "A.C. Generator & Electromagnetic Induction Simulator",
    tagline: "Explore Faraday's law, rotating surface-wound armature cores, slip ring commutators, and real-time AC voltage waveforms",
    discipline: "physics",
    gradeLevel: ["High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["HS-PS2-5", "HS-PS3-5", "AP Physics 2 (Unit 14)", "NGSS SEP-2"],
    description: "An interactive electromagnetic induction simulator illustrating the working mechanics of an alternating current (A.C.) generator. Features rotating soft-iron armature cores with progressive copper winding loops, permanent magnetic poles (N/S), magnetic flux density controls (B), coil turn variations (N), slip ring and carbon brush commutators with flowing electron particles, dynamic load bulb glow, and a real-time oscilloscope AC voltage waveform monitor.",
    learningObjectives: [
      "Analyze how changing magnetic flux through a rotating coil induces an alternating electromotive force (EMF = NBAÏ‰ sin(Ï‰t))",
      "Investigate the relationship between magnetic field strength (B), number of turns (N), rotation frequency, and peak output voltage",
      "Trace the function of slip rings and carbon brushes in extracting alternating current without tangling lead wires"
    ],
    thumbnailGradient: "from-cyan-600 via-blue-700 to-slate-950",
    badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    iconName: "Zap",
    rating: 4.9,
    reviewCount: 52,
    teacherCount: 210,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Isometric 2.5D projection of rotating armature core with magnetic field lines and vector callouts",
      "Dynamic electron drift particle visualization flowing through closed slip-ring external circuit",
      "Interactive Physics Explanation Modal covering Faraday's Law, Lenz's Law, induced EMF equations, and surface winding",
      "Synchronized real-time oscilloscope measuring instantaneous AC voltage (V) and magnetic flux (mWb)",
      "Interactive sliders for magnetic field strength (0.2 - 2.0 T) and armature coil turns (10 - 300 turns)"
    ],
    parameterDefaults: {
      bField: 1.0,
      coilTurns: 100
    },
    parameterControls: [
      {
        key: "bField",
        label: "Magnetic Field (B)",
        min: 0.2,
        max: 2.0,
        step: 0.1,
        unit: "T",
        description: "Permanent magnet flux density"
      },
      {
        key: "coilTurns",
        label: "Coil Turns (N)",
        min: 10,
        max: 300,
        step: 10,
        unit: "turns",
        description: "Number of armature surface wire windings"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-ac-gen-1",
        title: "Maximize Peak Induced EMF",
        instruction: "Adjust magnetic flux density and coil winding density to produce an induced EMF greater than 20V.",
        targetMetric: "Peak EMF",
        targetValue: 20,
        tolerance: 2,
        currentValueKey: "peakEmf",
        rewardBadge: "Induction Pro"
      }
    ],
    previewFacts: [
      "Faraday's Law of Induction states that the magnitude of induced EMF is directly proportional to the rate of change of magnetic flux.",
      "In an AC generator, slip rings maintain continuous electrical contact with stationary brushes, producing sinusoidal alternating output."
    ],
    isHtmlApp: true,
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AC Generator Interactive Simulation</title>
  <style>
    :root {
      --bg-color: #0f172a;
      --card-bg: #1e293b;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --accent-blue: #38bdf8;
      --accent-red: #ef4444;
      --accent-green: #22c55e;
      --accent-yellow: #eab308;
      --border-color: #334155;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    }

    body {
      background-color: var(--bg-color);
      color: var(--text-main);
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
      padding: 20px;
    }

    header {
      text-align: center;
      margin-bottom: 20px;
    }

    header h1 {
      font-size: 1.8rem;
      color: var(--accent-blue);
      margin-bottom: 6px;
    }

    header p {
      color: var(--text-muted);
      font-size: 0.95rem;
    }

    .container {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;
      max-width: 1000px;
    }

    .canvas-card {
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
    }

    canvas {
      background-color: #0b0f19;
      border-radius: 8px;
      width: 100%;
      height: auto;
      max-width: 960px;
    }

    .controls-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      width: 100%;
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 20px;
    }

    .control-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .control-group label {
      font-size: 0.9rem;
      color: var(--text-muted);
      display: flex;
      justify-content: space-between;
    }

    .control-group label span.val {
      color: var(--accent-blue);
      font-weight: 600;
    }

    input[type="range"] {
      width: 100%;
      accent-color: var(--accent-blue);
      cursor: pointer;
    }

    .btn-group {
      display: flex;
      gap: 10px;
      align-items: flex-end;
      grid-column: span 2;
    }

    @media (max-width: 640px) {
      .btn-group {
        grid-column: span 1;
        flex-direction: column;
      }
    }

    button {
      flex: 1;
      padding: 10px 14px;
      border: none;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      font-size: 0.88rem;
    }

    .btn-primary {
      background-color: var(--accent-blue);
      color: #0f172a;
    }

    .btn-primary:hover {
      background-color: #7dd3fc;
    }

    .btn-secondary {
      background-color: #475569;
      color: #fff;
    }

    .btn-secondary:hover {
      background-color: #64748b;
    }

    .btn-info {
      background-color: var(--accent-yellow);
      color: #0f172a;
    }

    .btn-info:hover {
      background-color: #fde047;
    }

    .status-panel {
      display: flex;
      justify-content: space-around;
      width: 100%;
      background: #111827;
      padding: 12px;
      border-radius: 8px;
      margin-top: 12px;
      font-size: 0.9rem;
      flex-wrap: wrap;
      gap: 10px;
    }

    .status-item span {
      font-weight: bold;
      color: var(--accent-blue);
    }

    /* Modal Styles */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(15, 23, 42, 0.85);
      backdrop-filter: blur(4px);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
      padding: 20px;
    }

    .modal-overlay.active {
      opacity: 1;
      pointer-events: auto;
    }

    .modal-content {
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      max-width: 700px;
      width: 100%;
      max-height: 85vh;
      overflow-y: auto;
      padding: 24px;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
      position: relative;
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 12px;
      margin-bottom: 16px;
    }

    .modal-header h2 {
      color: var(--accent-blue);
      font-size: 1.4rem;
    }

    .close-btn {
      background: transparent;
      border: none;
      color: var(--text-muted);
      font-size: 1.5rem;
      cursor: pointer;
      line-height: 1;
      padding: 0 4px;
    }

    .close-btn:hover {
      color: var(--text-main);
    }

    .physics-body {
      font-size: 0.95rem;
      line-height: 1.6;
      color: var(--text-main);
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .physics-body p {
      color: #cbd5e1;
    }

    .physics-section-title {
      font-weight: bold;
      color: var(--accent-blue);
      margin-top: 8px;
    }

    .physics-body ul {
      list-style-type: disc;
      padding-left: 20px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .equation-box {
      background: #0b0f19;
      border-left: 4px solid var(--accent-blue);
      padding: 12px 16px;
      border-radius: 0 6px 6px 0;
      font-family: 'Courier New', Courier, monospace;
      color: #7dd3fc;
    }
  </style>
</head>
<body>

  <header>
    <h1>A.C. Generator Interactive Simulator</h1>
    <p>Electromagnetic Induction in a Surface-Wound Armature Core</p>
  </header>

  <div class="container">
    <div class="canvas-card">
      <canvas id="simCanvas" width="960" height="540"></canvas>
      <div class="status-panel">
        <div class="status-item">Computed Speed (&omega;): <span id="statSpeed">0.0 Hz</span></div>
        <div class="status-item">Armature Angle (&theta;): <span id="statAngle">0Â°</span></div>
        <div class="status-item">Instantaneous Flux (&Phi;): <span id="statFlux">0.00 mWb</span></div>
        <div class="status-item">Induced EMF (E): <span id="statEMF">0.00 V</span></div>
      </div>
    </div>

    <div class="controls-grid">
      <div class="control-group">
        <label>Magnetic Field (B): <span class="val" id="bVal">1.0 T</span></label>
        <input type="range" id="bSlider" min="0.2" max="2.0" step="0.1" value="1.0">
      </div>

      <div class="control-group">
        <label>Coil Turns (N): <span class="val" id="nVal">100</span></label>
        <input type="range" id="nSlider" min="10" max="300" step="10" value="100">
      </div>

      <div class="btn-group">
        <button id="playBtn" class="btn-primary">Pause</button>
        <button id="resetBtn" class="btn-secondary">Reset</button>
        <button id="physicsBtn" class="btn-info">Physics Explanation</button>
      </div>
    </div>
  </div>

  <!-- Physics Explanation Modal -->
  <div class="modal-overlay" id="physicsModal">
    <div class="modal-content">
      <div class="modal-header">
        <h2>Physics of the AC Generator</h2>
        <button class="close-btn" id="closeModal">&times;</button>
      </div>
      <div class="physics-body">
        <p>An AC generator converts mechanical energy into electrical energy using the principles of electromagnetic induction.</p>

        <div class="physics-section-title">Faraday's Law of Induction</div>
        <p>When the armature rotates within a uniform magnetic field (B), the magnetic flux (&Phi;) passing through the armature coil changes continuously with time:</p>
        <div class="equation-box">
          &Phi;(t) = B &times; A &times; cos(&theta;)
        </div>
        <p>Where <b>B</b> is the magnetic field strength, <b>A</b> is the coil area, and <b>&theta; = &omega;t</b> is the angle between the normal to the coil and the magnetic field lines.</p>

        <div class="physics-section-title">Induced Electromotive Force (EMF)</div>
        <p>According to Faraday's Law, the induced EMF (E) is directly proportional to the rate of change of magnetic flux:</p>
        <div class="equation-box">
          E(t) = -N &times; (d&Phi; / dt) = N &times; B &times; A &times; &omega; &times; sin(&omega;t)
        </div>
        <ul>
          <li><b>N (Number of Turns):</b> Increasing the turns increases the total surface Conductor area cut by magnetic flux, scaling the output voltage proportionally.</li>
          <li><b>B (Magnetic Field Strength):</b> Stronger magnet poles increase the flux density cut per rotation.</li>
          <li><b>&omega; (Angular Velocity):</b> Faster rotation increases the frequency and maximum amplitude (E_max = N B A &omega;) of the generated alternating current.</li>
        </ul>

        <div class="physics-section-title">Lenz's Law & Direction of Current</div>
        <p>The direction of induced current opposes the motion creating it. Fleming's Right-Hand Rule determines the direction of current along sides AB and CD as the coil rotates through horizontal and vertical positions.</p>

        <div class="physics-section-title">Surface-Wound Armature Alignment</div>
        <p>In this model, copper conductors are wound continuously parallel to edge AB over the cylindrical armature drum, emerging from side AD and wrapping around to side BC. This layout maximizes flux linkage along the effective cutting edges during rotation.</p>

        <div class="physics-section-title">Slip Rings & Alternating Current (AC)</div>
        <p>Unlike a DC generator which uses a split-ring commutator, an AC generator uses continuous <b>Slip Rings (R1, R2)</b> and carbon brushes. As the coil rotates past 180Â°, the direction of current relative to the external circuit reverses, producing a sinusoidal AC waveform.</p>
      </div>
    </div>
  </div>

  <script>
    const canvas = document.getElementById('simCanvas');
    const ctx = canvas.getContext('2d');

    // Controls & Indicators
    const bSlider = document.getElementById('bSlider');
    const nSlider = document.getElementById('nSlider');
    const bVal = document.getElementById('bVal');
    const nVal = document.getElementById('nVal');
    const playBtn = document.getElementById('playBtn');
    const resetBtn = document.getElementById('resetBtn');
    const physicsBtn = document.getElementById('physicsBtn');
    const physicsModal = document.getElementById('physicsModal');
    const closeModal = document.getElementById('closeModal');

    const statSpeed = document.getElementById('statSpeed');
    const statAngle = document.getElementById('statAngle');
    const statFlux = document.getElementById('statFlux');
    const statEMF = document.getElementById('statEMF');

    // Modal Control
    physicsBtn.addEventListener('click', () => {
      physicsModal.classList.add('active');
    });

    closeModal.addEventListener('click', () => {
      physicsModal.classList.remove('active');
    });

    physicsModal.addEventListener('click', (e) => {
      if (e.target === physicsModal) {
        physicsModal.classList.remove('active');
      }
    });

    // Simulation Parameters
    let isRunning = true;
    let theta = 0; // Rotation angle in radians
    let externalCircuitPhase = 0; // Dynamic current flow phase
    let lastTime = performance.now();

    const coilWidth = 140;
    const coilHeight = 180;
    const coilArea = 0.02; // Square meters
    
    // Waveform history buffer
    const waveHistory = [];
    const maxWavePoints = 140;

    // Projection constants
    const centerX = 340;
    const centerY = 240;

    function getParams() {
      const B = parseFloat(bSlider.value);
      const N = parseInt(nSlider.value);
      const freq = B * (N / 100) * 1.5; 
      return { freq, B, N };
    }

    function updateLabels() {
      const p = getParams();
      bVal.textContent = p.B.toFixed(1) + ' T';
      nVal.textContent = p.N;
      statSpeed.textContent = p.freq.toFixed(2) + ' Hz';
    }

    bSlider.addEventListener('input', updateLabels);
    nSlider.addEventListener('input', updateLabels);

    playBtn.addEventListener('click', () => {
      isRunning = !isRunning;
      playBtn.textContent = isRunning ? 'Pause' : 'Play';
      if (isRunning) {
        lastTime = performance.now();
        requestAnimationFrame(animate);
      }
    });

    resetBtn.addEventListener('click', () => {
      theta = 0;
      externalCircuitPhase = 0;
      waveHistory.length = 0;
      if (!isRunning) {
        draw();
      }
    });

    function drawCallout(startX, startY, endX, endY, text, align = 'left') {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.lineWidth = 1.5;
      
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();

      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(startX, startY, 3, 0, Math.PI * 2);
      ctx.fill();

      ctx.font = 'bold 12px sans-serif';
      const textWidth = ctx.measureText(text).width;
      const padding = 4;
      const boxWidth = textWidth + padding * 2;
      const boxHeight = 18;

      let boxX = endX;
      if (align === 'right') boxX = endX - boxWidth;
      else if (align === 'center') boxX = endX - boxWidth / 2;

      const boxY = endY - boxHeight / 2;

      ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.5)';
      ctx.lineWidth = 1;
      ctx.fillRect(boxX, boxY, boxWidth, boxHeight);
      ctx.strokeRect(boxX, boxY, boxWidth, boxHeight);

      ctx.fillStyle = '#f8fafc';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, boxX + padding, endY);
    }

    function project(x, y, z) {
      const angle = 0.4;
      const px = x + z * Math.cos(angle) * 0.5;
      const py = y - z * Math.sin(angle) * 0.5;
      return { x: centerX + px, y: centerY + py };
    }

    function drawMagnetPoles() {
      // North Pole (Left - Red)
      ctx.fillStyle = '#dc2626';
      ctx.beginPath();
      let p1 = project(-240, -110, -80);
      let p2 = project(-110, -110, -80);
      let p3 = project(-110, 110, -80);
      let p4 = project(-240, 110, -80);
      ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.lineTo(p3.x, p3.y); ctx.lineTo(p4.x, p4.y);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#ef4444';
      ctx.fillRect(centerX - 220, centerY - 100, 100, 200);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 28px sans-serif';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'alphabetic';
      ctx.fillText('N', centerX - 180, centerY + 10);

      // South Pole (Right - Blue)
      ctx.fillStyle = '#2563eb';
      ctx.beginPath();
      p1 = project(110, -110, -80);
      p2 = project(240, -110, -80);
      p3 = project(240, 110, -80);
      p4 = project(110, 110, -80);
      ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.lineTo(p3.x, p3.y); ctx.lineTo(p4.x, p4.y);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#3b82f6';
      ctx.fillRect(centerX + 120, centerY - 100, 100, 200);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 28px sans-serif';
      ctx.fillText('S', centerX + 160, centerY + 10);

      drawCallout(centerX - 170, centerY - 100, centerX - 210, centerY - 130, 'North Magnet Pole', 'right');
      drawCallout(centerX + 170, centerY - 100, centerX + 210, centerY - 130, 'South Magnet Pole', 'left');
    }

    function drawFieldLines(B) {
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.3)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([6, 6]);

      // Grid line density increases with B
      const yStep = Math.max(15, Math.floor(45 / B));
      const zStep = Math.max(20, Math.floor(50 / B));

      for (let y = -75; y <= 75; y += yStep) {
        for (let z = -45; z <= 45; z += zStep) {
          const start = project(-120, y, z);
          const end = project(120, y, z);
          ctx.beginPath();
          ctx.moveTo(start.x, start.y);
          ctx.lineTo(end.x, end.y);
          ctx.stroke();
        }
      }
      ctx.setLineDash([]);

      const midFieldLine = project(0, -75, 0);
      drawCallout(midFieldLine.x, midFieldLine.y, midFieldLine.x, midFieldLine.y - 45, 'Magnetic Field / Flux Line (B)', 'center');
    }

    function drawArmature(currentEMF, N) {
      const halfW = coilWidth / 2;
      const halfH = coilHeight / 2;

      const cosT = Math.cos(theta);
      const sinT = Math.sin(theta);

      // Base armature corners
      const rawA = { x: -halfW * cosT, y: -halfH, z: halfW * sinT };
      const rawB = { x: halfW * cosT, y: -halfH, z: -halfW * sinT };
      const rawC = { x: halfW * cosT, y: halfH, z: -halfW * sinT };
      const rawD = { x: -halfW * cosT, y: halfH, z: halfW * sinT };

      const A = project(rawA.x, rawA.y, rawA.z);
      const B = project(rawB.x, rawB.y, rawB.z);
      const C = project(rawC.x, rawC.y, rawC.z);
      const D = project(rawD.x, rawD.y, rawD.z);

      // Soft Iron Core Body
      ctx.fillStyle = 'rgba(100, 116, 139, 0.4)';
      ctx.beginPath();
      ctx.moveTo(A.x, A.y); ctx.lineTo(B.x, B.y); ctx.lineTo(C.x, C.y); ctx.lineTo(D.x, D.y);
      ctx.closePath();
      ctx.fill();

      // Continuous surface winding loop parallel to AB (emerging from edge AD, wrapping over to BC)
      const numTurns = Math.min(Math.max(Math.floor((N / 300) * 36), 6), 36);
      const wireWidth = Math.max(1.5, 30 / numTurns);
      
      ctx.lineWidth = wireWidth;

      for (let i = 0; i < numTurns; i++) {
        // Distribute turns progressively to cover the whole armature surface as N increases
        const frac1 = i / numTurns;
        const frac2 = (i + 0.85) / numTurns;

        // Points on edge AD (left side)
        const startX_AD = rawA.x + frac1 * (rawD.x - rawA.x);
        const startY_AD = rawA.y + frac1 * (rawD.y - rawA.y);
        const startZ_AD = rawA.z + frac1 * (rawD.z - rawA.z);

        // Points on edge BC (right side)
        const endX_BC = rawB.x + frac1 * (rawC.x - rawB.x);
        const endY_BC = rawB.y + frac1 * (rawC.y - rawB.y);
        const endZ_BC = rawB.z + frac1 * (rawC.z - rawB.z);

        // Next re-entry point on edge AD for continuous winding appearance
        const nextX_AD = rawA.x + frac2 * (rawD.x - rawA.x);
        const nextY_AD = rawA.y + frac2 * (rawD.y - rawA.y);
        const nextZ_AD = rawA.z + frac2 * (rawD.z - rawA.z);

        const pStartAD = project(startX_AD, startY_AD, startZ_AD);
        const pEndBC = project(endX_BC, endY_BC, endZ_BC);
        const pNextAD = project(nextX_AD, nextY_AD, nextZ_AD);

        // Curvature outwards at the edges to show winding loop wrapping behind/around
        const ctrlX_BC = pEndBC.x + 10 * cosT;
        const ctrlY_BC = pEndBC.y + 6;
        const ctrlX_AD = pNextAD.x - 10 * cosT;
        const ctrlY_AD = pNextAD.y - 6;

        ctx.strokeStyle = i % 2 === 0 ? '#f59e0b' : '#d97706';
        ctx.beginPath();
        // Conductor running parallel to AB across the core surface
        ctx.moveTo(pStartAD.x, pStartAD.y);
        ctx.lineTo(pEndBC.x, pEndBC.y);

        // Wound curve going into edge BC
        ctx.quadraticCurveTo(ctrlX_BC, ctrlY_BC, (pEndBC.x + ctrlX_BC) / 2, (pEndBC.y + ctrlY_BC) / 2);

        // Loop wrapping back and emerging up out of edge AD
        ctx.quadraticCurveTo(ctrlX_AD, ctrlY_AD, pNextAD.x, pNextAD.y);
        ctx.stroke();
      }

      // Outer Frame Highlight Line
      ctx.strokeStyle = '#b45309';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(A.x, A.y); ctx.lineTo(B.x, B.y); ctx.lineTo(C.x, C.y); ctx.lineTo(D.x, D.y);
      ctx.closePath();
      ctx.stroke();

      // Armature Corner Labels A, B, C, D
      ctx.fillStyle = '#f8fafc';
      ctx.font = 'bold 14px sans-serif';
      ctx.fillText('A', A.x - 12, A.y - 8);
      ctx.fillText('B', B.x + 8, B.y - 8);
      ctx.fillText('C', C.x + 8, C.y + 16);
      ctx.fillText('D', D.x - 12, D.y + 16);

      // Current Direction Arrows along Main Sides
      if (Math.abs(currentEMF) > 0.05) {
        const dir = currentEMF > 0 ? 1 : -1;
        drawArrowOnLine(A, B, dir);
        drawArrowOnLine(B, C, dir);
        drawArrowOnLine(C, D, dir);
        drawArrowOnLine(D, A, dir);
      }

      drawCommutatorSystem(C, D, currentEMF);
    }

    function drawArrowOnLine(p1, p2, dir) {
      const midX = (p1.x + p2.x) / 2;
      const midY = (p1.y + p2.y) / 2;
      const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x) + (dir < 0 ? Math.PI : 0);

      ctx.fillStyle = '#22c55e';
      ctx.save();
      ctx.translate(midX, midY);
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.moveTo(0, -5);
      ctx.lineTo(10, 0);
      ctx.lineTo(0, 5);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    function drawCommutatorSystem(C, D, currentEMF) {
      const shaftY1 = centerY + 90;
      const shaftY2 = centerY + 180;

      // Central Shaft
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY - 130);
      ctx.lineTo(centerX, shaftY2 + 20);
      ctx.stroke();

      const r1Y = shaftY1 + 20;
      const r2Y = shaftY1 + 50;

      // Wire Leads to Slip Rings
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(D.x, D.y);
      ctx.lineTo(centerX - 10, r1Y);
      ctx.moveTo(C.x, C.y);
      ctx.lineTo(centerX + 10, r2Y);
      ctx.stroke();

      // Slip Ring R1
      ctx.fillStyle = '#d97706';
      ctx.beginPath();
      ctx.ellipse(centerX, r1Y, 18, 8, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Slip Ring R2
      ctx.beginPath();
      ctx.ellipse(centerX, r2Y, 18, 8, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Carbon Brushes B1 & B2
      ctx.fillStyle = '#334155';
      ctx.fillRect(centerX - 32, r1Y - 4, 14, 8); // B1
      ctx.fillRect(centerX + 18, r2Y - 4, 14, 8); // B2

      ctx.fillStyle = '#94a3b8';
      ctx.font = '12px sans-serif';
      ctx.fillText('B1', centerX - 48, r1Y + 3);
      ctx.fillText('R1', centerX - 12, r1Y - 10);
      ctx.fillText('B2', centerX + 36, r2Y + 3);
      ctx.fillText('R2', centerX - 12, r2Y + 20);

      drawCallout(centerX - 25, r1Y, centerX - 110, r1Y + 20, 'Carbon Brush B1', 'right');
      drawCallout(centerX + 25, r2Y, centerX + 110, r2Y - 20, 'Carbon Brush B2', 'left');

      // Fully Closed External Circuit Track Waypoints
      const circuitPath = [
        { x: centerX - 32, y: r1Y },
        { x: centerX - 80, y: r1Y },
        { x: centerX - 80, y: shaftY2 },
        { x: centerX - 16, y: shaftY2 },
        { x: centerX + 16, y: shaftY2 },
        { x: centerX + 80, y: shaftY2 },
        { x: centerX + 80, y: r2Y },
        { x: centerX + 32, y: r2Y }
      ];

      // Draw External Circuit Wires
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(circuitPath[0].x, circuitPath[0].y);
      for (let i = 1; i < circuitPath.length; i++) {
        ctx.lineTo(circuitPath[i].x, circuitPath[i].y);
      }
      ctx.stroke();

      // Electron Flow Particles confined strictly inside the external circuit
      if (Math.abs(currentEMF) > 0.05) {
        ctx.fillStyle = '#38bdf8';
        const particleDir = currentEMF > 0 ? 1 : -1;
        const numParticles = 10;

        const segmentLengths = [];
        let totalPathLength = 0;

        for (let i = 0; i < circuitPath.length - 1; i++) {
          const dx = circuitPath[i + 1].x - circuitPath[i].x;
          const dy = circuitPath[i + 1].y - circuitPath[i].y;
          const len = Math.hypot(dx, dy);
          segmentLengths.push(len);
          totalPathLength += len;
        }

        for (let i = 0; i < numParticles; i++) {
          const spacing = totalPathLength / numParticles;
          let distance = (externalCircuitPhase * particleDir + i * spacing) % totalPathLength;
          if (distance < 0) distance += totalPathLength;

          let ptX = circuitPath[0].x;
          let ptY = circuitPath[0].y;
          let accum = 0;

          for (let j = 0; j < segmentLengths.length; j++) {
            const segLen = segmentLengths[j];
            if (accum + segLen >= distance) {
              const segDist = distance - accum;
              const ratio = segDist / segLen;
              ptX = circuitPath[j].x + ratio * (circuitPath[j + 1].x - circuitPath[j].x);
              ptY = circuitPath[j].y + ratio * (circuitPath[j + 1].y - circuitPath[j].y);
              break;
            }
            accum += segLen;
          }

          ctx.beginPath();
          ctx.arc(ptX, ptY, 3.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Output Load Bulb
      const glow = Math.min(Math.abs(currentEMF) / 100, 1);
      ctx.fillStyle = \`rgba(250, 204, 21, \${glow})\`;
      ctx.strokeStyle = '#facc15';
      ctx.beginPath();
      ctx.arc(centerX, shaftY2, 16, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#000000';
      ctx.font = '10px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('LOAD', centerX, shaftY2);
      ctx.textAlign = 'left';
      ctx.textBaseline = 'alphabetic';
    }

    function drawOscilloscope(currentEMF) {
      const graphX = 650;
      const graphY = 40;
      const graphW = 280;
      const graphH = 460;

      ctx.save();

      // Background & border
      ctx.fillStyle = '#030712';
      ctx.fillRect(graphX, graphY, graphW, graphH);
      ctx.strokeStyle = '#1f2937';
      ctx.lineWidth = 1;
      ctx.strokeRect(graphX, graphY, graphW, graphH);

      // Grid Lines
      ctx.strokeStyle = '#111827';
      ctx.beginPath();
      for (let x = graphX; x <= graphX + graphW; x += 30) {
        ctx.moveTo(x, graphY); ctx.lineTo(x, graphY + graphH);
      }
      const midGraphY = graphY + graphH / 2;
      for (let y = graphY; y <= graphY + graphH; y += 30) {
        ctx.moveTo(graphX, y); ctx.lineTo(graphX + graphW, y);
      }
      ctx.stroke();

      // Center baseline
      ctx.strokeStyle = '#4b5563';
      ctx.beginPath();
      ctx.moveTo(graphX, midGraphY);
      ctx.lineTo(graphX + graphW, midGraphY);
      ctx.stroke();

      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 13px sans-serif';
      ctx.fillText('Output Voltage Waveform (AC)', graphX + 12, graphY + 22);

      // Canvas Clipping Region for the waveform area
      ctx.beginPath();
      ctx.rect(graphX + 2, graphY + 30, graphW - 4, graphH - 34);
      ctx.clip();

      if (waveHistory.length > 1) {
        ctx.strokeStyle = '#22c55e';
        ctx.lineWidth = 2;
        ctx.beginPath();

        const fixedScaleY = 1.2;

        for (let i = 0; i < waveHistory.length; i++) {
          const ptX = graphX + graphW - (waveHistory.length - 1 - i) * 2;
          const ptY = midGraphY - waveHistory[i] * fixedScaleY;

          if (i === 0) ctx.moveTo(ptX, ptY);
          else ctx.lineTo(ptX, ptY);
        }
        ctx.stroke();

        const lastVal = waveHistory[waveHistory.length - 1];
        const dotY = midGraphY - lastVal * fixedScaleY;
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.arc(graphX + graphW - 2, dotY, 4, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const p = getParams();
      const omega = 2 * Math.PI * p.freq;
      
      const maxEMF = p.N * p.B * coilArea * omega;
      const currentEMF = maxEMF * Math.sin(theta);
      const flux = p.B * coilArea * Math.cos(theta);

      waveHistory.push(currentEMF);
      if (waveHistory.length > maxWavePoints) {
        waveHistory.shift();
      }

      drawFieldLines(p.B);
      drawMagnetPoles();
      drawArmature(currentEMF, p.N);
      drawOscilloscope(currentEMF);

      let deg = Math.round((theta * (180 / Math.PI)) % 360);
      if (deg < 0) deg += 360;
      statAngle.textContent = deg + 'Â°';
      statFlux.textContent = (flux * 1000).toFixed(2) + ' mWb';
      statEMF.textContent = currentEMF.toFixed(2) + ' V';
    }

    function animate(currentTime) {
      if (!isRunning) return;

      const dt = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      const p = getParams();
      const omega = 2 * Math.PI * p.freq;

      theta += omega * dt;
      externalCircuitPhase += Math.abs(p.freq) * 120 * dt;

      updateLabels();
      draw();
      requestAnimationFrame(animate);
    }

    updateLabels();
    draw();
    requestAnimationFrame(animate);
  </script>
</body>
</html>`,
    authorName: "Dr. Elena Rostova & Axiom STEM Faculty",
    lemonSqueezyStoreId: "store_stem_faculty_101",
    lemonSqueezyStoreName: "Dr. Elena Rostova & Axiom STEM Faculty",
    createdAt: "2026-08-21T13:30:00.000Z",
    updatedAt: "2026-08-21T13:40:00.000Z",
    lastModified: "2026-08-21T13:40:00.000Z"
  },
  {
    id: "sim-quantum-em-spectrum",
    title: "Quantum EM Spectrum & Energy Simulator",
    tagline: "Explore wave-particle duality, frequency scaling, photon wavelength metrics, and Planck energy quantization (E = hÎ½)",
    discipline: "physics",
    gradeLevel: ["High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["HS-PS4-1", "HS-PS4-3", "AP Physics 2 (Unit 14)", "NGSS SEP-5"],
    description: "Investigate electromagnetic wave properties and quantum energy quantization across the entire spectrum. Adjust wavelength logarithmically, observe color shifting in the visible range, calculate frequency and photon energy in Joules and electron-volts (eV), and toggle quantum photon particle duality packets.",
    learningObjectives: [
      "Relate wavelength, frequency, and photon energy through c = Î»Î½ and E = hÎ½",
      "Analyze how changing photon wavelength shifts light through the visible spectrum into ultraviolet, X-rays, and infrared",
      "Investigate wave-particle duality by toggling quantum photon particle packets onto the continuous sine wave"
    ],
    thumbnailGradient: "from-cyan-600 via-indigo-600 to-pink-600",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    iconName: "Activity",
    rating: 5.0,
    reviewCount: 42,
    teacherCount: 156,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Continuous dynamic wave canvas with real-time frequency phase animation",
      "Interactive full-range EM spectrum slider with gamma, X-ray, UV, visible, IR, microwave, and radio presets",
      "Live calculated physical metrics (wavelength, frequency in Hz, and photon energy in J and eV)",
      "Quantum photon particle packet duality visualizer toggle"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-em-1",
        title: "Identify Visible Green Light",
        instruction: "Adjust the wavelength slider to locate green visible light at approximately 520 nm (~2.38 eV).",
        targetMetric: "Wavelength",
        targetValue: 520,
        tolerance: 15,
        currentValueKey: "wavelength",
        rewardBadge: "Spectral Analyst"
      },
      {
        id: "ch-em-2",
        title: "High-Energy Gamma Transition",
        instruction: "Configure the EM wave into the Gamma Ray regime with photon energy exceeding 100 keV.",
        targetMetric: "Energy (eV)",
        targetValue: 100000,
        tolerance: 50000,
        currentValueKey: "energyEv",
        rewardBadge: "Quantum Master"
      }
    ],
    previewFacts: [
      "Higher frequency electromagnetic waves carry higher photon energy according to E = hÎ½ (Planck's relation)",
      "Visible light represents only a tiny fraction of the electromagnetic spectrum between ~380 nm and ~750 nm"
    ],
    isHtmlApp: true,
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quantum EM Spectrum & Energy Simulator</title>
    <style>
        :root {
            --bg-color: #0b0f19;
            --card-bg: #161e2e;
            --accent-cyan: #00f2fe;
            --accent-pink: #ff007f;
            --accent-purple: #7b2cbf;
            --text-main: #f1f5f9;
            --text-muted: #94a3b8;
            --border-color: #2a364f;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-main);
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            padding: 20px;
        }

        header {
            text-align: center;
            margin-bottom: 20px;
        }

        header h1 {
            font-size: 2.2rem;
            background: linear-gradient(135deg, var(--accent-cyan), var(--accent-pink));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 5px;
        }

        header p {
            color: var(--text-muted);
            font-size: 0.95rem;
        }

        .dashboard {
            display: grid;
            grid-template-columns: 1fr 340px;
            gap: 20px;
            max-width: 1400px;
            margin: 0 auto;
            width: 100%;
        }

        @media (max-width: 1024px) {
            .dashboard {
                grid-template-columns: 1fr;
            }
        }

        .simulation-container {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .canvas-card {
            background-color: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 15px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.5);
            position: relative;
            overflow: hidden;
        }

        canvas {
            width: 100%;
            height: 320px;
            background-color: #05070d;
            border-radius: 8px;
            display: block;
        }

        .spectrum-bar-container {
            margin-top: 10px;
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 15px;
        }

        .spectrum-bar {
            height: 30px;
            border-radius: 6px;
            background: linear-gradient(to right, 
                #400080 0%,   /* Gamma/X-Ray */
                #0000ff 20%,  /* UV */
                #00ffff 35%,  /* Visible Cyan */
                #00ff00 45%,  /* Visible Green */
                #ffff00 55%,  /* Visible Yellow */
                #ff0000 70%,  /* Infrared */
                #800000 85%,  /* Microwave */
                #200000 100%  /* Radio */
            );
            position: relative;
            cursor: pointer;
            box-shadow: 0 0 15px rgba(0, 242, 254, 0.2);
        }

        .spectrum-indicator {
            position: absolute;
            top: -5px;
            width: 4px;
            height: 40px;
            background: #ffffff;
            border: 1px solid #000;
            box-shadow: 0 0 10px #ffffff;
            transform: translateX(-50%);
            pointer-events: none;
            transition: left 0.1s ease-out;
        }

        .spectrum-labels {
            display: flex;
            justify-content: space-between;
            margin-top: 8px;
            font-size: 0.75rem;
            color: var(--text-muted);
        }

        .control-panel {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .panel-section h3 {
            font-size: 1.1rem;
            color: var(--accent-cyan);
            margin-bottom: 12px;
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 5px;
        }

        .control-group {
            margin-bottom: 15px;
        }

        .control-group label {
            display: flex;
            justify-content: space-between;
            font-size: 0.85rem;
            margin-bottom: 6px;
            color: var(--text-main);
        }

        input[type="range"] {
            width: 100%;
            height: 6px;
            background: #2a364f;
            border-radius: 3px;
            outline: none;
            -webkit-appearance: none;
        }

        input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: var(--accent-cyan);
            cursor: pointer;
            box-shadow: 0 0 8px var(--accent-cyan);
        }

        .preset-buttons {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
        }

        .btn {
            background: #1e293b;
            border: 1px solid var(--border-color);
            color: var(--text-main);
            padding: 8px 12px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 0.8rem;
            transition: all 0.2s ease;
        }

        .btn:hover {
            background: var(--accent-purple);
            border-color: var(--accent-purple);
        }

        .metrics-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
        }

        .metric-card {
            background: #0f172a;
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 10px 14px;
        }

        .metric-card .title {
            font-size: 0.75rem;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .metric-card .value {
            font-size: 1.2rem;
            font-weight: bold;
            color: var(--accent-cyan);
            margin-top: 2px;
        }

        .metric-card .value.energy {
            color: var(--accent-pink);
        }

        .toggle-group {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 10px;
        }

        /* Switch styles */
        .switch {
            position: relative;
            display: inline-block;
            width: 44px;
            height: 22px;
        }
        .switch input { opacity: 0; width: 0; height: 0; }
        .slider {
            position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0;
            background-color: #2a364f; transition: .4s; border-radius: 22px;
        }
        .slider:before {
            position: absolute; content: ""; height: 16px; width: 16px; left: 3px; bottom: 3px;
            background-color: white; transition: .4s; border-radius: 50%;
        }
        input:checked + .slider { background-color: var(--accent-pink); }
        input:checked + .slider:before { transform: translateX(22px); }
    </style>
</head>
<body>

    <header>
        <h1>Quantum Electromagnetic Wave & Energy Simulator</h1>
        <p>Explore wave-particle duality, frequency scaling, and Planck energy quantization</p>
    </header>

    <div class="dashboard">
        <!-- Main Simulation Visualizer -->
        <div class="simulation-container">
            <div class="canvas-card">
                <canvas id="waveCanvas"></canvas>
            </div>

            <!-- Spectrum Bar Track -->
            <div class="spectrum-bar-container">
                <div class="spectrum-bar" id="spectrumTrack">
                    <div class="spectrum-indicator" id="spectrumIndicator"></div>
                </div>
                <div class="spectrum-labels">
                    <span>Gamma Rays</span>
                    <span>X-Rays</span>
                    <span>UV</span>
                    <span>Visible</span>
                    <span>Infrared</span>
                    <span>Microwave</span>
                    <span>Radio</span>
                </div>
            </div>
        </div>

        <!-- Interactive Controls & Calculated Metrics -->
        <div class="control-panel">
            <div class="panel-section">
                <h3>Calculated Physical Metrics</h3>
                <div class="metrics-grid">
                    <div class="metric-card">
                        <div class="title">Wavelength (&lambda;)</div>
                        <div class="value" id="dispWavelength">500 nm</div>
                    </div>
                    <div class="metric-card">
                        <div class="title">Frequency (&nu;)</div>
                        <div class="value" id="dispFrequency">5.99 &times; 10<sup>14</sup> Hz</div>
                    </div>
                    <div class="metric-card">
                        <div class="title">Photon Energy (E = h&nu;)</div>
                        <div class="value energy" id="dispEnergy">3.97 &times; 10<sup>-19</sup> J</div>
                        <div style="font-size: 0.8rem; color: #cbd5e1; margin-top:2px;" id="dispEv">(2.48 eV)</div>
                    </div>
                </div>
            </div>

            <div class="panel-section">
                <h3>Controls</h3>
                <div class="control-group">
                    <label for="logWavelengthSlider">Log Wavelength Scale <span id="logVal"></span></label>
                    <input type="range" id="logWavelengthSlider" min="-12" max="1" step="0.01" value="-6.3">
                </div>
                <div class="control-group">
                    <label for="amplitudeSlider">Wave Amplitude</label>
                    <input type="range" id="amplitudeSlider" min="10" max="80" value="40">
                </div>
                <div class="toggle-group">
                    <span style="font-size: 0.9rem;">Show Photons (Particles)</span>
                    <label class="switch">
                        <input type="checkbox" id="toggleParticles" checked>
                        <span class="slider"></span>
                    </label>
                </div>
            </div>

            <div class="panel-section">
                <h3>EM Spectrum Presets</h3>
                <div class="preset-buttons">
                    <button class="btn" onclick="setPreset(-11)">Gamma Ray</button>
                    <button class="btn" onclick="setPreset(-9)">X-Ray</button>
                    <button class="btn" onclick="setPreset(-7.2)">Ultraviolet</button>
                    <button class="btn" onclick="setPreset(-6.3)">Visible Light</button>
                    <button class="btn" onclick="setPreset(-5)">Infrared</button>
                    <button class="btn" onclick="setPreset(-2)">Microwave</button>
                    <button class="btn" onclick="setPreset(0.5)">Radio Wave</button>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Physical Constants
        const c = 2.99792458e8;       // Speed of light (m/s)
        const h = 6.62607015e-34;    // Planck's constant (J*s)
        const eV_conversion = 1.602176634e-19; // Joules per eV

        // Canvas Setup
        const canvas = document.getElementById('waveCanvas');
        const ctx = canvas.getContext('2d');
        
        function resizeCanvas() {
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // UI Element References
        const logSlider = document.getElementById('logWavelengthSlider');
        const ampSlider = document.getElementById('amplitudeSlider');
        const particlesToggle = document.getElementById('toggleParticles');
        const dispWavelength = document.getElementById('dispWavelength');
        const dispFrequency = document.getElementById('dispFrequency');
        const dispEnergy = document.getElementById('dispEnergy');
        const dispEv = document.getElementById('dispEv');
        const spectrumIndicator = document.getElementById('spectrumIndicator');
        const spectrumTrack = document.getElementById('spectrumTrack');

        // Animation State variables
        let phase = 0;
        let particles = [];
        const numParticles = 40;

        // Initialize particles
        for(let i = 0; i < numParticles; i++) {
            particles.push({
                x: Math.random(),
                offset: (Math.random() - 0.5) * 20
            });
        }

        // Convert Log Wavelength Exponent to RGB Color for Aesthetics
        function getSpectrumColor(logWavelength) {
            // Visible Range is approx log10(380nm) = -6.42 to log10(750nm) = -6.12
            if (logWavelength < -9) return '#a855f7'; // Gamma - Deep Violet/Purple
            if (logWavelength < -7) return '#3b82f6'; // X-Ray / UV - Blue
            if (logWavelength >= -6.42 && logWavelength <= -6.12) {
                // Approximate Visible Spectrum Mapping
                let lambda = Math.pow(10, logWavelength) * 1e9; // nanometers
                return wavelengthToRgb(lambda);
            }
            if (logWavelength < -6.12 && logWavelength >= -7) return '#8b5cf6'; // Violet
            if (logWavelength < -3) return '#ef4444'; // Infrared - Red
            if (logWavelength < -1) return '#f97316'; // Microwave - Orange
            return '#eab308'; // Radio - Yellow
        }

        // Standard approximation formula for visible spectrum color
        function wavelengthToRgb(wavelength) {
            let r, g, b;
            if (wavelength >= 380 && wavelength < 440) {
                r = -(wavelength - 440) / (440 - 380); g = 0; b = 1;
            } else if (wavelength >= 440 && wavelength < 490) {
                r = 0; g = (wavelength - 440) / (490 - 440); b = 1;
            } else if (wavelength >= 490 && wavelength < 510) {
                r = 0; g = 1; b = -(wavelength - 510) / (510 - 490);
            } else if (wavelength >= 510 && wavelength < 580) {
                r = (wavelength - 510) / (580 - 510); g = 1; b = 0;
            } else if (wavelength >= 580 && wavelength < 645) {
                r = 1; g = -(wavelength - 645) / (645 - 580); b = 0;
            } else if (wavelength >= 645 && wavelength <= 780) {
                r = 1; g = 0; b = 0;
            } else {
                r = 0.5; g = 0.5; b = 0.5;
            }
            return \`rgb(\${Math.floor(r * 255)}, \${Math.floor(g * 255)}, \${Math.floor(b * 255)})\`;
        }

        // Metric Formatting Helper
        function formatScientific(num, unit) {
            if (num >= 0.01 && num <= 1000) return \`\${num.toFixed(2)} \${unit}\`;
            const exponent = Math.floor(Math.log10(num));
            const mantissa = (num / Math.pow(10, exponent)).toFixed(2);
            return \`\${mantissa} &times; 10<sup>\${exponent}</sup> \${unit}\`;
        }

        function formatWavelength(lambda) {
            if (lambda < 1e-9) return \`\${(lambda * 1e12).toFixed(2)} pm\`;
            if (lambda < 1e-6) return \`\${(lambda * 1e9).toFixed(2)} nm\`;
            if (lambda < 1e-3) return \`\${(lambda * 1e6).toFixed(2)} &mu;m\`;
            if (lambda < 1) return \`\${(lambda * 1e2).toFixed(2)} cm\`;
            return \`\${lambda.toFixed(2)} m\`;
        }

        function setPreset(logVal) {
            logSlider.value = logVal;
            update();
        }

        function updateMetrics() {
            const logWavelength = parseFloat(logSlider.value);
            const wavelength = Math.pow(10, logWavelength); // meters
            const frequency = c / wavelength;              // Hz
            const energyJ = h * frequency;                  // Joules
            const energyEV = energyJ / eV_conversion;        // eV

            // UI Updates
            dispWavelength.innerHTML = formatWavelength(wavelength);
            dispFrequency.innerHTML = formatScientific(frequency, 'Hz');
            dispEnergy.innerHTML = formatScientific(energyJ, 'J');
            dispEv.textContent = \`(\${energyEV < 0.01 ? energyEV.toExponential(2) : energyEV.toLocaleString(undefined, {maximumFractionDigits:2})} eV)\`;

            // Spectrum Indicator Position (-12 to 1 range mapped to 0% - 100%)
            const percent = ((logWavelength - (-12)) / (1 - (-12))) * 100;
            spectrumIndicator.style.left = \`\${Math.min(Math.max(percent, 0), 100)}%\`;
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const logWavelength = parseFloat(logSlider.value);
            const amplitude = parseFloat(ampSlider.value);
            const waveColor = getSpectrumColor(logWavelength);

            // Calculate visual spatial frequency on screen
            // Map log wavelength (-12 to 1) to screen wavelength pixels
            const visualWavelength = 40 + ((logWavelength - (-12)) / 13) * (canvas.width / 1.5);
            const k = (2 * Math.PI) / visualWavelength; // Angular wave number for rendering

            const centerY = canvas.height / 2;

            // Draw Center Axis
            ctx.beginPath();
            ctx.strokeStyle = '#1e293b';
            ctx.lineWidth = 1;
            ctx.setLineDash([5, 5]);
            ctx.moveTo(0, centerY);
            ctx.lineTo(canvas.width, centerY);
            ctx.stroke();
            ctx.setLineDash([]);

            // Draw Main Sine Wave
            ctx.beginPath();
            ctx.lineWidth = 4;
            ctx.strokeStyle = waveColor;
            ctx.shadowColor = waveColor;
            ctx.shadowBlur = 15;

            for (let x = 0; x < canvas.width; x++) {
                const y = centerY + Math.sin(k * x - phase) * amplitude;
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
            ctx.shadowBlur = 0; // Reset blur for performance

            // Render Quantum Photons (Particle Overlay)
            if (particlesToggle.checked) {
                particles.forEach(p => {
                    const px = (p.x * canvas.width + phase * 20) % canvas.width;
                    const py = centerY + Math.sin(k * px - phase) * amplitude + p.offset;

                    ctx.beginPath();
                    ctx.arc(px, py, 3, 0, Math.PI * 2);
                    ctx.fillStyle = '#ffffff';
                    ctx.shadowColor = waveColor;
                    ctx.shadowBlur = 8;
                    ctx.fill();
                    ctx.shadowBlur = 0;
                });
            }

            // Animation dynamic phase velocity scaling with frequency
            const freqSpeed = ((logWavelength - (-12)) / 13); 
            phase += 0.05 + (1 - freqSpeed) * 0.15; // Higher frequency = faster visual animation

            requestAnimationFrame(draw);
        }

        function update() {
            updateMetrics();
        }

        // Event Listeners
        logSlider.addEventListener('input', update);
        spectrumTrack.addEventListener('click', (e) => {
            const rect = spectrumTrack.getBoundingClientRect();
            const clickPos = (e.clientX - rect.left) / rect.width;
            const logVal = -12 + clickPos * (1 - (-12));
            logSlider.value = logVal;
            update();
        });

        // Initialize
        update();
        draw();
    </script>
</body>
</html>`,
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-16"
  },
  {
    id: "sim-electric-circuit",
    title: "Electric Circuit Simulator",
    tagline: "DC circuit builder with resistors, batteries, switches, current flow & voltage drop analysis",
    discipline: "physics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM"],
    standards: ["HS-PS3-3", "AP Physics 2 (Unit 9)", "NGSS SEP-5"],
    description: "Construct interactive series and parallel DC circuits. Measure real-time current, potential difference across components, equivalent resistance, and power dissipation with embedded circuit controls.",
    learningObjectives: [
      "Verify Ohm's law (V = IR) across varying resistor networks",
      "Analyze Kirchhoff's current and voltage laws in complex multi-loop circuits",
      "Investigate how internal battery resistance influences terminal voltage"
    ],
    thumbnailGradient: "from-amber-600 via-yellow-500 to-orange-600",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    iconName: "Zap",
    rating: 5.0,
    reviewCount: 48,
    teacherCount: 142,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Zero-plugin interactive HTML5 circuit board",
      "Live ammeters and voltmeters",
      "Series and parallel branch switching",
      "Custom component parameter adjustments"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-circ-1",
        title: "Balanced Parallel Resistance",
        instruction: "Construct a circuit where total equivalent resistance equals exactly 10 Ohms using available resistors.",
        targetMetric: "R_eq",
        targetValue: 10,
        tolerance: 0.1,
        currentValueKey: "Req",
        rewardBadge: "Circuit Master"
      }
    ],
    previewFacts: [
      "Current splits inversely proportional to resistance in parallel branches",
      "Total power equals sum of power consumed in individual loads"
    ],
    isHtmlApp: true,
    htmlUrl: "https://electric-circuit-simulator.netlify.app/",
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-atomic-electron-excitation",
    title: "Atomic Electron Excitation & Bohr Energy Levels",
    tagline: "Photon absorption, emission spectra, energy transitions, and quantum level jumps",
    discipline: "chemistry",
    gradeLevel: ["High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["HS-PS4-3", "HS-PS1-1", "AP Chemistry (Unit 1)"],
    description: "Explore quantum transitions in atomic electron shells. Excite ground-state electrons with discrete photon wavelengths, visualize absorption/emission spectra, and calculate delta energy (E = hf).",
    learningObjectives: [
      "Relate incident photon frequency and wavelength to discrete orbital transition energies",
      "Identify the relationship between atomic emission lines and electron relaxation",
      "Understand quantization of angular momentum and Bohr energy states"
    ],
    thumbnailGradient: "from-indigo-600 via-purple-600 to-pink-600",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    iconName: "Atom",
    rating: 4.9,
    reviewCount: 39,
    teacherCount: 118,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Visual Bohr orbital electron animations",
      "Spectral line emission wavelength chart",
      "Photon energy absorption tuning",
      "Real-time quantum state readouts"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-atom-1",
        title: "Balmer Series Emission",
        instruction: "Induce a transition that produces visible blue photon emission at 486 nm.",
        targetMetric: "Wavelength",
        targetValue: 486,
        tolerance: 5,
        currentValueKey: "wavelength",
        rewardBadge: "Quantum Pioneer"
      }
    ],
    previewFacts: [
      "Electrons only absorb photons whose energy exactly matches the energy gap between orbitals",
      "The Balmer series corresponds to electron transitions down to principal quantum number n=2"
    ],
    isHtmlApp: true,
    htmlUrl: "https://atomic-electron-excitation-simulator.netlify.app/",
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-simple-harmonic-motion",
    title: "Simple Harmonic Motion (SHM) Suite (Pendulum & Spring)",
    tagline: "Dual real-time physics simulator with simple pendulum arc kinematics, vertical mass-spring oscillations, and live plug-and-chug formula engines",
    discipline: "physics",
    gradeLevel: ["High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["HS-PS4-1", "AP Physics 1 (Unit 6)", "NGSS SEP-4", "CCSS.MATH.CONTENT.HSF.TF.B.5"],
    description: "Investigate kinematic periodicity, restorative forces, and damped oscillations across side-by-side Simple Pendulum and Mass-on-a-Spring systems. Observe real-time arc positions, vertical displacements, period calculations (T = 2Ï€âˆš(L/g) and T = 2Ï€âˆš(m/k)), frequency readouts, and instantaneous restoring forces with live step-by-step formula substitutions.",
    learningObjectives: [
      "Verify the theoretical period formulas for simple pendulums T = 2Ï€âˆš(L/g) and mass-spring oscillators T = 2Ï€âˆš(m/k)",
      "Analyze how mass, length, spring stiffness (k), amplitude, and gravitational acceleration (g) influence frequency and periodicity",
      "Observe damping decay mechanics where exponential damping factors reduce oscillatory amplitude over time",
      "Calculate instantaneous angular acceleration and Hooke's Law restoring forces (-kx) during dynamic oscillations"
    ],
    thumbnailGradient: "from-sky-500 via-indigo-600 to-emerald-600",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    iconName: "Activity",
    rating: 5.0,
    reviewCount: 78,
    teacherCount: 295,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Dual Side-by-Side Oscillators: Simple Pendulum and Vertical Mass-on-a-Spring with visual equilibrium lines",
      "Live Step-by-Step Formula Engines: Real-time calculation plugs for Period (T), Frequency (f), Angular Acceleration (Î±), and Restoring Force (F)",
      "Interactive Amplitude and Arc Path limit indicators with live bob/mass coordinate tracking",
      "Adjustable physics parameters: Pendulum Length (L), Mass (m), Spring Constant (k), Amplitude (A), Damping (Î³), and Gravity (g)",
      "Pause, Resume, and Time-Reset controls with smooth 60 FPS requestAnimationFrame rendering"
    ],
    parameterDefaults: {
      pLength: 0.8,
      pAmplitude: 0.25,
      sMass: 0.5,
      sConstant: 25,
      sAmplitude: 0.06,
      damping: 0.05,
      gravity: 9.8
    },
    parameterControls: [
      {
        key: "pLength",
        label: "Pendulum Length (L)",
        min: 0.3,
        max: 1.5,
        step: 0.05,
        unit: "m",
        description: "Length of the pendulum string from pivot to center of mass"
      },
      {
        key: "sConstant",
        label: "Spring Constant (k)",
        min: 5,
        max: 90,
        step: 1,
        unit: "N/m",
        description: "Stiffness rating of the vertical spring"
      },
      {
        key: "sMass",
        label: "Spring Mass (m)",
        min: 0.1,
        max: 2.0,
        step: 0.1,
        unit: "kg",
        description: "Mass attached to the oscillating spring"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-shm-1",
        title: "Resonance Synchronization",
        instruction: "Adjust the pendulum length (L) and spring parameters (m, k) until both oscillators share the exact same oscillation period (T).",
        targetMetric: "Period Difference Î”T",
        targetValue: 0,
        tolerance: 0.05,
        currentValueKey: "period_diff",
        rewardBadge: "Isochronism Master"
      },
      {
        id: "ch-shm-2",
        title: "Exact 2.00-Second Pendulum Period",
        instruction: "Set gravity to Earth standard (9.8 m/sÂ²) and adjust the pendulum length to achieve an exact period of 2.00 seconds (L â‰ˆ 0.99 m).",
        targetMetric: "Pendulum Period T",
        targetValue: 2.0,
        tolerance: 0.02,
        currentValueKey: "period_p",
        rewardBadge: "Grandfather Clockmaker"
      }
    ],
    previewFacts: [
      "In simple harmonic motion without damping, the period is completely independent of the amplitude of oscillation.",
      "The restoring force in a spring-mass oscillator is governed by Hooke's Law (F = -kx), always acting in the direction opposite to displacement."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/simple-harmonic-motion-pendulum-spring.html?v=3",
    htmlContent: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>SHM Ultimate Physics Suite | Pendulum & Spring</title>\n    <style>\n        :root {\n            --bg-app: #0c101d;\n            --bg-card: #151c2e;\n            --text-primary: #f8fafc;\n            --text-secondary: #94a3b8;\n            --accent-p: #38bdf8;\n            --accent-s: #34d399;\n            --accent-amp: #f43f5e;\n            --accent-eq: #fbbf24;\n            --accent-calc: #c084fc;\n            --border-color: #273449;\n            --btn-bg: #273449;\n        }\n\n        body {\n            font-family: 'Inter', system-ui, -apple-system, sans-serif;\n            background-color: var(--bg-app);\n            color: var(--text-primary);\n            margin: 0;\n            padding: 25px;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            min-height: 100vh;\n        }\n\n        header {\n            text-align: center;\n            margin-bottom: 25px;\n        }\n\n        h1 {\n            margin: 0 0 6px 0;\n            font-size: 2rem;\n            font-weight: 800;\n            letter-spacing: -0.5px;\n            background: linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #f43f5e 100%);\n            -webkit-background-clip: text;\n            -webkit-text-fill-color: transparent;\n        }\n\n        .subtitle {\n            color: var(--text-secondary);\n            font-size: 0.95rem;\n        }\n\n        .main-wrapper {\n            display: flex;\n            gap: 25px;\n            max-width: 1050px;\n            width: 100%;\n            flex-wrap: wrap;\n            justify-content: center;\n        }\n\n        .sim-card {\n            background-color: var(--bg-card);\n            border: 1px solid var(--border-color);\n            border-radius: 20px;\n            padding: 22px;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            flex: 1;\n            min-width: 350px;\n            max-width: 480px;\n            box-shadow: 0 12px 24px -6px rgba(0, 0, 0, 0.4);\n        }\n\n        .card-header {\n            width: 100%;\n            margin-bottom: 15px;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            border-bottom: 1px solid var(--border-color);\n            padding-bottom: 10px;\n        }\n\n        .card-title {\n            font-size: 1.25rem;\n            font-weight: 700;\n            margin: 0;\n        }\n\n        .p-title { color: var(--accent-p); }\n        .s-title { color: var(--accent-s); }\n\n        canvas {\n            background: radial-gradient(circle at center, #131b2e 0%, #080c16 100%);\n            border-radius: 14px;\n            border: 1px solid var(--border-color);\n            margin-bottom: 15px;\n            display: block;\n        }\n\n        .stats-grid {\n            display: grid;\n            grid-template-columns: repeat(3, 1fr);\n            gap: 10px;\n            width: 100%;\n            background: rgba(11, 16, 29, 0.6);\n            padding: 12px;\n            border-radius: 10px;\n            box-sizing: border-box;\n            border: 1px solid rgba(255, 255, 255, 0.03);\n        }\n\n        .stat-box {\n            text-align: center;\n        }\n\n        .stat-label {\n            font-size: 0.7rem;\n            color: var(--text-secondary);\n            text-transform: uppercase;\n            letter-spacing: 0.8px;\n            margin-bottom: 4px;\n            font-weight: 600;\n        }\n\n        .stat-value {\n            font-size: 0.95rem;\n            font-weight: 700;\n            font-family: 'Fira Code', monospace;\n        }\n\n        .p-val { color: var(--accent-p); }\n        .s-val { color: var(--accent-s); }\n\n        .control-panel, .calc-panel, .info-panel {\n            background-color: var(--bg-card);\n            border: 1px solid var(--border-color);\n            border-radius: 20px;\n            padding: 25px;\n            margin-top: 25px;\n            max-width: 985px;\n            width: 100%;\n            box-sizing: border-box;\n            box-shadow: 0 12px 24px -6px rgba(0, 0, 0, 0.4);\n        }\n\n        .control-panel {\n            display: grid;\n            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n            gap: 20px;\n        }\n\n        .control-group {\n            display: flex;\n            flex-direction: column;\n            gap: 8px;\n        }\n\n        .control-label {\n            font-size: 0.85rem;\n            color: var(--text-primary);\n            font-weight: 600;\n            display: flex;\n            justify-content: space-between;\n        }\n\n        .control-label span {\n            color: var(--text-secondary);\n            font-weight: normal;\n        }\n\n        input[type=range] {\n            -webkit-appearance: none;\n            width: 100%;\n            background: transparent;\n        }\n\n        input[type=range]:focus { outline: none; }\n\n        input[type=range]::-webkit-slider-runnable-track {\n            width: 100%;\n            height: 6px;\n            cursor: pointer;\n            background: #1a2338;\n            border-radius: 3px;\n            border: 1px solid var(--border-color);\n        }\n\n        input[type=range]::-webkit-slider-thumb {\n            height: 18px;\n            width: 18px;\n            border-radius: 50%;\n            background: var(--accent-p);\n            cursor: pointer;\n            -webkit-appearance: none;\n            margin-top: -6px;\n            box-shadow: 0 0 10px rgba(56, 189, 248, 0.5);\n            transition: transform 0.2s, background 0.2s;\n        }\n\n        #sAmplitude::-webkit-slider-thumb, #sMass::-webkit-slider-thumb, #sConstant::-webkit-slider-thumb, #pAmplitude::-webkit-slider-thumb { \n            background: var(--accent-s); \n            box-shadow: 0 0 10px rgba(52, 211, 153, 0.5); \n        }\n\n        input[type=range]::-webkit-slider-thumb:hover { transform: scale(1.2); }\n\n        .btn-group {\n            grid-column: 1 / -1;\n            display: flex;\n            justify-content: center;\n            gap: 15px;\n            margin-top: 5px;\n        }\n\n        .action-btn {\n            background-color: var(--btn-bg);\n            color: var(--text-primary);\n            border: 1px solid var(--border-color);\n            padding: 10px 22px;\n            border-radius: 8px;\n            font-weight: 600;\n            cursor: pointer;\n            transition: all 0.2s;\n        }\n\n        .action-btn:hover { background-color: #33425f; border-color: #38bdf8; }\n        \n        .primary-btn {\n            background: linear-gradient(135deg, #38bdf8 0%, #2563eb 100%);\n            border: none;\n            color: #ffffff;\n        }\n\n        .legend {\n            font-size: 0.75rem;\n            color: var(--text-secondary);\n            display: flex;\n            gap: 15px;\n            align-items: center;\n        }\n        .legend-dot {\n            width: 8px;\n            height: 8px;\n            border-radius: 50%;\n            display: inline-block;\n            margin-right: 4px;\n        }\n\n        .calc-grid {\n            display: grid;\n            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n            gap: 20px;\n            margin-top: 15px;\n        }\n\n        .calc-card {\n            background: rgba(11, 16, 29, 0.5);\n            border: 1px solid var(--border-color);\n            border-radius: 12px;\n            padding: 15px;\n        }\n\n        .calc-title {\n            font-size: 0.9rem;\n            font-weight: 700;\n            color: var(--accent-calc);\n            margin-bottom: 8px;\n            display: flex;\n            justify-content: space-between;\n        }\n\n        .formula-box {\n            font-family: 'Fira Code', monospace;\n            font-size: 0.8rem;\n            color: var(--text-secondary);\n            background: rgba(0,0,0,0.3);\n            padding: 8px;\n            border-radius: 6px;\n            margin-bottom: 8px;\n        }\n\n        .plug-box {\n            font-family: 'Fira Code', monospace;\n            font-size: 0.85rem;\n            color: var(--text-primary);\n        }\n\n        .panel-heading {\n            font-size: 1.1rem;\n            font-weight: 700;\n            margin-top: 0;\n            margin-bottom: 5px;\n            color: var(--text-primary);\n        }\n\n        .info-panel p {\n            color: var(--text-secondary);\n            font-size: 0.9rem;\n            line-height: 1.5;\n            margin-bottom: 10px;\n        }\n    </style>\n</head>\n<body>\n\n    <header>\n        <h1>Interactive SHM Physics Lab</h1>\n        <div class=\"subtitle\">Dynamic Simple Harmonic Motion Analysis with Live Calculation Plugins</div>\n    </header>\n\n    <div class=\"main-wrapper\">\n        <!-- Pendulum Card -->\n        <div class=\"sim-card\">\n            <div class=\"card-header\">\n                <h2 class=\"card-title p-title\">Simple Pendulum</h2>\n                <div class=\"legend\">\n                    <span><i class=\"legend-dot\" style=\"background:var(--accent-eq)\"></i>Equilibrium</span>\n                    <span><i class=\"legend-dot\" style=\"background:var(--accent-amp)\"></i>Amplitude & Path</span>\n                </div>\n            </div>\n            <canvas id=\"pendulumCanvas\" width=\"420\" height=\"340\"></canvas>\n            <div class=\"stats-grid\">\n                <div class=\"stat-box\">\n                    <div class=\"stat-label\">Arc Position</div>\n                    <div class=\"stat-value p-val\" id=\"pPosDisplay\">0.00 m</div>\n                </div>\n                <div class=\"stat-box\">\n                    <div class=\"stat-label\">Amplitude</div>\n                    <div class=\"stat-value\" style=\"color:var(--accent-amp)\" id=\"pAmplitudeDisplay\">0.00 m</div>\n                </div>\n                <div class=\"stat-box\">\n                    <div class=\"stat-label\">Period</div>\n                    <div class=\"stat-value\" id=\"pPeriodDisplay\">0.00 s</div>\n                </div>\n            </div>\n        </div>\n\n        <!-- Mass-Spring Card -->\n        <div class=\"sim-card\">\n            <div class=\"card-header\">\n                <h2 class=\"card-title s-title\">Mass on a Spring</h2>\n                <div class=\"legend\">\n                    <span><i class=\"legend-dot\" style=\"background:var(--accent-eq)\"></i>Equilibrium</span>\n                    <span><i class=\"legend-dot\" style=\"background:var(--accent-amp)\"></i>Amplitude</span>\n                </div>\n            </div>\n            <canvas id=\"springCanvas\" width=\"420\" height=\"340\"></canvas>\n            <div class=\"stats-grid\">\n                <div class=\"stat-box\">\n                    <div class=\"stat-label\">Position</div>\n                    <div class=\"stat-value s-val\" id=\"sPositionDisplay\">0.000 m</div>\n                </div>\n                <div class=\"stat-box\">\n                    <div class=\"stat-label\">Amplitude</div>\n                    <div class=\"stat-value\" style=\"color:var(--accent-amp)\" id=\"sAmplitudeDisplay\">0.000 m</div>\n                </div>\n                <div class=\"stat-box\">\n                    <div class=\"stat-label\">Period</div>\n                    <div class=\"stat-value\" id=\"sPeriodDisplay\">0.00 s</div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Controls -->\n    <div class=\"control-panel\">\n        <div class=\"control-group\">\n            <label for=\"pLength\" class=\"control-label\">Pendulum Length <span>(L: <strong id=\"pLengthVal\">0.80</strong> m)</span></label>\n            <input type=\"range\" id=\"pLength\" min=\"0.3\" max=\"1.5\" step=\"0.05\" value=\"0.8\">\n        </div>\n        <div class=\"control-group\">\n            <label for=\"pAmplitude\" class=\"control-label\">Pendulum Amplitude <span>(A<sub>p</sub>: <strong id=\"pAmplitudeVal\">0.25</strong> m)</span></label>\n            <input type=\"range\" id=\"pAmplitude\" min=\"0.05\" max=\"0.50\" step=\"0.01\" value=\"0.25\">\n        </div>\n        <div class=\"control-group\">\n            <label for=\"sMass\" class=\"control-label\">Oscillating Mass <span>(m: <strong id=\"sMassVal\">0.5</strong> kg)</span></label>\n            <input type=\"range\" id=\"sMass\" min=\"0.1\" max=\"2.0\" step=\"0.1\" value=\"0.5\">\n        </div>\n        <div class=\"control-group\">\n            <label for=\"sConstant\" class=\"control-label\">Spring Constant <span>(k: <strong id=\"sConstantVal\">25</strong> N/m)</span></label>\n            <input type=\"range\" id=\"sConstant\" min=\"5\" max=\"90\" step=\"1\" value=\"25\">\n        </div>\n        <div class=\"control-group\">\n            <label for=\"sAmplitude\" class=\"control-label\">Spring Amplitude <span>(A<sub>s</sub>: <strong id=\"sAmplitudeVal\">0.06</strong> m)</span></label>\n            <input type=\"range\" id=\"sAmplitude\" min=\"0.02\" max=\"0.10\" step=\"0.01\" value=\"0.06\">\n        </div>\n        <div class=\"control-group\">\n            <label for=\"damping\" class=\"control-label\">Damping Coeff. <span>(&gamma;: <strong id=\"dampingVal\">0.05</strong>)</span></label>\n            <input type=\"range\" id=\"damping\" min=\"0\" max=\"0.5\" step=\"0.01\" value=\"0.05\">\n        </div>\n        <div class=\"control-group\">\n            <label for=\"gravity\" class=\"control-label\">Gravity <span>(g: <strong id=\"gravityVal\">9.8</strong> m/s\u00b2)</span></label>\n            <input type=\"range\" id=\"gravity\" min=\"1\" max=\"20\" step=\"0.1\" value=\"9.8\">\n        </div>\n\n        <div class=\"btn-group\">\n            <button class=\"action-btn primary-btn\" id=\"toggleBtn\">Pause Simulation</button>\n            <button class=\"action-btn\" id=\"resetBtn\">Reset Time</button>\n        </div>\n    </div>\n\n    <!-- Calculations Panel -->\n    <div class=\"calc-panel\">\n        <h3 class=\"panel-heading\" style=\"color:var(--accent-p);\">Live Formula Engine (Active Pendulum Data)</h3>\n        <div class=\"calc-grid\">\n            <div class=\"calc-card\">\n                <div class=\"calc-title\">Period (T)</div>\n                <div class=\"formula-box\">T = 2&pi; &radic;(L / g)</div>\n                <div class=\"plug-box\" id=\"calcPeriod\">Plug: 2&pi; &radic;(0.8 / 9.8) = --</div>\n            </div>\n            <div class=\"calc-card\">\n                <div class=\"calc-title\">Frequency (f)</div>\n                <div class=\"formula-box\">f = 1 / T</div>\n                <div class=\"plug-box\" id=\"calcFreq\">Plug: 1 / 1.79 = --</div>\n            </div>\n            <div class=\"calc-card\">\n                <div class=\"calc-title\">Angular Acceleration (&alpha;)</div>\n                <div class=\"formula-box\">&alpha; = -(g / L) &middot; sin(&theta;)</div>\n                <div class=\"plug-box\" id=\"calcAccel\">Plug: -(9.8 / 0.8) &middot; sin(0.31) = --</div>\n            </div>\n        </div>\n\n        <h3 class=\"panel-heading\" style=\"color:var(--accent-s); margin-top: 25px;\">Live Formula Engine (Active Mass on a Spring Data)</h3>\n        <div class=\"calc-grid\">\n            <div class=\"calc-card\">\n                <div class=\"calc-title\">Period (T)</div>\n                <div class=\"formula-box\">T = 2&pi; &radic;(m / k)</div>\n                <div class=\"plug-box\" id=\"calcSpringPeriod\">Plug: 2&pi; &radic;(0.5 / 25) = --</div>\n            </div>\n            <div class=\"calc-card\">\n                <div class=\"calc-title\">Frequency (f)</div>\n                <div class=\"formula-box\">f = 1 / T</div>\n                <div class=\"plug-box\" id=\"calcSpringFreq\">Plug: 1 / 0.89 = --</div>\n            </div>\n            <div class=\"calc-card\">\n                <div class=\"calc-title\">Restoring Force (F)</div>\n                <div class=\"formula-box\">F = -k &middot; y</div>\n                <div class=\"plug-box\" id=\"calcSpringForce\">Plug: -(25) &middot; (0.00) = --</div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Explanatory Note Panel -->\n    <div class=\"info-panel\">\n        <h3 class=\"panel-heading\">Explanatory Note: Simple Harmonic Motion (SHM)</h3>\n        <p>Simple Harmonic Motion is a special type of periodic motion where the restoring force is directly proportional to the displacement from equilibrium and acts in the direction opposite to that of displacement. Mathematically, it obeys Hooke's Law format: F = -kx (for springs) or torque equivalents for pendulums under small-angle approximations.</p>\n        <p>Key indicators include a sinusoidal oscillation curve over time, conserved total mechanical energy (in the absence of damping), and a constant oscillation period that is independent of amplitude for ideal systems. Adding damping introduces a resistive force proportional to velocity, causing exponential decay of amplitude over time.</p>\n    </div>\n\n    <script>\n        const pCanvas = document.getElementById('pendulumCanvas');\n        const pCtx = pCanvas.getContext('2d');\n        const sCanvas = document.getElementById('springCanvas');\n        const sCtx = sCanvas.getContext('2d');\n\n        let isRunning = true;\n        let time = 0;\n        let lastTimestamp = performance.now();\n\n        const pLengthInput = document.getElementById('pLength');\n        const pLengthValDisplay = document.getElementById('pLengthVal');\n        const pAmplitudeInput = document.getElementById('pAmplitude');\n        const pAmplitudeValDisplay = document.getElementById('pAmplitudeVal');\n        const sMassInput = document.getElementById('sMass');\n        const sMassValDisplay = document.getElementById('sMassVal');\n        const sConstantInput = document.getElementById('sConstant');\n        const sConstantValDisplay = document.getElementById('sConstantVal');\n        const sAmplitudeInput = document.getElementById('sAmplitude');\n        const sAmplitudeValDisplay = document.getElementById('sAmplitudeVal');\n        const dampingInput = document.getElementById('damping');\n        const dampingValDisplay = document.getElementById('dampingVal');\n        const gravityInput = document.getElementById('gravity');\n        const gravityValDisplay = document.getElementById('gravityVal');\n\n        gravityInput.addEventListener('input', () => {\n            gravityValDisplay.innerText = gravityInput.value;\n        });\n\n        pLengthInput.addEventListener('input', () => {\n            pLengthValDisplay.innerText = parseFloat(pLengthInput.value).toFixed(2);\n        });\n\n        pAmplitudeInput.addEventListener('input', () => {\n            pAmplitudeValDisplay.innerText = parseFloat(pAmplitudeInput.value).toFixed(2);\n        });\n\n        sMassInput.addEventListener('input', () => {\n            sMassValDisplay.innerText = parseFloat(sMassInput.value).toFixed(1);\n        });\n\n        sConstantInput.addEventListener('input', () => {\n            sConstantValDisplay.innerText = sConstantInput.value;\n        });\n\n        sAmplitudeInput.addEventListener('input', () => {\n            sAmplitudeValDisplay.innerText = parseFloat(sAmplitudeInput.value).toFixed(2);\n        });\n\n        dampingInput.addEventListener('input', () => {\n            dampingValDisplay.innerText = parseFloat(dampingInput.value).toFixed(2);\n        });\n\n        function loop(timestamp) {\n            const dt = isRunning ? (timestamp - lastTimestamp) / 1000 : 0;\n            time += Math.min(dt, 0.1);\n            lastTimestamp = timestamp;\n\n            updateAndRender();\n            requestAnimationFrame(loop);\n        }\n\n        function updateAndRender() {\n            const l = parseFloat(pLengthInput.value);\n            const Ap = parseFloat(pAmplitudeInput.value);\n            const g = parseFloat(gravityInput.value);\n            const gamma = parseFloat(dampingInput.value);\n\n            const m = parseFloat(sMassInput.value);\n            const k = parseFloat(sConstantInput.value);\n            const As = parseFloat(sAmplitudeInput.value);\n\n            // Pendulum Physics with Damping & Arc Linear Amplitude Conversion\n            const thetaMax = Math.min(Ap / l, Math.PI / 2);\n            const omegaP = Math.sqrt(g / l);\n            const periodP = 2 * Math.PI / omegaP;\n            \n            const dampedOmegaP = Math.sqrt(Math.max(0, (g / l) - (gamma * gamma / 4)));\n            const currentTheta = thetaMax * Math.exp(-gamma * time / 2) * Math.cos(dampedOmegaP * time);\n            const currentArcPos = l * currentTheta;\n\n            // Spring Physics with Damping\n            const omegaS = Math.sqrt(k / m);\n            const periodS = 2 * Math.PI / omegaS;\n            const dampedOmegaS = Math.sqrt(Math.max(0, (k / m) - (gamma * gamma / 4)));\n            const currentY = As * Math.exp(-gamma * time / 2) * Math.cos(dampedOmegaS * time);\n\n            // ================= RENDER PENDULUM =================\n            pCtx.clearRect(0, 0, pCanvas.width, pCanvas.height);\n            const pPivotX = pCanvas.width / 2;\n            const pPivotY = 45;\n            const pScale = 170; \n            \n            const bobX = pPivotX + l * pScale * Math.sin(currentTheta);\n            const bobY = pPivotY + l * pScale * Math.cos(currentTheta);\n\n            // Support Mount Header\n            pCtx.fillStyle = '#334155';\n            pCtx.fillRect(pPivotX - 55, pPivotY - 18, 110, 18);\n            pCtx.strokeStyle = '#64748b';\n            pCtx.lineWidth = 1.5;\n            pCtx.strokeRect(pPivotX - 55, pPivotY - 18, 110, 18);\n\n            // Equilibrium Vertical Reference Line (Amber)\n            pCtx.strokeStyle = '#fbbf24';\n            pCtx.lineWidth = 1.5;\n            pCtx.setLineDash([5, 5]);\n            pCtx.beginPath();\n            pCtx.moveTo(pPivotX, pPivotY);\n            pCtx.lineTo(pPivotX, pPivotY + l * pScale + 30);\n            pCtx.stroke();\n            pCtx.setLineDash([]);\n\n            // Left and Right Dotted Boundary Lines for Pendulum String at Max Amplitude\n            pCtx.strokeStyle = 'rgba(244, 63, 94, 0.5)';\n            pCtx.lineWidth = 1.5;\n            pCtx.setLineDash([4, 4]);\n            pCtx.beginPath();\n            // Left extreme string limit\n            pCtx.moveTo(pPivotX, pPivotY);\n            pCtx.lineTo(pPivotX + l * pScale * Math.sin(-thetaMax), pPivotY + l * pScale * Math.cos(-thetaMax));\n            // Right extreme string limit\n            pCtx.moveTo(pPivotX, pPivotY);\n            pCtx.lineTo(pPivotX + l * pScale * Math.sin(thetaMax), pPivotY + l * pScale * Math.cos(thetaMax));\n            pCtx.stroke();\n            pCtx.setLineDash([]);\n\n            // Full Pendulum Bob Path Arc at the bottom\n            pCtx.strokeStyle = 'rgba(244, 63, 94, 0.4)';\n            pCtx.lineWidth = 2.5;\n            pCtx.beginPath();\n            pCtx.arc(pPivotX, pPivotY, l * pScale, Math.PI / 2 - thetaMax, Math.PI / 2 + thetaMax);\n            pCtx.stroke();\n\n            // Amplitude Indicator Arc at the hinge/pivot point\n            pCtx.strokeStyle = '#f43f5e';\n            pCtx.lineWidth = 2.5;\n            pCtx.beginPath();\n            pCtx.arc(pPivotX, pPivotY, 65, Math.PI/2 - thetaMax, Math.PI/2 + thetaMax);\n            pCtx.stroke();\n\n            // Amplitude linear distance tag\n            pCtx.fillStyle = '#f43f5e';\n            pCtx.font = 'bold 10px Inter, sans-serif';\n            pCtx.textAlign = 'center';\n            pCtx.fillText(`+A (${Ap}m)`, pPivotX + 55, pPivotY + 35);\n\n            // String line\n            pCtx.strokeStyle = '#94a3b8';\n            pCtx.lineWidth = 2.5;\n            pCtx.beginPath();\n            pCtx.moveTo(pPivotX, pPivotY);\n            pCtx.lineTo(bobX, bobY);\n            pCtx.stroke();\n\n            // Bob\n            pCtx.fillStyle = '#38bdf8';\n            pCtx.beginPath();\n            pCtx.arc(bobX, bobY, 15, 0, 2 * Math.PI);\n            pCtx.fill();\n            pCtx.strokeStyle = '#bae6fd';\n            pCtx.lineWidth = 2.5;\n            pCtx.stroke();\n\n            // Real-time linear position readout directly above the bob\n            pCtx.fillStyle = '#f1f5f9';\n            pCtx.font = 'bold 11px Inter, sans-serif';\n            pCtx.textAlign = 'center';\n            pCtx.fillText(`${currentArcPos.toFixed(2)}m`, bobX, bobY - 22);\n\n            // Pivot Pin\n            pCtx.fillStyle = '#f8fafc';\n            pCtx.beginPath();\n            pCtx.arc(pPivotX, pPivotY, 5, 0, 2 * Math.PI);\n            pCtx.fill();\n\n\n            // ================= RENDER MASS-SPRING =================\n            sCtx.clearRect(0, 0, sCanvas.width, sCanvas.height);\n            const sSupportX = sCanvas.width / 2;\n            const sSupportY = 35;\n            const equilibriumY = 140;\n            const sScale = 1100; \n            \n            const currentSpringBottomY = equilibriumY + currentY * sScale;\n            const maxAmplitudeTopY = equilibriumY - As * sScale;\n            const maxAmplitudeBottomY = equilibriumY + As * sScale;\n\n            // Support Structure Mount Header\n            sCtx.fillStyle = '#334155';\n            sCtx.fillRect(sSupportX - 55, sSupportY - 18, 110, 18);\n            sCtx.strokeStyle = '#64748b';\n            sCtx.lineWidth = 1.5;\n            sCtx.strokeRect(sSupportX - 55, sSupportY - 18, 110, 18);\n\n            // Equilibrium Position Reference Line (Amber)\n            sCtx.strokeStyle = '#fbbf24';\n            sCtx.lineWidth = 1.5;\n            sCtx.setLineDash([5, 5]);\n            sCtx.beginPath();\n            sCtx.moveTo(sSupportX - 85, equilibriumY);\n            sCtx.lineTo(sSupportX + 85, equilibriumY);\n            sCtx.stroke();\n\n            // Amplitude Maximum Bound Lines (Rose)\n            sCtx.strokeStyle = 'rgba(244, 63, 94, 0.45)';\n            sCtx.beginPath();\n            sCtx.moveTo(sSupportX - 70, maxAmplitudeTopY);\n            sCtx.lineTo(sSupportX + 70, maxAmplitudeTopY);\n            sCtx.moveTo(sSupportX - 70, maxAmplitudeBottomY);\n            sCtx.lineTo(sSupportX + 70, maxAmplitudeBottomY);\n            sCtx.stroke();\n            sCtx.setLineDash([]);\n\n            // Spring Coils Drawing Loop\n            sCtx.strokeStyle = '#94a3b8';\n            sCtx.lineWidth = 2.5;\n            sCtx.beginPath();\n            sCtx.moveTo(sSupportX, sSupportY);\n\n            const coils = 14;\n            const coilSpan = currentSpringBottomY - sSupportY;\n            const coilStep = coilSpan / coils;\n            for (let i = 0; i < coils; i++) {\n                const xOffset = (i % 2 === 0) ? 15 : -15;\n                sCtx.lineTo(sSupportX + xOffset, sSupportY + (i + 0.5) * coilStep);\n            }\n            sCtx.lineTo(sSupportX, currentSpringBottomY);\n            sCtx.stroke();\n\n            // Mass Block\n            sCtx.fillStyle = '#34d399';\n            sCtx.fillRect(sSupportX - 35, currentSpringBottomY, 70, 42);\n            sCtx.strokeStyle = '#a7f3d0';\n            sCtx.lineWidth = 2.5;\n            sCtx.strokeRect(sSupportX - 35, currentSpringBottomY, 70, 42);\n\n            // Mass text inside block\n            sCtx.fillStyle = '#0f172a';\n            sCtx.font = 'bold 11px Inter, sans-serif';\n            sCtx.textAlign = 'center';\n            sCtx.fillText(`${m} kg`, sSupportX, currentSpringBottomY + 20);\n            \n            // External Live Position Tag hovering right next to the mass block\n            sCtx.fillStyle = '#34d399';\n            sCtx.font = 'bold 11px Inter, sans-serif';\n            sCtx.textAlign = 'left';\n            sCtx.fillText(`y = ${currentY.toFixed(3)}m`, sSupportX + 42, currentSpringBottomY + 24);\n\n            // Amplitude Limit labels on the side\n            sCtx.fillStyle = '#f43f5e';\n            sCtx.font = '10px Inter, sans-serif';\n            sCtx.textAlign = 'right';\n            sCtx.fillText(`+A (${As}m)`, sSupportX - 75, maxAmplitudeTopY + 3);\n            sCtx.fillText(`-A`, sSupportX - 75, maxAmplitudeBottomY + 3);\n            sCtx.textAlign = 'left';\n\n            // --- UPDATE STATS DOM READOUTS ---\n            document.getElementById('pPosDisplay').innerText = currentArcPos.toFixed(2) + ' m';\n            document.getElementById('pAmplitudeDisplay').innerText = Ap.toFixed(2) + ' m';\n            document.getElementById('pPeriodDisplay').innerText = periodP.toFixed(2) + ' s';\n\n            document.getElementById('sPositionDisplay').innerText = currentY.toFixed(3) + ' m';\n            document.getElementById('sAmplitudeDisplay').innerText = As.toFixed(3) + ' m';\n            document.getElementById('sPeriodDisplay').innerText = periodS.toFixed(2) + ' s';\n\n            // --- UPDATE LIVE CALCULATIONS PLUGIN PLUGS ---\n            const freqP = 1 / periodP;\n            const currentAngularAccel = -(g / l) * Math.sin(currentTheta);\n\n            document.getElementById('calcPeriod').innerHTML = `Plug: 2&pi; &radic;(${l} / ${g}) = <b>${periodP.toFixed(2)} s</b>`;\n            document.getElementById('calcFreq').innerHTML = `Plug: 1 / ${periodP.toFixed(2)} = <b>${freqP.toFixed(2)} Hz</b>`;\n            document.getElementById('calcAccel').innerHTML = `Plug: -(${g} / ${l}) &middot; sin(${currentTheta.toFixed(2)}) = <b>${currentAngularAccel.toFixed(2)} rad/s\u00b2</b>`;\n\n            // Mass-Spring Calculations Update\n            const freqS = 1 / periodS;\n            const currentSpringForce = -k * currentY;\n\n            document.getElementById('calcSpringPeriod').innerHTML = `Plug: 2&pi; &radic;(${m} / ${k}) = <b>${periodS.toFixed(2)} s</b>`;\n            document.getElementById('calcSpringFreq').innerHTML = `Plug: 1 / ${periodS.toFixed(2)} = <b>${freqS.toFixed(2)} Hz</b>`;\n            document.getElementById('calcSpringForce').innerHTML = `Plug: -(${k}) &middot; (${currentY.toFixed(3)}) = <b>${currentSpringForce.toFixed(2)} N</b>`;\n        }\n\n        // Button Controls Handlers\n        const toggleBtn = document.getElementById('toggleBtn');\n        const resetBtn = document.getElementById('resetBtn');\n\n        toggleBtn.addEventListener('click', () => {\n            isRunning = !isRunning;\n            toggleBtn.innerText = isRunning ? 'Pause Simulation' : 'Resume Simulation';\n            if (isRunning) lastTimestamp = performance.now();\n        });\n\n        resetBtn.addEventListener('click', () => {\n            time = 0;\n        });\n\n        requestAnimationFrame(loop);\n    </script>\n</body>\n</html>\n",
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-archimedes-buoyancy",
    title: "Archimedes Principle, Flotation & Buoyancy",
    tagline: "Fluid displacement, buoyant force, density ratios, and submerged mass balance",
    discipline: "physics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM"],
    standards: ["MS-PS1-2", "HS-PS1-5", "AP Physics 2 (Unit 1)"],
    description: "Immerse objects of diverse densities in variable fluid media. Observe buoyant upward force, displaced liquid volume, apparent weight, and sinking versus floating equilibrium conditions.",
    learningObjectives: [
      "Demonstrate that buoyant force equals the weight of the fluid displaced (Fb = Ï * V * g)",
      "Predict floating, sinking, or neutral buoyancy from object vs fluid density ratios",
      "Measure apparent weight changes on submerged scales"
    ],
    thumbnailGradient: "from-teal-600 via-cyan-600 to-blue-600",
    badgeColor: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    iconName: "Waves",
    rating: 4.9,
    reviewCount: 34,
    teacherCount: 104,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive fluid tank with volume displacement graduation",
      "Real-time spring scale weight readout",
      "Adjustable fluid density (water, oil, mercury, custom)",
      "Floating stability and neutral buoyancy demonstrations"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-buoy-1",
        title: "Neutral Buoyancy Equilibrium",
        instruction: "Adjust object mass and volume so the object remains completely suspended mid-tank without sinking to bottom.",
        targetMetric: "Net Force",
        targetValue: 0,
        tolerance: 0.1,
        currentValueKey: "netForce",
        rewardBadge: "Hydrostatic Expert"
      }
    ],
    previewFacts: [
      "An object floats when its average density is less than the density of the surrounding fluid",
      "Apparent weight in fluid equals actual dry weight minus the buoyant force"
    ],
    isHtmlApp: true,
    htmlUrl: "https://archimedes-floatation-buoyancy.netlify.app/",
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-refraction-refractive-index",
    title: "Refraction & Snell's Law Optics Lab",
    tagline: "Light wave propagation across media boundaries, critical angles, and total internal reflection",
    discipline: "physics",
    gradeLevel: ["High School (9-12)", "AP / IB STEM"],
    standards: ["HS-PS4-2", "AP Physics 2 (Unit 10)", "NGSS SEP-5"],
    description: "Direct laser light rays through glass prisms, water, and optical media. Measure incident and refracted angles, verify Snell's Law (n1*sinÎ¸1 = n2*sinÎ¸2), and explore total internal reflection.",
    learningObjectives: [
      "Apply Snell's Law to calculate refractive indices and bending angles",
      "Determine the critical angle for total internal reflection between dense and rare media",
      "Observe light speed changes as photons enter materials of higher optical density"
    ],
    thumbnailGradient: "from-blue-600 via-indigo-500 to-purple-600",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    iconName: "Compass",
    rating: 5.0,
    reviewCount: 43,
    teacherCount: 130,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive 360-degree laser angle emitter",
      "Precision protractor overlay and normal axis",
      "Variable media (Air, Water, Glass, Diamond, Mystery)",
      "Total internal reflection critical angle indicator"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-refr-1",
        title: "Find the Mystery Index",
        instruction: "Measure incident and refracted angles to determine the refractive index of the unknown material.",
        targetMetric: "Refractive Index (n)",
        targetValue: 1.52,
        tolerance: 0.02,
        currentValueKey: "refractiveIndex",
        rewardBadge: "Optics Master"
      }
    ],
    previewFacts: [
      "Light bends toward the normal line when passing into an optically denser medium",
      "Total internal reflection only occurs when light travels from a higher to a lower index medium"
    ],
    isHtmlApp: true,
    htmlUrl: "https://refraction-refractive-index-simulator.netlify.app/",
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-motion-projectile",
    title: "Kinematics: 2D Projectile Motion Lab",
    tagline: "Launch angles, initial velocities, air drag, parabolic trajectories, and range calculation",
    discipline: "physics",
    gradeLevel: ["High School (9-12)", "AP / IB STEM"],
    standards: ["HS-PS2-1", "AP Physics 1 (Unit 1)", "NGSS SEP-5"],
    description: "Launch cannon projectiles across customizable gravitational fields. Decompose 2D velocity vectors into independent horizontal (vx) and vertical (vy) components, with real-time flight time and apex metrics.",
    learningObjectives: [
      "Demonstrate independence of horizontal motion (constant velocity) and vertical motion (constant acceleration g)",
      "Verify that 45 degrees provides maximum range in vacuum conditions",
      "Analyze effects of air resistance on terminal velocity and trajectory asymmetry"
    ],
    thumbnailGradient: "from-orange-600 via-red-600 to-pink-600",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    iconName: "Target",
    rating: 5.0,
    reviewCount: 65,
    teacherCount: 190,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Real-time parabolic trajectory trace with vector overlays",
      "Adjustable launch height, angle, velocity, and gravity",
      "Interactive landing target with bulls-eye accuracy score",
      "Flight time, max height, and range readouts"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-proj-1",
        title: "Direct Target Strike",
        instruction: "Hit a target positioned 45 meters away with a launch height of 5 meters on the first attempt.",
        targetMetric: "Target Distance",
        targetValue: 45,
        tolerance: 0.5,
        currentValueKey: "distance",
        rewardBadge: "Marksman Physicist"
      }
    ],
    previewFacts: [
      "Complementary launch angles (e.g. 30Â° and 60Â°) produce identical horizontal range in a vacuum",
      "At the apex of flight, the vertical velocity component is momentary zero"
    ],
    isHtmlApp: true,
    htmlUrl: "https://motion-of-a-projectile.netlify.app/",
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kinematics: 2D Dynamic Projectile Motion Telemetry Lab</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
    body {
      background: #020617;
      color: #f8fafc;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      padding: 12px;
      gap: 12px;
      overflow-x: hidden;
    }
    .header-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #0f172a;
      border: 1px solid #1e293b;
      padding: 10px 16px;
      border-radius: 12px;
    }
    .title-group h1 { font-size: 15px; font-weight: 700; color: #38bdf8; display: flex; align-items: center; gap: 8px; }
    .badge { font-size: 11px; padding: 3px 8px; border-radius: 6px; background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); }
    .stage-container {
      position: relative;
      background: #090d16;
      border: 1px solid #1e293b;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }
    canvas { width: 100%; height: 360px; display: block; }
    .vector-legend {
      position: absolute;
      top: 12px;
      left: 12px;
      background: rgba(15, 23, 42, 0.88);
      backdrop-filter: blur(8px);
      border: 1px solid #334155;
      border-radius: 10px;
      padding: 6px 12px;
      font-size: 11px;
      font-family: monospace;
      display: flex;
      gap: 12px;
      align-items: center;
      color: #cbd5e1;
    }
    .dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }
    .telemetry-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
      gap: 10px;
    }
    .metric-card {
      background: #0f172a;
      border: 1px solid #1e293b;
      border-radius: 12px;
      padding: 10px 12px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .metric-card.highlight { border-color: rgba(56, 189, 248, 0.4); background: rgba(56, 189, 248, 0.05); }
    .metric-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.5px; color: #94a3b8; font-weight: 600; }
    .metric-value { font-size: 20px; font-weight: 700; font-family: monospace; color: #38bdf8; }
    .metric-unit { font-size: 11px; color: #64748b; font-weight: normal; margin-left: 3px; }
    .controls-panel {
      background: #0f172a;
      border: 1px solid #1e293b;
      border-radius: 14px;
      padding: 14px 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .controls-title { font-size: 12px; font-weight: 700; color: #cbd5e1; display: flex; justify-content: space-between; align-items: center; }
    .controls-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 14px;
    }
    .control-row { display: flex; flex-direction: column; gap: 6px; }
    .control-header { display: flex; justify-content: space-between; font-size: 11px; color: #94a3b8; }
    .control-header span.val { font-family: monospace; font-weight: 700; color: #f8fafc; }
    input[type=range] {
      width: 100%;
      height: 6px;
      background: #1e293b;
      border-radius: 4px;
      outline: none;
      -webkit-appearance: none;
      cursor: pointer;
    }
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #38bdf8;
      cursor: pointer;
      box-shadow: 0 0 10px rgba(56, 189, 248, 0.6);
    }
    .btn-toolbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }
    .btn-group { display: flex; gap: 8px; }
    button {
      padding: 8px 16px;
      border-radius: 10px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      border: 1px solid transparent;
      transition: all 0.15s ease;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .btn-primary { background: #38bdf8; color: #090d16; }
    .btn-primary:hover { background: #7dd3fc; }
    .btn-secondary { background: #1e293b; color: #e2e8f0; border-color: #334155; }
    .btn-secondary:hover { background: #334155; }
    button:disabled { opacity: 0.5; cursor: not-allowed; }
  </style>
</head>
<body>

  <div class="header-bar">
    <div class="title-group">
      <h1>Kinematics: 2D Dynamic Projectile Motion Telemetry</h1>
    </div>
    <div class="badge">Independent Elevation Stabilized</div>
  </div>

  <div class="stage-container">
    <canvas id="simCanvas"></canvas>
    <div class="vector-legend">
      <span><span class="dot" style="background:#38bdf8"></span> Resultant v</span>
      <span><span class="dot" style="background:#10b981"></span> vx (Horizontal)</span>
      <span><span class="dot" style="background:#f59e0b"></span> vy (Vertical)</span>
    </div>
  </div>

  <div class="telemetry-grid">
    <div class="metric-card highlight">
      <span class="metric-label">Launch Height (hâ‚€)</span>
      <div class="metric-value" style="color:#38bdf8"><span id="mH0">15.0</span><span class="metric-unit">m</span></div>
    </div>
    <div class="metric-card">
      <span class="metric-label">Max Apex Height</span>
      <div class="metric-value" style="color:#10b981"><span id="mMaxH">15.0</span><span class="metric-unit">m</span></div>
    </div>
    <div class="metric-card">
      <span class="metric-label">Horizontal Range</span>
      <div class="metric-value" style="color:#f59e0b"><span id="mRange">0.0</span><span class="metric-unit">m</span></div>
    </div>
    <div class="metric-card">
      <span class="metric-label">Flight Air Time</span>
      <div class="metric-value" style="color:#c084fc"><span id="mTime">0.00</span><span class="metric-unit">s</span></div>
    </div>
    <div class="metric-card">
      <span class="metric-label">Total Mech Energy</span>
      <div class="metric-value" style="color:#f43f5e"><span id="mEnergy">0</span><span class="metric-unit">J</span></div>
    </div>
  </div>

  <div class="controls-panel">
    <div class="controls-title">
      <span>Independent Laboratory Parameter Controls</span>
      <span style="color:#10b981;font-family:monospace;font-size:10px;">hâ‚€ decoupled from vâ‚€</span>
    </div>
    <div class="controls-grid">
      <div class="control-row">
        <div class="control-header">
          <span>Initial Velocity (vâ‚€)</span>
          <span class="val" id="valV0">35 m/s</span>
        </div>
        <input type="range" id="sliderV0" min="5" max="65" step="1" value="35">
      </div>

      <div class="control-row">
        <div class="control-header">
          <span>Launch Platform Height (hâ‚€)</span>
          <span class="val" id="valH0">15 m</span>
        </div>
        <input type="range" id="sliderH0" min="0" max="60" step="1" value="15">
      </div>

      <div class="control-row">
        <div class="control-header">
          <span>Launch Angle (Î¸)</span>
          <span class="val" id="valAngle">45Â°</span>
        </div>
        <input type="range" id="sliderAngle" min="0" max="90" step="1" value="45">
      </div>

      <div class="control-row">
        <div class="control-header">
          <span>Gravitational Field (g)</span>
          <span class="val" id="valG">9.81 m/sÂ²</span>
        </div>
        <input type="range" id="sliderG" min="1.6" max="25" step="0.1" value="9.81">
      </div>

      <div class="control-row">
        <div class="control-header">
          <span>Air Resistance (k)</span>
          <span class="val" id="valK">0.002</span>
        </div>
        <input type="range" id="sliderK" min="0" max="0.01" step="0.001" value="0.002">
      </div>

      <div class="control-row">
        <div class="control-header">
          <span>Projectile Mass (m)</span>
          <span class="val" id="valM">2.0 kg</span>
        </div>
        <input type="range" id="sliderM" min="0.5" max="10" step="0.5" value="2.0">
      </div>
    </div>
  </div>

  <div class="btn-toolbar">
    <div class="btn-group">
      <button class="btn-primary" id="btnLaunch">â–¶ Launch Trajectory</button>
      <button class="btn-secondary" id="btnReset">â†º Reset Lab</button>
    </div>
  </div>

  <script>
    const canvas = document.getElementById('simCanvas');
    const ctx = canvas.getContext('2d');

    // Controls
    const sliderV0 = document.getElementById('sliderV0');
    const sliderH0 = document.getElementById('sliderH0');
    const sliderAngle = document.getElementById('sliderAngle');
    const sliderG = document.getElementById('sliderG');
    const sliderK = document.getElementById('sliderK');
    const sliderM = document.getElementById('sliderM');

    // Displays
    const valV0 = document.getElementById('valV0');
    const valH0 = document.getElementById('valH0');
    const valAngle = document.getElementById('valAngle');
    const valG = document.getElementById('valG');
    const valK = document.getElementById('valK');
    const valM = document.getElementById('valM');

    const mH0 = document.getElementById('mH0');
    const mMaxH = document.getElementById('mMaxH');
    const mRange = document.getElementById('mRange');
    const mTime = document.getElementById('mTime');
    const mEnergy = document.getElementById('mEnergy');

    const btnLaunch = document.getElementById('btnLaunch');
    const btnReset = document.getElementById('btnReset');

    let state = {
      x: 0,
      y: 15,
      vx: 0,
      vy: 0,
      t: 0,
      maxH: 15,
      path: [],
      isPlaying: false,
      isComplete: false,
      animId: null
    };

    let ghostPaths = [];

    function resize() {
      canvas.width = canvas.clientWidth * window.devicePixelRatio;
      canvas.height = canvas.clientHeight * window.devicePixelRatio;
      draw();
    }
    window.addEventListener('resize', resize);

    function getParams() {
      return {
        v0: parseFloat(sliderV0.value),
        h0: parseFloat(sliderH0.value),
        angle: parseFloat(sliderAngle.value),
        g: parseFloat(sliderG.value),
        k: parseFloat(sliderK.value),
        m: parseFloat(sliderM.value)
      };
    }

    function updateParamLabels() {
      const p = getParams();
      valV0.innerText = p.v0 + ' m/s';
      valH0.innerText = p.h0 + ' m';
      valAngle.innerText = p.angle + 'Â°';
      valG.innerText = p.g.toFixed(2) + ' m/sÂ²';
      valK.innerText = p.k.toFixed(3);
      valM.innerText = p.m.toFixed(1) + ' kg';
      mH0.innerText = p.h0.toFixed(1);
    }

    function reset() {
      if (state.animId) cancelAnimationFrame(state.animId);
      const p = getParams();
      const rad = p.angle * Math.PI / 180;
      const v0x = p.v0 * Math.cos(rad);
      const v0y = p.v0 * Math.sin(rad);

      // Explicitly set initial y to launch platform height h0 regardless of velocity
      state.x = 0;
      state.y = p.h0;
      state.vx = v0x;
      state.vy = v0y;
      state.t = 0;
      state.maxH = p.h0;
      state.path = [{ x: 0, y: p.h0 }];
      state.isPlaying = false;
      state.isComplete = false;

      updateTelemetry(0, p.h0, v0x, v0y);
      draw();
    }

    function updateTelemetry(x, y, vx, vy) {
      const p = getParams();
      const vMag = Math.sqrt(vx * vx + vy * vy);
      const ke = 0.5 * p.m * vMag * vMag;
      const pe = p.m * p.g * Math.max(0, y);
      state.maxH = Math.max(state.maxH, y);

      mH0.innerText = p.h0.toFixed(1);
      mMaxH.innerText = state.maxH.toFixed(1);
      mRange.innerText = x.toFixed(1);
      mTime.innerText = state.t.toFixed(2);
      mEnergy.innerText = Math.round(ke + pe);
    }

    function launch() {
      if (state.animId) cancelAnimationFrame(state.animId);
      const p = getParams();
      const rad = p.angle * Math.PI / 180;

      state.x = 0;
      state.y = p.h0;
      state.vx = p.v0 * Math.cos(rad);
      state.vy = p.v0 * Math.sin(rad);
      state.t = 0;
      state.maxH = p.h0;
      state.path = [{ x: 0, y: p.h0 }];
      state.isPlaying = true;
      state.isComplete = false;

      btnLaunch.innerText = "â–¶ In Flight...";
      btnLaunch.disabled = true;

      const dt = 0.025;

      function step() {
        if (state.isComplete) return;

        const vMag = Math.sqrt(state.vx * state.vx + state.vy * state.vy);
        const dragFx = -p.k * vMag * state.vx;
        const dragFy = -p.k * vMag * state.vy;

        const ax = dragFx / p.m;
        const ay = -p.g + dragFy / p.m;

        state.vx += ax * dt;
        state.vy += ay * dt;
        state.x += state.vx * dt;
        state.y += state.vy * dt;
        state.t += dt;

        if (state.y <= 0 && state.t > 0.04) {
          state.y = 0;
          state.isComplete = true;
          state.isPlaying = false;
          btnLaunch.innerText = "â–¶ Launch Trajectory";
          btnLaunch.disabled = false;
          ghostPaths.push([...state.path]);
          if (ghostPaths.length > 3) ghostPaths.shift();
        }

        state.path.push({ x: state.x, y: state.y });
        updateTelemetry(state.x, state.y, state.vx, state.vy);
        draw();

        if (!state.isComplete) {
          state.animId = requestAnimationFrame(step);
        }
      }

      state.animId = requestAnimationFrame(step);
    }

    function draw() {
      const w = canvas.width;
      const h = canvas.height;
      const dpr = window.devicePixelRatio || 1;

      ctx.clearRect(0, 0, w, h);

      const groundH = 45 * dpr;
      const originX = 55 * dpr;
      const originY = h - groundH;
      const scaleX = (w - 100 * dpr) / 220;
      const scaleY = (h - 100 * dpr) / 100;

      // Sky
      const skyGrad = ctx.createLinearGradient(0, 0, 0, h - groundH);
      skyGrad.addColorStop(0, '#090d16');
      skyGrad.addColorStop(1, '#1e293b');
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, w, h - groundH);

      // Ground
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(0, h - groundH, w, groundH);
      ctx.fillStyle = '#10b981';
      ctx.fillRect(0, h - groundH, w, 4 * dpr);

      // Grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
      ctx.lineWidth = 1 * dpr;
      for (let m = 20; m <= 220; m += 20) {
        const gx = originX + m * scaleX;
        ctx.beginPath();
        ctx.moveTo(gx, 0);
        ctx.lineTo(gx, originY);
        ctx.stroke();

        ctx.fillStyle = '#64748b';
        ctx.font = (10 * dpr) + 'px monospace';
        ctx.fillText(m + 'm', gx - 8 * dpr, originY + 16 * dpr);
      }

      for (let y = 10; y <= 90; y += 10) {
        const gy = originY - y * scaleY;
        ctx.beginPath();
        ctx.moveTo(originX, gy);
        ctx.lineTo(w, gy);
        ctx.stroke();

        ctx.fillStyle = '#64748b';
        ctx.font = (10 * dpr) + 'px monospace';
        ctx.fillText(y + 'm', 10 * dpr, gy + 4 * dpr);
      }

      const p = getParams();
      const platformW = 34 * dpr;
      const platformTopY = originY - p.h0 * scaleY;

      // Launch Platform (firmly fixed at h0)
      ctx.fillStyle = '#334155';
      ctx.fillRect(originX - platformW, platformTopY, platformW, p.h0 * scaleY);
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 2 * dpr;
      ctx.strokeRect(originX - platformW, platformTopY, platformW, p.h0 * scaleY);

      ctx.fillStyle = '#38bdf8';
      ctx.fillRect(originX - platformW - 2 * dpr, platformTopY - 2 * dpr, platformW + 4 * dpr, 4 * dpr);

      // Height dimension indicator
      if (p.h0 > 0) {
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.6)';
        ctx.lineWidth = 1.5 * dpr;
        ctx.setLineDash([3 * dpr, 3 * dpr]);
        ctx.beginPath();
        ctx.moveTo(originX - platformW - 8 * dpr, originY);
        ctx.lineTo(originX - platformW - 8 * dpr, platformTopY);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Ghost paths
      ghostPaths.forEach((path, idx) => {
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)';
        ctx.lineWidth = 1.5 * dpr;
        ctx.setLineDash([4 * dpr, 4 * dpr]);
        ctx.beginPath();
        ctx.moveTo(originX, originY - path[0].y * scaleY);
        path.forEach(pt => ctx.lineTo(originX + pt.x * scaleX, originY - pt.y * scaleY));
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Active Path
      if (state.path.length > 1) {
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 3 * dpr;
        ctx.beginPath();
        ctx.moveTo(originX, originY - state.path[0].y * scaleY);
        for (const pt of state.path) {
          ctx.lineTo(originX + pt.x * scaleX, originY - pt.y * scaleY);
        }
        ctx.stroke();
      }

      // Projectile Coordinates
      const projPx = originX + state.x * scaleX;
      const projPy = originY - state.y * scaleY;

      // Cannon
      const rad = p.angle * Math.PI / 180;
      ctx.save();
      ctx.translate(originX, platformTopY);
      ctx.rotate(-rad);
      ctx.fillStyle = '#94a3b8';
      ctx.fillRect(0, -5 * dpr, 26 * dpr, 10 * dpr);
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 2 * dpr;
      ctx.strokeRect(0, -5 * dpr, 26 * dpr, 10 * dpr);
      ctx.restore();

      ctx.fillStyle = '#64748b';
      ctx.beginPath();
      ctx.arc(originX, platformTopY, 8 * dpr, 0, Math.PI * 2);
      ctx.fill();

      // Projectile Ball
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.arc(projPx, projPy, 6 * dpr, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2 * dpr;
      ctx.stroke();

      // Live Vectors
      if (state.isPlaying) {
        const vxLen = state.vx * 0.7 * dpr;
        const vyLen = -state.vy * 0.7 * dpr;

        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 2 * dpr;
        ctx.beginPath();
        ctx.moveTo(projPx, projPy);
        ctx.lineTo(projPx + vxLen, projPy);
        ctx.stroke();

        ctx.strokeStyle = '#f59e0b';
        ctx.beginPath();
        ctx.moveTo(projPx, projPy);
        ctx.lineTo(projPx, projPy + vyLen);
        ctx.stroke();

        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2.5 * dpr;
        ctx.beginPath();
        ctx.moveTo(projPx, projPy);
        ctx.lineTo(projPx + vxLen, projPy + vyLen);
        ctx.stroke();
      }
    }

    [sliderV0, sliderH0, sliderAngle, sliderG, sliderK, sliderM].forEach(slider => {
      slider.addEventListener('input', () => {
        updateParamLabels();
        if (!state.isPlaying) reset();
      });
    });

    btnLaunch.addEventListener('click', launch);
    btnReset.addEventListener('click', reset);

    updateParamLabels();
    resize();
    reset();
  </script>
</body>
</html>`,
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-photosynthesis-plant-growth",
    title: "Photosynthesis & Cellular Energy Dynamics",
    tagline: "Light intensity, CO2 concentration, stomatal conductance, and biomass accumulation",
    discipline: "biology",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM"],
    standards: ["HS-LS1-5", "HS-LS2-3", "AP Biology (Unit 3)"],
    description: "Simulate photochemical light reactions and the Calvin cycle in plant cells. Adjust photon lux, ambient carbon dioxide ppm, temperature, and water availability to optimize glucose production rates.",
    learningObjectives: [
      "Model how limiting factors (light, CO2, temperature) govern photosynthetic rate curves",
      "Connect photon absorption by chlorophyll to oxygen bubble evolution and ATP synthesis",
      "Understand enzyme denaturation at supra-optimal temperature thresholds"
    ],
    thumbnailGradient: "from-emerald-600 via-green-500 to-teal-600",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    iconName: "Leaf",
    rating: 4.9,
    reviewCount: 41,
    teacherCount: 122,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Animated chloroplast and cellular respiration stage",
      "Live O2 production bubble counter and glucose output meter",
      "Limiting factor rate curve grapher",
      "Multi-variable environmental control suite"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-photo-1",
        title: "Maximum Carbon Fixation",
        instruction: "Achieve the peak oxygen production rate by identifying optimal light and CO2 saturation points.",
        targetMetric: "O2 Rate (bubbles/min)",
        targetValue: 80,
        tolerance: 2,
        currentValueKey: "o2Rate",
        rewardBadge: "Botanical Biochemist"
      }
    ],
    previewFacts: [
      "Photosynthesis converts solar energy into chemical energy stored in glucose bonds: 6CO2 + 6H2O -> C6H12O6 + 6O2",
      "Rate of photosynthesis plateaus once light or carbon dioxide saturation limits RuBisCO enzyme turnover"
    ],
    isHtmlApp: true,
    htmlUrl: "https://photosynthesis-plantgrowth-simulator.netlify.app/",
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-communication-satellite-orbit",
    title: "Orbital Mechanics & Satellite Communications",
    tagline: "Geostationary orbits, Kepler's laws, signal latency, gravitational potential wells",
    discipline: "physics",
    gradeLevel: ["High School (9-12)", "AP / IB STEM"],
    standards: ["HS-ESS1-4", "HS-PS2-4", "AP Physics 1 (Unit 3)"],
    description: "Launch and synchronize communication satellites into Earth orbits. Calculate orbital periods using Kepler's Third Law (T^2 âˆ r^3), maintain geostationary synchronization, and calculate signal transmission latency.",
    learningObjectives: [
      "Calculate orbital velocity v = âˆš(GM/r) for circular orbits at arbitrary altitudes",
      "Explain why geostationary satellites must orbit at ~35,786 km above the equator",
      "Analyze gravitational force variations as a function of inverse-square radial distance"
    ],
    thumbnailGradient: "from-blue-700 via-indigo-800 to-slate-900",
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    iconName: "Globe",
    rating: 5.0,
    reviewCount: 38,
    teacherCount: 112,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Dynamic 2D orbital gravity simulation canvas",
      "Real-time radio link transmission latency display",
      "Earth rotation synchronization indicator",
      "Escape velocity and orbital decay visualizations"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-orbit-1",
        title: "Lock Geostationary Orbit",
        instruction: "Position the satellite so its orbital period precisely matches Earth's 24-hour rotational period.",
        targetMetric: "Period (hours)",
        targetValue: 24,
        tolerance: 0.1,
        currentValueKey: "periodHours",
        rewardBadge: "Aerospace Navigator"
      }
    ],
    previewFacts: [
      "Satellites in lower orbits travel faster and complete revolutions in shorter times than higher orbit satellites",
      "Geostationary satellites remain fixed relative to a ground station, eliminating satellite tracking dish needs"
    ],
    isHtmlApp: true,
    htmlUrl: "https://communication-satelite-in-orbit.netlify.app/",
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-cro-oscilloscope",
    title: "Cathode Ray Oscilloscope (CRO) & Signal Lab",
    tagline: "Time-base generators, volts/div calibration, electron beam deflection, and AC waveform analysis",
    discipline: "physics",
    gradeLevel: ["High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["HS-PS4-5", "AP Physics 2 (Unit 9)", "NGSS SEP-3"],
    description: "Master laboratory test equipment with an authentic virtual dual-trace oscilloscope. Adjust Time/Div and Volts/Div dials, calibrate triggered sweep speeds, and measure sinusoidal, square, and triangular signal frequencies.",
    learningObjectives: [
      "Interpret graticule divisions to calculate AC peak-to-peak voltage and frequency",
      "Explain electrostatic electron beam deflection via X and Y deflection plates",
      "Measure phase shift between two synchronized sinusoidal signals"
    ],
    thumbnailGradient: "from-emerald-700 via-teal-800 to-slate-900",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    iconName: "Activity",
    rating: 5.0,
    reviewCount: 46,
    teacherCount: 135,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive phosphorus CRT screen with graticule grid",
      "Authentic Time/Div and Volts/Div selector controls",
      "Dual-channel signal generator with waveform selectors",
      "X-Y Lissajous figure mode for phase angle measurement"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-cro-1",
        title: "Measure Unknown Signal Frequency",
        instruction: "Calibrate Time/Div to determine the frequency of the input sinusoidal test tone.",
        targetMetric: "Frequency (Hz)",
        targetValue: 250,
        tolerance: 5,
        currentValueKey: "measuredFreq",
        rewardBadge: "Signal Analyst"
      }
    ],
    previewFacts: [
      "The CRO visualizes electrical voltage fluctuations as a function of time",
      "Signal period T is determined by multiplying horizontal divisions per cycle by the Time/Div setting"
    ],
    isHtmlApp: true,
    htmlUrl: "https://cathode-ray-oscilloscope-simulator.netlify.app/",
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-cumulative-frequency-ogive",
    title: "Cumulative Frequency & Ogive Curve Analyzer",
    tagline: "Percentile estimation, quartiles, median calculation, and statistical distribution modeling",
    discipline: "mathematics",
    gradeLevel: ["High School (9-12)", "AP / IB STEM"],
    standards: ["CCSS.MATH.HSS.ID.A.1", "AP Statistics (Unit 1)", "NGSS SEP-4"],
    description: "Construct interactive cumulative frequency distribution tables and smooth S-shaped Ogive curves. Interactively locate medians (Q2), lower quartiles (Q1), upper quartiles (Q3), and interquartile ranges (IQR).",
    learningObjectives: [
      "Plot cumulative frequency against upper class boundaries",
      "Extract median and quartile statistics from visual ogive projections",
      "Calculate 90th percentile thresholds and assess data skewness"
    ],
    thumbnailGradient: "from-indigo-600 via-purple-700 to-slate-900",
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    iconName: "BarChart3",
    rating: 4.8,
    reviewCount: 31,
    teacherCount: 95,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive data frequency table editor",
      "Dynamic smooth Ogive curve plotting with grid snaps",
      "Interactive Q1, Median, Q3, and percentile locator lines",
      "Instant box-and-whisker plot cross-comparison"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-ogive-1",
        title: "Determine Interquartile Range (IQR)",
        instruction: "Use the Ogive projections to find Q3 and Q1, then calculate the precise IQR for the student test scores dataset.",
        targetMetric: "IQR Value",
        targetValue: 24,
        tolerance: 1,
        currentValueKey: "iqr",
        rewardBadge: "Data Statistician"
      }
    ],
    previewFacts: [
      "An ogive curve always slopes upward from left to right because cumulative frequencies never decrease",
      "The median represents the 50th percentile (N/2 value on the vertical cumulative frequency axis)"
    ],
    isHtmlApp: true,
    htmlUrl: "https://cumulative-frequency-ogive-simulator.netlify.app/",
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-plane-mirror-image",
    title: "Plane Mirror Reflection & Geometric Optics",
    tagline: "Law of reflection, ray diagrams, virtual image formation, and lateral inversion",
    discipline: "physics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)"],
    standards: ["MS-PS4-2", "HS-PS4-2", "NGSS SEP-2"],
    description: "Investigate light reflection on flat mirrors. Trace incident and reflected rays with dynamic angle readouts, construct virtual image positions behind the mirror plane, and explore field of view boundaries.",
    learningObjectives: [
      "Verify that angle of incidence equals angle of reflection (Î¸i = Î¸r)",
      "Understand why plane mirror images are virtual, upright, identical size, and equidistant behind the mirror",
      "Construct multi-ray optical diagrams demonstrating the observer's field of view"
    ],
    thumbnailGradient: "from-sky-600 via-cyan-500 to-blue-700",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    iconName: "Compass",
    rating: 4.9,
    reviewCount: 36,
    teacherCount: 108,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Movable light source, object, and observer eye positions",
      "Real-time ray tracing with virtual extension lines",
      "Protractor and angle readout overlays",
      "Multiple mirror configurations and periscope models"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-mirror-1",
        title: "Periscope Target Alignment",
        instruction: "Position two parallel plane mirrors at 45 degree angles to transmit the beam to the observer eye.",
        targetMetric: "Ray Alignment",
        targetValue: 100,
        tolerance: 1,
        currentValueKey: "alignment",
        rewardBadge: "Reflection Virtuoso"
      }
    ],
    previewFacts: [
      "Image distance behind a plane mirror always equals object distance in front of the mirror",
      "Virtual images cannot be projected onto a physical screen because light rays only appear to diverge from them"
    ],
    isHtmlApp: true,
    htmlUrl: "https://plane-mirror-image-simulator.netlify.app/",
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-lunar-phases-orbit",
    title: "Lunar Phases & Celestial Mechanics",
    tagline: "Sun-Earth-Moon geometry, synchronous rotation, waxing/waning cycles, and solar illumination",
    discipline: "physics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)"],
    standards: ["MS-ESS1-1", "HS-ESS1-4", "NGSS SEP-2"],
    description: "Explore the 29.5-day synodic lunar month from dual synchronized perspectives: top-down space view of the Moon orbiting Earth, and the terrestrial view seen by observers on Earth.",
    learningObjectives: [
      "Identify the 8 primary lunar phases (New Moon, Waxing Crescent, First Quarter, Waxing Gibbous, Full Moon, Waning Gibbous, Third Quarter, Waning Crescent)",
      "Explain why half the Moon is always illuminated by the Sun regardless of visible phase",
      "Demonstrate tidal locking and synchronous rotation of the Moon"
    ],
    thumbnailGradient: "from-slate-800 via-indigo-950 to-slate-900",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    iconName: "Moon",
    rating: 5.0,
    reviewCount: 50,
    teacherCount: 155,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Dual synchronized views (Top-Down Orbital + Earth Ground Perspective)",
      "Day/night illumination terminator boundary rendering",
      "Interactive 29.5-day timeline scrub slider",
      "Solar and lunar eclipse alignment indicators"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-moon-1",
        title: "Identify Waxing Gibbous Phase",
        instruction: "Rotate the Moon to the orbital position where approximately 75% of the visible disk is illuminated and growing.",
        targetMetric: "Illumination %",
        targetValue: 75,
        tolerance: 5,
        currentValueKey: "illuminationPercent",
        rewardBadge: "Astronomer"
      }
    ],
    previewFacts: [
      "Moon phases are caused by changing geometry of Sun-Earth-Moon, NOT by Earth's shadow",
      "The Moon rotates on its axis at the exact same rate it orbits Earth (~27.3 days), keeping one face toward us"
    ],
    isHtmlApp: true,
    htmlUrl: "https://lunar-phases-simulator.netlify.app/",
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-principle-of-moments",
    title: "Principle of Moments & Rotational Equilibrium",
    tagline: "Torque balance, center of gravity, fulcrum placement, and clockwise vs counterclockwise moments",
    discipline: "physics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM"],
    standards: ["HS-PS2-1", "AP Physics 1 (Unit 7)", "NGSS SEP-5"],
    description: "Experiment with balance beams and seesaws. Place variable masses at graduated distances from the central fulcrum to demonstrate that for rotational equilibrium, Clockwise Moments = Counterclockwise Moments (Î£Ï„ = 0).",
    learningObjectives: [
      "Calculate torque Ï„ = F * d (perpendicular force multiplied by lever arm distance)",
      "Apply the principle of moments to solve for unknown weights and distances",
      "Identify conditions for translational (Î£F = 0) and rotational (Î£Ï„ = 0) static equilibrium"
    ],
    thumbnailGradient: "from-amber-600 via-orange-600 to-red-600",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    iconName: "Sliders",
    rating: 4.9,
    reviewCount: 44,
    teacherCount: 132,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive balance beam with snap-to-peg distance marks",
      "Real-time torque calculation bar graphs",
      "Unknown mystery mass solver mode",
      "Off-center fulcrum and multiple weight stacking support"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-mom-1",
        title: "Balance the Seesaw",
        instruction: "A 40 kg mass is placed 2 meters left of fulcrum. Place a 20 kg mass on the right side to achieve static balance.",
        targetMetric: "Net Torque (Nm)",
        targetValue: 0,
        tolerance: 0.1,
        currentValueKey: "netTorque",
        rewardBadge: "Equilibrium Master"
      }
    ],
    previewFacts: [
      "A smaller force can balance a much larger force if placed further away from the pivot point",
      "Torque is the rotational equivalent of linear force"
    ],
    isHtmlApp: true,
    htmlUrl: "https://principle-of-moments-simulator.netlify.app/",
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-boiling-water-phase-change",
    title: "Phase Change & Boiling Thermodynamics",
    tagline: "Heat capacity, latent heat of vaporization, molecular kinetic theory, and heating curves",
    discipline: "chemistry",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)"],
    standards: ["MS-PS1-4", "HS-PS3-2", "HS-PS1-4"],
    description: "Apply thermal energy to water and observe molecular phase transitions from solid ice to liquid water and gaseous steam. Track the characteristic temperature plateau during latent heat absorption.",
    learningObjectives: [
      "Interpret heating curves showing temperature plateaus at melting (0Â°C) and boiling (100Â°C) points",
      "Distinguish between sensible heat (temperature change) and latent heat (breaking intermolecular hydrogen bonds)",
      "Connect macroscopic phase states with microscopic particle kinetic energy and freedom of motion"
    ],
    thumbnailGradient: "from-rose-600 via-red-600 to-amber-600",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    iconName: "Flame",
    rating: 4.8,
    reviewCount: 33,
    teacherCount: 98,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Microscopic particle motion simulation container",
      "Real-time heating curve chart with phase plateau markers",
      "Adjustable Bunsen burner power and ambient pressure",
      "Enthalpy of fusion and vaporization calculation gauges"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-boil-1",
        title: "Observe Latent Heat Plateau",
        instruction: "Heat water to 100Â°C and demonstrate that temperature remains constant while liquid boils into vapor.",
        targetMetric: "Temperature (Â°C)",
        targetValue: 100,
        tolerance: 0.5,
        currentValueKey: "temp",
        rewardBadge: "Thermal Physicist"
      }
    ],
    previewFacts: [
      "During a phase change, added thermal energy goes into breaking intermolecular bonds rather than increasing kinetic temperature",
      "Water's high latent heat of vaporization (2260 J/g) makes it an effective cooling agent"
    ],
    isHtmlApp: true,
    htmlUrl: "https://salemhills-boiling-water-simulation.netlify.app/",
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-water-cycle-simulation",
    title: "Global Hydrologic Cycle & Atmosphere System",
    tagline: "Evapotranspiration, condensation, precipitation, groundwater percolation, and climate feedback",
    discipline: "biology",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)"],
    standards: ["MS-ESS2-4", "HS-ESS2-5", "HS-LS2-3"],
    description: "Follow water molecules across atmospheric, terrestrial, and oceanic reservoirs. Simulate how solar radiation drives ocean evaporation, cloud condensation over mountains, surface runoff, and aquifer recharge.",
    learningObjectives: [
      "Model major water cycle fluxes: evaporation, transpiration, condensation, precipitation, infiltration, and runoff",
      "Evaluate how deforestation, urbanization, and temperature shifts alter regional precipitation patterns",
      "Understand conservation of global water mass across phases"
    ],
    thumbnailGradient: "from-cyan-600 via-blue-600 to-indigo-700",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    iconName: "CloudRain",
    rating: 4.9,
    reviewCount: 42,
    teacherCount: 125,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive landscape cross-section (Ocean, Forest, Mountain, Aquifer)",
      "Solar radiation and wind temperature adjusters",
      "Individual animated water molecule tracker",
      "Groundwater table and reservoir volume monitors"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-water-1",
        title: "Trigger Mountain Cloudburst",
        instruction: "Increase ocean evaporation and adjust wind vectors to generate orographic rainfall over the mountain range.",
        targetMetric: "Precipitation Rate",
        targetValue: 50,
        tolerance: 5,
        currentValueKey: "rainRate",
        rewardBadge: "Hydro-Meteorologist"
      }
    ],
    previewFacts: [
      "Over 96% of Earth's water is stored in the oceans, with only ~2.5% as freshwater",
      "Plants contribute substantial atmospheric moisture through stomatal transpiration"
    ],
    isHtmlApp: true,
    htmlUrl: "https://salemhills-water-cycle-simulation.netlify.app/",
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-bearings-and-distances",
    title: "Three-Figure Bearings & Distance Navigation",
    tagline: "Compass rose orientation, trigonometry, sine & cosine rules in real-world spatial navigation",
    discipline: "mathematics",
    gradeLevel: ["High School (9-12)", "AP / IB STEM"],
    standards: ["CCSS.MATH.HSG.SRT.C.8", "IGCSE Math (0580)", "NGSS SEP-5"],
    description: "Navigate ships and aircraft across open charts using three-figure bearings (000Â° to 360Â° measured clockwise from North). Apply the Law of Sines and Cosines to solve multi-leg navigation problems.",
    learningObjectives: [
      "Measure and plot standard three-figure bearings from True North reference lines",
      "Calculate back bearings (reverse headings by adding/subtracting 180Â°)",
      "Use trigonometry to determine final displacement vector and distance from port"
    ],
    thumbnailGradient: "from-amber-700 via-yellow-600 to-stone-800",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    iconName: "Compass",
    rating: 4.9,
    reviewCount: 37,
    teacherCount: 114,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive 360-degree compass rose with north-line references",
      "Multi-waypoint ship flight path plotting",
      "Dynamic triangle angle and distance measurement tools",
      "Real-world nautical charting challenges"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-bear-1",
        title: "Safe Harbor Navigation",
        instruction: "Plot a course on bearing 065Â° for 40 km, then 145Â° for 30 km to reach the safe harbor coordinates.",
        targetMetric: "Final Error (km)",
        targetValue: 0,
        tolerance: 0.5,
        currentValueKey: "errorDist",
        rewardBadge: "Master Navigator"
      }
    ],
    previewFacts: [
      "Bearings are always written with three digits (e.g. 045Â° instead of 45Â°) to prevent misinterpretation in radio comms",
      "The back bearing of heading Î¸ is (Î¸ + 180Â°) if Î¸ < 180Â°, and (Î¸ - 180Â°) if Î¸ â‰¥ 180Â°"
    ],
    isHtmlApp: true,
    htmlUrl: "https://bearings-and-distances-simulator.netlify.app/",
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-angle-elevation-depression",
    title: "Angles of Elevation & Depression Lab",
    tagline: "Line of sight, clinometer measurements, right-triangle trigonometric height calculations",
    discipline: "mathematics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)"],
    standards: ["CCSS.MATH.HSG.SRT.C.6", "CCSS.MATH.HSG.SRT.C.8"],
    description: "Measure inaccessible heights (lighthouses, mountain peaks, towers) using clinometer angles of elevation and depression. Apply tan(Î¸) = Opposite/Adjacent right-triangle ratios with observer eye-level compensation.",
    learningObjectives: [
      "Distinguish between angle of elevation (looking up from horizontal) and angle of depression (looking down)",
      "Calculate unknown vertical heights using tangent trigonometric ratios",
      "Account for observer instrument height in indirect land surveying measurements"
    ],
    thumbnailGradient: "from-indigo-600 via-blue-600 to-teal-600",
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    iconName: "Triangle",
    rating: 4.8,
    reviewCount: 35,
    teacherCount: 102,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive clinometer angle sight line",
      "Real-time right-triangle ratio readout (sin, cos, tan)",
      "Observer distance and height adjustment sliders",
      "Interactive skyscraper and cliff measurement scenarios"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-elev-1",
        title: "Calculate Tower Height",
        instruction: "From a distance of 50 meters, use an angle of elevation of 35Â° with 1.7m eye height to find total tower height.",
        targetMetric: "Calculated Height (m)",
        targetValue: 36.7,
        tolerance: 0.3,
        currentValueKey: "calcHeight",
        rewardBadge: "Surveying Engineer"
      }
    ],
    previewFacts: [
      "The angle of depression from observer A to target B equals the angle of elevation from B to A (alternate interior angles)",
      "Tangent ratio tan(Î¸) = opposite/adjacent is the primary trigonometric function for height surveying"
    ],
    isHtmlApp: true,
    htmlUrl: "https://angle-elevation-depression-simulator.netlify.app/",
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-circle-geometry-theorems",
    title: "Circle Geometry & Inscribed Angles Lab",
    tagline: "Subtended central vs inscribed angles, cyclic quadrilaterals, chord properties, tangent theorems",
    discipline: "mathematics",
    gradeLevel: ["High School (9-12)", "AP / IB STEM"],
    standards: ["CCSS.MATH.HSG.C.A.2", "CCSS.MATH.HSG.C.A.3"],
    description: "Drag vertices dynamically around circle circumferences to verify geometric theorems: angle at center is twice angle at circumference, angles in same segment are equal, angle in semicircle is 90Â°, and cyclic quadrilateral opposite angles sum to 180Â°.",
    learningObjectives: [
      "Prove and visualize that an inscribed angle is half the central angle subtending the same arc",
      "Verify that opposite angles in any cyclic quadrilateral sum to 180 degrees",
      "Demonstrate perpendicularity of tangents to radii at the point of contact"
    ],
    thumbnailGradient: "from-violet-600 via-purple-600 to-indigo-700",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    iconName: "Circle",
    rating: 5.0,
    reviewCount: 40,
    teacherCount: 120,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Smooth draggable point geometry canvas",
      "Real-time angle degree readouts and arc color matching",
      "Theorem mode toggles (Central Angle, Semicircle, Cyclic Quad, Tangent)",
      "Interactive geometric proof walkthroughs"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-circg-1",
        title: "Demonstrate Thales Theorem",
        instruction: "Drag an inscribed vertex across the circumference where the chord is a diameter to confirm the angle is strictly 90Â°.",
        targetMetric: "Inscribed Angle (Â°)",
        targetValue: 90,
        tolerance: 0.1,
        currentValueKey: "inscribedAngle",
        rewardBadge: "Euclidean Geometer"
      }
    ],
    previewFacts: [
      "An angle subtended by a diameter at any point on the circumference is always a right angle (90Â°)",
      "Angles in the same segment of a circle subtended by the same chord are equal"
    ],
    isHtmlApp: true,
    htmlUrl: "https://circle-geometry-lab-simulator.netlify.app/",
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-longitude-and-latitude",
    title: "Latitude, Longitude & Spherical Coordinates",
    tagline: "Prime Meridian, Equator, great circle distances, nautical miles, and earth grid mapping",
    discipline: "mathematics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)"],
    standards: ["CCSS.MATH.HSG.GPE.B.7", "HS-ESS2-2", "NGSS SEP-5"],
    description: "Explore Earth's 3D geographic coordinate system. Pinpoint latitude (parallels 0Â° to 90Â° N/S) and longitude (meridians 0Â° to 180Â° E/W), calculate arc lengths along parallels, and determine Great Circle navigation distances.",
    learningObjectives: [
      "Read and locate precise global coordinates in degrees and minutes",
      "Explain time zone variations from Earth's 15Â° per hour rotation rate",
      "Calculate distances along great circles using spherical trigonometry"
    ],
    thumbnailGradient: "from-teal-600 via-emerald-600 to-blue-700",
    badgeColor: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    iconName: "Globe",
    rating: 4.9,
    reviewCount: 36,
    teacherCount: 110,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive 3D/2D Earth globe with grid overlay lines",
      "Latitude parallel and Longitude meridian locator pins",
      "Great Circle shortest distance flight path calculator",
      "Solar noon and global time zone calculator"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-lat-1",
        title: "Find Great Circle Distance",
        instruction: "Plot coordinates between London (51.5Â°N, 0.1Â°W) and New York (40.7Â°N, 74.0Â°W) to calculate the shortest flight path.",
        targetMetric: "Distance (km)",
        targetValue: 5585,
        tolerance: 25,
        currentValueKey: "distKm",
        rewardBadge: "Global Cartographer"
      }
    ],
    previewFacts: [
      "One minute of latitude (1') along a meridian equals exactly one nautical mile (1.852 km)",
      "The shortest distance between any two points on a sphere is along the Great Circle arc"
    ],
    isHtmlApp: true,
    htmlUrl: "https://longitude-and-latitude-simulator.netlify.app/",
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-wheel-and-axle",
    title: "Wheel & Axle: 3D Simple Machine Physics Lab",
    tagline: "Mechanical Advantage (MA), Velocity Ratio (VR), Efficiency (Î·), Load Forces, and 3D Dynamic Winding Ropes",
    discipline: "physics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM"],
    standards: ["HS-PS3-3", "MS-PS3-5", "AP Physics 1 (Rotational Dynamics)"],
    description: "Investigate simple machines in full 3D. Control wheel and axle radii, adjust load mass, pull the rope to wind the coiled cables dynamically, and calculate Mechanical Advantage, Velocity Ratio (VR = R/r), Load Force (L = mg), and system Efficiency (Î·).",
    learningObjectives: [
      "Determine Velocity Ratio as the ratio of wheel radius to axle radius (VR = R/r)",
      "Calculate Mechanical Advantage (MA = Load / Effort) and mechanical efficiency Î· = (MA / VR) Ã— 100%",
      "Analyze rotational work, dynamic torque balance, and rope displacement in 3D perspective views"
    ],
    thumbnailGradient: "from-sky-600 via-blue-700 to-indigo-900",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    iconName: "Settings",
    rating: 5.0,
    reviewCount: 42,
    teacherCount: 128,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Real-time Three.js 3D WebGL interactive physics engine",
      "Dynamic helical rope coiling and unwinding animations",
      "Live formulas for Load Force, VR, MA, and Efficiency",
      "Multi-angle viewpoint controls (Isometric, Side, Front, Top)"
    ],
    parameterDefaults: {
      wheelRadius: 2.0,
      axleRadius: 0.5,
      loadMass: 50,
      appliedEffort: 25,
      pullDistance: 0.0
    },
    parameterControls: [
      {
        key: "wheelRadius",
        label: "Wheel Radius (R)",
        min: 1.0,
        max: 4.0,
        step: 0.1,
        unit: "m",
        description: "Radius of the outer effort wheel"
      },
      {
        key: "axleRadius",
        label: "Axle Radius (r)",
        min: 0.2,
        max: 1.0,
        step: 0.05,
        unit: "m",
        description: "Radius of the inner lifting axle cylinder"
      },
      {
        key: "loadMass",
        label: "Load Mass",
        min: 5,
        max: 200,
        step: 5,
        unit: "kg",
        description: "Mass of the suspended load cylinder"
      },
      {
        key: "appliedEffort",
        label: "Applied Effort",
        min: 1,
        max: 200,
        step: 1,
        unit: "N",
        description: "Effort force applied on the wheel rope"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-wheel-1",
        title: "Maximize Velocity Ratio",
        instruction: "Configure the wheel and axle dimensions to achieve a Velocity Ratio (VR) of exactly 8.0.",
        targetMetric: "Velocity Ratio",
        targetValue: 8.0,
        tolerance: 0.05,
        currentValueKey: "vr",
        rewardBadge: "Mechanical Advantage Master"
      }
    ],
    previewFacts: [
      "The wheel and axle is a class of simple machine acting as a continuous lever rotating around a common fulcrum",
      "Because the wheel and axle rotate through the same angle in the same time, the distance moved by effort exceeds distance moved by load by factor R/r"
    ],
    isHtmlApp: true,
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Wheel & Axle Interactive Physics Simulation</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      overflow: hidden;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background-color: #18181c;
      color: #ffffff;
    }
    #canvas-container {
      width: 100vw;
      height: 100vh;
      display: block;
    }

    /* Floating UI Panels */
    .glass-panel {
      position: absolute;
      background: rgba(20, 20, 25, 0.88);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 10px;
      padding: 14px 16px;
      backdrop-filter: blur(10px);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
      max-height: 92vh;
      overflow-y: auto;
      z-index: 10;
    }

    #overlay-panel {
      top: 12px;
      left: 12px;
      width: 310px;
    }

    #controls-panel {
      top: 12px;
      right: 12px;
      width: 290px;
    }

    h2 {
      margin-top: 0;
      font-size: 0.95rem;
      color: #4da6ff;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding-bottom: 6px;
      margin-bottom: 10px;
    }

    /* Metric Layout */
    .metric {
      margin-bottom: 10px;
      background: rgba(255, 255, 255, 0.03);
      padding: 6px 8px;
      border-radius: 6px;
      border-left: 3px solid #4da6ff;
    }
    .metric label {
      display: block;
      font-size: 0.72rem;
      color: #aaaaaa;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 2px;
    }
    .metric .formula {
      font-size: 0.75rem;
      color: #88ccff;
      font-family: 'Courier New', Courier, monospace;
      margin-bottom: 3px;
    }
    .metric .calc-step {
      font-size: 0.8rem;
      color: #e0e0e0;
      font-family: 'Courier New', Courier, monospace;
    }
    .metric .final-val {
      font-weight: bold;
      color: #ffffff;
    }

    /* Slider Group Layout */
    .slider-group {
      margin-bottom: 10px;
    }
    .slider-group label {
      display: flex;
      justify-content: space-between;
      font-size: 0.78rem;
      color: #dddddd;
      margin-bottom: 3px;
    }
    .slider-group label span {
      color: #4da6ff;
      font-weight: bold;
    }
    .slider-group input[type="range"] {
      width: 100%;
      height: 5px;
      border-radius: 3px;
      background: #3a3a45;
      outline: none;
      -webkit-appearance: none;
    }
    .slider-group input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #4da6ff;
      cursor: pointer;
      box-shadow: 0 0 8px rgba(77, 166, 255, 0.6);
    }
    .slider-group input[type="range"]::-moz-range-thumb {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #4da6ff;
      cursor: pointer;
      border: none;
    }

    @media (max-width: 768px) {
      .glass-panel {
        width: 46% !important;
        font-size: 0.8rem;
        padding: 8px;
      }
      #overlay-panel { left: 6px; top: 6px; }
      #controls-panel { right: 6px; top: 6px; }
    }

    /* Callout Badges with Straight Pointing Leader Lines */
    .callout-badge {
      position: absolute;
      transform: translate(-50%, -50%);
      padding: 6px 12px;
      border-radius: 8px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      box-shadow: 0 4px 18px rgba(0, 0, 0, 0.65);
      pointer-events: none;
      user-select: none;
      backdrop-filter: blur(8px);
      z-index: 6;
      white-space: nowrap;
      text-align: center;
      transition: opacity 0.15s ease;
    }
    .badge-title {
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.5px;
      line-height: 1.2;
    }
    .badge-sub {
      font-size: 9px;
      font-weight: 600;
      opacity: 0.9;
      margin-top: 1px;
      letter-spacing: 0.3px;
    }
    .badge-wheel {
      background: rgba(14, 165, 233, 0.25);
      border: 1.5px solid #38bdf8;
      color: #e0f2fe;
    }
    .badge-axle {
      background: rgba(245, 158, 11, 0.25);
      border: 1.5px solid #fbbf24;
      color: #fef3c7;
    }
    .badge-radius-w {
      background: rgba(99, 102, 241, 0.28);
      border: 1.5px solid #818cf8;
      color: #e0e7ff;
    }
    .badge-radius-a {
      background: rgba(16, 185, 129, 0.28);
      border: 1.5px solid #34d399;
      color: #d1fae5;
    }
  </style>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>
</head>
<body>

  <div id="canvas-container"></div>

  <!-- SVG Pointing Lines Overlay -->
  <svg id="labels-svg" style="position:absolute; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:5;">
    <defs>
      <marker id="marker-wheel" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <polygon points="0 0, 6 3, 0 6" fill="#38bdf8" />
      </marker>
      <marker id="marker-axle" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <polygon points="0 0, 6 3, 0 6" fill="#fbbf24" />
      </marker>
      <marker id="marker-rw" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <polygon points="0 0, 6 3, 0 6" fill="#818cf8" />
      </marker>
      <marker id="marker-ra" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <polygon points="0 0, 6 3, 0 6" fill="#34d399" />
      </marker>
    </defs>

    <!-- Pointing Straight Lines -->
    <line id="line-wheel" stroke="#38bdf8" stroke-width="2" marker-end="url(#marker-wheel)" />
    <circle id="dot-wheel" r="3.5" fill="#38bdf8" />

    <line id="line-axle" stroke="#fbbf24" stroke-width="2" marker-end="url(#marker-axle)" />
    <circle id="dot-axle" r="3.5" fill="#fbbf24" />

    <line id="line-rw" stroke="#818cf8" stroke-width="2" stroke-dasharray="4 2" marker-end="url(#marker-rw)" />
    <circle id="dot-rw" r="3.5" fill="#818cf8" />

    <line id="line-ra" stroke="#34d399" stroke-width="2" stroke-dasharray="4 2" marker-end="url(#marker-ra)" />
    <circle id="dot-ra" r="3.5" fill="#34d399" />
  </svg>

  <!-- Pointing Labels Callout Badges -->
  <div id="badge-wheel" class="callout-badge badge-wheel">
    <div class="badge-title">WHEEL</div>
    <div class="badge-sub">Effort Cylinder</div>
  </div>

  <div id="badge-axle" class="callout-badge badge-axle">
    <div class="badge-title">AXLE</div>
    <div class="badge-sub">Load Shaft</div>
  </div>

  <div id="badge-rw" class="callout-badge badge-radius-w">
    <div class="badge-title">Wheel Radius (R)</div>
    <div class="badge-sub">R = <span id="callout-rw">2.0 m</span></div>
  </div>

  <div id="badge-ra" class="callout-badge badge-radius-a">
    <div class="badge-title">Axle Radius (r)</div>
    <div class="badge-sub">r = <span id="callout-ra">0.50 m</span></div>
  </div>

  <div id="overlay-panel" class="glass-panel">
    <h2>Dynamic Analytics</h2>

    <div class="metric">
      <label>Load Force (L)</label>
      <div class="formula">L = Mass &times; g</div>
      <div class="calc-step"><span id="calc-load">50 &times; 9.81</span> = <span id="val-load" class="final-val">490.5 N</span></div>
    </div>

    <div class="metric">
      <label>Velocity Ratio (VR)</label>
      <div class="formula">VR = (Radius, R of wheel) / (radius, r of axle)</div>
      <div class="calc-step"><span id="calc-vr">2.0 / 0.5</span> = <span id="val-vr" class="final-val">4.00</span></div>
    </div>

    <div class="metric">
      <label>Mechanical Advantage (MA)</label>
      <div class="formula">MA = Load Force / Applied Effort</div>
      <div class="calc-step"><span id="calc-ma">490.5 / 25</span> = <span id="val-ma" class="final-val">19.62</span></div>
    </div>

    <div class="metric">
      <label>Efficiency (&eta;)</label>
      <div class="formula">&eta; = (MA / VR) &times; 100%</div>
      <div class="calc-step"><span id="calc-eff">(19.62 / 4.00) &times; 100</span> = <span id="val-eff" class="final-val">490.5%</span></div>
    </div>
  </div>

  <div id="controls-panel" class="glass-panel">
    <h2>Simulation Controls</h2>

    <div class="slider-group" style="padding-bottom: 6px; border-bottom: 1px solid rgba(255,255,255,0.1); margin-bottom: 8px;">
      <label style="cursor:pointer; display:flex; align-items:center; gap:8px; font-size:0.75rem;">
        <input type="checkbox" id="toggle-labels" checked style="width:auto; cursor:pointer;">
        <span>Show Labels &amp; Radii Lines</span>
      </label>
    </div>
    
    <div class="slider-group">
      <label>Pull the rope: <span id="disp-pull">0.0 m</span></label>
      <input type="range" id="slider-pull" min="0" max="5" value="0" step="0.05">
    </div>

    <div class="slider-group">
      <label>Radius, R of wheel: <span id="disp-rw">2.0 m</span></label>
      <input type="range" id="slider-rw" min="1.0" max="4.0" value="2.0" step="0.1">
    </div>

    <div class="slider-group">
      <label>radius, r of axle: <span id="disp-ra">0.5 m</span></label>
      <input type="range" id="slider-ra" min="0.2" max="1.0" value="0.5" step="0.05">
    </div>

    <div class="slider-group">
      <label>Load Mass: <span id="disp-mass">50 kg</span></label>
      <input type="range" id="slider-mass" min="5" max="200" value="50" step="5">
    </div>

    <div class="slider-group">
      <label>Applied Effort: <span id="disp-effort">25 N</span></label>
      <input type="range" id="slider-effort" min="1" max="200" value="25" step="1">
    </div>

    <div class="slider-group">
      <label>Viewpoint: <span id="disp-view">Isometric</span></label>
      <input type="range" id="slider-view" min="0" max="3" value="0" step="1">
    </div>
  </div>

  <script>
    const params = {
      wheelRadius: 2.0,
      axleRadius: 0.5,
      loadMass: 50,
      appliedEffort: 25,
      pullDistance: 0.0,
      viewpointIndex: 0,
      showLabels: true
    };

    const g = 9.81;
    const INITIAL_LOAD_Y = -3.5;
    const INITIAL_EFFORT_Y = -1.5;

    const container = document.getElementById('canvas-container');
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x18181c);

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(5, 3, 7);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(5, 10, 7);
    dirLight.castShadow = true;
    scene.add(dirLight);

    const grid = new THREE.GridHelper(20, 20, 0x444444, 0x222222);
    grid.position.y = -5;
    scene.add(grid);

    const axleMat = new THREE.MeshStandardMaterial({ color: 0x777788, roughness: 0.4, metalness: 0.6 });
    const wheelMat = new THREE.MeshStandardMaterial({ color: 0x888899, roughness: 0.5, metalness: 0.3 });
    const spokeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const ropeMat = new THREE.MeshStandardMaterial({ color: 0xc2a47c, roughness: 0.8 });
    const loadMat = new THREE.MeshStandardMaterial({ color: 0xaa3333, roughness: 0.5 });
    const effortHandleMat = new THREE.MeshStandardMaterial({ color: 0x3388ff, roughness: 0.4 });

    const rotatingGroup = new THREE.Group();
    scene.add(rotatingGroup);

    const axleGeo = new THREE.CylinderGeometry(params.axleRadius, params.axleRadius, 4, 32);
    const axle = new THREE.Mesh(axleGeo, axleMat);
    axle.rotation.z = Math.PI / 2;
    axle.castShadow = true;
    rotatingGroup.add(axle);

    const wheelGeo = new THREE.CylinderGeometry(params.wheelRadius, params.wheelRadius, 0.4, 32);
    const wheel = new THREE.Mesh(wheelGeo, wheelMat);
    wheel.rotation.z = Math.PI / 2;
    wheel.position.x = 0.8;
    wheel.castShadow = true;
    rotatingGroup.add(wheel);

    const spokesGroup = new THREE.Group();
    for (let i = 0; i < 4; i++) {
      const spokeGeo = new THREE.BoxGeometry(0.04, 0.42, 0.04);
      const spoke = new THREE.Mesh(spokeGeo, spokeMat);
      spoke.position.x = 1.01;
      spoke.rotation.x = (i * Math.PI) / 4;
      spokesGroup.add(spoke);
    }
    rotatingGroup.add(spokesGroup);

    let axleCoilMesh, wheelCoilMesh;
    let axleDropRopeMesh, wheelDropRopeMesh;

    const loadGroup = new THREE.Group();
    const loadMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.28, 0.6, 16), loadMat);
    loadMesh.castShadow = true;
    loadGroup.add(loadMesh);

    const effortHandleMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.4, 12), effortHandleMat);
    effortHandleMesh.rotation.z = Math.PI / 2;

    scene.add(loadGroup);
    scene.add(effortHandleMesh);

    // 3D Physical Radial Dimension Lines on Wheel and Axle
    const dimGroup = new THREE.Group();
    rotatingGroup.add(dimGroup);

    // 1. Wheel Radius 3D Dimension Indicator (Cyan)
    const wheelDimGroup = new THREE.Group();
    wheelDimGroup.position.set(1.02, 0, 0);

    const wheelHubDot = new THREE.Mesh(
      new THREE.SphereGeometry(0.05, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
    );
    wheelDimGroup.add(wheelHubDot);

    const wheelRadRodGeo = new THREE.CylinderGeometry(0.02, 0.02, 1, 16);
    const wheelRadRodMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const wheelRadRod = new THREE.Mesh(wheelRadRodGeo, wheelRadRodMat);
    wheelDimGroup.add(wheelRadRod);

    const wheelArrowMesh = new THREE.Mesh(
      new THREE.ConeGeometry(0.07, 0.18, 16),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
    );
    wheelDimGroup.add(wheelArrowMesh);
    dimGroup.add(wheelDimGroup);

    // 2. Axle Radius 3D Dimension Indicator (Amber)
    const axleDimGroup = new THREE.Group();
    axleDimGroup.position.set(-1.52, 0, 0);

    const axleHubDot = new THREE.Mesh(
      new THREE.SphereGeometry(0.04, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xfbbf24 })
    );
    axleDimGroup.add(axleHubDot);

    const axleRadRodGeo = new THREE.CylinderGeometry(0.015, 0.015, 1, 16);
    const axleRadRodMat = new THREE.MeshBasicMaterial({ color: 0xfbbf24 });
    const axleRadRod = new THREE.Mesh(axleRadRodGeo, axleRadRodMat);
    axleDimGroup.add(axleRadRod);

    const axleArrowMesh = new THREE.Mesh(
      new THREE.ConeGeometry(0.05, 0.14, 16),
      new THREE.MeshBasicMaterial({ color: 0xfbbf24 })
    );
    axleDimGroup.add(axleArrowMesh);
    dimGroup.add(axleDimGroup);

    function createHelixGeometry(radius, turns, width, xOffset, startAngle) {
      const pathPoints = [];
      const samples = Math.max(10, Math.ceil(turns * 40));
      for (let i = 0; i <= samples; i++) {
        const t = i / samples;
        const angle = startAngle + (t * turns * Math.PI * 2);
        const x = xOffset + (t - 0.5) * width;
        const y = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);
        pathPoints.push(new THREE.Vector3(x, y, z));
      }
      return new THREE.CatmullRomCurve3(pathPoints);
    }

    function updateRopeSystem() {
      const rotationAngle = params.pullDistance / params.wheelRadius;
      rotatingGroup.rotation.x = rotationAngle;

      if (axleCoilMesh) rotatingGroup.remove(axleCoilMesh);
      if (wheelCoilMesh) rotatingGroup.remove(wheelCoilMesh);
      if (axleDropRopeMesh) scene.remove(axleDropRopeMesh);
      if (wheelDropRopeMesh) scene.remove(wheelDropRopeMesh);

      const baseAxleTurns = 3;
      const currentAxleTurns = baseAxleTurns + (rotationAngle / (Math.PI * 2));
      
      const axleCurve = createHelixGeometry(params.axleRadius + 0.02, currentAxleTurns, 0.6, -0.5, 0);
      const axleCoilGeo = new THREE.TubeGeometry(axleCurve, Math.ceil(currentAxleTurns * 30), 0.035, 8, false);
      axleCoilMesh = new THREE.Mesh(axleCoilGeo, ropeMat);
      rotatingGroup.add(axleCoilMesh);

      const loadLiftDistance = rotationAngle * params.axleRadius;
      const currentLoadY = INITIAL_LOAD_Y + loadLiftDistance;

      const axleTangentZ = params.axleRadius + 0.02;
      const axleRopePoints = [
        new THREE.Vector3(-0.5, 0, axleTangentZ),
        new THREE.Vector3(-0.5, currentLoadY + 0.3, axleTangentZ)
      ];
      const axleDropGeo = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(axleRopePoints), 10, 0.035, 8, false);
      axleDropRopeMesh = new THREE.Mesh(axleDropGeo, ropeMat);
      scene.add(axleDropRopeMesh);

      loadGroup.position.set(-0.5, currentLoadY, axleTangentZ);

      const baseWheelTurns = 6;
      const currentWheelTurns = Math.max(0.5, baseWheelTurns - (rotationAngle / (Math.PI * 2)));

      const wheelCurve = createHelixGeometry(params.wheelRadius + 0.02, currentWheelTurns, 0.3, 0.8, Math.PI);
      const wheelCoilGeo = new THREE.TubeGeometry(wheelCurve, Math.ceil(currentWheelTurns * 30), 0.035, 8, false);
      wheelCoilMesh = new THREE.Mesh(wheelCoilGeo, ropeMat);
      rotatingGroup.add(wheelCoilMesh);

      const currentEffortY = INITIAL_EFFORT_Y - params.pullDistance;
      const wheelTangentZ = -(params.wheelRadius + 0.02);

      const wheelRopePoints = [
        new THREE.Vector3(0.8, 0, wheelTangentZ),
        new THREE.Vector3(0.8, currentEffortY, wheelTangentZ)
      ];
      const wheelDropGeo = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(wheelRopePoints), 10, 0.035, 8, false);
      wheelDropRopeMesh = new THREE.Mesh(wheelDropGeo, ropeMat);
      scene.add(wheelDropRopeMesh);

      effortHandleMesh.position.set(0.8, currentEffortY, wheelTangentZ);
    }

    function updateLoadMassSize() {
      const scaleFactor = Math.pow(params.loadMass / 50, 1 / 3); 
      loadMesh.scale.set(scaleFactor, scaleFactor, scaleFactor);
    }

    function updateCalculations() {
      const R_w = params.wheelRadius;
      const R_a = params.axleRadius;

      const VR = R_w / R_a;
      const loadForce = params.loadMass * g;
      const MA = params.appliedEffort > 0 ? loadForce / params.appliedEffort : 0;
      const efficiency = VR > 0 ? (MA / VR) * 100 : 0;

      document.getElementById('calc-load').innerText = params.loadMass + ' Ã— 9.81';
      document.getElementById('val-load').innerText = loadForce.toFixed(1) + ' N';

      document.getElementById('calc-vr').innerText = R_w.toFixed(1) + ' / ' + R_a.toFixed(2);
      document.getElementById('val-vr').innerText = VR.toFixed(2);

      document.getElementById('calc-ma').innerText = loadForce.toFixed(1) + ' / ' + params.appliedEffort;
      document.getElementById('val-ma').innerText = MA.toFixed(2);

      document.getElementById('calc-eff').innerText = '(' + MA.toFixed(2) + ' / ' + VR.toFixed(2) + ') Ã— 100';
      document.getElementById('val-eff').innerText = efficiency.toFixed(1) + '%';
    }

    function updateDimensions() {
      wheel.scale.set(params.wheelRadius / 2.0, 1, params.wheelRadius / 2.0);
      axle.scale.set(params.axleRadius / 0.5, 1, params.axleRadius / 0.5);
      spokesGroup.scale.set(1, params.wheelRadius / 0.21, params.wheelRadius / 0.21);

      // Scale 3D Radial Dimension indicators
      wheelRadRod.scale.set(1, params.wheelRadius, 1);
      wheelRadRod.position.set(0, params.wheelRadius / 2, 0);
      wheelArrowMesh.position.set(0, params.wheelRadius - 0.08, 0);

      axleRadRod.scale.set(1, params.axleRadius, 1);
      axleRadRod.position.set(0, params.axleRadius / 2, 0);
      axleArrowMesh.position.set(0, params.axleRadius - 0.06, 0);

      const elRw = document.getElementById('callout-rw');
      if (elRw) elRw.innerText = params.wheelRadius.toFixed(1) + ' m';
      const elRa = document.getElementById('callout-ra');
      if (elRa) elRa.innerText = params.axleRadius.toFixed(2) + ' m';

      updateLoadMassSize();
      updateRopeSystem();
      updateCalculations();
    }

    // Dynamic Screen-Space Callouts with Straight Pointing Leader Lines
    function updateCalloutPositions() {
      const svg = document.getElementById('labels-svg');
      const badgeW = document.getElementById('badge-wheel');
      const badgeA = document.getElementById('badge-axle');
      const badgeRw = document.getElementById('badge-rw');
      const badgeRa = document.getElementById('badge-ra');

      if (!params.showLabels) {
        if (svg) svg.style.display = 'none';
        if (badgeW) badgeW.style.display = 'none';
        if (badgeA) badgeA.style.display = 'none';
        if (badgeRw) badgeRw.style.display = 'none';
        if (badgeRa) badgeRa.style.display = 'none';
        dimGroup.visible = false;
        return;
      }

      dimGroup.visible = true;
      if (svg) svg.style.display = 'block';

      const w = window.innerWidth;
      const h = window.innerHeight;

      // Calculate 4 key 3D anchor points in world space
      rotatingGroup.updateMatrixWorld(true);

      const targetW = new THREE.Vector3(0.8, params.wheelRadius, 0).applyMatrix4(rotatingGroup.matrixWorld);
      const targetA = new THREE.Vector3(-1.0, params.axleRadius, 0).applyMatrix4(rotatingGroup.matrixWorld);
      const targetRw = new THREE.Vector3(1.02, params.wheelRadius, 0).applyMatrix4(rotatingGroup.matrixWorld);
      const targetRa = new THREE.Vector3(-1.52, params.axleRadius, 0).applyMatrix4(rotatingGroup.matrixWorld);

      function projectToScreen(worldVec) {
        const v = worldVec.clone().project(camera);
        return {
          x: (v.x * 0.5 + 0.5) * w,
          y: (-(v.y * 0.5) + 0.5) * h,
          visible: v.z < 1.0
        };
      }

      const pW = projectToScreen(targetW);
      const pA = projectToScreen(targetA);
      const pRw = projectToScreen(targetRw);
      const pRa = projectToScreen(targetRa);

      function positionCallout(badgeEl, lineId, dotId, pScreen, offsetX, offsetY) {
        if (!badgeEl) return;
        const line = document.getElementById(lineId);
        const dot = document.getElementById(dotId);

        if (!pScreen.visible || pScreen.x < -100 || pScreen.x > w + 100 || pScreen.y < -100 || pScreen.y > h + 100) {
          badgeEl.style.display = 'none';
          if (line) line.style.display = 'none';
          if (dot) dot.style.display = 'none';
          return;
        }

        badgeEl.style.display = 'block';
        if (line) line.style.display = 'inline';
        if (dot) dot.style.display = 'inline';

        const bx = Math.max(140, Math.min(w - 140, pScreen.x + offsetX));
        const by = Math.max(60, Math.min(h - 60, pScreen.y + offsetY));

        badgeEl.style.left = bx + 'px';
        badgeEl.style.top = by + 'px';

        // Connect straight leader line from badge center to 3D feature contact point
        if (line) {
          line.setAttribute('x1', bx);
          line.setAttribute('y1', by);
          line.setAttribute('x2', pScreen.x);
          line.setAttribute('y2', pScreen.y);
        }
        if (dot) {
          dot.setAttribute('cx', pScreen.x);
          dot.setAttribute('cy', pScreen.y);
        }
      }

      positionCallout(badgeW, 'line-wheel', 'dot-wheel', pW, 115, -85);
      positionCallout(badgeA, 'line-axle', 'dot-axle', pA, -115, -75);
      positionCallout(badgeRw, 'line-rw', 'dot-rw', pRw, 125, 75);
      positionCallout(badgeRa, 'line-ra', 'dot-ra', pRa, -125, 75);
    }

    document.getElementById('toggle-labels').addEventListener('change', (e) => {
      params.showLabels = e.target.checked;
      updateCalloutPositions();
    });

    document.getElementById('slider-pull').addEventListener('input', (e) => {
      params.pullDistance = parseFloat(e.target.value);
      document.getElementById('disp-pull').innerText = params.pullDistance.toFixed(2) + ' m';
      updateRopeSystem();
    });

    document.getElementById('slider-rw').addEventListener('input', (e) => {
      params.wheelRadius = parseFloat(e.target.value);
      document.getElementById('disp-rw').innerText = params.wheelRadius.toFixed(1) + ' m';
      updateDimensions();
    });

    document.getElementById('slider-ra').addEventListener('input', (e) => {
      params.axleRadius = parseFloat(e.target.value);
      document.getElementById('disp-ra').innerText = params.axleRadius.toFixed(2) + ' m';
      updateDimensions();
    });

    document.getElementById('slider-mass').addEventListener('input', (e) => {
      params.loadMass = parseFloat(e.target.value);
      document.getElementById('disp-mass').innerText = params.loadMass + ' kg';
      updateLoadMassSize();
      updateCalculations();
    });

    document.getElementById('slider-effort').addEventListener('input', (e) => {
      params.appliedEffort = parseFloat(e.target.value);
      document.getElementById('disp-effort').innerText = params.appliedEffort + ' N';
      updateCalculations();
    });

    const views = ['Isometric', 'Side View', 'Front View', 'Top View'];
    document.getElementById('slider-view').addEventListener('input', (e) => {
      const idx = parseInt(e.target.value);
      params.viewpointIndex = idx;
      document.getElementById('disp-view').innerText = views[idx];

      switch (idx) {
        case 0:
          camera.position.set(5, 3, 7);
          break;
        case 1:
          camera.position.set(8, 0, 0);
          break;
        case 2:
          camera.position.set(0, 0, 8);
          break;
        case 3:
          camera.position.set(0, 8, 0.01);
          break;
      }
      controls.target.set(0, 0, 0);
      controls.update();
    });

    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
      updateCalloutPositions();
    }

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    updateDimensions();
    animate();
  </script>
</body>
</html>`,
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-bridge-circuits",
    title: "Bridge Circuit Visualizer & Meter Bridge Lab",
    tagline: "Wheatstone Bridge Balance Ratio, Meter Bridge Null Point Detection & Dynamic PDF Lab Worksheets",
    discipline: "physics",
    gradeLevel: ["High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["HS-PS3-3", "AP Physics 2 (Unit 9)", "IB Physics Option B (Engineering Physics)"],
    description: "Explore DC circuit bridge theory and resistance measurements. Model Wheatstone Bridge balance ratios (P/Q = R/S), investigate the Meter Bridge slide-wire null deflection points with interactive galvanometer needle physics, and generate randomized student laboratory PDF worksheets with dynamic problem sets.",
    learningObjectives: [
      "Analyze bridge balance conditions (P/Q = R/S) and determine unknown resistance when galvanometer current Ig = 0",
      "Simulate the Meter Bridge slide-wire experiment and calculate unknown resistance X = R Ã— (100 - l) / l",
      "Observe current vector flows and directional galvanometer needle deflection angles based on potential differences",
      "Generate and export dynamic printable laboratory worksheets with randomized circuit parameters and post-lab questions"
    ],
    thumbnailGradient: "from-cyan-600 via-sky-700 to-indigo-900",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    iconName: "Zap",
    rating: 5.0,
    reviewCount: 38,
    teacherCount: 115,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Dual-mode interactive simulation: Wheatstone Bridge and Meter Bridge slide-wire",
      "Real-time animated electron current flow and galvanometer needle physics",
      "Dynamic client-side PDF worksheet generator with randomized student trials",
      "Interactive resistor sliders with instant balance ratio calculations"
    ],
    parameterDefaults: {
      resistorP: 100,
      resistorQ: 100,
      resistorR: 50,
      jockeyLength: 30
    },
    parameterControls: [
      {
        key: "resistorP",
        label: "Resistor P",
        min: 10,
        max: 500,
        step: 10,
        unit: "Î©",
        description: "Ratio arm resistor P"
      },
      {
        key: "resistorQ",
        label: "Resistor Q",
        min: 10,
        max: 500,
        step: 10,
        unit: "Î©",
        description: "Ratio arm resistor Q"
      },
      {
        key: "resistorR",
        label: "Variable Resistor R",
        min: 1,
        max: 500,
        step: 1,
        unit: "Î©",
        description: "Balancing resistance box"
      },
      {
        key: "jockeyLength",
        label: "Jockey Position (l)",
        min: 1,
        max: 99,
        step: 0.5,
        unit: "cm",
        description: "Meter bridge slide contact point"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-bridge-1",
        title: "Achieve Wheatstone Balance",
        instruction: "Adjust Variable Resistor R until Galvanometer Current Ig reaches 0.00 mA.",
        targetMetric: "Galvanometer Current",
        targetValue: 0.0,
        tolerance: 0.05,
        currentValueKey: "ig",
        rewardBadge: "Bridge Master"
      }
    ],
    previewFacts: [
      "Sir Charles Wheatstone popularized the bridge circuit invented by Samuel Hunter Christie in 1833 for high-precision resistance measurements.",
      "At balance point, no current flows through the galvanometer because the electric potential across the bridge terminals is equal (Vb = Vd)."
    ],
    isHtmlApp: true,
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bridge Circuit Visualizer & Lab Simulator</title>
    <!-- jsPDF Library for Client-Side PDF Generation -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <style>
        :root {
            --bg-main: #0f172a;
            --card-bg: #1e293b;
            --accent-blue: #38bdf8;
            --accent-green: #22c55e;
            --accent-red: #ef4444;
            --accent-amber: #f59e0b;
            --text-light: #f8fafc;
            --text-dim: #94a3b8;
            --border-color: #334155;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        body {
            background-color: var(--bg-main);
            color: var(--text-light);
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }

        header {
            text-align: center;
            margin-bottom: 20px;
        }

        h1 {
            color: var(--accent-blue);
            font-size: 1.8rem;
            margin-bottom: 6px;
        }

        p.subtitle {
            color: var(--text-dim);
            font-size: 0.95rem;
        }

        .tab-navigation {
            display: flex;
            gap: 12px;
            margin-bottom: 20px;
        }

        .tab-btn {
            background-color: var(--card-bg);
            color: var(--text-dim);
            border: 1px solid var(--border-color);
            padding: 10px 20px;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .tab-btn.active {
            background-color: var(--accent-blue);
            color: var(--bg-main);
            border-color: var(--accent-blue);
        }

        .sim-container {
            display: none;
            grid-template-columns: 1fr 340px;
            gap: 20px;
            width: 100%;
            max-width: 1050px;
        }

        .sim-container.active {
            display: grid;
        }

        @media (max-width: 820px) {
            .sim-container {
                grid-template-columns: 1fr;
            }
        }

        .canvas-card {
            background-color: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
            min-height: 420px;
        }

        canvas {
            background-color: #0b1120;
            border-radius: 8px;
            width: 100%;
            height: auto;
            max-width: 650px;
        }

        .control-card {
            background-color: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .pdf-btn {
            background-color: #0284c7;
            color: #ffffff;
            border: none;
            padding: 12px 16px;
            border-radius: 8px;
            font-weight: bold;
            font-size: 0.95rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            transition: background-color 0.2s ease, transform 0.1s ease;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);
        }

        .pdf-btn:hover {
            background-color: #0369a1;
        }

        .pdf-btn:active {
            transform: scale(0.98);
        }

        .control-group {
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .control-header {
            display: flex;
            justify-content: space-between;
            font-size: 0.9rem;
            color: var(--text-light);
        }

        .control-header span.val {
            color: var(--accent-blue);
            font-weight: bold;
        }

        input[type="range"] {
            accent-color: var(--accent-blue);
            cursor: pointer;
        }

        .status-badge {
            padding: 10px;
            border-radius: 8px;
            text-align: center;
            font-weight: bold;
            font-size: 0.95rem;
            transition: background-color 0.3s;
        }

        .status-badge.balanced {
            background-color: rgba(34, 197, 94, 0.2);
            border: 1px solid var(--accent-green);
            color: var(--accent-green);
        }

        .status-badge.unbalanced {
            background-color: rgba(239, 68, 68, 0.2);
            border: 1px solid var(--accent-red);
            color: var(--accent-red);
        }

        .formula-box {
            background-color: rgba(15, 23, 42, 0.6);
            border-left: 4px solid var(--accent-amber);
            padding: 12px;
            border-radius: 4px;
            font-size: 0.85rem;
            line-height: 1.5;
        }

        .math-eq {
            color: var(--accent-amber);
            font-weight: bold;
            font-family: monospace;
            font-size: 0.95rem;
        }
    </style>
</head>
<body>

    <header>
        <h1>Bridge Circuit Interactive Simulator</h1>
        <p class="subtitle">Explore Wheatstone Bridge theory and the Meter Bridge lab experiment</p>
    </header>

    <div class="tab-navigation">
        <button class="tab-btn active" onclick="switchTab('wheatstone')">1. Wheatstone Bridge</button>
        <button class="tab-btn" onclick="switchTab('meter')">2. Meter Bridge Lab</button>
    </div>

    <!-- WHEATSTONE BRIDGE SIMULATION -->
    <div id="wheatstone-sim" class="sim-container active">
        <div class="canvas-card">
            <canvas id="wheatstoneCanvas" width="600" height="400"></canvas>
        </div>

        <div class="control-card">
            <button class="pdf-btn" onclick="generatePDFWorksheet()">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Unique Worksheet (PDF)
            </button>

            <div id="ws-status" class="status-badge unbalanced">Unbalanced (Current Flowing)</div>

            <div class="control-group">
                <div class="control-header">Resistor P: <span id="ws-p-val" class="val">100 Î©</span></div>
                <input type="range" id="ws-p" min="10" max="500" value="100">
            </div>

            <div class="control-group">
                <div class="control-header">Resistor Q: <span id="ws-q-val" class="val">100 Î©</span></div>
                <input type="range" id="ws-q" min="10" max="500" value="100">
            </div>

            <div class="control-group">
                <div class="control-header">Variable Resistor R: <span id="ws-r-val" class="val">50 Î©</span></div>
                <input type="range" id="ws-r" min="1" max="500" value="50">
            </div>

            <div class="formula-box">
                <div class="math-eq">Balance Ratio: P/Q = R/S â†’ S = R Ã— (Q/P)</div>
                <div>Ratio P/Q = <span id="ws-pq-ratio">1.00</span></div>
                <div>Galvanometer Current (I<sub>g</sub>): <span id="ws-ig-val">--</span></div>
                <div style="margin-top: 8px; font-weight: bold; font-size: 0.95rem;">
                    Unknown Resistor (S) = <span id="ws-calc-s" style="color: var(--text-dim);">??? (Find Balance)</span>
                </div>
            </div>
        </div>
    </div>

    <!-- METER BRIDGE SIMULATION -->
    <div id="meter-sim" class="sim-container">
        <div class="canvas-card">
            <canvas id="meterCanvas" width="600" height="400"></canvas>
        </div>

        <div class="control-card">
            <button class="pdf-btn" onclick="generatePDFWorksheet()">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Unique Worksheet (PDF)
            </button>

            <div id="mb-status" class="status-badge unbalanced">Galvanometer Deflected</div>

            <div class="control-group">
                <div class="control-header">Resistance Box (R): <span id="mb-r-val" class="val">10 Î©</span></div>
                <input type="range" id="mb-r" min="1" max="50" value="10">
            </div>

            <div class="control-group">
                <div class="control-header">Jockey Position (l): <span id="mb-l-val" class="val">30.0 cm</span></div>
                <input type="range" id="mb-l" min="1" max="99" value="30" step="0.5">
            </div>

            <div class="formula-box">
                <div class="math-eq">Formula: X = R Ã— (100 - l) / l</div>
                <div>Known R = <span id="mb-disp-r">10</span> Î©</div>
                <div>Balancing Length (l) = <span id="mb-disp-l">30</span> cm</div>
                <div>Remaining Length (100-l) = <span id="mb-disp-rem">70</span> cm</div>
                <div style="margin-top: 8px; font-weight: bold; font-size: 0.95rem;">
                    Calculated Unknown (X) = <span id="mb-calc-x" style="color: var(--text-dim);">??? (Find Null Point)</span>
                </div>
            </div>
        </div>
    </div>

    <script>
        let currentTab = 'wheatstone';
        let animOffset = 0;

        function switchTab(tab) {
            currentTab = tab;
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.sim-container').forEach(c => c.classList.remove('active'));
            
            if (tab === 'wheatstone') {
                document.querySelectorAll('.tab-btn')[0].classList.add('active');
                document.getElementById('wheatstone-sim').classList.add('active');
            } else {
                document.querySelectorAll('.tab-btn')[1].classList.add('active');
                document.getElementById('meter-sim').classList.add('active');
            }
        }

        // --- RESISTOR SYMBOL HELPER ---
        function drawResistorSymbol(ctx, x1, y1, x2, y2, isVariable, label, valueText, color) {
            ctx.save();
            ctx.strokeStyle = color;
            ctx.fillStyle = color;
            ctx.lineWidth = 2.5;

            const midX = (x1 + x2) / 2;
            const midY = (y1 + y2) / 2;
            const dx = x2 - x1;
            const dy = y2 - y1;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const angle = Math.atan2(dy, dx);

            ctx.translate(midX, midY);
            ctx.rotate(angle);

            const width = 40;

            // Leading wire
            ctx.beginPath();
            ctx.moveTo(-distance / 2, 0);
            ctx.lineTo(-width / 2, 0);

            // Zigzag
            const steps = 6;
            const stepWidth = width / steps;
            let currX = -width / 2;
            
            for (let i = 0; i < steps; i++) {
                currX += stepWidth;
                let zigY = (i % 2 === 0) ? -10 : 10;
                if (i === steps - 1) zigY = 0;
                ctx.lineTo(currX, zigY);
            }

            // Trailing wire
            ctx.lineTo(distance / 2, 0);
            ctx.stroke();

            // Variable Resistor Arrow
            if (isVariable) {
                ctx.beginPath();
                ctx.moveTo(-18, 16);
                ctx.lineTo(18, -16);
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(18, -16);
                ctx.lineTo(10, -16);
                ctx.lineTo(18, -8);
                ctx.closePath();
                ctx.fill();
            }

            // Text Labels
            ctx.rotate(-angle);
            ctx.font = 'bold 13px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(label, 0, -22);
            ctx.font = '12px monospace';
            ctx.fillText(valueText, 0, 28);

            ctx.restore();
        }

        // --- LINEAR & WELL-SPACED CURRENT FLOW HELPER ---
        function drawLinearCurrentFlow(ctx, pathPoints, offset, dotColor = '#38bdf8', reverse = false) {
            ctx.save();
            ctx.fillStyle = dotColor;
            ctx.shadowBlur = 4;
            ctx.shadowColor = dotColor;

            let totalLength = 0;
            const segmentLengths = [];
            for (let i = 0; i < pathPoints.length - 1; i++) {
                const dx = pathPoints[i+1].x - pathPoints[i].x;
                const dy = pathPoints[i+1].y - pathPoints[i].y;
                const len = Math.sqrt(dx * dx + dy * dy);
                segmentLengths.push(len);
                totalLength += len;
            }

            const spacing = 42; 
            const flowOffset = reverse ? -offset : offset;

            for (let d = (flowOffset % spacing + spacing) % spacing; d < totalLength; d += spacing) {
                let currentDistance = 0;
                for (let i = 0; i < segmentLengths.length; i++) {
                    if (currentDistance + segmentLengths[i] >= d) {
                        const distInSegment = d - currentDistance;
                        const ratio = distInSegment / segmentLengths[i];
                        const x = pathPoints[i].x + ratio * (pathPoints[i+1].x - pathPoints[i].x);
                        const y = pathPoints[i].y + ratio * (pathPoints[i+1].y - pathPoints[i].y);

                        ctx.beginPath();
                        ctx.arc(x, y, 3, 0, Math.PI * 2);
                        ctx.fill();
                        break;
                    }
                    currentDistance += segmentLengths[i];
                }
            }
            ctx.restore();
        }

        // --- GALVANOMETER DIAL WITH GRADUATION MARKS & ARROWHEAD NEEDLE ---
        function drawGalvanometerDial(ctx, cx, cy, radius, isBalanced, angle) {
            ctx.save();

            // Dial Outer Frame
            ctx.fillStyle = '#1e293b';
            ctx.strokeStyle = isBalanced ? '#22c55e' : '#ef4444';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(cx, cy, radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // Graduation Marks
            ctx.strokeStyle = '#94a3b8';
            ctx.lineWidth = 1;
            const totalTicks = 7;
            const minAngle = -Math.PI * 0.75;
            const maxAngle = -Math.PI * 0.25;
            
            for (let i = 0; i < totalTicks; i++) {
                const tickAngle = minAngle + (i / (totalTicks - 1)) * (maxAngle - minAngle);
                const innerR = radius - 6;
                const outerR = radius - 2;

                const x1 = cx + innerR * Math.cos(tickAngle);
                const y1 = cy + innerR * Math.sin(tickAngle);
                const x2 = cx + outerR * Math.cos(tickAngle);
                const y2 = cy + outerR * Math.sin(tickAngle);

                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
            }

            // Central Pivot
            ctx.fillStyle = '#f8fafc';
            ctx.beginPath();
            ctx.arc(cx, cy, 2.5, 0, Math.PI * 2);
            ctx.fill();

            // Needle
            const needleLength = radius - 7;
            const tipX = cx + needleLength * Math.cos(angle);
            const tipY = cy + needleLength * Math.sin(angle);

            ctx.strokeStyle = '#f8fafc';
            ctx.lineWidth = 1.8;
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(tipX, tipY);
            ctx.stroke();

            // Arrow Head
            const headLength = 6;
            const headAngle = 0.45;

            ctx.fillStyle = '#f8fafc';
            ctx.beginPath();
            ctx.moveTo(tipX, tipY);
            ctx.lineTo(
                tipX - headLength * Math.cos(angle - headAngle),
                tipY - headLength * Math.sin(angle - headAngle)
            );
            ctx.lineTo(
                tipX - headLength * Math.cos(angle + headAngle),
                tipY - headLength * Math.sin(angle + headAngle)
            );
            ctx.closePath();
            ctx.fill();

            // Label
            ctx.fillStyle = '#f8fafc';
            ctx.font = 'bold 11px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('G', cx, cy + (radius > 22 ? 16 : 13));

            ctx.restore();
        }

        // --- WHEATSTONE BRIDGE RENDER & LOGIC ---
        const wsCanvas = document.getElementById('wheatstoneCanvas');
        const wsCtx = wsCanvas.getContext('2d');
        const ACTUAL_UNKNOWN_S = 150;

        function renderWheatstone() {
            const P = parseFloat(document.getElementById('ws-p').value);
            const Q = parseFloat(document.getElementById('ws-q').value);
            const R = parseFloat(document.getElementById('ws-r').value);
            const S_hidden = ACTUAL_UNKNOWN_S; 

            document.getElementById('ws-p-val').textContent = P + ' Î©';
            document.getElementById('ws-q-val').textContent = Q + ' Î©';
            document.getElementById('ws-r-val').textContent = R + ' Î©';

            const pq = (P / Q).toFixed(2);
            document.getElementById('ws-pq-ratio').textContent = pq;

            const V = 9;
            const Vb = V * (Q / (P + Q));
            const Vd = V * (S_hidden / (R + S_hidden));
            const V_diff = Vb - Vd;
            
            const isBalanced = Math.abs(V_diff) < 0.05;
            const statusEl = document.getElementById('ws-status');
            const calcSEl = document.getElementById('ws-calc-s');
            const calculated_S = (R * Q / P).toFixed(1);

            if (isBalanced) {
                statusEl.textContent = "Balanced! (Ig = 0.00 mA)";
                statusEl.className = "status-badge balanced";
                document.getElementById('ws-ig-val').textContent = "0.00 mA";
                calcSEl.textContent = calculated_S + " Î©";
                calcSEl.style.color = "var(--accent-green)";
            } else {
                statusEl.textContent = "Unbalanced (Current Flowing)";
                statusEl.className = "status-badge unbalanced";
                document.getElementById('ws-ig-val').textContent = (V_diff * 10).toFixed(2) + " mA";
                calcSEl.textContent = "??? (Find Balance)";
                calcSEl.style.color = "var(--text-dim)";
            }

            wsCtx.clearRect(0, 0, wsCanvas.width, wsCanvas.height);

            const center = { x: 300, y: 190 };
            const top = { x: 300, y: 70 };
            const bottom = { x: 300, y: 310 };
            const left = { x: 150, y: 190 };
            const right = { x: 450, y: 190 };

            // Wires
            wsCtx.strokeStyle = '#64748b';
            wsCtx.lineWidth = 2;
            wsCtx.beginPath();
            wsCtx.moveTo(left.x, left.y);
            wsCtx.lineTo(70, left.y);
            wsCtx.lineTo(70, 360);
            wsCtx.lineTo(right.x, 360);
            wsCtx.lineTo(right.x, right.y);
            wsCtx.stroke();

            // DC Source
            wsCtx.strokeStyle = '#f59e0b';
            wsCtx.lineWidth = 3;
            wsCtx.beginPath();
            wsCtx.moveTo(250, 348);
            wsCtx.lineTo(250, 372);
            wsCtx.stroke();
            wsCtx.lineWidth = 5;
            wsCtx.beginPath();
            wsCtx.moveTo(265, 354);
            wsCtx.lineTo(265, 366);
            wsCtx.stroke();

            wsCtx.fillStyle = '#f59e0b';
            wsCtx.font = 'bold 12px sans-serif';
            wsCtx.fillText('DC Source (+ 9V -)', 230, 338);

            // Bridge Branch Wire
            wsCtx.strokeStyle = isBalanced ? '#22c55e' : '#ef4444';
            wsCtx.lineWidth = 2;
            wsCtx.beginPath();
            wsCtx.moveTo(top.x, top.y);
            wsCtx.lineTo(bottom.x, bottom.y);
            wsCtx.stroke();

            // Resistors
            drawResistorSymbol(wsCtx, left.x, left.y, top.x, top.y, false, "Resistor P", P + " Î©", "#38bdf8");
            drawResistorSymbol(wsCtx, top.x, top.y, right.x, right.y, false, "Resistor Q", Q + " Î©", "#38bdf8");
            drawResistorSymbol(wsCtx, left.x, left.y, bottom.x, bottom.y, true, "Variable R", R + " Î©", "#22c55e");
            drawResistorSymbol(wsCtx, bottom.x, bottom.y, right.x, right.y, false, "Unknown S", isBalanced ? calculated_S + " Î©" : "S (Unknown)", isBalanced ? "#22c55e" : "#ef4444");

            // Currents
            const pathBatteryOut = [{x: 250, y: 360}, {x: 70, y: 360}, {x: 70, y: left.y}, {x: left.x, y: left.y}];
            const pathBatteryIn  = [{x: right.x, y: right.y}, {x: right.x, y: 360}, {x: 265, y: 360}];
            
            const pathP = [{x: left.x, y: left.y}, {x: top.x, y: top.y}];
            const pathQ = [{x: top.x, y: top.y}, {x: right.x, y: right.y}];
            const pathR = [{x: left.x, y: left.y}, {x: bottom.x, y: bottom.y}];
            const pathS = [{x: bottom.x, y: bottom.y}, {x: right.x, y: right.y}];

            drawLinearCurrentFlow(wsCtx, pathBatteryOut, animOffset, '#38bdf8');
            drawLinearCurrentFlow(wsCtx, pathBatteryIn, animOffset, '#38bdf8');

            drawLinearCurrentFlow(wsCtx, pathP, animOffset, '#38bdf8');
            drawLinearCurrentFlow(wsCtx, pathQ, animOffset, '#38bdf8');
            drawLinearCurrentFlow(wsCtx, pathR, animOffset, '#22c55e');
            drawLinearCurrentFlow(wsCtx, pathS, animOffset, isBalanced ? '#22c55e' : '#ef4444');

            if (!isBalanced) {
                const pathGalv = [{x: top.x, y: top.y}, {x: bottom.x, y: bottom.y}];
                drawLinearCurrentFlow(wsCtx, pathGalv, animOffset, '#ef4444', V_diff < 0);
            }

            // Galvanometer
            let angle = -Math.PI / 2;
            if (!isBalanced) {
                angle += Math.max(-0.8, Math.min(0.8, V_diff * 0.5));
            }
            drawGalvanometerDial(wsCtx, center.x, center.y, 25, isBalanced, angle);
        }

        // --- METER BRIDGE RENDER & LOGIC ---
        const mbCanvas = document.getElementById('meterCanvas');
        const mbCtx = mbCanvas.getContext('2d');
        const ACTUAL_UNKNOWN_X = 15;

        function renderMeterBridge() {
            const R = parseFloat(document.getElementById('mb-r').value);
            const l = parseFloat(document.getElementById('mb-l').value);

            document.getElementById('mb-r-val').textContent = R + ' Î©';
            document.getElementById('mb-l-val').textContent = l.toFixed(1) + ' cm';

            const ideal_l = (100 * R) / (R + ACTUAL_UNKNOWN_X);
            const error = Math.abs(l - ideal_l);
            const isBalanced = error < 0.8;
            const calc_X = (R * (100 - l) / l).toFixed(1);

            document.getElementById('mb-disp-r').textContent = R;
            document.getElementById('mb-disp-l').textContent = l;
            document.getElementById('mb-disp-rem').textContent = (100 - l).toFixed(1);

            const statusEl = document.getElementById('mb-status');
            const calcXEl = document.getElementById('mb-calc-x');

            if (isBalanced) {
                statusEl.textContent = "Balanced! Null point reached near " + l.toFixed(1) + " cm";
                statusEl.className = "status-badge balanced";
                calcXEl.textContent = calc_X + " Î©";
                calcXEl.style.color = "var(--accent-green)";
            } else {
                statusEl.textContent = "Galvanometer Deflected (Adjust Jockey)";
                statusEl.className = "status-badge unbalanced";
                calcXEl.textContent = "??? (Find Null Point)";
                calcXEl.style.color = "var(--text-dim)";
            }

            mbCtx.clearRect(0, 0, mbCanvas.width, mbCanvas.height);

            const wireStart = { x: 80, y: 260 };
            const wireEnd = { x: 520, y: 260 };
            const wireLengthPx = wireEnd.x - wireStart.x;

            // Wooden Board
            mbCtx.fillStyle = '#334155';
            mbCtx.fillRect(60, 240, 480, 50);

            // Ruler
            mbCtx.fillStyle = '#f59e0b';
            mbCtx.fillRect(wireStart.x, 270, wireLengthPx, 12);

            mbCtx.strokeStyle = '#0f172a';
            mbCtx.lineWidth = 1;
            for(let i = 0; i <= 10; i++) {
                let x = wireStart.x + (i / 10) * wireLengthPx;
                mbCtx.beginPath();
                mbCtx.moveTo(x, 270);
                mbCtx.lineTo(x, 278);
                mbCtx.stroke();
            }

            // Wire
            mbCtx.strokeStyle = '#38bdf8';
            mbCtx.lineWidth = 3;
            mbCtx.beginPath();
            mbCtx.moveTo(wireStart.x, wireStart.y);
            mbCtx.lineTo(wireEnd.x, wireEnd.y);
            mbCtx.stroke();

            // Strips
            mbCtx.strokeStyle = '#94a3b8';
            mbCtx.lineWidth = 8;
            mbCtx.beginPath();
            mbCtx.moveTo(wireStart.x, wireStart.y);
            mbCtx.lineTo(wireStart.x, 140);
            mbCtx.lineTo(170, 140);
            mbCtx.moveTo(230, 140);
            mbCtx.lineTo(370, 140);
            mbCtx.moveTo(430, 140);
            mbCtx.lineTo(wireEnd.x, 140);
            mbCtx.lineTo(wireEnd.x, wireStart.y);
            mbCtx.stroke();

            // Resistors
            drawResistorSymbol(mbCtx, 170, 140, 230, 140, true, "Resistance Box (R)", R + " Î©", "#22c55e");
            drawResistorSymbol(mbCtx, 370, 140, 430, 140, false, "Unknown (X)", isBalanced ? calc_X + " Î©" : "X (Unknown)", isBalanced ? "#22c55e" : "#ef4444");

            // Jockey Position
            const jockeyX = wireStart.x + (l / 100) * wireLengthPx;

            mbCtx.strokeStyle = isBalanced ? '#22c55e' : '#ef4444';
            mbCtx.lineWidth = 2;
            mbCtx.beginPath();
            mbCtx.moveTo(300, 140);
            mbCtx.lineTo(300, 190);
            mbCtx.lineTo(jockeyX, 190);
            mbCtx.lineTo(jockeyX, wireStart.y);
            mbCtx.stroke();

            // Currents
            const wirePath = [{x: wireStart.x, y: wireStart.y}, {x: wireEnd.x, y: wireEnd.y}];
            drawLinearCurrentFlow(mbCtx, wirePath, animOffset, '#38bdf8');

            if (!isBalanced) {
                const galvPath = [
                    {x: 300, y: 140}, {x: 300, y: 190}, {x: jockeyX, y: 190}, {x: jockeyX, y: wireStart.y}
                ];
                drawLinearCurrentFlow(mbCtx, galvPath, animOffset, '#ef4444', (l - ideal_l) < 0);
            }

            // Galvanometer Dial
            let angle = -Math.PI / 2;
            if (!isBalanced) {
                angle += Math.max(-0.7, Math.min(0.7, (l - ideal_l) * 0.05));
            }
            drawGalvanometerDial(mbCtx, 300, 190, 20, isBalanced, angle);

            // Jockey Pointer Head
            mbCtx.fillStyle = '#f8fafc';
            mbCtx.beginPath();
            mbCtx.moveTo(jockeyX, wireStart.y);
            mbCtx.lineTo(jockeyX - 6, wireStart.y - 12);
            mbCtx.lineTo(jockeyX + 6, wireStart.y - 12);
            mbCtx.closePath();
            mbCtx.fill();
        }

        // --- DYNAMIC DATA GENERATOR FUNCTIONS ---
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function getRandomFloat(min, max, decimals = 1) {
            const str = (Math.random() * (max - min) + min).toFixed(decimals);
            return parseFloat(str);
        }

        // Pool of post-lab conceptual questions
        const questionPool = [
            "Why is the Meter Bridge experiment most sensitive and accurate when the null point is near 50 cm?",
            "Explain why end resistance occurs at the copper strips in a Meter Bridge and how it affects measurements.",
            "What would happen to the galvanometer deflection if the battery terminals were reversed?",
            "Why should current not be passed continuously through the wire during the experiment?",
            "If the radius of the Meter Bridge wire is doubled, how does it affect the position of the null point?",
            "How does temperature variation affect the accuracy of resistance values in this lab setup?",
            "Differentiate between the sensitivity of a galvanometer and that of a Wheatstone Bridge circuit."
        ];

        // Shuffle array helper
        function shuffleArray(array) {
            let arr = [...array];
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            return arr;
        }

        // --- DYNAMIC PDF LAB WORKSHEET GENERATOR ---
        function generatePDFWorksheet() {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF('p', 'mm', 'a4');

            // Generate a unique Worksheet Variant ID on each load/click
            const variantID = 'WS-' + getRandomInt(1000, 9999);

            // Dynamic Target Values for this specific session
            const targetUnknownS = getRandomInt(40, 220); // Dynamic target S
            const targetUnknownX = getRandomFloat(8.0, 35.0, 1); // Dynamic target X

            // Select 3 random questions from the pool
            const selectedQuestions = shuffleArray(questionPool).slice(0, 3);

            // --- HEADER BANNER ---
            doc.setFillColor(15, 23, 42); // Theme Navy
            doc.rect(0, 0, 210, 32, 'F');

            doc.setTextColor(255, 255, 255);
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(18);
            doc.text('PHYSICS LAB WORKSHEET', 14, 18);

            doc.setFontSize(9);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(56, 189, 248); // Accent Blue
            doc.text('Variant Code: ' + variantID, 150, 18);

            doc.setTextColor(203, 213, 225);
            doc.text('Bridge Circuits & Resistance Measurement Experiments', 14, 25);

            // --- STUDENT METADATA BOX ---
            doc.setDrawColor(203, 213, 225);
            doc.setFillColor(248, 250, 252);
            doc.roundedRect(14, 38, 182, 22, 2, 2, 'FD');

            doc.setTextColor(51, 65, 85);
            doc.setFontSize(10);
            doc.setFont('helvetica', 'bold');
            doc.text('Student Name:', 18, 46);
            doc.text('Date:', 130, 46);
            doc.text('Class / Section:', 18, 54);
            doc.text('Instructor:', 130, 54);

            doc.setFont('helvetica', 'normal');
            doc.line(46, 47, 120, 47);
            doc.line(142, 47, 190, 47);
            doc.line(48, 55, 120, 55);
            doc.line(152, 55, 190, 55);

            // --- PART 1: OBJECTIVES & THEORY ---
            let y = 68;
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(11);
            doc.setTextColor(15, 23, 42);
            doc.text('1. Objectives & Assigned Target Values', 14, y);

            y += 6;
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(9);
            doc.setTextColor(51, 65, 85);
            
            doc.text('â€¢ Assigned Unknown S (Wheatstone): Determine value near target ~' + targetUnknownS + ' Î©.', 16, y);
            y += 5;
            doc.text('â€¢ Assigned Unknown X (Meter Bridge): Determine value near target ~' + targetUnknownX + ' Î©.', 16, y);
            y += 5;
            doc.text('â€¢ Balance Condition Equations: (P / Q) = (R / S)   and   X = R Ã— (100 - l) / l', 16, y);

            // --- PART 2: WHEATSTONE BRIDGE DATA TABLE ---
            y += 9;
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(11);
            doc.setTextColor(15, 23, 42);
            doc.text('2. Experiment A: Wheatstone Bridge Data Table', 14, y);

            y += 5;
            doc.setFillColor(30, 41, 59);
            doc.rect(14, y, 182, 7, 'F');
            doc.setTextColor(255, 255, 255);
            doc.setFontSize(8.5);
            doc.text('Trial #', 18, y + 5);
            doc.text('Resistor P (Î©)', 42, y + 5);
            doc.text('Resistor Q (Î©)', 78, y + 5);
            doc.text('Variable R (Î©)', 114, y + 5);
            doc.text('Calculated S (Î©)', 150, y + 5);

            y += 7;
            // Generate 3 randomized target trials for Wheatstone
            for (let i = 1; i <= 3; i++) {
                const pVal = getRandomInt(1, 4) * 50; // 50, 100, 150, 200
                const qVal = getRandomInt(1, 4) * 50;

                doc.setFillColor(i % 2 === 0 ? 241 : 255, i % 2 === 0 ? 245 : 255, i % 2 === 0 ? 249 : 255);
                doc.rect(14, y, 182, 7, 'F');
                doc.setDrawColor(226, 232, 240);
                doc.rect(14, y, 182, 7, 'S');

                doc.setTextColor(51, 65, 85);
                doc.text('Trial ' + i, 18, y + 5);
                doc.text('' + pVal, 42, y + 5);
                doc.text('' + qVal, 78, y + 5);
                doc.text('[ _____ ]', 114, y + 5);
                doc.text('[ _____ ]', 150, y + 5);
                y += 7;
            }

            // --- PART 3: METER BRIDGE DATA TABLE ---
            y += 8;
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(11);
            doc.setTextColor(15, 23, 42);
            doc.text('3. Experiment B: Meter Bridge Null Point Data Table', 14, y);

            y += 5;
            doc.setFillColor(30, 41, 59);
            doc.rect(14, y, 182, 7, 'F');
            doc.setTextColor(255, 255, 255);
            doc.setFontSize(8.5);
            doc.text('Trial #', 18, y + 5);
            doc.text('Known Box R (Î©)', 38, y + 5);
            doc.text('Null Length l (cm)', 75, y + 5);
            doc.text('(100 - l) (cm)', 115, y + 5);
            doc.text('Unknown X (Î©)', 152, y + 5);

            y += 7;
            // Generate 3 randomized target trials for Meter Bridge
            for (let i = 1; i <= 3; i++) {
                const rVal = getRandomInt(1, 4) * 10; // 10, 20, 30, 40

                doc.setFillColor(i % 2 === 0 ? 241 : 255, i % 2 === 0 ? 245 : 255, i % 2 === 0 ? 249 : 255);
                doc.rect(14, y, 182, 7, 'F');
                doc.setDrawColor(226, 232, 240);
                doc.rect(14, y, 182, 7, 'S');

                doc.setTextColor(51, 65, 85);
                doc.text('Trial ' + i, 18, y + 5);
                doc.text('' + rVal, 38, y + 5);
                doc.text('[ _____ ]', 75, y + 5);
                doc.text('[ _____ ]', 115, y + 5);
                doc.text('[ _____ ]', 152, y + 5);
                y += 7;
            }

            // --- PART 4: DYNAMIC POST-LAB QUESTIONS ---
            y += 9;
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(11);
            doc.setTextColor(15, 23, 42);
            doc.text('4. Conceptual & Post-Lab Questions', 14, y);

            y += 6;
            doc.setFontSize(9);

            selectedQuestions.forEach((qText, index) => {
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(15, 23, 42);
                doc.text('Q' + (index + 1) + '. ' + qText, 14, y);
                y += 10;
            });

            // --- FOOTER ---
            doc.setFontSize(8);
            doc.setFont('helvetica', 'italic');
            doc.setTextColor(148, 163, 184);
            doc.text('Generated automatically by Interactive Bridge Visualizer | Sheet ID: ' + variantID, 14, 285);

            // Save with unique name
            doc.save('Bridge_Circuit_Worksheet_' + variantID + '.pdf');
        }

        // Animation Loop
        function animate() {
            animOffset += 0.8;
            if (currentTab === 'wheatstone') {
                renderWheatstone();
            } else {
                renderMeterBridge();
            }
            requestAnimationFrame(animate);
        }

        animate();
    </script>
</body>
</html>`,
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-quadratic-graph-gradient",
    title: "Quadratic Graph & Gradient Explorer",
    tagline: "Step-by-Step Plotting, Vertex (Max/Min) Turn Points & Right-Angled Triangle Tangent Gradients",
    discipline: "mathematics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM"],
    standards: ["CCSS.MATH.HSA.REI.B.4", "CCSS.MATH.HSF.IF.B.4", "CCSS.MATH.HSF.IF.C.7.A"],
    description: "Master quadratic functions y = axÂ² + bx + c with interactive step-by-step point substitution, smooth curve tracing, automated axis of symmetry and vertex (max/min) calculations, right-angled triangle tangent gradient measurements (Rise/Run = Î”y/Î”x), and coordinate reader projections.",
    learningObjectives: [
      "Calculate and plot coordinate tables for quadratic functions with step-by-step substitution",
      "Identify vertex coordinates (-b/2a, f(-b/2a)) and classify global maxima vs minima based on leading coefficient a",
      "Determine tangent line gradients using the geometric right-angled triangle method (m = Î”y/Î”x = Rise/Run)",
      "Explore curve behavior, axes of symmetry, and roots across randomized quadratic functions"
    ],
    thumbnailGradient: "from-purple-600 via-indigo-700 to-blue-900",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    iconName: "TrendingUp",
    rating: 5.0,
    reviewCount: 36,
    teacherCount: 142,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Step-by-step algebraic substitution table and coordinate point plotting",
      "Interactive tangent gradient calculator with right-angled triangle (Rise / Run) derivation",
      "Automatic vertex locator, axis of symmetry, and optimal value detector",
      "Trace speed control and interactive (x, y) coordinate reader projection line"
    ],
    parameterDefaults: {
      coeffA: 1,
      coeffB: -2,
      coeffC: -3,
      tangentX: 1.0
    },
    parameterControls: [
      {
        key: "coeffA",
        label: "Leading Coefficient (a)",
        min: -2,
        max: 2,
        step: 1,
        unit: "",
        description: "Quadratic curvature coefficient"
      },
      {
        key: "coeffB",
        label: "Linear Coefficient (b)",
        min: -5,
        max: 5,
        step: 1,
        unit: "",
        description: "Linear term coefficient"
      },
      {
        key: "coeffC",
        label: "Constant Term (c)",
        min: -8,
        max: 8,
        step: 1,
        unit: "",
        description: "Y-intercept value"
      },
      {
        key: "tangentX",
        label: "Tangent Point (x)",
        min: -4,
        max: 4,
        step: 0.1,
        unit: "",
        description: "Position along the curve to evaluate gradient"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-quad-1",
        title: "Find the Stationary Turning Point",
        instruction: "Position the gradient slider at the curve's vertex. Verify that the tangent slope equals 0.00.",
        targetMetric: "Gradient",
        targetValue: 0.0,
        tolerance: 0.05,
        currentValueKey: "m",
        rewardBadge: "Calculus Apprentice"
      }
    ],
    previewFacts: [
      "The derivative of y = axÂ² + bx + c is dy/dx = 2ax + b, which equals zero exactly at the turning vertex x = -b/(2a).",
      "The right-angled triangle method measures the average rate of change (Rise / Run) over an interval, providing intuitive geometric foundation for differential calculus."
    ],
    isHtmlApp: true,
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Quadratic Graph & Gradient Explorer</title>
    <style>
        :root {
            --bg-color: #0f172a;
            --card-bg: #1e293b;
            --accent-blue: #38bdf8;
            --accent-green: #4ade80;
            --accent-purple: #c084fc;
            --accent-pink: #f472b6;
            --accent-amber: #fbbf24;
            --text-main: #f8fafc;
            --text-muted: #94a3b8;
            --grid-line: #334155;
            --axis-line: #64748b;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-main);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
        }

        header {
            text-align: center;
            margin-bottom: 20px;
        }

        h1 {
            font-size: 1.8rem;
            color: var(--accent-blue);
            margin-bottom: 6px;
        }

        p.subtitle {
            color: var(--text-muted);
            font-size: 0.95rem;
        }

        .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            max-width: 1250px;
            width: 100%;
        }

        @media (max-width: 950px) {
            .container {
                grid-template-columns: 1fr;
            }
        }

        .panel {
            background-color: var(--card-bg);
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .equation-box {
            background-color: #0f172a;
            border: 1px solid var(--accent-blue);
            border-radius: 8px;
            padding: 12px;
            text-align: center;
            font-size: 1.4rem;
            font-weight: bold;
            color: var(--accent-amber);
            letter-spacing: 0.5px;
        }

        .controls-group {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        button {
            background-color: #334155;
            color: var(--text-main);
            border: none;
            padding: 10px 14px;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.2s ease;
            flex: 1;
            min-width: 130px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
        }

        button:hover:not(:disabled) {
            background-color: #475569;
            transform: translateY(-1px);
        }

        button:disabled {
            opacity: 0.4;
            cursor: not-allowed;
            filter: grayscale(80%);
        }

        button.primary {
            background-color: var(--accent-blue);
            color: #0f172a;
        }

        button.primary:hover:not(:disabled) {
            background-color: #7dd3fc;
        }

        button.success {
            background-color: var(--accent-green);
            color: #0f172a;
        }

        button.success:hover:not(:disabled) {
            background-color: #86efac;
        }

        .table-container {
            overflow-x: auto;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            text-align: center;
            background-color: #0f172a;
            border-radius: 8px;
            overflow: hidden;
        }

        th, td {
            padding: 8px 6px;
            border: 1px solid var(--grid-line);
            font-size: 0.9rem;
        }

        th {
            background-color: #1e293b;
            color: var(--accent-blue);
        }

        td.calculated {
            color: var(--accent-green);
            font-weight: bold;
        }

        .feature-card {
            background-color: #0f172a;
            border-radius: 8px;
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            border: 1px solid var(--grid-line);
        }

        .feature-card.calc-card {
            border-color: var(--accent-green);
        }

        .feature-card.vertex-card {
            border-color: var(--accent-amber);
        }

        .feature-card.gradient-card {
            border-color: var(--accent-purple);
        }

        .feature-card.reader-card {
            border-color: var(--accent-pink);
        }

        .feature-title {
            font-weight: bold;
            font-size: 0.9rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .slider-control {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        input[type=range] {
            flex: 1;
            cursor: pointer;
        }

        #speedSlider { accent-color: var(--accent-purple); }
        #xReaderSlider { accent-color: var(--accent-pink); }
        #gradientSlider { accent-color: var(--accent-purple); }

        .canvas-container {
            position: relative;
            width: 100%;
            aspect-ratio: 1;
            background-color: #0f172a;
            border-radius: 8px;
            overflow: hidden;
            border: 1px solid var(--grid-line);
        }

        canvas {
            width: 100%;
            height: 100%;
            display: block;
        }

        .math-box {
            font-family: 'Courier New', Courier, monospace;
            font-size: 0.88rem;
            background-color: #1a2332;
            padding: 8px 10px;
            border-radius: 6px;
            color: #e2e8f0;
            line-height: 1.5;
        }

        .fraction-line {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            flex-wrap: wrap;
            margin-top: 6px;
        }

        .frac {
            display: inline-flex;
            flex-direction: column;
            text-align: center;
            vertical-align: middle;
            padding: 0 4px;
        }

        .num {
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 1px;
        }

        .den {
            padding-top: 1px;
        }

        .toggle-label {
            font-size: 0.85rem;
            color: var(--text-muted);
            display: flex;
            align-items: center;
            gap: 6px;
            cursor: pointer;
        }
    </style>
</head>
<body>

    <header>
        <h1>Quadratic Graph & Gradient Explorer</h1>
        <p class="subtitle">Step-by-step plotting, turn-point (vertex) calculator, and right-angled triangle gradient finder</p>
    </header>

    <div class="container">
        <!-- Left Panel: Calculations & Tools -->
        <div class="panel">
            <div id="equation" class="equation-box">y = xÂ² - 2x - 3</div>

            <div class="controls-group">
                <button class="primary" onclick="generateRandomFunction()">ðŸŽ² New Random Graph</button>
                <button id="calcNextBtn" onclick="calculateNextYValue()">âš¡ Calculate Next y</button>
            </div>

            <div class="table-container">
                <table id="valuesTable">
                    <thead><tr id="xRow"><th>x</th></tr></thead>
                    <tbody><tr id="yRow"><th>y</th></tr></tbody>
                </table>
            </div>

            <div class="controls-group">
                <button class="success" id="plotBtn" onclick="plotNextPoint()">ðŸ“ Plot Point (<span id="plottedCount">0</span>/<span id="totalCount">7</span>)</button>
                <button class="success" id="curveBtn" onclick="drawCurveAnimation()" disabled>ðŸ“ˆ Join Points (Curve)</button>
            </div>

            <!-- Dynamic Max/Min Value Card -->
            <div class="feature-card vertex-card">
                <div class="feature-title" style="color:var(--accent-amber);">
                    <span>ðŸ“Œ Maximum / Minimum Value (Vertex)</span>
                    <label class="toggle-label">
                        <input type="checkbox" id="showVertexCheck" checked onchange="drawGraph()"> Show on Graph
                    </label>
                </div>
                <div id="vertexDisplay" class="math-box">
                    Calculating vertex...
                </div>
            </div>

            <!-- Right-Angled Triangle Gradient Card -->
            <div class="feature-card gradient-card">
                <div class="feature-title" style="color:var(--accent-purple);">
                    <span>ðŸ“ Tangent Gradient (Right-Angled Triangle Method)</span>
                    <label class="toggle-label">
                        <input type="checkbox" id="showGradientCheck" checked onchange="drawGraph()"> Show Triangle
                    </label>
                </div>
                <div class="slider-control">
                    <span style="font-size:0.85rem; color:var(--text-muted);" id="gradMinX">-4</span>
                    <input type="range" id="gradientSlider" min="-4" max="4" step="0.1" value="1" oninput="updateGradient()">
                    <span style="font-size:0.85rem; color:var(--text-muted);" id="gradMaxX">4</span>
                </div>
                <div id="gradientDisplay" class="math-box">
                    Move slider to calculate gradient at any point on the curve.
                </div>
            </div>

            <!-- Trace Speed Control -->
            <div class="feature-card" style="border-color: var(--accent-blue);">
                <div class="feature-title" style="color:var(--accent-blue);">
                    <span>â±ï¸ Curve Trace Speed</span>
                    <span style="font-size:0.85rem;" id="speedDisplay">Very Slow</span>
                </div>
                <div class="slider-control">
                    <span style="font-size:0.85rem; color:var(--text-muted);">Slow</span>
                    <input type="range" id="speedSlider" min="0.001" max="0.025" step="0.001" value="0.004" oninput="updateSpeedLabel()">
                    <span style="font-size:0.85rem; color:var(--text-muted);">Fast</span>
                </div>
            </div>

            <!-- Interactive Graph Reader Section -->
            <div class="feature-card reader-card">
                <div class="feature-title" style="color:var(--accent-pink);">
                    <span>ðŸ”Ž Interactive Graph Reader</span>
                    <span id="readerCoords">x = 0.0, y = 0.0</span>
                </div>
                <div class="slider-control">
                    <span style="font-size:0.85rem; color:var(--text-muted);" id="minXLabel">-4</span>
                    <input type="range" id="xReaderSlider" min="-4" max="4" step="0.1" value="0" oninput="updateReader()">
                    <span style="font-size:0.85rem; color:var(--text-muted);" id="maxXLabel">4</span>
                </div>
            </div>
        </div>

        <!-- Right Panel: Calculation Display + Canvas Plot Area -->
        <div class="panel">
            <!-- Dynamic Substitution Card (Top Right, above graph paper) -->
            <div class="feature-card calc-card">
                <div class="feature-title" style="color:var(--accent-green);">
                    <span>ðŸ§® Step-by-Step Substitution</span>
                </div>
                <div id="calcDisplay" class="math-box">
                    Click 'Calculate Next y' to step through substitution.
                </div>
            </div>

            <!-- Graph Canvas Container -->
            <div class="canvas-container">
                <canvas id="graphCanvas"></canvas>
            </div>
        </div>
    </div>

    <script>
        let a = 1, b = -2, c = -3;
        let xValues = [-2, -1, 0, 1, 2, 3, 4];
        let yValues = [];
        let currentCalcIndex = 0;
        let plottedPointCount = 0;
        let curveDrawn = false;
        let curveProgress = 0;
        let animationFrameId = null;

        const canvas = document.getElementById('graphCanvas');
        const ctx = canvas.getContext('2d');

        function resizeCanvas() {
            const rect = canvas.parentElement.getBoundingClientRect();
            canvas.width = rect.width * window.devicePixelRatio;
            canvas.height = rect.height * window.devicePixelRatio;
            drawGraph();
        }

        window.addEventListener('resize', resizeCanvas);

        function generateRandomFunction() {
            const aChoices = [1, -1, 2, -2];
            a = aChoices[Math.floor(Math.random() * aChoices.length)];
            b = Math.floor(Math.random() * 7) - 3;
            c = Math.floor(Math.random() * 9) - 4;

            const vertexX = -b / (2 * a);
            const startX = Math.round(vertexX) - 3;
            xValues = [];
            for (let i = 0; i < 7; i++) {
                xValues.push(startX + i);
            }

            updateEquationDisplay();
            resetState();
        }

        function updateEquationDisplay() {
            let eq = "y = ";
            if (a === 1) eq += "xÂ²";
            else if (a === -1) eq += "-xÂ²";
            else eq += a + "xÂ²";

            if (b > 0) eq += " + " + (b === 1 ? "" : b) + "x";
            else if (b < 0) eq += " - " + (Math.abs(b) === 1 ? "" : Math.abs(b)) + "x";

            if (c > 0) eq += " + " + c;
            else if (c < 0) eq += " - " + Math.abs(c);

            document.getElementById('equation').innerText = eq;
        }

        function resetState() {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);

            yValues = new Array(xValues.length).fill(null);
            currentCalcIndex = 0;
            plottedPointCount = 0;
            curveDrawn = false;
            curveProgress = 0;

            document.getElementById('totalCount').innerText = xValues.length;
            document.getElementById('plottedCount').innerText = 0;
            document.getElementById('calcNextBtn').disabled = false;
            document.getElementById('plotBtn').disabled = false;
            document.getElementById('curveBtn').disabled = true;

            const minX = xValues[0];
            const maxX = xValues[xValues.length - 1];

            const readerSlider = document.getElementById('xReaderSlider');
            readerSlider.min = minX;
            readerSlider.max = maxX;
            readerSlider.value = 0;

            const gradientSlider = document.getElementById('gradientSlider');
            gradientSlider.min = minX;
            gradientSlider.max = maxX;
            gradientSlider.value = (minX + maxX) / 2;

            document.getElementById('minXLabel').innerText = minX;
            document.getElementById('maxXLabel').innerText = maxX;
            document.getElementById('gradMinX').innerText = minX;
            document.getElementById('gradMaxX').innerText = maxX;

            updateCalcDisplay();
            renderTable();
            calculateVertexData();
            updateGradient();
            updateReader();
            drawGraph();
        }

        function renderTable() {
            const xRow = document.getElementById('xRow');
            const yRow = document.getElementById('yRow');

            xRow.innerHTML = '<th>x</th>' + xValues.map(function(x) { return '<th>' + x + '</th>'; }).join('');
            yRow.innerHTML = '<th>y</th>' + yValues.map(function(y, idx) {
                if (y === null) return '<td>?</td>';
                const isCalculated = idx === currentCalcIndex - 1;
                return '<td class="' + (isCalculated ? 'calculated' : '') + '">' + y + '</td>';
            }).join('');
        }

        function updateCalcDisplay() {
            const calcDisplay = document.getElementById('calcDisplay');
            if (currentCalcIndex === 0) {
                calcDisplay.innerHTML = '<span style="color:var(--text-muted); font-style:italic;">Click \\\'Calculate Next y\\\' to view substitution.</span>';
                return;
            }

            const lastX = xValues[currentCalcIndex - 1];
            const lastY = yValues[currentCalcIndex - 1];

            let subText = 'When x = ' + lastX + ':<br>y = ';
            if (a === 1) subText += '(' + lastX + ')Â²';
            else if (a === -1) subText += '-(' + lastX + ')Â²';
            else subText += a + '(' + lastX + ')Â²';

            if (b > 0) subText += ' + ' + b + '(' + lastX + ')';
            else if (b < 0) subText += ' - ' + Math.abs(b) + '(' + lastX + ')';

            if (c > 0) subText += ' + ' + c;
            else if (c < 0) subText += ' - ' + Math.abs(c);

            subText += '<br>= <strong style="color:var(--accent-green); font-size:1rem;">' + lastY + '</strong>';
            calcDisplay.innerHTML = subText;
        }

        function calculateNextYValue() {
            if (currentCalcIndex >= xValues.length) return;

            const x = xValues[currentCalcIndex];
            const y = a * x * x + b * x + c;
            yValues[currentCalcIndex] = y;

            currentCalcIndex++;
            updateCalcDisplay();
            renderTable();

            if (currentCalcIndex >= xValues.length) {
                document.getElementById('calcNextBtn').disabled = true;
            }
            drawGraph();
        }

        function plotNextPoint() {
            if (plottedPointCount >= currentCalcIndex) {
                if (currentCalcIndex < xValues.length) calculateNextYValue();
            }

            if (plottedPointCount < currentCalcIndex) {
                plottedPointCount++;
                document.getElementById('plottedCount').innerText = plottedPointCount;
                drawGraph();
            }

            if (plottedPointCount >= xValues.length) {
                document.getElementById('plotBtn').disabled = true;
            }

            if (plottedPointCount >= 2) {
                document.getElementById('curveBtn').disabled = false;
            }
        }

        function drawCurveAnimation() {
            if (plottedPointCount < 2) return;

            curveDrawn = true;
            curveProgress = 0;

            if (animationFrameId) cancelAnimationFrame(animationFrameId);

            function animate() {
                const speed = parseFloat(document.getElementById('speedSlider').value);
                curveProgress += speed;
                drawGraph();

                if (curveProgress < 1) animationFrameId = requestAnimationFrame(animate);
            }
            animate();
        }

        function updateSpeedLabel() {
            const val = parseFloat(document.getElementById('speedSlider').value);
            const label = document.getElementById('speedDisplay');
            if (val <= 0.005) label.innerText = "Very Slow";
            else if (val <= 0.012) label.innerText = "Slow";
            else if (val <= 0.018) label.innerText = "Normal";
            else label.innerText = "Fast";
        }

        function calculateVertexData() {
            const vx = -b / (2 * a);
            const vy = a * vx * vx + b * vx + c;
            const isMin = a > 0;

            const typeStr = isMin ? "MINIMUM (âˆª Shape)" : "MAXIMUM (âˆ© Shape)";
            const colorStr = isMin ? "var(--accent-green)" : "var(--accent-pink)";

            let html = '<strong>Type:</strong> <span style="color:' + colorStr + '">' + typeStr + '</span><br>';
            html += '<strong>Axis of Symmetry:</strong> x = ' + vx.toFixed(2) + '<br>';
            html += '<strong>Optimal Value:</strong> y = ' + vy.toFixed(2) + ' at x = ' + vx.toFixed(2);

            document.getElementById('vertexDisplay').innerHTML = html;
            return { x: vx, y: vy, isMin: isMin };
        }

        function updateGradient() {
            const x = parseFloat(document.getElementById('gradientSlider').value);
            const y = a * x * x + b * x + c;
            const m = 2 * a * x + b;

            const run = 1.0;
            const x1_tri = x - run / 2;
            const x2_tri = x + run / 2;
            const y1_tri = y - (m * run) / 2;
            const y2_tri = y + (m * run) / 2;

            const rise = y2_tri - y1_tri;

            let html = '<strong>At Point P (Tangent x = <span style="color:var(--accent-amber);">' + x.toFixed(2) + '</span>):</strong><br>';
            html += 'â€¢ Lower Point (<em>x</em><sub>1</sub>, <em>y</em><sub>1</sub>) = (' + x1_tri.toFixed(2) + ', ' + y1_tri.toFixed(2) + ')<br>';
            html += 'â€¢ Upper Point (<em>x</em><sub>2</sub>, <em>y</em><sub>2</sub>) = (' + x2_tri.toFixed(2) + ', ' + y2_tri.toFixed(2) + ')<br>';
            html += 'â€¢ Vertical Change (&Delta;<em>y</em>) = <em>y</em><sub>2</sub> &minus; <em>y</em><sub>1</sub> = ' + y2_tri.toFixed(2) + ' &minus; (' + y1_tri.toFixed(2) + ') = <strong>' + rise.toFixed(2) + '</strong><br>';
            html += 'â€¢ Horizontal Change (&Delta;<em>x</em>) = <em>x</em><sub>2</sub> &minus; <em>x</em><sub>1</sub> = ' + x2_tri.toFixed(2) + ' &minus; (' + x1_tri.toFixed(2) + ') = <strong>' + run.toFixed(2) + '</strong><br>';

            html += '<div class="fraction-line"><strong>Gradient (<em>m</em>)</strong> = <div class="frac"><span class="num">Vertical Change (Rise)</span><span class="den">Horizontal Change (Run)</span></div> = <div class="frac"><span class="num"><em>y</em><sub>2</sub> &minus; <em>y</em><sub>1</sub></span><span class="den"><em>x</em><sub>2</sub> &minus; <em>x</em><sub>1</sub></span></div> = <div class="frac"><span class="num">' + rise.toFixed(2) + '</span><span class="den">' + run.toFixed(2) + '</span></div> = <strong style="color:var(--accent-purple); font-size: 1rem;">' + m.toFixed(2) + '</strong></div>';

            document.getElementById('gradientDisplay').innerHTML = html;
            drawGraph();
        }

        function updateReader() {
            const x = parseFloat(document.getElementById('xReaderSlider').value);
            const y = a * x * x + b * x + c;
            document.getElementById('readerCoords').innerText = 'x = ' + x.toFixed(1) + ', y = ' + y.toFixed(1);
            drawGraph();
        }

        function drawGraph() {
            const w = canvas.width;
            const h = canvas.height;
            ctx.clearRect(0, 0, w, h);

            const allCalculatedY = yValues.filter(function(v) { return v !== null; });
            const vx = -b / (2 * a);
            const vy = a * vx * vx + b * vx + c;

            let minY = Math.min(-5, ...allCalculatedY, vy - 2);
            let maxY = Math.max(5, ...allCalculatedY, vy + 2);
            let minX = xValues[0] - 1;
            let maxX = xValues[xValues.length - 1] + 1;

            const padding = 55 * window.devicePixelRatio;
            const toCanvasX = function(x) { return padding + ((x - minX) / (maxX - minX)) * (w - 2 * padding); };
            const toCanvasY = function(y) { return h - padding - ((y - minY) / (maxY - minY)) * (h - 2 * padding); };

            let eqText = "Function: y = ";
            if (a === 1) eqText += "xÂ²";
            else if (a === -1) eqText += "-xÂ²";
            else eqText += a + "xÂ²";
            if (b > 0) eqText += " + " + (b === 1 ? "" : b) + "x";
            else if (b < 0) eqText += " - " + (Math.abs(b) === 1 ? "" : Math.abs(b)) + "x";
            if (c > 0) eqText += " + " + c;
            else if (c < 0) eqText += " - " + Math.abs(c);

            ctx.fillStyle = '#fbbf24';
            ctx.font = 'bold ' + (14 * window.devicePixelRatio) + 'px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText(eqText, padding, 24 * window.devicePixelRatio);

            ctx.lineWidth = 1 * window.devicePixelRatio;
            ctx.strokeStyle = '#334155';
            ctx.fillStyle = '#94a3b8';
            ctx.font = (11 * window.devicePixelRatio) + 'px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            for (let x = Math.ceil(minX); x <= Math.floor(maxX); x++) {
                const cx = toCanvasX(x);
                ctx.beginPath();
                ctx.moveTo(cx, 0);
                ctx.lineTo(cx, h);
                ctx.stroke();

                if (x !== 0) {
                    const cyZero = toCanvasY(0);
                    const labelY = Math.min(Math.max(cyZero + 15, 15), h - 15);
                    ctx.fillText(x, cx, labelY);
                }
            }

            for (let y = Math.ceil(minY); y <= Math.floor(maxY); y++) {
                const cy = toCanvasY(y);
                ctx.beginPath();
                ctx.moveTo(0, cy);
                ctx.lineTo(w, cy);
                ctx.stroke();

                if (y !== 0) {
                    const cxZero = toCanvasX(0);
                    const labelX = Math.min(Math.max(cxZero - 15, 15), w - 15);
                    ctx.fillText(y, labelX, cy);
                }
            }

            ctx.lineWidth = 2.5 * window.devicePixelRatio;
            ctx.strokeStyle = '#94a3b8';
            ctx.fillStyle = '#f8fafc';

            const yZero = toCanvasY(0);
            const xZero = toCanvasX(0);

            ctx.beginPath();
            ctx.moveTo(0, yZero);
            ctx.lineTo(w - 15 * window.devicePixelRatio, yZero);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(w - 15 * window.devicePixelRatio, yZero - 6 * window.devicePixelRatio);
            ctx.lineTo(w - 2 * window.devicePixelRatio, yZero);
            ctx.lineTo(w - 15 * window.devicePixelRatio, yZero + 6 * window.devicePixelRatio);
            ctx.fill();

            ctx.font = 'bold ' + (16 * window.devicePixelRatio) + 'px sans-serif';
            ctx.textAlign = 'right';
            ctx.fillText('x', w - 5 * window.devicePixelRatio, yZero - 18 * window.devicePixelRatio);

            ctx.beginPath();
            ctx.moveTo(xZero, h);
            ctx.lineTo(xZero, 15 * window.devicePixelRatio);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(xZero - 6 * window.devicePixelRatio, 15 * window.devicePixelRatio);
            ctx.lineTo(xZero, 2 * window.devicePixelRatio);
            ctx.lineTo(xZero + 6 * window.devicePixelRatio, 15 * window.devicePixelRatio);
            ctx.fill();

            ctx.textAlign = 'left';
            ctx.fillText('y', xZero + 12 * window.devicePixelRatio, 15 * window.devicePixelRatio);

            if (curveDrawn && plottedPointCount >= 2) {
                ctx.lineWidth = 3 * window.devicePixelRatio;
                ctx.strokeStyle = '#38bdf8';
                ctx.beginPath();

                const firstPlottedX = xValues[0];
                const lastPlottedX = xValues[plottedPointCount - 1];
                const activeSpanX = lastPlottedX - firstPlottedX;

                const totalSteps = 300;
                const endStep = Math.floor(totalSteps * Math.min(curveProgress, 1));

                for (let i = 0; i <= endStep; i++) {
                    const t = i / totalSteps;
                    const curX = firstPlottedX + t * activeSpanX;
                    const curY = a * curX * curX + b * curX + c;

                    const cx = toCanvasX(curX);
                    const cy = toCanvasY(curY);

                    if (i === 0) ctx.moveTo(cx, cy);
                    else ctx.lineTo(cx, cy);
                }
                ctx.stroke();
            }

            for (let idx = 0; idx < plottedPointCount; idx++) {
                const x = xValues[idx];
                const y = yValues[idx];
                if (y === null) continue;

                const cx = toCanvasX(x);
                const cy = toCanvasY(y);

                ctx.fillStyle = '#4ade80';
                ctx.beginPath();
                ctx.arc(cx, cy, 6.5 * window.devicePixelRatio, 0, Math.PI * 2);
                ctx.fill();

                ctx.fillStyle = '#0f172a';
                ctx.beginPath();
                ctx.arc(cx, cy, 2.5 * window.devicePixelRatio, 0, Math.PI * 2);
                ctx.fill();
            }

            if (document.getElementById('showVertexCheck').checked) {
                const vcx = toCanvasX(vx);
                const vcy = toCanvasY(vy);

                ctx.lineWidth = 1.5 * window.devicePixelRatio;
                ctx.strokeStyle = '#fbbf24';
                ctx.setLineDash([5 * window.devicePixelRatio, 4 * window.devicePixelRatio]);

                ctx.beginPath();
                ctx.moveTo(vcx, 0);
                ctx.lineTo(vcx, h);
                ctx.stroke();
                ctx.setLineDash([]);

                ctx.fillStyle = '#fbbf24';
                ctx.beginPath();
                ctx.arc(vcx, vcy, 7 * window.devicePixelRatio, 0, Math.PI * 2);
                ctx.fill();

                ctx.font = 'bold ' + (11 * window.devicePixelRatio) + 'px sans-serif';
                ctx.fillStyle = '#fbbf24';
                ctx.textAlign = vx > 0 ? 'right' : 'left';
                ctx.fillText((a > 0 ? 'Min' : 'Max') + ' (' + vx.toFixed(1) + ', ' + vy.toFixed(1) + ')', vcx + (vx > 0 ? -10 : 10) * window.devicePixelRatio, vcy - 10 * window.devicePixelRatio);
            }

            if (document.getElementById('showGradientCheck').checked) {
                const gx = parseFloat(document.getElementById('gradientSlider').value);
                const gy = a * gx * gx + b * gx + c;
                const m = 2 * a * gx + b;

                const run = 1.0;
                const x1_tri = gx - run / 2;
                const x2_tri = gx + run / 2;
                const y1_tri = gy - (m * run) / 2;
                const y2_tri = gy + (m * run) / 2;

                const p1x = toCanvasX(x1_tri);
                const p1y = toCanvasY(y1_tri);
                const p2x = toCanvasX(x2_tri);
                const p2y = toCanvasY(y2_tri);
                const cornerX = p2x;
                const cornerY = p1y;

                ctx.lineWidth = 2 * window.devicePixelRatio;
                ctx.strokeStyle = '#c084fc';
                ctx.beginPath();
                const tangLen = 2.0;
                ctx.moveTo(toCanvasX(gx - tangLen), toCanvasY(gy - m * tangLen));
                ctx.lineTo(toCanvasX(gx + tangLen), toCanvasY(gy + m * tangLen));
                ctx.stroke();

                ctx.lineWidth = 2 * window.devicePixelRatio;
                ctx.strokeStyle = '#c084fc';
                ctx.fillStyle = 'rgba(192, 132, 252, 0.15)';

                ctx.beginPath();
                ctx.moveTo(p1x, p1y);
                ctx.lineTo(cornerX, cornerY);
                ctx.lineTo(p2x, p2y);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();

                ctx.fillStyle = '#c084fc';
                ctx.beginPath();
                ctx.arc(toCanvasX(gx), toCanvasY(gy), 5.5 * window.devicePixelRatio, 0, Math.PI * 2);
                ctx.fill();
            }

            const readX = parseFloat(document.getElementById('xReaderSlider').value);
            const readY = a * readX * readX + b * readX + c;

            const rx = toCanvasX(readX);
            const ry = toCanvasY(readY);

            ctx.lineWidth = 1.5 * window.devicePixelRatio;
            ctx.strokeStyle = '#f472b6';
            ctx.setLineDash([5 * window.devicePixelRatio, 4 * window.devicePixelRatio]);

            ctx.beginPath();
            ctx.moveTo(rx, yZero);
            ctx.lineTo(rx, ry);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(rx, ry);
            ctx.lineTo(xZero, ry);
            ctx.stroke();

            ctx.setLineDash([]);

            ctx.fillStyle = '#f472b6';
            ctx.beginPath();
            ctx.arc(rx, ry, 5 * window.devicePixelRatio, 0, Math.PI * 2);
            ctx.fill();
        }

        setTimeout(function() {
            updateEquationDisplay();
            resizeCanvas();
            resetState();
        }, 100);
    </script>
</body>
</html>`,
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-16"
  },
  {
    id: "sim-iupac-3d-chemistry",
    title: "3D IUPAC Organic Chemistry Molecular Lab",
    tagline: "Interactive 3D Molecular Builder, Systematic IUPAC Naming & Functional Group Valence Engine",
    discipline: "chemistry",
    gradeLevel: ["High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["HS-PS1-1", "HS-PS1-2", "AP Chemistry (Unit 2)", "IB Chemistry Topic 10 (Organic Chemistry)"],
    description: "Construct and visualize 3D organic molecules with real-time systematic IUPAC nomenclature parsing. Features dynamic chain length adjustment (1-10 carbons), single/double/triple bonds with Cis (Z) and Trans (E) stereochemistry, extensive functional group substituents (alkyls, carboxylic acids, ethers, esters, halogens, amines, alcohols, carbonyls), multiple representation modes (Ball & Stick, Condensed, Skeletal), and 3D orbital-style rotation.",
    learningObjectives: [
      "Master IUPAC nomenclature rules including lowest locant numbering, alphabetical prefix ordering, and principal functional group suffix prioritization",
      "Model 3D molecular conformations and compare Ball & Stick, Condensed, and Skeletal visual representations",
      "Investigate geometric isomerism (Cis/Z vs Trans/E) across carbon-carbon double bonds",
      "Validate octet rule constraints and carbon tetravalency across substituted hydrocarbon structures"
    ],
    thumbnailGradient: "from-emerald-600 via-teal-700 to-cyan-900",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    iconName: "Atom",
    rating: 5.0,
    reviewCount: 42,
    teacherCount: 168,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Real-time IUPAC nomenclature engine with prefix, root, and suffix component breakdown",
      "Interactive 3D Ball & Stick, Condensed, and Skeletal molecular rendering with smooth rotation",
      "Cis/Trans (E/Z) stereochemistry modeling for alkenes and alkynes",
      "Carbon tetravalence enforcement with automatic octet collision alerts and locant optimization"
    ],
    parameterDefaults: {
      chainLength: 4,
      viewMode: "structural"
    },
    parameterControls: [
      {
        key: "chainLength",
        label: "Parent Chain Carbons",
        min: 1,
        max: 10,
        step: 1,
        unit: "carbons",
        description: "Number of carbons in the primary alkane/alkene chain"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-iupac-1",
        title: "Synthesize (trans)-But-2-enoic acid",
        instruction: "Build a 4-carbon chain with a C2=C3 trans double bond and a C1 Carboxylic Acid (-COOH) group.",
        targetMetric: "Molecular Name Match",
        targetValue: 1.0,
        tolerance: 0.0,
        currentValueKey: "valid",
        rewardBadge: "Organic Chemist"
      }
    ],
    previewFacts: [
      "IUPAC (International Union of Pure and Applied Chemistry) rules establish a standardized naming protocol ensuring every chemical structure corresponds to exactly one unique name.",
      "Carbon always forms four covalent bonds in stable organic molecules due to sp3, sp2, or sp hybridization of its valence orbitals."
    ],
    isHtmlApp: true,
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3D IUPAC Chemistry Simulator (Large Atom Display)</title>
    <style>
        :root {
            --bg-color: #030712;
            --card-bg: #0f172a;
            --border-color: #1e293b;
            --accent-blue: #38bdf8;
            --text-main: #f8fafc;
            --text-muted: #94a3b8;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-main);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            width: 100%;
            max-width: 1250px;
            background-color: var(--card-bg);
            border: 2px solid #334155;
            border-radius: 14px;
            box-shadow: 0 15px 35px rgba(0,0,0,0.8);
            overflow: hidden;
            display: flex;
            flex-direction: column;
            gap: 16px;
            padding: 24px;
        }

        header {
            text-align: center;
            border-bottom: 2px solid var(--border-color);
            padding-bottom: 16px;
        }

        h1 {
            font-size: 1.6rem;
            color: #ffffff;
            margin-bottom: 6px;
            letter-spacing: 0.5px;
        }

        .iupac-display {
            font-size: 2.2rem;
            font-weight: 800;
            letter-spacing: 0.8px;
            margin: 8px 0;
            color: #38bdf8;
            text-shadow: 0 0 12px rgba(56, 189, 248, 0.3);
            min-height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .iupac-display.error {
            color: #f87171;
            text-shadow: 0 0 12px rgba(239, 68, 68, 0.4);
            font-size: 1.2rem;
        }

        .iupac-breakdown {
            font-size: 0.95rem;
            color: var(--text-muted);
            display: flex;
            justify-content: center;
            gap: 8px;
            flex-wrap: wrap;
            min-height: 30px;
        }

        .breakdown-tag {
            padding: 4px 10px;
            border-radius: 6px;
            font-weight: 700;
            font-size: 0.85rem;
            border: 1px solid transparent;
        }

        .tag-prefix { background: rgba(244, 63, 94, 0.2); color: #fb7185; border-color: #f43f5e; }
        .tag-root { background: rgba(56, 189, 248, 0.2); color: #38bdf8; border-color: #0284c7; }
        .tag-suffix { background: rgba(34, 197, 94, 0.2); color: #4ade80; border-color: #16a34a; }
        .tag-stereo { background: rgba(217, 119, 6, 0.2); color: #fbbf24; border-color: #d97706; }

        .canvas-container {
            position: relative;
            background: #020617;
            border: 2px solid #334155;
            border-radius: 10px;
            width: 100%;
            height: 480px;
            cursor: grab;
            overflow: hidden;
        }

        .canvas-container:active {
            cursor: grabbing;
        }

        .canvas-hint {
            position: absolute;
            top: 10px;
            right: 12px;
            background: rgba(15, 23, 42, 0.85);
            border: 1px solid #475569;
            color: #f1f5f9;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
            pointer-events: none;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        canvas {
            width: 100%;
            height: 100%;
            display: block;
        }

        .controls-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 16px;
            background: rgba(3, 7, 18, 0.6);
            padding: 18px;
            border-radius: 10px;
            border: 1px solid var(--border-color);
        }

        .control-group {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        label {
            font-size: 0.85rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            color: #cbd5e1;
        }

        .slider-row {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        input[type="range"] {
            flex: 1;
            accent-color: var(--accent-blue);
            cursor: pointer;
        }

        .btn-group {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }

        button {
            background: #1e293b;
            border: 1px solid #475569;
            color: #ffffff;
            padding: 8px 14px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 0.85rem;
            font-weight: 600;
            transition: all 0.2s ease;
        }

        button:hover {
            border-color: var(--accent-blue);
            color: var(--accent-blue);
        }

        button.active {
            background: #0284c7;
            color: #ffffff;
            border-color: #38bdf8;
            font-weight: 800;
            box-shadow: 0 0 10px rgba(56, 189, 248, 0.4);
        }

        .bond-selectors, .substituent-selectors {
            display: flex;
            gap: 8px;
            overflow-x: auto;
            padding-bottom: 8px;
            scroll-behavior: smooth;
        }

        .bond-selectors::-webkit-scrollbar, .substituent-selectors::-webkit-scrollbar {
            height: 6px;
        }

        .bond-selectors::-webkit-scrollbar-thumb, .substituent-selectors::-webkit-scrollbar-thumb {
            background: #334155;
            border-radius: 4px;
        }

        .bond-card, .sub-card {
            background: #1e293b;
            border: 1px solid #475569;
            border-radius: 6px;
            padding: 8px 10px;
            min-width: 175px;
            flex-shrink: 0;
            text-align: center;
            font-size: 0.8rem;
            font-weight: 600;
        }

        .bond-card select, .sub-card select {
            width: 100%;
            margin-top: 4px;
            background: #090d16;
            color: #ffffff;
            border: 1px solid #475569;
            border-radius: 4px;
            padding: 5px;
            font-weight: bold;
            cursor: pointer;
        }

        .legend {
            display: flex;
            justify-content: center;
            gap: 14px;
            flex-wrap: wrap;
            font-size: 0.8rem;
            font-weight: 600;
            color: #cbd5e1;
            border-top: 2px solid var(--border-color);
            padding-top: 14px;
        }

        .legend-item {
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            border: 1px solid #ffffff;
        }

        .dot-c { background: #10b981; }
        .dot-h { background: #ffffff; }
        .dot-alkyl { background: #f43f5e; }
        .dot-o { background: #ef4444; }
        .dot-halo { background: #a855f7; }
        .dot-n { background: #3b82f6; }
    </style>
</head>
<body>

<div class="container">
    <header>
        <h1>3D IUPAC Chemistry Simulator</h1>
        <div class="iupac-display" id="iupac-name">Loading...</div>
        <div class="iupac-breakdown" id="iupac-breakdown">--</div>
    </header>

    <div class="canvas-container" id="canvas-wrapper">
        <div class="canvas-hint">ðŸŒ Drag to rotate | Scroll to scale</div>
        <canvas id="moleculeCanvas"></canvas>
    </div>

    <div class="controls-grid">
        <div class="control-group">
            <label>Parent Chain (<span id="chain-len-val">4</span> Carbons)</label>
            <div class="slider-row">
                <input type="range" id="chain-length" min="1" max="10" value="4">
            </div>
        </div>

        <div class="control-group">
            <label>3D View Rotation</label>
            <div class="slider-row">
                <span style="font-size:0.75rem; width:15px;">Y:</span>
                <input type="range" id="rot-y-slider" min="0" max="360" value="0">
            </div>
            <div class="slider-row">
                <span style="font-size:0.75rem; width:15px;">X:</span>
                <input type="range" id="rot-x-slider" min="0" max="360" value="0">
                <button id="reset-rot-btn">Reset</button>
            </div>
        </div>

        <div class="control-group">
            <label>Style Mode</label>
            <div class="btn-group" id="view-mode-btns">
                <button data-mode="structural" class="active">Ball & Stick</button>
                <button data-mode="condensed">Condensed</button>
                <button data-mode="skeletal">Skeletal</button>
            </div>
        </div>

        <div class="control-group" style="grid-column: 1 / -1;">
            <label>Bonds & Cis/Trans Geometry</label>
            <div class="bond-selectors" id="bond-selectors-container"></div>
        </div>

        <div class="control-group" style="grid-column: 1 / -1;">
            <label>Substituents & Functional Groups (Alkyls, Acids, Ethers, Esters, Halogens)</label>
            <div class="substituent-selectors" id="sub-selectors-container"></div>
        </div>
    </div>

    <div class="legend">
        <div class="legend-item"><div class="dot dot-c"></div> Carbon (C)</div>
        <div class="legend-item"><div class="dot dot-h"></div> Hydrogen (H)</div>
        <div class="legend-item"><div class="dot dot-o"></div> Oxygen (O)</div>
        <div class="legend-item"><div class="dot dot-alkyl"></div> Alkyl Chains</div>
        <div class="legend-item"><div class="dot dot-halo"></div> Halogens</div>
        <div class="legend-item"><div class="dot dot-n"></div> Nitrogen (N)</div>
    </div>
</div>

<script>
const canvas = document.getElementById('moleculeCanvas');
const ctx = canvas.getContext('2d');
const wrapper = document.getElementById('canvas-wrapper');

const GROUPS = {
    'NONE':   { name: 'None', label: '', color: '#000000', valence: 0, priority: 0 },
    'CH3':    { name: 'Methyl (-CHâ‚ƒ)', label: '-CHâ‚ƒ', color: '#f43f5e', valence: 1, priority: 1, type: 'prefix', prefixName: 'methyl' },
    'C2H5':   { name: 'Ethyl (-Câ‚‚Hâ‚…)', label: '-Câ‚‚Hâ‚…', color: '#fb7185', valence: 1, priority: 1, type: 'prefix', prefixName: 'ethyl' },
    'C3H7':   { name: 'Propyl (-Câ‚ƒHâ‚‡)', label: '-Câ‚ƒHâ‚‡', color: '#f472b6', valence: 1, priority: 1, type: 'prefix', prefixName: 'propyl' },
    'C4H9':   { name: 'Butyl (-Câ‚„Hâ‚‰)', label: '-Câ‚„Hâ‚‰', color: '#fda4af', valence: 1, priority: 1, type: 'prefix', prefixName: 'butyl' },
    'C5H11':  { name: 'Pentyl (-Câ‚…Hâ‚â‚)', label: '-Câ‚…Hâ‚â‚', color: '#fecdd3', valence: 1, priority: 1, type: 'prefix', prefixName: 'pentyl' },
    'COOH':   { name: 'Carboxylic Acid (-COOH)', label: 'COOH', color: '#e11d48', valence: 1, priority: 10, type: 'suffix', suffixName: 'oic acid', prefixName: 'carboxy' },
    'OCH3':   { name: 'Methoxy (-OCHâ‚ƒ)', label: '-OCHâ‚ƒ', color: '#d97706', valence: 1, priority: 2, type: 'prefix', prefixName: 'methoxy' },
    'OC2H5':  { name: 'Ethoxy (-OCâ‚‚Hâ‚…)', label: '-OCâ‚‚Hâ‚…', color: '#f59e0b', valence: 1, priority: 2, type: 'prefix', prefixName: 'ethoxy' },
    'OPh':    { name: 'Phenoxy (-OCâ‚†Hâ‚…)', label: '-OPh', color: '#b45309', valence: 1, priority: 2, type: 'prefix', prefixName: 'phenoxy' },
    'COOCH3':  { name: 'Carbomethoxy (-COOCHâ‚ƒ)', label: 'COOCHâ‚ƒ', color: '#10b981', valence: 1, priority: 9, type: 'prefix', prefixName: 'methoxycarbonyl' },
    'COOC2H5': { name: 'Carboethoxy (-COOCâ‚‚Hâ‚…)', label: 'COOCâ‚‚Hâ‚…', color: '#059669', valence: 1, priority: 9, type: 'prefix', prefixName: 'ethoxycarbonyl' },
    'F':      { name: 'Fluoro (-F)', label: 'F', color: '#06b6d4', valence: 1, priority: 1, type: 'prefix', prefixName: 'fluoro' },
    'CL':     { name: 'Chloro (-Cl)', label: 'Cl', color: '#22c55e', valence: 1, priority: 1, type: 'prefix', prefixName: 'chloro' },
    'BR':     { name: 'Bromo (-Br)', label: 'Br', color: '#b45309', valence: 1, priority: 1, type: 'prefix', prefixName: 'bromo' },
    'I':      { name: 'Iodo (-I)', label: 'I', color: '#a855f7', valence: 1, priority: 1, type: 'prefix', prefixName: 'iodo' },
    'OH':     { name: 'Hydroxyl (-OH)', label: 'OH', color: '#ef4444', valence: 1, priority: 5, type: 'suffix', suffixName: 'ol', prefixName: 'hydroxy' },
    'NH2':    { name: 'Amino (-NHâ‚‚)', label: 'NHâ‚‚', color: '#3b82f6', valence: 1, priority: 4, type: 'suffix', suffixName: 'amine', prefixName: 'amino' },
    'OXO':    { name: 'Carbonyl (=O)', label: '=O', color: '#f43f5e', valence: 2, priority: 6, type: 'suffix', suffixName: 'one', prefixName: 'oxo' }
};

const ROOTS = ["", "meth", "eth", "prop", "but", "pent", "hex", "hept", "oct", "non", "dec"];
const MULTIPLIERS = ["", "", "di", "tri", "tetra", "penta", "hexa", "hepta", "octa"];

let chainLength = 4;
let bondStates = Array.from({ length: 9 }, function() { return { order: 1, geom: 'trans' }; });
let substituents = Array.from({ length: 10 }, function() { return { g1: 'NONE', g2: 'NONE' }; });
let viewMode = 'structural'; 

let angleX = 0.2;
let angleY = 0.3;
let isDragging = false;
let prevMouse = { x: 0, y: 0 };

function resizeCanvas() {
    canvas.width = wrapper.clientWidth;
    canvas.height = wrapper.clientHeight;
    draw();
}
window.addEventListener('resize', resizeCanvas);

wrapper.addEventListener('mousedown', function(e) {
    isDragging = true;
    prevMouse = { x: e.clientX, y: e.clientY };
});

window.addEventListener('mousemove', function(e) {
    if (!isDragging) return;
    angleY += (e.clientX - prevMouse.x) * 0.008;
    angleX += (e.clientY - prevMouse.y) * 0.008;
    syncRotationSliders();
    prevMouse = { x: e.clientX, y: e.clientY };
    draw();
});

window.addEventListener('mouseup', function() { isDragging = false; });

document.getElementById('rot-y-slider').addEventListener('input', function(e) {
    angleY = (parseInt(e.target.value) * Math.PI) / 180;
    draw();
});

document.getElementById('rot-x-slider').addEventListener('input', function(e) {
    angleX = (parseInt(e.target.value) * Math.PI) / 180;
    draw();
});

document.getElementById('reset-rot-btn').addEventListener('click', function() {
    angleX = 0.2; angleY = 0.3;
    syncRotationSliders();
    draw();
});

function syncRotationSliders() {
    let degY = Math.round(((angleY % (Math.PI * 2)) * 180) / Math.PI);
    let degX = Math.round(((angleX % (Math.PI * 2)) * 180) / Math.PI);
    if (degY < 0) degY += 360;
    if (degX < 0) degX += 360;
    document.getElementById('rot-y-slider').value = degY;
    document.getElementById('rot-x-slider').value = degX;
}

document.getElementById('chain-length').addEventListener('input', function(e) {
    chainLength = parseInt(e.target.value);
    document.getElementById('chain-len-val').innerText = chainLength;
    updateControlUI();
    draw();
});

document.querySelectorAll('#view-mode-btns button').forEach(function(btn) {
    btn.addEventListener('click', function() {
        document.querySelectorAll('#view-mode-btns button').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        viewMode = btn.dataset.mode;
        draw();
    });
});

function updateControlUI() {
    const bContainer = document.getElementById('bond-selectors-container');
    bContainer.innerHTML = '';
    for (let i = 0; i < chainLength - 1; i++) {
        const div = document.createElement('div');
        div.className = 'bond-card';
        div.innerHTML = '<div>C' + (i+1) + ' - C' + (i+2) + '</div>' +
            '<select data-bond-idx="' + i + '" class="bond-order">' +
                '<option value="1" ' + (bondStates[i].order === 1 ? 'selected' : '') + '>Single (-)</option>' +
                '<option value="2" ' + (bondStates[i].order === 2 ? 'selected' : '') + '>Double (=)</option>' +
                '<option value="3" ' + (bondStates[i].order === 3 ? 'selected' : '') + '>Triple (â‰¡)</option>' +
            '</select>' +
            (bondStates[i].order === 2 ? (
            '<select data-bond-idx="' + i + '" class="bond-geom">' +
                '<option value="trans" ' + (bondStates[i].geom === 'trans' ? 'selected' : '') + '>Trans (E)</option>' +
                '<option value="cis" ' + (bondStates[i].geom === 'cis' ? 'selected' : '') + '>Cis (Z)</option>' +
            '</select>') : '');
        bContainer.appendChild(div);
    }

    const sContainer = document.getElementById('sub-selectors-container');
    sContainer.innerHTML = '';
    for (let i = 0; i < chainLength; i++) {
        const div = document.createElement('div');
        div.className = 'sub-card';
        let opts = Object.keys(GROUPS).map(function(k) { return '<option value="' + k + '">' + GROUPS[k].name + '</option>'; }).join('');

        div.innerHTML = '<div>C' + (i+1) + ' Group A</div>' +
            '<select data-sub-idx="' + i + '" data-sub-pos="g1">' + opts + '</select>' +
            '<div style="margin-top:4px;">C' + (i+1) + ' Group B</div>' +
            '<select data-sub-idx="' + i + '" data-sub-pos="g2">' + opts + '</select>';
        
        div.querySelectorAll('select')[0].value = substituents[i].g1;
        div.querySelectorAll('select')[1].value = substituents[i].g2;
        sContainer.appendChild(div);
    }

    bContainer.querySelectorAll('.bond-order').forEach(function(sel) {
        sel.addEventListener('change', function(e) {
            bondStates[parseInt(e.target.dataset.bondIdx)].order = parseInt(e.target.value);
            updateControlUI();
            draw();
        });
    });

    bContainer.querySelectorAll('.bond-geom').forEach(function(sel) {
        sel.addEventListener('change', function(e) {
            bondStates[parseInt(e.target.dataset.bondIdx)].geom = e.target.value;
            draw();
        });
    });

    sContainer.querySelectorAll('select').forEach(function(sel) {
        sel.addEventListener('change', function(e) {
            let idx = parseInt(e.target.dataset.subIdx);
            let pos = e.target.dataset.subPos;
            substituents[idx][pos] = e.target.value;
            draw();
        });
    });
}

function validateValence() {
    let carbonBonds = new Array(chainLength).fill(0);

    for (let i = 0; i < chainLength; i++) {
        if (i > 0) carbonBonds[i] += bondStates[i - 1].order;
        if (i < chainLength - 1) carbonBonds[i] += bondStates[i].order;
        
        carbonBonds[i] += GROUPS[substituents[i].g1].valence;
        carbonBonds[i] += GROUPS[substituents[i].g2].valence;
    }

    for (let i = 0; i < chainLength; i++) {
        if (carbonBonds[i] > 4) {
            return { valid: false, errorCarbon: i + 1, count: carbonBonds[i] };
        }
    }
    return { valid: true, carbonBonds: carbonBonds };
}

function evaluateIUPAC() {
    const valenceCheck = validateValence();
    if (!valenceCheck.valid) {
        return { 
            valid: false, 
            errorMessage: 'âš ï¸ Invalid Structure: C' + valenceCheck.errorCarbon + ' has ' + valenceCheck.count + ' bonds (Max: 4)' 
        };
    }

    let sumForward = 0;
    let sumReverse = 0;

    for (let i = 0; i < chainLength; i++) {
        let fLoc = i + 1;
        let rLoc = chainLength - i;

        let gKeys = [substituents[i].g1, substituents[i].g2];
        gKeys.forEach(function(k) {
            if (k !== 'NONE') {
                let weight = GROUPS[k].priority * 10;
                sumForward += fLoc * weight;
                sumReverse += rLoc * weight;
            }
        });
    }

    let useReversed = sumReverse < sumForward;

    let effBonds = useReversed ? bondStates.slice(0, chainLength - 1).reverse() : bondStates.slice(0, chainLength - 1);
    let effSubs = useReversed ? substituents.slice(0, chainLength).reverse() : substituents.slice(0, chainLength);

    let stereoPrefixes = [];
    for (let i = 0; i < effBonds.length; i++) {
        if (effBonds[i].order === 2 && chainLength > 3) {
            stereoPrefixes.push(effBonds[i].geom);
        }
    }

    let maxPriority = 0;
    let principalGroupKey = null;

    for (let i = 0; i < chainLength; i++) {
        [effSubs[i].g1, effSubs[i].g2].forEach(function(k) {
            if (k !== 'NONE' && GROUPS[k].type === 'suffix') {
                if (GROUPS[k].priority > maxPriority) {
                    maxPriority = GROUPS[k].priority;
                    principalGroupKey = k;
                }
            }
        });
    }

    let prefixMap = {};
    let suffixLocants = [];

    for (let i = 0; i < chainLength; i++) {
        let loc = i + 1;
        let keys = [effSubs[i].g1, effSubs[i].g2];

        keys.forEach(function(k) {
            if (k === 'NONE') return;

            if (principalGroupKey && k === principalGroupKey) {
                suffixLocants.push(loc);
            } else {
                let pName = GROUPS[k].prefixName || GROUPS[k].name;
                if (!prefixMap[pName]) prefixMap[pName] = [];
                prefixMap[pName].push(loc);
            }
        });
    }

    let sortedPrefixNames = Object.keys(prefixMap).sort();
    let prefixParts = [];

    sortedPrefixNames.forEach(function(pName) {
        let locs = prefixMap[pName].sort(function(a, b) { return a - b; });
        let mult = MULTIPLIERS[locs.length] || "";
        prefixParts.push(locs.join(",") + "-" + mult + pName);
    });

    let prefixStr = prefixParts.length > 0 ? prefixParts.join("-") + "-" : "";

    let root = ROOTS[chainLength];
    let enes = [], ynes = [];
    for (let i = 0; i < effBonds.length; i++) {
        if (effBonds[i].order === 2) enes.push(i + 1);
        if (effBonds[i].order === 3) ynes.push(i + 1);
    }

    let saturationStr = "ane";
    if (enes.length > 0 || ynes.length > 0) {
        if (enes.length > 0 && ynes.length === 0) {
            let mult = MULTIPLIERS[enes.length] || "";
            saturationStr = "-" + enes.join(",") + "-" + mult + "ene";
            if (enes.length > 1) root += "a";
        } else if (ynes.length > 0 && enes.length === 0) {
            let mult = MULTIPLIERS[ynes.length] || "";
            saturationStr = "-" + ynes.join(",") + "-" + mult + "yne";
            if (ynes.length > 1) root += "a";
        }
    }

    let suffixStr = "";
    if (principalGroupKey) {
        let pGroup = GROUPS[principalGroupKey];
        let sLocs = suffixLocants.sort(function(a, b) { return a - b; });
        let mult = MULTIPLIERS[sLocs.length] || "";

        if (principalGroupKey === 'COOH') {
            if (saturationStr.endsWith("e")) saturationStr = saturationStr.slice(0, -1);
            suffixStr = (sLocs.length > 1 ? '-' + sLocs.join(",") + '-' + mult : '') + 'oic acid';
        } else {
            let firstChar = pGroup.suffixName.charAt(0);
            let isVowel = ['a', 'e', 'i', 'o', 'u'].includes(firstChar);

            if (isVowel && mult === "" && saturationStr.endsWith("e")) {
                saturationStr = saturationStr.slice(0, -1);
            }

            if (sLocs.length === 1 && chainLength <= 2 && principalGroupKey === 'OH') {
                suffixStr = pGroup.suffixName;
            } else {
                suffixStr = '-' + sLocs.join(",") + '-' + mult + pGroup.suffixName;
            }
        }
    }

    let fullSuffix = saturationStr + suffixStr;
    let stereoTag = stereoPrefixes.length > 0 ? '(' + stereoPrefixes.join(",") + ') - ' : "";
    let fullName = stereoTag + prefixStr + root + fullSuffix;
    fullName = fullName.charAt(0).toUpperCase() + fullName.slice(1);

    return { 
        valid: true, 
        fullName: fullName, 
        prefix: prefixStr, 
        root: root, 
        suffix: fullSuffix, 
        stereoTag: stereoTag,
        useReversed: useReversed, 
        carbonBonds: valenceCheck.carbonBonds 
    };
}

function updateIUPACDisplay(info) {
    const nameEl = document.getElementById('iupac-name');
    const breakdownEl = document.getElementById('iupac-breakdown');

    if (!info.valid) {
        nameEl.className = "iupac-display error";
        nameEl.innerHTML = info.errorMessage;
        breakdownEl.innerHTML = '<span style="color:#f87171; font-weight:bold;">Geometry / Valence collision detected.</span>';
    } else {
        nameEl.className = "iupac-display";
        nameEl.innerHTML = info.fullName;
        
        let breakdownHTML = [];
        if (info.stereoTag) breakdownHTML.push('<span class="breakdown-tag tag-stereo">Stereo: ' + info.stereoTag + '</span>');
        if (info.prefix) breakdownHTML.push('<span class="breakdown-tag tag-prefix">Prefix: ' + info.prefix + '</span>');
        breakdownHTML.push('<span class="breakdown-tag tag-root">Root: ' + info.root + '</span>');
        breakdownHTML.push('<span class="breakdown-tag tag-suffix">Suffix: ' + info.suffix + '</span>');
        breakdownEl.innerHTML = breakdownHTML.join(' + ');
    }
}

function project3D(x, y, z, cx, cy, dynamicScaleFactor) {
    let cosY = Math.cos(angleY), sinY = Math.sin(angleY);
    let x1 = x * cosY + z * sinY;
    let z1 = -x * sinY + z * cosY;

    let cosX = Math.cos(angleX), sinX = Math.sin(angleX);
    let y2 = y * cosX - z1 * sinX;
    let z2 = y * sinX + z1 * cosX;

    const fov = 600;
    const scale = (fov / (fov + z2 + 200)) * dynamicScaleFactor;

    return { px: cx + x1 * scale, py: cy + y2 * scale, scale: scale, z: z2 };
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const info = evaluateIUPAC();
    updateIUPACDisplay(info);

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    
    const dynamicScaleFactor = Math.max(0.5, 1 - (chainLength - 4) * 0.07);
    const bondLen = 95; 

    let drawList = [];
    let backbone3D = [];
    const startX = -((chainLength - 1) * bondLen) / 2;

    let currentY = 0;
    for (let i = 0; i < chainLength; i++) {
        let x = startX + i * bondLen;
        
        if (i > 0 && bondStates[i - 1].order === 2 && bondStates[i - 1].geom === 'cis') {
            currentY = currentY; 
        } else {
            currentY = (i % 2 === 0 ? -35 : 35);
        }

        let z = (i % 2 === 0 ? 25 : -25);
        if (viewMode === 'condensed') { currentY = 0; z = 0; }
        backbone3D.push({ x: x, y: currentY, z: z, index: i });
    }

    for (let i = 0; i < chainLength; i++) {
        let node = backbone3D[i];
        let proj = project3D(node.x, node.y, node.z, cx, cy, dynamicScaleFactor);

        drawList.push({ type: 'carbon', z: proj.z, proj: proj, index: i });

        if (i < chainLength - 1) {
            let nextNode = backbone3D[i + 1];
            let nextProj = project3D(nextNode.x, nextNode.y, nextNode.z, cx, cy, dynamicScaleFactor);
            drawList.push({
                type: 'bond', z: (proj.z + nextProj.z) / 2, p1: proj, p2: nextProj, order: bondStates[i].order
            });
        }

        let subKeys = [substituents[i].g1, substituents[i].g2];
        let directions = [
            { dy: (i % 2 === 0 ? -85 : 85), dz: (i % 2 === 0 ? -70 : 70) },
            { dy: (i % 2 === 0 ? 85 : -85), dz: (i % 2 === 0 ? 70 : -70) }
        ];

        subKeys.forEach(function(gKey, k) {
            if (gKey !== 'NONE') {
                let group = GROUPS[gKey];
                let subProj = project3D(node.x, node.y + directions[k].dy, node.z + directions[k].dz, cx, cy, dynamicScaleFactor);

                drawList.push({
                    type: 'sub_bond', z: (proj.z + subProj.z) / 2, p1: proj, p2: subProj, color: group.color, isDouble: group.valence === 2
                });

                drawList.push({
                    type: 'group_atom', z: subProj.z, proj: subProj, group: group
                });
            }
        });

        if (viewMode === 'structural' && info.valid) {
            let hCount = Math.max(0, 4 - info.carbonBonds[i]);
            let hAngles = [{ dy: 0, dz: 75 }, { dy: 0, dz: -75 }, { dy: 75, dz: 0 }, { dy: -75, dz: 0 }];

            let drawnH = 0;
            for (let angle of hAngles) {
                if (drawnH >= hCount) break;

                let hProj = project3D(node.x, node.y + angle.dy, node.z + angle.dz, cx, cy, dynamicScaleFactor);
                drawList.push({ type: 'h_bond', z: (proj.z + hProj.z) / 2, p1: proj, p2: hProj });
                drawList.push({ type: 'hydrogen', z: hProj.z, proj: hProj });
                drawnH++;
            }
        }
    }

    drawList.sort(function(a, b) { return b.z - a.z; });

    for (let item of drawList) {
        if (item.type === 'bond') {
            draw3DBond(item.p1, item.p2, item.order);
        } else if (item.type === 'sub_bond' || item.type === 'h_bond') {
            ctx.strokeStyle = item.type === 'sub_bond' ? item.color : '#64748b';
            ctx.lineWidth = 4.5 * ((item.p1.scale + item.p2.scale) / 2);
            ctx.beginPath();
            if (item.isDouble) {
                ctx.moveTo(item.p1.px - 3, item.p1.py - 3);
                ctx.lineTo(item.p2.px - 3, item.p2.py - 3);
                ctx.moveTo(item.p1.px + 3, item.p1.py + 3);
                ctx.lineTo(item.p2.px + 3, item.p2.py + 3);
            } else {
                ctx.moveTo(item.p1.px, item.p1.py);
                ctx.lineTo(item.p2.px, item.p2.py);
            }
            ctx.stroke();
        } else if (item.type === 'carbon') {
            if (viewMode === 'structural') {
                let color = (!info.valid && info.carbonBonds && info.carbonBonds[item.index] > 4) ? '#ef4444' : '#10b981';
                drawSphere(item.proj.px, item.proj.py, 45 * item.proj.scale, color, 'C');
            } else if (viewMode === 'condensed') {
                let hCount = info.valid ? Math.max(0, 4 - info.carbonBonds[item.index]) : 0;
                let label = 'C' + (hCount > 0 ? ('H' + (hCount > 1 ? hCount : '')) : '');
                ctx.fillStyle = '#020617';
                ctx.fillRect(item.proj.px - 45 * item.proj.scale, item.proj.py - 25 * item.proj.scale, 90 * item.proj.scale, 50 * item.proj.scale);
                ctx.fillStyle = '#38bdf8';
                ctx.font = 'bold ' + Math.round(28 * item.proj.scale) + 'px sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(label, item.proj.px, item.proj.py);
            } else if (viewMode === 'skeletal') {
                ctx.fillStyle = '#38bdf8';
                ctx.beginPath();
                ctx.arc(item.proj.px, item.proj.py, 14 * item.proj.scale, 0, Math.PI * 2);
                ctx.fill();
            }

            let numLoc = info.useReversed ? chainLength - item.index : item.index + 1;
            ctx.fillStyle = '#f59e0b';
            ctx.font = 'bold ' + Math.round(20 * item.proj.scale) + 'px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(numLoc, item.proj.px, item.proj.py - 55 * item.proj.scale);

        } else if (item.type === 'group_atom') {
            drawSphere(item.proj.px, item.proj.py, 40 * item.proj.scale, item.group.color, item.group.label);
        } else if (item.type === 'hydrogen') {
            drawSphere(item.proj.px, item.proj.py, 26 * item.proj.scale, '#ffffff', 'H', '#000000');
        }
    }
}

function drawSphere(x, y, radius, color, text, textColor) {
    if (!textColor) textColor = '#ffffff';
    if (radius <= 0) return;
    const grad = ctx.createRadialGradient(x - radius/3, y - radius/3, radius/5, x, y, radius);
    grad.addColorStop(0, color);
    grad.addColorStop(1, '#000000');

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = textColor;
    ctx.font = 'bold ' + Math.max(10, Math.round(radius * 0.45)) + 'px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, x, y);
}

function draw3DBond(p1, p2, order) {
    const dx = p2.px - p1.px;
    const dy = p2.py - p1.py;
    const len = Math.hypot(dx, dy);
    if (len === 0) return;

    const nx = -dy / len;
    const ny = dx / len;
    const avgScale = (p1.scale + p2.scale) / 2;
    const offset = 8 * avgScale;

    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 5.5 * avgScale;

    if (order === 1) {
        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);
        ctx.stroke();
    } else if (order === 2) {
        ctx.beginPath();
        ctx.moveTo(p1.px + nx * offset, p1.py + ny * offset);
        ctx.lineTo(p2.px + nx * offset, p2.py + ny * offset);
        ctx.moveTo(p1.px - nx * offset, p1.py - ny * offset);
        ctx.lineTo(p2.px - nx * offset, p2.py - ny * offset);
        ctx.stroke();
    } else if (order === 3) {
        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);
        ctx.moveTo(p1.px + nx * (offset * 1.3), p1.py + ny * (offset * 1.3));
        ctx.lineTo(p2.px + nx * (offset * 1.3), p2.py + ny * (offset * 1.3));
        ctx.moveTo(p1.px - nx * (offset * 1.3), p1.py - ny * (offset * 1.3));
        ctx.lineTo(p2.px - nx * (offset * 1.3), p2.py - ny * (offset * 1.3));
        ctx.stroke();
    }
}

updateControlUI();
syncRotationSliders();
resizeCanvas();
</script>
</body>
</html>`,
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-16"
  },
  {
    id: "sim-3d-conic-integral-calculus",
    title: "Dynamic Integral Calculus on 3D Conic Sections",
    tagline: "3D Solid of Revolution Riemann Sums, Definite Integrals & Conic Volume Solver",
    discipline: "mathematics",
    gradeLevel: ["High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["AP Calculus (Unit 8)", "CCSS.MATH.HSG.GMD.A.1", "IB Math Analysis & Approaches HL"],
    description: "Investigate volumes of solids of revolution using disk integration (Riemann sums) across 3D conic geometries including paraboloids, ellipsoids, hyperboloids, and circular cones. Compare numerical discrete disk slicing (N Riemann disks) against exact analytical definite integrals with interactive bound limits, cross-sectional area profile charting, and live LaTeX formula derivation.",
    learningObjectives: [
      "Model 3D solids of revolution generated by revolving conic curves around the X or Z axes",
      "Calculate exact volumes of paraboloids, ellipsoids, hyperboloids, and cones using definite disk integrals V = âˆ« Ï€[r(t)]Â² dt",
      "Analyze convergence of discrete cylindrical Riemann sum approximations as disk count N increases",
      "Interpret 2D cross-sectional function profiles r(t) and their geometric relation to 3D surface volumes"
    ],
    thumbnailGradient: "from-indigo-600 via-purple-700 to-sky-900",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    iconName: "Shapes",
    rating: 5.0,
    reviewCount: 38,
    teacherCount: 194,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive 3D Three.js rendering with orbital camera controls and live axis labeling",
      "Definite integral computation with step-by-step LaTeX formula derivation and discretization error readouts",
      "Dynamic bounds controls [t1, t2] with collision validation and automatic variable adjustment",
      "Interactive 2D cross-sectional profile chart with shaded integral area and limit markers"
    ],
    parameterDefaults: {
      conicType: "paraboloid",
      slices: 15,
      t1: 0.0,
      t2: 4.0,
      a: 2.0,
      b: 2.0
    },
    parameterControls: [
      {
        key: "slices",
        label: "Riemann Disks (N)",
        min: 4,
        max: 50,
        step: 1,
        unit: "disks",
        description: "Number of discrete cylindrical slices used in numerical approximation"
      },
      {
        key: "t1",
        label: "Lower Bound (t1)",
        min: -5,
        max: 5,
        step: 0.2,
        unit: "units",
        description: "Starting coordinate along the revolution axis"
      },
      {
        key: "t2",
        label: "Upper Bound (t2)",
        min: -5,
        max: 5,
        step: 0.2,
        unit: "units",
        description: "Ending coordinate along the revolution axis"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-conic-1",
        title: "Minimize Riemann Discretization Error",
        instruction: "Set up a Paraboloid from t1=0.0 to t2=4.0 with semi-axis A=2.0 and increase Riemann slices until error is below 2%.",
        targetMetric: "Discretization Error",
        targetValue: 2.0,
        tolerance: 0.5,
        currentValueKey: "error",
        rewardBadge: "Calculus Master"
      }
    ],
    previewFacts: [
      "The disk method is a specific case of Cavalieri's principle applied to circular cross-sections perpendicular to an axis of revolution.",
      "As the number of Riemann slices N approaches infinity (and slice thickness dt approaches 0), the Riemann sum converges exactly to the Riemann integral."
    ],
    isHtmlApp: true,
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dynamic Integral Calculus on 3D Conic Sections</title>
  <!-- KaTeX for math rendering -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
  <script src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
  <!-- Three.js and OrbitControls -->
  <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>

  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background: #090d16;
      color: #f8fafc;
      display: flex;
      height: 100vh;
      overflow: hidden;
    }
    #main-container {
      flex: 1;
      display: flex;
      flex-direction: column;
      height: 100%;
      position: relative;
    }
    #viewport {
      flex: 1;
      position: relative;
      background: #090d16;
    }
    #chart-container {
      height: 200px;
      background: #0f172a;
      border-top: 2px solid #334155;
      padding: 10px 16px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    #chart-title {
      font-size: 0.85rem;
      font-weight: 600;
      color: #38bdf8;
      display: flex;
      justify-content: space-between;
    }
    #canvas-2d {
      width: 100%;
      height: 145px;
      background: #020617;
      border-radius: 6px;
      border: 1px solid #1e293b;
    }
    
    #sidebar {
      width: 540px;
      background: #1e293b;
      border-left: 1px solid #334155;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 14px;
      overflow-y: auto;
    }
    h2 { font-size: 1.1rem; color: #38bdf8; border-bottom: 1px solid #334155; padding-bottom: 6px; }
    .control-group {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    label { font-size: 0.8rem; color: #94a3b8; display: flex; justify-content: space-between; }
    select, input[type="range"] {
      width: 100%;
      background: #0f172a;
      color: #fff;
      border: 1px solid #475569;
      padding: 6px 8px;
      border-radius: 6px;
    }
    input[type="range"] { padding: 0; cursor: pointer; }
    .toggle-group {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 0.85rem;
    }
    .toggle-group input { width: auto; cursor: pointer; }
    button {
      background: #0284c7;
      color: white;
      border: none;
      padding: 10px;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s, transform 0.1s;
    }
    button:hover { background: #0369a1; }
    button:active { transform: scale(0.98); }

    .btn-explain {
      background: #8b5cf6;
    }
    .btn-explain:hover {
      background: #7c3aed;
    }

    /* High-Visibility Expanded Math Display Panel */
    .math-card {
      background: #020617;
      border: 2px solid #38bdf8;
      box-shadow: 0 0 15px rgba(56, 189, 248, 0.15);
      border-radius: 8px;
      padding: 14px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .math-card-header {
      font-size: 0.85rem;
      font-weight: 700;
      color: #38bdf8;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    #math-formula-box {
      background: #0f172a;
      border: 1px solid #334155;
      padding: 12px;
      border-radius: 6px;
      min-height: 60px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      overflow-x: auto;
      width: 100%;
    }
    
    .katex-display {
      margin: 0 !important;
      padding: 4px 0;
      width: 100%;
    }

    .readout-box {
      background: rgba(2, 132, 199, 0.12);
      border-left: 4px solid #38bdf8;
      padding: 10px;
      border-radius: 4px;
      font-size: 0.85rem;
      line-height: 1.5;
    }

    /* Overlay Modal for Mathematical Explanation */
    .modal-backdrop {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(2, 6, 23, 0.85);
      backdrop-filter: blur(4px);
      z-index: 1000;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .modal-content {
      background: #0f172a;
      border: 2px solid #8b5cf6;
      box-shadow: 0 0 25px rgba(139, 92, 246, 0.3);
      border-radius: 12px;
      max-width: 800px;
      width: 100%;
      max-height: 85vh;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .modal-header {
      background: #1e293b;
      padding: 14px 20px;
      border-bottom: 1px solid #334155;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .modal-header h3 {
      color: #a78bfa;
      font-size: 1.1rem;
    }
    .modal-close {
      background: transparent;
      border: none;
      color: #94a3b8;
      font-size: 1.5rem;
      cursor: pointer;
      padding: 0 6px;
    }
    .modal-close:hover { color: #fff; }
    .modal-body {
      padding: 20px;
      overflow-y: auto;
      font-size: 0.9rem;
      line-height: 1.6;
      color: #cbd5e1;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .modal-body h4 {
      color: #38bdf8;
      border-bottom: 1px solid #334155;
      padding-bottom: 4px;
      margin-top: 6px;
    }
    .var-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 10px;
    }
    .var-card {
      background: #1e293b;
      border: 1px solid #334155;
      padding: 10px;
      border-radius: 6px;
    }
    .var-card strong {
      color: #f43f5e;
    }

    /* 3D Label Overlays */
    .overlay-label {
      position: absolute;
      color: #38bdf8;
      font-size: 11px;
      font-weight: bold;
      background: rgba(15, 23, 42, 0.9);
      padding: 3px 8px;
      border-radius: 4px;
      border: 1px solid #38bdf8;
      pointer-events: none;
      transform: translate(-50%, -100%);
      white-space: nowrap;
      box-shadow: 0 2px 6px rgba(0,0,0,0.5);
    }
  </style>
</head>
<body>

  <div id="main-container">
    <div id="viewport">
      <div id="label-h" class="overlay-label">Bounds Span</div>
      <div id="label-a" class="overlay-label">Semi-axis a</div>
    </div>
    
    <div id="chart-container">
      <div id="chart-title">
        <span>2D Cross-Section Function r(t) & Accumulated Definite Integral Area</span>
        <span id="chart-limits-text" style="color: #38bdf8;">Bounds: [0.0, 4.0]</span>
      </div>
      <canvas id="canvas-2d"></canvas>
    </div>

    <!-- Student Explanation Modal -->
    <div id="explanation-modal" class="modal-backdrop">
      <div class="modal-content">
        <div class="modal-header">
          <h3>ðŸ“˜ Student Integration Guide: Dynamic Variable Breakdown</h3>
          <button class="modal-close" id="btn-close-modal">&times;</button>
        </div>
        <div class="modal-body" id="modal-body-text">
          <!-- Dynamic Content Generated Here -->
        </div>
      </div>
    </div>
  </div>

  <div id="sidebar">
    <h2>Conic Integration Controls</h2>

    <div style="display: flex; gap: 8px;">
      <button id="btn-random" style="flex:1;">ðŸŽ² Random Conic</button>
      <button id="btn-explain" class="btn-explain" style="flex:1.2;">ðŸ“˜ Explain Integration</button>
    </div>

    <div class="control-group">
      <label for="conic-type">Conic Geometry</label>
      <select id="conic-type">
        <option value="paraboloid">Paraboloid of Revolution</option>
        <option value="ellipsoid">Ellipsoid</option>
        <option value="hyperboloid">Hyperboloid (One Sheet)</option>
        <option value="cone">Circular Cone</option>
      </select>
    </div>

    <div class="control-group">
      <label for="axis-rotation">Axis of Revolution</label>
      <select id="axis-rotation">
        <option value="x" selected>X-Axis (Horizontal)</option>
        <option value="z">Z-Axis (Vertical)</option>
      </select>
    </div>

    <div class="control-group">
      <label>Slices (N Riemann Disks): <span id="val-slices">15</span></label>
      <input type="range" id="param-slices" min="4" max="50" value="15">
    </div>

    <!-- Upper & Lower Integration Bounds Controls -->
    <div class="control-group">
      <label>Lower Bound (tâ‚): <span id="val-t1">0.0</span></label>
      <input type="range" id="param-t1" min="-5" max="5" step="0.2" value="0.0">
    </div>

    <div class="control-group">
      <label>Upper Bound (tâ‚‚): <span id="val-t2">4.0</span></label>
      <input type="range" id="param-t2" min="-5" max="5" step="0.2" value="4.0">
    </div>

    <div class="control-group">
      <label>Semi-axis A (Radius Scale): <span id="val-a">2.0</span></label>
      <input type="range" id="param-a" min="0.5" max="3" step="0.1" value="2.0">
    </div>

    <div class="control-group">
      <label>Semi-axis B: <span id="val-b">2.0</span></label>
      <input type="range" id="param-b" min="0.5" max="3" step="0.1" value="2.0">
    </div>

    <div class="toggle-group">
      <input type="checkbox" id="toggle-slices" checked>
      <label for="toggle-slices" style="color:white;">Show Integration Slices</label>
    </div>

    <div class="toggle-group">
      <input type="checkbox" id="toggle-wireframe" checked>
      <label for="toggle-wireframe" style="color:white;">Show Wireframe Mesh</label>
    </div>

    <div class="toggle-group">
      <input type="checkbox" id="toggle-rotate" checked>
      <label for="toggle-rotate" style="color:white;">Spin Object Around Center</label>
    </div>

    <!-- Clean KaTeX Mathematical Integration Panel -->
    <div class="math-card">
      <div class="math-card-header">ðŸ“ Definite Integration Formula</div>
      <div id="math-formula-box"></div>
      <div class="readout-box" id="readout-box"></div>
    </div>
  </div>

  <script>
    // --- State Variables ---
    let type = 'paraboloid';
    let rotAxis = 'x';
    let N = 15;
    let t1 = 0.0;
    let t2 = 4.0;
    let a = 2.0;
    let b = 2.0;
    let showSlices = true;
    let showWireframe = true;
    let autoRotate = true;

    // Conic Section Palette
    const conicColors = {
      paraboloid: 0x38bdf8,
      ellipsoid: 0x10b981,
      hyperboloid: 0xf59e0b,
      cone: 0xec4899
    };

    // --- Three.js Setup ---
    const viewport = document.getElementById('viewport');
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x090d16);

    const camera = new THREE.PerspectiveCamera(45, viewport.clientWidth / viewport.clientHeight, 0.1, 1000);
    camera.position.set(9, 7, 12);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(viewport.clientWidth, viewport.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    viewport.appendChild(renderer.domElement);

    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.9);
    dirLight.position.set(10, 20, 10);
    scene.add(dirLight);

    // Static Coordinate Axes
    scene.add(new THREE.AxesHelper(6));

    // Centered Geometry Group
    const conicMeshGroup = new THREE.Group();
    const surfaceGroup = new THREE.Group();
    const slicesGroup = new THREE.Group();
    conicMeshGroup.add(surfaceGroup);
    conicMeshGroup.add(slicesGroup);
    scene.add(conicMeshGroup);

    // --- Radius Function r(t) ---
    function getRadius(t, type, a, b) {
      switch (type) {
        case 'paraboloid':
          return t >= 0 ? a * Math.sqrt(t) : 0;
        case 'ellipsoid': {
          const c = 3.0;
          const radTerm = 1 - (t * t) / (c * c);
          return radTerm > 0 ? a * Math.sqrt(radTerm) : 0;
        }
        case 'hyperboloid': {
          const c = 2.0;
          return a * Math.sqrt(1 + (t * t) / (c * c));
        }
        case 'cone':
          return t >= 0 ? 0.6 * a * t : 0;
      }
    }

    function getExactVolume(type, a, b, lower, upper) {
      const pi = Math.PI;
      switch (type) {
        case 'paraboloid': {
          const l = Math.max(0, lower);
          const u = Math.max(0, upper);
          return 0.5 * pi * a * b * (u * u - l * l);
        }
        case 'ellipsoid': {
          const c = 3.0;
          const l = Math.max(-c, Math.min(c, lower));
          const u = Math.max(-c, Math.min(c, upper));
          const evalInt = (t) => t - (t * t * t) / (3 * c * c);
          return pi * a * b * (evalInt(u) - evalInt(l));
        }
        case 'hyperboloid': {
          const c = 2.0;
          const evalInt = (t) => t + (t * t * t) / (3 * c * c);
          return pi * a * b * (evalInt(upper) - evalInt(lower));
        }
        case 'cone': {
          const l = Math.max(0, lower);
          const u = Math.max(0, upper);
          const k = 0.6 * 0.6;
          return (1 / 3) * pi * a * b * k * (Math.pow(u, 3) - Math.pow(l, 3));
        }
      }
    }

    // --- Build 3D Conic Geometry ---
    function rebuildScene() {
      while (surfaceGroup.children.length) surfaceGroup.remove(surfaceGroup.children[0]);
      while (slicesGroup.children.length) slicesGroup.remove(slicesGroup.children[0]);

      conicMeshGroup.rotation.set(0, 0, 0);

      const tMin = t1;
      const tMax = t2;
      const tCenter = (tMin + tMax) / 2;
      const baseColor = conicColors[type] || 0x38bdf8;

      // Surface Wireframe Mesh
      if (showWireframe) {
        const segR = 32, segT = 32;
        const geom = new THREE.BufferGeometry();
        const positions = [];
        const indices = [];

        for (let i = 0; i <= segT; i++) {
          const t = tMin + (i / segT) * (tMax - tMin);
          const rX = getRadius(t, type, a, b);
          const rY = getRadius(t, type, b, a);

          for (let j = 0; j <= segR; j++) {
            const theta = (j / segR) * Math.PI * 2;
            const x = rX * Math.cos(theta);
            const y = rY * Math.sin(theta);
            const z = t - tCenter;

            if (rotAxis === 'x') {
              positions.push(z, x, y);
            } else {
              positions.push(x, z, y);
            }
          }
        }

        for (let i = 0; i < segT; i++) {
          for (let j = 0; j < segR; j++) {
            const first = i * (segR + 1) + j;
            const second = first + segR + 1;
            indices.push(first, second, first + 1);
            indices.push(second, second + 1, first + 1);
          }
        }

        geom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geom.setIndex(indices);
        geom.computeVertexNormals();

        const mat = new THREE.MeshPhongMaterial({
          color: baseColor,
          wireframe: true,
          transparent: true,
          opacity: 0.55,
          side: THREE.DoubleSide
        });
        surfaceGroup.add(new THREE.Mesh(geom, mat));
      }

      // Integration Disks
      let riemannSum = 0;
      const dt = (tMax - tMin) / N;

      for (let i = 0; i < N; i++) {
        const tMid = tMin + (i + 0.5) * dt;
        const rX = getRadius(tMid, type, a, b);
        const rY = getRadius(tMid, type, b, a);

        if (rX <= 0 || rY <= 0) continue;

        const sliceArea = Math.PI * rX * rY;
        riemannSum += sliceArea * dt;

        if (showSlices) {
          const diskGeom = new THREE.CylinderGeometry(1, 1, dt, 24);
          diskGeom.scale(rX, 1, rY);

          if (rotAxis === 'x') {
            diskGeom.rotateZ(-Math.PI / 2);
          }

          const diskMat = new THREE.MeshPhongMaterial({
            color: baseColor,
            transparent: true,
            opacity: 0.65,
            shininess: 80,
            side: THREE.DoubleSide
          });

          const diskMesh = new THREE.Mesh(diskGeom, diskMat);
          const zLoc = tMid - tCenter;

          if (rotAxis === 'x') {
            diskMesh.position.set(zLoc, 0, 0);
          } else {
            diskMesh.position.set(0, zLoc, 0);
          }
          slicesGroup.add(diskMesh);
        }
      }

      updateMathUI(riemannSum, tMin, tMax);
      draw2DProfileChart(tMin, tMax, baseColor);
    }

    // --- Clean Math & Formula Display ---
    function updateMathUI(riemannSum, tMin, tMax) {
      const exactVol = getExactVolume(type, a, b, tMin, tMax);
      const v = rotAxis === 'x' ? 'x' : 'z';
      
      const b1 = tMin.toFixed(1);
      const b2 = tMax.toFixed(1);
      const aVal = a.toFixed(1);

      let formulaStr = "";

      switch (type) {
        case 'paraboloid': {
          const coeff = (Math.PI * a * a).toFixed(2);
          const coeffHalf = (0.5 * Math.PI * a * a).toFixed(2);
          formulaStr = "V = \\\\int_{" + b1 + "}^{" + b2 + "} \\\\pi \\\\left(" + aVal + "\\\\sqrt{" + v + "}\\\\right)^2 d" + v + " = " + coeff + " \\\\left[ \\\\frac{" + v + "^2}{2} \\\\right]_{" + b1 + "}^{" + b2 + "} = " + coeffHalf + " \\\\left( (" + b2 + ")^2 - (" + b1 + ")^2 \\\\right)";
          break;
        }
        case 'ellipsoid': {
          const coeff = (Math.PI * a * a).toFixed(2);
          formulaStr = "V = \\\\int_{" + b1 + "}^{" + b2 + "} \\\\pi \\\\cdot " + aVal + "^2 \\\\left(1 - \\\\frac{" + v + "^2}{9}\\\\right) d" + v + " = " + coeff + " \\\\left[ " + v + " - \\\\frac{" + v + "^3}{27} \\\\right]_{" + b1 + "}^{" + b2 + "}";
          break;
        }
        case 'hyperboloid': {
          const coeff = (Math.PI * a * a).toFixed(2);
          formulaStr = "V = \\\\int_{" + b1 + "}^{" + b2 + "} \\\\pi \\\\cdot " + aVal + "^2 \\\\left(1 + \\\\frac{" + v + "^2}{4}\\\\right) d" + v + " = " + coeff + " \\\\left[ " + v + " + \\\\frac{" + v + "^3}{12} \\\\right]_{" + b1 + "}^{" + b2 + "}";
          break;
        }
        case 'cone': {
          const slope = (0.6 * a).toFixed(2);
          const coeff = (Math.PI * slope * slope).toFixed(2);
          const coeffThird = (coeff / 3).toFixed(2);
          formulaStr = "V = \\\\int_{" + b1 + "}^{" + b2 + "} \\\\pi \\\\left(" + slope + v + "\\\\right)^2 d" + v + " = " + coeffThird + " \\\\left[ " + v + "^3 \\\\right]_{" + b1 + "}^{" + b2 + "} = " + coeffThird + " \\\\left( (" + b2 + ")^3 - (" + b1 + ")^3 \\\\right)";
          break;
        }
      }

      katex.render(formulaStr, document.getElementById('math-formula-box'), { 
        displayMode: true, 
        throwOnError: false 
      });

      const err = exactVol !== 0 ? Math.abs((riemannSum - exactVol) / exactVol) * 100 : 0;
      document.getElementById('readout-box').innerHTML = 
        '<strong>Integration Variable:</strong> d' + v + ' along ' + v.toUpperCase() + '-axis<br>' +
        '<strong>Analytical Exact Volume:</strong> <span style="color:#38bdf8; font-weight:bold;">' + exactVol.toFixed(4) + ' uÂ³</span><br>' +
        '<strong>Riemann Numerical Sum (N=' + N + '):</strong> ' + riemannSum.toFixed(4) + ' uÂ³<br>' +
        '<strong>Discretization Error:</strong> ' + err.toFixed(2) + '%';

      document.getElementById('chart-limits-text').innerText = 
        'Integral Bounds [' + v + 'â‚ = ' + b1 + ', ' + v + 'â‚‚ = ' + b2 + ']';
    }

    // --- Generate Explanation Content for Students ---
    function openExplanationModal() {
      const v = rotAxis === 'x' ? 'x' : 'z';
      const exactVol = getExactVolume(type, a, b, t1, t2);
      const dt = (t2 - t1) / N;

      let typeTitle = type.charAt(0).toUpperCase() + type.slice(1);
      
      let html = 
        '<p>This interactive simulation computes the 3D volume of a solid of revolution using <strong>Disk Integration (Riemann Sums)</strong>.</p>' +
        '<h4>1. Current Variable Values</h4>' +
        '<div class="var-grid">' +
          '<div class="var-card"><strong>Integration Axis (' + v + '):</strong> Rotated around ' + v.toUpperCase() + '-axis</div>' +
          '<div class="var-card"><strong>Lower Bound (' + v + 'â‚):</strong> ' + t1.toFixed(2) + '</div>' +
          '<div class="var-card"><strong>Upper Bound (' + v + 'â‚‚):</strong> ' + t2.toFixed(2) + '</div>' +
          '<div class="var-card"><strong>Integration Span (Î”t):</strong> ' + (t2 - t1).toFixed(2) + ' units</div>' +
          '<div class="var-card"><strong>Semi-axis A (a):</strong> ' + a.toFixed(1) + ' units</div>' +
          '<div class="var-card"><strong>Semi-axis B (b):</strong> ' + b.toFixed(1) + ' units</div>' +
          '<div class="var-card"><strong>Riemann Disks (N):</strong> ' + N + ' slices</div>' +
          '<div class="var-card"><strong>Disk Thickness (d' + v + ' / Î”' + v + '):</strong> ' + dt.toFixed(3) + ' units</div>' +
        '</div>' +
        '<h4>2. How the Definite Integral is Formed</h4>' +
        '<p>When revolving a function <em>r(' + v + ')</em> around an axis, each thin slice forms a circular or elliptical disk of cross-sectional area <strong>A(' + v + ') = Ï€ Â· r(' + v + ')Â²</strong>. Summing an infinite number of these infinitely thin disks between ' + v + 'â‚ and ' + v + 'â‚‚ gives the total volume:</p>' +
        '<div style="background:#020617; padding:10px; border-radius:6px; border:1px solid #334155; text-align:center;">' +
          '<em>V = âˆ«<sub>' + v + 'â‚</sub><sup>' + v + 'â‚‚</sup> A(' + v + ') d' + v + ' = âˆ«<sub>' + t1.toFixed(1) + '</sub><sup>' + t2.toFixed(1) + '</sup> Ï€ [r(' + v + ')]^2 d' + v + '</em>' +
        '</div>' +
        '<h4>3. Detailed Step-by-Step Calculation for ' + typeTitle + '</h4>';

      switch(type) {
        case 'paraboloid':
          html += 
            '<p><strong>Radius Function:</strong> r(' + v + ') = ' + a.toFixed(1) + 'âˆš' + v + '</p>' +
            '<p><strong>Step 1 (Square Radius):</strong> [r(' + v + ')]Â² = ' + (a*a).toFixed(2) + v + '</p>' +
            '<p><strong>Step 2 (Set Up Integral):</strong> V = Ï€ âˆ«<sub>' + t1.toFixed(1) + '</sub><sup>' + t2.toFixed(1) + '</sup> ' + (a*a).toFixed(2) + v + ' d' + v + ' = ' + (Math.PI * a * a).toFixed(2) + ' [ ' + v + 'Â²/2 ]<sub>' + t1.toFixed(1) + '</sub><sup>' + t2.toFixed(1) + '</sup></p>' +
            '<p><strong>Step 3 (Evaluate Limits):</strong> V = <strong>' + exactVol.toFixed(4) + ' uÂ³</strong></p>';
          break;
        case 'ellipsoid':
          html += 
            '<p><strong>Radius Function:</strong> r(' + v + ') = ' + a.toFixed(1) + ' Â· âˆš(1 - ' + v + 'Â² / 9)</p>' +
            '<p><strong>Step 1 (Square Radius):</strong> [r(' + v + ')]Â² = ' + (a*a).toFixed(2) + ' Â· (1 - ' + v + 'Â² / 9)</p>' +
            '<p><strong>Step 2 (Set Up Integral):</strong> V = ' + (Math.PI * a * a).toFixed(2) + ' âˆ«<sub>' + t1.toFixed(1) + '</sub><sup>' + t2.toFixed(1) + '</sup> (1 - ' + v + 'Â² / 9) d' + v + '</p>' +
            '<p><strong>Step 3 (Evaluate Limits):</strong> Volume = <strong>' + exactVol.toFixed(4) + ' uÂ³</strong></p>';
          break;
        case 'hyperboloid':
          html += 
            '<p><strong>Radius Function:</strong> r(' + v + ') = ' + a.toFixed(1) + ' Â· âˆš(1 + ' + v + 'Â² / 4)</p>' +
            '<p><strong>Step 1 (Square Radius):</strong> [r(' + v + ')]Â² = ' + (a*a).toFixed(2) + ' Â· (1 + ' + v + 'Â² / 4)</p>' +
            '<p><strong>Step 2 (Set Up Integral):</strong> V = ' + (Math.PI * a * a).toFixed(2) + ' âˆ«<sub>' + t1.toFixed(1) + '</sub><sup>' + t2.toFixed(1) + '</sup> (1 + ' + v + 'Â² / 4) d' + v + '</p>' +
            '<p><strong>Step 3 (Evaluate Limits):</strong> Volume = <strong>' + exactVol.toFixed(4) + ' uÂ³</strong></p>';
          break;
        case 'cone':
          const slope = 0.6 * a;
          html += 
            '<p><strong>Radius Function:</strong> r(' + v + ') = ' + slope.toFixed(2) + v + '</p>' +
            '<p><strong>Step 1 (Square Radius):</strong> [r(' + v + ')]Â² = ' + (slope*slope).toFixed(4) + v + 'Â²</p>' +
            '<p><strong>Step 2 (Set Up Integral):</strong> V = Ï€ âˆ«<sub>' + t1.toFixed(1) + '</sub><sup>' + t2.toFixed(1) + '</sup> ' + (slope*slope).toFixed(4) + v + 'Â² d' + v + '</p>' +
            '<p><strong>Step 3 (Evaluate Limits):</strong> Volume = <strong>' + exactVol.toFixed(4) + ' uÂ³</strong></p>';
          break;
      }

      html += 
        '<h4>4. Numerical Riemann Approximation</h4>' +
        '<p>Instead of continuous integration, the computer calculates <strong>N = ' + N + '</strong> discrete cylindrical disks of thickness <strong>Î”' + v + ' = ' + dt.toFixed(3) + '</strong>. As you increase N, the discrete sum converges toward the exact analytical volume.</p>';

      document.getElementById('modal-body-text').innerHTML = html;
      document.getElementById('explanation-modal').style.display = 'flex';
    }

    // --- Render 2D Cross Section Area Chart ---
    function draw2DProfileChart(tMin, tMax, colorHex) {
      const canvas = document.getElementById('canvas-2d');
      const ctx = canvas.getContext('2d');
      
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;

      const w = canvas.width;
      const ch = canvas.height;
      ctx.clearRect(0, 0, w, ch);

      const padL = 45, padR = 25, padT = 15, padB = 25;
      const plotW = w - padL - padR;
      const plotH = ch - padT - padB;

      const axisMargin = 0.5;
      const xDomainMin = tMin - axisMargin;
      const xDomainMax = tMax + axisMargin;
      const rMax = Math.max(getRadius(tMax, type, a, b), getRadius(tMin, type, a, b), a) * 1.25 || 1;

      const mapX = (t) => padL + ((t - xDomainMin) / (xDomainMax - xDomainMin)) * plotW;
      const mapY = (r) => padT + plotH - (r / rMax) * plotH;

      const hexStr = '#' + colorHex.toString(16).padStart(6, '0');

      // Base Grid Lines
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(padL, mapY(0));
      ctx.lineTo(w - padR, mapY(0));
      ctx.stroke();

      // Shaded Integration Area under r(t)
      ctx.fillStyle = hexStr + '55';
      ctx.beginPath();
      ctx.moveTo(mapX(tMin), mapY(0));

      const steps = 120;
      for (let i = 0; i <= steps; i++) {
        const t = tMin + (i / steps) * (tMax - tMin);
        const r = getRadius(t, type, a, b);
        ctx.lineTo(mapX(t), mapY(r));
      }

      ctx.lineTo(mapX(tMax), mapY(0));
      ctx.closePath();
      ctx.fill();

      // Function curve r(t)
      ctx.strokeStyle = hexStr;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      for (let i = 0; i <= steps; i++) {
        const t = xDomainMin + (i / steps) * (xDomainMax - xDomainMin);
        const r = getRadius(t, type, a, b);
        if (i === 0) ctx.moveTo(mapX(t), mapY(r));
        else ctx.lineTo(mapX(t), mapY(r));
      }
      ctx.stroke();

      // Lower/Upper Limits Lines
      ctx.setLineDash([4, 4]);
      ctx.strokeStyle = '#f43f5e';
      ctx.lineWidth = 2;

      ctx.beginPath();
      ctx.moveTo(mapX(tMin), mapY(0));
      ctx.lineTo(mapX(tMin), mapY(getRadius(tMin, type, a, b)));
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(mapX(tMax), mapY(0));
      ctx.lineTo(mapX(tMax), mapY(getRadius(tMax, type, a, b)));
      ctx.stroke();
      ctx.setLineDash([]);

      // Axis Labels
      ctx.fillStyle = '#f8fafc';
      ctx.font = '11px sans-serif';
      const varName = rotAxis === 'x' ? 'x' : 'z';
      ctx.fillText('tâ‚ = ' + tMin.toFixed(1), mapX(tMin) - 15, ch - 8);
      ctx.fillText('tâ‚‚ = ' + tMax.toFixed(1), mapX(tMax) - 15, ch - 8);
      ctx.fillText('r(' + varName + ')', 8, mapY(rMax * 0.85));
    }

    // --- On-Mesh HTML Overlay Labels ---
    function updateOverlayLabels() {
      const span = Math.abs(t2 - t1);
      const posH = rotAxis === 'x' ? new THREE.Vector3(span / 2, 0, 0) : new THREE.Vector3(0, span / 2, 0);
      const posA = rotAxis === 'x' ? new THREE.Vector3(0, a, 0) : new THREE.Vector3(a, 0, 0);

      posH.applyMatrix4(conicMeshGroup.matrixWorld);
      posA.applyMatrix4(conicMeshGroup.matrixWorld);

      posH.project(camera);
      posA.project(camera);

      const hw = viewport.clientWidth / 2;
      const hh = viewport.clientHeight / 2;

      const lblH = document.getElementById('label-h');
      const lblA = document.getElementById('label-a');

      lblH.style.left = (posH.x * hw + hw) + 'px';
      lblH.style.top = (-posH.y * hh + hh) + 'px';
      lblH.innerText = 'Bounds Span Î”t = ' + span.toFixed(1);

      lblA.style.left = (posA.x * hw + hw) + 'px';
      lblA.style.top = (-posA.y * hh + hh) + 'px';
      lblA.innerText = 'Semi-axis a = ' + a.toFixed(1);
    }

    // --- Event Handlers & Bound Validation ---
    document.getElementById('conic-type').addEventListener('change', (e) => { type = e.target.value; rebuildScene(); });
    document.getElementById('axis-rotation').addEventListener('change', (e) => { rotAxis = e.target.value; rebuildScene(); });
    document.getElementById('param-slices').addEventListener('input', (e) => { 
      N = parseInt(e.target.value); 
      document.getElementById('val-slices').innerText = N;
      rebuildScene(); 
    });

    document.getElementById('param-t1').addEventListener('input', (e) => { 
      t1 = parseFloat(e.target.value);
      if (t1 >= t2) {
        t2 = parseFloat((t1 + 0.2).toFixed(1));
        document.getElementById('param-t2').value = t2;
        document.getElementById('val-t2').innerText = t2.toFixed(1);
      }
      document.getElementById('val-t1').innerText = t1.toFixed(1);
      rebuildScene(); 
    });

    document.getElementById('param-t2').addEventListener('input', (e) => { 
      t2 = parseFloat(e.target.value);
      if (t2 <= t1) {
        t1 = parseFloat((t2 - 0.2).toFixed(1));
        document.getElementById('param-t1').value = t1;
        document.getElementById('val-t1').innerText = t1.toFixed(1);
      }
      document.getElementById('val-t2').innerText = t2.toFixed(1);
      rebuildScene(); 
    });

    document.getElementById('param-a').addEventListener('input', (e) => { 
      a = parseFloat(e.target.value); 
      document.getElementById('val-a').innerText = a.toFixed(1);
      rebuildScene(); 
    });
    document.getElementById('param-b').addEventListener('input', (e) => { 
      b = parseFloat(e.target.value); 
      document.getElementById('val-b').innerText = b.toFixed(1);
      rebuildScene(); 
    });
    document.getElementById('toggle-slices').addEventListener('change', (e) => { showSlices = e.target.checked; rebuildScene(); });
    document.getElementById('toggle-wireframe').addEventListener('change', (e) => { showWireframe = e.target.checked; rebuildScene(); });
    document.getElementById('toggle-rotate').addEventListener('change', (e) => { autoRotate = e.target.checked; });

    document.getElementById('btn-explain').addEventListener('click', openExplanationModal);
    document.getElementById('btn-close-modal').addEventListener('click', () => {
      document.getElementById('explanation-modal').style.display = 'none';
    });

    document.getElementById('btn-random').addEventListener('click', () => {
      const types = ['paraboloid', 'ellipsoid', 'hyperboloid', 'cone'];
      type = types[Math.floor(Math.random() * types.length)];
      rotAxis = Math.random() > 0.5 ? 'x' : 'z';
      N = Math.floor(Math.random() * 25) + 10;
      
      t1 = parseFloat((Math.random() * 2 - (type === 'paraboloid' || type === 'cone' ? 0 : 3)).toFixed(1));
      t2 = parseFloat((t1 + Math.random() * 3 + 1).toFixed(1));
      
      a = parseFloat((Math.random() * 2 + 0.8).toFixed(1));
      b = parseFloat((Math.random() * 2 + 0.8).toFixed(1));

      document.getElementById('conic-type').value = type;
      document.getElementById('axis-rotation').value = rotAxis;
      document.getElementById('param-slices').value = N;
      document.getElementById('val-slices').innerText = N;
      document.getElementById('param-t1').value = t1;
      document.getElementById('val-t1').innerText = t1.toFixed(1);
      document.getElementById('param-t2').value = t2;
      document.getElementById('val-t2').innerText = t2.toFixed(1);
      document.getElementById('param-a').value = a;
      document.getElementById('val-a').innerText = a;
      document.getElementById('param-b').value = b;
      document.getElementById('val-b').innerText = b;

      rebuildScene();
    });

    window.addEventListener('resize', () => {
      camera.aspect = viewport.clientWidth / viewport.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(viewport.clientWidth, viewport.clientHeight);
      rebuildScene();
    });

    function animate() {
      requestAnimationFrame(animate);
      if (autoRotate) {
        if (rotAxis === 'x') {
          conicMeshGroup.rotation.x += 0.008;
        } else {
          conicMeshGroup.rotation.y += 0.008;
        }
      }
      controls.update();
      conicMeshGroup.updateMatrixWorld();
      updateOverlayLabels();
      renderer.render(scene, camera);
    }

    rebuildScene();
    animate();
  </script>
</body>
</html>`,
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-16"
  },
  {
    id: "sim-land-sea-breeze",
    title: "Land and Sea Breeze Thermodynamics Simulator",
    tagline: "Atmospheric Convection Cells, Specific Heat Capacity & Differential Surface Heating",
    discipline: "physics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM"],
    standards: ["MS-ESS2-6", "HS-ESS2-4", "HS-PS3-4", "IB Environmental Systems & Societies"],
    description: "Model atmospheric convection loops and coastal diurnal wind shifts driven by differential heat capacities between terrestrial land (~800 J/kgÂ·K) and maritime water (~4184 J/kgÂ·K). Explore daytime sea breezes (onshore wind, thermal updrafts over land, low pressure) versus nighttime land breezes (offshore wind, ocean updrafts, high pressure) with live particle streamlines, temperature telemetry, and pressure cells.",
    learningObjectives: [
      "Explain how differences in specific heat capacity between land and sea drive differential heating and cooling cycles",
      "Model how surface thermal updrafts generate localized low-pressure zones and convective circulation loops",
      "Differentiate between daytime onshore Sea Breezes and nighttime offshore Land Breezes",
      "Quantify the relationship between temperature differential (Î”T) and surface wind velocity"
    ],
    thumbnailGradient: "from-amber-600 via-sky-600 to-emerald-800",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    iconName: "Wind",
    rating: 5.0,
    reviewCount: 47,
    teacherCount: 215,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Diurnal mode toggle with Day (Golden Sun, Sea Breeze) and Night (Full Moon, Land Breeze) atmospheric setups",
      "Independent land (10Â°C to 45Â°C) and sea (10Â°C to 35Â°C) temperature sliders with real-time Î”T calculations",
      "Continuous thermodynamic convection streamlines with thermal updraft waves over warmer surfaces",
      "Live High (H) and Low (L) pressure cell indicators with comprehensive scientific explanation modal"
    ],
    parameterDefaults: {
      mode: "day",
      landTemp: 32,
      seaTemp: 22
    },
    parameterControls: [
      {
        key: "landTemp",
        label: "Land Surface Temp",
        min: 10,
        max: 45,
        step: 1,
        unit: "Â°C",
        description: "Temperature of the coastal terrestrial land surface"
      },
      {
        key: "seaTemp",
        label: "Sea Surface Temp",
        min: 10,
        max: 35,
        step: 1,
        unit: "Â°C",
        description: "Temperature of the ocean surface water"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-breeze-1",
        title: "Generate a Strong Onshore Sea Breeze",
        instruction: "Switch to Daytime mode and increase Land Temp to 40Â°C while keeping Sea Temp at 20Â°C to achieve a Î”T of +20Â°C.",
        targetMetric: "Temperature Differential (Î”T)",
        targetValue: 20.0,
        tolerance: 0.0,
        currentValueKey: "deltaT",
        rewardBadge: "Meteorologist"
      }
    ],
    previewFacts: [
      "Water has a specific heat capacity of approximately 4,184 J/(kgÂ·K), more than five times greater than dry sand or soil (~800 J/(kgÂ·K)).",
      "Sea breezes frequently penetrate inland up to 30 to 50 km, providing significant natural temperature moderation in coastal cities."
    ],
    isHtmlApp: true,
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Land and Sea Breeze Simulation</title>
    <style>
        :root {
            --bg-color: #0f172a;
            --panel-bg: #1e293b;
            --accent-color: #f59e0b;
            --text-color: #f8fafc;
            --text-dim: #94a3b8;
            --border-color: #334155;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
        }

        header {
            text-align: center;
            margin-bottom: 20px;
        }

        h1 {
            font-size: 1.8rem;
            margin-bottom: 6px;
            color: var(--accent-color);
        }

        p.subtitle {
            color: var(--text-dim);
            font-size: 0.95rem;
        }

        .container {
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 100%;
            max-width: 1000px;
        }

        @media (min-width: 850px) {
            .container {
                flex-direction: row;
            }
        }

        .canvas-wrapper {
            flex: 1 1 65%;
            position: relative;
            background-color: #000;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
            border: 1px solid var(--border-color);
        }

        canvas {
            display: block;
            width: 100%;
            height: auto;
        }

        .controls-panel {
            flex: 1 1 35%;
            background-color: var(--panel-bg);
            border-radius: 12px;
            padding: 20px;
            border: 1px solid var(--border-color);
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .panel-section {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .panel-section h3 {
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--text-dim);
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 4px;
        }

        .btn-group {
            display: flex;
            gap: 8px;
        }

        button {
            flex: 1;
            padding: 10px 14px;
            background-color: #334155;
            color: var(--text-color);
            border: 1px solid var(--border-color);
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
            font-size: 0.85rem;
            transition: all 0.2s ease;
        }

        button:hover {
            background-color: #475569;
        }

        button.active {
            background-color: var(--accent-color);
            color: #0f172a;
            border-color: var(--accent-color);
        }

        .btn-info {
            background-color: #0284c7;
            border-color: #38bdf8;
            color: #ffffff;
            margin-top: 4px;
        }

        .btn-info:hover {
            background-color: #0369a1;
        }

        .control-group {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .control-label {
            display: flex;
            justify-content: space-between;
            font-size: 0.85rem;
        }

        input[type="range"] {
            width: 100%;
            accent-color: var(--accent-color);
        }

        .telemetry-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
        }

        .telemetry-card {
            background-color: rgba(15, 23, 42, 0.6);
            padding: 10px;
            border-radius: 6px;
            border: 1px solid var(--border-color);
        }

        .telemetry-card .label {
            font-size: 0.75rem;
            color: var(--text-dim);
        }

        .telemetry-card .value {
            font-size: 1.1rem;
            font-weight: bold;
            color: var(--accent-color);
            margin-top: 2px;
        }

        .legend {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 0.8rem;
            color: var(--text-dim);
            padding-top: 4px;
        }

        .legend-item {
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
        }

        /* Modal Styles */
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(15, 23, 42, 0.85);
            backdrop-filter: blur(4px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 100;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
        }

        .modal-overlay.open {
            opacity: 1;
            pointer-events: auto;
        }

        .modal-content {
            background-color: var(--panel-bg);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            width: 90%;
            max-width: 650px;
            max-height: 85vh;
            overflow-y: auto;
            padding: 24px;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
            position: relative;
        }

        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 12px;
            margin-bottom: 16px;
        }

        .modal-header h2 {
            font-size: 1.3rem;
            color: var(--accent-color);
        }

        .close-btn {
            background: none;
            border: none;
            color: var(--text-dim);
            font-size: 1.5rem;
            cursor: pointer;
            line-height: 1;
            padding: 0 4px;
            flex: initial;
        }

        .close-btn:hover {
            color: var(--text-color);
            background: none;
        }

        .modal-body {
            font-size: 0.92rem;
            line-height: 1.6;
            color: #cbd5e1;
            display: flex;
            flex-direction: column;
            gap: 14px;
        }

        .modal-body h4 {
            color: #f1f5f9;
            font-size: 1rem;
            margin-top: 6px;
        }

        .modal-body ul {
            padding-left: 20px;
        }

        .modal-body li {
            margin-bottom: 6px;
        }

        .highlight-box {
            background-color: rgba(15, 23, 42, 0.6);
            border-left: 4px solid var(--accent-color);
            padding: 10px 14px;
            border-radius: 4px;
            font-size: 0.88rem;
        }
    </style>
</head>
<body>

    <header>
        <h1>Land and Sea Breeze Simulator</h1>
        <p class="subtitle">Thermodynamic convection dynamics driven by differential surface heating</p>
    </header>

    <div class="container">
        <div class="canvas-wrapper">
            <canvas id="simCanvas" width="600" height="420"></canvas>
        </div>

        <div class="controls-panel">
            <div class="panel-section">
                <h3>Diurnal Mode</h3>
                <div class="btn-group">
                    <button id="btnDay" class="active">Daytime (Sea Breeze)</button>
                    <button id="btnNight">Nighttime (Land Breeze)</button>
                </div>
            </div>

            <div class="panel-section">
                <h3>Surface Temperatures</h3>
                <div class="control-group">
                    <div class="control-label">
                        <span>Land Temp</span>
                        <span id="landTempDisplay">32 Â°C</span>
                    </div>
                    <input type="range" id="landTempSlider" min="10" max="45" value="32">
                </div>
                <div class="control-group">
                    <div class="control-label">
                        <span>Sea Temp</span>
                        <span id="seaTempDisplay">22 Â°C</span>
                    </div>
                    <input type="range" id="seaTempSlider" min="10" max="35" value="22">
                </div>
            </div>

            <div class="panel-section">
                <h3>Telemetry</h3>
                <div class="telemetry-grid">
                    <div class="telemetry-card">
                        <div class="label">Temp Delta (Î”T)</div>
                        <div class="value" id="tempDeltaValue">+10 Â°C</div>
                    </div>
                    <div class="telemetry-card">
                        <div class="label">Breeze Speed</div>
                        <div class="value" id="breezeSpeedValue">4.2 m/s</div>
                    </div>
                    <div class="telemetry-card">
                        <div class="label">Surface Wind</div>
                        <div class="value" id="windDirValue">Onshore</div>
                    </div>
                    <div class="telemetry-card">
                        <div class="label">Cell Type</div>
                        <div class="value" id="cellTypeValue">Sea Breeze</div>
                    </div>
                </div>
            </div>

            <button id="btnExplain" class="btn-info">ðŸ“– Explain Science & Physics</button>

            <div class="legend">
                <div class="legend-item"><span class="dot" style="background:#ef4444;"></span> Warm Air Stream</div>
                <div class="legend-item"><span class="dot" style="background:#3b82f6;"></span> Cool Air Stream</div>
                <div class="legend-item"><span class="dot" style="background:#f59e0b;"></span> Golden Sun</div>
            </div>
        </div>
    </div>

    <div id="infoModal" class="modal-overlay">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Understanding Land & Sea Breezes</h2>
                <button id="btnCloseModal" class="close-btn">&times;</button>
            </div>
            <div class="modal-body">
                <div class="highlight-box">
                    <strong>Core Principle:</strong> Land and sea breezes are localized atmospheric circulation systems caused by the difference in <em>specific heat capacity</em> between land and water.
                </div>

                <h4>1. Specific Heat Capacity Difference</h4>
                <p>
                    Land has a lower specific heat capacity than water (~800 J/kgÂ·K vs. ~4184 J/kgÂ·K). This means land heats up rapidly during the day when exposed to solar radiation, but cools down just as quickly at night. Water absorbs and releases thermal energy much more slowly, keeping sea temperatures relatively stable day and night.
                </p>

                <h4>2. Daytime: Sea Breeze (Onshore Wind)</h4>
                <ul>
                    <li><strong>Heating Phase:</strong> Sun heats the land faster than the sea.</li>
                    <li><strong>Pressure Gradient:</strong> Air over land warms, expands, becomes less dense, and rises (thermal updraft). This creates a <strong>Low Pressure (L)</strong> area at ground level over land.</li>
                    <li><strong>Convection Loop:</strong> Cooler, denser air over the water (High Pressure, H) blows onshore toward the land to replace the rising air, creating a refreshing <strong>Sea Breeze</strong>.</li>
                </ul>

                <h4>3. Nighttime: Land Breeze (Offshore Wind)</h4>
                <ul>
                    <li><strong>Cooling Phase:</strong> At night, land radiates heat quickly into space and becomes cooler than the sea.</li>
                    <li><strong>Pressure Inversion:</strong> The air over the warmer sea expands and rises, creating a <strong>Low Pressure (L)</strong> zone over the ocean.</li>
                    <li><strong>Convection Inversion:</strong> Denser, cooler air from the land (High Pressure, H) flows offshore toward the ocean, creating a <strong>Land Breeze</strong>.</li>
                </ul>

                <h4>4. Pressure Badges & Circulation Cells</h4>
                <p>
                    Air always flows along surface pressure gradients from <strong>High Pressure (H)</strong> to <strong>Low Pressure (L)</strong>. Upper-atmosphere return currents complete the convection loop, keeping atmospheric pressure balanced.
                </p>
            </div>
        </div>
    </div>

    <script>
        const canvas = document.getElementById('simCanvas');
        const ctx = canvas.getContext('2d');

        let mode = 'day';
        let landTemp = 32;
        let seaTemp = 22;
        let streamOffset = 0;
        let cloudOffset = 0;

        const stars = Array.from({ length: 65 }, function() {
            return {
                x: Math.random() * 600,
                y: Math.random() * 220,
                radius: 0.8 + Math.random() * 1.5,
                phase: Math.random() * Math.PI * 2,
                speed: 0.03 + Math.random() * 0.05
            };
        });

        const rocks = Array.from({ length: 14 }, function() {
            return {
                x: 310 + Math.random() * 260,
                yOffset: Math.random() * 15,
                width: 8 + Math.random() * 14,
                height: 5 + Math.random() * 8,
                color: Math.random() > 0.5 ? '#475569' : '#334155'
            };
        });

        const sandGrains = Array.from({ length: 120 }, function() {
            return {
                x: 270 + Math.random() * 320,
                y: 330 + Math.random() * 70,
                size: 1 + Math.random() * 2,
                color: Math.random() > 0.5 ? '#fde047' : '#ca8a04'
            };
        });

        const btnDay = document.getElementById('btnDay');
        const btnNight = document.getElementById('btnNight');
        const landTempSlider = document.getElementById('landTempSlider');
        const seaTempSlider = document.getElementById('seaTempSlider');
        const landTempDisplay = document.getElementById('landTempDisplay');
        const seaTempDisplay = document.getElementById('seaTempDisplay');
        const tempDeltaValue = document.getElementById('tempDeltaValue');
        const breezeSpeedValue = document.getElementById('breezeSpeedValue');
        const windDirValue = document.getElementById('windDirValue');
        const cellTypeValue = document.getElementById('cellTypeValue');

        const btnExplain = document.getElementById('btnExplain');
        const btnCloseModal = document.getElementById('btnCloseModal');
        const infoModal = document.getElementById('infoModal');

        function drawGlowingGoldenSun(sunX, sunY) {
            const time = Date.now() * 0.002;

            ctx.save();

            const haloRadius = 80 + Math.sin(time * 1.5) * 6;
            const haloGrad = ctx.createRadialGradient(sunX, sunY, 10, sunX, sunY, haloRadius);
            haloGrad.addColorStop(0, 'rgba(255, 215, 0, 0.6)');
            haloGrad.addColorStop(0.4, 'rgba(245, 158, 11, 0.3)');
            haloGrad.addColorStop(1, 'rgba(217, 119, 6, 0)');

            ctx.fillStyle = haloGrad;
            ctx.beginPath();
            ctx.arc(sunX, sunY, haloRadius, 0, Math.PI * 2);
            ctx.fill();

            const rayCount = 12;
            ctx.globalCompositeOperation = 'screen';
            for (let i = 0; i < rayCount; i++) {
                const angle = (i * Math.PI * 2 / rayCount) + (time * 0.05);
                const rayLen = 140 + Math.sin(time * 3 + i) * 18;

                const x1 = sunX + Math.cos(angle - 0.06) * 12;
                const y1 = sunY + Math.sin(angle - 0.06) * 12;
                const x2 = sunX + Math.cos(angle + 0.06) * 12;
                const y2 = sunY + Math.sin(angle + 0.06) * 12;
                const x3 = sunX + Math.cos(angle) * rayLen;
                const y3 = sunY + Math.sin(angle) * rayLen;

                const rayGrad = ctx.createLinearGradient(sunX, sunY, x3, y3);
                rayGrad.addColorStop(0, 'rgba(255, 223, 0, 0.45)');
                rayGrad.addColorStop(0.5, 'rgba(245, 158, 11, 0.15)');
                rayGrad.addColorStop(1, 'rgba(217, 119, 6, 0)');

                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.lineTo(x3, y3);
                ctx.closePath();
                ctx.fillStyle = rayGrad;
                ctx.fill();
            }
            ctx.globalCompositeOperation = 'source-over';

            const coreGrad = ctx.createRadialGradient(sunX - 5, sunY - 5, 2, sunX, sunY, 24);
            coreGrad.addColorStop(0, '#fef08a');
            coreGrad.addColorStop(0.35, '#f59e0b');
            coreGrad.addColorStop(0.85, '#d97706');
            coreGrad.addColorStop(1, '#b45309');

            ctx.beginPath();
            ctx.arc(sunX, sunY, 24, 0, Math.PI * 2);
            ctx.fillStyle = coreGrad;
            ctx.shadowColor = '#f59e0b';
            ctx.shadowBlur = 20;
            ctx.fill();
            ctx.shadowBlur = 0;

            ctx.font = 'bold 12px sans-serif';
            ctx.fillStyle = '#fef08a';
            ctx.textAlign = 'center';
            ctx.fillText('SUN', sunX, sunY + 42);

            ctx.restore();
        }

        function drawFullMoon(moonX, moonY) {
            ctx.save();

            const auraGrad = ctx.createRadialGradient(moonX, moonY, 15, moonX, moonY, 60);
            auraGrad.addColorStop(0, 'rgba(241, 245, 249, 0.5)');
            auraGrad.addColorStop(0.5, 'rgba(203, 213, 225, 0.2)');
            auraGrad.addColorStop(1, 'rgba(148, 163, 184, 0)');

            ctx.fillStyle = auraGrad;
            ctx.beginPath();
            ctx.arc(moonX, moonY, 60, 0, Math.PI * 2);
            ctx.fill();

            const moonGrad = ctx.createRadialGradient(moonX - 6, moonY - 6, 3, moonX, moonY, 22);
            moonGrad.addColorStop(0, '#ffffff');
            moonGrad.addColorStop(0.7, '#e2e8f0');
            moonGrad.addColorStop(1, '#cbd5e1');

            ctx.beginPath();
            ctx.arc(moonX, moonY, 22, 0, Math.PI * 2);
            ctx.fillStyle = moonGrad;
            ctx.shadowColor = '#e2e8f0';
            ctx.shadowBlur = 18;
            ctx.fill();
            ctx.shadowBlur = 0;

            const craters = [
                { x: -7, y: -5, r: 4 },
                { x: 6, y: 7, r: 5 },
                { x: -5, y: 9, r: 3 },
                { x: 8, y: -6, r: 3.5 },
                { x: 1, y: 2, r: 2.5 }
            ];

            ctx.fillStyle = 'rgba(148, 163, 184, 0.35)';
            craters.forEach(function(c) {
                ctx.beginPath();
                ctx.arc(moonX + c.x, moonY + c.y, c.r, 0, Math.PI * 2);
                ctx.fill();
            });

            ctx.font = 'bold 12px sans-serif';
            ctx.fillStyle = '#f1f5f9';
            ctx.textAlign = 'center';
            ctx.fillText('FULL MOON', moonX, moonY + 42);

            ctx.restore();
        }

        function drawConvolutedClouds() {
            ctx.save();
            cloudOffset += 0.25;

            const cloudGroups = [
                {
                    baseX: 70, baseY: 65, scale: 0.9,
                    puffs: [
                        { dx: 0, dy: 0, r: 22 },
                        { dx: 18, dy: -12, r: 28 },
                        { dx: 42, dy: -8, r: 24 },
                        { dx: 62, dy: 4, r: 18 },
                        { dx: 30, dy: 10, r: 20 },
                        { dx: -15, dy: 8, r: 16 }
                    ]
                },
                {
                    baseX: 250, baseY: 85, scale: 1.15,
                    puffs: [
                        { dx: 0, dy: 0, r: 26 },
                        { dx: 22, dy: -16, r: 32 },
                        { dx: 50, dy: -10, r: 28 },
                        { dx: 75, dy: 6, r: 22 },
                        { dx: 35, dy: 12, r: 24 },
                        { dx: -18, dy: 10, r: 18 }
                    ]
                },
                {
                    baseX: 410, baseY: 55, scale: 0.8,
                    puffs: [
                        { dx: 0, dy: 0, r: 20 },
                        { dx: 16, dy: -10, r: 25 },
                        { dx: 38, dy: -6, r: 22 },
                        { dx: 55, dy: 5, r: 16 },
                        { dx: 25, dy: 8, r: 18 }
                    ]
                }
            ];

            cloudGroups.forEach(function(cloud) {
                const currentX = ((cloud.baseX + cloudOffset) % 720) - 100;
                const scale = cloud.scale;

                ctx.fillStyle = 'rgba(186, 230, 253, 0.45)';
                cloud.puffs.forEach(function(p) {
                    ctx.beginPath();
                    ctx.arc(currentX + (p.dx * scale), cloud.baseY + ((p.dy + 4) * scale), p.r * scale, 0, Math.PI * 2);
                    ctx.fill();
                });

                const cloudGrad = ctx.createLinearGradient(0, cloud.baseY - 30, 0, cloud.baseY + 20);
                cloudGrad.addColorStop(0, '#ffffff');
                cloudGrad.addColorStop(0.85, '#f0f9ff');
                cloudGrad.addColorStop(1, '#e0f2fe');

                ctx.fillStyle = cloudGrad;
                cloud.puffs.forEach(function(p) {
                    ctx.beginPath();
                    ctx.arc(currentX + (p.dx * scale), cloud.baseY + (p.dy * scale), p.r * scale, 0, Math.PI * 2);
                    ctx.fill();
                });
            });

            ctx.restore();
        }

        function drawTwinklingStars() {
            ctx.save();
            const time = Date.now() * 0.001;
            stars.forEach(function(star) {
                const alpha = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(time * star.speed * 20 + star.phase));
                ctx.fillStyle = 'rgba(255, 255, 255, ' + alpha + ')';
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fill();
            });
            ctx.restore();
        }

        function drawArrowhead(x, y, angle, color) {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(angle);
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(-12, -6);
            ctx.lineTo(-10, 0);
            ctx.lineTo(-12, 6);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }

        function drawRealisticSea(W, H) {
            const time = Date.now() * 0.003;
            const seaLevel = H - 80;

            const waterGrad = ctx.createLinearGradient(0, seaLevel, 0, H);
            waterGrad.addColorStop(0, '#0284c7');
            waterGrad.addColorStop(0.5, '#0369a1');
            waterGrad.addColorStop(1, '#0c4a6e');
            ctx.fillStyle = waterGrad;
            ctx.fillRect(0, seaLevel, W / 2 + 10, 80);

            for (let layer = 0; layer < 3; layer++) {
                ctx.beginPath();
                ctx.moveTo(0, H);
                const offset = layer * 4;
                for (let x = 0; x <= W / 2 + 15; x += 5) {
                    const waveY = seaLevel + Math.sin(x * 0.04 + time * (2 + layer) + layer) * (4 - layer) + offset;
                    ctx.lineTo(x, waveY);
                }
                ctx.lineTo(W / 2 + 15, H);
                ctx.closePath();
                ctx.fillStyle = 'rgba(56, 189, 248, ' + (0.15 + layer * 0.1) + ')';
                ctx.fill();
            }

            ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            for (let x = W / 2 - 40; x <= W / 2 + 10; x += 2) {
                const foamY = seaLevel + Math.sin(x * 0.1 + time * 4) * 2;
                ctx.lineTo(x, foamY);
            }
            ctx.stroke();
        }

        function drawRealisticLand(W, H) {
            ctx.save();
            const seaLevel = H - 80;

            const sandGrad = ctx.createLinearGradient(W / 2 - 20, seaLevel, W / 2 + 60, H);
            sandGrad.addColorStop(0, '#eab308');
            sandGrad.addColorStop(0.5, '#ca8a04');
            sandGrad.addColorStop(1, '#854d0e');

            ctx.beginPath();
            ctx.moveTo(W / 2 - 20, H);
            ctx.quadraticCurveTo(W / 2, seaLevel + 10, W / 2 + 50, seaLevel - 5);
            ctx.lineTo(W / 2 + 50, H);
            ctx.closePath();
            ctx.fillStyle = sandGrad;
            ctx.fill();

            const landGrad = ctx.createLinearGradient(W / 2, seaLevel - 20, W, H);
            if (mode === 'day') {
                landGrad.addColorStop(0, '#15803d');
                landGrad.addColorStop(0.4, '#166534');
                landGrad.addColorStop(1, '#14532d');
            } else {
                landGrad.addColorStop(0, '#14532d');
                landGrad.addColorStop(0.5, '#052e16');
                landGrad.addColorStop(1, '#022c22');
            }

            ctx.beginPath();
            ctx.moveTo(W / 2 + 40, H);
            ctx.lineTo(W / 2 + 40, seaLevel - 5);
            ctx.bezierCurveTo(W / 2 + 90, seaLevel - 25, W / 2 + 140, seaLevel + 5, W / 2 + 190, seaLevel - 15);
            ctx.bezierCurveTo(W / 2 + 230, seaLevel - 30, W / 2 + 270, seaLevel - 5, W, seaLevel - 18);
            ctx.lineTo(W, H);
            ctx.closePath();
            ctx.fillStyle = landGrad;
            ctx.fill();

            sandGrains.forEach(function(g) {
                ctx.fillStyle = g.color;
                ctx.fillRect(g.x, g.y, g.size, g.size);
            });

            rocks.forEach(function(r) {
                ctx.fillStyle = r.color;
                ctx.beginPath();
                const rockY = seaLevel - 8 + r.yOffset;
                ctx.ellipse(r.x, rockY, r.width / 2, r.height / 2, 0, 0, Math.PI * 2);
                ctx.fill();
            });

            ctx.restore();
        }

        function drawRisingThermalCurrents(landTemp, seaTemp) {
            const time = Date.now() * 0.004;

            ctx.save();

            let targetCenterX = 0;
            let drawThermals = false;

            if (landTemp > seaTemp) {
                drawThermals = true;
                const heatIntensity = Math.min((landTemp - seaTemp) / 15, 1);
                ctx.lineWidth = 3.5;
                ctx.strokeStyle = 'rgba(239, 68, 68, ' + (0.7 * heatIntensity) + ')';

                for (let x = 360; x <= 540; x += 30) {
                    ctx.beginPath();
                    const baseY = 310;
                    for (let y = 0; y < 85; y += 4) {
                        const waveX = x + Math.sin((y * 0.08) - time * 3) * 9;
                        const currentY = baseY - y;
                        if (y === 0) ctx.moveTo(waveX, currentY);
                        else ctx.lineTo(waveX, currentY);
                    }
                    ctx.stroke();
                }
                targetCenterX = 450;
            } 
            else if (seaTemp > landTemp) {
                drawThermals = true;
                const heatIntensity = Math.min((seaTemp - landTemp) / 15, 1);
                ctx.lineWidth = 3.5;
                ctx.strokeStyle = 'rgba(239, 68, 68, ' + (0.7 * heatIntensity) + ')';

                for (let x = 80; x <= 220; x += 30) {
                    ctx.beginPath();
                    const baseY = 310;
                    for (let y = 0; y < 85; y += 4) {
                        const waveX = x + Math.sin((y * 0.08) - time * 3) * 9;
                        const currentY = baseY - y;
                        if (y === 0) ctx.moveTo(waveX, currentY);
                        else ctx.lineTo(waveX, currentY);
                    }
                    ctx.stroke();
                }
                targetCenterX = 150;
            }

            if (drawThermals) {
                const labelY = 250;
                
                ctx.font = 'bold 13px sans-serif';
                const textWidth = ctx.measureText('rising hot air').width;
                ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
                ctx.strokeStyle = '#ef4444';
                ctx.lineWidth = 1.5;
                
                ctx.beginPath();
                if (ctx.roundRect) {
                    ctx.roundRect(targetCenterX - textWidth / 2 - 8, labelY - 14, textWidth + 16, 22, 6);
                } else {
                    ctx.rect(targetCenterX - textWidth / 2 - 8, labelY - 14, textWidth + 16, 22);
                }
                ctx.fill();
                ctx.stroke();

                ctx.fillStyle = '#fef08a';
                ctx.textAlign = 'center';
                ctx.fillText('rising hot air', targetCenterX, labelY + 1);
            }

            ctx.restore();
        }

        function drawBackground() {
            const W = canvas.width;
            const H = canvas.height;

            const skyGrad = ctx.createLinearGradient(0, 0, 0, H - 80);
            if (mode === 'day') {
                skyGrad.addColorStop(0, '#0284c7');
                skyGrad.addColorStop(0.6, '#38bdf8');
                skyGrad.addColorStop(1, '#bae6fd');
            } else {
                skyGrad.addColorStop(0, '#020617');
                skyGrad.addColorStop(0.5, '#0f172a');
                skyGrad.addColorStop(1, '#1e1b4b');
            }
            ctx.fillStyle = skyGrad;
            ctx.fillRect(0, 0, W, H - 80);

            if (mode === 'night') drawTwinklingStars();
            if (mode === 'day') drawConvolutedClouds();

            if (mode === 'day') {
                drawGlowingGoldenSun(500, 48);
            } else {
                drawFullMoon(100, 48);
            }

            drawRealisticSea(W, H);
            drawRealisticLand(W, H);

            ctx.strokeStyle = 'rgba(254, 240, 138, 0.4)';
            ctx.lineWidth = 1.5;
            ctx.setLineDash([4, 4]);
            ctx.beginPath();
            ctx.moveTo(W / 2, H - 80);
            ctx.lineTo(W / 2, H);
            ctx.stroke();
            ctx.setLineDash([]);

            ctx.font = 'bold 14px sans-serif';
            ctx.fillStyle = '#ffffff';
            ctx.textAlign = 'left';
            ctx.fillText('SEA', 70, H - 25);
            ctx.fillText('LAND', W - 120, H - 25);
        }

        function drawContinuousBreezeStreamlines(deltaT) {
            const absDelta = Math.abs(deltaT);
            if (absDelta < 0.5) return;

            const speed = (0.5 + absDelta * 0.25);
            streamOffset = (streamOffset + speed) % 60;

            ctx.save();
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            const streamCount = 5;
            for (let i = 0; i < streamCount; i++) {
                const margin = i * 14;
                const path = new Path2D();

                const xSea = 110 + margin;
                const xLand = 490 - margin;
                const ySurface = 290 - (i * 12);
                const yUpper = 125 + (i * 12);

                if (deltaT > 0) {
                    path.moveTo(xSea, ySurface);
                    path.lineTo(xLand, ySurface);
                    path.quadraticCurveTo(xLand + 40, ySurface, xLand + 40, ySurface - 50);
                    path.lineTo(xLand + 40, yUpper + 50);
                    path.quadraticCurveTo(xLand + 40, yUpper, xLand, yUpper);
                    path.lineTo(xSea, yUpper);
                    path.quadraticCurveTo(xSea - 40, yUpper, xSea - 40, yUpper + 50);
                    path.lineTo(xSea - 40, ySurface - 50);
                    path.quadraticCurveTo(xSea - 40, ySurface, xSea, ySurface);
                } else {
                    path.moveTo(xLand, ySurface);
                    path.lineTo(xSea, ySurface);
                    path.quadraticCurveTo(xSea - 40, ySurface, xSea - 40, ySurface - 50);
                    path.lineTo(xSea - 40, yUpper + 50);
                    path.quadraticCurveTo(xSea - 40, yUpper, xSea, yUpper);
                    path.lineTo(xLand, yUpper);
                    path.quadraticCurveTo(xLand + 40, yUpper, xLand + 40, yUpper + 50);
                    path.lineTo(xLand + 40, ySurface - 50);
                    path.quadraticCurveTo(xLand + 40, ySurface, xLand, ySurface);
                }

                const streamGrad = ctx.createLinearGradient(100, 0, 500, 0);
                if (deltaT > 0) {
                    streamGrad.addColorStop(0.1, '#3b82f6');
                    streamGrad.addColorStop(0.5, '#60a5fa');
                    streamGrad.addColorStop(0.9, '#ef4444');
                } else {
                    streamGrad.addColorStop(0.1, '#ef4444');
                    streamGrad.addColorStop(0.5, '#60a5fa');
                    streamGrad.addColorStop(0.9, '#3b82f6');
                }

                ctx.lineWidth = 6;
                ctx.strokeStyle = streamGrad;
                ctx.globalAlpha = 0.25;
                ctx.stroke(path);

                ctx.lineWidth = 4;
                ctx.globalAlpha = 0.85;
                ctx.setLineDash([25, 35]);
                ctx.lineDashOffset = -streamOffset - (i * 12);
                ctx.stroke(path);
                ctx.setLineDash([]);
            }

            const arrowY = 290;
            if (deltaT > 0) {
                drawArrowhead(320, arrowY, 0, '#3b82f6');
                drawArrowhead(200, arrowY, 0, '#3b82f6');
                drawArrowhead(420, arrowY, 0, '#ef4444');
            } else {
                drawArrowhead(280, arrowY, Math.PI, '#3b82f6');
                drawArrowhead(400, arrowY, Math.PI, '#3b82f6');
                drawArrowhead(180, arrowY, Math.PI, '#ef4444');
            }

            ctx.restore();
        }

        function drawPressureIndicators(deltaT) {
            const W = canvas.width;
            const H = canvas.height;

            ctx.font = 'bold 18px sans-serif';
            ctx.textAlign = 'center';

            if (deltaT > 0) {
                drawBadge(W * 0.25, H - 95, 'H', '#3b82f6');
                drawBadge(W * 0.75, H - 95, 'L', '#ef4444');
                drawBadge(W * 0.25, 115, 'L', '#ef4444');
                drawBadge(W * 0.75, 115, 'H', '#3b82f6');
            } else if (deltaT < 0) {
                drawBadge(W * 0.25, H - 95, 'L', '#ef4444');
                drawBadge(W * 0.75, H - 95, 'H', '#3b82f6');
                drawBadge(W * 0.25, 115, 'H', '#3b82f6');
                drawBadge(W * 0.75, 115, 'L', '#ef4444');
            }
        }

        function drawBadge(x, y, text, color) {
            ctx.beginPath();
            ctx.arc(x, y - 5, 13, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
            ctx.fill();
            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.fillStyle = color;
            ctx.fillText(text, x, y);
        }

        function updateTelemetry() {
            const deltaT = landTemp - seaTemp;
            const absDelta = Math.abs(deltaT);
            const speed = (absDelta * 0.42).toFixed(1);

            tempDeltaValue.innerText = (deltaT > 0 ? '+' : '') + deltaT + ' Â°C';
            breezeSpeedValue.innerText = speed + ' m/s';

            if (deltaT > 0) {
                windDirValue.innerText = 'Onshore (Sea â†’ Land)';
                cellTypeValue.innerText = 'Sea Breeze';
                tempDeltaValue.style.color = '#ef4444';
            } else if (deltaT < 0) {
                windDirValue.innerText = 'Offshore (Land â†’ Sea)';
                cellTypeValue.innerText = 'Land Breeze';
                tempDeltaValue.style.color = '#38bdf8';
            } else {
                windDirValue.innerText = 'Calm';
                cellTypeValue.innerText = 'Neutral';
                tempDeltaValue.style.color = '#94a3b8';
            }

            landTempDisplay.innerText = landTemp + ' Â°C';
            seaTempDisplay.innerText = seaTemp + ' Â°C';
        }

        function mainLoop() {
            const deltaT = landTemp - seaTemp;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawBackground();
            drawRisingThermalCurrents(landTemp, seaTemp);
            drawContinuousBreezeStreamlines(deltaT);
            drawPressureIndicators(deltaT);
            updateTelemetry();

            requestAnimationFrame(mainLoop);
        }

        btnDay.addEventListener('click', function() {
            mode = 'day';
            btnDay.classList.add('active');
            btnNight.classList.remove('active');
            landTemp = 32;
            seaTemp = 22;
            landTempSlider.value = landTemp;
            seaTempSlider.value = seaTemp;
        });

        btnNight.addEventListener('click', function() {
            mode = 'night';
            btnNight.classList.add('active');
            btnDay.classList.remove('active');
            landTemp = 14;
            seaTemp = 20;
            landTempSlider.value = landTemp;
            seaTempSlider.value = seaTemp;
        });

        landTempSlider.addEventListener('input', function(e) {
            landTemp = parseInt(e.target.value);
        });

        seaTempSlider.addEventListener('input', function(e) {
            seaTemp = parseInt(e.target.value);
        });

        btnExplain.addEventListener('click', function() {
            infoModal.classList.add('open');
        });

        btnCloseModal.addEventListener('click', function() {
            infoModal.classList.remove('open');
        });

        infoModal.addEventListener('click', function(e) {
            if (e.target === infoModal) {
                infoModal.classList.remove('open');
            }
        });

        mainLoop();
    </script>
</body>
</html>`,
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-16"
  },
  {
    id: "sim-interactive-electric-circuits",
    title: "Interactive Electric Circuit Laboratory",
    tagline: "Series & Parallel Resistor Networks, DC Multi-Cell Stacks, Analog Meters & Bulb Power",
    discipline: "physics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM"],
    standards: ["HS-PS3-3", "HS-PS3-5", "AP Physics 2 (Unit 9)", "MS-PS3-3", "IB Physics (Topic 5)"],
    description: "Explore DC electricity, Ohm's Law (V = IR), equivalent resistance rules, Kirchhoff's current and voltage laws, and electrical power dissipation (P = IÂ²R). Configure resistor networks in series or parallel, group DC chemical cells in series or parallel, observe real-time needle deflection on analog Voltmeters, Ammeters, and Galvanometers, and watch real-time electron drift and tungsten filament incandescence.",
    learningObjectives: [
      "Calculate equivalent resistance for series (Req = R1 + R2 + ...) and parallel (1/Req = 1/R1 + 1/R2 + ...) topologies",
      "Investigate how cell grouping (series vs. parallel) affects total electromotive force (EMF) and terminal voltage",
      "Analyze current division in parallel branches and voltage drops across individual series resistors",
      "Measure power dissipation and filament brightness of a resistive light bulb load with animated electron flow"
    ],
    thumbnailGradient: "from-sky-600 via-blue-700 to-indigo-900",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    iconName: "Zap",
    rating: 5.0,
    reviewCount: 62,
    teacherCount: 310,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Resistor network topology toggling between Series and Parallel with 1 to 4 customizable resistors (1Î© to 100Î©)",
      "DC Power Source cell stacking with Series (additive voltage) and Parallel grouping, plus per-cell voltage tuning (1.5V to 12V)",
      "Realistic incandescent light bulb load with dynamic tungsten filament glow aura and power dissipation calculations",
      "Precision analog instrumentation (Voltmeter, Ammeter, and Center-Zero Galvanometer) with calibrated dial graduations and moving needles",
      "Live animated electron drift speed proportional to total loop current (Itotal)"
    ],
    parameterDefaults: {
      resTopology: "series",
      cellTopology: "series",
      numCells: 2,
      vCell: 6.0,
      numRes: 2,
      r1: 10,
      r2: 20,
      rLoad: 10
    },
    parameterControls: [
      {
        key: "vCell",
        label: "Voltage per Cell",
        min: 1.5,
        max: 12,
        step: 0.5,
        unit: "V",
        description: "Electromotive force of each individual DC chemical cell"
      },
      {
        key: "r1",
        label: "Resistor 1 (Râ‚)",
        min: 1,
        max: 100,
        step: 1,
        unit: "Î©",
        description: "Resistance of the primary resistor in the network"
      },
      {
        key: "rLoad",
        label: "Bulb Filament Resistance",
        min: 1,
        max: 50,
        step: 1,
        unit: "Î©",
        description: "Internal resistive load of the incandescent lamp"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-circ-1",
        title: "Achieve 1.0 Amp Total Current",
        instruction: "Adjust the cell voltage and resistor values in series or parallel to obtain exactly 1.00 A of total circuit current.",
        targetMetric: "Total Current (I_total)",
        targetValue: 1.0,
        tolerance: 0.05,
        currentValueKey: "Itotal",
        rewardBadge: "Circuit Master"
      }
    ],
    previewFacts: [
      "In a series circuit, current is identical everywhere while total voltage is divided among components. In a parallel circuit, voltage is identical across every branch while total current divides among paths.",
      "Tungsten filament lamps glow because electrical resistance converts electron kinetic energy into thermal energy and blackbody photon radiation (incandescence)."
    ],
    isHtmlApp: true,
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Electric Circuit Simulation</title>
    <style>
        :root {
            --bg-main: #0f172a;
            --panel-bg: #1e293b;
            --panel-border: #334155;
            --accent-blue: #38bdf8;
            --accent-green: #22c55e;
            --accent-amber: #f59e0b;
            --accent-red: #ef4444;
            --text-light: #f8fafc;
            --text-muted: #94a3b8;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: var(--bg-main);
            color: var(--text-light);
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }

        h1 {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 20px;
            color: var(--accent-blue);
            text-shadow: 0 0 10px rgba(56, 189, 248, 0.2);
        }

        .main-layout {
            display: flex;
            flex-direction: row;
            gap: 20px;
            width: 100%;
            max-width: 1350px;
            justify-content: center;
        }

        @media (max-width: 900px) {
            .main-layout {
                flex-direction: column;
            }
            .control-panel {
                max-width: 100% !important;
            }
        }

        /* CONTROL PANEL */
        .control-panel {
            flex: 1;
            max-width: 380px;
            background-color: var(--panel-bg);
            border: 1px solid var(--panel-border);
            border-radius: 12px;
            padding: 18px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.5);
            display: flex;
            flex-direction: column;
            gap: 14px;
        }

        .panel-section {
            background: rgba(15, 23, 42, 0.6);
            padding: 12px;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .panel-title {
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            color: var(--accent-blue);
            margin-bottom: 10px;
        }

        .control-group {
            display: flex;
            flex-direction: column;
            gap: 5px;
            margin-bottom: 8px;
        }

        .control-group:last-child { margin-bottom: 0; }

        label {
            font-size: 12px;
            color: var(--text-muted);
            display: flex;
            justify-content: space-between;
        }

        .val-tag {
            color: var(--accent-amber);
            font-weight: bold;
        }

        input[type="range"] {
            width: 100%;
            accent-color: var(--accent-blue);
            cursor: pointer;
        }

        .btn-group {
            display: flex;
            gap: 8px;
        }

        .btn-group button {
            flex: 1;
            padding: 6px 10px;
            border-radius: 6px;
            border: 1px solid var(--panel-border);
            background-color: var(--bg-main);
            color: var(--text-light);
            font-size: 12px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
        }

        button.active {
            background-color: var(--accent-blue);
            color: #000;
            border-color: var(--accent-blue);
        }

        /* WORKSPACE & CANVAS */
        .workspace {
            flex: 2;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .canvas-container {
            position: relative;
            background-color: var(--panel-bg);
            border: 1px solid var(--panel-border);
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.5);
            overflow: hidden;
            height: 520px;
        }

        canvas {
            width: 100%;
            height: 100%;
            display: block;
        }

        /* SUMMARY BAR */
        .summary-bar {
            background: var(--panel-bg);
            border: 1px solid var(--panel-border);
            border-radius: 12px;
            padding: 12px 20px;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }

        .summary-item {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .summary-label { font-size: 11px; color: var(--text-muted); text-transform: uppercase; }
        .summary-value { font-size: 16px; font-weight: bold; color: var(--accent-blue); margin-top: 2px; }
    </style>
</head>
<body>

    <h1>Interactive Electric Circuit Simulation</h1>

    <div class="main-layout">
        <!-- LEFT: CONTROLS -->
        <div class="control-panel">
            
            <!-- RESISTOR TOPOLOGY -->
            <div class="panel-section">
                <div class="panel-title">Resistor Network Topology</div>
                <div class="btn-group">
                    <button id="btnSeries" class="active" onclick="setResistorTopology('series')">Series</button>
                    <button id="btnParallel" onclick="setResistorTopology('parallel')">Parallel</button>
                </div>
            </div>

            <!-- CELL SOURCE CONFIGURATION -->
            <div class="panel-section">
                <div class="panel-title">DC Power Source (Cells)</div>
                
                <div class="control-group">
                    <label>Cell Grouping: </label>
                    <div class="btn-group">
                        <button id="btnCellSeries" class="active" onclick="setCellTopology('series')">Cells in Series</button>
                        <button id="btnCellParallel" onclick="setCellTopology('parallel')">Cells in Parallel</button>
                    </div>
                </div>

                <div class="control-group" style="margin-top: 8px;">
                    <label>Number of Cells: <span id="numCellsVal" class="val-tag">2</span></label>
                    <input type="range" id="numCellsSlider" min="1" max="4" value="2" step="1" oninput="updateParams()">
                </div>

                <div class="control-group">
                    <label>Voltage per Cell (e): <span id="vCellVal" class="val-tag">6 V</span></label>
                    <input type="range" id="vCellSlider" min="1.5" max="12" value="6" step="0.5" oninput="updateParams()">
                </div>
            </div>

            <!-- RESISTORS CONFIGURATION -->
            <div class="panel-section">
                <div class="panel-title">Resistors Network</div>
                
                <div class="control-group">
                    <label>Number of Resistors: <span id="numResVal" class="val-tag">2</span></label>
                    <input type="range" id="numResSlider" min="1" max="4" value="2" step="1" oninput="updateParams()">
                </div>

                <div class="control-group" id="r1Group">
                    <label>Resistor 1 (Râ‚): <span id="r1Val" class="val-tag">10 Î©</span></label>
                    <input type="range" id="r1Slider" min="1" max="100" value="10" step="1" oninput="updateParams()">
                </div>

                <div class="control-group" id="r2Group">
                    <label>Resistor 2 (Râ‚‚): <span id="r2Val" class="val-tag">20 Î©</span></label>
                    <input type="range" id="r2Slider" min="1" max="100" value="20" step="1" oninput="updateParams()">
                </div>

                <div class="control-group" id="r3Group" style="display: none;">
                    <label>Resistor 3 (Râ‚ƒ): <span id="r3Val" class="val-tag">30 Î©</span></label>
                    <input type="range" id="r3Slider" min="1" max="100" value="30" step="1" oninput="updateParams()">
                </div>

                <div class="control-group" id="r4Group" style="display: none;">
                    <label>Resistor 4 (Râ‚„): <span id="r4Val" class="val-tag">40 Î©</span></label>
                    <input type="range" id="r4Slider" min="1" max="100" value="40" step="1" oninput="updateParams()">
                </div>
            </div>

            <!-- LIGHT BULB LOAD -->
            <div class="panel-section">
                <div class="panel-title">Light Bulb Resistance (R_L)</div>
                <div class="control-group">
                    <label>Bulb Filament Resistance: <span id="loadVal" class="val-tag">10 Î©</span></label>
                    <input type="range" id="loadSlider" min="1" max="50" value="10" step="1" oninput="updateParams()">
                </div>
            </div>

        </div>

        <!-- RIGHT: WORKSPACE -->
        <div class="workspace">
            <!-- CANVAS -->
            <div class="canvas-container">
                <canvas id="circuitCanvas"></canvas>
            </div>

            <!-- SUMMARY BAR -->
            <div class="summary-bar">
                <div class="summary-item">
                    <span class="summary-label">Total Voltage (V_total)</span>
                    <span id="vTotalDisplay" class="summary-value">12.00 V</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Total Resistance (R_eq)</span>
                    <span id="reqDisplay" class="summary-value">40.00 Î©</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Total Current (I_total)</span>
                    <span id="itagDisplay" class="summary-value">0.30 A</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Bulb Power (P_bulb)</span>
                    <span id="pDisplay" class="summary-value">0.90 W</span>
                </div>
            </div>
        </div>
    </div>

    <script>
        const canvas = document.getElementById('circuitCanvas');
        const ctx = canvas.getContext('2d');

        function resizeCanvas() {
            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.parentElement.clientHeight;
        }
        window.addEventListener('resize', resizeCanvas);

        // CIRCUIT STATE
        let resTopology = 'series'; // 'series' or 'parallel'
        let cellTopology = 'series'; // 'series' or 'parallel'
        
        let numCells = 2;
        let vCell = 6.0;
        let Vtotal = 12.0;

        let numRes = 2;
        let R1 = 10, R2 = 20, R3 = 30, R4 = 40;
        let R_load = 10;

        let Req = 0, Itotal = 0;
        let I1 = 0, I2 = 0, I3 = 0, I4 = 0;
        let V1 = 0, V2 = 0, V3 = 0, V4 = 0;

        // ANIMATED ELECTRONS
        let electrons = [];
        const NUM_ELECTRONS = 50;
        for (let i = 0; i < NUM_ELECTRONS; i++) {
            electrons.push({ progress: Math.random(), branch: Math.floor(Math.random() * 4) });
        }

        // CONTROL ELEMENTS
        const numCellsSlider = document.getElementById('numCellsSlider');
        const vCellSlider = document.getElementById('vCellSlider');
        const numResSlider = document.getElementById('numResSlider');
        const r1Slider = document.getElementById('r1Slider');
        const r2Slider = document.getElementById('r2Slider');
        const r3Slider = document.getElementById('r3Slider');
        const r4Slider = document.getElementById('r4Slider');
        const loadSlider = document.getElementById('loadSlider');

        function setResistorTopology(type) {
            resTopology = type;
            document.getElementById('btnSeries').classList.toggle('active', type === 'series');
            document.getElementById('btnParallel').classList.toggle('active', type === 'parallel');
            updateParams();
        }

        function setCellTopology(type) {
            cellTopology = type;
            document.getElementById('btnCellSeries').classList.toggle('active', type === 'series');
            document.getElementById('btnCellParallel').classList.toggle('active', type === 'parallel');
            updateParams();
        }

        function updateParams() {
            numCells = parseInt(numCellsSlider.value);
            vCell = parseFloat(vCellSlider.value);
            
            // Calculate Total Voltage based on cell arrangement
            if (cellTopology === 'series') {
                Vtotal = numCells * vCell;
            } else {
                Vtotal = vCell; // Cells in parallel keep same voltage
            }

            numRes = parseInt(numResSlider.value);
            R1 = parseFloat(r1Slider.value);
            R2 = parseFloat(r2Slider.value);
            R3 = parseFloat(r3Slider.value);
            R4 = parseFloat(r4Slider.value);
            R_load = parseFloat(loadSlider.value);

            document.getElementById('numCellsVal').textContent = numCells;
            document.getElementById('vCellVal').textContent = \`\${vCell.toFixed(1)} V\`;
            document.getElementById('numResVal').textContent = numRes;
            document.getElementById('r1Val').textContent = \`\${R1} Î©\`;
            document.getElementById('r2Val').textContent = \`\${R2} Î©\`;
            document.getElementById('r3Val').textContent = \`\${R3} Î©\`;
            document.getElementById('r4Val').textContent = \`\${R4} Î©\`;
            document.getElementById('loadVal').textContent = \`\${R_load} Î©\`;

            document.getElementById('r2Group').style.display = numRes >= 2 ? 'flex' : 'none';
            document.getElementById('r3Group').style.display = numRes >= 3 ? 'flex' : 'none';
            document.getElementById('r4Group').style.display = numRes >= 4 ? 'flex' : 'none';

            // RESISTOR NETWORK CALCULATIONS
            if (resTopology === 'series') {
                let rSum = 0;
                if (numRes >= 1) rSum += R1;
                if (numRes >= 2) rSum += R2;
                if (numRes >= 3) rSum += R3;
                if (numRes >= 4) rSum += R4;

                Req = rSum + R_load;
                Itotal = Vtotal / Req;

                I1 = numRes >= 1 ? Itotal : 0;
                I2 = numRes >= 2 ? Itotal : 0;
                I3 = numRes >= 3 ? Itotal : 0;
                I4 = numRes >= 4 ? Itotal : 0;

                V1 = I1 * R1; V2 = I2 * R2; V3 = I3 * R3; V4 = I4 * R4;
            } else {
                let invR = (1 / R1) + (numRes >= 2 ? (1 / R2) : 0) + (numRes >= 3 ? (1 / R3) : 0) + (numRes >= 4 ? (1 / R4) : 0);
                let R_parallel_comb = 1 / invR;

                Req = R_parallel_comb + R_load;
                Itotal = Vtotal / Req;

                let V_parallel_bank = Itotal * R_parallel_comb;

                V1 = V_parallel_bank;
                V2 = numRes >= 2 ? V_parallel_bank : 0;
                V3 = numRes >= 3 ? V_parallel_bank : 0;
                V4 = numRes >= 4 ? V_parallel_bank : 0;

                I1 = V_parallel_bank / R1;
                I2 = numRes >= 2 ? V_parallel_bank / R2 : 0;
                I3 = numRes >= 3 ? V_parallel_bank / R3 : 0;
                I4 = numRes >= 4 ? V_parallel_bank / R4 : 0;
            }

            let bulbPower = (Itotal * Itotal) * R_load;

            document.getElementById('vTotalDisplay').textContent = \`\${Vtotal.toFixed(2)} V\`;
            document.getElementById('reqDisplay').textContent = \`\${Req.toFixed(2)} Î©\`;
            document.getElementById('itagDisplay').textContent = \`\${Itotal.toFixed(2)} A\`;
            document.getElementById('pDisplay').textContent = \`\${bulbPower.toFixed(2)} W\`;
        }

        // DRAW ANALOG METER WITH DIAL GRADUATIONS AND MOVING POINTER
        function drawAnalogInstrument(x, y, type, val, maxVal, labelStr, color) {
            ctx.save();
            ctx.translate(x, y);

            let radius = 26;

            // Instrument Housing
            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, Math.PI * 2);
            ctx.fillStyle = '#1e293b';
            ctx.fill();
            ctx.strokeStyle = color;
            ctx.lineWidth = 2.5;
            ctx.stroke();

            // Dial Arc
            ctx.beginPath();
            ctx.arc(0, 2, 18, Math.PI * 0.8, Math.PI * 2.2);
            ctx.strokeStyle = '#475569';
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // Graduated Scale Marks
            let startAngle = Math.PI * 0.8;
            let endAngle = Math.PI * 2.2;
            let ticks = 5;

            for (let i = 0; i <= ticks; i++) {
                let angle = startAngle + (i / ticks) * (endAngle - startAngle);
                let innerR = 15;
                let outerR = 18;

                let x1 = innerR * Math.cos(angle);
                let y1 = innerR * Math.sin(angle) + 2;
                let x2 = outerR * Math.cos(angle);
                let y2 = outerR * Math.sin(angle) + 2;

                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.strokeStyle = '#94a3b8';
                ctx.lineWidth = 1;
                ctx.stroke();
            }

            // Pointer Needle Deflection Calculation
            let fraction = 0;
            var needleAngle = 0;
            if (type === 'G') {
                // Galvanometer (Center Zero)
                fraction = Math.min(Math.max(val / maxVal, -1.0), 1.0);
                needleAngle = Math.PI * 1.5 + (fraction * (Math.PI * 0.6));
            } else {
                // Voltmeter / Ammeter
                fraction = Math.min(Math.max(val / maxVal, 0.0), 1.0);
                needleAngle = Math.PI * 0.8 + (fraction * (Math.PI * 1.4));
            }

            // Needle
            ctx.beginPath();
            ctx.moveTo(0, 2);
            ctx.lineTo(16 * Math.cos(needleAngle), 2 + 16 * Math.sin(needleAngle));
            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            ctx.stroke();

            // Pivot
            ctx.beginPath();
            ctx.arc(0, 2, 3, 0, Math.PI * 2);
            ctx.fillStyle = '#cbd5e1';
            ctx.fill();

            // Instrument Label
            ctx.fillStyle = '#f8fafc';
            ctx.font = 'bold 10px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(labelStr, 0, -12);

            // Readout Value below instrument
            ctx.fillStyle = color;
            ctx.font = 'bold 9px monospace';
            let formattedVal = (type === 'G') ? \`\${(val * 1000).toFixed(0)}mA\` : \`\${val.toFixed(1)}\${type}\`;
            ctx.fillText(formattedVal, 0, 22);

            ctx.restore();
        }

        // REALISTIC LIGHT BULB WITH FINE TUNGSTEN FILAMENT
        function drawRealisticBulb(x, y, current, loadR) {
            ctx.save();
            ctx.translate(x, y);

            // Brightness factor from power (I^2 * R)
            let power = (current * current) * loadR;
            let maxPowerRef = 15.0; // Reference full power scale
            let glowRatio = Math.min(power / maxPowerRef, 1.0);

            // Dynamic Radiating Glow Aura
            if (glowRatio > 0.02) {
                let auraRadius = 25 + glowRatio * 35;
                let glowGrad = ctx.createRadialGradient(0, -5, 2, 0, -5, auraRadius);
                glowGrad.addColorStop(0, \`rgba(254, 240, 138, \${0.9 * glowRatio})\`);
                glowGrad.addColorStop(0.4, \`rgba(245, 158, 11, \${0.5 * glowRatio})\`);
                glowGrad.addColorStop(1, 'rgba(245, 158, 11, 0)');
                ctx.beginPath();
                ctx.arc(0, -5, auraRadius, 0, Math.PI * 2);
                ctx.fillStyle = glowGrad;
                ctx.fill();
            }

            // Glass Envelope
            ctx.beginPath();
            ctx.arc(0, -8, 20, Math.PI * 0.75, Math.PI * 0.25, false);
            ctx.bezierCurveTo(12, 10, 8, 15, 8, 20);
            ctx.lineTo(-8, 20);
            ctx.bezierCurveTo(-8, 15, -12, 10, -20, -8);
            ctx.fillStyle = \`rgba(254, 240, 138, \${0.1 + glowRatio * 0.5})\`;
            ctx.fill();
            ctx.strokeStyle = '#94a3b8';
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // Screw Base / Cap
            ctx.fillStyle = '#64748b';
            ctx.fillRect(-7, 20, 14, 8);
            ctx.fillStyle = '#475569';
            ctx.fillRect(-5, 28, 10, 4);

            // Internal Support Lead Wires
            ctx.strokeStyle = '#cbd5e1';
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(-5, 18); ctx.lineTo(-4, -2);
            ctx.moveTo(5, 18); ctx.lineTo(4, -2);
            ctx.stroke();

            // Realistic Coiled Tungsten Filament
            ctx.beginPath();
            let filX = -4;
            ctx.moveTo(filX, -2);
            for (let i = 0; i <= 6; i++) {
                let fx = -4 + (i * 1.33);
                let fy = -2 + (i % 2 === 0 ? -4 : 0);
                ctx.lineTo(fx, fy);
            }
            ctx.lineTo(4, -2);

            // Filament Color Glow based on current
            if (glowRatio > 0.02) {
                ctx.strokeStyle = \`rgb(255, \${Math.floor(200 + glowRatio * 55)}, \${Math.floor(150 * glowRatio)})\`;
                ctx.shadowColor = '#fef08a';
                ctx.shadowBlur = 10 * glowRatio;
            } else {
                ctx.strokeStyle = '#64748b';
                ctx.shadowBlur = 0;
            }
            ctx.lineWidth = 1.8;
            ctx.stroke();

            ctx.shadowBlur = 0; // reset shadow

            // Label
            ctx.fillStyle = '#f8fafc';
            ctx.font = 'bold 11px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(\`Bulb (\${R_load}Î©)\`, 0, 42);

            ctx.restore();
        }

        // BATTERY PACK DRAWING ON CIRCUIT PATH
        function drawBatteryPack(x, y, isVertical) {
            ctx.save();
            ctx.translate(x, y);

            ctx.fillStyle = '#1e293b';
            ctx.strokeStyle = '#38bdf8';
            ctx.lineWidth = 2;

            if (cellTopology === 'series') {
                // Series Cells
                let boxH = 20 + numCells * 22;
                ctx.fillRect(-35, -boxH / 2, 70, boxH);
                ctx.strokeRect(-35, -boxH / 2, 70, boxH);

                for (let i = 0; i < numCells; i++) {
                    let cy = -boxH / 2 + 20 + i * 22;
                    // Long + Plate
                    ctx.strokeStyle = '#22c55e'; ctx.lineWidth = 2.5;
                    ctx.beginPath(); ctx.moveTo(-18, cy - 5); ctx.lineTo(18, cy - 5); ctx.stroke();
                    // Short - Plate
                    ctx.strokeStyle = '#ef4444'; ctx.lineWidth = 3.5;
                    ctx.beginPath(); ctx.moveTo(-10, cy + 5); ctx.lineTo(10, cy + 5); ctx.stroke();
                }
            } else {
                // Parallel Cells
                let boxH = 75;
                ctx.fillRect(-45, -boxH / 2, 90, boxH);
                ctx.strokeRect(-45, -boxH / 2, 90, boxH);

                let cellStep = 70 / (numCells + 1);
                for (let i = 1; i <= numCells; i++) {
                    let cx = -45 + i * cellStep;
                    // Long + Plate
                    ctx.strokeStyle = '#22c55e'; ctx.lineWidth = 2.5;
                    ctx.beginPath(); ctx.moveTo(cx, -15); ctx.lineTo(cx, 0); ctx.stroke();
                    // Short - Plate
                    ctx.strokeStyle = '#ef4444'; ctx.lineWidth = 3.5;
                    ctx.beginPath(); ctx.moveTo(cx, 8); ctx.lineTo(cx, 18); ctx.stroke();
                }
            }

            // Voltage Value Tag printed right on circuit body
            ctx.fillStyle = '#22c55e';
            ctx.font = 'bold 12px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(\`\${Vtotal.toFixed(1)} V\`, 0, cellTopology === 'series' ? 0 : -25);
            
            ctx.fillStyle = '#94a3b8';
            ctx.font = '10px sans-serif';
            ctx.fillText(\`(\${numCells} \${cellTopology === 'series' ? 'Series' : 'Parallel'} Cells)\`, 0, cellTopology === 'series' ? 14 : 28);

            ctx.restore();
        }

        function drawResistorSymbol(x, y, label, valStr, isVertical) {
            ctx.save();
            ctx.translate(x, y);
            if (isVertical) ctx.rotate(Math.PI / 2);

            ctx.strokeStyle = '#f59e0b';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(-28, 0);
            ctx.lineTo(-20, -9);
            ctx.lineTo(-10, 9);
            ctx.lineTo(0, -9);
            ctx.lineTo(10, 9);
            ctx.lineTo(20, -9);
            ctx.lineTo(28, 0);
            ctx.stroke();

            ctx.fillStyle = '#f8fafc';
            ctx.font = 'bold 12px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(label, 0, isVertical ? -20 : -18);
            ctx.fillStyle = '#38bdf8';
            ctx.font = '11px sans-serif';
            ctx.fillText(valStr, 0, isVertical ? 28 : 22);

            ctx.restore();
        }

        // MAIN CANVAS RENDER
        function drawCircuit() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const w = canvas.width;
            const h = canvas.height;
            const padX = 90;
            const padY = 65;

            const left = padX;
            const right = w - padX;
            const top = padY;
            const bottom = h - padY;

            ctx.lineWidth = 4;
            ctx.strokeStyle = '#cbd5e1';

            // --- LEFT VERTICAL WIRE WITH BATTERY PACK ---
            ctx.beginPath();
            ctx.moveTo(left, top);
            ctx.lineTo(left, h / 2 - 55);
            ctx.moveTo(left, h / 2 + 55);
            ctx.lineTo(left, bottom);
            ctx.stroke();

            drawBatteryPack(left, h / 2, true);

            // --- VOLTMETER IN PARALLEL ACROSS POWER SOURCE ---
            ctx.strokeStyle = '#ef4444';
            ctx.lineWidth = 2;
            ctx.setLineDash([4, 4]);
            ctx.beginPath();
            ctx.moveTo(left, top + 15); ctx.lineTo(left - 50, top + 15); ctx.lineTo(left - 50, bottom - 15); ctx.lineTo(left, bottom - 15);
            ctx.stroke();
            ctx.setLineDash([]);
            drawAnalogInstrument(left - 50, h / 2, 'V', Vtotal, 50, 'Voltmeter', '#ef4444');

            // --- BOTTOM WIRE: GALVANOMETER, AMMETER & BULB ---
            let wireY = bottom;
            let sectionW = (right - left) / 3;

            // Wire 1
            ctx.strokeStyle = '#cbd5e1'; ctx.lineWidth = 4;
            ctx.beginPath(); ctx.moveTo(left, wireY); ctx.lineTo(left + sectionW * 0.7 - 26, wireY); ctx.stroke();

            // Galvanometer (G)
            let gX = left + sectionW * 0.7;
            drawAnalogInstrument(gX, wireY, 'G', Itotal, 0.5, 'Galvanometer', '#f59e0b');

            // Wire 2
            ctx.beginPath(); ctx.moveTo(gX + 26, wireY); ctx.lineTo(left + sectionW * 1.5 - 26, wireY); ctx.stroke();

            // Ammeter (A)
            let aX = left + sectionW * 1.5;
            drawAnalogInstrument(aX, wireY, 'A', Itotal, 5.0, 'Ammeter', '#38bdf8');

            // Wire 3
            ctx.beginPath(); ctx.moveTo(aX + 26, wireY); ctx.lineTo(left + sectionW * 2.3 - 20, wireY); ctx.stroke();

            // Light Bulb Load
            let bulbX = left + sectionW * 2.3;
            drawRealisticBulb(bulbX, wireY, Itotal, R_load);

            // Wire 4
            ctx.beginPath(); ctx.moveTo(bulbX + 20, wireY); ctx.lineTo(right, wireY); ctx.stroke();

            // --- RESISTORS NETWORK ---
            if (resTopology === 'series') {
                drawSeriesResistors(left, right, top);
            } else {
                drawParallelResistors(left, right, top, bottom);
            }

            // --- ANIMATED ELECTRONS ---
            animateElectrons(left, right, top, bottom);
        }

        function drawSeriesResistors(left, right, top) {
            ctx.strokeStyle = '#cbd5e1';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(left, top);

            let step = (right - left) / (numRes + 1);
            let rList = [
                { name: 'Râ‚', val: \`\${R1}Î©\`, v: V1 },
                { name: 'Râ‚‚', val: \`\${R2}Î©\`, v: V2 },
                { name: 'Râ‚ƒ', val: \`\${R3}Î©\`, v: V3 },
                { name: 'Râ‚„', val: \`\${R4}Î©\`, v: V4 }
            ];

            for (let i = 1; i <= numRes; i++) {
                let rx = left + step * i;
                ctx.lineTo(rx - 28, top);
                ctx.stroke();

                drawResistorSymbol(rx, top, rList[i - 1].name, \`\${rList[i - 1].val} (\${rList[i - 1].v.toFixed(1)}V)\`, false);

                ctx.beginPath();
                ctx.moveTo(rx + 28, top);
            }

            ctx.lineTo(right, top);
            ctx.lineTo(right, canvas.height - 65);
            ctx.stroke();
        }

        function drawParallelResistors(left, right, top, bottom) {
            ctx.strokeStyle = '#cbd5e1';
            ctx.lineWidth = 4;

            let count = numRes;
            let availableHeight = bottom - top - 40;
            let branchStep = availableHeight / (count - 1 || 1);

            let rList = [
                { name: 'Râ‚', val: \`\${R1}Î©\`, current: I1 },
                { name: 'Râ‚‚', val: \`\${R2}Î©\`, current: I2 },
                { name: 'Râ‚ƒ', val: \`\${R3}Î©\`, current: I3 },
                { name: 'Râ‚„', val: \`\${R4}Î©\`, current: I4 }
            ];

            ctx.beginPath();
            ctx.moveTo(left, top);
            ctx.lineTo(right, top);
            ctx.moveTo(right, top);
            ctx.lineTo(right, bottom);
            ctx.stroke();

            for (let i = 0; i < count; i++) {
                let branchY = top + (count === 1 ? availableHeight / 2 : i * branchStep);
                let midX = (left + right) / 2;

                ctx.beginPath();
                ctx.moveTo(left + 60, top);
                ctx.lineTo(left + 60, branchY);
                ctx.lineTo(midX - 30, branchY);
                ctx.stroke();

                drawResistorSymbol(midX, branchY, rList[i].name, \`\${rList[i].val} (\${rList[i].current.toFixed(2)}A)\`, false);

                ctx.beginPath();
                ctx.moveTo(midX + 30, branchY);
                ctx.lineTo(right - 60, branchY);
                ctx.lineTo(right - 60, top);
                ctx.stroke();

                // Node Dots
                ctx.fillStyle = '#38bdf8';
                ctx.beginPath();
                ctx.arc(left + 60, top, 4, 0, Math.PI * 2);
                ctx.arc(right - 60, top, 4, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function animateElectrons(left, right, top, bottom) {
            let speed = (Itotal / 4.0) * 0.008;
            if (speed <= 0) return;

            ctx.fillStyle = '#fef08a';

            electrons.forEach(function(e) {
                e.progress = (e.progress + speed) % 1.0;
                let pos = (resTopology === 'series') ? 
                    getSeriesPosition(e.progress, left, right, top, bottom) : 
                    getParallelPosition(e.progress, e.branch, left, right, top, bottom);

                ctx.beginPath();
                ctx.arc(pos.x, pos.y, 3.5, 0, Math.PI * 2);
                ctx.fill();
            });
        }

        function getSeriesPosition(p, left, right, top, bottom) {
            let totalLen = (right - left) * 2 + (bottom - top) * 2;
            let d = p * totalLen;

            if (d < (right - left)) return { x: left + d, y: top };
            d -= (right - left);
            if (d < (bottom - top)) return { x: right, y: top + d };
            d -= (bottom - top);
            if (d < (right - left)) return { x: right - d, y: bottom };
            d -= (right - left);
            return { x: left, y: bottom - d };
        }

        function getParallelPosition(p, branchIndex, left, right, top, bottom) {
            let count = numRes;
            let activeBranch = branchIndex % count;
            let availableHeight = bottom - top - 40;
            let branchStep = availableHeight / (count - 1 || 1);
            let branchY = top + (count === 1 ? availableHeight / 2 : activeBranch * branchStep);

            if (p < 0.2) {
                return { x: left + (p / 0.2) * 60, y: top };
            } else if (p < 0.35) {
                let subP = (p - 0.2) / 0.15;
                return { x: left + 60, y: top + subP * (branchY - top) };
            } else if (p < 0.65) {
                let subP = (p - 0.35) / 0.3;
                return { x: (left + 60) + subP * (right - 120 - left), y: branchY };
            } else if (p < 0.8) {
                let subP = (p - 0.65) / 0.15;
                return { x: right - 60, y: branchY - subP * (branchY - top) };
            } else if (p < 0.9) {
                let subP = (p - 0.8) / 0.1;
                return { x: (right - 60) + subP * 60, y: top };
            } else {
                let subP = (p - 0.9) / 0.1;
                if (subP < 0.4) {
                    return { x: right, y: top + (subP / 0.4) * (bottom - top) };
                } else if (subP < 0.8) {
                    return { x: right - ((subP - 0.4) / 0.4) * (right - left), y: bottom };
                } else {
                    return { x: left, y: bottom - ((subP - 0.8) / 0.2) * (bottom - top) };
                }
            }
        }

        function loop() {
            drawCircuit();
            requestAnimationFrame(loop);
        }

        resizeCanvas();
        updateParams();
        loop();
    </script>
</body>
</html>`,
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-16"
  },
  {
    id: "sim-micrometer-screw-gauge",
    title: "Micrometer Screw Gauge Teaching Simulator",
    tagline: "Precision Metrology, Main Scale (Sleeve) & 0.01mm Circular Thimble Vernier Reading",
    discipline: "physics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM"],
    standards: ["HS-PS1-2", "IB Physics (Topic 1: Measurement & Uncertainties)", "CCSS.MATH.HSN.Q.A.1", "MS-ETS1-4"],
    description: "Master precise physical metrology and dimensional measurement using an interactive micrometer screw gauge. Measure thicknesses down to 0.01 mm (10 micrometers) by combining the Sleeve Main Scale Reading (MSR with 0.5 mm subdivisions) and Circular Thimble Scale Reading (CSR). Features interactive anvil/spindle gap rendering, object measurement display, answer hiding for formative student quizzes, and graduated pitch calibrations.",
    learningObjectives: [
      "Interpret linear Main Scale Readings (MSR) on the sleeve barrel including 1.0 mm and 0.5 mm pitch marks",
      "Read the 50-division circular Thimble Scale (CSR) with 0.01 mm least count precision",
      "Calculate total thickness (Total = MSR + CSR Ã— 0.01 mm) for physical specimens clamped in the spindle gap",
      "Practice formative self-assessment using the interactive hide/show answer classroom mode"
    ],
    thumbnailGradient: "from-slate-700 via-blue-700 to-indigo-950",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    iconName: "Ruler",
    rating: 5.0,
    reviewCount: 54,
    teacherCount: 285,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive mechanical micrometer with C-frame, anvil, moving spindle, datum line sleeve, and knurled thimble",
      "Dual-range controls for Main Sleeve Scale (0 to 25 mm at 0.5 mm steps) and Circular Thimble Scale (0 to 49 divisions)",
      "Dynamic clamped specimen thickness visualization with real-time gap scaling",
      "Formative classroom assessment mode with Toggle/Hide Answer button and instant reset",
      "MSR, CSR, and Total Reading telemetry cards with least-count breakdown"
    ],
    parameterDefaults: {
      mainScale: 7.0,
      thimbleDivs: 38
    },
    parameterControls: [
      {
        key: "mainScale",
        label: "Main Scale (Sleeve)",
        min: 0,
        max: 25,
        step: 0.5,
        unit: "mm",
        description: "Coarse measurement reading along the horizontal datum sleeve"
      },
      {
        key: "thimbleDivs",
        label: "Thimble Scale (0.01 mm/div)",
        min: 0,
        max: 49,
        step: 1,
        unit: "div",
        description: "Fine circular scale divisions on the rotating bevel thimble"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-micro-1",
        title: "Measure 12.84 mm Thickness",
        instruction: "Set the Main Scale to 12.50 mm and adjust the Circular Thimble Scale to 34 divisions to measure a specimen of exactly 12.84 mm.",
        targetMetric: "Total Reading",
        targetValue: 12.84,
        tolerance: 0.005,
        currentValueKey: "totalMm",
        rewardBadge: "Metrologist"
      }
    ],
    previewFacts: [
      "A standard micrometer screw gauge has a thread pitch of 0.5 mm and 50 circular divisions on the thimble, providing a precision (least count) of 0.5 mm / 50 = 0.01 mm (10 Âµm).",
      "Micrometers were invented in the 17th century by William Gascoigne as an enhancement to the astronomical telescope, later adapted for benchtop machining by Palmer and Brown & Sharpe."
    ],
    isHtmlApp: true,
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Micrometer Screw Gauge Teaching Simulation</title>
    <style>
        :root {
            --bg-color: #f8fafc;
            --card-bg: #ffffff;
            --primary: #2563eb;
            --primary-hover: #1d4ed8;
            --text-dark: #0f172a;
            --text-muted: #64748b;
            --metal-dark: #334155;
            --metal-light: #94a3b8;
            --thimble-bg: #cbd5e1;
            --accent-red: #dc2626;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-dark);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            background-color: var(--card-bg);
            border-radius: 12px;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 900px;
            padding: 24px;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        header {
            text-align: center;
            border-bottom: 2px solid #f1f5f9;
            padding-bottom: 12px;
        }

        header h1 {
            font-size: 1.5rem;
            color: var(--text-dark);
        }

        header p {
            font-size: 0.9rem;
            color: var(--text-muted);
        }

        .canvas-container {
            width: 100%;
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        canvas {
            width: 100%;
            max-width: 800px;
            height: auto;
        }

        .controls {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 16px;
            background-color: #f8fafc;
            padding: 16px;
            border-radius: 8px;
            border: 1px solid #e2e8f0;
        }

        .control-group {
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .control-group label {
            font-size: 0.875rem;
            font-weight: 600;
            display: flex;
            justify-content: space-between;
        }

        input[type="range"] {
            width: 100%;
            height: 6px;
            border-radius: 3px;
            background: #cbd5e1;
            outline: none;
            accent-color: var(--primary);
            cursor: pointer;
        }

        .button-group {
            display: flex;
            gap: 12px;
            justify-content: center;
            margin-top: 4px;
        }

        .btn {
            padding: 8px 16px;
            border-radius: 6px;
            border: none;
            font-weight: 600;
            font-size: 0.875rem;
            cursor: pointer;
            transition: all 0.2s;
        }

        .btn-primary {
            background-color: var(--primary);
            color: white;
        }

        .btn-primary:hover {
            background-color: var(--primary-hover);
        }

        .btn-secondary {
            background-color: #e2e8f0;
            color: var(--text-dark);
        }

        .btn-secondary:hover {
            background-color: #cbd5e1;
        }

        .readout {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 12px;
            text-align: center;
        }

        .readout-card {
            background: #f1f5f9;
            padding: 12px;
            border-radius: 8px;
            border: 1px solid #e2e8f0;
        }

        .readout-card.total {
            background: #eff6ff;
            border-color: #bfdbfe;
        }

        .readout-card .title {
            font-size: 0.75rem;
            text-transform: uppercase;
            font-weight: 700;
            color: var(--text-muted);
            margin-bottom: 4px;
        }

        .readout-card .value {
            font-size: 1.25rem;
            font-weight: 700;
            color: var(--text-dark);
        }

        .readout-card.total .value {
            color: var(--primary);
        }

        .hidden-value {
            filter: blur(5px);
            user-select: none;
        }
    </style>
</head>
<body>

<div class="container">
    <header>
        <h1>Micrometer Screw Gauge Interactive Simulator</h1>
        <p>Interactive instructional tool for teaching main scale and thimble readings</p>
    </header>

    <div class="canvas-container">
        <canvas id="micrometerCanvas" width="800" height="300"></canvas>
    </div>

    <div class="controls">
        <div class="control-group">
            <label for="mainScaleInput">
                <span>Main Scale (Sleeve)</span>
                <span id="mainScaleVal">7.00 mm</span>
            </label>
            <input type="range" id="mainScaleInput" min="0" max="25" step="0.5" value="7">
        </div>

        <div class="control-group">
            <label for="thimbleInput">
                <span>Thimble Scale (0.01 mm / div)</span>
                <span id="thimbleVal">38 div (0.38 mm)</span>
            </label>
            <input type="range" id="thimbleInput" min="0" max="49" step="1" value="38">
        </div>
    </div>

    <div class="button-group">
        <button class="btn btn-secondary" id="toggleAnswerBtn">Hide Answer</button>
        <button class="btn btn-primary" id="resetBtn">Reset to Default</button>
    </div>

    <div class="readout">
        <div class="readout-card">
            <div class="title">Main Scale Reading (MSR)</div>
            <div class="value" id="msrDisplay">7.00 mm</div>
        </div>
        <div class="readout-card">
            <div class="title">Circular Scale Reading (CSR)</div>
            <div class="value" id="csrDisplay">0.38 mm</div>
        </div>
        <div class="readout-card total">
            <div class="title">Total Reading</div>
            <div class="value" id="totalDisplay">7.38 mm</div>
        </div>
    </div>
</div>

<script>
    const canvas = document.getElementById('micrometerCanvas');
    const ctx = canvas.getContext('2d');

    const mainScaleInput = document.getElementById('mainScaleInput');
    const thimbleInput = document.getElementById('thimbleInput');
    const mainScaleVal = document.getElementById('mainScaleVal');
    const thimbleVal = document.getElementById('thimbleVal');

    const msrDisplay = document.getElementById('msrDisplay');
    const csrDisplay = document.getElementById('csrDisplay');
    const totalDisplay = document.getElementById('totalDisplay');

    const toggleAnswerBtn = document.getElementById('toggleAnswerBtn');
    const resetBtn = document.getElementById('resetBtn');

    let showAnswer = true;

    function drawMicrometer() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const msr = parseFloat(mainScaleInput.value);
        const csr = parseInt(thimbleInput.value, 10);
        const totalMm = msr + (csr * 0.01);

        // Scale factors
        const pxPerMm = 14; 
        const originX = 120;
        const originY = 150;

        // 1. Draw Frame
        ctx.fillStyle = '#334155';
        ctx.beginPath();
        ctx.arc(originX, originY, 90, 0.4 * Math.PI, 1.6 * Math.PI, false);
        ctx.lineTo(originX + 100, originY - 90);
        ctx.lineTo(originX + 100, originY + 90);
        ctx.closePath();
        ctx.fill();

        // Inner frame cutout
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(originX + 20, originY, 65, 0.4 * Math.PI, 1.6 * Math.PI, false);
        ctx.lineTo(originX + 80, originY - 65);
        ctx.lineTo(originX + 80, originY + 65);
        ctx.closePath();
        ctx.fill();

        // 2. Anvil (Left)
        ctx.fillStyle = '#64748b';
        ctx.fillRect(originX - 90, originY - 15, 20, 30);

        // 3. Spindle (Gap based on measurement)
        const gapPx = totalMm * pxPerMm;
        const sleeveStartX = originX - 5;
        
        ctx.fillStyle = '#94a3b8';
        ctx.fillRect(sleeveStartX - gapPx - 10, originY - 12, gapPx + 10, 24);

        // Object measured in gap (if gap > 0)
        if (totalMm > 0) {
            ctx.fillStyle = 'rgba(220, 38, 38, 0.2)';
            ctx.strokeStyle = '#dc2626';
            ctx.lineWidth = 1;
            ctx.fillRect(originX - 70, originY - 20, gapPx, 40);
            ctx.strokeRect(originX - 70, originY - 20, gapPx, 40);
        }

        // 4. Sleeve / Main Scale Barrel
        const sleeveWidth = 25 * pxPerMm + 60;
        ctx.fillStyle = '#cbd5e1';
        ctx.fillRect(sleeveStartX, originY - 22, sleeveWidth, 44);
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 1;
        ctx.strokeRect(sleeveStartX, originY - 22, sleeveWidth, 44);

        // Main Datum Line
        ctx.beginPath();
        ctx.strokeStyle = '#0f172a';
        ctx.lineWidth = 1.5;
        ctx.moveTo(sleeveStartX, originY);
        ctx.lineTo(sleeveStartX + sleeveWidth - 10, originY);
        ctx.stroke();

        // Sleeve Graduation Marks
        ctx.fillStyle = '#0f172a';
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'center';

        for (let i = 0; i <= 25; i++) {
            const x = sleeveStartX + (i * pxPerMm);

            // Upper marks (1mm)
            ctx.beginPath();
            ctx.moveTo(x, originY);
            ctx.lineTo(x, originY - 12);
            ctx.stroke();

            if (i % 5 === 0) {
                ctx.fillText(i.toString(), x, originY - 15);
            }

            // Lower marks (0.5mm)
            if (i < 25) {
                const xHalf = x + (pxPerMm / 2);
                ctx.beginPath();
                ctx.moveTo(xHalf, originY);
                ctx.lineTo(xHalf, originY + 10);
                ctx.stroke();
            }
        }

        // 5. Thimble Position (Moves right with total mm)
        const thimbleX = sleeveStartX + (totalMm * pxPerMm);
        const thimbleWidth = 110;
        const thimbleRadius = 32;

        // Thimble Bevel (Conical Part)
        ctx.fillStyle = '#94a3b8';
        ctx.beginPath();
        ctx.moveTo(thimbleX, originY - thimbleRadius);
        ctx.lineTo(thimbleX + 25, originY - thimbleRadius - 5);
        ctx.lineTo(thimbleX + 25, originY + thimbleRadius + 5);
        ctx.lineTo(thimbleX, originY + thimbleRadius);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Thimble Handle
        ctx.fillStyle = '#64748b';
        ctx.fillRect(thimbleX + 25, originY - thimbleRadius - 5, thimbleWidth, (thimbleRadius + 5) * 2);
        ctx.strokeRect(thimbleX + 25, originY - thimbleRadius - 5, thimbleWidth, (thimbleRadius + 5) * 2);

        // Thimble Knurling Grip Effect
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 1;
        for (let k = thimbleX + 35; k < thimbleX + 25 + thimbleWidth - 10; k += 6) {
            ctx.beginPath();
            ctx.moveTo(k, originY - thimbleRadius - 4);
            ctx.lineTo(k, originY + thimbleRadius + 4);
            ctx.stroke();
        }

        // 6. Thimble Circular Scale Divisions
        ctx.strokeStyle = '#0f172a';
        ctx.fillStyle = '#0f172a';
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'right';

        // Draw divisions on the bevel edge
        const pxPerDiv = 3.2; // Vertical distance per division on thimble
        for (let d = -10; d <= 10; d++) {
            let divNum = (csr + d) % 50;
            if (divNum < 0) divNum += 50;

            const yPos = originY - (d * pxPerDiv);

            // Keep within visual bounds of the bevel
            if (yPos >= originY - thimbleRadius + 2 && yPos <= originY + thimbleRadius - 2) {
                const isMajor = divNum % 5 === 0;
                const lineLen = isMajor ? 12 : 7;

                ctx.beginPath();
                ctx.moveTo(thimbleX, yPos);
                ctx.lineTo(thimbleX + lineLen, yPos);
                ctx.stroke();

                if (isMajor) {
                    ctx.fillText(divNum.toString(), thimbleX + 22, yPos + 3);
                }
            }
        }
    }

    function updateValues() {
        const msr = parseFloat(mainScaleInput.value);
        const csr = parseInt(thimbleInput.value, 10);
        const totalMm = msr + (csr * 0.01);

        mainScaleVal.textContent = msr.toFixed(2) + ' mm';
        thimbleVal.textContent = \`\${csr} div (\${(csr * 0.01).toFixed(2)} mm)\`;

        msrDisplay.textContent = msr.toFixed(2) + ' mm';
        csrDisplay.textContent = (csr * 0.01).toFixed(2) + ' mm';
        totalDisplay.textContent = totalMm.toFixed(2) + ' mm';

        drawMicrometer();
    }

    // Toggle Answer Visibility
    toggleAnswerBtn.addEventListener('click', () => {
        showAnswer = !showAnswer;
        if (showAnswer) {
            totalDisplay.classList.remove('hidden-value');
            toggleAnswerBtn.textContent = 'Hide Answer';
        } else {
            totalDisplay.classList.add('hidden-value');
            toggleAnswerBtn.textContent = 'Show Answer';
        }
    });

    // Reset Controls
    resetBtn.addEventListener('click', () => {
        mainScaleInput.value = 7.0;
        thimbleInput.value = 38;
        showAnswer = true;
        totalDisplay.classList.remove('hidden-value');
        toggleAnswerBtn.textContent = 'Hide Answer';
        updateValues();
    });

    mainScaleInput.addEventListener('input', updateValues);
    thimbleInput.addEventListener('input', updateValues);

    // Initial render
    updateValues();
</script>

</body>
</html>`,
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-16"
  },
  {
    id: "sim-set-theory-venn-diagrams",
    title: "Set Theory & Venn Diagram Visualizer",
    tagline: "Explore 2-set and 3-set Venn diagrams, boolean set operations (union, intersection, difference, complement), and cardinality",
    discipline: "mathematics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM"],
    standards: ["CCSS.MATH.HSS.CP.A.1", "CCSS.MATH.HSS.CP.B.7", "NGSS SEP-4"],
    description: "Interact with 2-set and 3-set Venn diagrams in real time. Configure Universal set (U), Set A, Set B, and Set C elements, execute set operations (A âˆª B, A âˆ© B, A - B, B - A, A', B', and triple sets A âˆª B âˆª C, A âˆ© B âˆ© C, A - (B âˆª C)), inspect individual atomic regions with locked highlighting, and calculate exact cardinalities.",
    learningObjectives: [
      "Define universal sets, subsets, disjoint sets, and calculate the cardinality |S| of arbitrary set combinations",
      "Visualize and evaluate union (âˆª), intersection (âˆ©), set difference (-), and absolute complement (') operations",
      "Analyze 2-set and 3-set overlapping atomic regions and relate them to symbolic set notations and real-world classification models"
    ],
    thumbnailGradient: "from-pink-600 via-indigo-600 to-blue-600",
    badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    iconName: "Layers",
    rating: 5.0,
    reviewCount: 38,
    teacherCount: 142,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Dynamic 2-set and 3-set interactive Venn diagram canvas with SVG mask and clip-path region isolation",
      "Full suite of Boolean set operations (Union, Intersection, Set Difference, and Complement)",
      "Interactive atomic region inspector with click-to-lock and hover feedback",
      "Cardinality calculator and preset configurations (Disjoint, Subsets, Standard Overlap, and Random Generator)"
    ],
    parameterDefaults: {
      setCount: 3,
      operation: "ABC_UNION"
    },
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-set-1",
        title: "Disjoint Sets & Empty Intersection",
        instruction: "Select the Disjoint Sets preset and verify that the intersection A âˆ© B yields the empty set âˆ… with cardinality 0.",
        targetMetric: "Cardinality",
        targetValue: 0,
        tolerance: 0,
        currentValueKey: "cardinality",
        rewardBadge: "Logic Architect"
      },
      {
        id: "ch-set-2",
        title: "Triple Intersection Mastery",
        instruction: "In 3-set mode, find the elements belonging exclusively to the triple intersection A âˆ© B âˆ© C.",
        targetMetric: "Triple Intersection",
        targetValue: 1,
        tolerance: 0,
        currentValueKey: "tripleIntersection",
        rewardBadge: "Venn Champion"
      }
    ],
    previewFacts: [
      "John Venn introduced Venn diagrams in 1880 to represent categorical propositions in formal logic and probability theory.",
      "De Morgan's Laws state that (A âˆª B)' = A' âˆ© B' and (A âˆ© B)' = A' âˆª B', which are easily verified using Venn diagrams."
    ],
    isHtmlApp: true,
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Set Theory & Venn Diagram Visualizer</title>
    <style>
        :root {
            --bg-gradient: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #311042 100%);
            --card-bg: rgba(255, 255, 255, 0.95);
            --card-glass: rgba(255, 255, 255, 0.08);
            --text-dark: #0f172a;
            --text-light: #f8fafc;
            --text-muted: #94a3b8;
            --border-light: rgba(255, 255, 255, 0.15);
            
            /* Radiant Palette */
            --color-a: #ec4899;      /* Hot Pink */
            --color-b: #3b82f6;      /* Electric Blue */
            --color-c: #8b5cf6;      /* Vibrant Purple */
            --accent-green: #10b981; /* Emerald Green */
            --accent-amber: #f59e0b; /* Golden Amber */
            --highlight: #6366f1;    /* Indigo Highlight */
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        body {
            background: var(--bg-gradient);
            color: var(--text-light);
            min-height: 100vh;
            padding: 32px 24px;
            max-width: 1440px;
            margin: 0 auto;
        }

        header {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid var(--border-light);
            border-radius: 20px;
            padding: 24px 36px;
            margin-bottom: 28px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        header h1 {
            font-size: 2rem;
            font-weight: 800;
            background: linear-gradient(90deg, #38bdf8, #a78bfa, #f472b6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            letter-spacing: -0.5px;
        }

        header .subtitle {
            font-size: 0.95rem;
            color: var(--text-muted);
            margin-top: 4px;
        }

        .badge {
            background: linear-gradient(135deg, #6366f1, #a855f7);
            padding: 6px 16px;
            border-radius: 30px;
            font-size: 0.8rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            box-shadow: 0 0 15px rgba(168, 85, 247, 0.4);
        }

        .container {
            display: grid;
            grid-template-columns: 400px 1fr;
            gap: 28px;
        }

        @media (max-width: 1024px) {
            .container {
                grid-template-columns: 1fr;
            }
        }

        .panel {
            background: var(--card-bg);
            border-radius: 24px;
            padding: 28px;
            color: var(--text-dark);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
            backdrop-filter: blur(10px);
        }

        .panel-header {
            font-size: 1.15rem;
            font-weight: 800;
            color: var(--text-dark);
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e2e8f0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .mode-toggle {
            display: flex;
            background: #f1f5f9;
            padding: 5px;
            border-radius: 14px;
            gap: 6px;
            margin-bottom: 20px;
        }

        .mode-toggle button {
            flex: 1;
            padding: 10px;
            border: none;
            border-radius: 10px;
            font-weight: 700;
            font-size: 0.85rem;
            color: #64748b;
            background: transparent;
            cursor: pointer;
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mode-toggle button.active {
            background: #ffffff;
            color: var(--highlight);
            box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
        }

        .form-group {
            margin-bottom: 18px;
        }

        label {
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 700;
            font-size: 0.8rem;
            margin-bottom: 8px;
            color: #475569;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .dot-a { width: 10px; height: 10px; border-radius: 50%; background: var(--color-a); display: inline-block; }
        .dot-b { width: 10px; height: 10px; border-radius: 50%; background: var(--color-b); display: inline-block; }
        .dot-c { width: 10px; height: 10px; border-radius: 50%; background: var(--color-c); display: inline-block; }

        input[type="text"], select {
            width: 100%;
            padding: 12px 16px;
            border: 2px solid #e2e8f0;
            border-radius: 12px;
            font-size: 0.95rem;
            font-weight: 600;
            background-color: #f8fafc;
            color: var(--text-dark);
            outline: none;
            transition: all 0.2s;
        }

        input[type="text"]:focus, select:focus {
            border-color: var(--highlight);
            background-color: #ffffff;
            box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.15);
        }

        .btn-group {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            margin-top: 12px;
        }

        .btn-group button {
            padding: 11px 14px;
            background: #f1f5f9;
            border: 2px solid #e2e8f0;
            border-radius: 12px;
            cursor: pointer;
            font-weight: 700;
            font-size: 0.85rem;
            color: #475569;
            transition: all 0.2s ease;
        }

        .btn-group button:hover {
            background: #e2e8f0;
            color: var(--text-dark);
        }

        .btn-group button.active {
            background: linear-gradient(135deg, #6366f1, #4f46e5);
            color: #ffffff;
            border-color: #4f46e5;
            box-shadow: 0 6px 16px rgba(79, 70, 229, 0.3);
        }

        .btn-random {
            width: 100%;
            margin-top: 16px;
            background: linear-gradient(135deg, #10b981, #059669);
            color: #ffffff;
            border: none;
            border-radius: 12px;
            padding: 14px;
            font-weight: 800;
            font-size: 0.95rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            box-shadow: 0 8px 20px rgba(16, 185, 129, 0.3);
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .btn-random:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 24px rgba(16, 185, 129, 0.4);
        }

        .venn-container {
            position: relative;
            width: 100%;
            height: 480px;
            background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
            border: 2px solid #e2e8f0;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        svg {
            width: 100%;
            height: 100%;
        }

        .atomic-region {
            fill: #f1f5f9;
            fill-opacity: 0.2;
            stroke: transparent;
            cursor: pointer;
            transition: all 0.25s ease;
        }

        .atomic-region.op-active {
            fill: url(#activeGradient);
            fill-opacity: 0.65;
        }

        .atomic-region:hover {
            fill: #f59e0b !important;
            fill-opacity: 0.75 !important;
            filter: drop-shadow(0 0 12px rgba(245, 158, 11, 0.5));
        }

        .atomic-region.locked {
            fill: #f59e0b !important;
            fill-opacity: 0.85 !important;
            stroke: #d97706 !important;
            stroke-width: 3px !important;
            stroke-dasharray: 6,4;
        }

        .circle-stroke-a { fill: none; stroke: var(--color-a); stroke-width: 3.5; pointer-events: none; }
        .circle-stroke-b { fill: none; stroke: var(--color-b); stroke-width: 3.5; pointer-events: none; }
        .circle-stroke-c { fill: none; stroke: var(--color-c); stroke-width: 3.5; pointer-events: none; }

        .circle-label {
            font-weight: 800;
            font-size: 1.15rem;
            pointer-events: none;
        }

        .element-text {
            font-size: 0.85rem;
            fill: #1e293b;
            font-weight: 800;
            pointer-events: none;
            text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
        }

        .inspector-card {
            background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
            border: 2px solid #86efac;
            border-left: 8px solid var(--accent-green);
            border-radius: 16px;
            padding: 18px 22px;
            margin-top: 20px;
            transition: all 0.3s ease;
        }

        .inspector-card.locked-card {
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
            border-color: #fcd34d;
            border-left-color: var(--accent-amber);
        }

        .inspector-card h4 {
            color: #14532d;
            font-size: 1rem;
            font-weight: 800;
            margin-bottom: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .inspector-card.locked-card h4 {
            color: #78350f;
        }

        .inspector-card p {
            color: #166534;
            font-size: 0.9rem;
            line-height: 1.5;
            font-weight: 500;
        }

        .inspector-card.locked-card p {
            color: #92400e;
        }

        .region-tag {
            background: #bbf7d0;
            color: #14532d;
            font-size: 0.75rem;
            padding: 4px 10px;
            border-radius: 20px;
            font-family: monospace;
            font-weight: 800;
        }

        .locked-card .region-tag {
            background: #fde68a;
            color: #78350f;
        }

        .results-grid {
            display: grid;
            grid-template-columns: 1fr 180px;
            gap: 16px;
            margin-top: 20px;
        }

        .result-box {
            background: #f8fafc;
            border: 2px solid #e2e8f0;
            border-radius: 16px;
            padding: 16px;
        }

        .result-title {
            font-size: 0.75rem;
            font-weight: 800;
            color: var(--highlight);
            margin-bottom: 6px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .result-value {
            font-size: 1.25rem;
            font-weight: 800;
            color: var(--text-dark);
            word-break: break-all;
        }
    </style>
</head>
<body>

    <header>
        <div>
            <h1>Set Theory Visualizer</h1>
            <div class="subtitle">Interactive Venn Diagrams & Standard Set Operations</div>
        </div>
        <div class="badge">PRO SIMULATOR</div>
    </header>

    <div class="container">
        <!-- Controls Panel -->
        <div class="panel">
            <div class="panel-header">Configuration</div>

            <div class="mode-toggle">
                <button id="btn-2sets" onclick="setSetCount(2)">2 Sets (A, B)</button>
                <button id="btn-3sets" class="active" onclick="setSetCount(3)">3 Sets (A, B, C)</button>
            </div>

            <div class="form-group">
                <label for="preset-select">Presets & Scenarios</label>
                <select id="preset-select" onchange="applyPreset(this.value)">
                    <option value="custom">Custom Input</option>
                    <option value="intersecting" selected>Standard Overlapping Sets</option>
                    <option value="disjoint">Disjoint Sets (No Overlap)</option>
                    <option value="subset">Subset (A âŠ† B)</option>
                </select>
            </div>

            <div class="form-group">
                <label>Universal Set (U)</label>
                <input type="text" id="input-U" value="1, 2, 3, 4, 5, 6, 7, 8, 9, 10" oninput="updateSimulation()">
            </div>

            <div class="form-group">
                <label><span class="dot-a"></span> Set A</label>
                <input type="text" id="input-A" value="1, 2, 3, 4, 5" oninput="updateSimulation()">
            </div>

            <div class="form-group">
                <label><span class="dot-b"></span> Set B</label>
                <input type="text" id="input-B" value="4, 5, 6, 7" oninput="updateSimulation()">
            </div>

            <div class="form-group" id="group-C">
                <label><span class="dot-c"></span> Set C</label>
                <input type="text" id="input-C" value="5, 6, 8, 9" oninput="updateSimulation()">
            </div>

            <button class="btn-random" onclick="generateRandomSets()">
                âœ¨ Generate Random Sets
            </button>

            <div class="panel-header" style="margin-top: 24px;">Set Operations</div>

            <div class="btn-group" id="op-buttons-2" style="display: none;">
                <button onclick="setOperation('A_UNION_B')" id="op-A_UNION_B">A âˆª B</button>
                <button onclick="setOperation('A_INTER_B')" id="op-A_INTER_B">A âˆ© B</button>
                <button onclick="setOperation('A_DIFF_B')" id="op-A_DIFF_B">A - B</button>
                <button onclick="setOperation('B_DIFF_A')" id="op-B_DIFF_A">B - A</button>
                <button onclick="setOperation('A_COMP')" id="op-A_COMP">A' (Aá¶œ)</button>
                <button onclick="setOperation('B_COMP')" id="op-B_COMP">B' (Bá¶œ)</button>
                <button onclick="setOperation('NONE')" id="op-NONE">Clear</button>
            </div>

            <div class="btn-group" id="op-buttons-3">
                <button onclick="setOperation('ABC_UNION')" id="op-ABC_UNION" class="active">A âˆª B âˆª C</button>
                <button onclick="setOperation('ABC_INTER')" id="op-ABC_INTER">A âˆ© B âˆ© C</button>
                <button onclick="setOperation('A_ONLY')" id="op-A_ONLY">A - (B âˆª C)</button>
                <button onclick="setOperation('NONE')" id="op-NONE-3">Clear</button>
            </div>
        </div>

        <!-- Visualization Panel -->
        <div class="panel">
            <div class="panel-header">
                Interactive Canvas
                <span style="font-size: 0.8rem; font-weight: 600; color: #64748b;">Hover or click regions to inspect</span>
            </div>

            <div class="venn-container">
                <svg id="venn-svg" viewBox="0 0 600 420">
                    <defs>
                        <!-- Radiant Active Region Gradient -->
                        <linearGradient id="activeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#6366f1" />
                            <stop offset="100%" stop-color="#a855f7" />
                        </linearGradient>

                        <!-- 2-Set Geometry -->
                        <circle id="c2A" cx="230" cy="210" r="120" />
                        <circle id="c2B" cx="370" cy="210" r="120" />

                        <!-- 3-Set Geometry (r=90) -->
                        <circle id="c3A" cx="260" cy="180" r="90" />
                        <circle id="c3B" cx="340" cy="180" r="90" />
                        <circle id="c3C" cx="300" cy="240" r="90" />

                        <!-- Clip Paths -->
                        <clipPath id="clipA"><use href="#c3A" /></clipPath>
                        <clipPath id="clipB"><use href="#c3B" /></clipPath>
                        <clipPath id="clipC"><use href="#c3C" /></clipPath>

                        <!-- Outer Subtraction Masks -->
                        <mask id="maskNotA"><rect width="600" height="420" fill="white"/><use href="#c3A" fill="black"/></mask>
                        <mask id="maskNotB"><rect width="600" height="420" fill="white"/><use href="#c3B" fill="black"/></mask>
                        <mask id="maskNotC"><rect width="600" height="420" fill="white"/><use href="#c3C" fill="black"/></mask>
                        
                        <mask id="maskNotBC">
                            <rect width="600" height="420" fill="white"/>
                            <use href="#c3B" fill="black"/>
                            <use href="#c3C" fill="black"/>
                        </mask>
                        <mask id="maskNotAC">
                            <rect width="600" height="420" fill="white"/>
                            <use href="#c3A" fill="black"/>
                            <use href="#c3C" fill="black"/>
                        </mask>
                        <mask id="maskNotAB">
                            <rect width="600" height="420" fill="white"/>
                            <use href="#c3A" fill="black"/>
                            <use href="#c3B" fill="black"/>
                        </mask>
                        <mask id="maskNotABC">
                            <rect width="600" height="420" fill="white"/>
                            <use href="#c3A" fill="black"/>
                            <use href="#c3B" fill="black"/>
                            <use href="#c3C" fill="black"/>
                        </mask>
                    </defs>

                    <g id="regions-layer"></g>
                </svg>
            </div>

            <!-- Inspector Card -->
            <div class="inspector-card" id="region-inspector">
                <h4 id="inspector-title">
                    <span>Region Inspector</span>
                    <span class="region-tag" id="inspector-tag">Hover or Click Region</span>
                </h4>
                <p id="inspector-desc">Move your cursor or click on any isolated region above to view its set notation and element composition.</p>
            </div>

            <div class="results-gxœì½]sãH’ ø^¿"Š]“"+	ŠII©”ÔC}äÇt~è$eU×f–u‚$D¢“$Ø ˜'[f³mvgûx¶7vû¸f÷¶÷46g÷Üû>÷úìO8w € SYÓ¶´*%	Dxxxxx¸{x„Þ°rôK}†ÞG6˜8axX	Üp1‰¬¾k(˜S8ò¢‰[9ê"ï£Ë^ÏÝÀ‰<Æ.èõÁ6Ô(ë£3Y¸æã'¡UŽ>±»8âñ—êÔ‰½™3ñ¢%û#ïÐ?·Gƒfå¨YÜ¯‚GÊO•á ðæQRnâFlê]vÈÚµ§ƒE¸³èõ^mõŽO~÷æÕó×¯¶Œ….ÜŒi%?Ýé&þàƒ;äïã.¡Äl1™<N†d õ"P—näÈA8ZçüÙdÙÛgŸ~ŸU.t½†Ç•:›ùñ<ï1‹Ã£¡àçÙÄz!so“EˆùŒ*7*ì®žiä8ÝÈ±¡‘ch¤W¦‘ãl#=­…ç³ÈBw@3¢ÇîZwþòŸþ›±C:…:ÐP9³¡©)…ÞÐUÛ;»…ö<?`of€&´¬7WÅöþov\Û2´èÍØ	3¿Ñì°µËŽ[õ˜Z?©%_ùskâ^GÌ	\G§ï‰&nî8fZÍHÑçt«74k"7€?É4{bhö$iöXiöØ"šßæ‰‰›ÚÅìdh½*˜ªXœè¸€ùÀgÎúntãº³üÁî7oê¼hþ¤¦ÏÔ—Þ´¹qCß?Îkü8i¼§7Î<Ýúq^ë½TóW VaŒT,ŒS™·Ÿ4}¹œNÝ(ðLŸKBŽ†¬¿d½:;®ç¡!æc{ƒI.Ø>oªóºÎ„Á«L|g2aâÇ±‰‘¹SDúõbÆ‡aî@ë0ªÞl¾ˆžk)±.d¿sèØzcäF‘ãåóa\µAKåc­¾wÍªßBõpZ­Õ€xÑ"˜±·?ëåÄã^8ËÆuàO«3÷%t+‡sXl«[õ­ZcêÌ«°Š±P‚l\{ §|:qg£hÌŽX³V«%Ü:?rg¨ë¸0tþ«éþçõykÊ€‹ÚÍXiKô×áÁ"±õØ@ÆÅ¥÷Xæ¥×ßªô5 ö¡íïÙN=d{ÆÊr¸Ï}@R}â}ÞçÜÕYõwuæÕ€kÕc =_ô‘ƒY•ªèHÊüÅ,*Æ¾Ê{h±vûÑ~œ*/®¯'0yÙÛF£¡uíçFèQ•ãÒltšÖL-T0„Ú'ÞÀ­6ëåš èÔYŸ€: ²Ÿs—"Qî¸³[o”×°oüÞ÷fÀ©l+ÕÀ
€=`j`ªµMo§,×7AãLOˆÍžlÔìök1-Ó½ô¦‹	IÅêŠ©°aþžàxWgiœ…ö<ÓÌÓ{Kõ´Í,¡¯d/¼ðÂ¨ù£ÑÄ­n9dJA'gDD»ì°!ÔvY¨í²PG¿˜Ó¨„Ñrâ6†ÈS‡:Ì±_³­>’c‹í³­™?s·J‚¤¿ hZv.|áoø9àÛÅèWÍ$£7—~wLõLæÓ*FLÞ?Ÿ…sXüàÍó*rÑjnÍìª?Ï,º
ÂþÜ´ÀßÈñ`õ‚ñ\¥^i#‚Óh˜C÷?,Ü`yIK™ô&“ê»÷¿z÷Ý§¸•;ÆA¼{«­œ9ƒqx…)ü£°jàNA?‹Y5-¬9òüå1ÖÏúwïo@ÁŸßA£YÃ¨%à<œá0A¢ü€šÆjâkâr1qË‡êwYgîG@5=pˆ™xAÿ ÇúóóÀŸ;##ódEP5ó¬ÁØ"cÁˆÂ¯U,ˆÒúÕlè—?<­êþ€:JhîùyêõUì— b­RTª<C•œÚ4#Õ© ®×æ:Fõ6g“nÛâ*½åIhi¦ápH}/Cà(3TæË‚Á²9Ø8£Ò¸8£-³Èçç½4ëýñœ×²
}RÊ|«{†ÞÆ/6é|,"ƒ·NÎµtñC½mx3FWî-ê¡â;VMKÆ¯ªòaÓ¥\u+œ;³ýk/#k0ö&ÐªžÃc1‡ óÔ«½¬ØÒ_(ÆAóD„  sfKæ…>HP~…éô}îDøèÉãq‡Ú¸4É¬tù°¢Kiî‡>oÐ1M­;Ó¨{³kpÍ8»¹Òô<L¹•zÈiËNÖô‘`;DÛ»÷ŸHûøe¢$Þ1X pûËú_Yõl:–hÖ¶|™‘5%ØVŠµyïÝ{À©ØãtÇÞþÿúÏÿ™½ P?¿{Ÿèxè~Ñù ¡SÈ›M‚OUSZ„2	ž]½|¡‘_Þôƒ#ú?Œ6b¤ÇV`YxÑr¬¼G+GªoƒáþÁ6¯qÄ9YñôëÚ™z¨<õg>¼¸=¿qqÛg}2¨ÄUØƒ; 0ŽÔ‘1­+Î|>Yž“u_–s×´¨ásZ™¥µo^Öô¢^ìxš4^ß¬RmÎJ«Îì:k×Y§Îºu¶Sg»u¶Wgê¬Õ4Iªòæ§{}XªÕYIÐ[jGV8ìaÅ8³tZƒ€"$úBt¾ßi?“®†î)’ýþuÒóˆYÄóŸç™ÈÑ¯StÄ¸±R µO‡Í/c›"¼ñ¢Á˜UcûÑT?ÆW1€÷3mËý¼(X¸u¹ïÆôÄ7v÷˜õ×ù¥¼ÚÆóWWgæ6Ö„túüÉ“•È–‚uÌaõò`­‡×Éë—ç+ Õ“­¾5,Ü[ðiŽ>Ån“<<Ûi¿NÚ	O%_“§Çjù½Ü  ZÄxf¶[Öï^¿zñÓªþ•§¼ißC]ÆìUÅÑä}Æ{;‰ 6©æ=CÑž¹è±¡è±¹è‰¡èIÆ]-Ó²áÆ¡S¢'7ƒnÑ7õí1h¥ƒÉ”Ðêm=xÀÞ¨jõ\P0muP½M@¡€ÓQÚ#9Åß¬ÀIïp-Ë‰e’5ˆÞ^MõoO6‡öêØ:Š“µHZ~à3d¹'ªxÔ!gàl†3IÅã7œY¤3(n6ŠñæúzS#KÿÕ“ÅäHI-	9º^Êéëb0F’]Ò®kÚa¢ýxÝÿ=XŒî2¬ª%~øè»3íÚ¢lU«¼ý€èxÊ}ó!ÇS‡Ïø{ú>p¢ª	ÎÊÕ/½ä;¦µî–ÝžM‚SÞ‹{“ã)y[Êó´*J´à
”Êx´²^ït‘bõ!!w¡sŽó\ÙjZá?­‰³t3Îs²m¢)úª·Ln»
 w™c¤Pü«¬Ýl²VËnììîÒ²›ô?ü…ÿñU»¹ÛhÛÚ+|©ÔúcQiæ¸°	ËÐŒÄ`u3½Û0t%Óû!ºá`v{Xi5+lÉÿ¹ñ†Ñø°ÒÝƒïcr–V:Mø`¹NEÆ¿:‘?õ–ðRÃ$‰¥!Cø~£ØgÃ©²u‡M{X[¢ÎVâD
¬Åä ?¬d÷ÚâjrÇKOýEèR,–^…oDÅU’²×ùèšÊÒ^m…m¥ýµ)2F8c<v—ÈØÞ‹©Ä#­€ñûî¤Â`šV~µÓÙíìõ+GIˆŠÐê›ÚÁ6B¢ÖŠš›;  †‡ %gü»R£BSd­1ÁkUZg<¨Â=ŽFš<Ç¥És¼6yŽ7!Ïñºä9þRäé•£Mo=ÂôÖ¦Jo-’ôÖ§GAøeœÀmt˜Â6ŠBh¤jz.ãžÃ×rJZÜÞ-¹_i)rZ!º[pšÐùèUËø?°œZåˆâ¸yS¢©Nký¦ú¢©ãõšjíñ¦ìV7nJìþYX¦Âð¯åÌch9õ†C<Î	zïÔ‘ÚG(Õ.üjwkvØþX¯‹E»yÏXôÖF¡ÛëZÓŒAQ—ùjsÕ¼êsÞZ—ïuà±Æ'Ø>†ÂP<˜6ïÞçK.nÔ¬!»Ð\J‹.‘Ä¶õG‘"BÁ»uäœ¬RZØ…Æö6{-2^ã¾Â©B—Á¤ú+üúÊÀ¢¯Åœ‚öZ¬zµaø+´¡ÿQ{öu(Z@¯³øð†07‹p‚aaãÀ½†öíž‰yÔ ÿ˜Fùd5%´Vƒßêq¦ÕãZ=1}n«'™VO”VMãpîxÁê§2
c„Á4suþîÁ*TÜ3ÆJPÔLÐžNÍ^9R¦4ÓLËžNÈÞI¹±Û­T*ÌÔ;^›zfÎ0væXïÌñgv˜ÆpçqÌæä2ÌÄX©.I<0:úž ææå©5X<&ÞÌYõÂz\{5³þÐ…zG¨½¤ÑÁ2÷è¾ôéNYÀý57¥¢ÞYx«§#9Ä¸J¬xIjžÁ.¸oE¾½³~S*òRymw»¥›ÔrTZ:Ž¹béa™B]‡þBÙoíä(¹™íµµý½/€ÆñúhH£ãÑ=š>'£ÑêÞ5zë“ÂÖmß—ýµî‡ãÍÇ‚ÕýŒÅúH|¾%Ú.4EÕæ³[z|§C‹eE‹÷TRè8APgsXø½[Úñ0~…0Xþ‘ûQhœ6ãó±¸é”Úhoä‡lëÛ‚D²i…ÏÙÝ–á¼ÈµƒmyåÄÁvß.ñ_ìõÑ{¾éê…'åú|:÷ƒHDäÐg+œMo²Ï*³áböû–Ýþû>hüiE-öÊ™âÙçÞ­çOÙIà:SÏð—;ìpà>{ÇjîY­Ý
¼£ÃÔœ~ÞÞ†ÞÔŠÆ.¨/‘7p&Ö<ðûNßÃÝ5\o¼øÈwR’'%qÑ`ÕKgŠjä%Æ‡uöƒ;›± \º.;õœQàLÃš„çŒPC’gØ¹£µAOpF.Sp`€ƒ`Ï–`VÃ¨ÚÖÐ¸Û òCµAg8ôøÆÜb‚1ÚÆ'òì6_2AÛúP7Bì†;ÜÐ sü€Ç.üñò5º/Ü.Ñ[<G?ÄNÃö'¬ºcíáõÜ¯Ž>²Z6=í³möü˜]^½¬üÌÁZ³¡C„vrryÙxÙ»zÖx_NÎ½F+žÛÆçÇ]|þêéå%»<;·:²ŒGžäâÏnç¨±â”:8Ë`<.ÐF þzÿ­<e¼ˆ¢€wáM†úhàf6Ã±ÂSÃ^Û†r@ðñCz
<Ý÷ÃÇÌÅÀQ`Y>ˆb@èÜFàòÉŽ½yHµQÖ“ÃüÂ¹açñÍ àNÚó*Ýöp_ýð˜ê’*X")4. ÔSl2œ›3 BÁ/ ·ùzK;¸‚;&®Ì¼ÙˆÇ •p\…Ä¨œº@¼)0–F,âïYõßþ[ãèL(Q\mHÈ¦ŒD>¯ža—gøÏ¶€€Ø‡€ @ç!³À#/·sà$Q+2ö£ÒÃØ| 0o˜­MïR#b8þÂÇ@áháL ~r³ž®—NÌ¡ï•‚ÐI‰ñÁvœñ—XfëÀIÐGx³¡;ÇÍy aÿâm²jÑpÖ4” áH›æŒçŠœ)H™Pq08PÆÕ»öÀ¼¦iBî-|ÞÔ™ˆ9 £×_àªPSb¢FãÅ´?yÿäŒ%`º"Ù`µñ¼Ól²žc–ÎŒ~D¾=õF>þH÷áÈ%›êöG¼f·ÙÜn5¹ÆA:PdëÐ’¶áÁDëË9GT¼À3¶³Ñ>ë6šâ‹Ç¬è ø>ëØ¢®3»xÚÚÙ“æý,t¯–sZ¸ H§Þ€Ä!#>ð?à1XqH=àü¼–@`xÂ@*œÙ¯x‹ÐØ#9r!‰ßSwîÑ”	Š˜|‰Œ
¢7³‰7õ`­ä›Mz)î¹†%thóW_¬.‰7ôƒ×ÿfŸ©ë{xC¹&ÉÕ<1¬¨¬-Ž	Ë]ªÒ_Œ!%ê)ƒUÛ;©sÛkuxæâå/(O«-[}ƒíµéðû^ò&iêt9sp4¹K3C•ôÂÚ' ²¢ëüÎ'ÞPê.q“l¨mGsŽÔcw1Ìê…;¬³ã	'?²ÌjáÏöb†^$3”…©6û“Ö^Ð=BÜ¯¥N\ 2_ '\&óô‰˜§uÖ±Ä¦v†P´®ÌRÞÇ0rçViá¿¤§‚ æaÊCÿf¦Md`;˜@@’S÷Ú4C…e °ªDv`Bà²w;¯t—k‰*ÆðA@E?AF•:ñÏÉ¤/èÂ*'š3iƒ1)|V+nVÑõn|‹¸íÅbð#µ@l*Å<!¨¹Bñ|Æ8G·XU0)v
X_èB—èöÌ=ð›±K-¦Ìý¬!ÛÍ®~¹JIõV¢m˜‡¬µ½Sk¨p‚‘½¤+†P~%Õ2…~@9ŽçåZ;;»ÊK¬?Ð«f³•¼1uTï7îÀ#V¿ƒ^ì*À÷4ºcÃP‚¨¡.§/`Ÿ "ŠÇ×åŒmU¬hºÐê²ë¤V‘h¦Põv·.~aU§i˜Ì@ãnDDà]ã¢ëDºFÐlÀÚÓåW˜fÑX¼™!¸R#²óÃ±˜©Â =$¹$Í`’LçXºäh´£‘‘èqµz`Ú¨(Ï®½,:Ì!9I°ÃH2v„lÄÁ±¹„ÚiØ )LQ‘ojœ‹.>qV]\0Ši¡YÔAµà{ÖÞ~„ãlo?jÂ¿öv«[4§±6UnzµÛíÜñ´WŽ'Šúß—;¤ê:
äÄ;¨F°ÀÇƒªÉe®±<©¯®íWÒÔag&4ð30ß‰ˆtÛ¾ºv>‚‰Šf‚\_¹FcA"ÌGëjZ®¿æÒ4Æ‰÷Á,Õ:¨¾£¥4Öíƒ†¢¯>F¿Ž$ð"µ½^Noo°ÇîLjÅââ;¼’Ï À×U}'~‚ð±ª²+æ†I¿®örA ¼ñ'•&[–?RHŽwZ%O¸ÐÐÙÊ?,p¸Èrkh³>‹¦0}TÏúgÞèuÙc‡N¸]ài`•JR—a®®|{úúäê§ó3z~ônv@~¹‰3¾«¸³wz:ü‹Õ`wØ`ŒÇ{"(òæê‰µG¥’· ¦¹ð
Y½Fï*ä^ƒá!8_\‹~Ô‘€&€u¨»‡­F3Grë¨À—s°Í‹ˆòÜsÀÂ` m£hîoo†³FfÊ˜ƒ0Dï´»¾dU<`.~àÝaì·Á¼Ei6ävö>ûUÓnî´v3ùûzïÚ¹ˆ3èòlz¸„•sj-¼:³Ðt-þÖ4gZ!®PQ,Ž<­ÍÇì.iºWY»·»Ð¾¸òhŸá³ÇôŒ à3ˆÑb:Ù ü
6@u·ÎÀfŸ:·xZë:¨Õ †ÜÓ™ßZ¶½f¼6vŒm€aHí|¹®ÜÉÄÂ+‰ŒƒÕríGíþca?‚&;¿e¡š<ûU»Ýiu»É8úÃ®Û’E­€vDE¿æè­C[~1Ÿp‡øÄÁðñÛ!‹k?öÙÜ÷øƒŒ³¸(pŸáýTfÔ¼¨ø¦>£¾Sí€îc·@%j=jÕAœÙµQ‰¿=vú×Iº.ÌÛŽénø{k…c°ÀÄÀò=è•l[ÁFšvMG7rú‚Ð9ZDjýC@ãvü@6&{†°{X*;.°&Î@„âêj ¨ìÜ£ŽÓîï=VÈµ¯×4 Þ6â'–&ÙJÆ)‹4P¿Iªƒ„j&=ÖÙK%žm&^¦ãkŽÞz\•Ã•X(4£i^,dºeô×!$jSÖµÅOå:Ä\'ts`ìéÒ Š‚ûD[Ó8ÊíŽÛq3¾í¯p„ ×ðuá`[,ƒ´2ðªwè´
I€=ê
—ÿ	æ
0kËiÀ×÷–þ @;À%Ïl‡´Ú‰Ö°	70 O<`}ù…¿Ùƒ7ó[«ÃæK«/œ,¹Ðü]©uKÊ„Mo-g:Y‚ÏMàÌÙïa6“%ïÖõ@2‡òÎa¼VGži€Ài•H²nSX+­=vÿ«¹Ck2bª3Ð–×¼€xÓn²lÃ²+â§îG$¾D!ÈŸßNŒØáçÜ€4]Önx>nÅ}`Õ†˜F ¬ˆn1Ö™š/ToÆ­4Õ©§3'5’ü-¦±èH2–:]c–2¿	ïÃ‡n‚H%ý¹õ®’ô],\€ ái1x¶9´ÒíØÙvâì}¹‡§YáÚ´iïëNÐàÛ0ÙñQ›Ã»>ùÍž ˜"7TÍr3Î=›¥|ã$ÊöSsÄä0ÏøÍÛ$.Ú(.Z®:ã8_N9ãN]X¦F6x·îµ‡ðw0Üa/Ü0„n½¢n¤è!:}¸8uƒDöIÎ†ÂÏnt×B·…TY8ÝÉÊ=ºJ›ï$ûbŽŽX¼="žö7è6æ€ß¢
ðs"8sE È+ª-Ï„TÌê;Ÿ@ñ*«&8ØRÆÅ#xt^¢ã…œ*‰µ›¸eC¼¨NZ¸¨“†h´÷]0M¼ôAƒ–ŒâÔñf7ƒ¼I¨c]ãM–r`UaÓáþÜÚ!k€	«dB¥Éh?ùÙ¦ÑÙÑ†BA)Í:PªYˆ9Ÿ;iFÊ²‘œ6`9·º©å:½:rÝ(_ãßvmØ«L9š#ÿ©‰½Öš]½p®»ˆÛlÚ7¬ä*ìœWôzlë,R#µžªëšAæí"ðóÔ"2}r!Ì4óMVqËb†…i»Ÿ{Ãpg
¸yž×õœ¥ÝLò,asiš»£Ö“ÃÔ¨$
¶×*lÚTWRíqÓFá¸ØJ‰Wk’ìø{Ý·Å^Á
ºª1n÷Lµô~¸ð×}ôHÙ!Ü¸irk´+›Û%Ú)bŽ¸º‹ýÈÈÖb5O	ñ˜Mör¤ÖnSYÊ%‘¼‡¶Wt*W‘Íy^BIáU¤Š“ â³m˜x"§XD|žBL¹–Ðâ2ŠUÏŸùr¢“¯|?së”ÌVÕÐ±7
ËnCÑ](°AQ­íÒáÍ…Ëtr»7Ä®Ò~efÕÅ‰;Ž®Â’z„Ü¦Â»`nÚ•¹‰.4MŒŒhd 2“Ž‡¥}tåÌ³wŠg^øqD÷û·Ð
z‘v§Y0÷Æ¤Ï¯âøá»
èél)þåûï*íG^A|‡gµßÑ!Äw•$xW®wxÀý5øˆ{qãG–„Õ¶‹ÐQÇP°)ð¡6eKüx!>®¹—Ä³…%´xU×©¾[4ÛmRå^ËPŠœ“^!V¥ef‰ã’žˆÑ¥QX.Øé ¾íª#ƒøó˜+aÊ-øˆæ¢P¬RyXõ%Vv9¬æ‹ ÷At¼ÄÃÍ0£1$¼èÀ	ÞýC´"Rµå¸¶´µíaÛuÓÛÉXõÎz˜ô&ö®“As¯s=(‹‰{s»ãBìÀDû8ú<!c00t“"*P3â—8ˆÂþ Y	ö;—–R©™ãÈH;çG›¿Qí±wÛ¶v\[¥1¥“>aš¬Úr‘Yñ&ØlC7BÐSâs¾(žZ P<òŠG~sMPõ~yM°`†Ý«&¨F©ÎhÕõyú ÏÛ€9’P»hŒû’šˆA÷ öõè‰/ 	jŽß_NDªþrš v €­ØýVÀU¨rç8n Á/ ®vwš¬m›ÔBP4o¬· ™ÑÙë†«–¢âžg}ÍÕ^ãûsöñ=•eÊ‰Ÿ<Q1¯VÖã'™m¼ƒq;åÞžùÐz4u‹=ÍéÀy“çœK•3rqÇy¤(n˜äí<ÉE]ÑÞi·RÆ‘NG®½Â[¦ÍQ™hq1ÝÕšM¶>ùâ-e¹È™©9œÞ¹U:†ÙOQß‚ß‡lwu0éD«ùõ×Æ.(ôeè/0˜ó+éÍ)Ç†U[^åZE£±–®'z5vÂ¯¤K½Og…óg.ÛÚÙZSÉ›§¬P[îÊâÞž…~÷¯„ Ï ö€¡¨CóÜ„Ö(j%ºt Cè-3¹³A§°Êq¨¾–©Üå†JúL6èÓ÷…Ù¿’>#>4PUžf¤»®9bžÎé]Ž/:—Cû+¡æžOsÔ&>Ù„?¨;­¯¤;± ß¼?0‡§N4-=‚)üÒ¡<"Ïž=Û¾ººÚd-†ŽD8P_I§ÎfCq¦š¤Sõ{ö={vß^…”©`ØhúZ,ôÇÁ#E†BÚÖ1ÇÊâewÐ9†Ó~™Íñlt§¢gøy3ÿš{èÌa:fèÜUDgF­@ZGõ‡ë{•1SBƒíîÊ6VnGSÎl3zÁ“À™pq+yüæ I¿ƒ_é¸8î…t³f½3@?BB¨1Ei³1™Sù½"Ðâ¯ÊÉnDôË±A§ù%Ø ¿&˜6ý(¤úd=^8fƒÔÁqé`þ,±P’!Z_F.”à’’#Zù‚!¦ÙýòÃ=¬¥Wý×²–ÊËŽ;Q.xÀ^úC÷odmuðD©a:]¸CPédðçL¡À–ª_b
ñÖWÌ¡–&Us§'T÷oS¦ŠÛ_²l€ÇÅïƒú ç¯È¢ùûáA¬¿QVp§nàL†^à×Ü3ŒP9n°¿7Èö×a;—$Á¾?ämà—›Eyôö*Ìž¤7ïúc¸¥n2¿3AÑæÈô=Q€!Þ*¡^)Q&¾×„º¿ˆîû²A†;1î1–·@o2†§¯Ú@¥ýÓ+VAÆÌÞº1¡èüÚ`ò¾¡™ðš.JM©³JSJqv[p67ÿi‹¼8y­=f„\bZf€«ç„ÚtuI™Ð	 Ë{¡VJ©X?æ—KYòâ·ÌQ"y
Åej¨bÕvYM:sÕdÛ¬½S(_ÊÊž¯²§ü–­µ	+nçúLº6šðù›¤«¸©omºŠKÎ>›®·	UWïÍˆkÖ¬øšµÕQE	ÞêmwµáÈ²íóI]üœW)°ƒ.¿¡	z7ü7žñ‹‹$½§³¬Þ0ü¹ý{}ðfèÙojÇ‘·wA!ƒ<uXãÀ¡¤6
\¼G;ÿÁ¡$káí’sU#RšÒáé¦£¤“ì®<Ž‡J-³‘í+Žƒ¥uåB@Ç|Ê#ã(ÚË=’kðdtÁÄ³‘SlšA‚ZµwÑ+UxÎ7C°ØñÂ3¢m8zžc¬¨Z…îšI+„­;vhZÃ©{M÷áª¹ZsHÙ[91•i=\•èäôu¸—µ¢¹x¯Ô°ê-œb£\økPb&K 9v|ow™M÷»ÅŽýb´i7ôëšõ[Êþ:Œ¢°¯FS‚œ!*uâfXî¹¤È`ýnã¿¥NZ’'6§ÕI«&Y
~Øìž”¡“~ÈÖ¢dÁÓîÃOœÙiÑ}á…‘;sƒê»Êéë—âºµ¾C¡¿õ8}@µÆ>éx`¾dq³ Á†yð8[„,}IÉ“Ù`n=N… ò$v¼à¥¼]
$Ž{ƒ[XÕZTûÔ‰(ø‰ß¸G˜êüÌ^oŸnà¤ïÇûtÿ&?Zð‚Ÿ#æIZöÙñØbwy-µã–w(oe®3ô¢%¿È‹"~ÚuóU³òæVwxîDchùâ‚7«7'm†UªQÓ”Y¡Ï~MûÐöwøjŸ9Ú=BžöAš]ÕÙbZgC¼øS–é1çÃÃFµ$ïQ'ûîTº{ÿ8[‰ÞóÊV1üÜ’xñ)6²ÍFPÓuƒâ?3BhˆyÐ+³ÏÞ÷ivÇ±Êàt—KLžY‚Ûà1¢uyápñ{+Œ”	±ÝÀ—§e¯ò~`w‘ÿ•¼jÇã]…Dï*¹d˜"–Œ}ÏèÊW	³…rô]åï¨ïûïŒsŸ§lèT†w¤æbzW8Ê«@+2žn KXN)X@°u`eì	N$LyÏ´@‘»ƒ~ptÐ7oªbI|«õ>“Y]²óé”Ë£µ(—½&%Õc^ 4{‡ qã+§_%™õj15³².³eYæo1F¹ÎÚ?7 ÓgÎ`\õ0¿¨&ÁåRG=§ÇïùçwŸ¼»÷&ù@AIm˜– ‹/T*„¢1d jð'2RV-ë‘Ì*õ6ˆûp1nîLºê7ñ¶ò0Š»¸yÕH©
ú@uKä¦-ª'óâ–ïAÞ 3ëÔ‹D(Óó+Ãã»Zf‘Æ±…dqÕ"©3b±1á©jkUI¹)W±­Ul+fÄf¨túŒŸ¨‘J`ê^¬\Ñ•Ü¨"+£InÑ7[uV¥|Ä‰\jÕÒh­nÁ^«{ƒÚkµÐ®e9Ahäõ)5[ªw(Ã—ˆtI­#Kæ â—¶‘g“C×r$7GF™=¼^áÄ“-—¯•V¬s»–¾n®ph”.–õ”iSø1	J×ÎÌ¾Ë«ÞÓ3¼oðéÅóSöôìÕÙEïêõEÎâN×Cq™‚×SeÍ±däië¨€}ô[jŒ#LÉß°œ4eðµ¦QmmJéVpŒëÕ²TX‹‡Ò^Ì]=	bBÌª(ˆ+xð:ê´_Õ	ç€‚þa—°.à)VHü`¦ÏmžN¶
ˆ~Ì]ixå¢+OÀ}¨Ý¦î”^µë©^åWÐÅ N'(TÏw•ÓÖ;øœÚ¹µˆøÎ3œŒ9«Œylñƒ÷ÈWÑ¤’Ïì1þ{pÈvðËÃ‡…*„ñ†ôÇÏø^ÈßY“ü¹Äã(i¦’]P4Cëq^_3ë|–ú-Aý–¤~«õƒÏ!ðÒ?H@Ú{U8 Á8ŸÑur¯Íì	ÉñrÀ¢óÍŒÕ:5@iÐ’ðž.q#¿u‡m£¥Ÿ©ªœ¼¾´I³ªÅMÞ\j½N­sÏ%yZéæêØ›‹—‹ÓëþÜxÑr¿ÙØy–xxˆµÆUK¡¿Jµ[1‡Fãƒ»ä~ƒ¸«ÚÇO²ªÅ‹àØ	« ¬VK¯ŽCø¹ô®d²ÃRÐf*Y=ÀT3*ñyz£¹‘þ”4oÔÏÝªÙµFîž7N'³rÁO¯¯`Ä™"J\ì÷?õ
M¯À­<Ò,ðÔëý«BØJYû7ªWPXßÊÅûS“§¼äëko·žarç«­Ä_Hs¤XÆ~ÊErbÍ1È×Ž^ê pb ày¶Å~]g¸ÅöbŽ71ÙN¹cS^ùXo:$ãqOš‡¾n"îV1"ÕK4´XÔ ó9úŠH:±‘Ò¢o6‹ŽÑ/«ˆ|åÊÈtïCú„©N±<Oeà	¬>__ðfòÂ	€"÷	ÝgÏ®èŸ+þëŠ~]ñwWüÝwï~Îm#®ÈpÔ—JÈðÏ—ª¥Â'=6^8ëWÌøNáŒË??0{È¨«º¡ ºýl{Tcü#{ûs­ù^£ñJÄW‹™¸‚Äõ­Ðzd°¾ûÄñ½£óýò×·‡‡­_o…[û[[%DÒ}ˆ£Q„Ê•EôrÅÔÍDeêr)´žZSüŠžµÄŽY¶d•@0OØhä™†vC÷ÐgûôÒB#³Ù›öXÑy’H¾!ój¶=pq"\’I¿³Rù!FNA[“¥€¬aã®ÇÙeÚD¯õÕùÏ³ÂÖSËqOJ{ü’¼Ãu°7³®)Ç0)#e5’CUŠ¢9Vvñ
·ñHÖ(ÞPš–’ü}ÄP‹R4@ÍÄ€ÜuÆ´Ì‡Ì¸Fo{Þ\?hÙP`/>æGy·–´±e³Óç'g[+ZÚ:}~†¡å¯Ÿ¿"+¼M_/M†¸8Hd©óžÖÙûtx|"ŽLHŠÆÕQñ»÷PAä™cÕï>Å½¹«í'Åýë¸|’ÇZrF#ÃÓan„]¯b3¿ñdj-<W4Pà-§n]!!|'›F™ÀÓ•³Õò‚ÉKéo€.«ºÄÅrE äÝs…ÐpŠ#JH+%¹)"©úÁ¥ëÇXáGà³YpW¹ -¹5Â¦Ìø•×úŒUŠ°NGB¬š¹q¦©2@b.‰ˆ„Òñ&Z‚©õÚ‘uÖk‹ÏÉ5Œ1*˜VK^²\	å"äXäJ$CÄHºà*“e•m‚³ª<¤÷0§w3f+r´nÐ0ï£•2Û²4/AÖVóß]0¯Ì¿ºŠk¢ÿÊ”-$Së+ Þ;ýïƒûpBï ÿNLî¯€	I º01è8ãFb5¾¬úÂ[»ŽGšvÝnH‹†„ÏÈTÏ¬R	õ»_ˆ=åÅ×_š8@™n9â\}=Ä‰/ÐþÒÔ§FˆJ’é+â¡øNî/M&ƒ{a¾7o— XŒw‚p¿å@|}žà
ËÄò&M5×úœRä5í,Pïb:~Ñ÷/@ƒîß‘äíá¿™RÎÉ¯—0òò_ŒÆ®Ü¯›Lé,Ç_˜NçÊÆ\–	Y\#ä‚À•ÝÝxqàZì}öÃÙ«W«=Ðâ€[¾ÿÜÏ tŸÏ¢jþ)Zq90*]Mhê’ð=®¯¿žÓ¿¤²Egmâ«‹1áÓvn{Ç ä¥SoÆüŠËP½µXÏP#Gël\1·GÈkPçˆÅÛo‚éõá¹ÓlŽLîehðû°°¡½t9ì¿D9"”ÓÏ°~VÝ`:bmÂ­œ~
Ž	÷Rø¤åôs
Þô4qðl Ö¶àç¶
*78¼:`§™ËjCwt_M“YÚ:˜k‰~s©½(
¼þ"BOâ-ÈOLWañ†¶™mâµRÐûùÐjÐ]•w/r1³F´D¦f¾púß3â$×Œô•[Fœ~¼G¤_6°;¹yEŒ3ƒ¯xZ|=…6á,üV ñÓH œÌ_/øÅ&ùáÔˆ$íÃ 9&.¦b1
ïÓ—ü|÷É¹ÛnÑ¨|÷©Ï¿ZøT|ÇÐ
ýÈÛÏWzÄ7Ç`‰ï6š872Ç&ülã¹”ÑoJ…»ºßeûLie{Zï£“q$Ÿ{;˜,BL|ù<{Ç:=^ÕÑòƒK{£™ßÑã²USó®ØuùQÌÈýõûÅEèÜ›˜Š`¼o›Ó»<­Kè[Ð‹Xx¤o§Ùx·KQ”²Ú/Ý	ò5­Ÿ•Þ{RÔ¦/ÝY¼ÞÀ[!ëRBÔåª§8,±h’ÛyÇçó¶Ÿã”Òß}â îÞoduÎ“Jº” +rÐy[å+ÖAbŸ{´«6ôî”Öì¡¿íîzV_Ð1éF¥ØNBh™PÈ!ÁpÅv–ù®"+«½ÏÚÖÉë¯/ØËÞÅñ‹3vuqvÆNŸ÷ž^ô^®6¾ÚùÆWráYC^v¶Žá`ôR¾¡¡@oO[Ë.ƒJ%á'÷±­Ó ÕR[ØL±çdHÝæ”¦ë¦Æ§Að˜¬B—ÈŸPÕHîehÓu‹xÛ¢Qêè’©½v<³
>_E¿(Mt^þ¸<y…§”1×x5.@U>†ÿŸæ–Â›üuÐ©»sk†nª¢zÛ`a9@zÒóR‚ÖÎÐÅë
A’Ïœ)}öÎ>»@ý$ð?à‹_]w¹Íþ»«¯€vœ@Ã¼*	¸cÜN{gçºUÜÓ¥æHà=UáµšýG{/îça’ùOL=ŸŸ
¼,¸N…îšü8p¢†jîí7Ù€Ò]QÎ³%ææ \h&Eƒ¯½É¾þêQÇi÷÷ÞU¶ó®Çó(!ÙX í5 ;ÝÎæÝŠ¥È< ôàÆÅ+­ñ†T~&æsl#TC‹ï¨»|âä›x»6oÿØ;Í¼ñ@n´ê Ug^‘Eá¾­†hU/·ÌSx”!F ¤îû“`êìUqˆ¢R.ùŒt'ibÎd˜³ºàGa„‡¹œ€Ÿƒ‰7sÙmKòÂ²óÂ­]â×ï>q¿õ~¾ƒg|>Ðs@‡ÿJžc"‹hLo•Žüšmµ)V¶ÕènÝå³a³Öžd-UF¢ùkko¿Ø¿níìwjw	ï¥ðÒ°•Ç€T‰b¿1¾vÞº«årcŒ¨:¡8½Ë,½‘Éˆ]!ÌŸ0ÉòÒ…/Ã|Á‹Ÿ„hk7s„ V°Làc9ó¬ãX§fž]g¿_uZŒ.
¶¥"6°ùÊ™<²ÂÌ&ófŽL÷
Xît¾•‹~HÆR¼¥‘sMvjfÛÊ“Ï1Ž±_¯øbû+¢Z‹q‹Á£üAg¸¤Š¢| B !Q ¿16-™8|Xmqm‰³sèé	þ~ŸÌøÆiVâŽ¢n‹9êž„Z¢K3(v‰¡zªx @Éõ©Õî¸Gg¿²‡ÃNÿ:+Éìw•­€÷À®ý¨Ý× wv»ÝGYÀ Œ¶JôÅP¶§J_º®ë;ˆ¥‚ÇõÞµs=XÕBéõ?£äª[TZp W"àËlDþÿÆNœTí»•éÓ|²$‰Õ§••¦´8µ÷ÔÅ‰‹Â·¿Ï¬Nvñê¤P²ôâãšè?]e•ŠQÁeê÷|™êìÿž/Svf™²ó–©&_‘leE²K¬H1vèî„]{Ïˆˆ$•äèbÂÓ±\m\®¬Ž¿ûOµ»õHÓiîšIÓ¹#¸1cßeižRs6û¸~N½ápâ®^»ë,¡Z)jl
Jä	1ó	\³V3L;àÌ8cñ·[A€>Å OGø·OOúô¤OOFôdDOF£uOÂ¹…çàÄL^}Î->ç~öIñs”nD!ó³-qS°Üà§”wA£Ô
OƒúÉ=Úýy‡î2(üO…RsÎ9a—2í+iÆåðž¶‚e¢sÜPÅ-Ôw•³é<Zb"cÚidSžÃ7¥âáj¼«ä1D®íhT…‹¥%ô,ìñÛ¦é
QÐV¶Š\0çµ»+h6ÆzïÖs¼€%1ytŒŽáÑÓBoÀDÛWÂ¯räMä åËØZy»¨üÐ-¯Ý§´ú“D©?)Òéc”4Už?ÌQäÆŽrbH²|/àäY¸³¤wÀ©ß³W¨Ó75bÉ`8v• Jv+)·§±£¿ÆL\9OháÄu“¾á–fU)mÝm÷éÕ]œ_F>·åsÜýÄÛ"ÿƒ¹©ýÏm*ÓyCÓFr¬JÜ!ÎÔòMJôCbåm‚,‹±ýYF”:K[n·£Ô–d{£ýTîêÿrHoÿz-¬±AgÖýŒ¨Kã’¬ƒuÖÙåHã£ßôåóýn‚«Lí{Ÿè–Lð[¼i™“g`öPºxßríLÂXäKýrÉß2‹(!žìZcÏc6‰1P¶¥7¡m<“‚‘oJa"±{ŒímöÓM:öÂ+f¬¿^uþ^M÷¡¼Š-¦ƒí8)ÝÁvß.éË8šNàK¥þ–ñÂ“EùÓçÓ¹ÈÔiôÆYÀÜÎ¦Ž7Ùg•Ùp1û}Ënÿý4þ´¢{E›•Þ­çOÙ	^Gç¢ ¿œnØà»iïXÍ=ËÞ«À»;,ð‰£1„·¡7µÆËaà,€Í,<rZï:€"/š`#Ïdö^²"ïà%y†èÌTÈ.=ÔW$€ˆè,ƒÚÏgÝ0òF€;wB0B¶B6¼ÙÀ›O\Pu&oHw.„‹€òÏÂ©†h`VÑ®y²Ý«‘F4pÙTKpXgÎlˆeäÍþ"ä¯-î²bßb<m,4jð›æØÍÇËÐ„âÕ(p†î÷£#ð¶ò’|:ìr0öý	«îX{5°°*Ï¼Ñ8~øÈjÙô´wÎ€¹ŽÙåÕÙËÊÏðôlèÃ ]Zç—-«C ð»mµDÅsŽ£ß¯ž^^²Ë³s«+Á]ÎVc[éÍx<ÆacÀÆR{Éâe8–D"¢.ù!a½xP0¾oÍas#ðUD@L&XŽ:dÕ^‹}YÏÎ41>êìÌà=šnð‘cæ_3}£%\ÄA°Çˆèp9s¦H)\Ø€&’÷¸J¯	ójGN "‰qw\Ø£ŒÇ[f îuÿ÷.Çç>—+§î-”@c×sI—ý„"Îº„×EûÐàL©W0¿2LU*ä!ZœŒ^(	aHX‘¼©7óÂ1U`ÎdÔ89‚çh¡ž£w^8f'Ò|7’•-B¤ÐˆŠ÷ã,‚kàu`öÙ‚ÈþûÁÁyÕÂ¯Uø¾Íz-¥¡éòaÌÇÙ±¹ñƒ¬Ê«Ò1v Š_í×Ú€ØžÝŒ—Äœfl÷èqjÊÎS
8ÕøLŒ<vKbˆ°B¨ŠéÓþ„äS˜½ž‹A•ëÀŸZá‡¥µ+ûGÏ¡UŒÖüÈOîA]î;Ã‘KÆÔD ê©úþn')«åk[Ö÷€HB?u#W<hrí³Nã‘xà~ôÜ‘F³ÛØ»Î`Œ‡—èiëQWð¨7pòWË9‰ùÈ%`|’.ì5¡ÀÁÿ –3˜ÆÑBÌÃ¼–@ fó€0ø$F9dâ^ñ±19ä!I³SwîÑ”(h7›ò%ÎS€½™M€k#Ì
½¼ãe®aÁ)¡N£çŠˆzŽæ{BlP¥ó¨)¾âs9îß~•sæ½€aô×B…ÿ9¯/@‚iÎf#Üžá¢aì>`Ì×G9ËÁÄU rQBnvá:CP‹÷aÔarÔù¢†³üœU_mOÿü¯ Ì¸‘.úñ
‰ö/£ñf†í!Ê<ì­“§B¾%m^qqD2-”'ÕXõÄ	˜Ý­7›ÍWÔu'ìdÑwÙžxô£ïY«Þåïý¡ÃN@âÀ	©·À×,; òA"2õŽ©«9'Œ‚Hòêµ7" ~„¹ÔÙéë+ÖaÇ~‚õêìXGi0|äG7ÈTSy× é#–
1×7<r‡ÚÌvƒiðOÝkh7
V%HYmc^Zû¬ÿ°÷ÙžÊ‡1¼‘G1aH	—áeŒ0£ø1e`Òá…e¤²(ûDŒØÆÉ¡<pn÷‘Ÿ“' »ÏáQò`*'@}¥€Ñ—ô³k‘‘”ÊºâÜ"½"êÞÕsz´=¡Ù¥Î+¯jíQ+Ý¡twšV¦CƒinDSÀ–DèÒ}°}ÈÈêƒéC'Õ‡–¡ÙQ)Õ	ž½5Ý••Cg
êÁÉÈíÎF®‘óHçŒ•[2©m“ìÀ¥—‹öŠ‹H˜óRÚCe1:á³ Z6BµÓ, y
ë‹7!À#T°ÐDýº"V(\ ËgéÆX4TTIŽ½tqY€ÖS‚1Sð4û`ÖÀ,Q¦IäO ‹Mpí…ÈâJµ~ClÁÑLÏÖÀ½ÝúoÍHyéÀhÆQšó%ø	,Lêb•ÕóèH
îšŒh•ÊW¿/¡nåØ8‹/jZ‡‚ª bÉå­Û9ê²Ì*B)£²5uzU¢@)ºv–HªŠïc˜OhîñòMv{á3°k{ó¹jÂ¢©+öŽ÷ÙûƒoO_Ÿ\ýt~FÏ¾9À ältXqg| ëîÕ< ¹íÀ²±ìÑaåÍÕk¯¢¾Âè×Ã
ŽÚÍ²ú ™Ã
ÂÀDôù«{Øj4%(šdG	¯pãÕÒŠKo4ÃµË¡ô¡0/cÃé`›CàÐèZó£˜!÷aŽ”ùŽË…rÀuË_5¯[»¶ó8U`îÌÜ	ƒ<4']À`nJ{¯?¼ÞË)4Æ£¯Ø”½×ì¦‘:+áðø›t¡äÆµ;­n7)t÷MüõûTWûþ-HÆ) À#þø	euS<w†Cª—zNŽ¼kÐÓ& ¶.Ý‘ï²7Ï·êìÊûS§Îž‚(ûÿþàCg†GÉ€ÓÁ0¼k#Îè”I£í>ŒÈK(;ýÑ	ªÉ¸Õt”´2	=S¥¸Hc¾–TŸà‰Ï|ÜÁœ,¦3½Œ3´(ÍpQ—NÑÑ›Y<†¤çÇq=íæüÖHˆq+E>20bØÔéŠñXÐÝý¬ÕØÜi]TŽMQ†‡Í`ÿ²=SðkÄY<Sx~&eGÎÜÔ9’DÊ¿K3ì­%_¶öò¨ù÷èlvX‡E”ÞëBáZ
ùÜ^i=Ã»ög^Sªàˆ9Y¯¼oÀ­ë€µw3º3Õ™}tB+‹9*êü$·‹òî£ûxÅT9ÓÜi¥äŒ˜ü©O€¡FŽ€7ó[ú`çÉ)§ÈžÛ X»žø7ûŒ_ÃZzºÅé‘ä²dšN+çÉ¶1‰€@“an0Pgà…‚QßÁMxñ_£[32	'~;÷'þàCI¦”3ßYD~þì¡Dò´¸””xr!ª•&œ,÷?Ò÷1ÁMˆ¬1€mó JªZH¼ùKñB–Pª=E7{ÝŒ<Vâ÷ÙN³¹ù„	çhV}7ºqÕy—ÁÊÍRH–Y8d¿¼–sÐô@u¹•ŸS WN‰ÌÀÇÌÒŠÇ9òp; Œ¾W0óg)y¨+fe{É.e;Ï¾=`ÔVvD²AË,§µl0[SÔË_gÓ¬ÚP@]°CDzî{j‚3”reÖª½4þ1ùïE¶éúì‰¿<X„_¹7 ÒŠ_u†9³hÎPr7KI$c¢6:]#­‡û]íÙÅGˆ¬&““
¥Í›Ì”Ø¼àÊê# Æ3®ÚIjJÎÉÜ¾_sàKSf
‹#½†9ÍñciB 0asVkÓT+5‹s“Ü‰Šò­2™“ÀÂvXç/1Öý‹aAÏ÷ÅVÂ§,l¬‹ZúÕfãÑ^ÎÚã… :AY°ÀˆÉµ9î“U¾^³T%§Ùkúä7ÒI†2=5®ˆâÝÍâ”ì]‘+¡Áo€AAÚ$Q–¿õx¶äÊ¸/2añ³B°in
M¶¿ãÎnA¤Ì¸/ïÄ	†ŒÎ¤„ìûí„‚bŸGnÊ—U/
ì[þ:‘Mvw5‰‰/a-$ÆIF’ß‹Ê/Éš»€IH»XßÍÍ’¢æþ–ºÜ•'.°“·ØI* "o½Ëz-ò=¦u1¯qƒoewgÏà[)@² ›À»NTm×¯ÍNÙÎ gâFJg²Fg¥Ö
}tÍ)’‹÷¸]ÄÌÍ¬=Y¤Ž¥øhoiÅi•¥ à?ê¾9‹Œ<tPÞ#ÝÕh{å¹¬?oá‰G:#¾Ê
ˆÏ¶)òWªb_-þ=Ø{ Û|/ç€Â9ÑÆ­£Tì`²“ÂªGwªFú\.C˜ 5€Õ’ ’\³•ØkYI¶\´÷)ç¦RŒŠ
ÿ›7<ÄÀÇú%˜V@>ÇçK+Ýfåè`›WP£ì³ß˜×né¦³¹í*Ge¹3xõ°2ñþ°÷)WRR ÆÁ6•4@ì¨!S”Šû´ßÍ(8÷°â{ºì„™r°Í‹–‚sƒq#•£$†d­Ú}4©)ñ&¬J!(µµÀLEh
‚ÇNÑ2Ž[TÌ¬MdKeŠèÙ†ÃëSü¡ôƒƒ¶M,5Æ:˜2dùc,£
XõGâûíŒÚwü×#uˆqKÈ9qøRUÀÛÛÜï+GùäÎØ1JæEB­æ2 'c§$({ /ÏJÒQ:ìh†}ª8ÈÐQªÕœ1xs”Ï<Du¥¥9ÜC<¬Ø öÀ ™‡Pš¨PÈ<N‹²{ì{Ð’\˜PJõýŠ¶M6˜nÚshŒ÷¸%;w·-;Ûl´¾dwíÊQ^,Sº»Ptïóºk‹îvDw[I÷’þ–Þo-‹©á’îVðƒÂƒG$SÔ²e,z±—ÖD£tA²µ*G²I¥v.#üB©	ØQ“ÿ¿¢ðfà¥?ÿ+üLè‹mô` ›fÓÞk
³éŸÿµ¦­À´0m‚i7[­’0•(S
ÇÆ8ìØs-Ð±Ù„ÏÆº{ÍÇ•£n»Þì¶;²9ŠT-j0©¥…ƒë­>±3Í
Ï1H zs'i³¨½t„,ô#ÅÓ]^TŽv1ÙŠ ^Q^Z$Q¡t‡q\Ô~
(¾Æw™~¸N¿ÝÄ~ ¨S,ÓêªÙŸx­ø¤ã¿ñbIR¡"Ôë1´x¹
PìL6MáûÅ ñLE­(œŒ•#%@;°Ík®y§Ð4±o¯rD/Í û¦ ™WN€Q‡9ÉQ2šÐËT9"?˜7ã¦„pŽeQSÐRéNbÌäQ»3)À¤Mà™ò¬©ÖÇØN²K¶†2¢.{¶Žm6gTwF=¡ÚÔ&î·ZÃIh¸m(>7kS=å|?L¸{5Ã0¸ÀŸŽLmˆWut&ÆZT¥3[b¼¬Xyÿ1–Ñ¸h„§]‰î`_z¨×0(z†Žsy"è,œ0´ùÓDÁù—?ý	ÿÒc-¹QbÌì†Ò/µPÎõFM†’ÆÄz¹X€ êòHQÀÊµúKã¡®:sDÌ¨œÃ.^¸'­ö€25qü0Ì ã‘´þp1€—›.€(¼4ÐÃ	´x¡@þSí³Fí‰.Zîø÷'8t
o3Bÿg»ÁNR'©(¾÷;£Ãnë+ç/Œã|aDÁæ·s<„ÈXÞoŠ+Š4ü!?Æ%È^ý‰A§¸jv5vµ˜}%JXÚˆ8Hb…«Cxáá EËSÕÊ|þÒxù¤å?ÿT0j†ŸhÕ¸Á'>?µ—wÅpQQ
$éFÚR|r¢r„yŒ8ˆ]3CoZuËbá¸4eä®£„ÄTÃ6‹ÐHJfñZ«j-C-{e-;[KuDÕUËe¡¨.«"(j¹4IÅy.á]\¦I+é"ð²LA2GWT½0•ìºUõdåöJQE^"§fa“¼„¹æùªŠçæzOV¶ø$§ÅË‹U5//Ì5¥²¿ª¾,—…’èî…3>.•f¹cÒBÓœ&ö"˜²L'©›¯¨MeŒµ…Ê½¢¾(•îùGÓâ³û£ï¢øxiÁ'yG¹ÙL—–“J¿%Œ0xâÏ-iÓ§ÎÏâñ,Õj4“£büC^e¥¡Ä½¬çƒ|·›n§¡“×Ynp?«Í8{Ýîõîª>´Ò­H§´ÒPú(¥ÚÊî^»Û¼Ö[y”îL³ÑQw+õäžåôHr)œIÐbÔ‘”^b@ 4j7û“¡<Ë¥PÜuºî#(#7á:€¡Ø­}”Eòkì"Æz+{z#üÆvs#Ý,«øþPiCu%ë­´ºZ+ýN·ÝÌéJ·›nVxµ#ÂÁœ"–ß½îÀÇ¿ÝÍEeë}.ûÁ	<¼ú X¼Ž›H³Q|Cþ¶Å]2¯¯¯¹\iêï)3Ó¹bòÜ»u'a¶?ª>vB”+[Cÿf¶¥— ³Çç?’¯™–LSç[xÇÉñ:»©t5¾]x–Ü}a5½ÕÏ¡<iÉä'O&¾Uu…If91TZ¿Lõº\M*ªcgëØ¹uÌb}Þö6Fâä4C¥l¥”¡©tçÜùsö=‡Íÿ1íÙzi›—¶Í¥ùør—Ý!·C¬ìžteþîÕï¦vâÍ|l*ËZ…ï¡!cOÅ‡R\½U•GNûŸM½àëÔÖ[U]ŒëiùÕ—0™Ÿ´ê|œê| èÿå
êt€Ö£ºÀ¼.1¹3Æ$¤	½5ãçü"J9+ô~K…µvF’kãÝûwß}š7ž´îØ«wï3U.ZæòÔÿFä?)0¬¶jwl05U·sªÛæê)Ù‰jk
À¼DÅnz.’ºš­aÖ8ÏTÐ†ŠnÇðQ 8«x‡Éµ7C§Ó'U w§ò*úSoäáÑá^ú”ièI5štäÌ¬ÂØµtS—lN‹ûi¯–8xiÊóÙ	Ê“jV®£p©å‚SueÓKØÆq¥‹Må:”æä?åT·T3µ,¾bGH>½ñ2kj?‰Æžé‡tÑk»"ðâ»O
j™!ƒyÄª—‹ëkoà©×Óà­µô1`A~î©¸~ŠÝœ­l=‘(rãn½¢óû%z£¹ßÔîlÐ›ë½ÝÖnËÔ›oÌ¿LÂl†š¢< (+£[ž¤ü„¹ˆâ®q \üâ*VÍ¸²
SCù[\s[»ÆeûW´Î#ã»¹7w)2î',´—[èÊŸS‰¶±„8Ò~j•ÊÑnH)ââVUÐ¬L}¹±y)›—jí@)V-lJkùaJ…|l¤ÕÜÎT´²º¥±x—VÞK÷T`Ë²À bÏ~:½è½yñü„=yñæù)>Î°¦0))æ¾s6}œ);šø}gÒ›ÌÇŽZZØ[Ùò}wäÍðrÂj†³à-•©³X8Û4 #hø 6Ä£lá³´È5×Uê¬
LöG³CC	µ\­®±™WËmïŠæ°ê8Z€Ÿ­ãgÿdê’5³jeH†{†¡Rc²EØvlŸäO³a×¶²À±ÞÅæ”ÙKwDp’Ý`çÏÏŸ¿zÊ°{/^\‰/¾1Ú"üÔ€%Æ þˆÒŠí¬`šôKô‘_ùzÿÀj4”ÄVÒ%•¡/¨‘Ðh“-»iâ‡ñ‡¥˜ÂB,ë5Šs”Íã™™¹‚'ÚöüÕù›+àŒË«×¯€3Nžü†ýÐ{ñÃ™™A4®þÕ ?ìºéõ/‰\<àÅíèÀWÀ<£Åf tãz”Tÿïtóf¬DO3Ý¥ñŽée~eÛƒn×¥$32Éáš<ìutáv))1®íÒZØ¢½S‘1¦ñé4Øë7WÚ ¿è]=y}ñ’U_¼î²Ëç§gµû¨„™Ä@ÙDð=–b ö
Š.ä+Ú6fþëà)ÖÞ3¸
Ç—Qq˜8îá’)›IŸüÌà„¾Ð¸bîWö©¥e¶ y·ÁÞœŸŸ]°Þ«ž¿`O.z/ÏJ˜÷ZIàò._ô-F¢?¦©«W´e½:(CbÎ˜Ðßi0bŒ×Çÿpvr•AuMlûzv.hhâè	†–GNk»À ¯¬ Uï’½èŸå,+:­ø¡
­|Rê·ð¬”r·ÍVÎDG•¼úî=$=Y‚TÄk±«½&uF‚½­Gyä zxm(YBš9ÞsaúçÕaíæŠŒ¢udlŽŒ-´ÖAÆ6"#a=Z)·D[­ñË¼ Ã+%E‹é{'2CH»Vó;d½w<‚OÐ—KL]¯Ër9ZÅYëþˆu†·A¡;1Y‹-­ÔØæ"`¼€R§N8®¾éÖùÙ`»®²€T&PÜîuëiû[NEUaÙSe[NùDXÙ¡ŸÓô–¥t¦*$âŒ¥BW§O|ùñÔJwŽt¸ÑÔxÈp»¨š¥&s1¥HYN3I¸½ƒåöäŒõ..^ÿ˜•nä¦‘›ä(&îDQÜÿôˆX½Ùkâdˆ¢¨WöP:9c˜^¼Ìè´×Ú„P=¬B4¶m/c€¤:+4¾¾ÜÆú‚ˆÅUå1	éfÂÛ6ˆ§'vMö!Ñý¯¦Ä)Äj?NvmÕ–VgöÑ›ü$½å&GOè|ÌLU|Nx–Sƒhöõˆ+%Ÿ‘;:.œ‡Ü=jh‡Lß¶ú¬ÑŒ®B“rQ #Ï‡õÐ «½rip„“"3§²|:œÀ8›J‰ÜX¥²´N‘ýdéT#‚ÔµÎ×™¡Èº-uÒ-émp\²í”›ùüômÎtXI4iÒè¶]˜˜{+ÄçA0¹\r]Ã+»Eéz5æ<Â»7ò¼çÊ²là´â¦Ökr¦·]S¼•]{Ê€JƒYâþ!À\ß°;åÈY¸	»óV’¦pÞšš-ÏŠ&hù&´óV¾âmý ÄñŸ%,þ-þYŠ˜	aÞÅCÇJJ—¹Ã„òÕa&À¦£6Œe–Tf)Ê¤ý½TÆÁ{óå&•š˜]~ÃÛ\“A9.gUJåQUo¢Àf>E•¶ùŽ3IóB‡Ù&Í NšÒËy~XåD·b¹Ívju1R©â k‹oÜêÃõZ}¸ªÕôÌQ/Ïs‘¿¼)…ö<Áãm³s…pé0 ß~AÝ“08¶™ŽÀÒ~GÞ–ª9:Ä_bä„&"Þ/QÒòãJ^:8%»éÍ³{ E
™Ö(¬WÞÀÀO*êáaÒ¥‘-2_N"‡R²Tlë›ó92?Û/hTÀ3²[)D
æõ?©ð¬ÅÜ üà'+á—š6–B6Ü@ltÍ­:rÀ“Ûæv (DmEgS±h+ºk°ëUõþ\ñ¬V;Í¦i³fò·&¸qƒ‹S×0Ð¤Š¥Û²’y(¬ ‡“G4‚#æsaÓay<g)È°V=õî!Ãs¬9s;‡ËñS"(ç¿Ð’.(ÙÀº|"OvÍFt´óÛ¼ÀƒT#éàƒ\ã?…ì]{Šå‡m.0ç
‰ëo1	OÂå*¶Ø°¹Aò“ä™þ¤ãÊòKf‚.ò‹Š$Ñ÷!WJ]9Ö*SýXtT²«&g€Þ±í¬ol“H\'ŸA”¬¦{	zëjÆ…ºX€rÝÓžWÍÊAY“q5/•›Ö&ÇOæŠùÝ‹èól^7 Êèh’''V'ÎÌõPÖŒÌ¬Ð„ñj/W/:yÚš¢ÿ©Î y„cÍnã'F^?Ó7Âõª…wEl8¡”ù]ŽrÅÓ¦`ÊhÅhyX°cÆ¶ 9Tb‹ó.pÍVH`/—³hì†^¸…G—o¼ôÄ´òò7T¥8£Óiµþž‹øY¥wï{ƒàed¼—=…]_™³Ðx˜šNŠN–†\50Á]·ZÂ!X?¸{ƒ‡¡Ôó¾1¼\Á¶˜RÝXh@-ºô£ÁÔ6ºu4NRˆóÊ^ç7Â™G†æŸ(mÖ)ô•Ò,ÉhÆ:âÐlr–Ù›º˜áÒ¸¾çŒÖ"Šxº#²™{#4fŠ7òu‡5wÌ?ú’ó0µ0Û)à®À½vAëRA Åa‚‰
Äøˆ|ÿ±9zÀ>“Å@mÍF`NýñÙîÌzõT¾Ã30Ê»WŠçl¥Ía9—t<j	bz	ƒCøí|¨ÆðÊ.„ÎÄ¢ê–186óÁx]Ì1íOÝ´ôëþM,¹•ñ‡ÅßrÎù2)o’ƒ;oõ³+uql·.âÖµ£µuíˆìÏx­áhÒU—Žì¦Å>5H:j0GÒáç³õ—»áç`å-~žßbNKq¶åoD²åoD®å÷ÕLË­¼LË#×ŸRÊ4+¾·š_d°²ÒÕ"zÞå§²{Iö€Ù§`ðZì/ˆ”Òº_˜}Y6Bf–Èú(oážÈW˜8nèÉ[(¥£3¹ýÀD¦°‚àB,&.O±+RòŠ<®s²áÕ)>­HØ*@|€:¦ìËÓø6©_"óÉÉåeãeïêYãäõ««³WW½ÆÓF¯Ai—ó^¶y¾æ§ÖÉkøek¿Êeh>q@p„ž£Qå£³‰ÓÇµ	ïm ýI#x#X§>¤òÌŸYüiŠwö“Q…®Vw‚¾¥‚%›{AvÑµì©afÕûçÛ:û·^Ö4f`ÝÓ9·n†'úK~Ý:(‘è`—p­wh`¥ãP$ õ¦L2æp~‰j¨‘ÇoÑÉccJø¬ôqŸ®…E² :Ü?Û0“Â¯,tGx:”ï’â¾ž-/Ìé=¬z!Ÿ‘.W0®ª#,¸Ð(Ùe‰!ú<‡²{}wÐ•ñ4Ó'Ò'DM˜MÑoAç˜…üf–ko„évEÊg…¸ÉDå´Ÿx\†ûãËûËÿöŸYÕZÖÙ­†'ðéû@ái;§Î¸©Ž
ÇfÆµ8‹^ÕÅ…°ê€@KùÓ?AcðØJç‘:&•$
c¸å39wE&gXó½‘O‰#Dgèâ÷œTÎ¢°šÍY<R:+…L9É¶õþÑµKåuîìó:ïÚyE¢Ä±3w™XŸ–û°>y´ì‹{üò;Z0“‰;{,ø(8#âòËÈ	³óUšó¥CÉTÜI­{"Ã3^ªsÏ/$Ý¾Qó]%ÓK“u1ç·Z0²€ÄRþ{ˆ3åÐºYœO=	 %îæW&’šïú4pF °N¼7&3‰_áŸ]èÖr>÷e¶xbmK¹!úÉ[W(õ›íÅ“ÿ¥À± õÉzÎ§tÈøu‰¦cä\Š»	•Ø€¡5K¼”-ií/Ä¥ëÂY%zÁ ìÁ	Èçy“	Ÿ©…Š	í„9¬ùaÙ4Ð4žx…@Ì´·Jè!°žðºƒEí†ÆÂk¤„¦¶ù‡cfëÑ^_õßþßLêa«½“N	­=ÉK	ýçÉM>ÌS¥«ÓÇ+m„Ø¥E}e>åá­¡?Ï@ÏøG¼${Â.Çè¯Ãù‘íR+Ý£V¦CÙ”ÐøO˜Û'uR:X7Ÿ‚«û±4ôãšRj/–¥^,Ëõ‚8Ô”¤›¤ß]aÕ™N4v7Í]ÙÔÖv–½þûÉíD,Û)œ®\¸}vnkœæÆ´ÖšþF«¡påÆ+<™[ÄÜ¯QÇ)µõ4×TšëT‘Xq‡{ò£˜Õf½Y#‘ç÷¹~6öo4å´SƒJTÞZŸÿyÙ­™S[æµNK=£uÜîú	­/L¦«–Õœk‰v_ò†eäºÎÝz\÷äÊoÄBT	Ô<Ö§±½£2	$ÌK’"ÛGÁÆï‚½¡Ô·–FÛÜØ4˜ÔÐBÀb³ZªÅ_0Oun–ê{ËQ-2T™þ&»_ÉK­f¥Ö3Rä¢¶èòBSê8÷DŸØ<•?.~ úø«ëNûºëf^Ž×!äfÿÑ^+ózéN(³«8x–¼'}}ê Lå‘ï¤¶¦r‚&±ÛGIòêâ´Õ™„ÕÙTÕ¹IªCrWY¯Î,ô¼»’ÍR-Ò²S—ÎKÍíˆ$‹_ç¦Š6fª+Ê÷'°ÄÉ äûÊÃS0T-C¸VàN1bDÉð²I’##úå’—æ¦ûÕ{¨äÈÖ²ãØ*ê¦4-}õF #ž	‡)RS!Ž”–e5?•˜)p®ÄXiiQuYpxÃÆ¡j6v²CeH[³Fj"Ñ¥Ì
C2jcJ©œôMmLJÌ“`«é‰yJ)mûTfW(ÊY‚;@Uš*Ìb;˜Æ[–0g¡–½ÑÓ–ùŸÖÊõdìàÚSÜ@9Ùgk©&œÖúœÊŽ¦qå#ñ¡’´q1³qà$Ñ7m,œ´‚›Ý5xz)’N’ÖltT1æ½”}7§ƒÞ”æjËæô4ÐùsÿJÆPì@©™šg‹iÔÓŸëé,¥÷µ‚m6š¦Æ ¶òéhÈM¬‘aÿÚ,BAùCä+¥_ŠŽ¡ê#yk… ^”ÛÇ± 	u6fîŒåämÍKöZ˜É•‡ïà÷L{™´«+2Ÿj«§Y]Íf²5´—ÊKjH,°;¶¥N©ÈæOÍV&jÌ´èJ«yŒ\8\¹‰V³8Ñ*Ý¼—à^5€GŒ-È!²U¤’½2Ò7·sIÑ,"å:fw:u¶Ó®³GS¿ÈÊŒôìëh¨C(©)óÔ°F:Í\Ü˜tÛbNI4}?ÆËš)§E¿Õ²›:í>[('øuu³@-ÔvÄíèiYBÛ‡cÇÓ—‚Ì,™&Ï@4§ý[$‡)ç¬š³46ŒB3§´›uÖiÕY÷QdzÞâ@×ç/;÷9kj ¼oÃÀŸ[×Þ„.=ñT;±6šKÚ"5a•–°Ú.QQ4. /Úè½ÕR:—V”qú´YÊÌ’Æ–Iðç%ÒLô<@Ó¢m˜¢¥>éÌÄ™‡.1}3£hP'“fÐ¥?¦Ô•õ®NZ×/Ùåh|/:£bÈV"gê µ`ŒYP…“•W÷Ã(§>­iæêT?N]¬$Ùnb¢ê$X4Ç.—<Y¬‰Y†ŸDlô(YŽ|%CÓò—°d·©ˆÙ»oäß‚|¯ÜA!RlŒ[Gÿã¿þÿ;+åÈ$&æ|¥ª”ÊCÝg¾äÁwI’Þ8¶õž‰E#¦HÅÂbò§.^DÃÅ$;'c=Îù¤¦sÑòÔ‰€@‡”ÐvÓ‰£`d>¨VCTcÛìlèEì|¯9@=½L™ì‚jVAò©Ÿ“îS9âÿr°a&g š4T«—È¤Í”Û,•#¹ÅÏªmöƒØÌ6fÎLAd< ¦_Yµ³Œ¹G ½T®KÄ  :£n È¨Ví®)Œ0j×:§ÕoH!¬Új®„Ç/TŽô ˆlÅt&Ò|¦Qô`•e„mžä^c©ükÈ Êy÷ö8=d½áñ†4kfˆ\£I(]<¬@´Ø=ÊšêN¹TÆÍ”˜o2™œHLŽª¤På+˜Y+ôÒpG)ü¼‰ûµ^úCš/Ä'dªzÁ„’Á¢GR~–`3ewO 6)[U‰Õ:J¢gJT”A+•#¹¸6[#$ñz‘b b5ñN–®”º£$¦CÍIRêVÜ^ÎËÁš—{•j_‚Ú„ó€’°b|ˆÈÃJß…Óì®žÌe¦³?£Ã, ¦Üˆ:Y}Ô¬ñþàv¹)£ã&@[{þ"™î¤½‹ áïýbjQÿ-"@•“áÇZaöHe†È““8òÂ™å^OÚ`d‚‘…ƒU{«ò™ð¶J¦ÿmÌL1/µJWþ©¸²FŠÂ™©†Ä&§"}VÌÏ4aÈÁ—µæ&uoiú¶×»Ã[}â¶ä¼m5³ù¢Ub¥Q4E'i.	A{m—«´³Ö$(Ò$Zã·÷2x"6ÚÃ¸©£",X]^
–J­nþús[9ú­……X¯xi–QÇ–•£ŸDÛÒunE°•Û2,µ†e¨²Ö²‡rÆN®Á÷3íÒj*?SgéFs]¦¦Ê_c<›\1¾n4“Ôåv·`ö%B9	âý…„2|s¡•?C(o ÷x˜Õ¼ºÊ<ÓBÇ¡Ã¤Õÿåÿü?†ì¦TëŒ‚_Ê
!‡lXÏSàðè9i2K¸ß¤ÉÀ'þçÚ)òW›þ´;¤"rˆãÓ“”7j
Ï7–A½Œ® ³óiÇÒPÚU›acÆîàC’\|ìß<E=ÑswxÄð'CAb°õKÁ{…B"·Ë¾!Ð^0PAòàpŒÇ[Jñe
nQ¾îºIàÔ‰5Ÿ9“%žÈ,ë»ÉuÇ$¡ò"Ÿ?‹6ïž8Ù„•”±ËF“®5=N’Hü+ô‡ªÅ3ø6Žå²»è¡Ë†g”ôÞšvÄU~äžÙxµˆµº‹dd¤ú,Hgô…bGä%9Ø†o¦—ññ-õ¯ðÞVŽªÇè©W3< ~„w˜ žhHc‰TÇ"ŠÎ#É€Ô ‘:†GéÜì”fÞŸ‹#äâx$¤OÖgÑ÷*æz²ýH•qO°‚ê¢|.Y'Ù;ùt:¦•Ä6:*cüåŸþ¯8ã»pirwã~œíŒ}?t“C„srvòaV•žDå¬Pê¨PrRˆªáÙ1~Ø–É?â´Pã áÿFéètÇ©¢mÈO5b	ÜÐNè`„¹ó‘Ï†..h2Â¹°Á—èÜ:ÇC:Jk„‚ä®ò,¦ð_c7û'Ä™ŸFÌó´ÈT¾©	­ãßV$³NÖ2y¤}P&“µR0ÞN(LÂ«­ªqÎY<ÏQ”â“;ü˜<^“'"§9gªM#î—ÀÛÐr»ùÍù%¸òàaˆ„O'~[_~JšW'%ØŒëLý!OY#EÜY¢]Ü§\zÒ"ðt"kÅ½P\Ô’¾}_"Ž\ázÅû!“Iæ­ÐiâÊo¾)Á]ùx·@þ*´Q<ýj²WéÙON0ö‰Žqlõ¶`Ã“UÏW©OEc^`'·À	/Ð¡;ñÆÓÏ²`¼)ßz‹ê¶Vµn*p¢è
œªMt²èiûŸbwŠ»«Plç¢(d>vmIübš?Y…þé*œñÍ<ôqïdê» 7…r'Fy]Bvc^M¡È©`µ”7OT,L½{ªöN«úL%ŒÚÚsþÂjå"úê¬SHFÿÞ)bR5„âÅ-–üŒÍ!û‡Ë×¯”­¶J_CÊ1á]/«ª@hH1P«©’Ô{Ü ’;4K±úeKO
ëK…¶ÙQA+¨ÃP¼ìE”b†ú?8“••¡Œ^Ý®Eµð}¦ÆO+jü¤×~È¢Z²Lªæ²DÍ¥±æí
rPtk«ê,³ôKüw…DIŠéõoQ!÷%ÅõW -Ë¤zëM
GßgjŽ<¾—5´iÆýâÙÅË¤:›õ«êòRÙÚh¢¯ª‹eh+öq¥XZ…T-«B=R+iP#/\4vØ3Pò'n@/ãÛ”zÇ*w(ßˆÛ¶cE¶1˜xòÎt3–9$Ò¥ž)Z)ÓÒ‘¦/ðÖ’“ÂË±VSh¨ò‚V°íý zß7¿+»5ö}ü]¯ü“^yßJ¿¢6^´TÕ#¨Ä[Ù¤8·ê1ÕaHœ íƒqÊ[øâaˆ|^ë·Uˆ’ù·eÿ²[E± f*ÿT]f*ã5ºËâÊ8q~[¨+wÂÁ !0©©TËõSu°Ì• „ER $µh.²§üâ:?Å®xÈ˜L*UÅ<ZJ™XÍ0õfŸ®m¬ôŽONÏž<}öü~óâå«×çÿËÅåÕ›~üíOÿ¡"G/`#8ì€Ù;òÌÊ[z'Vo+çQï!K`C/R1'â&½ìÀËräªÎéDql>%]C}æ–®(CÑðÑ’-ã;Å°3ÜF;T­4õFF¬6 P¨=™øN„§¡Ë©ÐvÊ]•Tz™)ýS~iRNÝ‘^GÑ=dÕïã®ê e}5†ó½¼QY¦¥&ÖªQ‚äÕÁ­¤ç’˜N¹{ZÂ*Ã[õÎ{ho².Õ›íña
Ç¥VSVHjJpJ£‚{>¡v;@Æ	nIÇ
?D˜wq˜¡ì]Ð§ª²…œØaj`¥^´ŠæÃÔK­¨¨žÚìË÷eÉ‰Pª+É~j¦'èR§k~cÍ‡ã¢ã}b•ôÌë€ßQÞ/B·êHl÷š‹‹[JùÇ¤ìR–ý-íP—EÀŸ’âËÇI3·Ù]a]+UÙRk[·±ŒTi?`rª¢¾ÅnÕa«+%Å Up=öIÉ¸`©”N¹•"õÁò"uÁüÒP6b”ŠŠ++Z(@UÎ]A>š‘U.B°â‡Ñh–V—bù‚÷RÉ6’É“B¾O–‡— .^Fi _øþ\_¸ò‘,k†ïšÿ/1 :Ù	SÖ© 7Ä^”:Z¦LˆüâåFât––BM¼´¯*¨æc†+)×ò#=K%xAÚ5"åÒR*½Ö«dÓ³Üeq\r—€£P6q2|’èýÐ‘Ã³\Ç;e“k±z·ñ8šÆ)•77Oeº)ì…bfìƒþ.àØÁœÁø¹Gs6j ÙÅ¯((@¥‚žØ,•†\ËÛ4ç0Ô8Ö²9Ï¹š‚cm•pþÜ²o)Y‡–;òù(Š»….4©ä>TsWß¥^Ê†—²á¥±á¥±áe=¶xfÍx¨ä‚T¹*[dÖÍ‹²‰ý2é±¥fò‰vë¬«&HÍkÅê@ÁŸžÉk2|2Eóô‚œJ3þŠ
úðpQMe ü­7›”M¥’+p°6B¢<V
	¿Uk\ô³‘Õcó#ð]!ºúU1¢¤È¥p““¶1uæÕ9^µÍ2{\5M\‰Û E˜­Á"Î#µã£²Kq&y¸a)Î¥N»ÎÚZÞÞâº&âºFâÚfb†êÚýç|ÐäÍß8Jžá"oñ9%±Ð‡ý­÷óãLÉ@zÆË¹#ßàJ!¦<êŸ^©`úÈlêÚˆˆ`=ï‰Äy–’9O‚CÀBï|l¨z¢©v”Trë§~®ÈŠ)ót&Óup«M×Ý’¬8”êJïê1¦õd|Éó“é©9sîÌÂi…ñ±®ù±®rÿW>`þ ¥÷“µI´zÈ@¦š¦¡¹ËÒ«Åñ)4ÊÅ«4ùLÏDYºßžÇ³ðÍ9-ïó–ñV»†¯’ä*Œ4í¿™-—ºKÁî"¸ÊVE“ì¼tãìKŠU1kNRœ"Ë”µ‘MÕ­™¶iÑ[cûÚû4o§T'bíR­ü´¢•ŸrZÑØAWÎ¢‘ÙË‰ž‚TÁ¦ì’F­•>kh­iË$YÈùÆ‘i)/EÝZái×[ùi×5`KDÁT·0É6º.¥ñ;º)¶‹5RŠäå=Ñzh&v<wy&
:¥@ÓÌ|ÒýÞšCNÁ9^¸ÏIxÂ“ØbÄWŠ~½ÄŒqŠŸR¢DaC\5È ™œ*ÇðTgÄ% {Ûü9%üÄCE ÆÆ™ÇC—<X»<à÷Ã‡ie-#cªgjÊÓšºSÐ¥ÌC²9VnL²Ç©zÏuNWˆ^ÊA`²À…JÆV€èæ,/J yŠÂXÊ)jÜš”B­ÆRjiRzUBª ò†ŠR·¤üøÜ™NWtn>Ó‘,üˆfYZCÃ¢äMïÕpj+)Wbp€ ¸Ì€P2&òèŸzŽ²„$Ì.„Æ®IfdöÀ.ñþZ þ†äH¨K‰•ÂE“%¶µvÈ2Äã,3&j3_²ö%¥•ù†7›¹ÁO2¶Ÿmì/‰^’èÏÿ"o]ÎÇ‰7}=\$D ý»…Ýzd£ê!5¦ï÷p$–òÝ2ýnRŸµ;“õÆ”îKYËš2rœ/eáYôs¼u¤s+àYë Ä“ÖíŠÑ0j‘e[ÀñÏì Ür&5¾ƒú
O'ZfÂÛ‰N˜b§xÓbS8ŠÏ®^¾@ãÒ«í©r¶Yîþ+Ã#åE¸ÆÐ©9Ê ¬ŽÑA4<’áë\‚Ä…ŽÅñëÛXþ—T“šD½H”'d#ƒ”¥ªªZª†ã“±7‚²~“èÁKQö”¶#ðçì…?òôJDÛd#X¦þ"t)eU]ø2NÂ“Ð÷cŒè Î;¡€Ú˜Rî#¢ („‰û˜®ˆ
B_5Â}ê:2”ýI)û“,ùsU9ÁåWKýA1á_ÚË1Æös<¥í¯ó+÷'#\¼^÷S	’[,eC	òZ¹.$;`-[×mÒ!÷é$°éœ±Æí,µ<¦_/}âÏ³s¾T¹WÃÐÇ”wCídÓØÉøÔÁ¼@½‘ÊañdB$;™…oõÆ<`ßj4N§áÝ`"éF\ëæÁ]Æ)¨_ÆÅªšfaM‹1Òú ÒR{Ñ@FŠBª¿Å&GKÃ¢—¢‡¾#¶Ò{ÌPÞº¢Ýió_*«¯¬,q©Ê)SN‹”ÔÊ$&YÌ3i'óÏ¿d§¢rt&n0I®É¨ÅT†ÍLÌº)ó/eŸÈ2/E^¸ÿ¿*Á¥4ä¾Ô6(r@ò 	KuÈÞ4uPòF^dT‹]¤­Ñ‡h×DIPåh½jxXà^ËŽt¶“º&Ñ—ƒ Ø¾ò­OCë…AŠ2ÈHÜ=ÀÈÈILNßr-þòR‹€½5Ð¶`$³Á¢ÐY¨hdAÃ4± Z¬±×Â ±è¢´ ´8C²âHð
™àf
d3˜j¨"èb&
Xz‡E£5–4   ÿÿì½ks#I’ ö½E6ZÓª _Er–…b=¶ëÁ%Y5S×Ó¶ ’dNH,¢{jmwÌt¦2IvgÒÉN¶²ý’Ì$}9}˜û'ý´?Aî/ÈÈÀªê™9-»‹2ãáááááááåhvb^­iqèf8
Zª©Ó1?ê¯>Œ%tcyZ¬±@¤sœu9<Xq) M"¼¾+<l`T†60FÅÆÒŽ<¡g
ûâgÒ;t—•R<2sØ¼CgnpÂ®´XÐ‘Ð¹j¡ °$
íUcÌlâšƒª?½(õ9~…~È¥ Oë‹5Z_¬Û:?K®Ðr/±ú`ò¯Ý]Ešš»kêû[Üü)‡èÛ*íåôûm•k*ªÚ¥¤Ê\DªÚá#?tNiÍÍT–d›fe5ôZ3¦#uõã+Ã÷2ª-<éÆWøk‘ð^™´µÐp¬“r7‘o0ódM®Îœ]A×öæçŸkq]Ë£ú†ý"ÆŽÈ$=æ1¶C8ÞÔMMo9œÇèf]¦”ö³h8v%Ï/u/«C]Á>ŸÅ¸ÏÀF®+šÂ¾áÑ‘g˜ŒÊª•M=Šªv7ÀŸÂV²Ï0Þ77
øeÐô™XxŸ±jäìy#Ž†þ–n(2´0¬{ ëˆöñïæ€IM¬bÂøìeMx}¿:+ë›ž];Ô…{Ø]@.°{¢ú,¬XT 5X!ÁçÈJ:Q^aÒ:¼Õ³›¶Â°NiuçV·¢Ã/÷ ´—Qn`DÃ$oz­ž}v£e*,œ
Íž­s£i”žë!&l}àß7àU±pBÎÊ”F/xžFý/5rç>¬p°©âalŠ+›”éï{•"PDß}6Ä0Ó<O`4Ÿ]Ã¶8ŒÌÓ9êÏG¿m4[u…j½tXâÅdºhØmÓaÐAl:‘„F¶ŒI9›õævXß›ÌSH~à‚œ(…æ4†QÿS.öÃ!ÁÆ`¡Îrhò'‰àª2Û´Ì²y,«2~6T-ÁÝI‡”!ÆNÕVt%ÒÞ”Î“A_ ÆU™¹1,~ˆ››éwœŒc™fý
§:›k³Ùö†ó¥É€KAyÞpe{ÉXÂ\ÇØKO½¾šDýøy|ƒyT¿-½Hú°‹ç”õ:(o‡»•R5(=M®®õÃ½°Ñ¤§Ç§°½<{H©·K*Ó©ŒXƒ¹4KÎùyíÅñÅÓZçÕË‹“—µÝÚ“Úq­µó^¶¨Ãó'aç|kZßÚª7Óo fœÙÀë|Éƒ¨›’Sà‚îêAîJFÈ©iÆ0\“ ³(á§“ožO‰ÎJ_	’Ñ,…)RSÞâÛ¸7—âÙï(Ë}-8¹ÒIPÒ
q?£`?W*ÆO53Ãf^s‰ÂÉb/ozD6{•[B¯º¿)\Ï|z,ÉÓ´–Šÿƒf†h#ìßG‡A4¡ÖôP@6¿ªUƒ‹ŸþðÁOÿÍ¿ÇÀ¬ÚôW>ø–¼“Ê¶rùˆ8y+,Ÿ`:ï]Ñ4‹0˜X±ó~p#ÂÑ³æÝK'Lgºr…
‘\(jx¢\¢65ýÓ`N	ÂÅwb½f¾hž¬ô«³ëù°;vùQþ™Òå$†ãù3bn×ëÁM…É¨Ÿ\¥ôu–†0éïÂv½.‡ÑÅŒ¸®ªÔ½Ru¡Àf£.2MÈG-¨/›±BMÕP¢±dÓÏ£…I¡.R–ï[µ=ù€ÒêRºâý ½-ÇÃù3‰ÓÓÆÞ–¤Ç¤¦1FøÆÕÜŽ4\ _	:±k’Â†ð5ìTS`Ó´˜p¿µJ*o"2Þ)Éq<ˆ/DØ™IsŽ|ìQ²ÆlHøá^'DOPîèÍ^É0¡Ü¨[u+ú%lD˜$—-™Gh¾}¢×ù	ˆ-ÈmÏ	ÝMì’(iøæÁ¨Y‘¯&˜ þÌM–ãÛ™NUYÚhpœän°äºÉÃ“œŒÅ67£…¬ÓS{Ú4»“–€Ïøb8'Þ%Ù“"Á—ß c8åb¸±«kÌ"ÂMÑŸÄZM*Y Óé¹C(LBñ’LÓð„Ö5¾KlPÄ7ó,<xªJZœ©È/`¬cétS”	N½©¢’f&ÙZ¯:êÖ£ø2‚™šîÛ'qžèºÏ‘÷1à!Ò‹‚üÆiO·mb×*"4õ;ofl•*ÝÎÅMqÛ3)ß[ÛnÎwë‰È—žM–þÇÿ=7Yºè¨Èf_¥óv•–'°¿õÆÅúçHaÏzf+iýQ-<£ò¾þ9Æ¤ûý˜ázåF>v„&Ô.Ñ¹²ËÈ1ýç—; ½Peòó¼±ðå;†°éàBì]atÎè]ã1ƒŽaƒç´—	&µdø+žÈRbbãPÁ0/½ N
6'”`EŒ›åŒ£ ‰¿#t~¼L1N"HŸÝ½ö+4ËŽ‰÷·j| ¤7}AC¢7›s‹«o"ÊoÞdÏÓpYà¼xû¤ŸÊ) âßÍ¨1>§[Öð$~g‰‡(¼@±·?Ç=Ÿ +Þ©iÎp3â œ_EÀJ9T‰Ç”_1¢ÀžBµP©âÝaÈÂÙu4£r5¶eãægähÖ‘i_òÉE½™®hògðd‘Äƒ>ÔàŒ>,`ó¾¼Œ‰²…4
@ØÕ¨ÕjÍÚ±’éS8ËÇüàŽÇûŽJxøýÁ—^u.ÞžžÐs8þãXÛ£«ÃR<*áíõ †ákôaéõÅãp·d^Œ`ÿ:,á´ ¦ ÈœŠ‡%ò¢<ìÃŒõâPºT&B3O9lÔê¢!ZaG+åÅz“Lf(œQ~,Q[)¸pœû [ÎôÚ6iÒ2SuÞix#üÜÍ–Þ
Ç“ÌÛ	
“Ò$óòjB¶\ïîí62¯EÜS¬N¾ ™÷BT‡÷½úî–JÈŠïu.`¬KÖÅî»9	¹ÒÚ¼´îJwBKýe»»ÅÀ¸$~ëÒÚ~CMß7
6“ïN=±Ó	žÇWi¼Æ€Ópþa8OªA'Y8ˆ'UfmE!†5\Ÿ(}2lP&˜/f57
Å5óTÚ™è—Áé&:·2”_zæµRwÆ4×r„×_Íìãë$¼c¢ÍLæY	Å·ö€U”“Ò—,]ÏZ†W°ŒŽM‘%u{¥LÚk¤TùýÙ×IÛÛÚÂp˜¼·Õd)3iì-êãÄ¾o.CÔ*†Ý+ÓRÁèõ±ñÝ(L‰[£ÀÜk¯‹O”ü×;À»§¢Ýã‰ÐÝóÙQ‹pä+Ð%‘¢>ïóñ8žô"så4ˆg°B\·’ëí5ÈúŒDbNW²™úÓ¡›4¦,J–€?"°¿‡¢ä¾íeÿi˜£HMSµòÔË&ßU™áãSobwNI[>˜±®|DJ'×¼ÀÃþeÚ›O%6ÔñÍÉª»,å½lœ#W$Êù®(3°lgµ¶1óz&q·•Ã9ê¥™˜ÌØmæw
6uOŸ3ý©ì1K	Ã·ƒúEZE™‰áý-M-ÿÕN¿ßRr%o@'¥)¨LØ€Ó@¼²8GÉ…Óe Y: ¯»xÃÓ¤ÈÔùñ£›dØoîà&™ÍÕæ8®»ãbùï$M ÁR,ç‰bù”M>ûI< ÓpVà2G´n£Ñ¬Û¸ûh9`5Îo‹œÒh¡Ä#³J¸¼„:×Qâ¤üÎdªÏ"-êÂø`C×ì&E1ŽÉuuŽaØñSJ«^¶Õ ½W%žîÛÚB¼ý9æ?… ÆÖŸ¤ãð2Á¼ û˜ªdRÞÒi.j‹ä„ebÂò³	Ñ»(»{Fí¶œ«!¥ÿîmÊe+…¨ûRŸOž3©±Ëèf‰T«@B<¬/Î¬E+ùr‰C«w¶Õ¿*ñb¤&¯ŸÖnVÞ¯êm—±óÎ}‡%« —yÑn%tMNë&Ï×ú3Í¦¨à˜|W6bë–:é|’Ànó2~¿Qä7t¥4£Kfré„$o¢$—†œ¤P-÷”¢3„É©fŒdôHË—>­Hƒ¼Ô±Úú9®\heŽª\øù$Gv–U½È$hÁ“çYò2ªcÎi@­‡%M`µœH¨óW§úE·äA±&‰&îae9z "1í.£hÒðpü1rËM2M`ŠÔ+et™/Ã™&Ûu¶_H‡™/È P¨à6ÅÅÁ0+ÄWBK'ss]7Žþùÿíÿ°º	4Øu)U3–p‚««}Uæ´#¨Tß_Øùâ,äÊTn¢ÌU÷<¾œi÷¹U3+Ê?Ô€$(,jáøçd¡õå¬kÔž:ÎÎXÇsæångÉ€™ymQ2`•ç¦t¤ÒÏå–Žð²Jš_³
3’Êh
¾NVb©Ò‘•ôní¶b‘
Á¹š¢‰Nš”Ûkµ„Öù¥£vH1v$|ÊúZ»•Ò‘0¥Uf)k§6æ$cÎr|îWJ!ËKG÷ƒã~_ZÈx2¾û[§R•‘Örê+…Á=ÊiÔ“¯™2­±H¼I{["io³&šûZi]¤éà£V‘6óÄv‹Ö‘°K+©Žt¿ËÉDq;L{ª_™±9uHðÐÜê¤ãd·&>!ê¼O\d°Üä–+¤H‘|£p\–Ü©VÀIäý.¬\ùiÄ±ûzäaúËJœK[nñëK+*›ºÒ‘²EùÈTåúfÛ—fÞq	ÍIUžÉFl,Áx:råîP:B‡uó‘3'
™­ÊT>rü$1´§stóläË¹Ø*|,‘C®rŒÛ«WÄx‚NçWYFv·FáL­ÂoDÓ§i²¹ƒMÂïOiHã	e†_U<üœ3B½²}ìtK°Ó¬‘äÏ–,=îœ,Ý„îž,Þ^™Œ£ø§Ç:g}ºˆ!í|vÕúmù
&Ï£ÒQkÝµ«¼˜ÔÂm¨uÛ0Ë¶åC–¢ÏÑpA 6×p±ÀfÀbÆjL½|¬5ã•þQ“'vIæ\\:ÊFÙ/Ü*­ºùûÏméè×!¥C(S‹UäÐEéè­¬s»r[9ìåv•
!¯zª¬µ-jKOÏÜ¹Nþ·ì\;VNÏÊåËúºDÍ<û$]£¹«Ú1]×4Ÿ¢÷ù«Ï0eŸ‹)££å™2ze~SÆ³Ê,5Šó²”Q²¬p*Yõ0„¢5\¼dR¤¼Õê¡¢—lpâ¨¥ÜzQfÆ±(¡^ZíÙqjÕ‚cáb#Ôy¬Ä;åÈ_:úéú?e€Xƒ™9Î­„fËA%íŒƒ³3n>÷‚#šçî2›¥O#ãê¯N‚u³}È»:,cR½—`…‹®f‡uä^.eÙŠµ(Zl7½•ŒA† ¾%¢È±dMÙU¼R{"xkQ:¿ˆçwl”{±¦mG!ro¼cfƒ5ì$Ì8‹nÃŒ®3¤rF)==Öí_[öNŠ<Okƒ¾[¾mIŸãÏåÉÒ¿-=Ãå©õ]¡ÑsÚR=¯Èo¾µM>>±ø6ôÑbQ´,‚qJîRqŸ2{†È9Ð*–v¸†‰R©±ÿèàá¬p·á€%×jÔuBXrz*PÎñÉb”tØÅØ¬¹
)sÛ&€dñ\Úd0×Ÿþõ¿±bo+ë¥ÐR8Ñ,8zòÌq“lH³WÃ+^(ùnr9µ‹»"½&ôõ‘M-3åÀŸMìTìˆ4¶›ðÉóò%^‚ó‹ñd¯ò:©tT~ˆWGZÎó·ñ8§—Uù,îç7 O,˜±„3®ƒ¼~ÂÃ¾–œ¦pÑžê…ÚgË—/ZêCÜÄ°ØæéùÉÖ‹M9cE7æª²^Û¡«Êü½Ìíi›ÓÅOÿO
Á+«(éíë¼ Tá~0%{Š"ú,`²>ÝÚAwr„ÿ¼]Øò$ëEùo1w^íÅKnïŠs(Ÿ­·ä¯Uî9¤<‰RÌˆÊ"õW¥šW¸b0ôì³SÌEzE^—“`Óª^´8öñUïä©”h Kõç ¹q.ï Ôˆ§5Mcw“eŸTè, “”Aª 9¹‘¯œôæ³[+œ)y(aV‹fßÍƒ®î$‹R Û’žÎŽo¬L™¼e•Á£»Ôº‚ÎÒ&Á™ +Æ3|Šó«kXW­EhØ7`%õ§oCË
º²ŒhBû=Ð¯üáŠ¤¹ÑŠ(vnn$QöÖ%ªFêÜ°jäx2‰Dð{åèvµ—ã¡q·$7ËF•¤Á}+Ò_5ÀE³ñÜ«ÊÁtãÌñÕ:Œæ©J6Mƒ
sUæ˜ôD¨ÌÞ‚þèÆ•Z“­Ír½Z¯l(—Cƒ©ˆ‘`#T·äêFÕø&* 7Ž7(§ˆ¾Ù4cÐŠÛ¹:¢ÀØÖwöß©‚ú26¿÷Õm,ëÝW Ãly
<â]leÁ³îy?Äö2w–ØÊQ^çC×RÈ/F ¯óÎ2ð-CÀ‰(PÏï¬—¾í: oi×Ed[Óª¢ÀBØ`os(|£{ÂGgU}ÊÃ{{&^„\@ÿš¯:†2úûmëÅ,«©…®Ó>â¦ 6"Î&¬ý@šwì^Vq{÷ó]Õ5å+o·h4`Eí˜RînlŸu7e§¬Ý?–µÂËé}=Ã—#™¶±îª‹Z°
:H5—¤…X5Å<õßDƒ¥•¡Œ]oÍŠjáûL·Kj¼µk¨k¤¢ZªŒSs±BÍ…·æítP··euYü™ë—B¤˜bÎ5ÊþBê3Å<õ—€­Ê8£M…3ï35
gß«Ö2jËâÕ%Ê8ƒÓ
ÊeuE©lmKå¸¤^6Ûª—µ€e<`J™¢X1—iò}1Ëä%5»Óqjí€Ž¶u1§ÔHæo ,oÊfS€<¥ž²“‘Nk¡š|Ï›ïtK×VM•‘\¯½À`DNí`öïM}àª°ô±vå·veÙÑòÚž˜Æ¹™7ª23˜¶òºÿ(#ë!Þn9RÀÈT¦lìNeÌ©±(®,rvôxÇ„2¤.ÃhBBRáˆÉiJdzô6e@Â"NSv[nÖ¹QŸ'þÛØ`|o‘4JÇ;N?yúì¯¿yþâå«Ó¿9;¿xýæW¿~û¯JÚI DMAs;ø¥nâ[zú]°”NKhX”º8nn”fŽÔD¶e°`m"<£ŽèÜ–Ž0Ó*Rª*¬œ®ÍP<¤\05Ô¾Ò‡…•«ÖLÊ¯Ü¬t”Wˆ
‹$„úK&âdÄ¦÷Â¬öžÎ.;‰—u•{*¥!Îbc·n—î#*…5q ‘7Ú”’Sa P~¦4våþ­j¾—NËÐ3¦í/ÔC9éa¥Ê*ƒØMyïXeUŽ2Ñ¹-Vt]Õ‚åƒq0—,Ï?5@ d: .t‘….²@‰òHÏ†<ñ¶*>#‹cˆ×­Q´'+OYY»{Sa¡*üš,0V¨€]ühê,˜o–7:-„¼‰Ðj#VÊ²zÜVŠ¦¦,[ñä.ó“›òë.yì*¼Ã<+ÏŠóA.i¬~KÝé+ÖçB.w,¹Ð%i,ï<Ã°¹ã±Ÿ.×{ÂnÔÉ¶à<ž¡"pˆ`°î-cYd•åµ²kz0Q¾±wRÅ²8dbq[ìuu	¯­¢·èÛ¼¢eëÌÏdïd1Èu¾>‡œ2’ßò¼žùøä5ø`ú6Šì å2û6†ìÈä‚¸Åc9/h^
Ñ1‘Ã#‹©‰9i‘Â8“xÔ;ïŽ"™æÑ­X›¥¯1îJ'šÆeÊÃ(ÔÍ+ËËZò¥‹sxßYó•	_´RÜÔï+ÅÍßîÃ˜¶/{w˜›tÝœ yÎ°2mbáFÞµyê“æ³X•(e[`£ÐÛxÎ“ù³àL&ò
–jµÚ8øP©|G×2"Ðm#¦êv˜êpÏ¹Ø94W;!OpWB½ìÖÉX"S’÷lLG®ÎXYGUOÖž‹yÁXw‡žÍ8(w\æVÇá)Ý|x fv†
ì—p€•:O%U·óð¢"ë;_C|@Ö›^y¢¤yñá"¢ë~až”{ìy3ýŒÎ$Ö‘ÕnÚÉ>™©ztÈº©øšf	yªAìñø±:¹8c
31T[‰îë2Ñ½31n¶{Ó%›E+ý®Lðm¹]Ûí6)™/Ë‰_œÖkÎóÃKšVMÆÑ"¸Ï¸™°O<JXÇ¯GŠ—Þ—–Ðþ"ˆ4ñ²ûë†à÷K†“YŒ†éŸÅ#Ô™
E‰Íè…6Çèf·5²	£$§õ*ÞY—úž!5ü.“5ilÈgF‹wñ9š±à%¼Ê“0C!$õ_I…[ƒzÝŠe„J¡/ÃãÍ!ÓXñùÁ»1l8§À50y>@Ê‹í¼êò	ö)ž¨A2x}9ˆ<Ïà‘*:<GÝ ¼–³’˜_,…‡' >¾§l6]¤ooílí¤»(oòJm–^ûuQÃÚÄ™ý<g~øèAÈnÖße2ˆ¨­
Ð¨
ßa€%U—±È/l
lÕ%ù5Ýüe·”Ï	6UÕ=&B
³”!^ã*Åàý a¢}p;^¨Žªã…·ã…·ãEUëSakÛ­ÚjÓûÁëØ ³#¤À $gñ‰9²âVVI}çò
X‹4¼Ð¥§„ä”,5+ŸìGÀ¼|–Òˆˆx„ª}—=ñÂŠMQ²-«Ÿ#­ÖÞ[x0Ï&Ž¼U:¤—åx’ï@p—ñ†Q†§(4½&l´-øÕl7Ex1|÷Ó?ü'”ñíú‡ÿg£J¦—¬~B‰6Á<Äá3mýE"kN*YCåÆÆiP•ÌcÍ&dçuyiõ'‚:ëþœkÍ6öWÚ(YžR6úÑäÚ#âÄˆ3Yv­t˜ÀÙ^'qý™ëËjL4_.8L:r|AûrFÆÓËÛœ^¬M×æ"\¶³/gXv4é•3ëa^x+å}yìRYR~SÖÄÞø.æÛ¦.égãgƒòó~³Æ÷÷	!+ÖÞ0¤LÐhøwÞ"±ÙiãGvRWÊƒ:)$7¢-”!Ï¯;xCfR/Zåóq¸º[·…»Í"³oo,‘O­Èñ“±.)ÑVäGÒTœÏ//Ø·’é£hzM'h²_´UšÐŽâ…ò0©òæìúì±Üûb 1<íÚ%.ŒDìcËŽ?fâ„ÝUâë*±ºúÀÀíÒi¬F‘#ch$>p
Ø#·‰žMÃRéL¤w3"¶úi<CŸ|Tþ8èÖwž®œîy•ïÌh‰*-/¨+±%cƒµ[c8t²µê"Ì3ö\š	4ûw|U4¯sM¦§OÁ*(ÀÝY…È;žÌ‡2å:’YÒGÖì^ùV7°˜ËrDƒ¨+$¦¡³67*†þçÈŒˆEmÓE)ˆ¢>¦“¹–gÉstèÞ^Z¥¨|…mv3¡
ªÐëgì´ÉíÍD
Î§/ž#.5Þ´ªD¤8ÞË;ñ]RØDfõ!R`JÃ4»¹Ù`Ã¤‚äŠéÙ°c+àß†SÒÝ8Ž,O°ÀÒi)7ì[uDÿ¾ô`¡wtK¥gR¸,ñÞ’Þ *ˆœŽ™On`å$"|MdVHËë¨1%ASÂ·Q)ýôþGí£Å°`MX4ÃÔv®“A¿Œ#6Ü2gãñôë˜6èÙžŽ1½xÍs0g‰©À,…ì€Lg¢Ïê©µ×­®¨ž®¢¡f¦LVZC¹Jä¼ªŽ~Î3u;µ.€*§òT±øA¨†HuÒõ®}yS©ý6MF@7¿™7áüDÃ:ØJ/SáCˆé£”Gƒ6FÑ¢Œmƒ•Ã¬iYº1]ŽiÿUå-­)Ys¤ïøÃlÂÙ”uÖü¬¤ˆWîM+V><ØÄðO1c‹Óâ²‹\æ1ìKÇ¦ª\.·ÑÇ$€ž·Å¹rðÏÓ«¤GO¥½YÖ†k˜Î§q?}.åØÂ¸2ë$k`ã_ôž õ™¼‘&‘Ÿ$+?lmbi‡j	l(öræ)û–•}«ÊÎÒñƒÕn>ã¡/çÌ—ws¸ò1/ç”—wÍh·Û†Þ$]/Æé¬,1Î‘Mb7´Ï Î]
5w4šý†å×„ê‰ìQÁIfj­èqv1¯4Žq-g ãZîHà€âúl3ËE[À.ÜÓ²K;ûÒîhðKeCwXNˆ¤+!ŠKFï‚²‹/tñ·eßšªX‹ÊŸëEa¸bRªý»¼Z8ûk]áÃVe.±“qØCïvû+fÎå¹»±òÚce+±½UÙ9zsÂçÚÀ‘ÌÇH"…äûfWs7äIèUøÔ§Ñ¨?ˆ'Bðö8Äx ê]£™¥[×½¶}ÊS(ÃŸnk<.­ƒ·ã›R#Ñµ&#6à¶ŠsØ¶fb²E»ƒ´÷Ž•Í3S¾±"VÑBÂ`­x¦%òi¬(;j)Ž.±Âºr²‚1ßHÞ‰±QYyÜ;õ»O—`âŽPé‰þ±È]ö¶À]ö×®»,kË2.#“²­*Ù‹1YËµÚ5–œcï„³Œ§Ö«Ÿì4ãEáºÇ÷_Òj§»$[qÇ½o¡Àw|ý¯ç÷'ª³m›RÛ3-%‰wò@Œàõ¬/Ö×ÉiE©¬èt`£ó/EV(cþhÜ.ëÆ6K¥Å+|)EÏäN‰mÒéAøUÒW<?4´xâ›iµ{©¹¹ÛârÂ¯>¡Wc8
ZR¨Së ¼ú0–ƒå4¸Õ‹¶º"ß=+B ÉÝ%ü’½Øî@’·7‘b_ÈÁê}qÆs‡î²Q‹GfXæ:sÃv¥Ïgyw`f†œ¥
ŠžÅˆB;ˆZ*›8„óÆÕŸ^”Ú˜w…~È«² Oë‹5Z_¬Û:·@]¡å)ikžÌáÔî®¢uxÈ»¦¾¿EQ¾Jò{•$súý¶Êmˆ«Ú;²Ê¼«ßÅªöAüNŸ-¯-1w€¹dò9¨ÙLNa…VVGëuá~|e8aÖ0þ0€økµð^‘Øõ¡àXÙWrÃÞOg“pM6Ïâ¡¸çX;T
×
ø‚¬ÔõqSZ•Lf	)ãù‰HzÕÎE”¤æ¢ã0Ò£Ûr£]‡×U‰ÞÃü0t_ÞhÖÆ‡Màåñ$ÆåÀ€Çî	õKnÅ‚\W°Õ21åœéóä¢"+²“‡Ob@É¨¬ZÙÔèàrv³¯èÃYÕ>Ðµ35*k§3MEüš({¬öÇÑaréd‰Z¶ú«Åá\EÐa¡3×”…˜œ#»üéäeíÑÄU#uG3¢]-HÝQÔ-väp«=(íeSìÇ°¨[§^ëgßÛh™
§Bóg+Ûhê
Y¿	¨Sè¼ûÓ¼*l·o|y°©‚qlŠ0o›×³áàè{qêK¦"ùÈ3à>“Ù>1<ñ&šÏ®aF	öJ£þ|ôÛF³õWWø ÜªÄ‹á$”‚.¼–H'²€¸¤èCã¥f½¹ÖwÃf£ïèà)H¥i2¯“«kŒµ×K¦°<Â¨—ôÃn4ñFR¬xÙ,ÝPB¥§XáTUŽ±ÂC¨\¨
hQ©*EW"1m©’î„Bã½ÁI"ÓÐ¼®|M`–ñ.ƒNô&ÜwºoºðyÐ›t¢³8„Ä4ŸúIÇ<•ØKÆ²¯Þu<„E9YÈ—W“¨?oðý- 8ï]£k^y/l4+¥*`òXä³‡ÁùÅÉüþÑXqŽ¡VeH`¾·²?¥vÎÃÓóFØÄÒòóŽl©£ Ê¯GÉ,Ø¥.^>9?ÎONÃ–j¯bI0ÄQész+$Ý$é9	ôœ N  Ì¢ÄQ-xS?¢ôŒ]øŽ;e:î¥½wôù&t
Æ÷	lo7Ñ$¡ N2Àþ§¨lMÇïì4Eƒ‹8V”[€‡;$y5Vƒat5Šg çt–L&˜êm‚ó„›V0~Š†í"ô_ï—¢¤w¨œSÑ(,¦ õØY&#Þ'ŠX¾_¨~zÒÁøzv+:ÝîE<»^‚W¼<œ¤Ãžaú)ºdMR	*¯F ¢ðÒLnâ©‰ÝTz¤âó‘á¨ÌIˆ!ñ_:‰E~Øl@0d£T“¨– 6ŸÞ§³	~|õ4¬Ð¨°r|;Žqd”c õe%34‘­Ø°RRÊ£Ò1WÄVT‚HøR‚YìÉÕóÑ»Qú~$>#rÀXÙ*(á% HÓº :€JPä”€µàTIs---éŠSÐ®üŒ$\ÞÇÑ;ÏcÄ¯CÅˆèÑ_BÀc˜ã²$Ð‚i4˜× S"×	rv¦A£ˆsOË!By†œÖlÌ”€ªN	 Üh&æÈÔu$—ðìz>ìŽ€E?Áxª1æ­,!þÂ.‚íz=¸I¢ÄˆI4è‡;ð}–†SÊ·×®K »QÿJØ3Aíî•¨’èf£.sÑãƒT–±[u¦j"9”›Âc`ªïàŒŒ$)ßNH‚Ú¶j{òA|“Äï;éÞÚ–c!Ï”‰|ÚØÛ•#â˜Æ¤©,÷€™âFNtOR —¯)˜‘˜Ôü\Ô’ Œ0	%¹ÈxX¢GìLM#Îü(Yf6$|‚È­^â´4{=$CÝaÛª×Åž,Ê\JÈÖ.UÎØê•Ú{Ì²6¢ƒ“	Ìü0^ÄàŽ€WàÙËTï-Ðþi¯¥v5O•Qƒr½V¯·A”‡¿»õ 7üãÿ±IêxZ7†í:û/ttÆùª³ê0¿f‚¤>¤z(s3­)xcw!›f-áÈŠoà:J7Øv'ªoà_§‹®ð+#ì.DTV+¬Z¹¦/>ÓÙ¼.OWsüÉ¬ŽP‹õ‹C»Œã>¦ªÞˆ§SÓ%ãcœbµ(6LSL/”Ï%;&5Ó™n"˜
ŒûŒÕ»—Xë£%bâÉ£ø2‚Î§†”±]i€PÛ5M©8íg0ë˜°³Þ´HT7e’k(Z5r=ê°ØdÓzÜÚ!X0_ *!Lå7Q…•‚“ß~À ¡Ã˜*’?ÂYÂ8¿ìÑh( IÖš-¦b†,xˆs 
wh‰”Ôé¢š3*…Ï°Ò
zŒkÆ)AC¢¥ãŠ–‘;*§ ­µÜÁÛrR:ŽQ$ õ«‡ÅÉB` s‘4A¼ðN%ÉÚ½k’¨ÃëZ‰Ô†xÏôZnÌ(U/Òf³ŠD|rà³“¹L-]:%vñ3Át$zƒg³D+tìJG’= IýEð2zõ4à’n€—ÉÃˆÑ×ë8½Û§Ï´\Ñ‰‚ùTð-yÔø€IÇ÷‚ø‹8ôd¸ìN”)öÏgû{2¬Ðž\Wæ…ôŒ¤Jß•i°úVã“x~ÿ!î¸PèE4ÅKsqv#”oŽÇb³DÿP¾­\ jN˜l@qÎÑkÝ#’	¹î=luqà“«â]$*Ÿ(AP66¾>l‹¼BzÈÛŠìéPÑ&å9ª1@N‹Á©q
•Ån­ISÙ@Ë
Eõ Á<HÀ"¹<gC¦5‹G&Ó§pÒ¹”kñðÛQ)½¿?øòÑ«ÎÅÛÓz‡cü«tuXŠG%| ã¯ ê"ádÏK¯/‡»%ó¶¬ø°„ó‚çèR ³†–È­ð°SÖ‹Céc˜ÀòO`ï¤Sþ!p<Ñ­¿£´çâˆ•N6E¬-Óëâ÷A2)á)‹2ˆÎïöƒ¯ê{õ~cû~#B¸Ë—V£×ŒÍË¦~Gî®æK¥o…÷•÷mxE	…½^Y-ã2¨ë\M€°Ãzwo·áÍÛlP›møÕÜËk3ÂTCÐ¦p—ñ¿æm6·°½6ÀØhäµ9Aaï«ør~|/­öZ Úö®øçoN¤‚£Ývûr'ç½=phÞÜÚÉ´JRú@DÎ—¦ÿÎK
²/…?©¥‡¿ÇR‚ß¢!6IÊRÔ‡Gª%‘ÁcßèÚLRpõÄJÅ¢Ó{
N¾Xõ/¢Þ9}%«°áÅW)ì;ÏJÕà,í¦³´ŠI_nè@[Ž'°lªÌEÁ‚›#hÐó3Š#I3›N7ýÀ@ºŠËA&#“ƒ ^¿Ñ1UÒ–€2fi1+¾ûÉ$–Û¡È¾ÁOS§È– ‹,ÔæRWäFñÏÒ!ô»m2j/I°.ºnè¶Xvø†4§çoTúñºž4ƒº}ÊÁÁâ§Ér£ÕîÇWUµäƒú/àónc·Ÿ1i½¡Á÷q÷]<€ÍÃ AVpÑ Ð+DÍ‰½ ˜B—ü8ÙòcpÌì{‹2Å[x©×v^TyÌ ó‹!l~t§ýãU;9éÖ[8Ç˜t=hí²„è˜XøÕ˜-"“á}»ÍJê´ïõ_dœ•·in_]Säobbv'¼3ÀU’Ç[Ayj´,]tf›ÑèÏ&‡qö'-L£iP£×_wXb2XÃÄï®£>2Ùz@þôÍ6ü
ñq]Uÿ¯µíÛËK‡â[|õÚ^îâÛ6‹o?ÒlX²†<ôIé‚Œä( OBX_B{‡³˜j*÷y$eÈMo¶.<‡¼ÛeøZi9+|¶ëõB²ÀÄ0É¥ÈÎF‚ â"¥j+Tu(³ç³o­Ü…ß­½Ùxˆ¾ÕÚj´Û«Î¾¦ü=d.åZ«…ÍvŸ0©‹¸¡ ¼cjÑ
‡}
P¯5§„ì_¦½ùÔñŽ	¹™»Üúß^|øŒ/[žd {éq D~M35j‹Aÿ’HÕøx=lVm÷Œ¹ð-Ñ™2Oúª"ü*+1)ûû
|¡¬I½»òØ–™P‹8Û¹4Õ6âèÈŸP8OqÊéðOòæywÙ,ÛD©åð(>½÷¯ÉöGÞ<6¹/.^ËZÓaî²ö@)/äˆ«0gYî¬Ìè<7È>q¸"=`1DÄ…K ñ‘¸ïÔ+DfZI5öTÕZ!],åŒúlyGÞè£·¼-5wOÑÜI°Q_ÎMÕ`7OzïBò„V=¬  NbXœ34œáªbMÕöØ9cQ–ÄŒÈ[£$­ ÀgÇö2ñÙ:Vh¬¼A>;aorEÞQg…MJ£ÆYé«îEÅû°ÛIMÞ ,›†‚ž¾ª_6všÑƒ5áôá|˜
uB„‡:}¨[&žä­À¥Ôf$z:5m­"ØäQ‡6 l7éþ!‰'åzmKŠðMn|–/(y™j.õì ökwÛ"
=[žã†»#Áä
âÞ¥³ò>ÀH1£*9´þÕÖN»½½gaIlyÊä:~[a‚rä1i×VË–Xypù»®{ÚQu½DìœwüÃtpàT‘p›y#Ö<;Å³Ñ=jÛž5/c¯·¶¸Â¤ÞÜÝêíx×–ä®KDÇ…ÇŽ©xJ]`äËÇÐ«ÊáÔÅ¦ÿ\5Bç)P³7›½øn¨É€ñ±ãdZWÏHñb}½
u±h¿×Ünnü@Š§ÒW{‰WŽkn"¤¹—„ÞÞÛÞÞûøA";Hsuà£ZÒšwäPÇÇôc¶°­ÏBÏä/¾ªo×÷/wÒ“¥j#œÄÊõZ¸£-Ù¶
6<•ûy?¸Nú}sÈáÊóí­"å¦ÄÓWpÀæ«^šóª…†Ós†çŠÒh:Ž{@ìx‰ð4ëÁ&B•Á	¹éÚÓ'îM‰J>4ÜK ÕJëŸC¤Ï¥,ñ«FVP÷5s†U è[ýü+w?&CÌ1®K/2†øYõf;"arí¨Qk¬rQ²D<×êÎhÐÃ{³?Õœ6?~N3üŒÆ„0D6Õm_'ÄÑ´¼HGQ/Å(£”t!^‰;_;Ž±ÉŠPNŒÝ¦ï©‘sïÝ±9pÍÀòó+Ÿ¥¾4˜ …@sÛ»$Šußö±ËI”¾ÛSÍë©®ÿšlu­Š¯ñI<fáj}Ø“–·Âò(D_Òâ	ªœF|OÕDÎ…æUDïå³B¢Œx×ØÁÇ{"<(¾²$›ìjµ†LvîEÎ2nl-ßeòÕe|ÙêíäÐ…¶SÐnNpxž¦ñ1b
´1âÕ%Z§`ØdX9#ØÄ9fc™N?-ÊÝuÈQN“ç™F½}”ÛTöYPÞo\Fq»åêVö]¼¸DcË)Ç»ÂaýÁ1vË•b±JÅ$ÏB”x*7V©­f¦f|¾Ÿà¥™XK×{§ýÃ2 àWá*ÉF‰šd§ì›’dFVE™~6ŸZ;{.µ¬;ØCí-?Y[Ú+¼-“¢Œ‰[˜]s'µ„’ùØ¥)ž—ÙçªNe}ÉNVØ)‚/rQ‹”è¯œ†ï•U¶°$
0è)ÞÛT}‘aw¨¬·m›kØ·—ˆÄ«Þ²²‰ÏãÁŽipã·ÖK']Ëw.òK3í»qIc+--Î1[¶	#Z³Ëõ¢^ä’Á‹´2“?Ä§!P1"Cá~eŽË—hS®J¤³,h]ê¯+1>ö0h~5hRÈü]†(ˆÏh5C´ÀRŸ”·˜Zö‡‹RûêÙÝOîù&is²ÉOdâSÈ¶¹ÚŸëwšË¬¢nõÛm=¥”¶Ày+WR ê+2JÕÝJf¯ko”1‡ˆvL ?âj¹`ºïj=ÔÈê9Ð×Mÿ)º•wˆ±ô«îÉc”‡ywWOG¾Æõ%È½Lß­R4çZqµ=TÒáTzþNô]Žävó×-ï”,™öÂnvœ#ê´ó·¼¯”íþfä \ –™›Š	A(¢O†-x÷õœÚ×;šêÛ˜ZnåM×¶€ë'LÀXÿwÐ­CŠ™Q­6Cäž;ž}œž²XÀµCŽ.k¹».‰â£!“#ÅÁ¦pý8að•àvÂÇâàº±Š«Æó¨5dñÑ’¸ÁOÿOËC`!_ðƒÍ1¹‚l*@ñK?¹QaØÅoI $ ú2ƒç'/‚Óã—'Ï÷ƒó“‹×§Á×AçÕË‹³WÏÏƒ0”ð³¶h¿—ÍxÞ¨òæžò†FmGA-þO+ÜFTwE„ù2–„#]R::S—âp°I%YMa¸$}·¦.…Rò¼H3|Xª—Ž”œö~#_¸sáÃV¦Qa|ká¯v®œÔÉq­LÞƒ•ƒMÑhA?O?O;ƒOÝMÓÓMçi«ó
ZùÄ]µ<]½|ÚòvÓdÝà¨s{µIS¦©îc¨G;¯)2è(×]½ 
i(S¿Œ\O¸rã;?ýëœ&£w+‰;"(ŸÁÄ÷Í·11¬HnÜ‰ ,ªSƒˆâ3ã_ù	^ÇP$8zgçuåØ*Úó -ódš<Õ¹FH»V/¡ª
ÐLŸ¢[øT¯ãgÔnÃÖÚvÓ<y†müX:B¿W™"ƒ!å‚cNh÷“É¤A…XFŒi<ûl ÆSF‡É
p]áz«³`Ü¹½¦h¯¹v{°ØÆÍv^mÑEûÜ ·ó@¶æÁ¡`ÙÁ<‰ÇÇ´¡”Ü,&Òˆ†Ó5Mµr}V¤üµá$Á#8ÓÛa Sp>yôºs|ñìÕËãçÁ“×Ï__\¼z©÷`J´‹x‚²\H’ð2 þó?þÛœôç½H†Å0¡¨™e æló*¡‹+sÃ´Ö‚7äºþµð¢W1îÈ:Ž^¨è>ç"ºOp>Žã~–A0ÍÒ+å9’0¹µ°¼züØ%<œ™Go_¿xÖ	?õ«àìøâ$8ósÆgf=ˆÊ	ü+ËYŽÖ^I‡ÿ²APqùŠbE8Tlñ‘8Oê9É?æe¯öJGÂÉ21ÑœÃ
›{‰›`«A2V
‘`+½P[%ö_ò³IËßƒ²G*P@ù\ìƒ^DaÌE”ÀóÞ?ÆˆÈçbª‡ß•„EL	Ù&ºp‡3öIÞA¡i%ÃRz¨Ì¥Ž°L  ýæ³[= i¦Ý)=ÔívP1’×äŠ—Bb¬6¾J}œ…”y(ðO	ÄÊì^y'´x;'//`©¾yvþëùÅñ“ï©Æ1Ó2ç‘Ñ‚àÔ&J%¡—8,mÉJµ/|Ùú=ØrÀ9{öä©>n½8¹8{Ö9y~ñêYçé³WâIÐ9~ÞyýüøâÕÙÇœÀÌAñEMaê1ŠQÿe¦N9ë™)å‹DÜè§t4~PÀ»<æeW"^ ø|<}ŠÇÈz}ê^ÈhDt|¢ò›n.³-‚W·@ÜT‰!Ÿv!)³Ð;w[J-?Ð‚Ý™*¨úóør†¢ÞJìé(ªŒåYwë‰>[$ú(5Î¹{åXÆ±²aã»‡4ËY}ÖæâôÎãíy`b¶{ Ð<¶	NU ¨Ì.dŸxMEV s¶ìDp”æü0 Ò¨ã'òS3½Æ$]C+¤zô½BÝN×©çÊîŠÝwy÷TwÓ
²óƒv¾ñ·æž–]
ôÌº4¨“"”ø¢ä9Þ4ÐëþwšdñcwõNÈZ«¤g”2ÝÙÄÎæ#Ò£5¦8spªÑa!u„3ŒÔCÑÕbM³ÇÔ•µƒMh0>\ˆç¯Á<>9yôð¸ó¢ùÍñó×t
ÎßRp?³W_´ñªD‡*ÄÌPO©íõ•—®‘»€ä%øñhú>ž<Cù×]Ä…Îe<¹Tó	—ÃL¤h+·ïá|ž5¸¢¶£@ßá9 ªêÅ×é °rX:¡dM&FU ¹­‘Ñn_LtI­ƒñòDû¹f7ï'9A“JŸ´o½w^qÔÙu<›¡²éàNd¤:Õ
i+IóÜÆP`S-²ßbhùéþ_ÿßÿû¿T’Å“—N_=ª>>=={u’ÝË'_êl‹RÌMˆËK9£øŒ#0šõ®)Ö•	uÆÃl}¹pÛVO€>Šç°¨ÈÿÃ­Á~yòúâìøù³%ßÙÉq‡>t^½8}~rqÂ†PÎ;£šýJõ¾*°ØX¬ˆ“†Ñ)E`;Ø0ä˜aë†¡¼›’âimù˜µ]’"|üþ(žö,]ˆ€ÿœ^î³)‡	dmýÂšÀmc™^gƒB˜M0Dh,B.‡Ó²¶sÕ4^)g«œÊ\8u(úf™¢mª“žV©¢Œ”ùÙ†ÙÄ¹‡ké™±O®þêÅ«Gð[pmKXä&9bšH[E<¥ìAÇ2Dñx¸1GæuóÈ(¸:âÚR)ºà]F]¤6uÍ/wIü*´lG_SòƒKôEöæ¤/K=$¨cëalÔÌj2¤yÐ°Õú÷ÿdÈ¯\8ñ ³aÿ@ª¡ÅW°ôèjƒ5œ—·èÐ‡o1ß„bñ‘Á©	tÐSÉ]’Düï| å¨Xu`Á´;ÅØÇÂâ€ms‡›d
À’!N»(è•oÄ˜w˜w?ŸŒPÈ8ÞUA—3,½ìF¡ä¬¹¢Û­«@U8"uLf{q5X¤sL‘9JgÁ4ŽýQaý1X< â“Æ™:üqcj¤1‹ž\¡JwvÍœ™ÀÈj¶VàMÜâÃZN-ÂaÂS@êŽ"—vÙpÕM[ã#šqjÅ¶c*à©.F{Ç´'Dø@ž227í•2f÷ÔÂD—— îTÆEìP„b~*Ø—·æâÇ (Œ#,”Ð#[,œ©øüÙÄ~@ÅŽ¤q*†­>Ø„ïž"6*óÊÂ>;MQ7œ- O&¶•ò`&¬–ÂÝ?’a‹éìu?ßð(D	=`‡Á)lüÎq’ˆÛôSt¾QÔ¯R>q°Y ÃjÎ4â/ò_a”åµà>"¸ƒ2Kz•¼‚°‘üv~E÷ñDT©ã9Ú”yh B6Hûó†×'cgƒy0ºóØìY¡‘.ÛVYip458ú~Éà@Þ[qlðÝ&Bx€lùžZÄ :×iJ1qÉŸ‘»ÏwXÐñˆm'È.z½9ÅFOGÀnI M`À˜6ÂÏ/®à¿ âi—<]O“K8;qÁkŒûdå+K¼R‰\ðýæ&ÈU!†ÆDgÇ2ñÓ>Æ¿Žw†÷TTg…êá»Ó§åñµñšÉ°^F/ééï|™L“>P¹±r”å”|¢3TQ„^Þ©±…_±ªmîsò

(
û8•¹DñÈCÉ¦Ù1À±eLïÊ½F5è5«ÁŒ–Ð‰¦.«8#øQÂd_%ë5h¸6%Uî5áoà×Jp01›¯Ü
W²Â•¨påVèºº²BWTèº¢}|ÉR‘(Q)YæƒÁæ\rJ¢”Á %\&} ÛŒÖð$FÀq1A2B¡N}p/ŠˆY 9­ZƒÚéÌž½|ô¬ƒJÒs–ŽÖ u$’?8v/,ðõô:Ì:iŸJ==yùê9Í©ƒÅÅ%Q¦•\]íøXÚ.:„©	Å‰$ï=²íÞ©"Ú›è;QØî¦I^ÊÚ8:¤(ÓN+­mje§I4Ú-ÙÈî®Ý&ÓB²Ã–BÍfÐ¨íò2²aCº+ Z]$jÓÏwJÀV8$–—·ÉHW¦–Óõ,ŒíÔÚ˜	LNAû„X—C/j¯ÎŽ_>9Y›ˆ0ùkÖiŒ­]#þ1Ó‡ká‘¤ô M¨aºé¥­Ú–Ót»AM7ö¢ím·maGµ)W4Žs.ÍìH3­h¦`XÕÀ»+ÅHR%§X$™ÆúÓ¬í*ŠA¤î.%×>-‡jÖ>}šÙÎ¬ù\ÌµóÇNmÛn£µCMìí‰%Ýjç4a“ ²i·I Êêr(îHÁ3È½) =Ì¨Í½•) Í)`ÇP ýýîÞÇÎà@—“`aª[£Ž“
ö7ûBiú…ÂªÌ4ëYÙÖ1`­¾›©Ø„©ƒ2n¦ðx›ÖìßQÌÓØ
^µÖ­í,kmG´Ö*n­I­5êþÖvUkP€ZÛ-n­%`Û^Û¶h­	­qéÙ¦;w–ç2‡Iþêµˆ!ÄqWS(šT{KU’D‹1ÖÖ„—x:1/eNÚX®£HÚG#¢Ž›ß/DNŸBÅ›c7áßÍCøûÐËWnŽ‘²ë>¡YÍÙè=Ü”\ïQ££‡ôø!ýÌÒY4x#kÜ‡®+²€Ûl?¹¼Ä”³a^GÇ.¯"RˆºÓ2«ÀŽÝˆÃ½<(±5w€#áC]¡êä©’³M£›ØVÙ…:x„Ti^5êej§Ráå=ùXMŸ¯°SÌß–S!·—WO+…Pá‘ð6vÊ}øÂý”¿WÙî¯LÏ5¬õ)h¹ñ/´l*ü-IËŽƒÈô,k~
šnþEÑt5øM3µ­8l»Œé%ŸÚo"žèZBûò‚/'Üéï&3h@-¦Že4ë@ £> Œä ð[²†¡…šOÅ¨:¤Íp¸…ý0o}aº8Ì“µ°µêêT‰´Š‡)
Ùcý­´ÝQ=\3É…£ñÏ)´‘zòQ¡¾™´2´	âæ&P‘”l©ò³q™Ø·Ôƒ°o ~HTu«U ¹/bd>Ï1?‚J$
¯ÃZœ5ÿ8P—8Ð®—u]Ô]Ÿ9Ämz8Ðg%Þ˜”d>K™”df«2)*žÇ¤$äeD32«\”ˆ£"ˆ75PŸIŸ‹Ÿå±³n;»ûždxÕrVUÐ‹l¢âãD®.OÅh„®"'¹9î"8ÓÅôcÁs÷ýT_)yÞÝ¤œaiy{Hi2úµL)-Ðºk¼º$UxA¶O¨sÜïÇ}»[²hx!0h--[TÃ<Vñà´{–®ˆfM6 øüt’^MðÎOw%T dõl”Ì~o¶öÚzƒOMÖ&=|‹ 6¬öøÇªjS5È^ZÏxÊ6Qq02„™8ôýÂ[BýŠ¿9Æ\ÐÎœNÉ¹…ügT¹ÈúXæ‘Z˜¦g^OåÕøþâ&~šLaæ¨3ùŽAò>™^]^N‰PêzDÔ5^šáeäÂ	ÕÄ ×Ç„Õ•ýèÕ‹àd ü@íwŒÇCJÚ›c±jE‡‹gýò/·Qáóá¸E5âµÛ‘ºEõe»žñÛ,ªjJÙµ¯`QmSÊ®­¼¥Šêª2Ùš’¶
kbOŸ"“÷²^©T¶¶40_V]³ë+Ÿ­¢ÊªÌ†’1DUåM°œNTItË<¾z«¤ÝŠ¶€_ ²ëfª—L¦´ÝšmC]Ô’]Ò7ƒ^(^Ü™&rÀ*j‚
Ø@p'¨%Uu¹LÊÚ¶¸¾,•©­Ýƒ–Ô×å\4*³ábì©RvmË>¼¨« Ý7Ô.j‚—s¦ÎÕ5`JÙ h×ò¢Êº³ª´Ålá²Ò¥ÀMø‚ÚºÝ5>ž¡œ£ß×èJp„áŒÊM‡ÐxÐ"PM1_}ê•ñtÉ7à§pd…ù2›/ßNkQ¿r=?© Åè¬J7ªA9çJureòçSƒLPŽkB©‘Gå*KlX¸—Õãr0ÎV¼17„IŒ,{UÚÜ¿°?ÙÝ|ÜÙÊ¾˜ê°V©Y)¬¿DIÕÜp¨a4ÕÉÀ‰†ò]”MQ}žP0ˆèò‡ÁMm–RŒ“²‰/înÔ1ÊÓd0xªÂh—o˜é’Ä£ž<ú`vwÏÀÉ%(;îŒÈš?DÕ;“jHÚ2:ÔýÍ÷¿ù¯~´[ÔƒnU>˜x¿ùÞ]3ß”¡û£ Ã©jäQëë½æm0òÒ¬å#ÛÅ˜‚¬]V´ ]½Bàì­pIÊS½²j¯b‚•ýtrc›ñ™“Ú—¨¶Aº´NAJOñó“©3]QñàßÍãÉBð‡tr<”7tÂµJ„º“¨w]F3@6ü©‘u(NGmÓ›O„fÃ¬MRlÑT4ê•»ú¶þk¦Ý´«š¥ËÓvsõ¶k·Ý^¹íæºm·W‡»µ¤m9éæœµ|:´lŽï’’q»´Ìµ½ãùuP:ÃØa0›Ìcwmä¼¶¶ëœ2îŽšSl]j'Z—C†(%¬N5ÛÐ“k¤ÓZ‚€O/^<‡R¥\ï7äí¨R@Ï
)|ß(×±Y*=Ûjµ’ÃÂÍixå9fê—/Õg6kÎÝdtÄØmt¿6^½ÜöáÏãÇÔc5$ðeBTBk¼þÚ©¬¨»µ³(näB&¬ËaeR¬ß?KÇ«/"ºê®dñùiÒ¾Ú†Ñˆ<¯8-à_,v¼ÂÎ›·ä¹bÚ
_;9=â~-P‘?ú†ü}ôŽ—úö¬(ÅFÁ@¹Ð­ªÙÇ÷‚Ê=,uÎÕy !SQZÛ²øj°§é†qŸ/E!.ÔÑlåq·oû¡»BË½ø
€lX^ ¡#!Þž%1ysMµ{-4¡$‰õöòk.3ÎË¯¹Ì/¿æ2£;u¯ÆU÷ËW©­w_aCóh»ÅKÿ•‚»Ke¯¯¶ž¿²TõAž*;ÈSI›–\]vá>mÎ³QÛÌ.g§¶
lÕV¹OºWc+&ˆÙë˜º5W²–š(ï´ Ër}Ð’¢åßj5˜S66î¼Áœs¶°ž×}7¾JF†Cs…¢#=lè A¬´l|¥²ZUè–nóâÞ#®èýôùwNEè‹ Ã=[Aˆ`=Ï%bNF0ÊØwŠò©CX4oy¥J³Üo•ÆH/NQh˜’ªÎÑÊÐÜÚ;!4RS&fˆ¢ !ÃsœFº²²¨pêã;É+56Q@ ‚ô†¸€`«÷-šûÍ÷oYÉÁËâ7‘?˜iþÍÍ¿É4ßYÖ|§»ô]j^Fû!è»Ë _£ù7™æ;¼yŽ}(zàƒè[§ÕÏ>È€8g?¦¸½ÇŠßh®PH=dtl}BŒ…Vß=Àò«€‰‹CôdÊob8*< IÀøÍ÷ú©‰ùÐ¨ßtô××4'Èƒˆ] „SÜˆìÐŽ¢óí•Žà\ô¦«õ8M©y“?
Z·Ãdax¬âN:v'/ò{pÂ:cð®%ðGL•ßéAa”¢Ì
àt0¿
“Q.VGðW¸2r@Ë‡©Upu„ÝEˆyÿÂ©‰Ëð:ñ:ðz¡=ÔÝÃ;M¦ºÈVåCQ×’‘É » |R§Þ6|èð4§@é˜¨RÒxé‚À1)À¢	7•$‘_…8/Ü6ëqø5YÀ—t¢YûEkßía`³ÛrzøëÿÍ×®ÿbgéâ·qQ°øE ;Tª°-àŽËžq‡¾W]ùŽð•YùhFÿ&ÊÝü»ÎÊçLâ/gå3&ü‰–¥¿ƒ?£=¿«Ö¼3µ² ¨=ßƒØÏ»ì•4¾ïa9^h?ážß]ºç[èXiÙó}†¶—»îùÝÛó?jå¿qW~ç3­ü¿°µùùeŠO±ãßyõgàú/véw–.ýÎªKÿ‚EôÅJ¾ëæŸ»ÅùX€R
ø•jÅºª8²5_‚x¿6é…}j¸ìÍÝp"Fàg×®Í§ñäÙ2sŸ<­nÅÒ¿‰0Q²
ç¥>=2ÍéËhˆZEüÝ@g.=(lÊUI—ºƒ´÷nI%Kó,ãòžb¼€‰)Ôq„*Ý¤/˜:ÑªÐdwãK ^1¯°}}YZªw"û	y¹ãêÈþRPó6×ÑM<Ú ˜–¨5„Ó:.3Z¼E<û’Òd¢÷büb¡vÅGb–Œ²/™Ê˜žq¿¶£ÒŠöÅ›îK€îbÊzÜÓÚJG‹M¡q_]žL&´©×kõ6½hÿ` g>Ä§Í§ïÎÕ^pS‹®âGÂG½¬VCêõ‹`™Ï÷x’fÇËn®‚¤Ó¶²îH<YÒYN¿ùþŸÿñ¿ûßL˜Ó_wNž?Ç€ì¿zuöÍ—Ö&¤2é†54nØ·ƒib¸;¶%Iüd7ÉþYÄ½Zp,¢¤N…|b‡èäm*ìæ4Zãšb&	ª©:`Óó	í[©« û§ÿå¿ÕƒzýòÑÉYxñì³J=¢'çÏ^àƒ,ö#á"PÎÃp1;KÓ`¾Wˆ]‡$çÄÃ£ã>fœÆ;Ï}ÒÂÃˆdD [a
‚¼@ÚSè˜‰&*®f <<nöhëÃ’žðXK=³Í+¦RñÍíŸÉ¾zcO!~ÿ3ˆÒÐ§BdõCØ-ÝSŽôéu:ó¯ü2x¶CÓSÀF*-§Öž”/r&˜ð2NLœRhk"­‘Q(™H¦æ–Iî"ì0‰òµØ'6=D3YÃ M›!‹!¸YüÙ°ßãNç5‹´OT#ö'Œå,‚è§Vto½ÖÊ´¢Ôp³ÚÌ?ãeôì¥;¡Íj\—;ÚZð(Ã1$a™æ0æu;êË§â'ë/òU(‹Ùa:_`°Íçi:¶œ‰Ç“ø†òt*Im”¾/gì¾P¹oÅõSL9Ì¥êÖÜ8;¬(¨%|€ì”2ˆm/ê°ãÚ—“ùtÅ˜ï9†I÷´~jµí¥f;:¤Ž?§¥¸ë„ð1iËJ½
b™Õ^HÝ êµ­6ÊdVyËÝ<×"„ÊY(îg-¨*™ç£$?BËGmÏaçcÍóÆg6&(yMcã> MÉx–X1lûÚ%ŒÜ–
5n¸ef“ÈWsâÚ^F[;÷šºÑáÏ— øœ¶>ßœÃ*šÅGñeð"½Á)&S?¢]úÖœÌÖš“é±:ÄhÖ7 4ôÌ;¨“ˆƒlÝ1k=om¹/¸ù¥m£œ1îÃ×•š/‘ïO&©³iöû ˆ;:7åç†wöØ> ¯ë]íÝ|¨öƒ5[	YÛ›`ÑßÚnƒNéøwR1ûXv±ÝstcÈÔs]1%~HnbJœ{h™ÚþÒu~ÛgF§({4KFót>Õ
m‘»Ø¨t}ÑÌ>ìfv×G¶Bˆ+‹î;Euœ›2u…C»'"×àPu¦EaÕH¨‘Œa`¬öÜx09„ù›ïs)“+t¥{t(ÓPmüÍëgoŽŸŸ¼ìœPV©§"Æ8Êo¢çüR$fIADç
'™•ÅM¥$R1Ìù®/+óël5"óµ=\Yï~Ä
ëõrŽÙmâáx–àaÙØ™*un6KV³².Ežq-No*BïZDŒß5â·¬ÃšXúàŒI·áÏèKë¼¾/ö€ì×Îž­~ë/(Ûw`yï`¤ý Qk>X€È
à¼E÷¦uÃâ9ÆbÁþž'ÀûÁù|rõ;bŒû”	]•šëÈÁ–çâJ¼æ÷¿÷Áb)¥­À2"€LžÈg¡Ñ¬ˆ	ÑGfB2±i”!´jŽ*,¦p°F“I£TqÞ‹G1ö^…©`>¤¿›ÇÓ™Mô5e<÷ä¸•*x—Û—õw^:ù7,ô–ã²»›ˆ]×©*VT5[›¹ˆ¡`Žhª;`Ü“™­çÄ“D+û*Xß…L¬CK…
ò"øó	Ø²ƒ‚0ÎõÂQƒf£@Â€ÁÊ{ ÝR˜1\ÖádÆÒ†Ð£t†	a<ù²¤Æ••"]¼µ“?“u*v!uÅ†a¢ë88ÂÿòD!Ï‘Ž(Äp‹!^øÒµ­á¢Êoæ	@vÍ¦¨¯êz¼”ÐÖv½ÂUä­ïkâ@x‹sqa	r\\®å–ã•OÖ™õûËcóëõê~E›Gf™ÜÏPæ]áý¢hy”¹CZm@9äDHKÜ#ÍšáÅ¾õÕ	ƒÆwµ±Q×Û–¨cÏ§×åƒ›}ÃÂÇ×ûløÀ„ÂŒC–­*<£-%s¼*ÌfDòí¡F)HÁpj½mg°lPþÿMhœ÷IvÍ\ÇhzáòÊÏqÒûˆÚù|<N'3ûÕêe2œ#ù ÙÈÜÎšrXÂFc¯]Ú»€‘&†LmlWòJ6÷à}ËÀ¿v»®õ¾·µº»™ÞSá5Ö¨oƒi4‚Lð¥ÈŠtþúôôÕÙEp~qüòÑF;õ
G‰80Pú¯iL[;íöö^.FhœˆLù²[Œú¥Ê±ÉÁI¡«³(Ý¿Ö¦à<]‡XZ÷DõÊÍ]l³nùÍÉÊÓÙl—1ëMkº-cBâ’”Xà_x5¹êFåö6Ì×î@ºu@È®”¬vu×²åf9ií`ÓšŠ¡u<õè”3ªmÊ¢„)”(R½¶Em,¼ˆ®FxeÈ˜<	wbDÐ wbð<ø.^FÐ¨©ÿ®dRýÚïÈCò$…²;›	ALg)ªAK ~íÔsæ>Ó„ ‰VŸs¼8~òòäâYÂ³³³“³9±íívÅ½ÇXÎD`†Ü…°ÕÒ(iJüC_63¢Ôj-ÚðmoílífèA!moEœžœŸ‰DÞÀ?žœ Ò¶¶¶³H*Å¯ÕùVo;l¹œL`?Æ‹x"”±¿®J7pkQQC¢§X/œ¬NYÂâ_¬óŠÞˆSÆ¯‘[- #ðæùlGC•òŽ‰^Ñ37Ð„Š :F¿öÖ.S©SˆWj{¥#
ãVGÞ
ÎŒŽšŒ‘öV5(Ë¶7‘2ðèÍøŸŽIé¾ß*µø[J¨-&¿*ø¡­§´‹sÅÒj#¤AòˆßYdÑñ¡ÞrÄ^`¶³ ‘âÑ\^bÑfsR<†ØZÅ{0m:è°šc7&€¸ØÌ¶oE&§‹Rè1[ÿA£V·Ê’TˆÉ?0‡›­ÙÄf®&(]ô“9Ê6P0×„rÓÎâç_¦Þ}f¯]ÙðVõðbë}4éiB':¼Àcà$á¦ôôBèoÅæÔø“›¤OÑÊê”4UtSº%.J·dÊJºÇ‡d(áÓ-Üã”g×þb‘-×ÚwFaÑáÑÃ÷àF­Ää,©P­¨MZ(»uýD©Û,B÷n3^Lí:˜òHú³§\>å[¤v‘Zdé+†°b’ÕøJ™ÁÅm³…Côá·,Bä)Ë<ç7o«ÁÂ‰aC2k0Aƒïéu<¸üx¡Í/s¬Ð† £øÙF¢Ê’¢¬%°i}_–¥nàqA}>‚CrN#ÿAåQ"ÊVøüRÑÙ	HB//ÎAÞgˆs‹¢¦¨mÓÉG˜M‘®NŠ8;e¥×,ôªèà¨ §kLKOw±p¯dÉÑ>Úˆ)%3¬|©3t·2Ž«ÙÆS3fäDÚiÛ3šŽ1Ñ2JXãõOƒ.ýú‘n1¼»Ð/âyñ-<‚Ã©£Ê8òºt,gâeÜ{÷‘„Ül
°Ïn¹çÛ'x¹©:{˜ö"+"¿ná9OÍåŒûOLÎsGž!„Š÷H7!~ò*=VB¸À„ö×	¦(‡á^œœ‘c™_¤
,œ-4LÆ– º±eáçá_<NÑïæ°1®hØÃëØh:«ÊkTü¡Åz¥ˆ:üÇÂÌao·Û¿,žŸ;®Å€`´(1 WÜ‚IÚºó$	Ì<#8Ï.ïgí¦ƒ~°[È^ñ:çÏ=r²ÉåÀ’Åá€ß—jJ²Üõ@.u:E _î^F—½BÐWÜ4Ïu ÛÊ,k´ŒOŽ&&²Ù8ì°UÈ—ó(N|û>c
5Tá®P»Â¶µ+œÍ»Ý˜1t‹°_nÁ‹ª|:F±ÛB›`ë;¹·CÉö¡!„Í+è¤ƒATH¸K4š´Íìxvª´°ö|ÛròæÛqokw¯PÒûÿ%ßn­Ä·?ž-¯€þ;²e9$hdË¨‚Þý9¸òåÖN³»ý§åÊÛä†›!*„½Ù\²£¬È–Öç2çKY•9[Ì×Õ8ÚGC‘òl0ŽP}×j9& ¹dwßrWÕ‹ÿæû‡¯ÏN.ÈëC™*ÈMóCå7ß#ºÂ@œ´Â {¾Z_ôt«LÇ]5šæP×Üª*¬±Ž¥ôµ{¨yòXÀìºvxBÉ‚zeJÿ¦&#¤»ù{¦Ålù¡±" vH1cWU»Å‡OÿR!œBœrVê-g"ît6“/ñN®L¶j¤G?èsŠîßw­0†Ñä´æ¤M¨¶Ñgô8ä%ü"hûG®£lº•äC@h›°\« XVÕd€lÔ”nS›¥°Õ'£«rE0¼±“Ïúì-é[fxÉŸ^û¶{C§°â®à%|ïuqk¢<×«OM!h[Þ›Hh3Ö•>ºm»íà¼7r‡e¯`ñRvUä°Ñ;35ä&ME!‰{$‰Ö3×mŒ†Ö+ÕnÚFî—û>\ú>¿òùóŽ÷g½…=9{~òòÅÉÛ“³àñóãóo6ÄƒÜx…RùùÈ‚ßŠ³åÂö³š‘PVL´ê#¯ªìÞþ’îþ)—ˆÿÌÚZú1˜ì¸\í‹¡»/ö„37ëÁ¾}ìíášw‡ŒuˆZ<í°RÔÿ
‹uà1>T¯CÕÐ&R&îÛu¢Ö
¯äl·êŠ²€,ó=íª ºÈ¹¨M>TöõÊþÚµ¿’„s¾ Ç%ÖZF~dëyå‚ˆ0¾ÕÛòÎûè&>âÅ¥çRú÷¿7öìðÙµÏX†/±¯ Ý»Dj7W˜> AF) ÚÕçPxßY² ÿ–.‘ôôÞ÷˜SÀþ„>7ðþ‹Ùˆ#ÅH˜Ý3‹Ã¤*úÊšà/åŽÁ»ÏÜ‘Ø¸w™&<2blU<ôw×Ó~<$ãiLˆàæõˆÏ-[ˆ´ÖR³€&Ànf…ô.Åª—ÌÆAÃö0®Y™1ÝknJô¤õ¨àžLnÒ9lÑÛÎ¯§T†öuO)s•7ùÎ(îf×«âú?ÂFQÖ$†‡mDƒ'*£‹€QºŒ ð.?²G¬k6@l{t„Ú(£á¥!?Â“">ñåŠ‘„‡7»x²±†‚WØScÝž`éŠ6}¡Z;ØOféz…y¦,@VÁ=¼W—’oêëˆ§ÀD< ¡+ß½kLž·³õ&)2ãrÙ¸±ÜS “wýnÝ=S…ð¬>+"Ð( B<D†-qxÜ®ZG/²L1Z&Ç™–læÜ ó;ñGñe4P²_Šè8N)ûÌ ¾!ë­d$.Ì£.l±´g#OagB-àrßÞ©ª¯¸®›ìæ2ë;\·sá#Ë”?OpJ$øeÕ“é„(ÍoÚd¡KÂÊGl“þ¾Å¶§¢‹éì-€Œš8wHvàÑ0¡ålÕK;ŒÁQ_2:†g[-VPuÏýÃÝ©°TF+¹Þkð[ßî'¯‰ôÜ’ºÔzm/Þ«ÌHÔÂÐçmëF2"‘ÜÝ®ðàcÛ¤bbh:8”X°¿UÑš®¬?5·HŸå Ù‚§ÕöÁ“]Ñ¬“¬F;0TÎˆIå/ Çå¶çb÷€¿ÔWÚÌ!á Þ3ýY«ÃëÒéð®°g&Ä0ïKŒã€é‰¼‚Cœ·
9oí	²”’1´V2+r7ëùÁJ~I„Ì50Ëš¡VYWì&¯ˆk¬yÈÐºÿð˜=úmPÍIÑcš‘l©ÛÏ‹vÛfµ{EçV­y_´]ÊÃçÌxy‘-(Ï²`ÖP-Gw˜Ï1ýS³•35Û™eOVnÞ•°ÕÎ®„Ï=™.df%6Ñà“ ½”5±Z_Í%2¤{‰º²©&u+Îé‘-vKì±—¨PJñÅ)Î$]/ÕböºývÜXzû[¤¤ó7±¶Õÿ³Ó“‹‹©škìJíf3{û³’²dKÖoiGW*´Dùé{mù­cªfÖîI4‹X6‹«ž3ÖÒ­ÞÉVB!l›ìÞV3’È#céIh]W¾ìœôï%òg½t-Ë`¬ê»VþÙºÊà[ÖfYŸC4\°ub¨k¶y·W¨r¤àeˆë²»kóÆím‰É­.çµÐo=¦ßÉõ0®ãìKIÃcaç_€Æ–[(CkúM¡&ß”*fVk‚Q4¶6ˆøÆ¸€³ ™‚;ÂÊ^¡¸i]…yjÔeœ±š‚í:eÎ«Ê‰.°-jíÚÞç™{€çG«KÎu»—&šÅ4!_z.RxÞ‹Õ±^FÊå8ùîUâ%äŒ2«ÝèK×«_Ù¥Ð/º,‹2.”_ã†O¾+W\*7žò²Ó¥ç[ÎreBp—j­2ò©V¼¦?d(’ÌxÈt;oìùlI÷É¨Ÿ¾÷äÈ…Ö’âªá~Tã`sÚ›$ãÙÑ›Ý´¿À¿×³áàèû*µ—L;sÀúðÙˆ÷)T—xÍg×éäd%ƒý 4êÏG¿m4[u…j½tXâÅ0&”:¾MÒaÐAÕa:‘„"±—šõævXß›Í¼û€1$}x;M†aÒ×,é…€$ù	„¤Eå—í‘Q”>ï)¦,KÆq"‚ÿó¨«ÊGW8mPU†‘•=ß8Õ†xmf‚5‹$ÖÁ0Å±ó!ÝªÅ“zG“øò2é!ŸÇÂ¤ šÍÅ;4k—'Wœ“«E@
6
\I™û$DýdÚKÆ(	ˆ|…ZÅøy|Î¿-¡ÙnpÞ»N1QÀ^ØhVJU@ò)õ³‡šÖà÷×è™ˆç€çÒw¢¡)ú0D“þ”Ú9OÏ›aKËÏMÙ’ô„óTù5ÒçuñòÉùyp~r¶U{èÖ„tDÁ§KÇ£ aÈl<
†1†2Æ–Èº_ÏƒL`8`r1TX:©'·ã†”—³VÅ(·³ÓgzÚ¥—€ñ!ÐoLãÓ ÏÞÇý}
|³*“íyD!à(Æ0šNcUL0®}<H{”ƒ¹†^ƒp†á?}©UFºSôÓDPþô‡˜Ã?àPðñðñÀŠðéy
ÿPI:Y 7IÄ©ˆØTà`*“hà_—¾@œÖ$é x¡î^u+®Ópê%o*Ñè‡8¸NßËÁ¸tŽAtÅ°„ú2™¦"CÈŒÉ'Ð[ ÓÄ¦w¶Ã ÊzÒœùÃO˜4 "apÞàp¯ð´HÐ\Ç«
š®Àzéáárªð¶¦&0«gÕÁúš&cñš—cDåa4ØŒzé|j
 L„¿ÌyÚA»§öÌÌ)OºEƒè½¨®âî$‚ˆž$3 Îåòš]Ï‡ÝpVuÕ‹ìr’CÀyn×ëH(!Þ9]¥á|¥!iîÃ½v]Ž£õ¯bé¡r÷JTm×ë›(’…xÐ‚ÊÝt€˜MÕDð+VŽ4¸–oÛ£«ý`«¶'Ä7Iü¾“ÎÖ­-9Œ8ê®åÓÆn[’fÒ‹/@,Ô2ð8\iÈÀ0BÃt:IaÛ@F®'&á¹¨%O€@%=Lé z!zÜGÏõ‚æ#$æ›‚Y(-l˜ÐÒìõh o ¾^;µ(s	ÛÕ|b­¾qÌH¯/<\4ï¸¡Ä×A4™¤0åòjéa]Ó™÷c‘Ô5ÁhÐr£14fèð”d‚ =H£	äàÖ{R´Š…eöjL7qp¢Ù9 ~¤›í\S•Ža›fo<ÇµXEÛ›Ep3ôb\Ó·Š‹÷ôõ#Š‚Ž‘fdÄ	ÆÌRL<‘©ëãªËË§ïFX>yÇº:çGíÄßG 7õÆ2õbSvSU[‡áÒQaêíÙ¤éýØÞ‚é è­×ÚB¼Q¯ÕƒwW•ªgÃÊánW_pÿ7§µS°°€|Ç©íZ½b-|à]Þ)M@¹5M¹søÚ2_‡Mëë¾†¬4 cZ®ûT©Ñü]¼€µ:lh¼ÑÑå’ùx5àtÈ£Ý¯Â
“Ñ>]š'Ñí>!Õ<Â‰wJÍ×Ðö»+Ö–-tP€[Ü1.“Ét&ö¡>RŠ¶%%Ws3/ÌEHå¹o@8ëÎˆvWHîˆžÙôµÀÑu	ž¥c6óÆÒ4ó‡Ÿb¦&lí™)53ÙýÌ3ÓÔcá«Xähî;Àƒnì]PtÄé]›óLÈÉQjþU<IƒÇ$„|#™Ø‰`bÏ9ÃèÝ°‘Í{^XÉ—Éf"‰FAFPÖrò|çKä×F(îaÍÉÐe™ 6êõ_™°Æ%+ÂJOb^ E!ÊðøgÏU¶‹}
­i^Hu=Õø†Èâ]ì´9‰ßÃ™æ!
:ìôÌ¬€È²¨ozPŸ¿kçbþ<ž-“aï#ûGlËœOH§°•f°Î%×h*ÒM™£H¯˜	h–^Aæ)˜
kõÒÉ¾*¬yiMKZ“;//”4ÐaÒ0È]Þ¥3‚äc¯l‘ðµpO!Bî¥ˆ³ñÉoÒIO‹"žsø„Ç«9à¬|Á8Êxb‚4R©ñ“Œ±Ñ~}Õ³¨Ìz
D}Ï¹[8-¨s5Œ,Û˜V/ÐˆÌAG!“¥|2´¡©YH2}:ŽÇc®üA‘Eº|ðå£W‹·§'ôüè‹ü|ztuXŠG%|G}‘vð $‹HdK¯/‡»%þ
¤Ìø°„sŽ§¹!C7‡%RÇözq(ãðI	,œâC@‰jŠíÌîç\K©›¢œ¨CQMrÄ}8uÌœ0a§ž8C}Uï7NM¡hl7ºÍ¦[@ž®T+­zk»ÕwÑláöUo¯ßèïùKÌéˆòÕnwok/v‹D=t`»´˜¿jïFÛ——9e®&ÀÿšË.œs
ç“1²Â¯º½Ý^nSé¿Pê²¾»ÛÊ …ÛdCþòr§»ãAQÑÔevözuÞÛ£ª½çÌO7½§Ét”x†Gvó"éÝ~àŒrõûTÏyŽ—á%}ÀÛÂh·©›¼{õ„Øc(‰Qöâ«4^?+Uƒ³´›ÎR<Tn(O58ž ½VÙuƒw\$K8CƒsåÙ¸)ÄÜD“²!ÈŠ¶UFS“SHžßöƒËAì`	Ÿ„ú@º/ýZì2º†	ª  ùJ:¨NF¡¸
CA²~sƒòf}|ëÅÃ59|:˜Šût·2þÐp	¸,XÙÆ¯Nû4ã¨-Ç“Ñî$`–-±ŠÌ4”íâŽ<Ó‡K½â¡M)Æ²@e}ÔpêCÏÁE§&‚«Iâð!|½ƒÜƒª$A0ÕËIÐÚÊ ý*ûfƒX5Íÿ/\Ý†êe³žG»WÁyÅ”ÞÃÂn„²âAÆ†ëƒ‡xû0•z”ÞmÚyôQëÑåqø~‘SP´¢¶‡R3„~ðª3Å<®’{°ÍÈ[%œù1N‘;±¨ÂwûÁuÒïÇ#·:°âë¨ïëätÝÜ‚_dÜT¯Òµ-§Ke(»#îÐ7±'%y³@±¤ä¢iB&ëá•²Yï%“Þ€2dVQ…}víf?¨ÿ¢ª6y¢ÞÊŠt­8^k7¦k×ó~¨”h?æ  êÂDÁ¢wx[š¡üA§mßskäÂ†´4wª°~¥UY¶<š…—É`†œmR†‰ûxzÒÜž\ç< Úô¶ë¾·˜Ýn;Ã—ÉuˆñâÀØË±ßOnŠ·—VîÂ”Ú1±äþœfÎ¾Š?Ÿ—W‰1’L]´§6VÚS…´é»šœõÉOWÝ]2¯!NŸ»-
ôm¯Ö1©¹ò±è]«Iƒ@Íwr¹{êl7GpÚ’ú¡ÕÁ¦¬FK%š¬@J|/ùç6OÍzœRòi<üç³oñd~X¢3Gé;§Ï\Í—çWÍFs»Ùÿèe¹Ò õÒÌ°7gUogvÛùL˜äòµåø+kE	¶7ŸL±œd¬þÙïÎFá$}ÿIdÊŒ$&ØMÞ.ÚÃJvÉìO?³Ó]6µùT_8øC*)0˜¡£†nZøèQ÷¯qG,B¦OQaë2
øN¦¿Úx’ÀN›ÊÅékín·¶½sñþ:q%#G¯ÒŒ£úVk–|yS}\n…mô#À^ëŽc¹Üm7¶ö–°|(-Õ(7òâ/Jœ!f"xÔ6ƒ°Q86,ÿÑ¬jãhVŽæ³ÄdØˆ†ÉC†7QÞ¯"«8CÌ9KISˆôÍ<±@‚N)£??¯3ll-=àëV ¸’(Ô‰ÅÊ•\Päµ?*‹pçÓäÊÑŠƒUËA`þ¦É7x-+å#¾-R4ÓQJ²WÁhï.ª)[µ0è‘‘…{–þ$È!•ò]°#„ÿü·~–¨îò6r”²ŒÖ’{Uá1ëºÞÇË)RÌ,_îAâÓHò¨[üù1éNã`SÜÀ_ñR¨Í…ÇÁuãh©Õ,´Ô`UÆÖ‹²}äZÍê+?¼d’÷Áüöï`s,/a6Tâ+ÏEvÔ’­ß+1 ¾Cv©°+Ãxv†¬4k’éôX{n)[ç¤ÂR!•ô©IáîQ§ÃÒn½^’:¡ÃRk·^::Ø<-±n™–¢DMÃƒWò{¶¦ª}ÄS¤Æ™L³²zY::ÃŒÈ2÷ëÁ&Ö^ÞîfË•×<”)a„Ùvðîêÿ×psºjŽiCùäoßåö%ÊØÝýuNGžÇò‘ý	ê‚Vop.U¾œ„Ü™â‚“<®›ª$S”ŽžàìRöiµnN~7—n_ë<´,‰2àïºYL4LÎ) §4r¨œÒþÖQ£f­W¾¦¨VAåñÑ…mèZãE»¾ÇgÆÛ“ø
àÄÂxH2£d¶¨if±lxl÷/­l†]@¤nf+¿+´”ŽÂ°ˆÞ‹—Âú3Ô¬)³OÆ°…­Aeé=Lg×f†<&’Ñ$6aÁ•…‚0%Ÿ‚40Ç4œZÔ
i€µ—¾ãäÑe2'ÉtMÎeSM&¥	Á×÷éõAw‚µþ jý!$KDšvQ‹¨Á­õqs/'àçžúVÍoÒ+,K—Ïþ7YsX\¥d„"
ÌôY01›½„ìÛ“Þ;mnDTƒNRx•ÂÈÈÝÜuæq=kWOœ|ö±S§±öé'/ !ì°ä;¬.™Ù­šÞœ=ÑÙÖšà.šý“óè¤7fZ¤¬¬11Ã"æWW8ã ‡&h=vD°Ã´üñ?)îùÇÿ³@_‰ƒþñ?®>Ù¾¹øæän“¿½;_mÑQJ‹Á))>–ˆŒö­+5æìôL8U¢©ØÊóeN®T÷É¤g?’çÒ! ZÏ³å…ÒœP<ž…ô OHHÉÒ³OÏrÓñøoõòÐ^Ú¯`
šx«PÔ\©Ùi4ŒM»Ž¯BYïfè´°^ÃÚhîo‰GåÀlå¦°ã\¯“kô”ø[Š_:ndé¬|'è[~‹ «Ò¬ Ž®OF@§š•¨Bó ¬±Y½Ý	ßlÐ(q-$ÖkíÒÑ©öïs÷®Z{Ýæ ¢‚½°¼5fäz¢˜ºT±Õ(*/Šõm¥Ÿß¬‹Å>;o"`MÍ;åÓ ]üÚH6r&¾“‘˜'`Òë%2š—Ï$â›Úô²ow©ãÁG;£m™ÑÒIsÍáÎ­á†»r´»¾Á¶VìŸ‘Xî‘4]´Ý…HšëÉŠx»óHW‹HÄhÃæGRIsu*	×_ò2UKŒÖ^øP ¯A•Ü!.µ¸ÐÞ9Æð*ÑØçN£ùöQgicâVI·u†rjà¿¿¸åý@ÅPåDhj©E;úioŽGQŠ‰:ˆñãÃÅ³~yC+×6˜"TVžaÑ„ˆ@=šQ¸Œfƒ‡YÚÜ^?Ã@ŒØêÔi„KFEpðrPøNº¼1«x¶5É‡‹ZE<u›Ëë6sêÎ—÷;Ïëw¾¼ßy^¿´y
øÆº¬^Ó[o¾¬¿¹¿¿ù²þæþþÔš,ªªÊxkÓò[R›Êdk+ÍoQmUÆ[ûE:\RJxkÊckqeQÈZ¯Š5ÅZáZbå<Ó¨h–5"‹ùÛ0Rå’VtA;ßœ,kà›—y)Uñ×2åx@“¥KPéÙ|DzåÃà2ð”Ú2ùzË`ÈÀ6¥ù'·ñ` u1¹ý:¥É£âa6ëNHhòå€7öÝÖ­åQ/~Ð£ÐrW?J=dù*‹uÍÜÜµŸË›±é:²A9D0Ñh‡ë	¬É³¸¯k|ð@ÜôA¼í‡8–8ÌŒFÜÚÊYx²È'tF<ÁÝa”ôp0s¡&gúñtS-Ñ½úÒ9¯óÈ,šÊ}CœˆÎ£ž„ö¼­DLh²7ïÆ¹>¥—Â£7Ý$StEÊ1IîYLµù¸/Ã'e×2Ÿ¨¤6QáÆuŠõ¦
á†·0OZ]…X§ïË¢BP›­ŠkTASy·f›9Í²Û[=2Œ® Ô,e±í»Ã+Xnøãk’ÙS.éT‡“,v	£:*=°GY“6ƒÃÃàÿ£íêu‰ð«lÄZQVñ(¸ÄUW]µÒ¦È‘;	Bƒ¶á%xë¯;Ç?ã±7»9Z9™ñ|ßx¿8¶3{ÊiNeŒnÊiIc§ªØ~•ÿ–™¸‰ExàCé÷¢ñ¬Y,!}ÓÚZŠÆåZš¦EC4¾PôUØÖ%lçs°A	›ž	M,Unõÿè>‘9˜	-’}Uâ.JÐ²‘U‚†‡;æÊTäöÞâ·ÃÇZ’…ýÃý~#yµ¤+¤˜´ËÌó3ùôÓb¬r‡¿š½1ŠôT',dçUib›Zì'-@ô“}‹ý¤EŸŒæ_	µ3ŸZº‰çHc…N~ûú¸w¤ú.Ï\jž~Ý˜)Ï¶!›=
5n7¶âp{òò ‡êãŸ±×ƒÂ²ƒØ¡Õî*49yñqþ >üDÂb·?c!Ðïâ€>ë.NEëÁ.Nå!#bÛn˜ê ä„_@¿Úúï—ˆë7Nª3jÃî®çwY§*eÕªvDÛ¾ÍÂÛ ûDdgÀÕžv×nªEq9û³A½Æ À¥cPÀ‚Ò.(=¤AFÄºIN_%µò±*ŒînÇ3˜ßóÓbÉï‰7‚ Sr4B±ã¥ã¬9´ùIìNe¿•NîûÎÕèPm=§0Œi,OÜÌ0Äè”¸HTË˜G9ä!âà*¿$&	‹åê\qŽ¼l>—i[a.«¹æº/Ëz`ÚÒ[¼A_jü×«1•‘æ¼Ï¨-ÌgIaRŸeŠ-Ü,ÉM¸š‘,ò$“í1„«ÙžF’îÎSîú?”pZ'÷f¦ríÆ&^w÷—#Rh+Úp¹¬ÞÿJa{ÿC÷,¤Cõ}Ê_L¹¾à°/:EÆ@d,·ädÌUNBãúÊÝ=ùéu<+n±Ü$È\Våè   ÿÿì½[wG¶&ø^¿"Km" âJ‘º°†¢$SGW“,Ù.Ëm'$‰ˆ„‘ IØG³êT÷ÔœYkf™§~ì_P«ÎÃ™™~ó¼wÿÿ’Ù—¸gd"I‰*ÛËrdÆeÇŽ;vDìØ_…g‰å%—â˜i²›YqKT0ˆÒm|WÉh§º'¹¶B^Ì-läÚÆrpW€6J¶œGû•6oÍš¿¼Ëyrêòò¹G¸_ìGÓXÍÀ–¥¡ÎÖ.Î6Ï­M‘žŸ5·Æ`V7¯½ßs'ð*´°Y&+îòÉ“—åû(Ôjëˆã÷cèuÄth†º7˜z5›:¸ç­MÕÆ¹ÇQ;k0aS¬n¡‚uÛÅ>g
Äôæ@³×(
î½-{«
¨ H^RDíçìŠ«¨h*ùûK÷0þÃÍ€0Ûc}$þÁêÅÐv@þâÚ
Êa½ùRj‹šZÛ×ÔN@M-ì¿ÂK@£þI…Ït3­¡ÇÐó\­uÅ-t[é·ô­=õ–a ãF¸‹¦ÚÞ©4”—Ú4Y'VèyEÜÆqÎOíígŸL:ˆz2ßm¿´ãömìÖx;7ò ¦2Èn;‚‘Á[à0êŸ1ößÀ±Çõ„S¡Sší¾§§	:hG*ì5£ÊPñ­úšìS>ê¹)³°ú[õU¾—'³´8‰ûoˆ&+†û£É÷c1;Vž$£“Kî-Ç žä¾ýª³2åÆÊŒt×U«›âö0Äai—p÷ž¢$4@Ý9ÃÝe‡è»mc™h{Îí¯¼Êh—Íí¦¼¤§-ÇÚÈMÖv¬‹ ‘ÈH‰)Ùhæ)3ˆ ³Ý¾ã^fVÎ,2¼Sg/ü²MÁ‹P–—Ÿº]:µ7éã
*s%î¶øÇd8q‰`eË¶,Ó±”åÎ†_CäÏcî'¨,Ñz×~ª!WI3¥ç|»ÏZj;è’kù0‹Ô’ž½ôb¾dŸžµJvçY»TOJˆÀÖë(±þ¥ŒÄSÜëor½SyÕì×¬f)cfráyÿ”âi¨{}"þ8œÙgõ.O.´@1©ñrªÀGPo}¿ìqD «Ê6¡õ/¾òØžz eË8ùtf¿‘Â½±+Ê@QŠïd1‰Ìë `žz)‘}ðÜXú:¬ŠŽ«oà}œC],Ï—Á©rY1Ðõ"š¾Á0óÑ(^¦3¹°Vô3À…kE¶ÀV²¯(
K¯y>ï:=‰OVïœRààN’CRpáp &Z5ÿ½·÷UœW(z÷a¼±@M¬ 3¢Î çïJy%¿ 6ôgYÐŸCýž;B8 É;%„1CnP–‡¨6Ok­Ú›7=Uµ|»Ðl8U¨ÕdÊ©ûÄ°;—§² í™T¼-ï%|^î:*FwO\Mž¢7nm`úR=>T¹zn°Ê±¸†–È@7c¥‚C®’ólôŽ R¤mô](D7åýÑ¶z9uQ4Wp0ÐÝø
Ô¬„†µG1
ÖK¥¾Qøÿ6)ÛfIb“Ù4’·‡äO}yâF§f5xiúÎ">ö9½Tï"¨c¦=H¥*Ÿ­‘¤pŠPKf	¶É Ð»	C
äoÉ¥°ˆX“ðî Å’ãG|Ê¨ú\J”ª?„UÔÈ×÷4J`„nc`\ÌÃñ.sRÝ—S2&<£àD£@	_ƒ{×j¿½¿¨OñÑÛ7Ç¯¿¡n­wC2¢g«Ö2ê=èW
‹½”*¢#°¡ù–lr¢«•¡}
•¾|Åà=ÛÞ“Yk’¤F‡iÅ©¦Š«f/4q¢Ú£²Pöë–äâ¬–²nµÍ	Ê·YŽ"¸@2—m¸JÆw ¨‰û.x¯)×9*1`\<ýX%5†Ñ.YBç/>Céò01côt„ˆRÊÕ0šEãve@|ÔPªËÈtšƒŸÊ‘±Ÿ¤¦¦®•åØ\ª,;-b×‡Ò^­¾ÕKÔ·º¬>_O»»âÏ¢áXh¨Kñ4I&ú5Ú­¸;@x­{è»LHã~Üƒ@[eZŽœ0aÁË°Õ u¾†¦¨‚q­Újúñø¬j!yð\Díj7ÔÁ£í¶|X«,¯œ¥@ŸYvÉ£ÑáwÆbïyæïw.­õç:Hæ‡£¸>‰¡ÂÑü´Þ?‰£p]PñR¦Qî)ºÃCÿÕEd“9ˆjáŸ%Gbàä¦ªk½³.1H¯–ô5±7Çõ'óÙ,]P‹tPTöžt«¤y<µ0:À®ý#MI1Á«Ñø`8º4xèåaB-8Ð˜ù¢g5*t½já‰¶J…*¬7‹ +,‹—±TF-Y›$¸j¨_ð‰–dáI,îÏqÿäh´Žèô˜ÂV †Î@°à%8XdcŠ``ýün{auÛx~
Vâ²XˆRñ4:Æ…CÄ†Ñá~ÐÕ>¡>>)$F˜Åš˜&Á0ÉÙóP‚4qƒN†Ç'u×0œÎRAu&çy²R
ÔGâH®Ž¢ØôH	¬§Î@& ”®æý8uÃÎÄÄ$`cÖO“½=3l(oíûýfá¾èIxkt8ž'`S1û"y½!#³øª_{1o”Ìk³ìüd8™ì!èF;ÐÂQ5pƒRànÂ›b¡‰úý9†ÍÆAWBK,ž†ÐÜ©"? 9Cym“ª´¤LCï–COqËy AEg(î%!EU^UT=³€Eíd!lÑ=ì’xç<‹-Ú€‹v6‚à¢Ýö/\Ô i±e¨HÝ 1ì,k5K*àTì”BB#°¥×be$zOj’þ	G„£ÃÒ)¤M 7pêÀz&Æ~0‘ãz6å4ÃÍÈb¬ÛåÌ ñpI`4¶þø	ß‹ [q®'£1X¯àëôõ†©${LmÔ€–b6§seÜúü„«¨à13o¶{xNóÃßÀª%}¶ÆºÌR¼¢Òã” Ë“‹ª­‡ñ¤Þô$4¨œ¨;:kKe…¼³ÔR[x„6O°EÐžT¥ÖWr><ž1¡ŒAo`‚V„VJ
‡8ãß¶˜Y½Òf™­
Ga l664$¶ÀQók„ïºægÛùIœ¹Ìº*îèq ÒthÖÒC€l[¸v
 ÒB4 ?ü-òAr>FT;oŠqÆ/Ä¥Ä)>¡v†HOskšjËk]/o™m[I¸N¤{2<KðòäáÕ€GŸÒ@*À½Æ&0â(6"™£
(ÓˆQ~?<¥á,*£POô2‚ÖÌ4$4:¹Èmˆ¬Íïe]jZÞ–ü±Ú’í’kn‹é–`kltôT½ÒËOUjâ)«O°ëf…èÒ'˜Nž ¨NêÕ„–Æ6<m+à¥d5ÓšðŠ£8Ky\ uJb/›juLŸÓ7.2ç‹éáÝ~ŸC­Ç´èÎ—®Çƒ˜©`â£Íð™ššöâc˜òKàÔÒÅA¹®8Õº/-ÒËkºBÍ³´Nƒ—vÚ”:LuÒ f–H­9ðÓ5àzÀhß¼Nè†{¡¹ÖQônÐ.ƒxˆˆ¢SµÖ™¢Ã˜¨Ûþª•C­jÿwõU9¦ð³ñÀàŸÂâöy|>KÆ³ù&ÍÅ~Ž¢óT£«ÂÃØÌú®nbÜhµIA! ™(˜–±„K@'ÛÀÎ!.†s„ª-	-UŒ;)¡]'	šYK,A² _Ÿ.¢É|œœ¡m”ŒcÄ_<#2‘f'‡Òºjý„JS‘žâÁ|Á°ÁÍÖÕKYÔUÄ&ìé„†¬ª…ÝARÝâGÍ+CžjûxHá	SGª»ô—­êïš™¸ï^µÕÆÿîx	lxÕÿó¸7¿m6ãõ[ë9‰.ƒõ7z?‘Á7ñ¿p
‰Á5ñ??‰öJÿ‚[¸ÌÏ‡=J\Âè2°ÕK!”eÐ©
À=yH¨“ø/2ê}@µ— €º”Á˜â¿÷‡…–‹è–‘šÓ­ªA»ÑÎ5ÀÓì¢Ú|¬UY132gå—jÀªC'ÂJàƒ :P¹)zª	,všÛbŠK¸ Ð)Î%ñ‡€òÑ—âÌ\J ¯Èxðh–1¿ÍœzÜè¾‡&Ûz,‚1ŠòÕc	ôÊ÷Û×ÙqñáûzÜ®Ë—“v”B2æk¿V£“Ñ~¿ èÊe\+]™E.r ðÐ™éêFÁ5AVÚvexv±ðiÙT² –± :‚^¼dO ñ_&ÎhÐ>Á-b'O·çŽwÄÒ¼ÉW‘K$äª(‰ù¬]PXª¿ˆ´Ð¬SÛ¿`”¥@FÌVÛÒ‰«“Q˜k²¹”¤þ·Ýn7\Úp|”ä ¬_Ûœô>ìˆk½Dë23KYq*˜>ÀCm¸VÅNó]`s§("|	ˆ"#¤÷0f þÓl4;AÙzËlŽ9n@T±¬Q’‹¸˜;¾çþ<®…¡ÿò:Ã!Ã*n4,[/°l0§’þ›Ö÷ ÿËáï2Üåð¼s)ØAÍo	ŸíÜ·"ôå¹«ó-uL£ý^å&`.'i8Ò03ËAúÌºÔèãÀÝ6Nßö4Ž
¡ùpêGP/„Ú[·¡öðG j/cóJƒ2ÌU`®ôÏ’ï­ïã5eëØÛxLñîñ¸žÏ¬4Êß%#Þ«zd„ð¾Ý3ï[:â=Öv-þ¹É§-ÕfçH¼Â¾h5	ÎàjmÖq£[²Ñ=j`šÜºDÙà¶j°s€Þá8¼[ƒÛ?¼ÖÔndwÑçªm¹ÜÓ¢ÝÔ­6XPÕu6ÛëgÝl·§Gí÷ÑìöO¦Ùä¤Z~@ÎRÜr»Ñ”ˆÚÝcÇ©«6Ü®MŠ¹Õv#éMÝú^ó*ø¹-—ëgBàÂ *÷gã;£BîØ*‰Ñ‘+¿_^Ž­lí ‡¯ Þ–ìÀ¿É«ìÍ°ÿ&¿®fI K^²OŸà“*QyÂP[>9y`!8??´œâ>¢Ãñh‘â>?rPZíN±W]¶QSñ.ºHŸÄÂ·©>K¦o<°Õ»ž]ö°>À¢"Ç£ÈøêÐ¹(úò©tìár€‰f3t(à¹øp5nw<ˆÓ	Â˜ÆxÄ­OðœÓ³ì´;°ö}ÂGúÕ»¡("Íñ=X¼è?ž’riGž…30ncOF$.oÀ¬Ô˜½«›'¶õåwT ¹6“&SâÔ>ëU:÷ìHßÈ0@¢ß¥êºç¾‰±‹†è;aõÜI’ÆŠGì©½=¾#Ï°çÏ3>50öcAoQ´W9¥¤è~!d&¹Î’‡²Ó³O§oWÙpŽø#wCôoÉ2ÐuCyx>G/„˜bX0IH³8m“Ãèˆ˜Òs ¢KaôøÒ§b ¡'e.\jAVÎÓV#ËMñq™²\Ö•™Y*Gü´#Ñåzô¥ï÷/oçmâí1	né#ßÂÂˆZÃÚ¬Äã¬‡­BÆDf²Ÿ!ºãŽ#ÚŸc¢i4ÄŠr?Z!ÄT‚"ÐõG£á$¥¡,:ëÍþÊÞIì<ƒ%se#é6vý]Ðiˆ}íh­BoîèË—ëË—'¾8â€ÁFÝO·üKw×àaCìlG){ó ·Ð„¸Š×¤gÏ(öüz WŽ[ÏbäÇ3 /y‰Â¹¡6ªeå­‰£øœEŠ‘	Þ°§Øø¸ŽNHÇ&º*"%‹3–€²Öõ“ùê©ÓÝÈÔçø2–‡~ù>ÌëR„Ì¼mžz?!ÇqËÐ×›àÞ³&¶Ö¥—“5°$X°ïzaŽÂ0Pî×E×DVòãŸþ«®hºG¹…ZÕm«‚cåÖ†NQ¨]Ñ	ÍÓ¬Dâ©¼ÕGNv5ØËQã8©V¤ÇiÕ¢ë¥ãlš
Þ©áŽúSBnV~¥ÊÅ®ï·gR•àz—¥@} C‹Ú—ÊõŸô¡
ÓÞ{›í•‹B#çAºQ”pG!Ëêú>›bIIÁ!ÕÓVM¾ž¶­j¤ÆŠ@a £&Ïöƒ$ô
à}Âé"‹w?)åa|ÅòªX¤ÝUgxK¶M’’:~u>M²2ò—E'Û!™xÛpˆw‡y'ð1À @â‰m`ÄSumfDâ0zoâ°C¦4.™~ãcC7Dò’w?Ž))Å<š <"2%ÕšÏ‘iš´®AIð$¹uÉ;ÍÅ%ïŸ$S0YP$q¢~b¥yØÍÖ#´F
Óƒµ¡n5Æ`Å§tíI+X*¬Ð‹öŠÝByêÇÅßåzÒ–ng—Àôé~<Á;—§Lÿä³o?I¦nÀ:ÖwBôM2¯¿1éŒ(2‘Õ0¥ì:ÏZ(7ƒë^‹êÇ§xKµB:b+öçx>8&ÕmÖÄÔ¼ëÐØdöd¦éŽ=RôvÇ%˜kÝj]BæÎ•ë«ÎóÊPž¥`<MÂs?Ä	Xf½çS “€Û)ÀN sésH¢C?g_#î,jc•P‚µ5Q¯×yO¼R^ðøŒ^cl
ºË†0§UÞí¹Ì¹Ì-9ÿ†ÇNˆÞ›°¢Ê6› $ÇÓØ‚ÀˆÚå’µ¾>sî”Dmz@¿$6Ž/6Þ_~uÇ}ö¯µR4¹¦y3LiCË‡¢“L|ðâ™2ìÄ.(K›‘2:oÚ	“LâJˆÚÅ/Ê¨Òx9Û%r¶C9G%êë•¨s¬ÓÚØ,Êl%Ó¡º$ƒ— ™[8¦WÁh½
>«bç’<£l=£eõŒ²õ¨Mæ¥ü“9­¬j+·(«JãVªön‹rª4nN¹[”Q&ÑÄÊÑ¦Fœ¿?ã¡¸orÅB½xÝ¬çÇn8d/ú¼9?Î"P.UŒ4÷‡¿©ðª:·²W ÒÇPË%3á`Ó‰XFÕÌ'­}uÒÚeI€68¤µƒ¤®ÎµQY®–pm\›\dI»:×Fe¹6ZÂµQ;Hš¥3/C3yÇÄ)Í¢Ïõ¿2*Õr‰ûÖ|üêû‹³²@?þ¿Ì„áÿGÑ‚¢ÿ3€G‘RY— È·'tYR‹]¢(ÙŸhÊ`ìZŽÀÅ÷!iÃ£b0êf£}'“§½,OÏ#O*UuõíAkúˆÂè`ä”ÂH/Jåêèd VþJø,µ3ø<kÛ×?x
ø^×`ÀÁÿ!®öA¼eiƒ¶dð³ñˆ¸&´'j»hÀÛ¡P ­L0q.i<'-Z?ŽT$àª#nÂ¿µª„CÏŽÝç/žDv\O]0ŽæzÛÎ@tëä•3ß‚?#.~Æ¨^ø³eGªã\™`‰…¤SZ›tEªÎ?rÊ QubÃ*Qâ°èLmç3µC×–CM¯xÍÔÑÓáï±óÛÖGXb¿nz­Ìçöex.aÔ,bŽ-q‡!¾DÑFv¢€Ó·¶þ¿q‡ÆôMwO<¤\Z|/Ô8Á_£KÑ0øò$ƒðñV¿Ú_a0Ùð4eW%¶¹Ä6—ØæÛáõuÔÒáš3øÃ´¹IÚÙ$m/	i:/Q”)'”ÈDËµ«Ãíêp»:Ü®ÎUÚÕ^Þ®v™vµË´«½¬]]nW—ÛÕåvuË¶‹+é„[¤_†Û¢^ç´B¿Ó¯g6š£3Š©‰c”äFb²¯Õ÷§W³Óš"Ý¢"«¨È**’EE­QíQm‹¨¶ET[ÕÕeYEE²(=¼u&æ=ÞÇÃÀ¡Ù	—Át\|‰ÜÃ¦Žç
…]¤óÃ:º
±o„‰»%wÐg'KäÙ§,÷„uñÁ¼§à£`“@›URßÁXÆêR´hø¸kRŠáêjLËèM·´à½OhÞ£dJGjˆ¶Já2Roô\àÜ§öÍV­‚5oiñÊÌ
“û‹PnœTìÜ~å8¥\´¬œíP½YËbÁŒv•°&ÎàtðÆéD†K-'*”§1™§'•ïÅÅm ½&·‘·^W°F…3p¨0±e- BýÊ‰Ó“áÑ¬ %ÍiA$P4WÃ› Ž‡ýEî`ôm9žÌf8íÇ;<ñZÒò’d'O]´r%º0°²J ƒ+S¡_¿’P üÝ²¬òÈÀÇ2" Úùøw0/ïM“cXöàðÂ¶›®Î¤ýú›“t!ê§.è¦ho4±ÚfómnÖDÿX‰ÂÐ3KÂÜ»”Ÿ¶î{}ø¼OQ{æSW –FÐ÷Éëf_íDÌKw:>ö†äôÔÉ•K
¤²ª)½SÍÖ‡¯ÁX´¼wá’„ö¥H®*FÅÐ.UñK:€Å°üNbfcÃcv.uˆ¾às§&ÖðìˆÝ6e÷“C¯W\¢8Ëeèb–I:ðNeöðp)¾Q-Ih–±Žtˆf«L¯`ÛÛm?:êšÍKµD"Üöö»¶Ý!?í[ÚE®A¥¥;¿ù‰† ïä… ?ŽFgèúZ‡uø¨>Ž§ ±½àŸÈ$b’ˆÄsJ$Êh¨â¿‹&ú÷þïlc<n&Ø¿iÒ?Á ³ÆE$.š]Åj:š6:4à+ýI3Á‰SQyøÃ_é$|ˆ_dDQI˜
ÓJÐß
|5ÿ›HžWäÜàä÷´OkEe³Þj«HÞ—¾£*’±¿7MìïV½k}¿…ßŸ²¿/ö¾¬÷JE÷ùj]f;M19î¤V?¨'¶ª›mV(T~Ž®X0»n`fÝg|úáÙqMljâãšx×ÄóaM¼<¬‰9<§8¯©[‘8ZÌbA5Øõ¥åÔlR|Ø6|Ï8|^‰Å!wWißêàû|<©ât«¢ãjÐOnlŠ>Ø èËÊ•ŽÅÑ(9¯áø3Œæfâp:DÊ5TÑ€+O~üçÿwíù‹ÿüŸ~üçÿÄ#º•8KF3Ž‹hìñ¨dV|;OfCòN­|*e×>õÃ­
¤˜døžPÒ\•½ƒµñ£êhüiµTr€?v:8'D%¹UúÜa”mx>Åºüü$Õõsò%ÕÃN'ôÇžœ×Ž‚~~²9cVÙ*Ý“±çd4™<Vs„Aà€£ìB¹HŒ´klòëP1&˜Y…e/ÄÙŽŸÖ@ŽP¶“#-@©v_œâíOîç%ùˆÎ)žªÌFBÇD00b¬ÏÍ>†éŽ§ufJ&k8%9ã‰ÍdÄc¦•Æÿ8ž£4:Ê@b¨|NdyÞÊ˜‹46Ê>ï/¢±Žzž¾Y”zNùìˆçôÀ
w®„bßÐóy±sBÎ»*4§ò|=ò¼×†<ßÜøe„<·•gçIý0ŽÞÀ0rô: Ò`Z!ö‡Óþ|83Š‘Ã±’žÒrÖ(a}ù„DÎ‘M*Z]~°ÕÖ¥JPQi“>ª	btµcEd)9»¬±‹²7Ãüð7TË<Óüðoøg~Î3çˆ¿óLÄßyFâï<3Q)Vl+ÚzÊæ†ûÓÒú?yVbFJw§ðiågª¾0"ê@¶|Œkÿ»Q“pL0·²…5duÌ=šÌÄîÁÌ¬Ns¤ç$‡)’É¢>`”ô÷¤i8@Ö7“)"e£¡s>¥8+0ªŸïq,2ëÅ¸ÏÉA÷Û÷TÜ ú ÆÑæ†=R.]U
ýÅc¾”˜<TÄtìM? t# ÚK&ƒ@?ËÌŒ(d½Ýo`˜ÞÅ@ðŠ1_‚BJiÇ®]èZs2Ðhzþóhõ”H-ßl•@‹ìQ|‰îãÚkgÇ~’sýIn·	|†&ü)ŒB¥=qPÚZù$FTŠwõ­v¡PßûÊry IZÚUV[˜¥_ÙìÈ@­mŸ?ÇýúNB^¸Ôœh†C”œÀÉtŒTñuÿ†UÍ·•%|OHJ
"Oë&èÛky¨±¨¼HàÖQT6u@M¸Á¨ZK/X6çËb¦S‚ÑÀ™‰®ÚÆŽ)ˆ¿NK4™÷Ž˜¢Œ²æ)‹—WÏð^c‚k¼ôDÝÂÝ”ðÈJP4±“ä|»sAäPØZÐEnKöð#7T»«3ÜNj_ÚKÊ’/ŒørAÃ÷—HêýÓ½1­V7ƒøˆ\æy@ £]ÊÑhõÄ“;x/aÄ¸ñ1ò:ç9^¥Ô˜UžA†ÆÂ‹ž1]’ñ8îó5BCØ"ÿýÿú]IÆVåBIí@ÞáhvÞü´fªàÒîLq\hñv.³FxãW‰I”
ksáÊo Kæ§ñàã{çF÷~o±½edïe»aÁøÞvto7²7Å	{ƒ‘™ŽZ·ÚÑýo¨XÞíÍÎ¡ycÇÞ>Ú8ŠŽúþ;u{³u7ÌK8íÝo;‡ƒ£ì[ô{Ç’»°2Úhf^'6k>Ülw¬š3Á¼»­^ÏÙ(½)¾uÁ hõ¤#²]Ü±Bc™pTð]ætÂ;A§øÒl}¿<É» †7öÞ^¼Û‹g×SÏM˜2ÁL’ˆ·i[3Â‰O[YšÔ'IQÁ´C´¥N´âZãî’‡¦Ïƒz¹¹'~f;ü´æK Rs0V^Ù0ÓÂÓgÿòÀÑ!E!¢e#ýJ¥¸±óòäLŽh-H—
•ç…b³£‡ªów8"ïõFIiÏfR Ô*^¢ÇÍ Ûâdˆ·­®,v’1^,è@züXÏtmË.;‚!™?8«õ·bå]up¶º!=‘Q|Õòýqà†vãòÙéh²·L`Öeáäé‘¾Sw›/çõ£T‹ã(F#¢ŽAYÁ7š=U­¤1%óµfÇ^ÏOÁpûª ×½Ùs‰¿”4ØÑYÈ[éÆs¶C#ñªÞOÉ™¾ž,‚P—Ý‹d,Ë·YÊ±ŸG½PÅA—¾¢›
«ŸEžl)	ZÏ‘ l´þV*ºgû´'«©¹«˜9[Q–kºTtò{ÕŒý¶/¥DÉ!jšœwo¹ÐÝùÁ55µ]D†ðZ—‚ë™>¥·Ö»Þ?ŽdÂ9eP´j9/r©g
ç“šn|@êŒÌ¥…¬S(!+Få)–~Ïéñ«ÍAñh†×£Å¡Ss#Â‡xÂ&¹'e°ìK¦‹L¼è¿Û„ÙÎLv…ó¹ÈÞô¢áÒ T‚äÕÉ)JI2²ÑTK{ƒ†HNahÉ"ñæ¤Æ˜À*¹8z*ƒQÀ
Œ%ÃôQ4Icšìé›»hQžÛ9ÑÆ†¯q¹;3ºÑé®¦ä\‘Gx5¢ÉÕÁEýüÎœ´X+#—wk±cßlÙN-=ç‹=u:c…·ýÈ
°µ£Ïi®.Ø~í¬=ìØ}V`Ü¥’a€3Ñ~Ý¥¢÷–fi‡±äó	+[tºBaçbQ‘Ÿ­j Xå]¶¹	v	VH•ÐþºŠHùìxeKŠ5ñì˜¼èÒT£sK¼‚z8}a!ÛÐ\yÒ…lt!­ÆúzÙBþ0^‘vl<Ø’g•PÚÆº´fãVéÒÅ+[ò
y[…t»ey>\Ù’§£PÈó¡UH»W¶—‡+[òX
yyhÒê”-dg¾²%Ïc¡¹*dµÙè”nÎ6ô5äb'[El4sŠ ÍA=R,ìªÂMæÇÊ£yâÝ.)Þ²ŒŸ|ÿ*ÖY±6cþ#ßã¾«ºíŒ/Ÿýðÿ +»VH}v;n½·Àõ>':±¡CZÇC!ž¸Ñ4ÑÖé±
ÏÜÈF(¦ÀÉ’½hõê G[|†)Ã);l.8x5{äïÈe¦äšÙL•|`>ãvn=Uñ´Ýóÿëá§]#3´}«#ÙÙÁo~ôøöæÆ%8IÅé|ýXh¯˜¹ôéÅ¸.·%šþ0®¤xyZj¸JômUüø—UYôßBªR5‡ã¤eRL“Ö…Í³ë°²¥ÏlÉ°™õAÍr*Tõ	ó‚~Ç åÒ-a)«ß­µãéåxZ_‘p˜«Û×L±^ö|j9¥]ÚoY%\3ÁÑ¸¼`È°²ùëU[vÈW©´ø8?ó¿[­ww ÌZñ¤½å/P_N‡c¼#õAÖEÙŽzk‡ÜöüKAžQlã;À¡^)Î³åŽì»EGŽ¯º{	¤!Œèãa”˜€J?>!ÿ”Œ+¹¥Pˆd2pMM Aã_“ÃÑw]ÅT™vØÕÊ¦ýÞkCË|Ý&@;Æq|€^KUŽx@ñÐ…ïb÷;;Ø£ÍoEÞó¤¦MÈAäù‹\³oV¸"Ó¢ûöEr£žôÃáÓùÔÆ»Ï÷Î?¦Ä+J¯6Ï9}>Ž0P•ö}©ø¤èd“b%œ¢oOk™»@K»÷Ã_wDEyÇTâ~L1ƒƒÔ ŸÊ°?D’¡Ò-šÅÆiŒGA){4±«Îa”âE™˜'â¼®Îºœ‰³”#êç€Ó»sË¾¸;n©.^*<v´^ÉWM9:}áŠûÃ#Š^9œR”zt¨¦ÆGâ˜{-7Äão#ï"Ç‚Ijƒ¤4]éT/¾.tŒš-¨”÷Œ=Ê^F&ÑºÐ!iA'£|™—©jôCà†Ó¢»kØ1V7´"Þý7n=VŸæšPNÐqÞÍ;Öôºý#~øwq ¾1~yTÅ¿£1Ì¤áý:Ú4¶úe¦|¡Ì/+$ÙÚ_œ& ˜ð5óîñY' ·; o±ù)à·Å¶æ‘swÆµ.ywgƒ-ÉÈ1 ß¹cI¾‡ô©µ1Žþ$Í__¾úŠS­¹-×59õŽ[™Æ\ÈJì²Úöt)À.Çäþß9võëF§Õÿ|­œ&£þýIµ°ÜQ{[Ëý’ýˆÅ—OŠ©ëÏÔÅ§ ý©“áõ“cÜ/(ô‘Ný(šFƒh‘môæz­»Ñ;Ðjh´ˆüçÿVXä§vŸ¸Æ¦~ó%É:²§_A¹_J)áÒá—-”ðÓ)mv™Qˆä»óâ÷/Ÿ>Ü·"Ù>ÃKA"¥Q†ÎíÇ+5ò>ÄïÑñ8N‡óSx$]ßy7“ÜÆÈ³qó6ïæÕÔ9ÈŠtáƒ$rN>åã’ãl¼=rêÝ™z·GsX}ZÕÊý?®¶#«Åý?«Úþá ·–Vû‡±S-^ôPÕ¢g¸®R.Ý–ân¡UeÔ‚ÿ¢¥U>Š*Å¦ÊÇS¼µ «”{‹~•Ý®Uå­[­õ¾_%Çe°ª|>tª|>4U>ößÄ#]©Ü‹ô+m÷¬J×»·º‡K+}yèTúòÐTúT«®Rî\r•-]e«cUÙ½Õë­o.­rgîT‰·sT•ìd®+•Ë§¸¿iÕyØíušËëÜvÌ¶5`ö‡£3«NÚuš‰Û¡Vq;Þ8jæ
UøÖ‰O»#—Ôïëá#x¸¹ÚÉ2Ä8Ì2‚lj¥4—œ¤+~AÌYëËêmnD•.…6ÐübØþ1mF!7:³ù‰ˆr(@sifkSÌ‹¬°$Ò°³O›Ó„2Eè=Èl#–Å:–oýÓ‹ñÞ0+ŒYlöÕÜŠq£àa³(«Ü†Êf{¾4×8›éÓ¥™¾(­Ö%4b*¿w—Æ¼7GÕ—
zO)1d’º×úâè()dØý.ƒ
yiY¯9Ï}G/MðÑþ ÕÄaô”Ïx(îÝƒ”âw°¾ºM	a%+þ$ÒN:¿ºœ£‘iET“Í£“•{Ê”øÒ×)÷«;n¦=¿ßÍe)‘p6bnP`GmxÁw­Q•ÍdtE0×›CëX¦æÞ¡ÂòfpjÜæPþ)ÒG¦Î…±´ˆìFÜw%;à»‹ã ÜcßÑîÉÔwtBªŸ#+îpµòçžIe‘/ñÆŠz÷D/™&E%éÒÄ$ØD=Õž2>M{.MOóh’øQ¦j"úÿ®,Ö!Vš]eVÄ² }—`NYö2ÈÄóÒÑ¼Xrãæ+9Y?öf‰ƒ¯wÜÄc¤‚ßÝ0Þ±ŠðÞú§&w[Ü„t"UÈd~ù£/>:ÂJ0ÏÔx½c^ïxDðhTýi’œWô`ÃzçÍŽ|ã“KIfÕE¥²9À*cøö¨ª#îŽ’ãÊ§U†t6Ýþš]ÉîéF‚Nm¡N%~²Iê•B}s’·ðÍ~ûÖyÓÅî|J÷žf,Tu¾´ËÜÁ2­—¡"·í"}:ý-"sŠÛqž¥1Ðt‡ÌœÆƒm±?›ªàè†ÃoùÈŽŸ{Þês;•P?4ét^¬GV$ç?O£•ÑÝæz&ËLe¨†U>­‰ƒš$ßºë‰ykRp‘OùcO\ÇµPO¸óÉ fÛß?vçZe\z±Û—Ì…æ°fE<[±x®­Íâ23Se~¡ÒüôÊófOÊódÅQÐæˆTŽcm˜žÓæ©W8æk0ïl‹zé*”Pø-¶~VV)Ôý
6Ãzí·ïÕŠ]òóc;Å§¡ŸÂœÊW™ÿéŸÔ“-ô’EBø7Ôûðb’Œyk¿mÞ0EªÓÈ>Qjgq3VvÜVf"tÇè€Ë¦­-’6“1pAt€i7ú#ÜàúÌÀ7	±©8ß®…êä5˜FçÕEñÊEM,jâ¼&Njr=ŠcWn«j‚½ø}œ°AËï;^
›jJ­ÚïÝ@ƒ²ä²¼QJ¼–·OWìŒvüÁN¶ÄlÅ„ë]‡ø„„`ôë@´Ûèï¬.˜:´`æmôqÆÄìØŸy_+A’Óá`0ŠW|>àJFÒÃZ½&.@šÎŠj_O(¬a×kŽMf«•K¦®Ãb³Ü.'6ëô•œz×{Õ|â AûÑhvŸbUp]¾CÌø¼Æ·2ô¯tMg_À*iÚ?aÁDðçaÿÍ–]þ¢¸…Ðcvy@‘]`Õ ’é¥{2A@2®M6]“Ãº4:³B»Êµ5ñb!ä¡êw‡sdhEÞo^É—l½w[ ÃÖ›@ÜK+NªÍ‰ºaw7ÙÉöí<àEŸúhYÈºq¿e÷tK°¬â4‚eÌW'ß•Z\	‰EÝjûyyfàVQ˜<Ð¦>VP¢à	`% K­d ÈOÑÇ%Wl9^ÀJ®Îk]]çie³‚*A°NŽ!†Æbu]l¸mcpb=2}usÏ>U½ðïNV&Íš˜´àÿÈr_€ðl8ž§¸°*zõ˜1`/n[‰o:ß'ÍÆ…§o?F$‚I‹^ÍÔÏvãÂ®‹Â"ùE.Ü"•îÉ1sm–lcø¹b–ppKˆ!„@Í¨SC«’¬=oósxí-ü‹`).eá—²àRLtpÉZ‚%5nW0_.
f0¤küq2vXãûÌò Àoî$ÁÍ¼ebã6Ž1Óï-ålÁ|BãMÑ¯ )?NF ­P…ÎàÝžâÅPD!Í5^<‹¥xÞ¨·€âz7¤j_l„^`YÍœÁð<XQÕÍ×ynÓ]õ†qÊPËd¹Y—ìÄTOâxBç@°¤áŠÆ“¥8ùäê]Œ@¾üÖ™R–AÎê­æ¥T#Ž‘Šk¦ûÐöZ£æ.!üñ]¼ŠäDçfÝqî¬M\Ö¼=ñÌ/zÏ+?ƒTçdbv<;ŽßïÂ{iúöBï¿XòòŸë:ZÁ:hanõÖs—+ÓãÃ¨Ò[¯‰ÖÆfM´»5,µZhþÉS×ræŸ^5Yä×T[Õ—ÏÔ—Ý€p¹ÜùU3W®\w™ì—âr»]Í¿­8íè*áG§©ë…¨«ë†vFÁd¨¿lqîÞ(,«Qº»Ý;™ç(Õ*/E«Ï&Q‚ë¶NÕ&#TÊUdV@øXË´×žÒ|¡ó¢•ÖêéÖ¹[šÔçâÏøc·Æû$r¾[{º²E*é)(SîþC T3KÈøµ¶!Š0/`G8N‹Ù}tËë¤ôp	B±íçÚç…é=K®|ÕEKVHqË{n–`|m8=’YƒË&Õ45]·\}×œeŽ«Ù‡ÓØhV_kžZÊÒ…g„íu¯<Úþ\máÙÇ1¿³„}ÕÈ£¸mKñjž Êýæ‚’³%È¢3Uú6 ”qþÈ«rèÒd¤£0}ÁqÔÛŒ›‡ïeƒ Ø´Zˆ¢A–“›Ä!”%¡ŽJ“Y”.§Ë[Í+Ï¢1Û«WÈ°Œ'Aú]cƒ¥Îþ]/·oÛw–3O€3²‰5æO¸IÉýlS­YYÇ'¹¶MÐËo»óáÂ«äËçFrÛÑ)eèÔÉÒiÝˆPæíç/<•ŠÙÙ>Ø¥ç{a¥–?çÛÆˆ²ÀFiæwlfz¼TC‚¹/ß’õQ²)²ë
¶£–ïk©ÖÐy¨1Hè\ö¶ÐÏðØÏÁVöú›KöJÙ¡è×ÍÎ!ÙÊ÷ò*/Ë>Y»¬==xå0µFUUlñù™í÷–ÒCu±jG^¬Òþß:•´`&1ábkì¥fc]!1Çá*AC5z°ÔoôlÜŒ«VÅ{²Ê•ÙxLrW'"åù¥~,a²A8‚Öþ¶VŽMlkj[’jui*e¦”Oäqî+‹è25KfÑèi<6¾lV?ÅÇä¨*f8þaNÈ?£ZÐÚ;ÄÄ_Wüwõè|¿“M½pR/¬Ô‹lêµ‚‘*¿‚½@¸ZÜ]…rà›‹,¨§ð#i÷ü¶*ævŒï¥ë®Qé.¬¤fÝê=|k^½õ…mÌö9R!Î×V`à0HMöYvòý¬²«w É]MþZ½g¿wúƒüåúý9]G¢áØ´§k>¨Œd—‰:b€ó¬]ÖG!%î³U,E$‹8©¥í€NÍñÄÍdÄó9™óN0ßE
SPÒn:uSTð)ô#‰™•¢šSÐÂ)h(há´°ÕŠéÐèLe‹Mp/wQÃ€\ˆ9WB*áº\á‘êÁ2læVp*ôËå¼PÓ0SœK^®µªþNaŠq¾u~9²r/Ôåy°™öÒ|Ç@áöî3ƒ$³ž»¢¾%Ø‰Hìðsx N®u™¾“oÅ}°J³ßzŸ^è»ÿV¼'n6OC¨sjµ°ªÝÎù´^ÆËjµ Ï¨ý3ÁL54kíæ¬vUå·uå~½rR)(AZ·Ua¬'uŽQ!Òñf©ìºíI|ÝñrâAr>ÆÖ\ð}2Oª™Æ {ÑÓf?>„™˜óÖ'S·TjÅ‰¥9ÚÁšóoÝJ©ºDÕÝ²p¥•m¤L®[iúky¦vN¦¼¦Øñ©øM“scçy§m²§jªÔ—vÍkZø¢Ã
G/1,ã«˜SÓíÖßÚ5o@BOøÖ^¯è‚µ:	Cub­î‰IÆµ>žÁôøtJuO+óâkÚ‡P_Eðýë/“×v+Ìæ£ð1ál–ç`é|ÆY°TÊ]3HÎØwíãšãÄ¦r¹Žm\»ñ½äß|8…ßnÐ¨£¸=:‹GÃxZ?‰¾©ly
óÖÉÿ÷_9ÅÇ©‰­q[ìbrxôA†3°¨THw#/ÙG°Ó'ýjÍ‰•ð^FžŸÆžÀƒCy^b%1éb?Ò!]íNO“ñ0úI¡¡Þ²ÑP×}dÔK¢¡Gi}r¥q¹ApTdˆÿ_@râZý~’öO‚¼»-žÿøç?WŽqó©³+¿þø¿þï¢ý~ý'~±‚†@+»è³Zm'SÅ8t!\=uŒ©	ôaLqJ¬®V*Â]Ä¨ìâI•Ü¡e¬p)
Œ¹Ê@‚Ñ„Ä=øx
‰)NDŒõü1V°»c2MpëÄãTŠaÃLõxD0öÁ\<“‘QelÌ„œ§
„@"œ×	¤Né¥î%ëò…pF	¸ƒ‘Z
õ!ÃÔˆ“ä\3ièÄ»0©¢B‘(ØVÉ—P—»c¬¯K8GŸ±ºÐÆÝ;Eg\)Wv#CØ}}‘Æ¢¸Î^0…-%}õ£ò¤_9¨RNhÈ`]G$4@jè±±F]¨¢ÃHŠ¶¯É&J“qt–Œ2ÏÄnrtäˆ¥"x„KÏø‚`¤°pƒ+«Ç¡é!ú±ã`°žIbq<e4Z„¢:Æ¾™§ˆg©69H'¬e‘§ÑÅð¦$5VÅbÃº‰Qdm¼Ô	é¬ìT5Cr¡š´*¢Ÿ*$T xœ”CÅœ6*þ¶ PÕëê£|fñOoðO»ëAüÓ[Ý_þ©š='™£Ô 8k+9¼û2~±§ IšU‡S@"¥Ò0œö0%iE1F_»ô—pwQ³é}]œ#\úýd4ûî4u¡Å€Y!ÉhÌx”ô"ïyDñ³d…$x”O"«þø/ÿå€ÒµÖ^™*ŸâäF9“SP°ä%÷ßP}6&ë!ÖŽ`~‚"BÕ t¼A€õ“¤ÿæ<õYS°ßR+*m"}èÃ%8*ÃûÓøXM¦î¬ÄF ÅJ±ÔFP“‘"³ñ¤ÍTŽÂ6ê–Ãùl¦:ÇÕ©ØUkØSfR«qa §äqeÍ ¡ÿ†&+l1=BNÄ“hœ:Í6‘_vÿ@4`“pŸL;É±J4;…Iä3ìšÇÌïG´÷5n^-3×ÉZ} µ!(%0XÓ!ŒuJ08ãö)ã¹&]‚/Oæh|ùì«jYWFZíöôˆ=Ã ¸¥/Ÿ·Ðñnõ’ùý|·C	ìA}	¨Ö«áwvšâ#áwÞjfpJ{æÁRüNŒÛã&sà:KùŒ&5ä•FC'0ìšh4ã‰Í‰Ÿô—"™çŒØÑcø•´l^e¸ÑjøÜè…P[³x¦OsùñŠy!Õ-´ÿé¤O*^Ò¨`¬eØ‘*diÐØRÚè1PiÑ@}¦…mi(|A†ÌèbÇ(‡TNÃ¦‘”‹„Í=Å/`=Áx##ÞnQÿjÀZJ<3˜ÌQÔ„Îl©Ð}kY ¸É"ƒšƒZˆ¯éÊ­©µàCi²•À@åN	 ÒLìÚ']lÜS(’¹ñX3Ú•s½×dÄÙä0§g1­qU¥†¥§¶4*c,ZËŒÅÐ]±TÐ~î‚¬Í\á!üçašLã¢n±”U^ß¬÷Â}c#×f»ÆSŽnß8ó¶Oë¨þ0ì©
·ˆÌb\Ë…#è¶£øœ0èSšœ`–éÊ/XÒ}ã¶y.W´ˆ•cN.ÇºFçÑÊÎœÝœz)–Ÿ‚Z(Ê¿Ãj¡7E¤ãtZ
¡oÑ¬°Z„Ý½Xqò*5Å]£Ú¦ldÅãèÔÛQ’,:È4¡h¥£áSc¡°‚€I{¶ø% ŸæîvYX'ÞÆ×ÏÞ¬ÝÏÛâæšŸÐC¥„»¡„“ù”¶þ~Ûont*q·H™ *ßO‰ð£nç¨›—¿¢«þŠ®*þèªë¿¢«.GW]ÿ]õWtÕŸºê¯£Äèú{€=œë¨Ò®¬bQñÙLÝðxÊ›_?Oì[‘4·ÇB˜¸B¨KÍ‹‹æf£Ë/-ïwnŸeÿ½KÝRQXš Àì\œÔ_af…™ýyÃÌö~Å™ýgöWœÙß¼OœÙü}“\„YuÂùÐÚýu|zäþJiW”6›O¯	kÖ×°á–2à£ña:¹Ã'‚©äZqåÄGâ‰Üp~%€?Ô\§Ù”Ps·š¹¯§¡æº½Ë€ö¨¹.n¬ ´¾3H¡˜:ãBTeyøp=µ`†âv(3´gC!Zè}Þ%XŠå3x_£'ž^+G·˜“ô”;”÷×Ö©•ß,¹ Áf`Pæõq{ekU–Lƒòî§ZžõÄÎº[:+L1õñIge«.öð ?æSÿòõRfCsùÌê´beëSr'P§år“¯Á@å}H¿B9/! ïC‘ðÔÛ8:¼¼"¢ß¤+O™”+[­ÖF£˜`×ŒýG®÷­c¿=X‘_­iì`“6pŠ‘•­N»)ýqÒµôº$-»aG{Ú|Ý'¤Ó«´óMe«Ùè];,cGòÓ¯ûWÄ‘ì—hü ­âóìý˜ž/Ó˜”ò–GÛ3Ûpü `“–Ü9@“¾ü4:ÏšÌwEE&ÄèrïG"
;R³wî0éœ¼…cô*!ÿ]‚¹ó=ƒ•kFM$Ó/àÞ²`å¨ÿ×ÞWè…‹îT‡Þ–äÃFÙ,'¶<XAe!"þº>O(X|3–1vÂx‘ŸXðŠØz¬û4êO“´ŸLÈ!f84OÕy=TÍ–®êÞl£ËJzÛ&_~Íƒ4´Íà‡GGÐ ôÙ jlsùÆÁ*Þ?“Ý#&¥q­”ø¢•¯G¦ïÉCñzª"ö½>–ßyû}û­xóõ}eáù=5×±œzúí½²ù{åÆÙ×ßOOÓ·âõdšL _ãÝãïÞB>ô€)ÂaNC<Š@ ¦Yv1wØ9@â…ž&8¯€4"ò™åé„¾ì„,ûªŸÓ¸ hQ¾:Â‚¨XnJ6ÆâŽçIÑ_Œ†„ãY¹ñJ¼$çcºò­L¡A]1=•]<¶¸äÆ|Ù^nr3JJi”ŒÐ>æ–cFfÄé¼@Pn2sB/“SŒÊé9ÔƒÔ¼±ÅD\düÄÈI6ë!­z©;,öÄÁÛï_A<ÐŠoÀ<<9KEpî¬Üx‚ï½Á÷T†ôV‘wNxu.ýNjj¹^˜Þ t0Q±ö"JoÛãëêð’Ð¼þOVíW?üQ¾D³ü+•ü­ì¯~ø·*P|M‰ ¼yõÃßÁákLŒOÆ_cbH›!
 VMþS9i>¥k«é>£
k¡”á„¥—M**ì…Eû°Õ‚á‚ÕoªWÎ\ùÕ§8Ì¤‹—º#kÅ-¦e•ÞTj¦¤hœ³*ãDŒã™5E¹Ðqv½Rkaê‚ï¥Žà^7ÔZC†±AŸ’ ŒÓtj*8±3Ë‹ž3ëd(½7\QíBÇT/SvÄE(_å£ÿQFýhRžýUã¥N8ÚvÔ'Çd} ¹ÞAQŸqZŒôù@&ÓûJ»Wí ¢¥Ç¿žl 1m9„AWL­VÌ¡žCßm¡ú,'¾bêåÂZ9qŠ
©Ð™¨PLö¢!’¯½+X¤šY—Ü¨–mƒÈ0âƒx`ÔI1Árá¥ö¤MOC<µïÊYŠýJdNc°kÇÃô(=ò¤-ýC”¾\)Æ[@ûCÌÆ—¾1RFïèöÈµmM8˜Oª:Ñ+Œ€Òèq"%ŽO« Í rJÓG»†Sý}¾Û1á+*Ë‚`Ã„H„ûçdBUËãA”c9OÍè{þÃ¿G³S>—’ó%ù½¯?ÙFxÖf£¹Ñn®›¢^Ecu1E_Gàû%)^DC«D.™­Ò¾žÆG’]Öã'ò±Š(ÃÇÄ£Y´û5ÆE¬CŽ&Å%Þ×¥[wåÌÅ¾Á.´c¯šôý¤OjÆ§JÒæº%ÒR|1©Ôuµ£{Œlî_‰þª{~ç„ïWÆ-è2ì¶NÝû3hu õÔV¨&fÁâ1ýLòÝPòvnrîv;=ã%—¯¨7UV²^$‘7](+ÆŽ×xìdƒÞžãB‚©\«$Òñšu^M¼’wÈeÄecŠåYVäC*Íç+^2¼E?Ž?ÇÈLujl›„…®) E°ÔL‡xtçx£Û™£Ê¬ƒq“;ÕpIÚ­›J’E™Q¸Ôá(Qøí®èÊ¯nx(¦›1ù«L‰ü„VÅéì9¸cÜøSãc½FActZìÐp”`™§$Nšoeðv,X_M,?¥L[™0Ò·¨·ûn|#ÕÌ:Åx7ÝoÜO%­y<2Â˜ƒ3‹CxŸ#DyhU“Ú¼<·9ðx'@T§Ö%ùäˆ‡Š;^/‹²ñ®rœ”¯ßbŒÚ»¶Ùžô—æ}Ó ©.Ïöm o.ÍÊ{—FSÕg±—S9üÌ½£Ê7HÁ˜¤u¸ºuªçj4=óUÌ9|F0P´£
"C_8ð«èñs€·ïá&:6Ò^Ù89WD(†{.é‚pËãã¶-ãÀìŸ±sÏæ¿`˜Òoé¼k_É«œ‰ÿYPÔ¹ƒµgU{ªöâé×Ï¶÷mh÷]÷ª#Ý|Ü°~ãMÇÖ-uÕÑöRÝ5šâUy¾ÖNkBÝ<uI±ÏQðZ†*ÃósñSijFcoC»Ï‡ÂÿQªLÐ?R¶‹	sA¢vWüN|ü¼ý±¸-*ø`½véÁÇÐê«Fõ¡‘Æ·H@V`=tj­„hè~$SÞÅÝ é‹óU4|$GX3UèfË€–6žÑvükY¼`OXP¼~ùÍÆfÓN¹(ZõùmNÕOR‰ãá%øB& »> F†³ùò+3mX‘ø¯+?%9ŒŠ‘‚„
ÄÓ•™¨
‚Uâª¸·¥é÷‚ã[Vªpñ@C!*Ò=á•§âU)*xNóˆx¥Ã·¶ð©OO®–6ÇçWC¥FÃþ¤•IåÅÓê=º£Åeiá'eß¥Â;fÉÂå|YÒ}Ã¾%‡¸8iôª—hÑå*õ¶¼uÂ_¦K~tÛðª-<Áv5mÙ‘BÉž¨ 8×)Vìgp¥€¾êqV¯¹ FvãžàôÄ^&~…1@8ä´C\­™>Óö‡ŽÐIG¤5yíw8[ui+þÅÄ…ñ‚¢¬©ŠN]¹dýT¹¢âšD×ÆºI&'Qöþžvbõ²¶ºj°Ö»Y;juÕ×ÈÏ0’¹)ž&ÉÄeGgÛ0
`Œ¬wrŽ…q†Aê•M‡KÄgU­  ³3
CÝµŽëŽç`†J%hH®A­89cticÛœøÏ²9`3é:¢Å o¼xÛÃ^üßË]íû`´m ‹L¢dÿ4I`Ê>NS<¿ÇõÚ¨‘Ü7¦õ¹5E‡üpèõüx ™öKÛƒæÐ
U}Ó¤×ÔÐÄR¿‡IïèG»ô×âÎc©RÛê¹iÐKÜž f“q}r²H)ÀÒ8>–f7êŒÔ®0»-O«$»v’ìnQSm9zJ¶î³„ÍežHå”Çé]ž}Ú×;	¡¾t¡fÔùæ%Ÿ¯±-~Sh€ôWYÂ(©EâM¹s©rØõýþ1áŸÉÁ¬8JËf7šŠöµp43dÖºÙÇ\JÌ®½˜œBžô½üOúŒ×LpÍOúÕL˜Ei¦§!„æOýr?µËýÔ”ûi°ÜOÝrÝq1<:âëP¿­¤L({H‚üWéØjË,â=W\+¨²•…Žp<³nè|rß‰Ô'ÒŒÌ¥èØWqDèäATÉM¿ÿò¯ÕËSE>S>Q—"ÌDåÇ¿üb72¯@…ttZÉ¨m{´À–ŽõÆ{Æéõ«b×¡~ãˆc÷“ÓxÌÃ#LÏå±È+Qy%¦ˆ¢šdU§.í`c ð|<(0Åž(
Ï¼¼å$©ÂwiwrŒA¦+e“‚Hwñã&ÝÚÞ¥Ùñn5§úÔìå$1˜Q¸kj·ùG¡‡OÓ}};C|„L–!’…kõj¢ª·‹”^$œ¡ÙŠúø…õý3ëû®£Æ)fçñ,}¡&EåõæÚ%‚Ñ†TnOâât§mÔâ¸ÝdËCêÿ–+hPDyCË‹BÓ>ª¢©Š7˜ÓèHÓë…“Hw¥ª—‰p–LÐ¼{ýñµÝƒIµÕ]¯‰u|xã{<)Ã€äºI,zo«¯¿YRhËÚíByÐ[›]Uf7SfkÝ)ÓïvUÇûîf=;ßWËŒO Ï¾QGæªKõªˆÖur¾^íž‹…ê@¹… Í»³T.ƒpÓÉÍB kÈ"ë)Æ’ì²·³Ä½+óh$¥
wa‰9ŠmŸ“O¢ùqœ7’C˜é>E%ÕtDnl	0¨ÂÜ)_ÕµjËàˆ^ÝÐ=­uÔ?3žÇCÓðCò˜‡Ö£Ö`þ8RuŒïP•æUÎÚóN6Óv&$ÈŸ	(ž3·Öóùá¡L\#d·´&‰—ŸïŒ\göŽã…NK´=)¦p²m¹µ\75Ãdm“¢e-(ËŒì[Œ­E{[KÁNJd<—™!˜;)X«f;Új:ÍñR>@’«ª •7§’_LnºüÆ{ —¹"ñ¹Õ3$QçÄÞ³}}ïNìËÐ¬`F&ÒÉ9™H®·…9mð¬jŠÄè£nEÑ:;Ë€¯·EŠ†ÃG°dÏÐf†&À“š8Š@?;0ã<¿Ï9¥‚ö) ,X¸‚½…¶V«ÙäÃ‡f»ëNbêH‰ÎiÐ…9™â¶€oŠŽ±|¬ŽÞ5k|'“ŽVÛke\õ2Èæüå(™>Œú'•Ê¤&†ƒg7Q•Œ<¼ƒ¢L>œòN÷ùÀ	Ï™Üz µ2àyÛI„#¦çf=ÑEå5ž·½“ÿ)Œ^É¢>RïÞ“œpm»6mÂ¢L!é‘˜´­$’®ŽÍ§j×:Û²VzŠ¶<bðà-L “|ÚídÉY/"ÇÚ
ñ{ö¼TôÙ¦ezxkŒ(¦t·§Poxë jñ%C–ö^íÛÐr4úðd„óY{{ò¸°?ƒõÊcŸ›ÙB]ð“ßÓ–‰ðvÑ@¦
4{Ïõ «ëà±¥d¢/üDŽàgt‚âÌåyýòso?’Ÿ~ÁOmzÍbIoŠOã£‘<P%Ï{ï”5PÌN‰Ž¨cïÞËìapÓùùç)qBön…ðIÊ4ãzo\KÇ{éY4«ÄÛ›Î²Q‹ H*Bƒ66o…Û°y+Ø†ú{j„c®½C‹~ãõÌ"¯gy=óE¦g¾x‡F!ûn–mZNÏ,òzf‘×3_d{æƒ5ÂYCçöŒ$Àm‘{Þ„”Ô¨|}æ¤W¹Õ`Á}ƒ~W’þ¾¹["a¶ê ¥Ú³„Åú¤•~ìxøS²jD/7™˜¸ÑñpÆ ¯;`Fêl4ý&GÇÈGhòèL|áÒ×Å`d™áœ~r‹+èõp3·F4ŸºtòRô°ô²†9uÀ/‰mvÓü‡ö”3jÏ˜ÙcÂ¹lÞáow…G"!dâ+$Sï¡ƒ£Ìô%&üêN(UÛK…æ«Ÿ(?%‡ÑhyH§2%šeaîÖ¡)!ÒÐZ_ÌZè0øë£Z+ŒY›Ò´ƒiÌªÀ<ëu‚Û”V£™Ñ"™.~©k‹hx'Ñë¾ì‚Ä“ˆ\žø ((AtG¹D &T,kkoÉ¢^ÓDKÈñ°Ùèø	rz;Ô6r u7ä:…˜–Ù5z™®•ßÞ:k¹I¯‚ÜŠ×§Lb_ƒTÀ²ißœ÷{lö)¾ƒ_KÓ|ÖëÕÌZdãdýrhÉ¼mði>Zy¸¨÷w,7ÝÄ¤Ýðˆ¦èuoeaÞãÔŽGUVñ@"þÒ> ®0ØMK'ˆÖRÖ`Ø»Æ>áeÆá&£±¶ÀPîH„zU·æC	ó€ÄáÇ¢fµ~É°òµ‰’¡Q3bõ”‚Çƒù#á"—Ðõ—Ü}‹Ðf¡ŸC^zãâõ7xK{GâÕTÐßæõïm'™·âiüáàùÁ[ñ¤FGÈð#sûOq«ˆ^°•™{jàá­›A¹›L‡ßa²‘¸Éû0tµg'Ïõ šÞO.ÌQÏ; â÷æt¨Õ½·À¼÷0F€|¯RÖÅfó6 0(l™ŽÄÛž9ûO>CD…ï™êËþq³Š.`£—¯<ðrÜJM]¶cŸéq¤w>lìp“s×Ë¹kç”;áœÖÈªt^¹ ‡àW^ƒ ohÙ­œ*ZMkDÊÖš=¢´`(9ÿB÷0Jj‡\¢¼Ûv§Ø}ÉEî¹ó~Rw®trÀ”¾†Éë±:—h+¬ëMý÷1n:Æ[Çš¹ä Ÿã	5ªVE·ÇUÖÔH¨9#—Ñy/	)x%xÌ•·—ä(ÒGYº8h#_ì\s;7e¢€åSÌè¢vXôÚBèÙ¯€yÞÏS×:Øe^ï¾þT«l¾Ö­mÐ­ðU«!¿×ãk;Lµ-\¬káì¸WX?²‰È©]œ¡ûROšQÐºÕóÐåNs²‡möŒßò·»¬¦IRl€v·:¡Ï’Ù®cêutr40žã²èHWì^•gŠ}ÉïvÛ#SR‘#LK1Ô=Y“ñxB¯ÈùWUË?é­x&Då%Ç^àdœÎö[³²Øv@n³º‡¤jç:‡ä]—äÝ\’w’wß‘ä[Í’Õöv—)ä…áòn'—Í„gøL÷HßêÍ¶£T\Ÿmµ›"C@å4Ì,5”¯€>E·szÊ&­åÃäõ7Ï0¸mYß¦v;›ç^Ó4¹‰zp-ÿdÇJ£L!ÏÀ·b--dN«µn¸ìvœ“Ý{ºïŸÚ»Luç7—¡çça7®êýáÚZŸM‡Ç ÃNcñ¬€·†y‡’á²É$é}$]ÇSac3"èn25ˆØÚmŸò|§+G
{±ÒO„r_gÑ¸*o‚áÁ‘#f÷*”<Wâg'ÑC"ôî
¨w&ñ+>vÇ %:xÖÐ“ò¦½z}=ˆÖ;;ûûgÛ»ÝýGƒGíFsž·eÈ$òž§»e0°»õV)¤ë™ÓMt·Ž{š£N9L‹ew5Ä#‰§ŠNNGM©¤Èe±ùÃ_ñ¯³Ž_è˜	VÛð‹†E|Ãø§„¡Ö,ŒhÙ˜ìü‰Ž/ðÉšŽ³CF'õõ)ûìJHIPÄÿ¿IVèØŸU„ïŒx’NAµFèž9×à«2…æ~ÔÖmBþ˜`ÅXtˆâèb˜
’Ohrt,áH¢l©•‡•†JzøãŸÿ$Ð½h©–Â¦¦Ó˜qRtÂˆPvWUÈiGC@Çª?ñ¡qIt2¨ÚB‰Uø1úè«bèŽŒ¢¤"wbô'Æ¸^d‰ŠÝ»2L÷›•´¡ù¬H
ìNK‰±j~Ÿ¢9K·„›…
.ØÍÓo¾ì¹gzë^`Z›~´;1çTÍRC`œíÕÛc”D¬^ï³Š¡«%Á i3GÃAO“4.Í9m8h~bB›$!Hè=lc¼Ó?ÏÂB¯‡`¡[AXèõÞ/:3ópÄOØ9X]r)(>«5¥Ð-ýv„(d³ù˜AÈã‰%|e°–i|O	úüóÓ‰ƒQ…ÖÄ&ýmmÐ–Ü¾…•i%&ô‡¶`Ò²ŠKÞ!M€±ƒ ÷é;9æsR-Tè
Dé‰¯¼o+ÊøS?\Ôñ“öMåøûÇÀK˜f‰Ð¥q´ÒÅúÓD…´òi3ïhäAGƒä¼duú
ÄP<ƒÙCžc™¾†2ŽƒÕdÐ»"¶œXA¯ Ãæ4è¥ÒªÙú
~uë<–ÁÉS^Hb¾éNQÁÊ"$“°!Dò•!Ž©„ ´/{.:–€¾>œ/È¶ç›óýá¯¹h¾\SzOp'‚b±õ"ì|˜ÆlðV'0üsê³wFæ÷ƒ°¼¯NpÖ%1£­ 
š×íÁ°©ü?­u«¹H°û±
# ÒI°[ü+¡º~‹h³…™Ok¿°(ˆÊÿò_Úkmñãÿö/x Ô¼ÕRƒ,>t€`¯Û^o:0¯ÝÞÕ0x}ñ^Q˜_ÊðïCè»`‰%ÐÜEÍg	°õX.ßÿU°|³é±üüd!á‘§áSñÜß‡1Y`{Ó±h¢	$Á	—d-®ÊïÍæuð{;]œNf	Ø8Ï£³á1­ÎJ±½`»\I‰O•züX<WW&YÙ—“ùV‡FI‡†	1ôŒGL&ÖS3+«ZÀO†4Û¨$úÂf¥.“\•ý@R.ÿ{Wç¿fÕ3
É{`ã`8(ny,K¶8N¶Ø•Á>>’.‡é-Ur&«µ‚®.EÕ]²Xƒ*A‡ÎG#4Æ’ÑœŒ¤5ÒO å£szö6¨"ÐAëöF§µ«x@³qKYë˜¢w«ÑÞìmüðWÙ_àœJÈ	†¿­©9;}®¾ð¤oÛUËn!Ñj£¼€Õ£óâé·©zo‰Á?ŸO£	­Ìæi2€Zà³~`›oRHc	:#k+°qÿK€W¶÷`¬˜…Þjù	ƒ)ƒ,ÀËø¨ÿ2/S*²µÖ3/A*‘žæáæF+óÌ^$¨·7-bÅA¾2rïçƒl±ÂÆk56.‹ƒ@·{¯ØÈÝ+a#¯ÿ‚°‘OŽbÀä0ò¯¨Æ—j?%Tã_A/jœZº=ˆx[ê8¹fÖÔÕXHÇ·.‰tæIïýBOãIÍ*Ýj³j¡ÌéŠêí_>ªòúåA•sÑÄ—*_3ÙÝÂ÷zDÎâIÿ’%Ãq)bn!nç ’‰L¶¼á¬Š$ìá ½¤¸8db†2‹ÚeJÐkgFÃ+2òì/+´Ë;ì·GôÏ›:Nâþ´•ßÏÜaMo½0Îïê+t«n*ùw›6òÆ ƒ•\¤Î]bnòû2åæöOW\Ñu-ÐâïZÜ"¶<º8Ì½¸¨ÍÁv†7jmaÏÉvfÜ
gNÍ²&/3n6‡3£ßD83çþÉAqû–Ti(î4»ú£Iï Ù…õ®€¹È¿?,è«;ÚxÑæ°“Ïnö•›‹çwkòÜí,.q;®r£ù_ãœxM€á¹?EÈ’Ÿ9B´³Ê…¦e,Ì¼Û ž"˜1ÜÑ¼8a§bVpÂÐ
N¸eá37.ÐÌÅK„f<Ò¾^@a‰&`¤pÈ_Æ8Û"ÌA¶“¢UÆƒ`EcçÒ‹ÖÊŸÚs¥E˜»^y^AÍâ¶
JzŸ<{>Ç<\KÂ.×ÛK€—qŸZ‚ÈË™¡rÇ*×êi8ïig‰—äõ~ §¿‹§	t"Ê{™¦oÂ˜Ú,ºµÉÉ}£\úö-HOg%×ÍRu@»U¼‰Bg¾:žÆhxÁe+BÄR–¾"Ë9DÅóÍÊ–öyWN9ë—«^Ép=;Ú›æ{Ó„XÆ3…_6Úí…Ø»dMª(V@ý“7˜eEÐãx°¥z8( ž$V~¼7Je·]†RÈbQÊG>F¼>:ÉÐ½Å¢SûAIßÑ"2‹Ì^ƒå¢«[kŒÐœ-íà×îæƒ@cc°44«ÃÊŽÈ… ®p:»µ‰ÇÃGªÝû
à}B[/k‰Ô:ƒÀ‰ë–°¤K‘×UDgóVë='e³<i,Ú†4ü}=¤iq\¬]”¡Œ…ÙP†¿·Ø÷èCz?Ó>ôÑoS©˜ÞÜ;Æ[AÚ+žã9aA¤n»ÎŽw´tÌ¸Až7ªr†nTšµfõFÆ'ã†qÊx²ö
E5ñ:—¿Wo4,o'R¯Z%Ý@oŒ›êWÍñÎá”›NR°BiUbóšRƒ S£{ƒÉñJf0)(ƒY¨9 âùlßg_Š]åK!ãÀðâÐæþ³h<'ôåhpû
6š½Šn0ÃnÀ:e’ºÎ\¤$vL2–îë–79RËM!Õµ´ò¬I@ |æä,ÎÏg 9góAlû“–l²ò4•¾² m:ÎÝé©ƒAŽÞàä×:Dªh’Í.áÒû[$¼:Rx¯VVÓy!mŠðÕtùaD˜ÍoóÿêøìVON½ßÎ1àlá»þ´Kì‰¹†Ÿõš»ñ¯¶}ÿð­ôýº)PÔ+Z¾}Ž-Cí_?¨¡xÅÇ*'®Rïý×#ûœ®å¼ÀMò¾'>FùÞ™\'É9ÌHN€(õ&ƒàsÐÄú9½à€úÐ=Ëqóì•½Ëz³O/Ü=€7°ØqmÖ*ÊkVÄn½2o³\æf+[õãqKX–_­$3Õ?ˆKåWë×,€uÝ²Ü¸öËÔ¼Ù\–m³™ÉêyY.H’ÉJzY6H’mÊ3-œ
2ëÅX¦VÌ-uÝ²ü¬|èÀ“7<fróÊõ‰7ÆOÞð*Ìº*“G\a60o<*Ñ
Ú£èè¹•ìVˆO—´O™¥ÙŒKZ¨ŒÆlÆ%mT6näOÓMˆÂ¹Ç<šDÂdœAg 9æãO†¦b¥à¢cMÅõQÅJàSŠ³€áâí;Ø´Jç\‚~–-¯¿	ÓÂWr÷äuB‹auaæƒ´\ÔÕ7ö,óIµÓÌ@3¦f¢bàM
wH§_ÓSÆÅÐßõiˆÃëo2k CDÚðBÜ€$ò$¡Ã7#ŸÝ4 tVôàÍ¦ù²Ò`LE.¹*îŠV\GGåO/$2!:sA²$kÎÓ_ªwì4Y°/3…ßCŸà»ÇÛâ2»}—þ‡¿RT{zà6'°n‹“.ðêsÅòŽ•†¿—–¡)è:ÉaÐûM!nç$‡¡î£ìHÆC»5ƒÇW‡É¥ïïsšL‘5Ø'4gêMuWòÓx¶/9\II•è[¶¾¸èÊ”'cû5)KUw$ˆ*Ohã£A+D¼l7ïÁX¡íxîS›VÒiŒ‘sRKËÂGˆY¥ý'©4"ü¤u7i&|`ˆ¤bêß™x:D(G¼›TEVòÕZZÖ4/ƒõ³ûWcØs™€ìjÕÌÒ*v@ãK]iìMK+/‡à,Å+›V”}è¹©eà[}Y13s¨ÙB¿X5ÓÂ•hµ¤æÊDñt¦×ß‘$
çœÛˆû|ËUQŒ†z	 N‹PXÝehPµë(±dÉ_®ÜÍ²Ã|¹’qÆ.W4˜û—+2,+Zu­‚=î«•DiÉ.§£U–.ŒÑ·øðg'ˆÁ…Ç+^V^“evÜHV–«Ì«´N®}.MdA—1çíãEX¨a'¸i©Hk“C+DyÊ‘A^¤•.–—;¥ŠE«§l±¼*.Ö5nøÍû‚"½*Â›6ÞqÏÙRóç5qR"°ñ~4F¿4¢wO-°9¦e{@þÚññÓ¨ ³—%æ­$ÜUíçÉÆ­*–Ü”¸r\rÙŽºIËÝa€LÚX\àECBŒ˜Å+PV«!¶/bo`XÂpÙÈv'p^1¾Žj¦Ez«ˆO²MU¿+Ïª''‹[M-Ä*¬¯ “gµ O/i7“pø—gÑô‚iÏaøÊNE§5ŽÄ±RËÊ×*£~é¶v«¹•âm:å8^÷Ãœ²é˜"§hò±h·‹|/´“ûHˆx‹Km7Îœ9=BÈÂáÑ° —J±»xfŒMÒE4Å¶¦X2`®!ûÓÇ¡%”ø¦°e—ô8Äß+U¦¬Õre½*ÑÂLQ¦—Ú[·‰—êNy–[ùWÍ¥šXˆ;O›tbÇ²=íÛAgÃ×Æè¯­J]å­åÉ[)Ö®Eä—š‰ûÄ5:õqrC;Ò8[±ÚÁ4X‡²7Ë”beÇŒÆ€±s€kSEÏÕ[.J/Ï–T‚Æ¤ãMS;ôºIôyx
F eào
¬‹ùÂšsŠA# \L6ò.]Æ^y7/®r‘Ì„ªÄØ¼Ù=ÅÀv¢ÚÍm"Ö$3å§6¸Ûð|±µ³Xju¬4Ä>ŒZ¾ï5Ë·÷Unýeâï˜
îN¨ïµ	VËÚÄ·÷ß_›ò©µš3Y\¶%¸ðøè£ìþ÷]ÍÆY42A²/Â6nx=ÌCrPÀC!gü JO*_Â4Ýýªz‚ƒ< ‹þ{Cï¯VD&Ó°¯‚’a1¤/hH^¶L•ž^ÊÏwœmÂÒ™7_ÄSX>¢»îœåÞÄ‚‚Ù\¡¸¬—‚S5ÄàâÔÖfkv€àã}XÆÏr&£–¤d²(¶ŸÃX±Š@Xl/r=¬OŠ»Ð+\ê•†ž%Rm¾jZµ\ËÚíÃx{Œ
O
}QcÉTêmR¼ôšh#$7ÌÒÕ•‚ÑÆMç²j!¨Z3m.¡~sF³Ý~³yLþ;óéY!–O4íÂþöd‘#Ò¥rW¿t€„+1zdZøåƒ{qY„VâA0§Ä!-w2é9»0øÙ*mk#'›u³£¢5]¶Ýd‰;Ä¦R5,ò ÉƒÂëÔJhy’ŸIÿ¶„ÜKD
Þr’™×1|ºF¨1v]¶‡öä°ÛªJ¹ë£“ƒl¬Ù‚d4°¬v™¶«\Š\À´(4òF¤žD-lFWÓ+Ÿ Œ®GÃœÅ©ù¥ª«ÝÝµ¾ÁÿÿÐš‹ÞaÞQi•X‡/µÜJfÙÇPŠvóòå•V*Ý+µ«°Ëû©`õ$x9žVW<Rƒãt©¥v«ß•½ìFÚ¾}©=o‡â
—ï¸Ahv±œ˜QWCQð	¸è,¶ÂÏá,'ÓzgP—Q×}T„Wû_î‰Î±?<³+:…¿6—³'‰#"‹ŸÌ‡¹Ò "Ø™ @ÇÏ%&Gè–l¤ý“x4R^ëcñ2NÁ‚šÌGtÅVQYÓAÌÅ Á‹@2‚ña2°ûE¡ŸbXmÕÊëC€;ª"	mÐ6Ð­zËúÞÁïÏ?ÙßÀèz»è0ï³øð“§YÆ¬W|gÃü~OÙ5ýñË±¶B]]|¦¡.Ý£óîç†=mH0MæÀ©u°`¦IšŠMŒá¬ˆÁ€ ;/~üóŸkbg÷Ç?ÿçš „™š@pœ5ñrgôãŸÿ—šØD/?QZüùùó?W-ˆ«pp2ãÆS‘L‡3ƒÕ€ýþ]’œ’L {Kv¹è‚L‚ÑÛÓ	ë´pHJú`t%ÞnÀ 6£9ª1Jð¢²FKX”ÌÌ&€9ÊŸ$£|NAKa¤ë”€½ÎVØˆ"î¦du„ýÇ‰H)¶´{ŸÄãßŸ,§ÃÁð»È•tRƒ¶üð7úûoüw ?~ø[90†¸Ý~Š—)ð²…Ó·¢²ÿ¼j¨±e¤ùò`A hÍ3"‚òCÍ-ë4²œžD0Å£y
,>\`P’:2EY÷Ž-‹ÃXËú}Ýô#–nž«’èÕTI*» ¤ÙR!¢7ŽRE«¹ÙÀèÂ?þå_Y¦áÉ-ù›„~w1…Ÿýå4ûŽT};Gex\giCDCºH„ :”>]Üahxy8œ,@º(NlÅ6Ü[II)¬Èñ£E5.	àÐ_Dcß€‘ôËâ7PF¾Xè:A¼a{¦ç5·a#€ÛÐëq66¸‹Õ;2(©#<ƒqU h6X
]ÞŽû'kç'q<"Åˆüm‰[v8¦~¯afÉ8¶Ô8Þ°$ä\%DÓš8 ‰’’V“g¸¯§„³&î/¬7÷à‚‚ãz×ti/´Ø2Õû00¦x>+%`ƒªHÕm¡V”ÒÚjÌ¨&¡áaêÓXáH5`êÓ¶)và<NRñ¸P£^…2A-C¯HmÆ·cºÈ¦‘yì)Â³°GÍmÖdafš6hz˜Ó	Ê…D)Ò3‚„ÕhµùƒTõRM©#Áq«ãè&ÂŽ ky„/ðo"ïÖQ¨-ym›¹Ïÿ9i|èeÖ kO‘çhDÀ$¦ŠO´–µÁ°g6îv,‚¤eÑ&”ˆÂHßÙí®ØCëˆª” è„$=<X–!Ol,ÇÈEà˜E|áuS°µm Uô`|g¬	¶óCp
EHw§Œ¦´#'D{Xø±÷1Úgñì$Â{çÒäkZuµ&¶Oñn$*Òl™×±å³GREÚˆm;»ƒ§€xJf¬ëq«gïØ¿‰­jÞ†U¡¶ð¬¥ÊRÙŸE?Éâ*°
¹s#û³xaýó!¸gC`©a:÷¥‘.PZdN@+pîÏGGó)«ÿ£ÑJÄÒáÞa¥lU²Ãº˜ma˜N›¥?Ÿ,4"‰¤
‘œ*Ë›"†â®ê]KWaq¢W•¸feZºÓBPî4¸¿8åiúŠm»eõyö²ßWÊ,ô‡’=ÐtÀj‘LèkŒh†ÁÚ£±mhò¬ýóÇ ¦`‰#°½I\uÛ•{mýZzÍX¤ëåtv ¡¼PÆ¥?F\ €‘3¹ÒÖFs6Ñ-ƒ0!ƒóŽhuJñ€GML‘@¼Zé}23Ë#*f0'¿£±ÔzäÄSÓéí´M` Mi”SÄI,f,ìåÌÛñZ-ðû˜v´Jù€µZ3fyš¦Dÿà™\–žµy<½º‰D^ÅðÞ ToI_4:Z1ØJAŠ¥\A“­£ô; â‹Hã3„ä Ø³®³HÛw®:! ˆBÔWhXC­Îü¶Øcàˆ6ö\tð+¬¸éG—~üÿèñÿZ—¿hqnËÕÏcù^ müý„1:I«HˆêÌ[B‹ƒ×2l^—Û©s 7”åª7ä~Ã.ï*÷¨îYÔß§ß\Š}¼'±øýãkb/9Lf	¬».Ç1ß¿?„%ô¼†~é sãÑèÃ¡x¬gšŸ‘ºÅ£y}(~ài…â!°<üÖ`X¯G-œ»[9*k»aÇ2…;´/ÿ‚·ª2¬—ÞvÌ¶üx÷k7(*ñ”Á9n®q÷\pHF
BÀ!Í|à=ß ˆ8Ó¼i¢¥Ò^IU©Ûúwi_O$–„Ô	Xç8`HRÛ=øSÇ?t„ÍWðÚ\òé·çñáñ¨þÞ!J€ÿj½.^@c0\’bþß½¤]ÍùÐK6ÞO¼gÐ_‘€žl–Á^ø  'J÷ïŒ_AfiJ"X´–…ÎhÃóÁ¥A^pÚ}û(éÏSËöÈTjÍ:9-ÚËˆN:@¹àö6„7/ºdPü¿°ÀepXPiÃŠ NhdâÒD©Œ”«rò§nípLŠ¥™´ZëZýªÔZÆDPUº¸	
îla™{²Ì¦_ Ç‰Úœm@t˜"zb¼DnfÉ„ Ýð}™ªj„2@vÈØ®àmvY£“æÈx€%ÔˆÛ‡ñ®BK´E‰ÐÊŠÏ[_ªÙÆzÄÍt0P¸‘‡jæùÉÐT^®‘=5›ÙH·åÕ^±šé¸¼I*wPæè3ÑRš|VÎçœ™ªþy<>Jm|ˆ:5Qƒd/ÞTc#ªÑõÍò:	cääR`Dì‡CÚX¿:Ò†¢ÔÙ—”QêœÙu‹'Q'#‡*r´ç²YÙ^øºórËÈÔo|íËã"%QOÜ ¥¶±Lð8
¸U´keq¬²‚³Ü¦È]ÛeHí’êv¬Z'£îT¶¦?gÐCrÚi1\)‹þá ·¼òPç éÔ’¥~qÛY´+ÛYÚ¨¨¢E‡aè(š¤1™¸ô-$Ø8g5BÖÐÀ}±™Å€P Ã/£Øf'W4]sgÙôöxvÂŠ§ŸÅÖ­¶lì±ÜëÕ„ùFv;£]ô9C=‘Ë³åóyHTx¦v—ÂDµœNMtÛHÑ­^ÖèF…pZŽ—·ÑX H«ªŽlÄý[a[€8øýêu¯4Â¨½ÚO·Î_à~²^ÜÖë¼+JÀ"öï­œÌf“ôöÚZ0þcÚ §…£Q4Ñås-úct±6¦k3YèÚ´ÕÞ¿N‡cx‚ 2&Œm^Ù½Ï¦q<[ON¹Œÿ©Ù€òÍµø‚of¬AjÉ½æïUõÎ0@áÝäWÚÑû±·™ßÉuôª ?ØÅ@­ã±£U÷©_B {7%ä–ƒ+[¦Ñ1ZP,þIì÷¡§Føý~B1ÐíÖØ,Õ"ú’¶YÂzDêN‚á¬lÉãKåz‚Q‹}ÆÑð²[é eBî
FhçE{ek'šÂ£Ãä‚ŽDÉGµzw“çßí®Èw<Ør}Ê•ð|·³²åzA”Ë¸Û~ø"Æ9¢\¶—;£ÞÊÖË“$œ$Ó9ô*h°¨2’çÁì„[®¬ýG]è€R¥|?‚NàÃéCïdºd?ì?Z×”ì‚Âr	ùKiBºŠð)y¨Ð{Ôÿï	º†µœ8 ½‹ÅF)°6KÂèxªïûa¡LÞ¾ðJ,‘”ànýq5ìˆ_ˆØ¥@Ç‚$†¼Çä«pC{ò=BŸ…käùDüdÙ`ùÙ]#äÕ‹kdBOhF3>‡/•_#í}¤Ö„æÏ«r$×F­è‹€èÌÂ”í-™rbç$ÕÄ|¤ßìb¿²U¿$ ËeI•žœbÍ¨ŒXž"ŠY\;Á7Ó«Q«ÜsèÒÓõSõ„½ÙÚ®~üÿ  ÿÿì½ËvI² ¸Ï¯ˆbÝ›$ ÄƒàK"«APJ©K–HeUR'3 ÉH$"@•W«Ùô™Ålf1çÌfæLÿ@;}ÎÌ¢WÙûšè/˜O{ø;<ð %eÝê¾çVŠðð‡¹™¹¹¹¹¹ÙÛòÖ½ÈìFóùAíô3ÜPµ+¥2-‚XH° ^)ÅJ¥N¨Â19SãÙ×ô¾*ó!FšÒ¤”Z13¡T«'$ZëE˜N#<Þ&ü¨}ÞàYÄ#|¸D^^á”2	Qa<š¹¯ô‚’å€FGdÿûž2ô…f×a®7 -³ùô;¾þº_Æì9=#†5ÐGd²ö¦gÒßÓ;zwÞnipë4Ä—øêPæ<+™Œ¢@ë¨Q³½ã‘®y=ÄÀì8YÂémf˜ûéByçIlM† »›NrjñzÜºxÈ‡]p¶Ü«HtøÂK‘“óóØOÀ8X;§9‚ÝÙ¦¨MP¤9ì¯¥Ü|Ë&²ÄŸ33ÕÜ0>Rð½Â§ãFR"~"ž6`ÚxAÃ–ÑP?HaçÓy
.ëaÛìA¿oÖì5¾¬}ÛÁ±ùb‹é™WU{5Š7†Ÿ£ñqÙ˜;Æ˜†/+dµ}¼…h7ØµY3z¡ƒèkA»‡±í+ïr¥dPÀžhOàg{Éxˆÿ‰›Žgýa„÷ðiŸÈ±e>Ø‘¼mø°¢±xý†.Öœ·;}~~@Ëa˜ôÉn4°]\1Zß8ÜÃ¹3'G%U?z.³GYIêM¾zÖ·¢ªY¼Öqž•oí–K­|Pˆ(CZ°k­d%Ÿ‹­æ+^=AŠoÜh*:Ûª§Éèn‹sØ1ç`8KÈÉ7»ILXåá»B¢ÇòÆXÊ%€0¥¥ƒº	›’òáÎn×j	™.êzÂÎûÓ"6ðÝ_¦‚@|"§Ör1·oûÄ4šÑ'KÁÈ¤O¯Y6µ¨Ú‘¶“ÁÏw)÷“ZQ“3Ó¢Jæ¹À_Ã³Ýù+ú´àbÈ-Î­%J°†ƒ¶Ç[¥—"rpDv@è"V…¢æÚêEx_»ÛW‘~Ùýè"¢xŽh©,ê|{í…s46Ð{T;ï=æKÖµ§Õ*è>óÍ=“-žöî½&Mæáµ'½>‡¯0i|\<Íí{R—×Eý·×þPÌÎ}îSÔÝ×vïÚø×žl!#3ù3/÷ŠißT‘ï1sÖuÖžz!G.üu¦þy%8]pu¾³ö‡B–×Ç‰»×Ø¿ßTY\{JëK¸å3qTÅûL~Û*	˜ê_Þ~d’¬<µ[[AµZNÂ,Î2ôÄ°,lÑ^ª P“qx»—¯_<é¾}ñäN‘Òƒ£ûº©ŸÖô\_v[×¥ÆSJqš;À4'óQ/Á÷ò]Œ¿ÅÎõÛmú¿JÀI¿8PÈo/èÿ6dPrôÄØÑïcŽ¤ _Xâÿý¿6ûçøgEýbø=Žn‚ógož<©qðÜV©Áôe€¶	À'¯Z0 ï½u tlR±aþF1f‚fEžhéo¬m… çgÔª0ªÊ!3dÔ»‹*8O7Ò‰ñ‘Í¡PÊID¹B\÷Ù¶‡yÄù—âšË(3”‘ûºT®ÂIé3ò”ŒQŸY´mF{ugTv»’´½6Go	Ëå•I·mn{9éŒI, Ÿ¿Vžˆ¿ü_^2²r#ä«g-!…ËÂB¾2QÊÁk—²Ý^}ý¯K³üzÄìõåùØoì”]šÈO0nmw¿%ÇÆÿ¶÷¾ÜàÕUF_&‘¼¸DéV^Âð-Éðû2|îu'¾ßõpý³æk×“¿Íž_c‹øyä%åÙÝÿ‚,/‡­zÇ]ÆoX¾å´Çc•z¹²°rÕ©íÙÇ¸j“mÞ“qñ|'VÝöŠhtêòpk‘—×>5	}±¿Ûj¬ ´w|ŒÛ¯X¢Æ9iÉ6Üšã7›ýv;Z¨cYûðözûpÛ n{…}Øsì[E>ù«ûÈ>ðÑÝ0ähöÔ§gù¼ò–ýÌZßa¯Uß+ZßwRÕŸZJRX_~4\Íy»P^}’ñª_vÀÚ~›ó1Düb£V{'- )åÓÚ>µw°Þr6¦»¬0Óþ”[bè¡êYc®Ëê’õõ§È¤T¸×n_ì.—«»ÿ-.°{iê|½Lh‹§ó{;;«V®ríEúBÛ§/´>‹¯pD/âpï)ýìéNñîazR©ÍTm}[¢)¬Ë€×›­¡'ìTÝY®'è), ¥·’—ž¿ük‘Và“U>}ÀãÕþo_\ù,iŸu£üÒÊôËŽWÍx¿“™ÜT–Õâ­`‘lÝñ©Åg±•V¡eÉÿ‘þý¨óÒ£A^$j{›ÅCtcú³J ‡6Â«TßKµ¢§Q6›Ž”¯‚p¯¦¹ÍöŸV«µ¬2Ú‡vFm8=ï¬Õ¢ÊMD‹÷Ö#RkêN‹ŸJùXP)¯L¬¡J¬¬H#Ä³®ƒ‡•À_¥Ò'C¨iKë€ò¢ÖÔ³h8‰¦èÚuÉK	£ŒÊâ&
>•Í.eW‘L!ä%Æt£?"zù&ñœ(CÐŸs/%nâç’„)hF†hƒM±‰£DÎy†æ0$ýŽ_ãÎŸ04¥M®°©ãåÑïÚÈ1Ôn4/ú}cÛ*Zž+£¼ô\˜‡BFÞÂÍÁ¦›Â¾Ÿ¦öÍà¡1³Z–œe€Ë,ÙÚ$Pæ°ßÍºÙ“ÿGöøÈùþ¨*HjÎ­bÏÇé—“mSÒ 
GPÞPÇ&ÜtÇ–°)R™Ì|C›¼hÓý~¦˜)ûØq4F›9PF"É ùPòpg¦‹òhö²[Ø‹EUÉô‡Æªâõ ¹/sq3Ñ 6Ž¢ÁÛÉ WÒ!}dQÏ]ˆÇ¸uâ7ôËE'L\mè›Û§ìÑ‡qö0ñœß·Ö°#ñŒº)a—îãÐœ›zµÏYƒvóþëm•¥ã]šæús–f£¹g±I3¯¬¼rëà»h!|÷O?Ë¹\qE|÷Ã—Y\EüŒÑ¥¼"Jy! ÛvØcˆ<·1J¨Ë¾Dl›ž°ûe,3)ÛÎ£\O´´˜¥€0•`gÛ¿úÜ*÷[Z"Ï%1ôK¼7Bj³õ™õ	¶#µ'Æ=šdWçQšá0•%ÄF¢Ž°¾Ñ<£”l8T3.®QP_Lû‡Š!e'ÄŒôeGpeWPŽ±(Uû/f©€}•Nû*ÇºuSdèkÖd¼[.ªÔiÿe”^• ^§‚µUÆzÌr¾/N9øã–…‚+H3çÜ¢ØI~Ÿ'Øã±ƒ1Šä¿{ï 2ºä·J‡A«éðÂZGvÞÇcH©\ÃBzgPr†ÀÇ\ûØ_[T÷'^pä2¯
¶„ª”>UVs¾Ë èQßâ
©j•1ÛÝRÀE%š[E'S-5‚jašQ‰Õ2§>«B}p[íÿ¼gË‡4&«¦YÍ†Y<Î±ópZbÎ1ª2Åk“°˜n–Ï³ÍøS¡ÖMìÏ0‰•tV$ÂÊy:MF”È:-ñŒ|" Íy Oã¾!Äžþ©Ð2š">lËF(ÁÚ^ÛbÍÚc•t–¼‘-
>ZV¨¦ûJÜO)”ˆ<±"Ÿ¦°ED¸@	Çìˆ˜5ÁÈp TU–ã|‹^á,âoeI¿ù\M?¸=#ðøõ«“ï_<yõÍù3Jt,¥!¡¼”ÓT4C%øiMçVoÓã›SrèB8ž?”6Íh-†‚LØ±e1–hñ@jz´÷¤©~Ë6c7"d[UO£)gè¹Žºôµ„â[Íd&ôâr+WþŒÔŽ
åNÀ¨Y†ºƒ}Õä Þ*È†;Is JRõF|A–&Ôˆ‘Âøð(Æ"db‹k¹F5½³ÈOî™­;™ÝœÆ·Ñð²p‰DÈDˆÈôÉîu˜\ÙÚ÷9ð95+ðQÉåüÚ 	Ö0¹ˆ£$Ectë<á|\Žš­*‰t]˜W‚·¸Z½mæ©óL-G½˜Ò•²î©aí€“ø„JN‚(.™½¸ºÏ žRyÃêþD†‡ù!öÔª±ÍI¨` 7ù@Q-Šàh.ƒƒÕ„£•ƒ£iÃQ@ø i–Mœ’ HBIRXòÍJô¢×’oQ-[&.ªiHËEÕrS³ öL]Ãéùhƒçã&•…:J¬ÈÌºy…’Õ	æ´Yö$çí_á+d8–¢2Þ“p ½œKQ³ÆÔè1¿Ö
GÌE¯YiL­•Ù˜…‰e$" ŠÒ7V†‰(²&8šŠŸ&ïš°<±"0âÏåy™“ñ©Î*°8î9ç-	^ [¨ÅepÈf÷Ùö¦±šbTŒäºq-²VËÑÜÕ6èy¨éßAu®Àdó¿Áe¡œ™`vÑBD·07ÜFp Šäò¸¹ŠUöŠ­QGC5ÌðûQP/ÛR¨60óxA»wu_^`0‹·wã»èÚÓÂÓ¯³&¼};uDÿ-=c˜ÌåÀ¬ z÷µá®m¢RÈ…'ãuVÔ¤kÔÖu‚®xÏŽ–c[‡äpbpÎæ˜~X#7j¢jÏ-8|âÿ\”++›DÞbmu&íŠV¡8aXeÊ*ä(kxN?	®]C†#èH˜
x¥ìï	(‡òw#gÊ#Â¹!KŸ4ÎÖâxÜŒÞ,éÐT´{M;ñq4 ¦Á×ôÓV¶èNûT%ž2í„Hú^ƒ“ü“°U¢ø–§vyÐt€uj høLîaÖ8'Z‡Aùh«†0*ÚÀçë9P"dKX–€/`U³›EœJ}H¥‚3éomþ—1®Y|ƒ¬ÃPkn¬hõîåD£ŠÀh*i}³ŸLæ^Â¨ªÃ$ùÐÉtÅ#4MãGžÝeyš¢N\G¹aÜycí,D¦B°úë»ÓÙÔÏÀ‘†Tsü¯ Ž;ÞþV¤ªò|à_QÛ¢Rç^¢ŠiTäø&e+‡ªr
H†×5ª¶MÇâ<‚f¤· ²ÈëÞENzž1Ù±Aäèeºb±¥Ä"Ýðè°®Œ]•Š¸3íú#aä|4ó¦KÚ~);#YWPzŠ¤édg¥ÍÊ&;~…(BÃZ6GÖ´Ð®D-žnÉbª©ä1¥ºÒaË™U¶?’mõaÐx¶ÿÑm/ç‡ÖaèÁnö.~¿Èbì´?Î·ÿqåö+YÁsN"´M¥„ŒR%eo`HeŠ=}n.‹%4ƒ¯¿Ö<ÚÐ=âñ,zØý 
î³2^‹+…Œþèºì™IçM÷û7“çoÏøÊ í.ß3è=©èòA÷VÑWv¦*I˜»q1„ÆO©Gq‘hQÑ*%T@j§rç¨g/¬Ø j6ÛeÏTFñ€-üÖBÄ^¤RP—…Ü@ËýÐ\ªïÔŠûg³XPú=îÒßýðÝ?ý,iýñ—¿êKÈ\ÿgòÂÊ{¬@¨˜÷¿í¦ùÜÄ‘ÊŒ—e´ÒÍ]zÉ¹>|øheNo)NG$±èëÁì>˜]|üjÝÎŠÎ6‡Áv®ÙûGC¤o+‘®ãU©='"ÀG6õYuS:-¨ªËTÚÏ«Í:“Þr{šUy±J‹ñ<º¬hÉW¥øÜ¶a~6ºç‡i5½ÅàýP–­—Æ§ü½ñÑ¸Ún›,¨a~¹‰§ÝÅE²æœ‚¹xÕ$’Šœ®ƒ-[K·õÚ.*/^ÕZ”íL0t»«JiÁa™$0¶ÓÖ’ÚjIÙ‘¤)R¡\E>MÄeñU¤H)jžÓDÜ+n§!è"·3Ð/Þ?Êu;¯»lÖ»µûr×"ì$L¯"ÿÊX¸6PPÁÊY<mûÛe8QŸì/Æ²qÚäV›)¸f”›NIà¬"'l5Ä2Ìã1¹O“ÓS˜§¶*gØ×ˆ!¡fy±˜N\ÏÞžp‚/Ü=—uÈÒ qó›òdIµœ¿-5ëxÏ¹nH% ¾„÷GP#e.½ZIXÜ¿¡Ù®é¾Z§vüd¯–ãøjÝ²¹¿;Ë¿|µî”ÕÝÓ3¥ÓÙ|ÜÈÎÎNW2*»’L…Wk]Ž8f{ï…Ãª7N_¦JWèJâÈ4º=”n!Œ*6î€}ÓðiÝø¾=¤»|T‰×ºÀwz™‘8&?òÝ( i|«¥Ë'¹hw‘£nOu˜|šuèT¡ý±$êå¯Èj”üGÉr8±—DÉïhp¿Í +˜y‰8ÎÒã­«l4<ú…~œvgi–Œž$¦vÎ²+Ðya{Ä×5ãÁlüc£Ùúw—X€²{Ã¬öJ„E¹“»Ä%ò5	mL`Ù¬7wªõ½j³…Fè%£*à“xTÆiþ˜ÌÒ*9Ò¥¢“,Î†= ŸÉ_ÏÂ)†bé/vÓá¤Ijø,¼äT±§!b?ÃèŸ×"™’Ê”s¿Jø%"@1Eq%ûMÒ~<ä4Li%˜\…i¤WñEFžXòD·?(¬„x§rœ‡ž\ÍÓ¸/?¥Pôàù‰ªƒÏˆ6€)®"d¨)žÿ\ÂÉ7z]GC¬ð˜/8ë_%	5®6šå
 ýVÅóãàìüÉKüýy¢º(;J…êM=;«žžmWX»Û=;«½ìœ?«=;{Z;Z;®µE¯§uÐJ¨h;r¸ÓiÇ Ø€ü©Q–"f8~6Ôë(¸×¹V‘@S’hgº‰$Vx¸"UjAg€).`Äø/¸b=a™¨sMŸXÐ+çH%É9ˆ/Dlç ô·ÿÕ€‰EðÜÖÆŽfJÃ‹¯ã†OÇÐ¶q6ƒÉ¥N%8¦ Àã9’R``N¾üHâ/†·¥¬+´7ß/ÿwªíßþƒ;çoÇô­ßÊµàiDV}ˆ‡Õ,»ûæ\` þ›L"zŠCÂl‡ø¥xgñ%5-5¤um¡k:Vh4	Â^2·¸Zu-(þ0N2ük›âH£[1ÿI8K£-îXÉ,ÁÓx;š½îýÈ®XÆÃ8à‚p8ÿKDïP¬¤³I4UÁæa¢,´‹EÈádgDJ¬©—i”? ˜ÜÅ¥8ðÅ0‚Š	O ‰ï €Á@óàQ(Ý"NéR=ÞI4ÂÍÞáà˜ä@q¶=ÌU62ê¦A ] ™ÿB" `‡¼JÈ‰à~DÃa<I#‚2˜¦"Î¹t¤1î¥z©Iv€N&´&qrBE´âBíð˜¿ÛLö§?£d ¼“Æ—´&AÅºESÈQf’p6€)„ýsÎ‚ #`„lÈ® ÓcØ?¾Aƒç4ÆÉVÓóêN½r9¬â*»Lª»ð3½SøV÷Ûu1­f­‘/:{—Ô²]¯o5êœÅ· ©Èz(?7eûWnVÈ§ Š/ˆ{zYYÛß%ª*]ÌAp´Ä©+Ã(ÛÑT”6¶ÅûKÀZ4N£óù„»±Þà(“ƒ.¼ž&@Ô¯áThÉfì¯”¡V‚	,
Aª-€4"¶/I›Òp‚1È³á±YWÏ±açÁå•½ãQ’æT¯³²Àu.„D1–¨™ò®©’ù±Þ!BÒiYk˜…7 n9Ln¨-”4c>‡^q‘£ï2?'?Jéôÿ§jxÓšÕFûŸEaOênŸÎ†CØæ6-zÄÅw`Ku~§¥ªð†Y0­4«l~¨•ü×n’0C„·(sëµ&Ö¨	È¯C8Ú£ÂJ}ßÍÑ6 ­7Ò6^Ã4Nø ù$ÌÐöƒ)}Abà™™åA…~wMÀ²ýTÈvÐžZÒý÷$Ý”ð]–ðzdÐì'°ø‘ŽÖâÇ÷*U\þ”D<,¤úBVí­ÁZú‚e¢éItÎ†˜5Tr9r@Çˆƒ‚¿ßDË“h˜ì+.
`£šYplJ©Ää}ˆôbÕ‹@Û\>DsM ˜ñâ™RêàKsÅ²aPb-›O¬)•°ñ;¼Å|¼Ö{î‰Uc*†û‹Ñ‹­G½Öûž±bB8ŠòÒ47. 'Á7µã…Së¥?ÿ]LMmÂ+ML3‹gv§$NìÙ^Ý™È
w~íÜü~ùkáüNQÄ÷]òI”¦Rc?¤—Ê;eRè^…C´uF^–¥TÿŠP¨Ù«òèÄ•€eO£éªZpµtªRÈÐèÛ×¨=. ÝÐ˜%¨Ð‡œƒ„æÓ°4f‰ô&2Ôï$µŠ¢TåyÍœ]€¼$é¬pz†£å*Ñ…œ))àC2„ÍîX;åûlñûbö™F7pr¢|yˆG–µ/C4.àG‹ MA¾Ñ·¥„¶´Ü.¡'¿üòúPâWØyÒ<¥œÓ)‹ö£¤—F´iƒdÖ#ƒV2	ä@î4°¯…WDf‹à
&÷ê°6‰úø†"ÍV¥@ËC³ù$Z²ÔÎ¨î2
qûãÊÁwË‹oZzA úÉR†ÝA«VO}¾¹‰Âëh%Ô‡EhoÝíB´bžÐ±Ü`yk{g]ßm˜Z¥sÈOéü0$±J&pÚžºB¾£ÑYÊPy${@Ž#lí?ÿ‰="whDíKãpãW¥2Ë©šp@“ä4>xÀÂÞ%¨ŠT"2î°‚‹ò
ké(IÐ.HyÓ >%ëƒŠ„/>a£vœÃ¦Äù	tÔûRÿÁÌ>›ÎÆp¿±vF%m“%bM-˜…”íÿ´eòAÍ€êßSìóÎ8Kp sü)ºÜÈãFÀ|¿Ø&ÑØkïœ¦jO§Åe„g!Š%à_Ç=>IÙˆº@“[âôY6v&ÓÞˆVIaÕ?~xü›“×Ýó?Ÿ>¡ò£¯ã?°‘/7"Lö÷X¦¶yŒž´xè†£yv¸ñöüiuoCÀP:ëøi§0Äá=+<ä7PUñ=foù*Ýr‚æÈ‘¼8rmÊÒøx‹+|Eyç2výù2%ŽªU8­Š{<‰è‘ú„–pø_Qs¿ÕÓ_Â>úîª†|ÿ§?Ó™W~¼Ø»/úÎÇÑŒN€¿e¿@ýQUÇ­íF»m™”(Ø{Ém¤$ME;(RîÆ }Hq’“pÀAŠT	¾Û¯^„£xÂ¦øáþñ0xöÏè÷ShT	6Ï¢Ë$
Þ>ß¬o’^’%•àõíü2W‚·=`¼YO« £áÐ|ûoÍMßz:êÉ¡œ>œÌJš@†aÞøªQ]ÎM´YŸ(tˆÕ}\À¹J! þ®äK-zÞ:©{/JåU1;ŽG*,‚*GF@E»~}eM× È+91‘:ËuC4ªe†}2á%·*žØî×U¹ ¡iHÃ”.“›ÓhTÐóžîØÂžÉÇöÍÅ¤–Îz´€ŒË$ïÄÅåGyPÐ»MA#z¬ék¨ŸïN”Kô“6%TøgîòþÝ(`Z{¤¡¨µ×†Jú~È©ëå4V—ýdŒ&dcXÑp1ZÛ˜mT!§š§hQ¤p-Ö»ˆÖhê‘û7vt!×‡2Ñ‘ã\\†¼)ßc­YL(
@xÀ\<ïßÖ›õÆnÁ„÷Ve€ºA¹dÃY–(@éf³JÊôº~#‡‡Þ0éÈ33Ú)ªP††Ÿ…~&—úí8KEÎ’“µß{ÙvÏÉÜv7IñÅ¼Ú—ºH:	AC‡v¯Úk‘¾ÜúS¬¶™¸€ÒƒM¿@,¥¤ÿ½ã,ô”œvã½êÂÃ¼¶n±¬s~ƒZ	z3ôãÕ×Ó²Mt-†Ó"ƒb5¶]¾U|nH${·0(ª}Š ÑéCï•ú‚æ 7;Œh•V6*ò`êà
ãüH|ñ/C£2µ¯e¨¯õ²ñ*+ƒ×–»­ÚaÛ)…¤¦DUj“iLé<’yo»ïŠMßGoÏ.B<ý·vöC¸šð±2¡P@²ÄÙ®ÿ.d‚à]Žxß§u½ÚNáÌ¯š+‹ûÑ×½XsËó1äÄE·jÕ,Pøî ¶¡ÿC5ºL(‚žÉÉsÅ('$«‹9ÀMš¾@Ëœ£Xb[#†jøˆ÷x‹O Ù­?±:.’•]5á+W›È|¸RÞ8ZÑQÅk	”8„å+;ë®›o×úæèŠ*%ïc¡CÅƒÃå ÃW„ÌÉ‡°Ómµ‡=ÞâfVò¶ü –z£‡ÌWafæ	æÝÜ©E…€D¾Œ:÷f·¨ÜhÌRšæÄwllLÝ°’Ó%dÅh7†!ÈUjãˆ]¦i	$Ì?Þâºš7ß^ôÙ97ùJ÷Åv482ïý”qµžšØÓQÁ-!¹H ýø ¹Jo-Ñ›2 
ŒËnZ«v³-ºQw’ùž¶==Áz$Œ8ù×a#OÁD¾›¾`	Û€q øÎ†Û–f´yC±Þ‘‘ÀFc#©¤QWlÅó>Ph7øéE*‘ÔÛøÌ3ÕÎL?áL½™wGºXsä«Ÿ‚yrBËu¦j\'ñ|ëb¾­5á¶šð~ýóÌ¸£œ:ÀÅ9MŠy¸V_oÂ!uÆS­5%qkj²õšAßÚgŸï1ð²g¾Åœ|‡ùÿúóUî$gìò`Í—ÊLøv½³£Šœ²\¿­ûLYOÌéŠ£
É¾íÇÙXÍBœ!PUš¥Ñã-®ìoM{;6>zCÁy<ÊµX’dÖ€UëÄRºj=KnG×Kƒ?&Ó †5¥ž'Çêä\_ãTò½y0‚r‹«-×r”ðå×(¹&‡=ùr–ûé~Ÿ	ÃN|MkÁùU$š{‹ xóøÌ>bÂJ)ß8*p\üS±hr> ¥‡ÉMZØoÞéUtY™¸8ÄYio­ô*D%rÎJ)¢9Æo.(ˆ\zàt2SJàãa|ôcäŽ/œ;mö=@eŸ>'òV.u\FÉ5oà-ïP¼)coW¾L¤©kF¾|œÇÑp@WŠ”îØ¾Fm5öAéu`1 ”>M4ö4áKJº1Lç#~¢‡n¶xJÚ^-èJgUP!óž©ªx¨;œKçTå•J¯¿ŠR§Òq=¨iP`T“ƒMc‡"¸´ ¿‡§:­€ìUø *_E\YÆà·˜î©£Wuéœ~äë••¢hSMŒu%ˆd´$åï9	ÜƒS-{HÒ¥Vjxl7ÔšÉÒÖºªÝîõKc¥\³åc%»í;KÛQ-g¦Æáná4zvjÿYþ *Ùmåî³¨©¬c2É	Û÷/`tˆÌ¢Îð»ªîKZçZ½—´òð„Ð'—˜c
¡—-o—‡”ô›%Ï$[PS|SœqÄù3NßÌÆc70)GX1ßn=¸awñ]>Úk<©Iô•^x€~§iôt˜„YI¯v—QûÝôrýì[2j;KZ4	¨x%xã´g¸Å±­ÑƒZÑ¹áØ¹Ö®Z ™p»5êê¥+*‹º-óŸÂ(¿‚{º­‰T¤¿óôÓEä#]õØSõØ_•PæT÷âÔÍ_þºi4EFvZ:8´+»P9X4*Ç:µ]<"<·›~$¦áMîy¦LÝ`æ_xdÕP)¬¤v¾cýTºO2›¾
†
¢»\ò¯‘qv8"1ùßˆ”ÝcÛ‰CøsV‚^…9¿Bx¦ÿW1ÁGèÐX3PØã™ï†O qÁ7Óxtô[aOZá©S˜ˆ¡a~èE c†fÌ0,Æ0ŒçII ”C¨~ÌrOjÑ´^‘Ø¶›ÊÔò[n¥ü¤»òy‡>ŸH‚¾ "6M*š…¨°™Žò¹Þ¶ÙŽ˜çäM©dÙ#„šÞ{ Ë`2"\Â‰\(ãÊ“/ÍeÈÂ‡£À?Ò üãá!Á‘×Eªàü‡Ä} óñ#8?ü n˜MsXæª—?Uâ^_/=îÅŒ‚¹	êÃCç©¡³Øá¶ÌÍ	 ’§Q®²à·òWö¿‹y…=Hƒs~âó,
*´“-¸âŸVÇ^wVG^¶0“¿lþöb»uÑŽ6WX£á´/ó$ÀJ”PT‚]’#KZ­p4m"2Z¾Ò$Uz‡IÒ¹–A£sCÙöHÑFüáj%0)ÿ[sÜìËä‚0ÔÆq@¡£¡ùšÝÔÅ„yrè2D¡ÒÞ½­‘ßéýºblÈw·­èM´¢·ÈŠ±ÿ½Wá˜ØJed¢O°d*Ç¸ÌNXf¼Š:ÔùoÍ­·¼d 2ÇjµzÜh¥æš±¢-e¥ï æ&]1mZQt‰¶¦œ:Ä¥~­çPûq
’rÿÓ¹¿dÐæmÞuÐÖJƒ¶>õ Ûwt{¥A-\É½êtëc]|§˜[Yæ‰ê7ê‡ò±QýÙ*®nõ»`“Œ»›ÁüGáÍ|[2%" 5.ÃC<†-Y©ÈÓöÊ31ŽŠªY=þËsúX	ôÕ¿½0ô¾!%nìàUƒŠãLW	N0ð;ÌŸ»œˆTXO“)ú;¨*‡ùØ8ÄØ iœ¢eO„©2zeÛŸWøÉì¸Ù¿D§ÜiÎzê%µˆÄAñõªø  {3ó­¾’Ã¶á‹µñ’r»©h;Õ=Š~ñéBpœUŸŸÔ:5
Â¡~5Eo
¹F€'XÇYZ´V
¼aÐ_C&”wŽ»FÀõ&1?AzÃI™˜¨W{ó*iç’yø8D9G@ÀäŠªL#ÚþÆ™Ø¡Þ¾ñ¶I¤™âÙ4tmn¡çþ4Iá
óAO¨ùK€ÞD€"4¯íÒÃnñÔš.¬€-0œÈ Ð‡:+,–QXMñÑ<Ý´\sì]ö$Î½6€ý²«Q”Q´
Ípú	)^Fá8(ýí?—+ðç øþ¥8	§Éd&^¶~+9(ý¿ÿã/ÿ
5e,Äà$ºŽ¹|‘6Þ ø#À€+pÐ†HÐ.bSTYBÀZÇáŽ¯€øJpñFç>ZŒ*¾å8M†óKŒÙp‹ÎäÈ7ìœB}¬Ý£K¡`è!#t@Œ!Ú¢0%lzvPBœÙèbÂ!bA%%t,|«d@gÆë*Àf#È+'Ef¸6i-R´®`Fv¡ü-¼Àw²À…³N"¥TÙið·ÿXºý>†ÓPü—åÛÁLóh¾ÓqOôc­T= V\/'ØÞ^’ð=‡š¼Þr5“<á31&aŸîO(-%†X c
ÄE†aZ<ÿÃ›2^à¥ È8W­*XÁCK¾ð­Ü‘?Ú"òÇd6Å×@;«EþµÍà¢ÈˆÿaTò… ÅB¼/‡1@ö<1@¶w¼1@v÷þ1b€¼ÀuãlÞAw¬ ½âÑ-2Q±ø×’s<EäÁH
§½
¥Ðtå¥¹Ò‰½ih„ù Í9aÜ{ gÑeÂ{JE!åV’Šo"”Û0ŽñÍ”$$O‡‰~€¾qb.ç®±œQ¤àËO¹¥ê½K‡Éïa£x¼5
oéÆÓ\Ü°­ÑNˆ[ 6`!€˜
	ÉÙ|Âq´‚IÈ™uÄ~KtºI¦ÃÞîåFhÄ0psÆÞ…‡tEsÀ7Ñ(Ì…/£‚é[ç©&¢ã‡ÆGªF.í%À`«†
aÌqDSð$ž>«'Î€6ù]/	˜…XšRîn˜bÀ O‰3¦.¥h.sá%vÝð+DÏ ÇM…&^)_½w)ÁkæŽ²4††D¨gr/ãqà~óFÍh¯0­Â½Hn`BÄñòÂ_;ÈL™)ybËç"8Á7X[Þ¹4ÜÉ4ê÷™ÍÛÉdÝÙ˜Ëaà¸½Á?^‹˜¯yïÎ(â9…¿B5€4ØkÐËYÆ>0BV(ÝEÈz-?fm§¨äH4Pÿ‡=“Xš‘	ÓËH*$A)ª]Ö(g- £Š†Ý„v‘^µÇ rÆ ­¯#FÃÎ©p¬YLA"£#Ž E,ò1Fñ0žTAŽŽžE¤S¯É‚èë‹%¢‚»üÑ4©ªÃÆ	Ó¦žO$µƒ4	€Ï„{léSP1à‡PDúpÞJû@¯oñÉõú
3÷¬C;AÁq'L“	²)@ÍúzáÜTçEÄ*
ûR_ÿÂ#òlj©9}O³Y’&«RkIÜ‘0xI'fP€ÐŽbŠé"¢±L¨hFk	]”=¯N'“ˆc0ˆ3® \[þCý¯,"[rÔ]ZE¸G»¹:UÐó‡t‘ŽãÑ¢©¬!fáÂòn¾6±Ì±Ý@=–¦áZr®÷ÍŠØ=¿fSƒÆFßG8Ü…ìx7b9£n$ÎÃ¾ã° C­“Z'±¹™G´ÝÐ¡Zt8¢xt<2h»—ñXœb¥C¦´¡aGèp¥èg]òvÀ=š¡KŒh#Öˆ¥¥HL0–É 1f¦T¤ñ„
¨™¤xa=$Å#¢1Î¶“iÒELîÈ»!ïžL žÑ7’½ã~dÆâü–FSQ[„>Q ×+[2ì!Éê†W+0	i$A:ín\eÙ$=ØÚêÆpjDÃøzZGÙÖx2Úê‹Ã>àÒ.’‹›¬Ò„¿ˆW”Và3àÉ<{âˆ¯À\0à	Ýâæ¿Ò¡¾‡{íöÅnîûå4Š¨óíAk?÷9!ã!vßÛo¶rñTBTWµòßn0•aT‰ù7Ý{ø¤ÛxOZûd1
ý‘QœW«;KÂµ,È²Jx •F­Q5`· j€±6œâê$]Å0!ùWâf(‘â@"ª¾#ß[Í¤Qon[áL
À(³Ù¦güzd7xÉtàa´Å/¹ó/³Sôê{Ïóè›Ø1÷(Z½Wµ€ûÔ*D÷ÆKï¢ÇÓ~AéÎU=Ù^=	ªÍöÄ‘P:”ÐçäQØýç‰ä±»s§Hæ;w? øž/ß¿Ü×{ÙÛv¿¼c#['«GŒhËØÝË½Ñ7{¶IPMc]ùJm;Tÿ„MLËÍ%ÇÝÀFjaÜ“©½z)î6JV{]Vœ%IZI¹üv·ß
°LPÖ3º@ˆ28w¨2%˜vœ}rÅÐ'5ðöò˜(ô7p­×xÇÊ™¤Œ8(NP‡˜v@3Õþ#±ˆ*âòúg=äA Ðíï•É•­ÉGox§Õ¤àR*Æ¼"VÆÙu(²xU+z™aÖ¦Ë—u>iÛÔÂ[UÞv—Sõ/)ï-¢]Eaë:€gÜ.x°ÅËË¢»«)lÛ(5+¨6”-@ÜÍÔ£±ìlÛñ×üð,¼eþqÉ ùåÞ£î,UvY-T™î±VÐ•€Ãƒý{Å@$
¶\F•Ó²ã/Úi1CÛ{?LÕ
ó-i:Úû®GFè_ÅõÊç±ZnYIh­6ÖŠßì&³)Z}_E7p¿*Ë$A}‰ºg%ƒêÓË^Xj#çìíW‚æ6goçÏ^¸ßµ—GÀ±g@9píi„²÷²›i8‘ŸPú_“›ƒà*´:FÔùMiœúmùä|B„ïì!ÜÖè&Á‰c
ÚÎD[‡Z>r¸iìr†Õ¹$Ð	ÕôÏvƒÙ0+8ª°KŽ•Ö™añ>enïz-ÿéž</ýÉ´tÙïQs§³$¾†57›µåý]Æôî1²/Zl5<ST›nÜvÆúés°V¨ÖŠIm¿¦Y¿_['t_±þê9s¸ö€½í»ÛL3T±‰èsI1oë*š¦*™9P,ü‚d¿9Ð¯Ë<§%=vÚ‘ë.ûÿþ÷ÿå
¼væ’kc.ËXf…!Çl£›ñ›jU‡+8¥ sÕª/&ÙtXFPäªyDpÉn8Ú†üz¿˜*Ô1º‹¸aQŒ&ÆYØŽÆ¡Æœ*PwCÜHW'E9¤"ûæQ ‰rËîÒ¿¾Ù82<“òAÑÌÉ~Ò5ŽWŒ£fØ’'Šî@oí­i	½wD7›fWF¦©+,ì}žð;Ê'Æ™”ÛSZ3NM‰:±BGµëŸ;B–rŒq'ÞÚj®-‰g„½pð¯ºŠþ¥çÔ,ŒdÄôéecéŠ²ÂêþWíP.|Öpýê(?Ÿ/ä-!\*‚RÝÉAÅîäeÊ( ãŠ!ð^M~+Ž?¤…äKÌe(_ÈJóH¯1ˆøÜ:]‘k÷eOMÜ<x%®Ûy[Ú‚º¨’w©ÜçúqÈ ¿ýçàÚüÇàöûãŒým)`Õ¬‡#l¸™g‡£Z­VÜ¨ÛÞ.Xß8:ê.õ-ÖU˜#¿€O‹;ìrÄ%St;¯[ä“Ý%Ø#Ÿ°ûâÏÛÉºÄýOŠ?èpì½LÒLºg,#KißJìÁ÷Å¯‹51§ü—>%öG¯5‰õa;O)–­cåûu?|v³&N=>mŸ».skapü_ÿÃÿ¶ˆ<µgÙ †¹'b:Y­äîÿI1I=®7† Ã“Üo‚
¶uü<á~˜ó÷±q>,òÉŠ0/ÂyŠ˜—7¬Eú¾”­ ÝÆù|ãH»
–Ìò!E	L;
5ŸŠAY2bO÷Äs#¶ô2†ºïlÔ3‘ $Ž˜Î…wž‰ršûÒóÉ½u¹ë„cà—†_½Â	J¹7:÷a­I}º©l™[mFúµ%¾x¼aSË)¹WÞy6hE^m:¹¾ø§f¤DŸƒ§†„ä»÷ÔšØsz„ïƒŸ?Šó"Ÿ:¥/ŒÄ§j9‘üÄxi[¨ãkÞ.oÞÚ-“æ¢ÆF5»½qð[ÔÞ¨¦ÂÔqÒ:²0*¥¨cÍ&ˆ%ír¨âsþ²VŒ&Ãt?†ü xJ……ªèx;ø';eÒŸì€ÉÈ×r³¢Ga¯UçÆQ{OTÛiíì\4èÏÆvo/ÜáÆû»­ÆÎ&µ}ï	Ðw&bæŸ»X>TŸš,’éœë'2jÌ;Çªöþ@Xé6Ëf(7›|äƒ£æB±!](DÞóqVÒ/ä=²êŽbU[DúLî¯MÔãÈjá-ÞK1Ko®}x+Ú; Ù†C©åñ¦"yE€a+æøZqð8Ã?šL°‡´!0ùT	Ã¾•F¤rÐe€þy¤q£H›éfð;Ñ^ybà”r`…„’Z–<o£A©©'kÎ¡6™¥WÔTß—+SO1þÿ”	UKr"ÞN$Å‚øÀ^^þÀW‡ùÁmJQû)¼©¥O@Ù,«	LJ×ËÄDGÔÀvÙ¨w³hÊU§¯ÂW¥ë²&6¤á±jø-»
@%mšµØ«j<`Ä¹”R˜‘oO"a³’&+ï2HÁ =2`Ëpi¼ÊÝxsl
öí\÷ó¾†J%Œ6Hq`B`Èž‚Yü³µ4jd³ûœl ¦Ñ`Ö ·~¿\sý>ðö5…û³W.Â©8	««¶ÂX·lØ!dÇÐùî‡ÒwÿôsŽG1Zdù#Ëàëøãw?,@˜½<b®±°¨G¦|Lø•^óü0Æ¦Ð?MŠ°UÏ‡ÜÅƒç%Ì.†	Hä1“4Ö°xks(¨ùŽÛ¼7ùBôacÏüØJv¼ƒirÇÆBÿøþ»ïÆl@;ÀÈÑ-aƒQk 6€ÏœX†›±1íÏø,+Võ…Ÿ1å’5çÆ{Ü*i¾/ÛÝß	ëKw–šfPRØQ  }­ë5ê5¡ž¤•ø° :Á‰øµ˜[5²Z‹­Û­TQoñ8a=3V’Œ:wmÇã¾Þ]¿G¢èÿò/ÈÕMÚ!Ïë
Gr¸²1®ú¬ð£1AHÌM;•í‚†¹deÜRûÍS1~Y
ý81è‡÷$1%T´ðóòœ#‚Ž?~$ÑCàÓ68ˆ©Q°‹Ò» üÞ“ôûî Ø‡ðßë·ßýPöl¡ùfäáƒŸ‘$4ƒUÅ›¯3Â™Úè‚:è’Ïè‹!	
Ñ|@ßgÈØ±ì0x•°¹º4Ç U–7MŽÜ®)‹¬½ü„ÁýS{Q»8ÉÁIr¿ª´[T‚¦«½©×~‡²³%{¹×X@à¾‹ñ_FW
”kµÚå²¹Ã¬BC9uß!.] >ï×Û¶@„”H*íšÇ¼kc‰ŒrwJš¢¦ÉÝ®„6–z DƒmŒåÕ¦_Ø5Mž/žúNM°îä[RÀ… ¯¿wtzî®¿qÏrêL…YUÔ­ŠNWAä™/<èä#tGûö¸"—uJX"`]$± ´ÕÕÞ,TNMõì4E[Ê²ÄYët/]$Þ-–Åx),¢Äß½¼ì ×â‡¢cZíöö È÷¢jE¶-ˆéNHR¶Ôãxœ–zñX6Ú.ÊøÄ«¢ƒ[úùâãî¢ª"À´yÆÜ
€ä†sBèa‰Ã 3†so™ƒûºÊ»¢Å»÷ªßiXv“;‹!ÙdÃ§öãÿÐ®‚ØcW*ÅÄ¹ª‚†t²¥…‚]Rûc•ÊÂ[³öcï	x±þCSt5uÞ¤ÉRÛÖ‚°>œ"VEŠ–Ê‹„xÞ?|èÑŠr¼Ht+àÄ)¾¹çk„üR½`,¿¤mZ£õ^V³™ºí5Ç ƒÉøõ„_HÓ±‘Ì×çøèÊ8;”áç¿á$¡ëL†³Ëxl„Fb:\Fèõý³áŸ‰Ít
ü¿,I†Y<ÁjúIQ…^õâ+a,OTÐƒVä?(E00{§×9T·Ø0‹û°\zanŠGÒ G]Ø}×qPX¢oDú¢ƒ€JðšÊj/âï#$æìæwm2úqºÚXzÖ’Í½³QÓ¡ÆíÜ¶‹×zá´äËj ]fÓdn°[®ž£ TlŽe›åŠWœ¢_áÇM1\ÝÑ*: ÅPKÊø,ã…ÁéøgÑšjÊHúùÖ'LÃ2köáæÛ>¾÷±'øÄwæÒÉ¯z¶1¨åWŒmu×–Ã¹ú²ó:ÈÅJø·¯÷îEìj	ŒbÙµB1X±>æh£ÍñN½éi4ÅWá%½U¯Ûßû|±;_X‰ÉýGá ìû¦€àà›F•{óœùswÅ<"n3s"Ê—ò‡“²w˜W§^ÞÀë»•˜ãÝ&R¦Öô“S‚Í'ãÁæû58æ]]wBŒÔß/¤™¼¼YÂ`ü©	'ÕFµðR³ì´C•ÊÝ	!!†är­i¡ªR–lJÎ³¹ºe^À1q”ç–8ZÎ)q´"—ˆi/‡ÀÇ_C†/C®	B±~³š†S ãZŽUj>œØ¤”˜‹i¤;‡qÙÄ½éVJªz’ u¥mC	 D|åûû£—·Ú5º„¹P ä¸—²¥c\‰¿”ÀýDc§*}_	baèû-0ba/¯!Št—‹¸^^I 9O w@­Ï+€è_o*4ãæLŸW
/Éô	Ý<èXý¤€y§ï¡+ÊÙ¢¢œ'tÒ•øÈ<âï5R®Hw7çšsþÈl@g×|uu	nWÆC­§²¼ñÖ•í;úG.9äÚõ»t†Ã"ÍòºÈR	`L\87“é+<=˜ÉÅ„²ï¤ó¹.‚73Ö¡òhû·–àâ§Y8˜Æ¸€¦á°:Áðƒ£¹'Ë…|7ñ³~ðävÂ%š_§ÜÇ-Ìs¡Ó[C³3E3åHvœÌ60©>™L“äBd¸èÏ‘ÆrÌÍ!#¡úø;Ìvaæ­ø¦Ö}]ëÖ7¡| |¹âoNŸÔŽk»æÐß06ç+%¿À(„³L¦_„˜›•ê»NQ“4–aÿ+:Õ0þ}•Œz1ËÆá0rDþJð!Îðs6'Ñ_’x èÆëe(²[ôC Êâ|È	QÂiÚÊ,Ë¢™~ƒøÂ˜U”Î®’ˆbìÊ¼<¬ä¹ì·i¹œÁ8ý+`‰»<û?Ø hžÎÂVLÃKxsqPqÎï<q–g4¡p>ò<k–Jãà¿ü¯A÷MØ¥ã.þèœP&qúûøt†ÁëPÆ†˜¤zBÊœDFÆ]Á4ÿëø?:ÐüÓÅüN{õ_þ*RfOÃ«Qx9›d!.èj/5ñ³Zf^›s—XˆÍÆMNãAðMaª™!NGÌKˆùÈcÜ¥§q6¯ˆ@«æ+œŠ‰!<S3ô%€‘Å—Ñ×€9f”ß‡Ï²1ÙÂU20X)1˜õ3)1Pšâ1v¥XDr{8DçììÊˆ-¾!âøæÉ(x&8'»¶Ã¨×aã‹Ú<¢Ç€mù"žŽ8X°Mj
uêïãxÚ\RBOàOf£•™œ0ˆAW½½2FmæI£Q\Å¼’^bµ|‰C%´è®!ÓY`Š‘ËdA>ÙRe³ #—…ªàËdqvGÒÑHc±ïIcÑnúÒX4Ûÿi,Ì]÷D×%¥IøVÊ/Ê6_	º• d‰]#ÝÏT”²ý >Í™I²–vL!6ø÷ƒ¬¹SsC¨¿Ñðy.·ü3MŽ“›,Ž¶º¼ìûF£å7,j`HÖrXû„-‡”(Ð’I23\z¼fº<sWq’»Èúaå€‰= û|R[ZáP¸•àQÇÈ™»˜ÄÃ³é½ÈDFþªLF¾(:›"GmZÎd­ü%¦ê„rB(ñX%ô
¹*b	)VÙØôÀ¶ˆQÙ‰’á5‹˜ùÄ	Cldç^5q†È>‰LkZi2
<¤t‡°}Æò©„ä?2<Åâ0ÊÌÕºFŽb_’Zž§TgY*Š{änè‚pJ#>c=²x¸—$àƒÜ°|ï¤È1Þ¤…{9îýÞõVs~¹ÞHk‘”T©-F·A$å½ÀV¼&kµý­!™ÄAæˆ~Âä\0¾\ZBÐKõõD¥Üú´Éü¬i‡ —08Ñç‹“½©A	 ÙI$OÞj#Y&€°®Žª@ŸŠEœ.f{ "(Ýž÷E¤âIÐ‹à„‡§!‡·J¼ãXº·NÔcñþØ—ZsLqéCê’uÕ(gRv&Ž=?ÅîM.yžÎ†Ñ,»Z•^¾ä§pŠ‚×R­e©œªê2’-¯Šs;”‚~ÑYŒ¢ë8o¾‰¢Ùst¢JPpÌå'º|xƒÉñiÙ¢\g–:S\—nKR=¬B9,4RÀAk4çx«cc|Áèƒà¿)ß‚sLYv12äå/&‰R&©Mã¹wûç¼Rñ¹ƒ”M€e"gd)
ê”›AAŒ™]ÁÖFd®7a¦ œšÏ¢i264˜ÙE,$9g“«"è<ò.’ÙÔÒQHÎMQ¢¬Û©>¬R(•1æ£ƒbt€×G[8‘ÃÁÙ)í%L4Î8QFg!þ&a<MÿòA¬c¢´2B,Êè ƒ'¯‘×Ã'm €¿ˆto»ode¸SZ‚Rœ‹¤n&‰	F¸É'§øÌ	VÈÂ°!³0lè,Ï"8à¤t`»¼wòþ½v
†¦ãÏ	EÙ¶À ðæÐ…•cáÖŽ€˜C¡éòÎáÝð€NªšwC‹Ûù–„Ç7¹¬ì¸(¿CaQ^N¸xØßÓUbµxÍÅ··§ë4Ì‡U„!«½ÌÒÜæ&7ÏÂf*
-ìA¤K“ýŠckÄ(/ŠûhÆ.Çäf§<ˆTL`5¶UTT¾IQŽ~[¯»|¶+çÖá=Õk2bú§^c5jÕ!GÉu¾ZäÖ µmP×?Œ
¦ªEÉ^ÛŽ¥êd•x±nb
P,{1÷¯ÅÞ+„Î6ã­Þ^R)EXñ"–Í_n£+½_5r“²vÊ˜Z¯ÉÎW¡˜mžßU4P‚ìß:ýXª›1wˆÑ;íú²ÑŸ'íJ;‚×êÞÎüa‡â-LMã	}ç´-¬”<1î–
Ä/}	ã–}ooyÐu9ê@mµ€Æ+Êáe‰žô8(U³Ò²D.E¹H.Q9)8müjB¹@(ÝmUûÒv˜zÖ9;,îÿdI¡$j<°¥¾ÓK†/ŸºÌ¾¶²» ”„¬áU¶þyUáFQxnØÎñqi6ƒÆð6hdž+Ö=ôE§¥Œ¡‰gþ÷¡Yäµ8:#·Ø"†Y~Š0ûl¹÷(E€½½Yýµ½Âäß8“Šý{V°çIólFkÍÔQ.at‘ù.£ùD½³²Å}·ÆpHå^òðmŸy‰´…ÁâÝðÈd`k”D~±]jiØx<Ë`ñ"ô³þBçV>ìlÉ˜<7Rº¥:{¥ÍH³YÞ8*@F‡.Âß7;±ç%TæF85ÐxÞ9ÁÞvNÞ<Ñ9ò¦ó"xò§Ó¯ß<y#6ª ‘œÐ†	¢<%
Lä£BëÓ’Ž	!ç„ß3#É¡E·K?7X½:ÜØÁhÝ¬¡b4òºcN±,¹ÐÝ—„Ý.Š¬6i n:ìŠ»qdÞÇp¶÷…ÍÚ"…í4#Éùöp#SG]úY*[cCìÃ-#•³c ŒMÿ>Þâ¯›è‹w¡ºFƒ#uw¼Z|½¼q$î™Wjdy)nY7Ó+u€nGx…½Ruåþ¸q¤.¼Wj(. 6ŽÄå¸½²|]€ "D®§ÑPT8"ý Êˆ
DvºR²h®h³Rï¶~¾ ú£¡^»,fFÎ—ÔþÕ¾KTI"ÆLÃÄUžg£{8·’i?ŸÂ‰ùéÀWŽ$÷™îäHýùå¦@/÷Ÿ;8Â‚|öå ×k÷_vq¤sŒ/ƒ~Ñ’1}…Æ:þ l^8§ìGiqpe®z*§@úÉ?‚ê²ft”;Âÿ®PÙÇ™«Œa-É|ƒO>ò€“­§ìîW£P^ÏÌhÖé†‡V^¤É4ªRf¤£‚ä~øBÍJÝ¨ytÿÜ}ñ¼k«Hg>Õˆõ1Ÿbô94"íïM':BOWíäª|\“ip"\öµœ*fø8cŽ·úñ˜azÜÄÈU”¸²V”)è“q¥ý[Ã³˜/Å‹p.Ú8*p"[¸øDod°ø„WÙ*MÐ­—¸t.#‡±¥‘íï‰ÛŸhE$ñÎf£ÆÆ‘Çûgy»&µs½ƒ>óLm×”½Å€ötÝE¢z‰ ÊÉã oe[rÜÓK‡3‘‰†“#§Ñc|Æ;¾<bi‚ÇmúI®GÃ!{Ì$ìz¤ü½†qÄ®›ìLo¹:Ã
ÈÄ­£ßGsk—„"ùuf®æa|$!²º?¶éþd(>bÿh9Ô#œjÇ§ENOÅOgXd
…‡áÅã¦¢Éx½ªŒ	A‰ëË1J!ŒÜƒÿaL¾Åì\	rdv‘à£”Õ ,Ó?=þ§ÏÿÊ¹ÌTü·$¸›±\*øûÖì½¼9¿ê|ûü›Îùó×¯°è+õ\YÛH`~>à[Ûogå»ñZí:‡GøÐµFSÆGª5`‹ä:*m²™c“Ã–-ëW¨ FßÒZBÍø¾|É_áë|žÖf%aÊ[ivïêï‘ÂÁ@óÈîÅ}¤oZ~`&‹;Q*<þ¶BÏ®eã>PJ£ØrYŠ
(¿úø•ä¬B[Xõ+K‹•°¡éµµ
­2Œ+Æm±ùòÝf¥Íæ€bØS0r)b9@Wç øù–½V1žTc§NŽÀÇ\¼Ý´‹»vqk›‹OìN°ø«b<FÊ·ìˆxŒg˜0ØXGQÆ¦¬ä˜ÕÄd°z«]ö1Ÿ@³M]äQÍRŠAEè;¨¼/¬¿ædaª dÿ¶š"ýy5ýš#—=4ËºvÙC,;±ÛB]¬gA¥,_`å¼Ñ‚ù\Á{‹ ¼Ð\še]»ìá•¡.[ !Ôø((]I;˜/PÀ2˜ D©†O@Bµ$xªV1t–	OÁèET£Q ìÖPv­R‰-Uù!KˆvÒb Ð,¸1"àÏ d_Ò¬çÐàP˜5‹¡PÖÆÅhÙñbeÇ•–+Vq1@ÂŠ¹5·}M»ž=9î¾Ž¢][ƒòTÉ|>Yš`î¬_DJ¤(WóI_›5†9iÔn±ZmÎ?æ Íž@n’X:…ÞN›ð¿–)–P¡ÁÄ§GZ`Y_Æ—žúÒPm !ÇìÇpœ};|?ß^©H¥¤8=@Õ©ÿ jÏƒªN¥fð ày úÏ#gÆa?IK*Rh†UFÀ´\¦ ²¡#úvúÜADœJë¹@,ü¯ÿÛ®à»†C8	î™ˆá0î’sQ$QýÈ¨1á'Û\»ÅµEÑœ‹ŒÚìå.bn†½´„ƒ= Uåvh`|²>SZ@v¥¦[©IpH
q7’H\ß¢r2_bH·nú€Ú ª#Êlô¢Ï1½ßMa¿p0líƒ}Ü8äS^Š/SêŽ:À»HÄcBb§v[Žð—ù­«¾YPöoxD1f% 2A9øúk£"}0*Ê²í²Ã5„ qœ±š‹Ò\Š%R[®Fø·d®Nñ]Õw†/°èV£dâígýøù# PJ&M~Ø£;œü…×ûI…lIdáòØü"qoµíš5ä+kj{b~Ábè˜#Ì€úwvþæy÷<xóäoŸ¿yòòÉ«óƒà„®fÔã1~”3Ïžcý2Wë ºœFQª ‰Ó'ü?¢œ(«ðéœ%étÊL”Ì&øÒ­SFîvK½¥]oéIYn ‚ÂêÍ‹jž{mñôôò‹ªâ~|È²%^‰íÕa¾cÇ…h}_É.Ýß–ÞBçùí«ò^.€W<]wqDë	NpƒÑ Tù=é…<A‘d­Ér†¤›4ÝJyîëOZn%‰³Ò¶[Ió¢
ï¦§	Ìº#±êÏ–þsÿ´¿Š.eãÇºñcÝø±nüX4FòŠqAÄp'yÂyð­i#¡ÚWÅºí©-˜'‡,«s ¶odDyB/o1ÛÈ­´ÉûÜŽ^P¸ó¤DiS‰t½É¾JK¶í†˜[g¿®Ú³ø¾?ø~Bñn-—©~âˆÁ÷½¾·î‰b]y8<3g¥§XÂ–½>‰x£´×GŒ¹¥ý¢Íb8”S“BÚÇnA×-8ah‘4 Šš¥ä
ªaÍk	0Ô^¼ÁÞ	Ì6NuËm×Ò=U…ûÁ#‹1-‡Íö€áss\ò<M qºîïL\B¦ËK¬¾ôÝpp?¿6àŸ´á·r?Ø€æú—³hâ}ˆÉ—ñƒ <‰\·6”û¹§¬wHãmÁe‰×óaÃÙßåóH´ ÊÇ“«îóR™®µA‰P‘ðX•èªJPŸté/P–œÐ_'ðW‡•®~Ì¢Ò±ªÄ;ÜÓŒ¡bÞÀ—0ÖédrÌ‰Î´oœ+D´o‘í~VhÃ”dºyIü ÑÑÀßZ¤ÈUÜÞQ´4t0
 œ¢.¢ÔgX M ‚4¬SP´ð°Bêü`5í6ÑxoÔ2µìF¢Ý ¾¸€V¢yUUn®bPhJTw®üðP@€JM·Þ‘ùQ´¨:-ÄÐ”º!šv‡IÿÃMœRú:«C8¢mÒ`ýì¶†VëÑÞõBùæo/ÚûQ½·)?£¾A!S±‘,ìE—ñø:fó…HÝ&žeEÓŠš~E`¤’ƒ²l!Rú£X@‘ð¡H•aNòwQUQ4w•Kä;Œn³ŽèßÚ3ŠÑòƒ€Ã Ô	žytT¿e+£ÁœÌeP„¼ÄÔ0äh!vÑAËÑA:h4ÑñS½U•°Ëú"cMöF¶¾¡#œ»9¢ºS%qj¹fT*ˆzùã/ýîØ³n™kÐ–f9Ð_©áFRªW4O²½U¼_¿ø‚\.ŒO$ÒEëœÓR:gë& —U5çÝµY®aç©ÈYeö-Ï"ßLãAÁ
i |+€’U€RLé>në‚ÛÇ&à÷ÃÃ&¹Ë­*ÀË‡ó¤t[©‹ìœ
ÜÙ«‚œuå°svþØj «Œ[¯Ìíq-úÍ=Ã2²”£h¯èÒÂz c”dâ¼SfÃA!L·.¼AÞI°•ZÄÇs¶>C)ÂC¨íÝí=&”¨ew#é–Þµ+A[f²Y„”
-Üð,Ìt±´[ËádiwÇØðØíîKOtgþ¾lÅtX{D|äG>qãIÑ,{y»µ@ºçPe´·æl—k$ÚåJ®$idIéw6£ëhœ›þÃQJ´MÀ<—·Ðvjº\dŽN¸È<u°ÈMÝ§è`ÐÔ}žØµ¿´mEµå{â­Q×Ó·Ò¨‹ã4^HF$ZO03-;¡ ÷èò•ÍŽzY«›SSý¨ ÙtŒ»BUAítˆòTP:Ty*¼0Â¬eÄÎ˜Ï|ùtèT”Ÿà+Pgxœ¶>ÊJlF¥öš”WÐÃMõT÷5ºåHAÛ •ÌSÔ™‹:s®3·ëä”‘Çª Ò1ÔK«J‘šaŽ¡u	3Ý2e”ªÀT*j5Ø‘/Ý5}º‰Ã^Ù÷‘ÉÛë{?2iÕqÐþÈD‡uIré(§yŸ3´Êˆ¹¡ˆæ{*™»Ž£Àq*ÿ> 
Qž`*µhþž®\äß ïæd*¬¬±JÎo¯¨÷©ÛyõÑCY|c´i@Tð8ñxÓhš€S…Ý·¶>Àèà¯g.RÒ]GCûîÃ_¸KÉ(“Ç(Œçç[2Š¾Üì4†j0üaõ›þ´z×¦S¤c’ÑY«0|ŒÆô¢†Ãð«­NPòz+÷UH€}§Ôé–	èAÃ™6 Òñ‰øÖ´—â*’âÚÆz{1Ž@@ÛÇ„
¹|ÉÇž]ù±ëùx"?ž¸§uæ»`llˆ+¨<N…™-ùÚÀ%—ï…E|øc*£·kÍß}7&éF™ ÃžÅP	çõ-ÌZõ.b´ë‹b|Âªæ‡žlD…€£@ŽÀÿ65$âCŽCdaó“L Ø¤?œÁ–X2¬kåeÐ²Ç[™žƒ¸”ÇùC«?0ËÜÆwB|î0¡V÷Ny©¼JÆUQn å ALnî¹°g”·Ý òãj½/ZÔÿ}gm<öùÞygØÙÉaAªVý®†QÉ6‡&C†·Œ-Î›ùÜ£d–FƒäfŒ‰D"¥D	ƒÞšÎ]Çx»ƒ bPn²G
.©Tœ)ðãŸ`ßÂö5Ü÷Œ:s£ÎŸe,™4ri­Ð6ù’qq.¿ê!»wÏÑœ¬”;:Êã5¥¾Õø ”(¢=åYŒ=<£ÙØC?c[‰]©Ú³åÙNÕÈÈÚ¬~¦YfŽß¼ô(/`¾l ßÁ¤fÙÐ§IF'^W&7EèœMTN¶¾,Á¿?3=»K]Íç&†Sc—½»En¢)ë¨ØÞ°Ûàü AMàÀh¹Ú­K¯D~È^J†]›è©Ô= LžPh7Tßµ#»sú2"h<×(S®bó‰‘Y­+Ê@pH¦Äb Ï¤TŽIê(-yKÞá¬‘¾'ðoep:<‰©>Ðf\().D­y®Ún±–t«R÷&0JÞÊ3üï—§—Ý%·]ïuF×cñêÞïB£ëÚ©þn4º¯4º+Ýit]jÈE·Ýœ)â×Ò9•Œ®ïf£k_mtsw¦E!'þ¤­KÏvŠ¸s{·ÝÞÙ¿+wJÙWQòMÊ{¯…!Ï–¦e¿DÃÆÎßM;õv%Ø~_öÊ%ÂnHªu„¤&Lír¾âsW~îêÏ¦•|ù Ç²‡cï 'òóÉ‚rVø¯\¼G¦	>·>ü6øvÙOõÖBª¢ÓìÊ‹Oãž
6ÆôB±MõrÂ¥b&ccƒZ2®œ†“ Û&ñc·¶¬&à_`@7«‰ÉØµOÜÚ²š ˆ'áÙý=Pví‚à†» »a÷.hà€¯ìà9ƒ¨¥‹™&O„·lžæ4„«gÊæIÏÝ"‹§Í;Þ±m›g~ñ=s;Œiõ´v
PÜ/ø k(Õòw°‹Á\m6ËzVFå¹®<ÇÊm¬Ü¨—íK<›âÞû®«,öwî­,f·.›ôE–ÅâÎ–ÅÐöeUß3¾¸ãê<ã‹Ë.Õ"–nVÐù¯‡ùza	À?°}ç([¯¨â×Þ€×Vajdýø;g¨,~Î	
„I)Í¥VQóxÞr,^ˆrïjëw¯És½›OÌ¡{u(P˜­jÔ•Õ˜Û<æ¢AÕ»p¯™—p93oY>ö-ym¹Ãäõ5Iåº+ Õôu,G=öu"?ŸuÌ@x€Ò)Á«öÍ§£\£îXžšÒŸ¦™~RK£”VÃ^ùüÓëÓ?Àõøº.vVqÞ²{o)´ðØä1yO‘âlÐ˜Ö½—5­ûeÌi«(ÊE{‘mhS²™-lJú›Ö£Å‡%æµÅø\`_3Çñ[Ù–#{9ºñµ·Ø“¬E¸×õ…]‘Žõ‘cÍñæÖû"J ›ð)þ€C~kG˜b„¥&ƒ÷t!v©moÎcà;Xß<ö'aƒ“Y‹ŸÜRêPÓE×Éx˜EIg¦Öjó©jÎPýè«¿ëDÇ_½‡™G·8²TfÓ)æ Îâ‘H—úÇó,½C²`~ÇïÏž¿|û‚^öŸ1E*9Î˜ˆB,`ú=JN§GàhÀ”Ì”ÓÚ‡Ac?HõÀ6l'OžvÞ¾8ÿþì¼óê¤óæäì èjpÅ€Û»¯ìÎÙ Úï§iùU¯RÌvQí7d´~2 Ì@þ¤ÃTE&k:—™eÃF”·Ù1²‡êCö?/aþ”·
“¹]èdý´ËÞôÊÜ‰•„Ž3JQ4žÉd8×éph;ñƒ2¾/1ùˆ/‘‘ñÙÎ0„Ù}ìþƒ^Œo…Lä$P[¤”ÔÉ‘©G&Á(r=@m9K»¹»ó¤¯†­…„ç¤ÒÙŸ«4µ»7¬Ë¯Dkí)[pr¼YÂq_2•V+Nˆa&*îgi"âÐºtÃÑä“ö¢q¶ /ô¿(YsZþD½Ä0»‹Èª’‚[„íêtÇÊo„@&í©«gš)³ÅõkùW"ùÛ4²rYe‰Èíi<"¡H…•ª®T*IÏÅÞôÆ¼¨Q„;	Âer-#Kô ÓþÉÌw#e8©ö/Õ™CÀÎ)>aNßyPz»s°[v	ˆ0-ë“Ÿfñ0îMãæ~AÓÿòfè2ÓÍ48Æc¤C”§YçÔGª¾ØG(;¡½oUªŒÒ‘íb!îv¥ß÷+Áï'ø¸‡ÆFåŸfIÓ–XúCiû{J©ŽD¡;½Š/2ý0R¤ífAïÎz"gM‰8£Ñ=„fSJ¿¥)ýÅI¿Ç¨ßM9§-Ì>Fw¶ãKX—Wiu’6ª;6=ŸUOÏt©$á›è"Æ”ê¢å‰›¨Ž£á OÀWßœ­MÂ×ÁÆÉ*áš€H|ö%¤œ¶ÓÉaP¼øbs®{ò„ Üä	èè,@(}ßM2¹†(g(Ûø/n¬°TPËä^’…¤½ç’Û_ºäöÝ%:Ðt”ˆüî,Ež Ç4q1þ™WYT‚ù_¢à2^‡cØz”ˆAÎ1+w?ÓŠöd¦bË)ÖòN*«°
œ\Ó¨S±5©àU4EeãŠQÍÒêô0xòË_é¯jPzs¾5~ZŽaÃH=NÆU5Šæ‰û/±mïÛvHöÎC—ä¢Ö(‰}Zæ°°Ž à²€-ÜÞàß/»ÐN°:œ4Ã X+’Æ›¢kL Ý'‡pVâ§"¸˜S 8úâ¡žÒK“éDæåŽxÎ”TÒX±JÐŠ¥;ˆ&ÑŽ)³IÂÙTyí¦ˆ¬,É E±Ã½Ýy±M®æiµQmç–Û)|ÁeÔËmÛ]n/Øìe‚úÓlT	à¤8C÷°¯Ê‚›"#­ºà&<Ú=75EÂ½m¤ ‹t@D8lÃ‚Bá:0›Úl0Ë¬ÊŸ.›bo _¥™XÈÐ±øÕWÓ\ˆÿæòõÒT“Íõ¢KÍÊ&ŒV_ð½†¶gåŸ‡ó4@—ÛJBú5“‰}‡a<ÒËƒYXá˜v/Áùþ°÷c„[¦²å)½n®"Z	S
›1N‚q”1±D¸ƒûc»ÚðC—Jbücè ”À÷/M|¼DyáY $	A¦Ñe8¥˜œ[ª]Å“÷¡p_LaKI7¯70cÎ|ËKt†ô!Å…×èÑpI.…"“3eÂ[D’F{ù´³T>í¸òé,Æð Á³”Ü„_&´j¾^Ò‡b®_B>Iu H‘%SÊ_§Ø,ÙÈKQº„cdÊznd™JìÉTH-<Y%ƒ¸g7•ÜXŠä†‹äßzøàˆ=¿Iª'pÎ£L¤@a¶¿ Šåy½S‡	"EhI}£ Î×4’v‰Æ	}nž –‹"½¹FÉ²#ãrl6}¬Äf³Hƒeuxjf3Wr+ÐäÌe×“.j 8Â_WWÉÅ¨øÓÙY÷ùL]’x.ðHb_i¼p,F¦)’[^‘ìÚÃþ0i;AÑ\=Ñ z2‡À
€ÌN–`&Ÿs•Iuùü)´É'œÛ;Ò;"Ê ¡IJd˜&tììEW2Q9TyïÇˆQx9Æ4ËäŠ`ch"D#Xãf‰jNH„,Î&7Tv?òAÝoçÈóâL—Jòœ^%Y’ÎÇ 0*Šp.Õmˆƒ ¨H:§'Ãäò>¤ÁÍS*ù¶J•ÜòLÂ‰Á¬ÑA;’ÜbAº ]SjöËUôb;&âeöáœ¾È&Pu;ðu -Æì³ô+Ù
Ÿð{1'–—,ëUALÓñ%	dùXèìWxÇú)P›N³EÈ={sÞs-Óø2Ë,8Š‹PötxÍ–ñ¯…aäçÌ‚¶?Ö'P¦œÎA  DÈ™)¹7‚¨ Ã$‹uœ^DFùÞ™‰_L±¤â©™è¤;ŒX¥¹¯øox5òFN#ÿ6Ò‘\˜}Ð©ì
hK@XAKOà3I3º¡˜M=Ö×Ï¹i®"¥»YÂÔ@ ¹Ã'eK`µÑ¾
‰øî"ÕF	ê5Ì24‰Œ²ÀÇd†öÚ$Ukˆ Óñ¶ÆT„¯e²Ç…dÜYjÒsŽ¸“^ÓUˆ4©°ç¤ÇcØ?ô0ÐÔ£ú öeŒ|ÏÇpäÉâK¶;&«/¢Ø&ð~ï+¨ûƒJL›<moC´UL/áç·gONßÐÈžs5ïMãAü—ÕX,O¦—dE|þöT,>ã¢tpeÃ$ÓùÝiûÕÙ^ž6dU“fÏ%%í€0üâ¥Ð°Kßb2XfÒ7Ñ5üÀbÏ½”Ÿ0Kà!¾\¼?†cæ•k¥¡¤¿¦
Pa}˜>à™7U—Ão±šòÞÄ æŽk€	Ô¼ð¾ CóºFÈÞ«dÉUH’€£´¥iÓ½´xyV}rvÖÌÝZt2XÞ Y˜«^÷£—ÍøšçÓï´ŸÄ<ñ’/(Á·SÝ[bK°f¶º¥T T¶fcJŽ\®èÞÕâ$SV/$æP`¯ nìÇ”x¡3ýDL¿¯çÌŠ´¾¹šF—LÎþ0áÍå=ˆu%ˆ•7±\û7]Yà%!ã§C˜=hÅG ~qR]Ð¤#¼XR˜ÆÝ°i“úKXŸÑÕ	NŒ,³Ðå&E¼~Ò–ZuÖêõ5Ã“drGª˜Z^ZíOªáïš³Z÷´hW­8‹2Öæ ®#Xï'B®­ÎB²2a°‘_KÕ;‘DÂXBxQŸõÒ(N)ÃHQ‚J#¢©{HZ–ÁnaO
û°.â”L:%8+ŠÉÄXK¬=ÙŒ²rÁ`³1_øÆ*/ýÄÆ¢—•¤ÊÒf2­l›@wügœ [ò"ï®Bã‹jv±ÆOkçO=4~ƒçèqðöÔ(¾h×ç§Î´œÍz[¶~5oìè²ŽOý¸¹0´ä#"J‡œSˆÍ´’b!L@¨‡è_+]cRšÓ€ïB¨ûÞÐÒ›’ìÅ4ïqo8?»‰¢±Qh0>÷S­¹”jîùÖ$’á2óäV
çoÒžŠGr¿1ksRå©K!T'VY¢1ž˜®‘95û|'ßÿ¥øê2þöÿT0ÁýLÿ’Û:3†Áx6êES¹lá¸‘á;uxËô¹"ûþâUg_¾ê¼ûýã4bÔc{æO†š³>Û¤¥S€<R- óçQ:éºGé`#õ<¢Õ¤³A6ØQ®äÔ›¥I< ÚÐ}
èœ =ãl6àÍqr…÷É–¤bèFxPƒÉt•õh:Øý/pox2˜õñnáO6TÈÙáÇäÄG¥˜_GO“¡õ;%¶7KÐ[Èª^‡Y85K®)õ_4 x–úÃGÇñ7ÊÃ”ø ulæ“iÍ@‡oñø%0Ã0mò'Ñ$ƒS[(ýxä”ðš»ŸÇ°´c²-túÀ#yfóÜ8ŽHQí±KÓt6¾ÃÖï³ó—/Ú†û0«WÂ›ô/Ñ”rWf¡¸“
.€™é ¦ØA³$0›Sð ?›Ã°‡wIè½«“(]E£ªD°¶Z©œ”3¸DûAŠÌ„›oÌ_Hû™å!'é´q•e“ô`k”3PÔj³q
Â(Å·Ö£-²†VíÝÖöþN«½ßØnV{{ƒ½](Ûaówá,KÙŽûõEœÂÁiòõO‡{õ¯oíºËá€oÅï è"	ìÈAÕ—°¡Í0Õ^2;4Åj¸_ƒ®6¥û—®V1Á]žFÄçßˆv‡¬ˆJåŽ”EÅ»ðñÂ3vÃ±|~ a9™MA¢µOtæe1ú…ànÚY¶Ó¿DL6ƒGRè®—ÜâU÷Å0¼ù›äGºWS ½$ùÞ‰t­ívsow»±»Û®¶[ûûÛáÎþ Œzw$Ä_ÐÀ™ÊO´3P.¯Ðæ3®/kO5›pÏ@$B´Mè}³£áþÌ>ÆŽë#ÌcDË¥ó<@ì¡ól§ ‡èM0Â3ÍO ¢èC-x9×KïSà0˜ô6ç*B—¤i8‰C~0€gQ³-{Xð3ÍîFŽ½úöa{w§¿ÂÆþ`§½½ßÞ¹ïJÊcSJÿÿ  ÿÿ ‰Ml