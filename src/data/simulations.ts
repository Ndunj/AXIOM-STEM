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
    title: "Simple Harmonic Motion (SHM) Lab",
    tagline: "Oscillating mass-spring systems, pendulums, restorative forces, and phase space analysis",
    discipline: "physics",
    gradeLevel: ["High School (9-12)", "AP / IB STEM"],
    standards: ["HS-PS4-1", "AP Physics 1 (Unit 6)", "NGSS SEP-4"],
    description: "Investigate kinematic periodicity in mass-spring oscillators and pendulums. Observe real-time kinetic vs potential energy transformations, dampening effects, and calculate angular frequency.",
    learningObjectives: [
      "Verify that period T = 2Ï€âˆš(m/k) for spring-mass oscillators",
      "Track continuous conservation of mechanical energy between kinetic and elastic potential forms",
      "Analyze displacement, velocity, and acceleration sinusoidal phase relationships"
    ],
    thumbnailGradient: "from-sky-600 via-blue-600 to-indigo-600",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    iconName: "Activity",
    rating: 5.0,
    reviewCount: 52,
    teacherCount: 165,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Dynamic real-time oscillator canvas",
      "Live phase graphs (displacement, velocity, acceleration)",
      "Energy conservation bar charts",
      "Adjustable mass, spring constant, and damping"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-shm-1",
        title: "Exact 2.0-Second Period",
        instruction: "Configure spring constant and mass to achieve an oscillation period of exactly 2.0 seconds.",
        targetMetric: "Period (T)",
        targetValue: 2.0,
        tolerance: 0.05,
        currentValueKey: "period",
        rewardBadge: "Resonance Master"
      }
    ],
    previewFacts: [
      "In simple harmonic motion, maximum velocity occurs at the equilibrium position where net force is zero",
      "Acceleration is always directed toward equilibrium and is proportional to displacement"
    ],
    isHtmlApp: true,
    htmlUrl: "https://salemhills-simulated-shm.netlify.app/",
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

            <div class="results-grid">
                <div class="result-box">
                    <div class="result-title">Active Operation Result</div>
                    <div class="result-value" id="result-set">{ }</div>
                </div>

                <div class="result-box">
                    <div class="result-title">Cardinality |Result|</div>
                    <div class="result-value" id="result-cardinality">0</div>
                </div>
            </div>
        </div>
    </div>

    <script>
        let mode = 3;
        let currentOp = 'ABC_UNION';
        let currentRegions = {};
        let lockedRegionKey = null;

        const regionMetadata = {
            onlyA: { title: "Set A Only", notation: "A - B", desc: "Elements exclusive to Set A." },
            onlyB: { title: "Set B Only", notation: "B - A", desc: "Elements exclusive to Set B." },
            AB: { title: "Intersection A & B", notation: "A âˆ© B", desc: "Elements common to A and B." },
            outside: { title: "Exterior Universe", notation: "(A âˆª B)'", desc: "Elements in U outside A and B." },
            
            onlyA3: { title: "Set A Only", notation: "A - (B âˆª C)", desc: "Top-left area exclusive to Circle A." },
            onlyB3: { title: "Set B Only", notation: "B - (A âˆª C)", desc: "Top-right area exclusive to Circle B." },
            onlyC3: { title: "Set C Only", notation: "C - (A âˆª B)", desc: "Bottom area exclusive to Circle C." },
            AB3: { title: "Intersection A & B Only", notation: "(A âˆ© B) - C", desc: "Top-center overlap between A and B." },
            AC3: { title: "Intersection A & C Only", notation: "(A âˆ© C) - B", desc: "Mid-left overlap between A and C." },
            BC3: { title: "Intersection B & C Only", notation: "(B âˆ© C) - A", desc: "Mid-right overlap between B and C." },
            ABC3: { title: "Triple Intersection", notation: "A âˆ© B âˆ© C", desc: "Symmetric center region shared by A, B, and C." },
            outside3: { title: "Exterior Universe", notation: "(A âˆª B âˆª C)'", desc: "Elements in Universal set U outside all circles." }
        };

        function parseSet(inputId) {
            const raw = document.getElementById(inputId).value;
            if (!raw.trim()) return [];
            return Array.from(new Set(raw.split(',').map(s => s.trim()).filter(s => s.length > 0)));
        }

        function generateRandomSets() {
            document.getElementById('preset-select').value = 'custom';
            const uSize = Math.floor(Math.random() * 6) + 8;
            const universalPool = Array.from({length: uSize}, (_, i) => i + 1);

            const getRandomSubset = () => {
                const count = Math.floor(Math.random() * (uSize - 3)) + 3;
                const shuffled = [...universalPool].sort(() => 0.5 - Math.random());
                return shuffled.slice(0, count).sort((a, b) => a - b);
            };

            document.getElementById('input-U').value = universalPool.join(', ');
            document.getElementById('input-A').value = getRandomSubset().join(', ');
            document.getElementById('input-B').value = getRandomSubset().join(', ');
            if (mode === 3) {
                document.getElementById('input-C').value = getRandomSubset().join(', ');
            }
            updateSimulation();
        }

        function setSetCount(n) {
            mode = n;
            lockedRegionKey = null;
            document.getElementById('btn-2sets').classList.toggle('active', n === 2);
            document.getElementById('btn-3sets').classList.toggle('active', n === 3);
            document.getElementById('group-C').style.display = n === 3 ? 'block' : 'none';
            document.getElementById('op-buttons-2').style.display = n === 2 ? 'grid' : 'none';
            document.getElementById('op-buttons-3').style.display = n === 3 ? 'grid' : 'none';
            currentOp = n === 2 ? 'A_UNION_B' : 'ABC_UNION';
            updateSimulation();
            updateInspectorUI(null);
        }

        function setOperation(op) {
            currentOp = op;
            const container = mode === 2 ? 'op-buttons-2' : 'op-buttons-3';
            document.querySelectorAll(\`#\${container} button\`).forEach(btn => btn.classList.remove('active'));
            const activeBtn = document.getElementById(\`op-\${op}\`);
            if (activeBtn) activeBtn.classList.add('active');
            updateSimulation();
        }

        function handleRegionClick(key, event) {
            if (event) event.stopPropagation();
            lockedRegionKey = (lockedRegionKey === key) ? null : key;
            updateInspectorUI(key);
            renderSVG(currentRegions, getActiveHighlightMap());
        }

        function handleRegionHover(key) {
            if (lockedRegionKey) return;
            updateInspectorUI(key);
        }

        function updateInspectorUI(key) {
            const cardEl = document.getElementById('region-inspector');
            const titleEl = document.getElementById('inspector-title');
            const descEl = document.getElementById('inspector-desc');
            const tagEl = document.getElementById('inspector-tag');

            const activeKey = lockedRegionKey || key;

            if (!activeKey || !regionMetadata[activeKey]) {
                cardEl.classList.remove('locked-card');
                tagEl.innerText = "Hover or Click Region";
                titleEl.querySelector('span:first-child').innerText = "Region Inspector";
                descEl.innerText = "Move your cursor or click on any isolated region above to view its set notation and element composition.";
                return;
            }

            const info = regionMetadata[activeKey];
            const elements = currentRegions[activeKey] || [];
            const elText = elements.length > 0 ? \`{ \${elements.join(', ')} }\` : 'âˆ… (Empty Set)';

            if (lockedRegionKey) {
                cardEl.classList.add('locked-card');
                tagEl.innerText = \`\${info.notation} [ðŸ”’ Locked]\`;
            } else {
                cardEl.classList.remove('locked-card');
                tagEl.innerText = info.notation;
            }

            titleEl.querySelector('span:first-child').innerText = info.title;
            descEl.innerHTML = \`\${info.desc}<br><br><strong style="opacity: 0.9;">Elements in Region:</strong> <span style="font-family: monospace; font-weight: bold;">\${elText}</span>\`;
        }

        function applyPreset(type) {
            if (type === 'custom') return;
            if (type === 'intersecting') {
                document.getElementById('input-U').value = "1, 2, 3, 4, 5, 6, 7, 8, 9, 10";
                document.getElementById('input-A').value = "1, 2, 3, 4, 5";
                document.getElementById('input-B').value = "4, 5, 6, 7";
                document.getElementById('input-C').value = "5, 6, 8, 9";
            } else if (type === 'disjoint') {
                document.getElementById('input-U').value = "1, 2, 3, 4, 5, 6, 7, 8";
                document.getElementById('input-A').value = "1, 2, 3";
                document.getElementById('input-B').value = "4, 5, 6";
                document.getElementById('input-C').value = "7, 8";
            } else if (type === 'subset') {
                document.getElementById('input-U').value = "1, 2, 3, 4, 5, 6, 7, 8";
                document.getElementById('input-A').value = "2, 3";
                document.getElementById('input-B').value = "1, 2, 3, 4, 5";
            }
            updateSimulation();
        }

        function getActiveHighlightMap() {
            let highlightMap = {};
            if (mode === 2) {
                switch (currentOp) {
                    case 'A_UNION_B': highlightMap = { onlyA: true, onlyB: true, AB: true }; break;
                    case 'A_INTER_B': highlightMap = { AB: true }; break;
                    case 'A_DIFF_B': highlightMap = { onlyA: true }; break;
                    case 'B_DIFF_A': highlightMap = { onlyB: true }; break;
                    case 'A_COMP': highlightMap = { onlyB: true, outside: true }; break;
                    case 'B_COMP': highlightMap = { onlyA: true, outside: true }; break;
                }
            } else {
                switch (currentOp) {
                    case 'ABC_UNION': highlightMap = { onlyA3: true, onlyB3: true, onlyC3: true, AB3: true, AC3: true, BC3: true, ABC3: true }; break;
                    case 'ABC_INTER': highlightMap = { ABC3: true }; break;
                    case 'A_ONLY': highlightMap = { onlyA3: true }; break;
                }
            }
            return highlightMap;
        }

        function updateSimulation() {
            const U = parseSet('input-U');
            const A = parseSet('input-A');
            const B = parseSet('input-B');
            const C = parseSet('input-C');

            if (mode === 2) {
                currentRegions = {
                    onlyA: A.filter(x => !B.includes(x) && U.includes(x)),
                    onlyB: B.filter(x => !A.includes(x) && U.includes(x)),
                    AB: A.filter(x => B.includes(x) && U.includes(x)),
                    outside: U.filter(x => !A.includes(x) && !B.includes(x))
                };
            } else {
                currentRegions = {
                    onlyA3: A.filter(x => !B.includes(x) && !C.includes(x) && U.includes(x)),
                    onlyB3: B.filter(x => !A.includes(x) && !C.includes(x) && U.includes(x)),
                    onlyC3: C.filter(x => !A.includes(x) && !B.includes(x) && U.includes(x)),
                    AB3: A.filter(x => B.includes(x) && !C.includes(x) && U.includes(x)),
                    AC3: A.filter(x => C.includes(x) && !B.includes(x) && U.includes(x)),
                    BC3: B.filter(x => C.includes(x) && !A.includes(x) && U.includes(x)),
                    ABC3: A.filter(x => B.includes(x) && C.includes(x) && U.includes(x)),
                    outside3: U.filter(x => !A.includes(x) && !B.includes(x) && !C.includes(x))
                };
            }

            const highlightMap = getActiveHighlightMap();
            let resultSet = [];
            
            Object.keys(highlightMap).forEach(key => {
                if (highlightMap[key] && currentRegions[key]) {
                    resultSet = resultSet.concat(currentRegions[key]);
                }
            });

            renderSVG(currentRegions, highlightMap);

            document.getElementById('result-set').innerText = resultSet.length > 0 ? \`{ \${resultSet.join(', ')} }\` : 'âˆ… (Empty Set)';
            document.getElementById('result-cardinality').innerText = resultSet.length;

            if (lockedRegionKey) updateInspectorUI(lockedRegionKey);
        }

        function renderSVG(regions, highlight) {
            const container = document.getElementById('regions-layer');
            let html = '';

            if (mode === 2) {
                const dOnlyA = "M 300 112.68 A 120 120 0 1 0 300 307.32 A 120 120 0 0 1 300 112.68 Z";
                const dOnlyB = "M 300 112.68 A 120 120 0 0 1 300 307.32 A 120 120 0 1 0 300 112.68 Z";
                const dAB = "M 300 112.68 A 120 120 0 0 1 300 307.32 A 120 120 0 0 1 300 112.68 Z";

                html += \`<rect x="10" y="10" width="580" height="400" rx="14" class="atomic-region \${highlight.outside ? 'op-active' : ''} \${lockedRegionKey === 'outside' ? 'locked' : ''}" onclick="handleRegionClick('outside', event)" onmouseenter="handleRegionHover('outside')" onmouseleave="handleRegionHover(null)" />\`;
                html += \`<text x="25" y="38" class="circle-label" fill="#64748b">Universal Set (U)</text>\`;

                html += \`<path d="\${dOnlyA}" class="atomic-region \${highlight.onlyA ? 'op-active' : ''} \${lockedRegionKey === 'onlyA' ? 'locked' : ''}" onclick="handleRegionClick('onlyA', event)" onmouseenter="handleRegionHover('onlyA')" onmouseleave="handleRegionHover(null)" />\`;
                html += \`<path d="\${dOnlyB}" class="atomic-region \${highlight.onlyB ? 'op-active' : ''} \${lockedRegionKey === 'onlyB' ? 'locked' : ''}" onclick="handleRegionClick('onlyB', event)" onmouseenter="handleRegionHover('onlyB')" onmouseleave="handleRegionHover(null)" />\`;
                html += \`<path d="\${dAB}" class="atomic-region \${highlight.AB ? 'op-active' : ''} \${lockedRegionKey === 'AB' ? 'locked' : ''}" onclick="handleRegionClick('AB', event)" onmouseenter="handleRegionHover('AB')" onmouseleave="handleRegionHover(null)" />\`;

                html += \`<circle cx="230" cy="210" r="120" class="circle-stroke-a" />\`;
                html += \`<circle cx="370" cy="210" r="120" class="circle-stroke-b" />\`;

                html += \`<text x="140" y="110" class="circle-label" fill="var(--color-a)">Set A</text>\`;
                html += \`<text x="410" y="110" class="circle-label" fill="var(--color-b)">Set B</text>\`;
                html += \`<text x="180" y="215" class="element-text" text-anchor="middle">\${formatElements(regions.onlyA)}</text>\`;
                html += \`<text x="420" y="215" class="element-text" text-anchor="middle">\${formatElements(regions.onlyB)}</text>\`;
                html += \`<text x="300" y="215" class="element-text" text-anchor="middle">\${formatElements(regions.AB)}</text>\`;
                html += \`<text x="50" y="380" class="element-text">\${formatElements(regions.outside, 'Exterior U: ')}</text>\`;

            } else {
                const rClass = (key) => \`atomic-region \${highlight[key] ? 'op-active' : ''} \${lockedRegionKey === key ? 'locked' : ''}\`;
                const ev = (key) => \`onclick="handleRegionClick('\${key}', event)" onmouseenter="handleRegionHover('\${key}')" onmouseleave="handleRegionHover(null)"\`;

                // Outside Region
                html += \`<rect x="10" y="10" width="580" height="400" rx="14" mask="url(#maskNotABC)" class="\${rClass('outside3')}" \${ev('outside3')} />\`;
                html += \`<text x="25" y="38" class="circle-label" fill="#64748b">Universal Set (U)</text>\`;

                // Exclusive Regions
                html += \`<use href="#c3A" mask="url(#maskNotBC)" class="\${rClass('onlyA3')}" \${ev('onlyA3')} />\`;
                html += \`<use href="#c3B" mask="url(#maskNotAC)" class="\${rClass('onlyB3')}" \${ev('onlyB3')} />\`;
                html += \`<use href="#c3C" mask="url(#maskNotAB)" class="\${rClass('onlyC3')}" \${ev('onlyC3')} />\`;

                // Pairwise Intersections
                html += \`<g clip-path="url(#clipA)">\`;
                html += \`  <use href="#c3B" mask="url(#maskNotC)" class="\${rClass('AB3')}" \${ev('AB3')} />\`;
                html += \`  <use href="#c3C" mask="url(#maskNotB)" class="\${rClass('AC3')}" \${ev('AC3')} />\`;
                html += \`</g>\`;

                html += \`<g clip-path="url(#clipB)">\`;
                html += \`  <use href="#c3C" mask="url(#maskNotA)" class="\${rClass('BC3')}" \${ev('BC3')} />\`;
                html += \`</g>\`;

                // Triple Intersection
                html += \`<g clip-path="url(#clipA)">\`;
                html += \`  <g clip-path="url(#clipB)">\`;
                html += \`    <use href="#c3C" class="\${rClass('ABC3')}" \${ev('ABC3')} />\`;
                html += \`  </g>\`;
                html += \`</g>\`;

                // Colored Circle Outlines (Radius = 90)
                html += \`<circle cx="260" cy="180" r="90" class="circle-stroke-a" />\`;
                html += \`<circle cx="340" cy="180" r="90" class="circle-stroke-b" />\`;
                html += \`<circle cx="300" cy="240" r="90" class="circle-stroke-c" />\`;

                // Circle Labels
                html += \`<text x="200" y="120" class="circle-label" fill="var(--color-a)">Set A</text>\`;
                html += \`<text x="360" y="120" class="circle-label" fill="var(--color-b)">Set B</text>\`;
                html += \`<text x="300" y="355" class="circle-label" fill="var(--color-c)" text-anchor="middle">Set C</text>\`;

                // Region Element Labels
                html += \`<text x="220" y="160" class="element-text" text-anchor="middle">\${formatElements(regions.onlyA3)}</text>\`;
                html += \`<text x="380" y="160" class="element-text" text-anchor="middle">\${formatElements(regions.onlyB3)}</text>\`;
                html += \`<text x="300" y="295" class="element-text" text-anchor="middle">\${formatElements(regions.onlyC3)}</text>\`;
                html += \`<text x="300" y="150" class="element-text" text-anchor="middle">\${formatElements(regions.AB3)}</text>\`;
                html += \`<text x="250" y="225" class="element-text" text-anchor="middle">\${formatElements(regions.AC3)}</text>\`;
                html += \`<text x="350" y="225" class="element-text" text-anchor="middle">\${formatElements(regions.BC3)}</text>\`;
                html += \`<text x="300" y="200" class="element-text" text-anchor="middle">\${formatElements(regions.ABC3)}</text>\`;
                html += \`<text x="50" y="380" class="element-text">\${formatElements(regions.outside3, 'Exterior U: ')}</text>\`;
            }

            container.innerHTML = html;
        }

        function formatElements(arr, prefix = '') {
            if (!arr || arr.length === 0) return 'âˆ…';
            return prefix + '{ ' + arr.join(', ') + ' }';
        }

        updateSimulation();
    </script>
</body>
</html>`,
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-17"
  },
  {
    id: "sim-hydraulic-press-lift",
    title: "Hydraulic Lift & Multi-Stroke Press Simulator",
    tagline: "Investigate Pascal's principle, fluid pressure transmission (P = F/A), force multiplication, and continuous multi-stroke load displacement",
    discipline: "physics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM"],
    standards: ["MS-PS1-4", "HS-PS2-1", "AP Physics 1", "NGSS SEP-5"],
    description: "An interactive high-displacement hydraulic lift and press simulation investigating Pascal's principle, fluid pressure transmission, cross-sectional area ratios (A1 vs A2), force multiplication, stroke distance conservation of energy, and load crushing dynamics with customizable hydraulic fluids and target weights.",
    learningObjectives: [
      "Demonstrate Pascal's Principle: pressure applied to an enclosed incompressible fluid is transmitted undiminished in all directions (P1 = P2 = P)",
      "Calculate force multiplication using piston surface area ratios: F2 = P Ã— A2 = F1 Ã— (A2 / A1)",
      "Analyze the conservation of work (F1 Ã— d1 = F2 Ã— d2) and understand why high force multiplication requires multi-stroke pumping displacement to lift heavy loads"
    ],
    thumbnailGradient: "from-sky-600 via-blue-700 to-slate-950",
    badgeColor: "bg-sky-500/10 text-sky-300 border-sky-500/20",
    iconName: "Gauge",
    rating: 4.9,
    reviewCount: 54,
    teacherCount: 195,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive Input Force (20 - 500 N) and Small/Large Piston Radii sliders",
      "Continuous Multi-Stroke Pumping Engine with check-valve fluid cycles",
      "Dynamic Math Readout: A1, A2, Pressure P (N/mÂ²), Output Force F2, Stroke Ratio (d1/d2), and Lift Distance",
      "Target load selection (Car 25,000N, Steel Cube 8,000N, Wood 1,500N, Soda Can 200N) with roof compression & crushing physics",
      "Hydraulic fluid selection (Hydraulic Oil, Pure Water, DOT 4 Brake Fluid, Viscous Molasses) with fluid-specific viscosity speed"
    ],
    parameterDefaults: {
      inputForce: 150,
      r1: 3,
      r2: 8
    },
    parameterControls: [
      {
        key: "inputForce",
        label: "Input Force (F1)",
        min: 20,
        max: 500,
        step: 5,
        unit: "N",
        description: "Effort force applied to small piston"
      },
      {
        key: "r1",
        label: "Small Piston Radius (r1)",
        min: 1,
        max: 5,
        step: 0.1,
        unit: "cm",
        description: "Radius of input piston"
      },
      {
        key: "r2",
        label: "Large Piston Radius (r2)",
        min: 4,
        max: 15,
        step: 0.5,
        unit: "cm",
        description: "Radius of output piston"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-hydraulic-1",
        title: "Lift the 25,000 N Small Car",
        instruction: "Adjust input force and piston radii until the generated output force F2 reaches or exceeds 25,000 N.",
        targetMetric: "Output Force F2",
        targetValue: 25000,
        tolerance: 1000,
        currentValueKey: "outputForce",
        rewardBadge: "Hydraulic Master"
      }
    ],
    previewFacts: [
      "Pascal's Principle states that pressure applied to an enclosed, incompressible fluid is transmitted undiminished in all directions.",
      "Because Work = Force Ã— Distance is conserved, gaining a 10Ã— force multiplication means the small piston must move 10Ã— the distance of the large piston."
    ],
    isHtmlApp: true,
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hydraulic Press - Multi-Stroke Significant Lift Simulation</title>
    <style>
        :root {
            --bg-color: #0f172a;
            --panel-bg: #1e293b;
            --accent-color: #38bdf8;
            --accent-hover: #0284c7;
            --text-color: #f8fafc;
            --border-color: #334155;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }

        h1 {
            margin-bottom: 20px;
            font-size: 1.8rem;
            color: var(--accent-color);
            text-align: center;
        }

        .container {
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 100%;
            max-width: 1180px;
        }

        @media (min-width: 850px) {
            .container {
                display: grid;
                grid-template-columns: 1fr 370px;
            }
        }

        .canvas-container {
            position: relative;
            background-color: #020617;
            border-radius: 12px;
            border: 1px solid var(--border-color);
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
        }

        canvas {
            display: block;
            width: 100%;
            height: auto;
        }

        .controls-panel {
            background-color: var(--panel-bg);
            padding: 20px;
            border-radius: 12px;
            border: 1px solid var(--border-color);
            display: flex;
            flex-direction: column;
            gap: 12px;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
        }

        .control-group {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        label {
            font-size: 0.85rem;
            font-weight: 600;
            display: flex;
            justify-content: space-between;
        }

        label span {
            color: var(--accent-color);
        }

        input[type="range"] {
            width: 100%;
            height: 6px;
            background: #475569;
            border-radius: 3px;
            outline: none;
            accent-color: var(--accent-color);
        }

        select {
            width: 100%;
            padding: 8px 10px;
            background-color: #0f172a;
            color: var(--text-color);
            border: 1px solid var(--border-color);
            border-radius: 6px;
            font-size: 0.88rem;
            outline: none;
            cursor: pointer;
        }

        .calc-panel {
            background-color: #020617;
            border-radius: 8px;
            padding: 12px;
            border: 1px solid var(--border-color);
            font-family: 'Courier New', Courier, monospace;
            font-size: 0.78rem;
            line-height: 1.45;
            color: #38bdf8;
            display: flex;
            flex-direction: column;
            gap: 3px;
        }

        .calc-title {
            font-weight: bold;
            color: #f8fafc;
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 4px;
            margin-bottom: 4px;
        }

        .btn-group {
            display: flex;
            gap: 10px;
            margin-top: 5px;
        }

        button {
            flex: 1;
            padding: 10px;
            border: none;
            border-radius: 6px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.2s, transform 0.1s;
        }

        button:active {
            transform: scale(0.98);
        }

        .btn-primary {
            background-color: var(--accent-color);
            color: #0f172a;
        }

        .btn-primary:hover {
            background-color: var(--accent-hover);
            color: #ffffff;
        }

        .btn-secondary {
            background-color: #475569;
            color: white;
        }

        .btn-secondary:hover {
            background-color: #334155;
        }

        .status-box {
            padding: 8px;
            border-radius: 6px;
            background-color: #0f172a;
            border: 1px solid var(--border-color);
            text-align: center;
            font-weight: bold;
            font-size: 0.85rem;
        }

        /* Physics Explanation Card Styles */
        .physics-section {
            width: 100%;
            max-width: 1180px;
            margin-top: 25px;
            background-color: var(--panel-bg);
            border-radius: 12px;
            border: 1px solid var(--border-color);
            padding: 24px;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
        }

        .physics-title {
            font-size: 1.3rem;
            font-weight: 700;
            color: var(--accent-color);
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 10px;
            margin-bottom: 16px;
        }

        .physics-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 16px;
        }

        @media (min-width: 768px) {
            .physics-grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        .physics-card {
            background-color: #020617;
            padding: 16px;
            border-radius: 8px;
            border: 1px solid var(--border-color);
        }

        .physics-card h3 {
            font-size: 1.05rem;
            color: #f8fafc;
            margin-bottom: 8px;
        }

        .physics-card p {
            font-size: 0.88rem;
            color: #94a3b8;
            line-height: 1.5;
        }

        .formula {
            display: block;
            margin: 8px 0;
            padding: 6px;
            background-color: #0f172a;
            border-radius: 4px;
            color: var(--accent-color);
            font-family: 'Courier New', Courier, monospace;
            font-weight: bold;
            text-align: center;
        }
    </style>
</head>
<body>

    <h1>Hydraulic Lift Simulation (High Displacement System)</h1>

    <div class="container">
        <div class="canvas-container">
            <canvas id="simCanvas" width="700" height="560"></canvas>
        </div>

        <div class="controls-panel">
            <div class="control-group">
                <label for="liquidSelect">Hydraulic Fluid</label>
                <select id="liquidSelect">
                    <option value="oil">Standard Hydraulic Oil</option>
                    <option value="water">Pure Water</option>
                    <option value="brake">Brake Fluid (DOT 4)</option>
                    <option value="molasses">Heavy Duty Viscous Fluid</option>
                </select>
            </div>

            <div class="control-group">
                <label for="objectSelect">Target Load / Object</label>
                <select id="objectSelect">
                    <option value="car">Small Car (Weight/Crush: 25,000 N)</option>
                    <option value="steel">Steel Cube (Crush: 8,000 N)</option>
                    <option value="wood">Wooden Block (Crush: 1,500 N)</option>
                    <option value="can">Soda Can (Crush: 200 N)</option>
                </select>
            </div>

            <div class="control-group">
                <label for="inputForce">Input Force (F1): <span id="valForce">150 N</span></label>
                <input type="range" id="inputForce" min="20" max="500" value="150" step="5">
            </div>

            <div class="control-group">
                <label for="r1">Small Piston Radius (r1): <span id="valR1">3.0 cm</span></label>
                <input type="range" id="r1" min="1" max="5" value="3" step="0.1">
            </div>

            <div class="control-group">
                <label for="r2">Large Piston Radius (r2): <span id="valR2">8.0 cm</span></label>
                <input type="range" id="r2" min="4" max="15" value="8" step="0.5">
            </div>

            <!-- Dynamic Mathematical Calculations -->
            <div class="calc-panel">
                <div class="calc-title">Dynamic Calculation Parameters</div>
                <div>A1 = Ï€ Ã— (r1)Â² = <span id="calcA1">0.00283</span> mÂ²</div>
                <div>A2 = Ï€ Ã— (r2)Â² = <span id="calcA2">0.02011</span> mÂ²</div>
                <div>Pressure P = F1 / A1 = <span id="calcP" style="color: #4ade80;">53,051.6</span> N/mÂ²</div>
                <div>Output Force F2 = P Ã— A2 = <span id="calcF2" style="color: #38bdf8;">1,066</span> N</div>
                <div>Stroke Ratio (d1 / d2) = <span id="calcSR">7.11</span></div>
                <div>Total Load Lifted Distance: <span id="calcLiftDist" style="color: #eab308;">0.00 cm</span></div>
            </div>

            <div class="status-box" id="statusText">Status: Ready</div>

            <div class="btn-group">
                <button id="btnPress" class="btn-primary">Continuous Lift</button>
                <button id="btnReset" class="btn-secondary">Reset</button>
            </div>
            
            <button id="btnNarrate" class="btn-secondary" style="background-color: #0284c7;">Explain Lift Physics</button>
        </div>
    </div>

    <!-- Physics Explanation Section -->
    <section class="physics-section">
        <h2 class="physics-title">Physics Principles of the Hydraulic Press</h2>
        <div class="physics-grid">
            <div class="physics-card">
                <h3>1. Pascal's Principle</h3>
                <p>
                    A hydraulic press relies on <strong>Pascal's Principle</strong>, which states that any change in pressure applied to an enclosed, incompressible fluid is transmitted undiminished throughout the entire fluid.
                </p>
                <span class="formula">Pâ‚ = Pâ‚‚ = P</span>
            </div>

            <div class="physics-card">
                <h3>2. Force Multiplication</h3>
                <p>
                    Because pressure is equal to force divided by cross-sectional area, a small force applied on a smaller piston (Aâ‚) creates fluid pressure that produces a much larger output force on a larger piston (Aâ‚‚).
                </p>
                <span class="formula">Fâ‚‚ = P Ã— Aâ‚‚ = Fâ‚ Ã— (Aâ‚‚ / Aâ‚)</span>
            </div>

            <div class="physics-card">
                <h3>3. Conservation of Work & Energy</h3>
                <p>
                    Force is multiplied at the expense of distance. Work input equals work output (W = F Ã— d). The input piston must move a much greater distance (dâ‚) than the output piston moves (dâ‚‚).
                </p>
                <span class="formula">Fâ‚ Ã— dâ‚ = Fâ‚‚ Ã— dâ‚‚</span>
            </div>
        </div>
    </section>

    <script>
        const canvas = document.getElementById('simCanvas');
        const ctx = canvas.getContext('2d');

        // Controls
        const inputForceElem = document.getElementById('inputForce');
        const r1Elem = document.getElementById('r1');
        const r2Elem = document.getElementById('r2');
        const objectSelect = document.getElementById('objectSelect');
        const liquidSelect = document.getElementById('liquidSelect');

        // Readout xœÄ½]sÉr(ø>¿¢³#4€¿DÒ¦@Jâ9”H“”fä9
ŸÐú@ÃÝŠ8cmØŽXÇ¾íûîõáÿÇnÄû²û`¿ûGÌXÿ„ÍÌúèªêê@iŽ9#è®ÊÊÊÊÌÊ¬ÌÓ0™ýEò?ýhš¤ìÞ?â~ÀŽØ êÏ'Á4mƒôlàÇg‹óAuC–Ù¨=Í×¾n-©zÝr×k/«×Î×ëûãþIiƒ¼DAÍÒ&y	wÍ«e¯Üõž/mñyA‹7×ËjÞ\»k^„wéi_–Ô—åòP’ÔOçÉmðP
#+…ˆÍMölž¦ È‚ÚK§Wq$e0e™<Nðæ:H‚RŒdgí×~ûi)Ÿg¥ì=ÏÃÝ¡qøø þ¤ÞàOŽØOlêO‚¶q“úÓØËÅ öçã°Ï.ÃñF€Œ£
|ø½­æ<‰f~?L¬ÙØ«³dƒç~?ÅR­F“}ªÍ|<c­¡«y°ïñ¡¼ÙÞÛîïšÀw;9èmz/ö?ôgøÓUO/oÙvMoÆßëtîv—õ¡e·2‰Æ~’‰ÖÐÛ0éGó„½¯ôVv÷¶:Í;³•}»3ÍÆ6û¤Zùdä­Ã¨Û#õ~ôÓüHö}À7<f]é›Ž€MGÑxpÀÚf³©S<ð;Á>”áp”°mÀðc8HGl?7ŠI&»ÀwÖ÷³•=³‘íÝí½ž»‘NžU¢h µñ=|¦ìÙ8ê0[iuŒVzÛ­fAW:»•¾?Õ;| ÖÔ"–?¸Û†7ü­Nñ(Þ„“ùØOÃhÊ@¼@¨ßúqè÷ÆA6°cP3T%átãzç“à©ù¶u“ÆÑ‡àòîŽë•¦ù>R|ÕF5y>ã$_$! W#?A½²1ˆ>N7ÌýxžŒ®âh(4_ÓÖLÿ[¸'!âÐn7µ®ÞÍ§}ê%ðì•û“¤Z³Y” <Ç9qæÇIð|ùi5œÎæ)ÍÙ¨à0›ÎM)fãÖŸ÷'fÝ¸µ¬N;_§]XÇÝ(Öçmo²V³YÐ•jk¥ÅÈxå§£ÆÕ9ûŽÃæ\@ÉÐJ·yé¶»4ßkä4¨u7¡¹¥Ý£”ñŸ¿þó	6ƒCõ\eÉ@0+|9{š’î‚òB]ýÈÿÞcøÍiÿÞÕ>OA=1aýÈÿZõŒŠqÎã)óóVS}ã_à÷	¼=i×u:Õ¡Ku³Guy]bò)Ãò“ƒÙç³Èôuà¢yZÄñ3è&f¿¥ÁÚHÁ:éFÓ¦x(ÿ›ßþæúiÖxÞúÄ^ÿæ·¹*×-wyê#žƒT[µO¬?qUoTo»«[ºÍVÀ¬DÅŽ-‹d®æk´Kk\å*Cu/"(€jÅYOÁ]8uàPU w'ÏcŸÆé4†)ÌÜ0©;zn£FBG ±
CÐ®ÙM9`Ü\ç°Õ8Mõ³½\ãŒAÅžO»¨Oªy½ŽÊ¥VN·•]#,a;Ç5¼cÕ¯å<dsr†0ºTØR=ÍÕB°øŠ#Q¸x5Ô4ëj2‹=×zuÀ.	&1îi¨å†äˆUoæwwa?DHiD”f0'j¶ˆ8°HÒÅ8h9€óç7Ûþ Øknäë}b0NÁã»õìÃd•Þð÷ìŽú¯wç½¹ÛÛmí¶\½ùÊýÍ¥ÁgøH"z³ Sq’×†éC£?üø”yŒ+´¯üé½Ÿ4ÈRß¸‰UsÎ,¥ÊÔQþçÜÖ®sÚ~Àm{ßùnÎ‚g8‡“wXh¯°Ðm4£[Îá4LCüÌ.*U`|$£ˆ«o˜UÁ²rõåc›—jóR­(åÂª…M-?±LÈ§NZÍÚ¹Š^Þ¶tv Ž¢;¬¼g÷L`ÏóÀ¡b/ß^Ÿ¼¹8ï²çoÎOñqŽ=îÂñøy“:Êç`Î¦Ose‡ã¨çOÆ³‘¯—þV¾|/†Ó+ÐWÕgÁÛy˜ÅÃ±Ød`	 ÁÂ³A²‡Ïl•ë®+ªÔY˜ì	Ž<¯A	½\­n°™§ª¶ÑÆºmÑFñk›øµß¹:‡dÍÍZ9‚ãžc(kL6âaÏ¯¶;àûd¿švm#ë]?ž2{vG'µìêüêüõö-ûþäââÆÉH|òUh³¿íoõöXŽÁdøµÛYÂ4öËIt}1û^££$¶b—Ô†¾¤FF£ÇÔhµ›.~È²2âOrCXŠƒg`½FqŽ²{<s’+xb«ÁÎ__½¹Î¸¹½|œÑ}yÖý5{{rñöÌÍ WÓï:=ÿ11‚«xÒÂU |µ˜ç¬Ø€Žª·“_ÿmwŠ$V¢g¸îGÒygx·ÛýN'Ø`¸Bq×Ùš=GJyØûúèÂì’R)ÐUøºKsuæ‹æìNMÇ¸Æg»Á.ßÜtuqrûüòú«^\žœ²›óÓ³Ú—¨Œ™Ä@µ‰à{¨,Å@í•–j©Ší6t½½Rn½çp_NÃaì§`¸‘m!›é,Ã	×BUEd7bŸš­³Í;öæêêìš¼~{~Áž_Ÿ¼:[À[[Û­Ng)[È»|ÒÜ‘BôË%ºfÅ¶¬WcHÈŒý#Æ¸|ö«³îmq´5/iMárz%hâè	†žGAk»À ¯½.êä†]œ<;+˜VLZÝíÝùw}­"2ê7ZíÙKüiâ%AÞm:šäÕßüöWÂXwZqÄ¬zÒÇ¤ÎHqàjck¿ˆ¼ÀIøÜ2Üñmp&ÿò™°vÕŽ †ŸŽL›#Ó– Zë Óv"#aí/UÀ—{½Ák—´î7Éò/Áð6†‚“0MƒZbWgÃ¯5Öò«àŒmfôåÓ´ëò\Ž^qÞ»?f§ãí0hÄNLÞc³š¶»8PêÔOFÕA»m¿wøî¥³‡, 	T·{ÐuË ÅVPQ7XötÝVP>³–vè½MoYÊdªR"®ÁX:t]|pÆŸÊå‰¥Ë9rÁDã	Ãí¢jžšèÌ)J‘±l"óÉ©áö¦Ûî;¹¾¾ü>¯Ýh™FnB|ûmÑáâNTÅ'q};B™7{MõU½¶‡²]0†Öèðâ«ŒÎÖš£C›ú
«P[™¶—s@¬Î
Ï/Ê^@J]ÕYó¯ Ý\x·êéy»&ûÙþˆWSâd#±|'?·S«?½Çïäj¹k¡'ñïs¢ŠÏSTº (0 º×zúó8¦éKZ‚Ž‹ÅC¾<fh‡ÌÜ¶ú¼Ñœ®C“zQ £•'ë‰ÖÖÒ©IÀ‹9™Êo|pqêû±SšVR¹Ê¤òŒN‘ÿä™T#‚ÔÎ×™£Èº-mÛ-™mp\òí¬&ùÍvs§µ[ K©ƒ.î ‚¹·Ä‘ÑA|×’KáÒðÒn!'™ÌyÄl­žkÓ²ƒClÃM¯%æä\-î»Z¼•Ÿ{VeƒYâËC YdwV#gé&€ZÎ[JšR¹u5»:+ºV@“4Š¥]4;ðð.Ž& ÄñÏ¦‚è-Ä™	q8Â½#:
üÁ8˜‚¬ï»4õàõjô LGm8Ë,¨ÌB”±×{©Œ?ŽÕ&•–X»: ü…LR,9ëZª ˆnz·¦¨Ó¶xáLÒ¼tÁì1Í— ÎšÒËüŽÓ¸%UNtO©ÈM¶S«‹‘²Šƒ­é,þèVŸ¬×ê“e­Ú’£Éž˜ñ§á„Žö<ý‰vdGÉ
/¼šÓo¿ íÿ˜còÌä´‹³ íwm©ºO‡³<y†a£	¤Pû%Ú´âs%¯|ÉŽ½¹ãöb“B®9
ë­î`àuêÉQÖ¥•ÍµD0Ný+4š«	6ÍÍùŸï4*à9Ù-Ñã£Œ‚E}ÃëxÖ|æ0~ð'¯áK§O#n 6:îV9<‚‰®¤eGÔ–tÖ:‹¶¤»¿^7ï¯´•Õêv³éÚÁ¬¹Ö[3HÜ¹ÁÉ©ãh2Åì¶¼L…wôâpŠˆFp„<—Ö>–G*k:¼kóÝ0	›íÙ.àrüYáPÊ¿°’®¿?öñX7š¨ƒ‹È|]tðÀjÄ>|PèüâO){¯ˆ=”}À>Šî©ë¯Ùù4ÉÎƒp½ÊO[<²…‡(äOñ!OûÇ>WV\2wè¢¸(?)÷EôÊ
DÇgátŽç£¯æ“vÛc(ƒ’]XU.¸WÇ6ókc9©S¸ÈçP%Ëé¾½M³ Ï…1ãúÄx^u«ºŒËyi5±Æcr4,R¾OÒÔÇctNi^÷@”s¡IÞœhøƒÁÙ=àt|Lƒ¸ºÑ‡tÎL¤£c«×ú
eÍÉÌMÒxn‘dù¤Sd­iöŸ¾$¯p¬Ù>rüØÉòk­°[Ž¡^6ñ.9N(Ÿü^råbS"2Añ´<LXýãW[€:±Å}—GpÍFB`oÓt$a²ÁÂ)8gSè‰kæåoV¥8ç¢Órû=+–ò»J¿ùíI¿Å×4bW~Ò÷Ç +ãpÚgã ÎÇ÷¤üÙlÂüåü)¦ýq”À×;ºá&,Õ6²@Õøãñ{ˆW@!®4 %“xàÒ-£#÷âà L‡Ù:xð/CAÃÑ`Þæg8ðr%ÛbZõ f	 µ&AÄ¦ï´ƒ3 )£½3(æ×Y˜í`0a€DÑ8ÜžŽ£ùçZ›u:úŠ-.à4c"E’u!' ü¤íœßFk8Çbg|ª˜â|]Åa-óû(Dr±°Í[*RÂ]qp€Õ9 ‚ ŠÃˆq|ßƒ[Û öÏ jc:wê/ÿ2ÿ"˜z¯_ÈwxF{÷:„A	ýÛ–²dâQËÔ¸ˆ™%tà»ÿ¡ªà­:úã N«Bs(pló:ŸÍ¢yÄaÍcÖ‹£	°äFn=L}²TÎ›q|$õMvqçGóî
^8Ûü¯¾ø/¯ðoïÀÚg`IWáë$¯¶ð©CÓQƒš>Û~ùT¢œÏùV$oêyq‹-n&ý8œ¥Ç_nö¢ÁÿŽÒÉøø·üŠV˜tçIMÎ'8t4“ó7þ<Ñ&>^Z¬LóéïZí­?â0D&½ØkºÚU9yAtAÇ€$
ôñ[08à•v³½ã5÷¼v«ïè–§j8€·I8ñ†AZ,û©Yô÷hjJ¼fVü$À¦a:Æ&_È
\íeØ·¬}
¯ÅÞ†q:Grú=	Áâ:À8ŸÞƒÁñÂ˜l”HÖX¨ó:“;iü›?€²_AÄÒHÆ0èÅ> 2'šx>&õ
E ÷øoC@©ÑŒ„­ôþ¨#P„	ÎJ;èÏ(ÀNõñzƒõwÜãýÀ+¯ÂÁ`°›þ(ŠÆ¬ºãíÕ*uVy	ö¥z¸ïµÚôôäŠk=c7·g¯*ï9¸D\DMZ·{sÓxurû²Ñ½|}{öú¶±×xÑ8i´°vÑË-jðæ…×½„omã[G6
XH†¬‚#* ð}€—'a.
}ƒ*÷bÌÆ~ç&<ÌÀþEÒÂÈÆáæãIÄ‡ ©<¦jñÎA6ª0â„z!”ŠlÞƒîšE€5Ì¬úoÿù¡Îþí?/j30¿G`ºIº1ÿ!ÈñDoÁÐÆÀˆÄöAp	·z&Ñ:EbšoÄ€ã1þ)”æûÄ@/*!ú•·¸	¿@3L4h0}±16¤÷ñ€!—!Y€	ýÁ”ßm˜ÊáG–C¼ÈwÙh	‹=¯q0B«aÂ%2àÆ@ÃðÂ¬:Í‚MEÞ­œCôÜÝ’PÑÐ:­Oˆš>" MéÇÈ€Í1Mà	0Í]83$as2æ5âf‚Êi??÷Ç5öóßþ«z‹:{0ð>`¿3(ÔuÊ!p)RŽ!Ì”[q½;)@×Zúùoþ
ƒßÀV&Às
cÕ¿
a"Ä(Í'½)(á p1„	m0/ù°ð:Í&HïÁœ#o¾¦¨Î$ÀÏ¢K=0ºüªm¥7”…¡îf«I³|´õ{Ðå Öµ% †Uh~òmÃßmñ
Šéð€m7öÅƒà>>vAøð6ïžè­nÅâik·-ØÈ9M‚ÛÅŒ&•>h;Ôž¨³X/ÇL3ßâ’Ló”ø¯%˜ rÚF6·¼Ehl_ŽoB:ò4˜
š=ñ.²x	šE1}3ãòz óÔv³I/Å%ç;˜ÞÑ4‰$ŸÖ»ù³€‰ùiq óSH!À¾¸Ç/?£3cðÁ“ï€‚?$.¿IýX0;Ÿ¥ÙŸ:’Œ9·­yM‡(¾ÙÔWíóÊ\Ó}Ë7ê`¾ÛL¼]w­8¸Õƒ‘$òïJÊ‘÷Pãˆ†€¥î¾Ì¯	Ò¹¦ðOcè ïôÖ}Í$	À9'„aÊËþ,JBjW
Ö¦Ô¢Ÿ¼uRØì‰þWB_+æ“wÎE:aüƒ>EÓ5r®ÅŸ”ŠZGÀ£5‹LáYkoÃ§®k”8‰ûàŽA?',a8¸|XÖ(s˜óCìgèè¢":î|à¯$ãlO! ˜öá€m©/ÀzíŒ×},Ún,¬`Kë;ãåÌèý  
µ¥zÉpjF+¤¢˜í„öúªÿö?jZ)PžÌÛÚij|DR‚{%¬“=˜ƒ ÿåŸ5H¶éÚÕïa,Õ.MêQWÅ$°»4xpôç%Ø¿jÀÞŒp½å#ß¥–Ý£V®C­\‡ðORØ'](ý1Ì›Œ‹àò~,ýxK"¥÷bñÔ‹Åj½ utä†´ß]aÕ¹N4íŽÍ]v'Ì2¢ÿú…Pº‘BqåÊMõA—O0fã ;B]>N"/§?"'ÇkiÍJgf¿ù/ÿÌh6â>n£|ÁÏd‹˜ûmÜ©V;„i0ž÷ÒTšÛT©˜q‡Ûý^ˆGµYoÖHåE=nŸ¢†qÖ©Ã$jè(ÓþÛ+r½ròŸ+÷âé*
WJÇ|éÆ%{*öú¨ü¯'>‚Íým½ÝW>Œ±{hfÜö@ÞÑgék—«Àª«ZÎµÌºÈƒÇXFÎë|YÛžÜøMY‚&AÒÐLKå/(`T&ƒÄ&0Ù!ÛCÅ6‚‡P&H{ÛáiÔ¹ÏMƒK-ÄL¹ÕÒ,n“K˜¼L'ã“ÙL_ Àe±qÀ~{øõée÷öÝÕ=?þêÿ0\ê:ªÓ
>üÁ1Ô<„–|Ä4N‚ô¨òæö¹·WÉ^à
ØQW*Hlâ¨BçwŽ0VýÀW”Åyl:xÔj49 ’—ã2×ßå÷nòzöSŽ©Ÿ`M¦JJ=,b‡æ›æØ¤þSõªœïáM+hïoõ²7~ç¯Gl.öXsoc4¿¹ÛÞºë¹—Ã8¦¹ÙÛßkå^/‚ñ8úˆÕéâYöžìõ‰:P\‘±ßÍÉl—2³—Â°—}åW‘øk±}ô¢J/zð’ð÷dP‹zðHÂš€Œ“–fþ`@eÕ<@îÝùÀ£€½9ß ˆ–«¼yXg®¼R×N˜Há*V†Ø\Còèe?îý¸š¡Z 3Þ*’©×0…x2ÔP«Ù¼WçÈ<8ÞM ú‹Ÿ=µÖ€Àç“©%
X ËðUË®<1žª1tÇ{.PáGcPa¢ËÚpÖJÑÿØŸáÝÂëKáNf>ˆ\/H?ÊR0ã§¸<PšÜ rõpÔR¤1.	(n˜ŽºÑgMTÊñ,Ä€±¡OÓyÖ†‰thêB«ÙØ+D+“…U6j9]qx£CÕlìä‡
tÜøÝž=˜oV=Ñ¥Hîg¥(†>‘"|†ŽLð¤àq¶„ö·ÚMh®uóO[Ú÷éÌOäW)%¸T%QaÛ¨Šj¸åtGºj)™`¼¶\XÝ{A:¸¶ˆ;('ûìžFŽ>{4ù¸¹r_E|¨¬’6ŸÛØ÷³èq€›6
­àÀfgž~„dS•šmA°'[ìÈ]²ï}îRz8Ê³<÷®Is½ewä/¬ û¿ fLÄmý˜.f`ïLç“˜§ïëhÆ¥Ñô‹Ï`“ƒ¦k†q¨­b:‚?Á÷)¦Ñ4páà.êÏAù…Ó€ÓlÝ)š+p¶1ÚÄ•÷
ˆÊéÔq8«ÁnôÒl|À!I°­%d›é÷BÎ¿ÙÐâ,‘ˆ£úô9×ž7‹Ã	nG,ã×ìé6W%GäFoï`D'Š[ýfw0Ø’6¥ 	@Jå(5f>zt+›EŒ\:\6K;D1U:;—`Cà£FËr€lUiÅÞÅ9í[Ø¹¬h‘Õ:ÖÞÞ®³­:Ûßvõ‹¼Lô5 åÇXhCÀ¿efXƒ‡–r˜-rÙÐÐõ½WÓšƒõš½V«Ý4i÷Ù6ÀjŠß47K,ÑRk‡“!§Khûpä‡æ´Ñ@P€™×—g òDó{Ð?˜Ï•ºÁµó–fÓÅÒ‡Ñ¨ãæ”­fm·ê¬³_'^49PXàâIbçKÃš ïÛ ŽfÞ]8¦ Ç âê¶²FI[f&,³–û%:ŠÎ	DâE½èK¯ohãôKé±w£y‚¿>‚Ó.¾ÕÙ$šFd#-7–*~²iˆ¶N«ªAë“mÃ”MõYgÆþ,	ˆ‰è“E‡9™5ƒKPæƒe®¬opmÛ¶þŠ]NG_ÄfÔœÙJêÁ ¢–Œ‘ið`€§b‘•W’´ >ÍiîêTÿO&Á ôYuâ?xj8Û(Âª¿.pÙ,õT•‘kæ–áO¦¶ïÃ$úÊWòhZñ–ì455ûé+ùûpS¬.nò5ÑC~ò
_ñ
¾ðx8jÿû?þýb+-dÒ&ÔàUq…ãXßg¾á‡ï m|CXÈ¶ðË ¼g}Ü:?ªÄ¬pxè×žÇ.DÃÕ$»"gÝóD£riEeuœ“ tÈøk÷Fl$K 0Ü3®·¢Ûdgƒ0eWcxÍnB­ã¯ ÷Oae¸ŠbUhMýŠlŸÊ1ÿËÁ&‡›TL«ÆÝ¬jª”‰h‡ˆQ€£ŠÜf©Ë-~VÝboÅfvíp“/Ëó •cu4€U·×‚1ÓÏ@/õ¯kÃgá7ä©Ví¬)I}à±ŽwE³ß€Ž4°j«¹~~¡rl‚ÈWæ§ÁSœVÈ4š¬³ŒðÍE!tß¢B\ª‘ž¥@ 'ìd0`üÁá&°"·è98˜@i=vM
€ZB‘³N€à¹™ä‘–:ªðÕ{MIaÊWŽÛèMâŽRòy‚¨Öµ^E’—â¥iU/(yXôXêÏØLÛÝ¨W­ªÕ:ÎNÏ¬PQZ©Ë­ÀµÙ9 ;¸¡æ‹ˆÕÄ;Yº²ÚÐgg:øÌÃå Ÿ¾õaÀíe1ñä‡_ÐWj²Ú7`6¡LÂéQÏ‡Tpçþ¨BŸ…ö›Ú¾?ªttÌ–
ó*âMé2¨© ¥NV÷›5ÞÜ.ÏËóã€¶ö*üF2}í]	¿¿,¦õß#T9¾¯9Ôç@KÂKôIWƒ¼vƒÌs¯€'}0rÁÈÃR`õÞê|&V[%Óÿ ˜IñRkåÊïÊ+¤(•LýHŒC85í³D>mÂÐ_^jÝG˜t	<øn­+»ƒSp[Rn[™Øn¹ˆe£è:d ¸ Ûk#¸XŽ`;`¹bÍEºT«zûEÏ–è	ž›:¾Ç‚õé¥dª4êÏ?•ã<,Äªâ¥¹Š9¶¨¿uV®ó z€­<¬RÁÓkxŽ*kM‹ê(—cìäüeÄÎ>¨¦ó3cá,Ýh®ËÔTÙàk<Ï&gÌŒ¯JOÑûbéË”rvˆ÷¤”äWÊPù3”ò#¬á~Ì„êž]Å¶Š´qè²Yõ?ÿ—ÿÎø5äÀ2­sþJ^Ù<äÃxž¯ËOÏI—YÂýÊ&>üçÆ-Z¯v9üörÇ‚?íZ«	PS¬|c´Ë8à
0;a/hÙKµy	3£?
úzÑƒ‘QôñÚŒžƒc†_*‡¯¿¼,”h¹_ÆøóG=‰û:H~8O‹c”R|iÁÕx/7×IàÔO}<j>õÇ¼‘¹êÚMárLvTÈKQ¶†Í»'n6a%mìò§I×Ïãnvÿ×CÕ”?¨³\í®Ðåg¬¸zëÚ×ù‘¯ÌªÙB-Öšz,•'#õg±ù€ŠÓ*Éá&|r½T×ø„"š«·•ãê3\©U³ŠH€(IÂu0( O¤±„Õ±Ã”Nç‘f@jÐH=ƒG²íU4WÈÅõHºIŸÍÏ¢¾vª=@˜ëéöc]Ç½˜Ãjªò™dlk@ì¯ Ó5­ìÌ`c[gŒŸÿêŸðˆiM‡ÇbI“/7àÚ0=fÝQ%Av‰pF‹ü„0«Ê•Dí®uU(»)Ä/
Õðî¿lËä…q[¨qØ‹ñŸAºz#—ãtÑ7ä·±î7tð„¹PóiÄNhò„siƒ¯pqë
/éh­’t•W8`2ý€"ƒI|ÜìsÜüw~Š;f¶ÊÔ>É‹ÑX@|ÃÞ”$‚Íæ2y¥]ÔLÑ	• ›~H«íUPm'”&á5fU•sïÇså…us‡_“Ç0yâä4çL½iÄýxZÞj>E`3¡g¼¡@DtÃà‡ºøð.k^$J°©êL¢OY#EÄ,1÷iAOZ„ ÞNd-U0LD ;ú
¾D&béãCÌÇãÜ[aÓ¨Êo¾)Á—ò1¶@¯þj´ÑVúõd¯re?»5ÀØOtcãdæ0¼YÅð~•žñTxÆìèòÛT`Gm<½—Õ¦@që-ªÛZÖº«@W/°í(pª7±GÏØoø;ËPÜ]†âV!ŠBAc·%‰_N@WãÝeèŸ.#À/Ð,B÷N–¡¾p-”·Êë²£xÕB‘SÁkiožëX¸z÷BïQõ¥N½µsþÂk"ú+]ê4’ÑßOššÔ!5¹)mÁïØ±_Ý\¾nP¶Ú*}L(ÇDx·¨ê
¡!Õ@­¦kB0ïqƒVhîÄ­MÄì_–-=+lNÆfG£ 	C[e/ƒ sÔë—V†2fM\v-«…ïs5Þ-©ñÎ¬!×!ËjÉ2VÍÅ
5ÎšKÈAìÖ–ÕYäé—­ß•%+fÖ×V‹J¹/+æ¨¿mYÆêm8.y|Ÿ«Q:òø^Ö0ÄŒ;ûåÒÅËXSný²º¼T¾6ºèËêbÚš\A+f›ºgUjG%fäu€Î{	Fþ8ˆé¥Š¦Ó;^P‹¡üQDÛV†l£?eÌtyf$sHØ¥^jV)3Ò‘Ú¼ä¤ðrdÔªÐ
¾}W?ªxó›ÊØ­±ïÔg³ò;³òHE¥_R-UÍT"ÄV>€§áFÝ ¦>Ù¢Xûà\%2
Ÿ†4âµ~¨â(™[öÿ	{ÐQb®ò»ê"WÃè.Ê+£àüPíëk1áà€˜Ôtª€zWí/
@e(a”¤É"{Á×E»â%cr¨Tóhi'ÈÄl†©7{¶±rò¬{zöüÅËó_ýúâÕëË«?½¾¹}óöûÞýYEŽ4`#8ìµwdLåGz§«‹·•«
ŒŠ¨÷„Y°¡Ö™‡®ˆ¤—xYŽ…ª3ºQ¬Ü§¬khÏ<Pˆru-èÑBÅÃÎpíH÷ÒôˆŒX­O Ð"z>ŽüoCÿÀ©P ;-V%•^äJ¿+.M†Âi04ëh¶‡¬úêª	 öQ×WœïdDyd™–ž4Ø¨F	Wû&<Òžb:-öµ„UzÌ{h#Yzd{|há¸0jÊBÀ
YM	NkTpÏOhÝö‘qâ²qÂOæ'uÌPöô™£ªm!çv`¬´‹–Ñ|`±´ŠÊêéÁ¾x_œ+u%ÛOÍõ—Ô)Ì¯²|8.&Þw VÉÁ¼øõýÂÁ!UŸ@b»Ðœ*îiåŽYÙ…,ûíP–—EÀ?eÅO³fž²O¥u=«²§×ö”ŽÔi¯09
UQßcú°Õµ’bª¸‡+öYIUp¥”‹rKUÚƒ««´‹K@Ýˆ=Ðjh&®¬è¡Õ9w	ùH"«\…`ÅÑHJ«1}Á{©d™p€PÈ÷Ùôð
Ì%°Ë(äEÍÌIÙ´æÈñn¬ÿe*@g;aÚœ ä†Ø‹ÒGË•	‘>Ð"ÛiXZ51h_UNPÍ§gRnå!Giv–Nð’´)zDÊd¤6ÔzmVÉ§gù”ÇqÁq\ ŽÂØDaø<$qõÃDRÏb?ic˜…Å:yPãè'+nažJ»öÂ0söÁ|gã_X-0[#¨žËqtg£:_üšèT0›YiÈ\±MwCƒc½6çY WSpl[ç”Ÿöõ%ë0rR>Íp÷p	M¹OôÜÕŸì†²á…lxálxálxQW¾ÏÂl¸ O´\:WåÏ¹­F÷¤ìb¿\zì’D©¹|¢:ëè	Re­Ü(™âmI^“á3-²
X™ñ—´PÒ‡Œï€‹j:àw³Ù¬¬U”J.ÁÁ{«ãàYH8ø­Z+á¢÷NVWî^Fà»BúUsÒ¬ÈX(¦EÚÆÄŸUg
:ï›åö¸j†ºÑ Å1šƒÅ9k*ÆG«NÅ¹äáŽ©¸:[u¶eäí]ÁA\×E\×I\ÛMÌQÝˆÎMFþÆQ
¼iÄg”ÄÂöÃ÷Os%c¹j4ZÌ"ù7
1å¹0ÿÌ:HÕÓGæSÐFD
óù‰Hœçi™ó$8,ìÎ§Žú`'ºj§Yõ´°¾õuIVL™§3×þƒ!®}Š’¬-(ÕµÞÕ¦õl|É‹“éé9s>¹•Óçc]÷c]äËsÜê	‹¥,½Ÿ¬…LbÔCrÕtÍ§b%½\Ÿ‚C£^ýÖÐÏôL”¥øöü<ßœ3ò>o8£:´kø*K> Ã°iàxd6ÎŠ¥Ðî ¸ÊFÅÐì¼qöUq[NR"Ë¬ê#»ªÿ±áÚÚª·ÆŒ÷6o[¦±öJ­¼[ÒÊ»‚Vv0s§…èdöÕTÏNIª`WvI§ÕJ?kX­¶g’Mä|ãÈ5•¯DÓ[ái×[Åi×`Cœ‚©n`’m\º@–ÆÏ¸L±\lR$/7è‰ÞCÓ!ØJvy&
<tJMsòd®{RgpŸ“°Ë“ØbÄG:ýzƒã´e|J‰’&jþˆ;@29Uã©=Î©K öcó½¥üÄCM*ç,äG—B˜»2<àû“'¶±–Ó±5t5M}ÒÐ¥ÌC²^®"ÙS«€Ùs“Ó5¢¯´@àòÀÅ•<[ª›³¼(ä)›•–Ó(Ôxp)(Z….j6)½ZA« ñ††RgEýñ¹’N!:/éH~E³¬
«¡PóÚ{`5mM
5ºë-`¦?€þÖsÔ%¤av‘ˆ 4v]:#·vƒñkùõ7¤GSK,U.†FXa[ËgG,çA<Í3c6¡Ö9óes_VZÛ™o„Óißò$cêncoAôò‘DÿòÏ2êr‘:ÎVÓ×ØÓ)DB´ÿÍ¼ÝÚoãúÔjÌÜïáH,ä»…ýn	RŸµ;“_Y¹/uæ-jš8,¾¬
Ï£¯Kà­ƒ ÝkXÏ[ Þ”ð–Œ†ÓŠ\µÿÜ	²ÀgRç;¨¯ñtfef¼Ù„;©yÌ8›ÂQ|yûêQT¥—ûS«ùRä¹Gõ³2ü¤¼8.ƒgèôePÖÄè0Ëãë\‚Æ…Ž©óë‡›XþIjhM¢Y$-R²©CËRUÝ,5‰C“qwŽ`¬Ìl‰œâ¥Sö”¶#Žfì"†}z%NÛäO°L¢yPÊ:«ñå95:Þ˜}†':€óºtà‡6¦´xDt 
aâ>f NáZ5Â{ê.u”}§•}'Ë¦ÑL7Gº8ý©?èLø/í8c++û_î—÷.Æ£7×©É=fùP‚¼^á’ŽÀ²VÛ´mì#÷vX;g¬s;‹FížŸé×ÆËüY^æWê"_ÕpôÑZÝÐ;ÙtvRÝ:˜•˜7Ò8,&ôAòÂ„(|m6öí·ìkƒÆvÞG ’nÈ­n~¸Ë)‚fñ…*þ®ê’ÂšqÆÈèƒNKãEqj©ù›.“žEsGléêu&¡¼uÍº3tæ¿Ôf9^Y›â¬Ê–+gœ”Ô*<3HL2ŸåÒNßÉ‹¢vuF5˜%×dÔ¢•a3wfÝ•ù—²Oä™—N^ÒÒ<ß‡ióáàà{Ü°ÜàwÓ6½õCö?B÷úp­wFŸW¯õ±jyÕŠÅgÙµØNµ•“#¦`_ãù4ËãªŒ¯(|`0®Æ~? ,·BýM?oØÒ6=»P?ê q™æ=Îb?ew-šÙ¡^t6OFU~‚#Iw(&™)ü2}EC¥¥-èæ™Bò»Æ§e<^rjÝˆyµ¥¹Ó­à˜må¸¦1‹fº«¿z7–ðqÓb—ãÜÒQváÁˆKdâiàEð…Bãa£2l€±°1*6–6ä=SÚ–î“>¢¹|¬”òžeÎæ#³ƒ{”6¥,À’†\Œ®/-”¤L¡nÕŽ™É|å`ã©lO	¥òãWh‡®¢”4â€¾Xúb]èº/¹Bòz‰Ñ†fÿšÍÕ”ÓÔ®™MSÛ?âäO9DßÕi.§ßïêúJE]])©kWDêêÂGqé‚ÒJ :J©,É6­•UØ«•1©k3½—[ÚBO7>Õ_Û„„÷’É\¬­Œ†•äP¿&RrLÆ<YS«k—mC×¼¬û®«ÅMeªöÛpX&“¸y4yßŽÀ½if5½Ewžã5ë*¥´OýÉÌ¶<¿V­ÔŒUÓ?(ñ@/ ¹ª˜vu\žI8­J(›ªuuÝ J¡äŸb¼oýPÀ³¶ëˆ…ó™V.{>Áˆ£žÀ²ƒ’
ËÎªÎZ¦}ðs ¤bV>`úèåèõÝwÔµ…wÓó²CMØÎîÊê»#ªÏ2ÃJ‹
´¦Ë-ø[é?Î”—”4œ·¦å»©S†—Ö´œ´¦¡-}¹¥Šrã fJòÁª·õÔ1ÏnleV…öSÇÔ¹ÑÎ=s+®G˜°õ©{>Ü€WåÆ	]V¦4zì"ò_qnÔ/÷a…ÃMãp“‡\9Ü¤L¿•)yôÝó	†™ÖóúótÓâÄ1Oçt0Ÿþ®ÕÞú“!>hô£IE/&ÒEÃlMX×`£Xà+²ƒLÊÙn¶w¼æž×nažBºÎÙ‰Rh&áÄó÷˜rqàM(6Æ óT–Ã,®*²M‹,›'¢*ñ³¡jiîn4¡îpJXþ§½©<›‡ã< ÔEæF¼ø}À2ÜìL¿³pˆ4ëCê|®IÌfÔ›ÌSJ“–Äó¼sä2`ÊöÃ™ÀØJ_¾Æþ ¸î1ê•Wá fqvCY¯YuÇÛ«Uê¬ò2ŽÔÃ}¯Õ¦§'W0½œ?£ÔÛ™éTD¬Á\š•n÷æ¦ñêäöe£{ùúöìõmc¯ñ¢qÒhaí¢—[ÔàÍ¯{	ßÚÆ·ŽlÆÎôËäˆkgàU¾ä±ß‹èRà‚öêÁî
§¨©i fÐÝ,fYÂO+ß¼>$*+}…Ó4‚!’C>`ÁCÐŸóì/(Ë}ƒ=ÌÆQ0Jú@!îS
ö3”1~ê¹ÎÆµ)2&È²Ø‹žÍ^æÅK!HËÞï
×¢g>=ì™A+&ÅÿÁ3<#êßÅ‡Ì	šê
ØæÃFÝþü7Í~þ_ÿ+~øÌªMÅƒ¿Ö2ƒw#‘ÃVˆ“·‚ø°dÞ1?É6‹Øù„ÝópôÚëÍ‹K˜Öp!.tŠ…<-8_¨Ñå·)ŠÈáOØœ„óï¤z³ñ¢q2Ò¯¦£ù¤7uùQþ™Ê]M¼Ù<ÆŒ˜;Í&»}/œÂaD_ÓÈƒAÿàušMÑfÄíòpU•ÞPÖ…›­&Ï4!mA}ØL+Ô–€B0…š¾ðY
už²ü€m7öÅJ«KéŠXgGô% ÿ3‰ÓÓÖþ¶àÇ°L“ #|£4÷A#M€¨WX#vÅLßÂL•€š&aÂùŠ×ªÈ<¾!Ïx'-¤ñ8¸å-bcYšsÔc§Øé„è	Æ½Jˆ¢ÝÑOßLÇá$¤Ü¨ÛM#úLD˜$W™S<¾}¦äüÌÔ¶7„ôî>°Y”VôÉCãfÉ¾Šaü™gYŽ+ÚÌt%ËÒDƒýì¢v‘ë…)†1bqAÆbS›‘ «tÃ”Æž&ÍÞ‚ã¤,à‹s]nHwñƒìáï}®—ß°x¹nl8Â, "!\‚÷Ii’ÑÈ˜H§g±ÈŠWDš†$×Zð]Rƒ<¾™Cð,äE¨*qâLFn|}‰K×8D¹àÔ›* *­¬Ã òª¢nw>ŒTr`zâz¢ëžˆ|€o2&õ±(Øo:ï)ØYìZÉ„™AýÁ™[¦J7sqSÜö\Ê÷­;ç»ñ„çKÏ'Kÿ—.L–Î"Jv„Ñ—é¼A]Eãå	ìqG±þC¤°×ZÖ$iý^-½r¾þCôIµû9="ÆutÊŽ|lwPÛLgwÈ,#úô¯ÿPØ!%¨"ùyQ_tñMü	Lz EÇ¸‡8%ŒüŒþÝr+¼–žÓ^8šÕ’ÓSZñP”â“‡
™òR³®IÁä„–È‘¯isæSÎ8
øƒçãåÇ»ã$‚õÙ[@Ñ‘›Yˆ¸‰O¶zhÝôY|Ô‰Ššlne,k¼õ)¿y[{AË‚æÅÝ'õTÿ5ñŒìãíÚh€ãà#øÏÐxb9m3ú`>UœC9ã6òœaàæÌAð_yÀJÑUAƒÆ”_Ñ§ÀžÜ5H)ãÝaÈÂtä§T®¡MÙ8ùev´Ö7-kÿ@èÉ)E½œfMÑà§ðdãÔeà£§ãLÞwwq6·F	³Á‘PÆŒ&/Á—?™ÍtÇÝû®LxøÛÃ¯O/»·ï®Îè9¸ÿød{:<ªÓ
>Ñ^¡‹>úX1LÐG•7·Ï½½Jöb
ó×Q‡W
*LäT<ªÐ-Ê£ŒX?ðÄ•Ê¯Lx¤SŽZ&Dv¼R^¬·aœ¢qFù±x=„ Rpa?À¶L•lgiÒrSUÞixÃï¹go´lhð–_<É½Ñ˜×Hr/‡1=¹ÙÛßkå^ó¸§XîäÞsSÞ÷›{Û2!+¾W¹€±..¶ßÍÉÈ×¡³—fÂ]qÐXþÿNËv÷€qÉüV)¤Õù4ý [`ËòÝÉ'f:Á›`ìüK ù'Þ<¬3<YðFø“ºvÚ@ŠB+¼¾Púd˜ ²`¾˜Õ<[P\3O¥™‰~žv¢s#C9k¹Ò3¯•ºûLs-z8j¹Òh¶`_'ùã#mæ2Ï
¤(¾µ­²œ”®déjÔrºBËèØæYRwVÊ¤½FÚH™ŸÑýp´½[Ûî “÷nµµ”…¹4ö÷éÌ~m†H)…Ý¯’¨`tƒæ,»»Qš·A¹×–‹/”ü×ÙÁÇ§¢Ý×¡Û1æó½æáÈWàKbEå°ùlÄ}?Ûr)ƒ‡r+˜°ÙYƒ­¡HåT%3‘©;z–ÆTË£’gàÏÈ ìn¡,¹ogÙÀåÈSÓÔ<õ"‡Éû:>¾ô$öè”´%éƒ5ÕULH±æãÈ5Ïéppõç‰ †üÂ‰À¿YYu—¥¼ÀuâòD9ïË28«ÁÆÌë¹ÄÝFç"®ÇÄDÆîllq¦€nSóô9×žÌ³”1\3¨Û¤•,‘½½¥©å¿Ù¶¤]©PIiJ*5À{ŒW6Š8¹t¸2l–vÈy]¼å É3u~~ïâœú-ì\œKÐœ!²ZÇ¬‹ëv¿´|‰²&ÐŽÐR,™bÅ”³|öq0&o8ope.Z¯Õj7MÚ}¶°šæ7MÎk´ÔâY%l]B:#?´R~ç2Õç‰æ÷ 0¡+u¡§Ùu±ôc4ê¸9e«YgÛ­:ëì×I§»f‡7o‰ó_Âà}ÄÑÌ»1/È¦*‰«ÛÊ"-$m™°ÌLXî›è(:'yÆî»lÙm“ÝÈ!¹þÏ¾Ûb+
y¸ö¬(}<õœI­=o–Xµ%¤ÃúæÌZ¼Rl—X¼úØa[Íð+à'Ebûi=ãfåùªÙ±»Þ¸ËÙ¶
Þ2/›­øZ“=ËóµþHkCTâ&?V˜kKÝh‡0Û¼>nÔ™ø†×À¦è’‘\Á:!Ë›8Éæ!+)Ô–í¥¨aevjÖG:ôHâKŸVäA½\c5,v\ß]ØÊ¹ªZ¸‘ù".æËÊVD4öSÉà9D@l&PuRÌ ¤<,YÔ
 Qç®Nõÿ„vÉY±b‰6ÎaŠdë@efÚSUFòd¦Ãñ'³[îÃ$„!’¯ä¡Ëb.Ùijó…¸0ó(äKð‡›|ãà+ÄW|•NäæµŽÿýÿþ?­~ ¶D]JU§–°‚«ËyUä´#¬dÛ_™ùââŠTn¼ÌUwÜ¥êúÜª™ÅÀ	òµàþYYh]9ëZ¦§Ž33Öé‰9‹r·kÉ€µãµeÉ€ež›Ê±L?Çª[*ÂË*i~UÎ*ÌH*>âQðu`‰¥*ÇFÒ»µa<¢3œýX%ÍcÕÎZðt~å¸ãQÄGŒ	ßYµÕ\?·R9æGiå±”µSë,“ùrúØ¯”BV¿ìX9~ÂNqBÆ‘ñÝ‘{¥2#­q©¯rì±kzT Ô‘¯™2­!$Î¤½[<io»ÁÁ}+iÝFÑø³¤HóD¸erÄÏ¥UŽeÃVºßål"µ¦=•Š¯ª©9é$8xnuÖ±²[“žàê$¾/lbh¹É«<Eò½¤qIZr«Z‰&û» ¹âÓ
„ÓöëQ‡©/+i.urãXO±¾´¢<SW9–gQ>3U¹ÚÙv¥™·®„¤*Ïe#ÎN‚ééÈåu‡Ê1^qX7¹v‰Bä#ÇSe29~ÚW9ºõläËµØ*z,šÒ…`]y1n¿YãýaÝî÷yEö8 àTødú2 Û»~YL=ê¿G¨r2|_sès]*Év©Óm®Nó‡$ÿ`ÉâñæÏ£“Åã5¡Ç'‹7%SÓ(.át\£.O›0´:Ÿ—Z÷ÙG]‚éæQåxk]Ù•·˜¤à¶¤Ü¶2±ÝrËFÑuÑ@pA¶×Fp±ÁvÁrÅšõr©ÖÜ­ôÏ<>Kj—‹+Çù(û¥S¥Q·xþy¨ÿàQ:„*e°XÅ]TŽß‰:+×y=ÀVV©àé5<G•µ¦EuÒÓ1vö%ÿÏ;û«ÎÏòÚ—Íu™Z»Ù'ø»Ê3ãë†ÒSô¾Xú2¥¬¨ó‡RÊxÑòÑJoe~žRF_%²…ójf(£eYÓ¹dUgMkt\œlR¶x«–‡Ê^jã®–¼Ö‹63öEõªÓrÎþ'h«ÁNøu“ n’ˆí`iÞÉ‹ü•ãŸÿËq …fÎ[‰ÌÆe´´sœ­~ëcÏ5çyýz‡ÈféZ‘±×¯8V‚õlú{uX&Kõ^	ç/ì•­!{s)¯Vi h±½èA(vô"{¬%kÊKñJðxð
¢¸üÂŸ?¨~#Hm^¢ël Ãlh€­„×þÂ¬ñuŽU®)¥§ãtû·cË>j!ÏíOñî–kZR~üð,ÝÐR®h‰Pífëœ¦U¯WÔw9½Õ™||bèmìèébêOÐ´/Ø,¢ëRÁ@ëeÞ‡(pèÊ¼ŠåÎŽ¾ÂD©Îd_Itñ	¿¬ð8Šè@ÈÒÕj_BXâ=•,Îéƒ¥MPâÂ.Æf-\ÊvÛ8’Z<Wl"˜ëÏûw<VìCm]¤TZ
'šGG^¶AÜ¦3¤ù­á7”\;¹:·ó½"%jûÈä–TÞFÐŸÅæ*vL+¶‡›ðÉñò’/ÿÂM<ÑªØNªWŸáÖ‘²óÜ0ž ˆP¬ª×Á  <1pÆV¿S:ðÎõ‰öµbB¡½R‚:ÐÄWZjƒïÄhæ£ùùÅäÅäœ™ä›l«²ÙØ¥­Êâ½ÜîiGç‹ŸÿêŸ˜Á+VÑÒ;P!xÁ¨Â-|– I…÷	”¬ë†nã°ã?g¦=©µ"ïoi×yÕ-^ºö.5‡¼³õŽîkÕùõZ<	-ÌðÊ<õW­›K”ýól¢!séÖeÌâ€¤Šß¢Å¾Ïb\z§›JÅ°Ô`˜g—‹ø…wÀjIC1ÅÌždµO2tIÊ¹!U’œ<³¯¬ôæéƒÎ”n(aV‹öÀÎƒ.÷$ËR ›–žÊŽoŒL™:d™Á£»4Ÿ2UAei‰à² +ÙÍðÇWÕ0¶0Z_aßxŠ•ä¾e+l¨Ê"j`Úï©zåW”aZ­ˆbçFÕÞÚ±DeO­Ve‚œÄ±Ïƒo˜’£àª[ŽGÙuKºfÙª“5x`Dú«3šŒç^—L7®­»z|cC»©J Û@I¹ºv1›õy¨Ìþ‚þ(àrYS“Íj³Þ¬mÈ+‡D¤"eô FÐC¹K.wT³»‰É“
ÃÉ£o¶³>¨ÏxÂ]^`›
ì¨=û÷² ÚŒ-n½Eu[ËZwèê¶Nõ&¶óèû¼ŸbgŠ»ËPÜ*DQlc·%‰_N@WãÝeèŸ.#À/Ð,B÷¬—¡¾p-”·Êë²£xÕB‘SÁkiožëX¸z÷BïQõ¥N½µsþÂk"ú+]ê4’ÑßOÚä°^Ì²†t•ö'>éjÂ˜ÄñŽ’ÙË(nÎ~®­Ú2P®ò&Äl¬NVÊžM_·tR¶Êšt·´Š^NÍë9m¼œÈZac¯º‚QÐ"j¶IZJÕ¬˜£þ[¼´2”1kâ®YY-|Ÿ«ñnIwf¹TVK–±j.V¨¹pÖ|XB*`·¶¬Î"O¿lû¥”(Y1K@³ÅþRîËŠ9ê/A[–±zŽKGßçj”Ž<¾—51ãË–åÒÅËXS”ËêòRùÚÆ’ãzÙ<$\r\Ë8 -Ê”AÐŠÙJSwèËU¦^R©;§Öèhž.FwJ:@"ey“g6¹ä(õRóŒTZ	ò£B¼SFFM™‘\¯½CgxNm¶	ó÷¦r¸jZúX³ò;³²hhymGLãÂÌœ†uƒ˜9JyÝ‘ŠUŸ°a`ä*S6v«2æÔX”Wæ9;úzÃD:H]… B`RÓ	S Šgzt‚ÊPÂ"(–un:Ðˆil<Á[dÊÉ³îéÙó/Ïõë‹W¯/¯þôúæöÍÛïx÷gu‰#D Ø!kï°?V ~¤§ïÙ«\U0Ð0/õ„Y×Ü(Í-™'ƒE ë,Â3®Ý˜ÖfšÂ…”º+ÞuÖ%4)LW_éÃÂÈ‚UYÊ¯Â¬t”Wˆ
ó$„ê›–LÄÊˆMïù±ÚïrfÙØGu\UU¾“)q[{M³ô 1)¬Iñ¼ÑY)1âígJcW<Hðý(©BË˜6t°Áä¤‡µºVÌnÊ{§U–å(±¦êª¬Z>‹ÒEÉòÜÀ> B…ÓBu¡Š,T‘u*I”Gël¨êü3ª8ð
E{R¹òTQO+k6ŸUXÈ
?Ð	Œ*`?euO³ž²OËxOá0ŠG¥*ª{ì¡V64UÙÃMÇŒOaÊ¯(òØUø€yVj‰swAˆ4V Àîôë°:!ÄK.TIêËG7Líø#õóÉÖz/´u:[p¤¸˜06§½Ea,‹ª²ºVvMr‹oÚ;±¥eqÈÅâ6Ô®Õ•$¼6Š.ì¢ïŠŠæÖü([g.(x.{§ƒ\åëÓâS¦ÃRö[ž×³˜žz½3“Df€rƒ˜“Bfdòš‹@ú‰ÇjQÑ¢¢+R¢@G–0–¶L¬³-ç:ÇÝZH¦q´+6ÒèÆ]éúIP¥<Œ|¹yÅn9UKq§TqßÆxåÃ—IŠú½DRìüí.Š©óeŽ
³‚®›´HÃeªL±°#ïš:×“æi Kó(UÓ`£ÐÛèç‰üYà“ñ¼‚ÕŸX£Ñ˜±OµÚ{Ú–án›10’»ÃTG7ñ¬£lk'gäqíJFè‘SÝš&™–È”ì=DÓ‘+„‹V­¡º#ë†ž‹€ò¼`Zs5‹Ÿ³~Pî¸Ü®ŽÕÃ+Úùp ¬QØê*¨_¢V”Ëy2©º™ÿC/Ê³¾ë2¤w(ÃFkMI/™½øô•ñõ 4OÊwÚO‹Fúœ|Ãe5A[Ù'sU´fj.ÐE<=U	gö`ö\z.VŸ¼0ÔF¢û¦HtoŒí>kRE#ý®Hð°ì¦M8Ìd¥ìËræçÞZ«fŒyc8YÓ¨©iôîF<°/ÜKã7Ó˜â¥ÄI€¿`¾b^mÿú³1øÊþ¤%ÃÉ	c¦ô¯ƒ)®™ò…SÑóÕœlm!}hÐ™0JrÚ¬ã^‘±©_Ó3ãŠ‡î¤‹…É†8l¨(Æ#‚<Æ‚›ð" ¨ž„
!«/Ä4TbôÀÅ1øzº7GÚŠ•>>°À„sZ“—á¼@yá9¯¦x‚mò'²“¾®D>ŽÏðKtèG=!Ü–3”_,ÅGO |ò$ÚhÚDßÙÞÝÞËˆn“¼­¿(ÁT¬f9ñ5ßÙX—VÇA¬‘QÏÆGï=|…[kï.3ð¨­	ðP¾Ã ?Z”TUÆ`?¯Í¨Õì×¶ó—=P>'˜Teó˜\9ÌXìôpW.>a­,ZÐ'»á…lx!^8^8^ÔÕz*Lm{usÙô	ÛÖÎˆÙåV óÇc¡Y\æ_­øT++­¾±¬L½Ð£„Ð”ZjV}°OAy¹NJ#!‚).íÛêI/,Õ%Û2Ú96ÉjLá->…çsLâ¨[Å…ôªèOøwomxŠBÓÚoÃD»¿Ú6/†ï~þëÿmüMûŸÿúÿÝ¨S é%ÒO$QG0¯âÀ;ÇÐÖ_å12Æ±â˜Vvlœ6!µQË ?¬y«ÙEMÞíñ Îª=+ÄZ»ƒíU6*FƒW”þ•Àóˆ80ÜG “]+98Úë$®_#s}µdYÍWKœIËŽ/Éc_-Y‘q´ò® cÒ5õ#—mÍË9•íÇýj¦Ìú˜ÞHy_GÝ3…X,+¿-jbkú,æš¦îègã©c‚rëþLÆ¹öw!+uÖœ0¤kµÜ³‚‘Ôì†8ãG;-W
G$7£’¡ÎoZtCeÒ,“òùl Ú¯[Ðm[3!3wo“OJä,Åd¬DKJt„ÕÇcñ‘V*næww!Ì[arê'#ò éü¢¹¤	p¤.Î¤Ì7Z0ëkÅÜŸ€¡·kr”x¸È,b—ZÎðÈécÍœ0›
]M…FSŸ4tûã(	d/
lEÄ§V³ç&ÓkÃ°Ô:ãé]ùˆð©>	R¼Óƒª?‚Ý~ïhÊj^¯ò>ëQ¦åE‡*4[jjP£cãÁ¥Á4š95Yµ	æè{!Ï0¥~ø_×ÙŠ&×Ò—P”
àñª‚çÇ›ÌG"å:²Y8@ÕloùÖP7hX¨r8@\+$¥¡²6·j™ú[ÏQ‘ŠÚ¡R0E]J'·,|É¼ÐÃo{©%EyWØT71U…ÞœkÞ¦~ÞŒ§à|yûêi©è¦–JCr÷^ì‰çø’Â&j§>x
LqðÝÜohÝ¤‚tÓ³aÃFÀ¿«¤"^ã86®¨8‚VŽi•rÃÜUGòˆ,ôŽv©ÔHòk Kno‰Û 2ˆœŠ™O×À˜qI„ßAÎ"[ð°BÊ^ÇS24~µÊñÏÿíWw´4*æÏf0´ÝQ8T±Ç™¶,˜xíZGÔh'3LoÇ_ë9˜óÌTr,…Î+ ›f7M|VŸH¹nõ…êd•jí(“‘†6ã‰ÂEä¢ªÖú"ø3M3µ*€KNÕDªø[Î¨“rî¤í]só¦Öø]No~3oƒÿL£5pÀ*¯#~‡ÓGÉê0Š2eÌ3X*À–¥ÓÝŒæ_YÞX5¥ÓÑÇýÆºz€²–Ì§ƒcyˆkUÐÞ$±âáá&–€R˜„Ë,rW¤°ï›ªêv¹I>] õ"yä~åàcÑ0ìÓSqÞ,†kÍ“`}Ä+ÕÀ ¸<ÖI§³ûEÏðÀ@ïÒ‘7ZIÔ‚OÒ)?„‰gq.—%pì]ê(ûN+ûN–M£ÙÓÕv~A§¯Àç+Ú9\ÙÍ+ðòŠ¶M¸~Ð›,¢Ñb¥UAqY.› ®gú Ö^
;d­vn}Ã¸×„Ëù¢O&1$z–æ•ú1ktdÖ(ì	8(ö­YN\Ô	øRÑÀ9-/ØØ×fÀƒ_$«Yz„8!‘†Üç'e_¨âïª.™ªBeôAãEqjVªù›.¬yLƒ.éa.e.9'c%°‡ÖÍöCí8—cïÆÈk•ÄöFeËtæ„/<KL2Ÿ!‹R|g0/YÚuC=	½ŸúÒŸÆAÌoÇ…VýÚ‘y¾µ¯WÂ´Oy
9at÷Ó¡m³—†ãmÝMiéÚpZÅ€9Ú´–]ˆÉí£þ­l±A˜òåx`ðˆñ0Š–2†Å1h‘çXcEÛQYq´‘ˆÖµ“%ŽÅ‡ä­øµ•;¡ßN}ÿ¥ñ2L<+5Ð?•]—}(¹.ûƒ}]Vƒe.£#eÛu:/¦Ý5ƒá*†ºK—cE³ÜM­5¤ŸÎi‹R¹Ç÷_“´SÈ]²­ô‹{?B÷ºü¯wïW×¦m½“ê<ÓRÑ#ñ®ÁH€)8Qç.{úš·V¸KeÌ¨à “ÃFþ†^Š6¬ÐÆü)»vÙÌÎfñ¢$¼ü.%o™®S"Lòø½JúŠþCK™'®‘–³—›Ç	—vxòñu5 Çl+Ç
Yd8À«wc	3—×àúIÙTWvwÏˆd²g	·eÏ§;°äÍI¤ü.äxõ¶tÅóˆæòQË{–©ÌG4f‡,mJùg%9g`írž+(z–Æê‚¨±¤b2?Ç¼ñT¶§„Ræ]¡ºUYÒˆúbè‹u¡ë'PWh@Þ”4Wž2çÔl®¦Ö2pPošÚþMù:Ùïu²Ìé÷»º~†¸®nGÖµÛŽõÜÝÅººƒø^ù– W&†™;Æ\2ÅTj¦ °¤ˆVVõG­1ª(Âƒ`˜iÂüÁø#žê¯mÒÂ{Év.fWNÁ‰<_©ì-¹é,c®©æµx(¶k†JÑW\AVšÊÝ§Jâô6¤ÅxÝ#·jç<Êrs™û
‚Ö&þCµÕiÂÌk/‰~‡ùah¿¼Õnf(dwØ8]žÇþ$¨¦€ 6™Ùê×
Ýš¹ª`.Ë”sf  +*¢¢æy8èÄ;N«Ê¦"‡¾B®íìKþ0P–µUmË§ÆÅÚ$U\Ä) “Cß&Ê»Õî8:ZÂ@:y¦æŒ-ÿ*sxEW1t´Ð™kZ‰ÜL.°]þãìeu£I_iZ+#êÊ¢±Ò´–@š†:²´Õ>”vª©ö“©¨«ÞÖSÇ¼·±•UXXÚOSÙF[UÈß›€:ÀÎ9?mÀ«rcÁ¼ö/7e0®ÃMæíps”NÆÇ¿å^_˜ðä#ç }âô€ãÏÓL@?g¯2Ì§¿kµ·þdˆ ­*z1Ü„R0ÓEÖÅm‰(ø&Åà€WÚÍöŽ×ÜóÚ­
¼#Ç“³:•$œx£p8ÂX{ý0ñðü~8ðz~àŽ$—x–v(¡ÒK¬p%+°¬ð*°[YOTÊJþ'¦­týqØ‹)4Þ[ÌÄ3½ÀíÊ~Ó°ˆwÉºþ[hßí½íÁçq>VYˆ®ì‘Ò<ŸÂ>ö9Øg¢­þ(˜€PÆñrûƒà"¸G/úGê »éðj^ußkµk•:Pò
Täù3vs{ö
¿¿A7+Î1ÔªéÊãV‚sã]Ý´¼6–Ÿw¤®D€UßLÃ”íQ¯_ÜÜ°›³+oKÂœYBqT9ÁœÞ’H÷‘Ô˜05&¸&ÅH€ƒQ4j°ç0ôs`J¦F”õà;Î”Ñ¬õ?`Ðçû€©ŒC˜Þîý8¤ N’aû	.¶F³!6á‹ÀŸÔäµ@gHºÕXg8RÀ3IÃ8ÆTo1ŽNZlö¶óÐýT\FDŒÂþ(”9§ü©?^$]c jqÀ#†¢ .F¼%hù~¡úÕ(˜FãÙ(D‡0Û½
ÒÑbÌ.)x=‹£IO&0ü]²!¸¯¦€"¿¥ÞI»©r*ãóÑÁQ‘“C
â¿(x~˜lB 0d£T“¸,=j¾|B¾	~¼|éÕ¨WX9x˜Ø3Ê1L¢RÖ5ž­8ë`­"*'\¡X¤,8“è¢£ØÒ°ùôÃ4ú8åDO‰0V¶Jx$R¼Î™°â™h`íßë\Ic-NZÒ'ç]ñY¸Î>þÇc¤ˆ^‡ŠÓã}	ŽôaŽbI¨±Ä§l´ >%ÆÉð:CÍŽÝÌÈÈãÜ“8øhÏÐ¥5“²ŒÐAÕ„pÎõS>Fö V¨!!Âéh>éMAE¿Àxªæ­¬ ý¼…`§Ùd÷¡ïûã·ßÓÈK(SÜ~§)îùƒ!?Ïµ{C^,ÑÍVSä¢Ç[PYÄnUÚDc(&…ç T?€Œ,)ÞÆdA°íÆ¾xÜ‡ÁÇn4G„·wD_èfJ,ž¶ö÷„`„ÀIpK+••“>(S`Ô”¬‹
<Ž€_¾¥ %3¸ù‚×Ì€1	i¹ˆxX¼ElLM#Í|€-“Nˆž`rË—¸#Ò7Óq8Ûf±íf“ÏÉ¼ÌÐ€šìê¡Ê5µ:”sW‚yÕF|pÃÈO‚Eƒvº‚ÎÆX¦jnøWEº–à**£²j³ÑlvÀ”‡¿{MÖŸüËÿ½IËñ$7™Úµæ_hèZ×«–Ôa~ÍY}6Ž8öPæ>iH|[3°§K4²Ô(GÑøawý:{ÿº=¼*À@¿P_±^oÁ£²B_AnHr³¶ô±HÒù ¯<çhøÓ±:"yÀå»vLU	º½Ó%ãšaœb9H5Á’E‚éeYõF¨ ©”N²‰
 áç)`(è«s.1ä£%a‚ø4¸ó¡ñ$ce„60j§¡8‡ýFv6Û‹*PYrÉ«™]†:› ­ú­.såLÅ)V}ë×´Ràù0Ê0Œ©"õG8JçW{4B
xRƒfš)´0C<Á1à…‡wHD*Ò»¨ôJÒÆÑ­g$AÏQf¬Ô%«S$Fv¯¬‚Z¿HÖ
;wcÚIÑ,@“€äWuKgNî#i‚yáJ²µû#²¨½–Ö´4©O‘&¸ÏôFLÌhU³WÑ³t&‘>¸!èÙx.RKW®H]Ä|¤L0‰šàµQ"	ÙÖ‘Px¤ùŠ½ö/_2ÝòÃ	ð.Œ1,  èOQ^gáôŸ>…y¦ìŠ®Ïæ	×Êòhè¦5¾W¤_¸OÐá²»~®Ø[ôÏ1íØP ¡}!WÙq3’*ýš¸L¡50€ÇèüÁ3œq¡Ð+?ÁMsî»€åãŸ,ñ~¨>­ÜiÎ4Û€âœã­u‡IÆíº0ÕÌeÖù;ŸW>“†  66M^n½ðÈ†6™ÃËp¡MØsTcŒšƒSãJ+&Š½F›†²…
Ä
Mub$P‘º=gº!IÃÐ‘aò<]°Ku·ß®LéýÛÃ¯O/»·ï®Îè98Çø¤:<ªÓ
>ñ×t>ö0N‚ô¨òæö¹·WÉ^À”Up\Ð®0‘5ü¨B×
0dýÀwCÿæNòò@ãq@$Ç+8´7ÜÅŠâÃM^k‹ôºØÇ°€²”ð”ELçì›æ~sÐÚyªÞðîâek«ÕoÙË>0¦zG×]³wZ*exËo_9ßzCJ(ì¼•µ•]Tu†1ð 6ØìíïµÜ¯u˜-‚Ù_íý"˜>¦˜üºŒûµ³½ð:€c«U3Fcï›àn~\/x[€ÚÎÿçÇÓD¯Ó¹Û-xov€aÇÛÛ»9¨d¥yä|qôßzIAöá%¿Oj¬Ã§¥ÀƒØd)SIH<ƒÇA¶Ö–%—OŒTì^z<nç;©å÷oèûs(Y‡	/F0ïœWêì:êEiTÇ¤/÷äÐÖÙIbS×®(xSb…zqFqdiíL§~`,®Š‹N†Ó,A³y¯bÊ¤-Œ2f)3+xðaˆégßÎÑ§­RdÔyêlS—çFþ§ÑÚÝÉ2j/I°. Z
––¾%ŽÓëodúñÝ¦´Œt”ƒÁáÞdµµÕÃºyÖü#ø¼×ÚëÃgLZŸñàÇ ÷! Ã8DU°Q§ðVˆ+2{Á0…&Ÿºi²í¦àL;ß[–)Þ K³±—ÑEæÇà0¾Âæ'{Èñ~¼„Sn}Ç“®³­=-!:&V}5Ó„(Ëð¾ÓÑJª´ïÍ?Ê	œ‘·yî@nS”äocbv+¼ÕÁU’ÇAy4,ºlšQäÏ'‡±æ+-L«‘FÉ‘.G>`Òw#€J¶Éè>}»¿<üEZ—G•Àÿs÷²¡¥Cq	_³±_(|;™ð-ÓGJÕPD>A#UPc¹1è±òÅ×@`î°„©!sOÑ¤û¯IáRèüæ“`{½VgIÏN³YÊ˜&¼ãÙÙÈDZž°@dùRÚl³yú£‘»ðýÚ“ƒé·¶¶[Îª£¯8•‹Á¹†´h£]¤ç&uá;”wLÎ/jÁá€B'4íÄAƒ»¨?OÜdáï4#¢0SbO?ýo
þýË—'È=	ž_39Åàý_¸jzjVN÷šrÑ§DkÈé«Êè+u8 —fRq/$ú|±Î£åÝ•û¶¬ÏZ•‰³SÈSŒB:9Š|à‡œœÇ .ç½e£l2¥:(‡®xò8
ŒèìO:xyÀ7^«­FÛRî¢ö˜)/Õˆ«(K,wWVtŸ{TŸØ]ž°#ÒÂšJ ó‘´oâ4"sÐy’F¥£UÁe-6–jFå[>R7ºø­hJ-œS”6El5—kSÙÙ¿˜‡ývyF«ƒV0ã „3ÅƒÓ`\ÕŒ¡Ú™Y>eIÌ™¼JÒ
üâÔ^f>n…¢*àËŠÕ‰ö¦@Q¹:+LRŠ4–¤¯:•ÏÃv#±ƒ°lJZú¦y×ÚmûO×ÄÓíÂiø9p*qê¸	É:ŽéÔ-3OŠ$p)·e=yMÛ«6E\ãà(Ûû ‚qµÙØ&|[?|Vl(9•j¡uÌ æk[ÆÍ	žm‡»aÏH0¸œ¹¦QZ= )fT­€×¿ÙÞítvö*ñ)O¹ÞU= {QÚs µå@‹‹C^î¦›8²®“‰-ÇÝM‹VÁ@€'¨°7¥³#ôR¼ñÐØqÈ<OŒ½žlé&ÍöÞv×)["x-9†‰Ž‚§¹©è¥®Æ0óeŒch­Uípjbˆé?×#_óä¤ÙÚí~ð8ÒäÐøÜ~j«®ŽžâÆúzåËÅ¼£ƒ~{§½óùE,>·Ÿr½ÚÑIÜr\s¡•{ÁèýýÏï$bñ¹Ì¶\\‹FZûQ†®ñiëc¦±­ü¡—å/1¾iî4÷[-›.Z'‹äDcÊõZ:£-™¶J&<™ûù€ÂÁ srôÅóí²ÅMA§oÀÁâÇW<ç\ÎV8>¼¾Pê'³ ÌŽ›h€O»É6«Mèš®9||ß”¸ä‹ñHËÞ­ µþK˜ôÅ¦”a~•òÈ
Ë}í‚n•,ô­îÿŠÙO³!æ×¥ïgñóË›Œø‘kF­Fk•’%æ¹ZîôÇ}Ü7ûÓöçiNŸQŸp æcß¤ ÜíëFSÀØOêìU4õûF¹˜F´â´¸‹WÇ16YÉI±›üáôuMâÜ;Î|}e`¹ÿªÒ€,DÐ  ¹í‰òµoÓí²¥ï¶ÔÀãõT×½M¶úªŠx$óqê­Ö†9hEVÄ!j“nÄ¸ä4ÕçTÅäºÑ¼ŠéâÜüo×È”áïZ»øxŸ‡ÅW†e“—V£ËtÎÀÞÈY¦ñ]Æ!ßÜw[ýÝ¾PçÔ5'pžçã$8A*BF¼ºÃÓ)6$g
“˜eÇÌ¡/IòeInË¡NrðgZÍÎ#HnrÙ/BòAëÎ:å$—»²‚Å¶LtºK6ÿˆý”3c·m+6;¬RË’g!I•[«Ô–#C3ycÜ4ÈÖXë}Ôüa Ð·Âÿ£,ijÒ9eËØ,±$s¶*Úôé<1föBnY·³†>:`[n¶6´Óx[fEYã»0{ÙžÔNÖû.Žâ9•}áÒ©¨/ÔÉ
3û:¤+j¾4ýå¥áïØsy*›Ÿ$bô~·)Û¢ƒÝž<½mØú
ûÎ“xÕ]Vmà‹t°Ccf´qàÛèG1E×rùEnk¦ó8-éRlå¨…Ó¥ÈYGàVÇ-Ö˜6›åú~ß·ÙàU4ðÇ¹ÁŸàSTŒÈP:_eîòž)W%rF&$—êëJ
ÃA}š_gm
™¿§Q
âg<•"Y@Ôãê¶¶,û{‹|ùìñž{ñ‘4A9òñ)UÛú²¿æÖï¶—ŠzP¶×ÉèÉE	oa.d]Þ.\ƒG+ ×+r‹ª{µœ ¯{Þ(w†Ú:ø[Ë%ÃýØÓC­¼S¯#=j»½è­"'ÆX_µ=#ŒQîí]9–€\käkl_‚Ý«£éÚUÊ¡fm+®6çÑ’´—ˆ›¥ý—Ü?ÚrÉ’q¬^˜`g¦N§xÊ[qKÙl/¥À%fY¶³C1!ˆDô)SÎy½`¢vµŽGõÍÚ²ÜÊ;šöÙ}}"ënÿ+Fë°b®W«]Ï¥Ÿ·NYnàŠ¡`-k¹	».‹¢C„Ñé"Åá&¿úqÈÃ&à+®íø‹ÃQk•«~ µDÙñ’¸ìç¿ú§å¡°+øÀáæŒ®‚lJDñË ¼—aØ³¿ŽÇêkÏcgÏoÙÕÉë³‹vsvûæŠ}Ëº—¯o¯//n˜ç	ü5X4ß0Ž72‚|«ù†ç3F·€¨yQG‹ÿÊE?#ªš"|ù.Š*ü"]R9¾–.¹p¸I%µšüà"vMU
EtóŽÑÊðQ¥Y9–WàÔí7ºwÃï°U©WßšßW»‘—ÔéâZ•nÖ79Ð’vZŽv^vÇ_º™¶£™îË­î%@ùÂMm9šzýrËÙL[k{]Ø
È&™âºÏáuyM²AW^ÝUUÊC¹ú¥ldß„«v1¾ûùoÿŽ]…Ó+2‰;‚U¯A‹ þ}ó]€‡Vd;î«òêQüÂô—w‰ù^ë1ˆk¼Iœ­)ë¬¢9üà¢q<™O6®Òi4+¸Td¦Oþ|j6ñ3®nÃ6:&h=y†yø±rŒ÷^EŠxD,W¬ã„f;¹LTHËˆ‘éŸ" èO/LÖ@ëò«·*Æ£áµ9¼öÚð?Ä©Ú¢&:¼‰ÎB¹ÃQî¡lŒƒÅÁ¢!Â9f'4¡Tì,&âÎ×4Ôòê³dåo3MÂNÁ§79"ÃL>ÀyøìôM÷äöüòõÉ{ñæüôŒ={s{{ùZÍÁ&–x.âÚr9$ÉÂË¡øïÿø÷ÿ•æ}_„ÅÈB˜e(Ló2¡‹msÃ°6Ø[ººþ-¿E/c<Ru¿’Ñ}nxtv3‚A^Ah4J£!† ƒò:‘0¹A8`—ÏŸÛlb¡‡#súîõÉ«ó.{~qù=»>¹=c70>×úÈ¬§qq‚ÿÊk–cNµKqá¿ªBÔl½"Uv!žrRI±›—ßÚ«Stˆ,H^‰Ù„Ö5,?s¯0}ãj•" ÅJ!2ÅJ/äT‰íWÜjÒ8ƒï Ù©P½áó “PÇs-ð¢÷Ï1"ò…˜*ÕáeaSBEv .á²óIÎ™A’y%§"z(KcÆí«[5Œ€inBÜ..Œ\QãRH@ŒÕ¦K©K³Ðbü	Ñ‘T™ÙªÞ	o÷ìõ-ˆêÛó›7 XonO^œ9½ë˜VæßðŒ„§:¢TáëG•`Y±ì_¶7y…t®Ï_¼TîÖ«³ÛëóîhÈ›ÛËóîËóKþ„uO.ºo.Nn/¯?ÇËÅWŸÀÐc£ý«u*Cí˜R±I¤ú©Ï^2
xW¤¼ÌJ¤¸W/Ñl6×0¨á­ˆFtªâUßö
•m¾
iSi†ü’¸sKY½ó´…ÕòCšk¡GsU¿îR4õVÂ¸dNïúL,µ`ì(‡Ü­gúl“é#—qnÌØ+'"Ž•‰›>{ˆãbÒgL.Vëúåxs4³áã<OmØ• •›…L7«¨Èù–]\i=€ ’kÒýïúN75ì- |Phé…ó÷
u»="´<WíöVl¾§7Ou7 ;o1hç[74Û[¶9Ð1êâ@0¡øiÏé _ÿõËâÇÞêÐi­ŠQÊtg2K09¾žOµn­1Â‘¯F……TÎ0REWT4Í¾¶\Ù8Ü€Åø¡ ÞÜ¾9…)š=?;;}vÒý5’ùíÉÅr…ØÍ;
î—	ãêAòˆ[%*T!>ÐêÉe{µå¥j
Ø?™&ƒøí_["HÝˆxrgzPÍ\3‘âY¹‡æsÈàŠ«%ë”pU?Ec ÊQåŒ’5e1ª˜Ð¶™Þ²ÛÒL7°Ôº/Ã/t˜í¼Ÿt	š–ôiõ­ÿÁiŽZ³ŽcÒz(Ï‚tq&Ê¬:Ç©4ÒV²æõ3†œšRèü–F–Ÿÿÿóÿûÿ“IÏ^Ÿ^]žWŸ\]]_ž€e÷úÅ×*Û"C'…anB/äŒâ3RŒ@?í(ÖUêL³õõRÄÍ³zõi0¡ç0ÿoÿ‹BûõÙ›Ûë“‹ó?ãÂw}vÒ¥ÝËWWg·gZªù€c×BsPkàº¯,öJk0î)`1’¶ƒÉCŽñ¶vX10Ê{á8ü}4–÷YK’ŒßOƒ¤o¬…püoèå6$Ü™@Õ6X ®!8hËÖu6(„YŒ!Brp9žÆi;{™Æi0Lõ\SeN]Š¾Y¥h›ÒÓSKªh#åŒCÝ·ÑÎÄÙNŒ!zYÇ´OöúÕ«ËSøÍµ¶a,êGrø0Ñjà©äã ŠÓáÑ#èÄµ³®.ß¶”]ð.·\$'¹Í/fIüÊWÙŽ¿¥äO—¬™““Ú,u° Š­‡±QsÒ”±æa/Ö¤õ¯þ)P\‡ÝZñ óaÿÀª¡ÅC=ÚZÄ`Ícëå^èÃ·Š/¦X|tàT™*è©Ð.áïyüïb¤E¯-\U`Á¨—`ìc~â@CÚÔ÷aÈŽB!&\]”´ªOÄ˜wXo~Oq!PÓLxW]Î©ôª…RWÍ5·ª—Â‘¨3
4ÛêlÍ1Eæ4JYî¨ÎŒŸþ/žRñ8€~F–~ÜH2kÃ¢‡C\ÒMG~jFn”£µ‚nÒO|â´E4ìSXb
HÝ•,ðÚl/?1 M zkvL#NP,d¦Ndw1Ú;¦=!†ÄÜð‘¹i®1»;7óïî ÝDÄEêP„bÝ+8»æü'CŽ0HBL³0•ñ!õg±ù€Š‹Ã©¶úp¾;Špj˜¤,*óláÚp¾ <‰M*‡åaÊO5,Å{p,Â“ïõ„‰oè
QBgGèÅÛ¥w$Ò6ƒ/_ó(êÃH8˜¬À 
@šs@ìîbþ=FY^ïcÂ›U¡XØ¯„‰äwó!ÞG¸RÅsæ¼)òP¸mæ}¯O‡ÁbÂ1ztßÌQ¡ž.éÛ¡èVY©sÔÙ¹,ôý’Î½·bßà»É„ð lùœZ¦ º£(¢˜¿(ò×tIÛÏ·TÐÉT›NP]ôûsŠMAÝ’AB‡1m„žŸoÁƒ~HI:¯ž†wà[qÁšöÉÛW†y%¹àûÍM°«<‰—5ž‹ÄOÿ~2ãÚÞSQ•ªï®^Vg£ìÖ4O†õÚMOÿò/Ù×aòœ. á™9GžœOT†*ŠÐ«Ò;µ¶ñ+V5Og {A·‚EaŸE"—(º<”| É÷Ü–½«ö[uÖo×Yª–P‰¦/+,V³zð“b„ø€¥Ók ¸ƒHUûmøë1üZcß€,fóÐ®0†¼ÂÐ®Ð³+ôD…¯Ð³+øøØ¥|^Ê§R¢Ì'3¿äŠL©Œ‚”p™Îèw˜ÇH@†ã`âƒÆÅtáðúNq.òIY ;±­F‹`ñtfç¯OÏ»¸Hz£¥£Íˆ:åÉ¬s/ZàëdÅi7P©—g¯//ôÐÜ˜:˜o\gÉÕ9ÛÎF ÒöðB˜PHº½Gg»wëHö6Þó)lw;K^ªÁ8>¢(Ó”­‚²Û& ­Î– ²·gÁdZÈvÉãØl²VcO/# g¬»¢õð@¦ÎÚùdÐNØ’†DÁêr˜¢d*;]§Øn£ƒ™ÀÄt¾²PÈqÁp<ðªqy}òúÅÙÚL@Œi_»I}ÜÚ£>âŸløPN§3<Bò£›NÞØnl[ ;-ÝÚoqØ;6l~ŽjSH Ç‰¹gwä™­x¦¤[õÐ{,ÇV¥K±È2­õ9¦ÝØ“ƒDÝ[Ê2öù´®yÖxvñæ1<³““ùBÊuŠÇncÇ„±µK ö÷¹Hou
@˜,@¨lf·KY Ëúr,É-®3èzr Þ0#˜û+s@Gç€ÝŒèïû§j»‡.š„¿Á”»F]+Ìoæ†Rò•¤ªÈ4ò,Ï61`£¹“)Ÿ„©*N¦ðx‡dö¦˜§µÍ^•Akqh»Ë írh[åÐÚ­ÕtCÛ“Ð  AÛ+‡¶ÅqÛY†Û‡Öhºõ M·ö,oD²ü-Ò+ƒ›|¯¦Ô&(=Rí<x\©“%òœïˆi °&¼Dï${)jè¬åº’¥]<Âatíü¸!rõ*ÞŸ€¹	ÿîŸÁßgN½r‚œÝtÍrÌ¦'(ôPpSdpýŽ€NŸÑãgúch'RüVÔxM×Dì ¼»Ã”³Ï`\§'¶®"Vð{I‹Õ`ÆnÞ~–XÀþÿìínGðŸâµ=‘#NˆÚÒ
LhäCYE)¾øLlÇ4ªò
}…>B_­ÐÙ¯™½Ý½³“ ñ‹à›™ÝÝÙÙYè	í¢l
B';zm‰ÞSÌn2Õ„Þx¬ Ò`tÚZm f“Â{ÞcµmîC£È˜¿)€;C ·•ýf”+Ø²ˆq;sà.¿qÿ
ûªXî~myÎ ë:d¹õU–-ÂWYN®(ËÎ‘9äYa^‡L¯Ý*™¾›<‡ÔŒVöÃýbeÃmä?Ò©}Þ¥]+nã»àÕ‚;ù8ž

Èj\:ªdÖá@ôú¡‘ ï15,Å:Dç.ÆHŒ­ÐèÇ!ý‚¸˜'¦Ø&tõB"ëñnJ Þ×÷*wG·ï¹1Ê
YCãŸhoô„‡Â(¾´† )–›÷„´ H)JÍÏfÔÃî¸Ål‡}ñs¢ÑYu8YÀ‘d¾›c~3$J&HÏcÖ©Z»(Gô£× å®Êç7@Ž0št£Â[ÃH)ãSi¤”1«k¤<d¤çf0VÁ!‘ Ž¡BŽï¦®enÊž…ÌY1g‹û$k«ªMU¤E¢é³Dn,vÅWä›äv»ìL.&Ï ì»7Í¯æHÉóm6À«ÌÛ-|&s31ŸÕ³‘*Ó²K;¡èJTÅ¯I’”Û8z½¢Ç›ÅŒ†Ý.0ÙÒŠ¢îæ#]Î\Ï2ˆÖ$G€3¿ŒG§c8ó3MÉ ¦@=ö§¿‰/÷Ú°làøÕ‚šøãk`±Åè!óO5êš&H>²ß5{:7†â¤;€ÊvâàîœšOôË#xÚ™Ó	^nÁû3Çr._}ªÞ‘•Q˜5Ï¼¨£ñMúaVìô'bæ. fò–pò©?ìŸœLPPV	÷0PïàÐ#/8£H¨'n}Œ	®’è'û»Éö@Þq¢7ôb<lRFÇç –AtPb<¾xÖk¤.mÒùp®EÇˆ8 œŽº¡ÃW ÏÞÛŒ¡Z(Žmï
Æ°-ÇÖ·¥b¸¦Œ©d+Š	0ž6åKÞU­"T[%˜W¡+0Ž¯ïlÅ5Lª×Uß&¨–é°ÎÒã£Ü3HNÅdÀW1€@·œTU™4§Æs¨c”8¤—'š]ƒ)
îL^ÀŠ‘@ Î½UjàJt¶m_A•°Íõ 
|ç£NŽž†âØ,?<F€r4Q;F‚Â9Sg“jc,gÀ\-! G«LÆlT­”Ã¸-Á6@¼iøy
ëó=Ã#Á!”3j¤kŽ Ñ" 1V-˜$0ž&©Þ[V1_ÖùRwšu{½í™hù…XÃb,ZÇ¬ÒônÒ(ä¾Rï\Éúó¦k‚F‘ÉÕH†78š›Í°JpoèŸ/UgW\‹‡Ò27ÌÂ¸ 
­ê¹õ¶§š;?ë‰µ?˜jªHV-	êð¯†WÕ4q¨ÅšV1Á	»&ÖwÝRç i
KX˜ý„æAV—ßJfÙt„5N¶¾¸»˜é²—ýÁ`G—ÑnÌHê’G3yø‡õîžŽã• r¿KKÖpuëdh«gÔîáÑá·rŠ¦ÓëÍK[OàðÈaÝß”Áõ"ÖRex"ëßŸBÁ¼”ˆ—1-W¤5	]¡k4Dì½õXb0Å¢7ë¶*'Xç¿ÑB'3žÆgwjK¶¹d» §øübêôÁkë!jüñ¼_Hû0?©yp-mfbQ·Ý=~×€;fb°Å?f‡ÂtdãâÃhVÀŠÐ¤V71°…SÑZmÖlêÍê[BZL»¥«Éâa¥½VŸvknÚµi¯ÍK{£>ßë´Õ¤Û}Vµ:²l·ïJ’‰p»²L£-ãñü1
Æ”yal+™ŽÏW7Ÿ™»À¸5 6¯´£¬+ƒ¡J”â¨NŒÙ0“kW§Y. î¼Ú}! –ƒ·ßÀ¶CHnV¨Å÷L_›ŽÔÍ¶,[vL¸Ý×žc~YÒk¶	9×É˜Š=ÂÛ¿$éþ^š<ÿ<}š^jÃÉñ²%*5Š?÷SVØÜÜ¯(¦AÎdv¹˜Aõ(VêsðÓÑY}%ò„«‹Çäž&úÕ^ò¡;Ä›WTà_Ã,4\Ãó†Tž¦yW¨î\±/°ô(zY¢+ô¬øûäõù¬èÀF¤£tÑ­Ñøö=‚|P/iØ ´(†`TtÔ¶!ÿkGÏÈ±>Kˆ.êp¶B ®ûæûÓdî§Ð0Ãê .ÂéY¿ÀÛ\s½VÐ+‰ùöÂ˜UÉyaÌªD¼0fUÒ>W£¡ûj-åq÷Íí–ýG
®—*$Þh=ýÄBõI(”„BÒ–’ËŽúiÖ9£æÆ.à©PÄU3¸kõÕPÄŠ,Ä¸c³öH–…‰B»KãA žà_=Ã4Û‡4]ØÁ¼¤fa¾[÷yqÚZMŠÎê!5E‚R­ˆ×‚5¡Bzƒ‚{·@ ÝO¿ÂgWwL¹gV„Hèó¹˜í¡èeáÛEùÂ!¤š·:ÒDUZî12Ê)>Œ0TçDepn9`8D22a»(°%›ãÉÌ¨pðá›²•f4a Y«¨0D<¼Ïdîðùmè"9pXÜéÚ%â¥ÝYò9ÈwJäÛUäÛùÜçH^UûAîó*îç ß)‘oSòtôèC'ÄœŠ8To¤|e+qö~†Myz[œi{c¬BTz0éF˜õ1Ô¾;b”7€­‹ƒòdáïA9*Ø Ú˜IB™8<2¿Úš­,yŽ«£è×$PäAÖ.Ð‹SSÜMÙ¯bÞÛ[þYì‹:¹‰ã¬©È›*ø¡ÎËdAy¬x#mÞÈn¸§¬3ïªà¿KâP%þôˆb•Y™ ‘ÎOWúÃà¨J‹àéh A3¬…yZÏÐŽ•übþ¥ü£3¾g„ËÚÜñ:üz¹Ý2Í‹oFLÈýæe¬é'ý™|É ¿ã‰ziø†ÃCN³Ò¶U¥TòÈ#« &îS’(T;»nI›ù,üœ& ãš€v÷«îÇtßm¡ÊÙ]wZ¸ýï,¬ÿ%¾¾XåoW*?‹ˆòËBwT!.`Aµ'Ç‘ïºšï,¾JšiônÐùçŽæS#q{4ŸákRKÿ#ŸŸkwú ©Ì€öùž½Yµ×«ñ“ãåö}~^éóÙpÔR{êgÐ½,êóó«ùü+i~ÇÕüöiþ-ÓÍ›_S\‡Ç_XûK|}±ªß®Týv]ÕE*új%/êüƒ.ÎgtPÀ¤Ðë†âLÉ^ˆ|IáýÞ>/ìÃ•ÏhÀÉ7];Ÿãæ’tŸPT·Éâo²L”"Ð¤¶ÔGÆ9Ýë~€¨¢¿þnb^^ÞŒ’rCÒËù`tü{‹<«º¼ƒ`
,uÜ…n¿':ÊªŒdçÅ‰^9¯Â}--WÆ0Bî¸1²Û24¯GçÉ»î¬¦XÓ¢†b·…Ëlï¢˜.áƒ4¥ê½P¿X†Ý%øªSLûìëOTMÏ¢—U¨Ê¢ýC(E'ß¼ãYLÃèÈ­t¢ØXwÿd{<F§¾š­n`Ñ‹ïaÙ„¢Óæ‹w£„b\À©uO‹'òŽzCkC²bôØ²ß¡4;w±8¹&ˆÎ¿µ ð”E§Zþýû¯Ð„ÿ  ÿÿì½[sG¶.øÞ¿¢Ým" €¢(‘}(Š²´u±LÒr»m‡\ Šdµ Œxioí8Û'bÏ<œ‡‰3q"&b^Î/ØÑçaÇÌ‰óâý>?Â¿dÖ%ï•U (Éíî1»- UyY¹råÊ•™+×GaNÿppøìdÿü“£§¿¶&•t7Œ¡1hÃ¡LÃÝS’àOÎpêßˆ¸×ö9JjÆö‰¢Ó,Sr· Ð¦¹SlX‚²«îÝó˜í©«°ûÇÿë?«F}öâááQãäÉ	¢J=¢‡Ç'Ožãƒ<÷#¾"P-âp9;OÓ`”^JÆ®ÅC²sâñÞþ§ñÌs‡váa
D`Ë® ¨„?…Š™¨£â*`†ÇÒMaCÒóàŸ€k¨ç¦y©Tj¾¾ý™ôá'¯ì.Äßï£Ñz¿]ˆª~³ª{ÂHÏÎÓ¹?xå¯ƒÏ€Ãvhz
ØH©E×Úò«‚Î%ü19‡Œ´&¦@N)”5ÞÈh”0I¦O™Ä\Àa‡É”·¤Å^±‰è!JÉj­K¨Ù
™#„àdñ³Q¿ûŸ¡ ‘öIjx~ÂXÎD?µ¢{«±V¥%››ßÍü£'/dÛÚæ‚B¶KóâŸ
[Û¦X 6È˜C¥…XúÀüZžŽúðTübý«âF•Úbv˜ÎçlóYšN­ËÄÓY|A8]»ÒÃAÒœ¤—Õœß×2Wá–X’~Š)‡X
UšgÇ¨*({I<£óÅH.v\ÿrrŸ®i÷=Ç1ic	Aï§NÏjV²½]JA1áÌç4·°>'&uGÃòR¯ƒYf•× j­f·‡6™•Þºn^èBªy*6òTµÜ€óI’Ÿ!íå­¶ˆ7i7=ÆÂ{óÆç6Æ’¼¦³ÎþXŽ®Šä<Kª¦ý6ÍFî‰°oL/ÊÜ$‘®páÚZ&[Ž:÷ººÑáç+ fŸv>\ŸjÇ*êÅ[ñëàyz]L®~¢}kvfgÍÎôxb4ë— ´èÙ¬ V."³UÅFéE¬ë¾0Ý/måœs¾®½S1ÞŸ ©aÏðifÿ}0DØÎ…ü¼åí=cPÇõîîÝb,çƒ56¶ò¶×Á¢¿´¯:©ãoÅÆ4ÌcùÁvÛÙC¥^°ÑðCrpî®åjû{÷òÛŽátJ²'ód²H™ÚÐfìb½¥ëÌ‹º÷a6³«Þ³7„ÌÍ¢'éý]§Ã–L•a×Îa
‘ëp(+S¦°,¤¡˜Œa`¬òÜx0‚ùÕ7…’inèŠëÑCukïðÓÏž¼ÚvøâàP¥sŒq´ßE9ÍùkfIÁD77œ*‹¥–$bcØÔ»V¼¼Í«½³eXŒ,vÔöpé½û#œÇëéÑmâñtžàbYû™Êí6œl–Œfé]Š:ãœWo2BïZBŒßM3ÄoU…5±öƒs.ÝZ?ã]ZçõÏ˜¯<{ûm~Mhßu{C íífxoŒ
à¼lpõºtM…ÁÅcŒÅ‚õ=K@'ƒãÅì4HuÈbôõ)º o5×±ƒ­›‹+éšüG-Ö¦´X†8Açàºî,´Ãwˆ²8r’‹Mã°©•}T3bê€k‡†“4ZÇƒxcíuè
ãé·‹8›«ÐDpg Šëž‚k¥RÞäôeýÙÂÌ—ŠnŒÐ?˜‚Æåg7Ž]wP—ª¨®§6}CÁ6ÓTU`hOÃm½È!ž,ZQW‰ÅZâøÎ6±
-Õ”—ÀÎÀ”„	pŽ–˜Ô%4Vœ¨’9ÇuP2–r„ž¤s„ñàe‰SÜ´¨•éèò©î3Yk ò«!´]qK+Ñu.8Æÿò™D2Ï±Ž(Äh‹1øÒ±­á"Óo@vÎºh(óz
¼TÛPÖV«f,ªè¶¾¯ˆû|[Ü4–0ÇååZ×r¼öÉ:½±~}Ej~½Z½Ý/esO“œdÞ”Þ_•ªy!­9"9i‰s¤3f²/}yAûëæOÔ­žeêXÉ§‹ì¼ú]p±£Uøô|Ç˜ ÞFaîBl–½UxDS$ZÇxT˜GDòÍ¡zS‚á4#0ÚŽ`Ø ýÿ×¡q.“áüÜ|p£ë…«+?ÄJïhÇ‹é4Í9ö«ÝÔÓd4:FñA±ØÎJrŒ4ÄöÝ^=èmGB™ÚÞª¥ïÂû¦ÿz½–JXVûÝnÔéoçjOùÖX»5½
²h$èàS‘'?èø³—/?9:	ŽOö_<¼UÇ@‡@ÃVÍd	/þ++£©{§×Ûº[Èj'2!_¶ËÙAÿÈtFç`§ÐÑÎQ‹×?R®à&\µ÷Dùªá6–Ù²îÍ‰ÌÒù|Wõ¦³ÕVŽ÷¸Â†’ø^ÍÎúQµ·ýµ}(íB0²k«\Uµ(¹(';X´’b(W=
rF–M(J¡DøI­f—ÊÖ\xMðÈ"1L oÇpÐ ·cp=ø&^&Ð¸Sÿ9ŽdÚúµßÑÉ—`)TÝÞ¤HÜm”¨6øçN« ïsE0y†iõ!ÇÁóý_ž<9€ðäèèðè–èØÞV¯æžc,W˜¡p t;Š%!±Äßôe=Ã©V+Ñ¦o«{§»“É´»+òìåÑáËý#òýññ!0­ÛÝÊ3·?’ë[5íÃåpóá8¾Žg¼û‡º¸n**ˆKq’ÕñÀÉªÔ œ!ýe£_Ñ^eüu°U^Þ<žÏâh,!ï“Àkzš@§x¯½³ml©SˆWj{¥%
ã–K³ì5wDzÝzPeo¢dàÒÛÐ*:$Á}!·Å¿ £„Ê2ìWI?”õ˜fqsãåN–Ñ Fš¿óÌ¢åC«ã˜½2ÀìÁ5˜â°“†!bR\†Ø»Š·¡ÛTÐaÙÇnL >ØÌ—oE&§ƒR¨1ŸÿwA»Ù²Ò’Uˆàˆáfïlb1g3´.†ÉmÈ‹˜ò1!’Ú(~þaêgîöj·¼Y=ºØzÍJÐI7˜a4d¼Q—¾|‚úK±55þ¢‘ã½¬^ÒN”vù të^.­{q(†‚>UÂmSòìÜE.šDCÉÍÞYX¶8Cö˜sp»ÙCar†TCŽ¨M(Û-õDn·Y‚îf¼œÚv8å±
ÔwOº~Š·Hí$µÄÒ—+0’	UãK©m—·9Î–Q‹?œ.D°Æ)+
<ç17¯êÁµÃ†lÖ`†ßÙy<:}w£Íos¿«Ñ†¤£ùÙCƒ¢n€¢¬e°)ƒ}Ÿ•.–,¥®@àqŽÁý|$‡ìœvñ
‚Ò£E”Ïðá­¢£C°„^œƒ½Ãkˆc0‹¢PÔ³eˆ‚äóf“áê¤ ðÚ!¨Ê}½Ñu€·*ú#X*Àêaéé,Vàµ¼8ÚKîÒy2ÇÌ§r1Cg[`ã¸;Û¸jFDN ;=»GÓ)-£…5]5èÊ¯Ÿé–Â»‰ü"Ÿï"¿A»‹KpXuÔ¼®‹žxÞ¼£ ‡!“…z¶ë®o?ÆÃMYÙƒtxÍ¨ˆÔ00üú¥ë<Ù—K8î_19SÌu—(7üæÝôX‰áÌ	u_'ÈÐ/ã=¯œQcéh+°´7ºL4tF—‰nw-20ü<ü‚—£èÛŒEŒ+Úàql”ÍëâGè±^+“ÿ²0·ØÛîOËûç†#B* h-Z¨»ÐIÝwsæqÁz®tXx›$5k?ƒíRõŠÇ9û ¸¸5 K6…X¨8lð%h©Pˆå¶‡r±§SFúéöit:(%}Å™Aé\‡²nnX­aüxºh¢#Ûé‰Ã[…z™•G‰qâ›Ô“·¡Jg…Ï
[Ö¬p´è÷cƒˆÅ¨_ÆÕø´.«ŠåÍn‹m¬ÖïZÜŽ$Û‹z¤&¯à ¢RÁ]²£IÓÌ¦çNÖ]ß´šüõv<ènß-µôþ©·;+éíwWË+°ÿ†jY´Õ2nAoÿZù´{'ìoýuµò–E¹Öf¨‡Již†Kf”Õ²£ú\åœS)«*gKùº;ŽöÒ!ÏF‹ñ·ï:Ç¤ð€ìæSîªûâ_}óà³£Ãºõ!]Ä¤ù¶öÕ7È®FÀ+­F__­ozº‹Uc«j‡zQvë’kFÅbôw÷pçÉãA½ëúáñ&î+ü›ìŒÍßÖ%æÓŸðŽu‡6fìÌYnùâÓ¦TªÙ€ÓTð*g¥Ú
:âFk3ñÏäªä«Fû(ðwNñËÆ†ë…1Žfol¦%Ð'=bµÍ>½C·Äƒß=pä:›MWB|ˆˆ’Ý&L×)I–ßjÒD¶[’Êœ¶iÎS˜ê“ÉYµÆÊÇ˜!6ø¬Ïß’N±ÂKq÷Ú§Ý·D q
+î^|÷^%·:Ê#p}²‹ˆA[âÜDP›ó®ôÉmÏ-Ÿà	¸¶;,K—GEŽ½±ÒYÃnRRÔ s,ÑVî¸Í¡õRõz%‰¶Pû¾o,}_\	Ýùó¶÷'=…=<zvøâùá‡GÁ£gûÇOoñƒÚt…Üòó‰…y6Èkë
ÛOêFB¨˜èÕG·ªòxxZø{:û','0ÿog(é»`¶àlp¶ÃB‡ç„‚ÃVðÖœˆÞõôpÍ³CCup.vØfmÔŽ‹Å–MðÊ×YÐ&J&Î[-’Öš™É™nåe‰X~õÍª`ºˆ¾hÎÞÖãç™ý³oÿ$ç&zA´‹ÇZÎ~4ÆóÊ	‘aæToÛ;—ÑE¼?ÆƒKÏ¡ô?þ£ög‡ï®ÏxÎ3|‰ÇxäÔ%J»>Âô™ H2ZP^C~oðí;Ë@â¿ C$Õ½·q
ØŸÐ÷6ž>â(1‚zöÌó0©s]yü¥:ÐÙEðÎ376óv™<rbìÔ<òwÓÕ~<%Ó,&F˜îõÈÏ®mD²¬ud/ °›#¬Ñ¾KùÖKnâ …aßÐW?ò
2çº;UÚ”ô„÷(kOÃnR¶xÛÎi¯'UNöÚ-O*}”'ùN+nƒŽ6ŽWùø?Â‰FJÖ,†‡eD£%¢Ó(®Œ ñ.¾ŒªbÙìqÀÛFé/µøŸ¤ðñ3ó‡<<ÙÅ•Õ”¸ÒšÚëÖC—Ëô„rì`=¹¡ë5æíÀf•œÃ{÷RŠ]}=qJÄC^åËðb£wŒ‰òV>ß,Ee\­êk,·%ét»~»å§ÞØ
1Q}Vd Þ€jà"²ÑáÅãVÝZ‚x™¥ËˆÑ396Ùh0Ó²ÍœtóLüa|-FöK§)"¡ÏŒâòÞJ&|`õaŠ¥9S;y²Ÿ	•€Ã}ëN]þÄq'—ù»Ã-ûY®<Høq‚]"È¯Êšt%$i~‡ÐÐp]V>ša™ôù–qÙüÓ ÒÛÄ…M²'pÁÄ–{¢tÜ^ºc(8ª+°!Ó©bxÖí	eåðÜßÜ;5Êh¥«÷Š¼v·mÒ·ý^èQž;b/µÕ¼›#ï»Uú,jvôù"Çum‘IîNW¸ð±’mR2ƒb(:Ø\°!£7]U}»dƒÏØlÑÓéùèÉÇ®[ì’Õî†›3Ü	ñÄ¢AÑÄ™vÛÜÔb·A¿´V¡ÚÌ!è ÚsõY£Ã{¥ÓßàmÑ`OOp37Ç±ÁôÄß^Â3çÉœ/ì²6%G`b¨]É¼É¶Šƒ•üž<«yÕ¤µnTeœä•i59Y÷/ó«Q¿ª^)z<PsvƒmuûuÑvOv¯éÜiörïË¦K±¸353^äŠõ†H˜wT+Ø;,Ö˜þ®étÍVnØ“—›w$t{ù‘ð¡;Ó¥L$à&:|µ·ƒªö&–ã+\bCº‡¨+Û‘²SWñâ,°Án™=öåM)spòºƒ¬ë¥»˜ƒþ°·—žþ–mÒù‹XÛëÿÉËÃ““C±5×Þ»›aþôg¥Í’®Èß.Û])Ñ’ÍOßkkÉo-S•²vW¢yÆ½¸ê:c­½ÕùJH†m‘ßÛjNEb,nZÇ•—I)„Ð|6áB×òÆ¬n²syŸ ŸW:|‹Üœ`ž¿sˆŽöžî†…=³Ú3Ür¤àeÈëª»sýÆ­m‰Ë­JçõPo=¦Þ‰ñ0­ÓüK!ÃSös(N@m+L”“5õ¦t'_§*WVi¬(ÚÝ[$|SÀy‚tÂ;·ØËžá.ph…yr´DŽ‚¶ê„½!çÕEÇƒØâ\Ûö€÷ÝÌ½ëgW»P&œãv¯L„å2!^zRyÞƒÕ©FòÊqòõ=+Å.Kè2Ê¼y¡]Ï>·Sá½è*3m\H;=Ç	Ÿî®œ™VŸxŠÃNWž¯L•+ Á]©µÒ¼-–Z~Mä(’ÌÍé6nì=ñlIËd2L/=¹PZòçøV]k?Êq3Ì’é|ïW÷7ûéð?ÏçãÑÞ7u*/ÉÀõñ“1^ Þ¡P]ü&ZÌÏÓÙá8JF;Ae2\LþÔ;ÿá4é¸b&Ã@˜jÿ*IÇÁn¦3‘€7‡ûPx%l…[Öv#+ðî-&`aH†ð6KÆ¬¯y2h “Ä70’F•_”GN9úß¦HKÎqÁÿYÔ—é£3ì6È[†3Fe¦|7Lµ1›é`ÍbŒSŒ»Ó©Z<» ÷¸4‰OO“êyLL@ó¿C·ö7	_rÅ>9»hƒWrŸ h˜dƒd*ˆ„ˆW¸«?‹/bàù—tÛŽç)Üm´ÃZ¥L~	býäA€®5øû3¼™ˆÀçÊ×\P†w¢Ù0£rŽ/ÃFS‹ï¡(IÜ„õTõ3”Ï.Uñâãããàøðe£'ËÃkM(G|º²?	ƒ™í‡Á8ÆPÆXy÷«~ †Y ‹¡ÂÒY38¼šŽ0¤¼èµ:F¹'Ÿ¨n·ôõFžýx~cüõË,ø!¢*“ïyD!àceYÌT%ÐÀãÚÇ£t@ÌM¼µ0jÌ1ü§jQÂ0Ò™¢_&‚êøÇïÿyÿ†‚¯ßÃ×ïAáÓý¾~_K:™XIdJ‘)`ó  øéÊ˜‚YSˆšêî“þŸø8»^è¦
­þçé¥hŒ+çD—›ÅÛ—I–2B#c`òÔ@7Ý;¿žB#ªªÓœþÃoP48/°¹g¸Z$jÎã’QE×`¼pq™I¾]™Ìêu0¾²dÊ¯	¸#*£Ñf4H™N¨‰Òþrä)ŸƒvgvÏ,'Ý’ŒQtÉù£ÑYÜŸEPÉ“PT¹^óóÅ¸?Í*Z`ÎÒqx7¶Z-”ž9¥;ðsž6hç¾q·×íèGÃ³˜LzÈÜ?ã¬½Vk³ÉÁ²àÈÜOg@ˆNÊ" _ªr”!àµxƒÜžœíÝæ]ñ ¾HâËƒt´v»¢q4 ^‹§íížÍd_N@X¨dÐq8ÒPa„†,›¥0m "WðŒs	¦3¤@Z-TO¸Æ¼9#_Â|ˆ"Âa¾)˜…Ü…‚	Jš6%ãäˆoµx¦æ4§0]-fÖè1'Ž9íëó¥;.ø:ˆf³º\¢<Œ£3P:‹aÌ ®	Fƒ–1-‡/É&ði4ƒ…,Òo£½ba˜}2¥“†88”ƒìP?TÅœS•­6õÜxŒc±Ž.¶×ÁEìÅ¸&ºnïñg)
:Fšg°%3K*ñD@×ÇuW3V_Ö¼aõðQÕ±9päLléÝitSX@Ï 7E5u9uh .*dÞÚQMêÚ÷íÉ!ÈF	³·Õìañv«Ù
ÞœÕêž	#¨6¶›8ú‚üof59S•¨°€îŽSÙÍVÍø*À»8SÊ´€Û ¹M%¹øÙÑ?Ç¡õs?Fjƒ ŒhI¸ªShÔ¢®Mó7ñ5ŒÕq[ñ–Þh—TèŽWVçÀ<šýjF¢q2Ù¡ÃCý$ºÚ!¦êGØñNªðÊ~sf”eTðgŒÓd–Íy¢d i[‘y½ 1‹’Æ¼’‚T]ø„½î´h{µˆ¶è‰-_×Øº>Ñ³´-ã°¨-¡î˜ïúŽÉ(LØÚ=SÒ«gò-ú‰{&Tm1G1c´€öáB7ö(ZâÎõz¦aŠ£\Õü1ž¥Á#2Bž
%vÈJì™©Ä0z7Ld‹ Fòir†H$Ñ$ÈÊÊN^L`}‰úZÅÌ9»*ÌÁv«õ;m6MbÉ‹ð9…Ä•˜—@NDÀã¹D»Ø¡Ðšú…Ø®§OI,ÞÄN™³øÖ4ÐÐ1V€  ÌJ„,ÏúÐÃúâYä¸óÇñ|™zÕ?r[`>¡œÂTšãºi¹FÃMé¥X¯ˆ4O¯`ó”ô4–µjèöŠ9*¬~	Ëºe@¥¿*ì—çÒ80¬a°»¼CgÊ†ä#0¯l“øuí®BØîš¤˜³ñÉOÒÙ@™"žu[||ãU/pV^È`e\±f`ÔšæJÆ?Øh¾Ç‰¾îTz<œß³®Åî‹äºZ–/Lm/P‹ôBG$!—¹ù dèCÓ´,${<ö§Ssó·ˆD(Òà›û¿~øÉÁÉ/éùÞ¯îãèéÉÙn%žTðAvð>X.‘f`ÉîV>;yÔØ®˜¯ÀÊŒw+Øç¸ãT¡kÈPÍn…¶ãw‡ ƒ¸!âð	¬‘â]`‰,Šíži˜ë½Ÿce¥Þßätœ‡¢(jpÄXuÌ0,œ¼†úMkØn·ïÜsi
É A{«ÝC7X]ÉR:­ÎVgè&¢Ù8Âì7ƒ»Ãöð®?Å‚–(¿ÙîßíÞÝ$Ñ /°5ú4˜ÓÛŽ¶NOÒœÍ@ÿ#5§}X1$š.fST…¿é¶…E¥3\þBªÓÖöv'GN“mÕúÓÓ;ý;¯C•æÎÝAË¬í­Þª½íôO?½jdÉŸi!(øìâôn'pZ9†CÊç<ÇC‚Æ),}F ÛÑ8Ð`mS€6yó<°Ø#H‰Qöâ³4>{R©Gi?§¸¨]O=ØŸ¼Öão»È–pšëÊ3òq“Œ¹ˆfU-5›l+’&'‘X¿í§£Øá>i¨éŽ¸×b§‰ðÊ`#ÁíH@w%V'“…¡!Ùº8/`yØš^yùpN>Np6ø<ÝÍŒÔ\".OV¾ðó¶S>õ8î–ãÊh{K8k±šOÌ•½òN<Ý‡C½æ‘M¦ã?Y¤u4±ë2žƒËN%g³ÄÑCøj»·’X «Û§³ ÓÍ±ý,šúzƒT5õÿï\]5äË°U$ÿf¯$‚õŠN}»ÊÊYÞ›®·^âéC&öQ
x³QDlkÉGs@‡ÇËYDwü‹”‚”9ý8’ÂÊêÁ£Îq\…ö0&#o–ÆŒÜ±‹ÜŽÅ] „¸Û	Î“á0ž¸ÙAŸGC|ß¢K×aþ!ç¦Vþ×ì:UJGÙ°q†¾ˆ½<a–õÅ’¾WÈ¦¹¬7Î¤Ïú ™F„Áª¢ó6ÌÚá0hý®.'y’ÞÚŠr-5^g»H¦›ç‹aCn¢}WÀ‚¨ƒÞÑmiNZð/mûž[-gÒzÞ©Ãø^eùôè6Ô8MFsÐl³*tÜ»Ë“ÒötuÎCª-oÛî{KÙm÷rz™®N@1|B{9÷‡ÉEùôÒ)˜bwŒ‡ÜÏi`Ì«ø÷au·‘lê²9µ½ÒœÊÖ¦¿í²sÖ?•u{I¿6°ûÜiù}°okµŠi›«˜‹Þ!°šÕPÒÜùNN¯¹¶Ë¦¬¶ÄþÐêdªÑR‹&oR/…þÜ2¡ 3ŸÆÅßt1ÿWæ»ZsT¾vê,TÑæðüMØ·Âá;Ë•¨†fN½9£z+7Û.æìP¨×–óCŒ¬-ØÁb–a:¡Xý½ßŸO³ôò½Ø”9KŒÕMÑ,Ú_ÀHvÅì¯ß³íœÒ]ÖµÅR_ÚøG[<Â`ÐMÇº¬˜M¢G%lÜ9Ç±Œ™¾
{/£DïäêkNg	Ì´Å«\ì¾ÎöVgËÛ—ç‰k9û*aµº(XÞòåEq¸•–1Œ€{¶åt»×îÞ]NÀò¦””Ô$läë¿)s†”	ëÈlviÛ0ý;«ªY<£y5ZÌS0“a"'¢½_G-VsšX°2–&›ôa‘Y H'Èè¯ë´[Ë@/"ø¼Sb®dòvbùæJ!)âØ7ËxçÛÉ­å…UÇa`ñ¤iNðY–›ø¶l£qœNR²½JÖ@wo²5eo-Œädá®¥ßshKù&Üáá_ÿ­ÃŸ%[wE9ZYz×Ò¼U…¤¬TõNÑÆÌòqà.$Þ%ïÚ5éÀ“Î4îoò	Ì}öñå—¼õ¨<îŸ·÷–zÍBIm#ËÔ:c‘Þ¢]¯Yuä‡‡Lâ<Ø<ý»¿9‡0›’*þ‰ËsFG­Øû{ƒˆ_7Æ¡Ð.WtÐÙA£a¤6Š4öôŒòÜTöœ“‹©dHEòu
¯>v+Û­VEì	íV:Û­ÊÞýMÎà)É¨ÖØ¥¨PÑðàñ;ŸSæÞ3!RãÒ¬(‡^VöŽY`¿ÞßÄÜËË}nøri*{áD”¼9ûáßÆ›Ùªu8®ÕÃ×o
ëâ4vuÿPP‘ç±xd?C:¡Ñ‹-_S„Üž2'Ÿxœ‡2¥±ARÙû{—Ð§å¸9üv!Ü>R8´ˆ2ðï<,ÃÎ)'5j¨‚ÔLg¯Ý´Æ«9¦¨NIæéÞ‰íèzãA»:Ç7œ·gñÐ5ŠÙyH(£d~ÝTÊbYóŒÙ¿²·²v‰ºè	”G(þ–l©ì5eò^>Öï¡°)Ý>…Í¾µ¥]ô Ÿëò¸HF³X‡—
ìJž5°@Î=jÙC8`çý¥oØyÔE»A•Ü	äº&ú2”I0!øzƒ^ßïÏ0×÷2×÷òD¤nç\$n®wë{Ñ?u×wš~—^ö,]ÞûOóî°8JÉ		Lèéò`2|öòoOo”»I^’Â£”(`' í wqÓžÇôŒ]ÕqâÙ»vâÚûï¼€Œ°ÝŠo±º¤g»M58s¢3-¬ÕÁ}tûa—óè¬7ÃµHzY#0Ãu0-ÎÎ°ÇÁMÐ#:c?"˜¡[~øŸR{þðèúIô‡¿¬ÞÙ¾¾xzx³N(žÞŸ¶é(¬Åà%m|,1íS×j,˜éãTš¦<•Ûœæ¦ºÏ¦ }ö=q!àX\€Rùy>=oš‹§|³	)yº"úô$7N_«á¡n¨{XhüF!ç\©Ø,Çº\ç®BUÍfxia½‚•ÓÜkÒQ4kE¹É~œëUrŽ7%^SDøÊ_› Ogyw‚~—¶*õÀ
æèúr¡- ¼T³’T(€9Vò·;4'tJ\‹‰­f¯²÷RÝïsç®foÝâ€¢’¹°”¼5zä|&•ºØbkÝ“{"¸yQ¾ßVy÷þÍ_±Ø1VEãö«TSØ4Ö_Å2@ÇFyl$
9âãdÂý„tz«BNóâ™`|¨\/Kùvã–:÷/ÌÖ.¸µÝZZi®ÙÜ…ÕÜÆ¶hí¶¯±Õû³ëº‡%$¡Ë¶›I¸Ž¬È··Ô¹
b		·¶¾£”„«KIcý1!S•ÅhàñâTÚ|¨ÅäByÇÃ«²G0Ï½ŒÌœgia|ª¤Ê:B»wàÃ_†ßÜr›~_Æé84µØEÛ†é`KQŠ‰:Šñëƒë'Ãê-µ¹vËØ™ç‚‹àÔ“9…Ë‡·Ì0K››ÁgO0#–š9…˜–Qf:)æLº¼0+y¾4¡‡ËJI<yÃåyÃ‚¼‹åõ.Šê],¯wQT/M^å­…¾¶.Ëzó-–Õ·ð×·XVßÂ_Ÿ“eYeon~KrSš|n¹ó[–[¦ñæ~žŽ—ä…ÞœbÙZž™YãUª½±V:–Œtž©·h–"’ùËÐVå’RTB9O—ðôÐU^r«ø#9Pg©d';ZLh_y78F&¤¶ ßÁÛ22°G0?Óä*ezÓµ_'5Ýh§x˜aË		Mw9à}¶ueÝ¨ç?¼Qh]Wæ?¹=dÝUæ?yÌnÛÏÅÉØ-quäaˆ Ñd‹ëŒÉ£x¨r¼õPú(ÞòSœ#KSÜÈµF’ÜéÌ7Yˆä3Z#âì0Iz0ZÄ…TÓeúçq–E¤T+tnƒ÷i7ŒÍÈ,ÊÄ‹¡SˆŽ¯'A-Ìy)^´â˜
Pä`Ñºú”žòxŒÞt‘dx1%GƒÜ1ÕÓ¡žT]Ï|’’æL†Wë¡á†»ˆ“Ö’!V§ée•³!õ ½Ù©¹NÔ•7+6,(Ö8½U-Ãè
¼ÍRåißm^ÉpÃ?ogXíÊžP¸Ä¥:ìdž%ôÖQåžm8ŠÈš4ìî·ŒMš[.B
]³¤I¦*V†Kù{¹,Â°PÉB¥_8»Í–'gh'êPNça£ãfµƒ†ª¦™Eªm_Ûz«´-ôµ­½bÓœ­ªõ[×ºyëÞ¡çÂ›gl’}¨ŽÛò5-'Y¾¦¡sÇ*Bi+yÐ½Opu˜U…DÍ~)îoXo}z…5&Ÿ2››ù9õ)ÍbŒr‡·fFšW-.äüUÙ°µs,–æ‡NáÒ:œ‹¥9b;Caÿ×m³V»©ýHŽy*™ÊøxvÔí¼ØÀæÁ·°Öœ§ÀäVC—BÃzt´ñWßPÄá¯~ûÝ¸ý6ø÷ÿŠˆ‹öÛ†Ä‡¡z¾­}5	0Ëo¿“t¼•~â6Ë8¸}¥É”§¸ž†^´_kS´ZÅÆ6 5Ùdl±l6˜1j%<àrC§ÜËmS¹¡,—»j¹Ú¨Î±VîJþ6æiÍæt(X]«
FSÝ"Ï†ÌƒÜgökî¼ÅÝž¯&_}lx·‘sDÔ÷š¨PÕÖD…QmAT{9Q¡M”G":MËûÊŠÕŒ–W0^'³ó£`õnS´ä;N‰ÿ¯Ü|Õd~€<*`sCÓYÈŽn³ìð“è¤2êƒJOÞÄ¯E¼€×¨)ž“c–å%ÃÂ(!4J`Ž.S.n	Ã˜kuh’ˆÂååv˜Ë0®NçÈ‡­C\¦a€qºHçÂ÷Ø¯^°C·ÄÔ^¥_ªøO\+Ò2ªÅ(3”ejÝb”éÓ0v™~Sss,[£¾­ÐY\’ÛÙ²êÛÊ%tº 8ßå¢þ²ç}glæ´ÜWßÈ9ñðõ›U>pÙ	~øŸ®bûá/<fM!}üÃ²²BU–¡¹=e…åe±™Ñˆ\Ä[.¤¨Žœ„™«bhÄ\Nü¶¶>W„}cµLôêMx$äª¼ä•8¦›lg–Ü
ªDißUsÚ©áH®)†× só¹¦±ìÝ †•[Î£|ŠV6oõšu—óÔåä³7Žp¿ØŽº±Šm÷JCèÏ–g[Ö&I/ÎZX£7«×Üï¹çyå[Ø,“{ùäÈËò}jµq
Äñû1ô:b:´|ÝëM½‘OíÝ€sÖ¦rãÜá¨™ÕË ˜°)Vw ƒukÛÅ<gòÄôæ@³·êwwÏÜª*(’—Qkû9¿â*+šJþníÆ?ÜøµÞûè£à×F/ú¶Š×FPãÍ—B[ÔåÚ¾.wêraÿ5^:ŒçU>ÓÍµ†{X@Ï8p³Ö•·Ðn¥ÛÒ·æT[†žŽá.’Ÿjs§RS¾Òn¤Îúû B‡È•`ÇA¶›ÛÏ.™tõd¾Û~éjŒ/Ù·1[ãìÜˆƒ˜ê0¿!l	Foÿ`Ô?gì¿¡e«	§J§4CÚ}ÏÆ):hG2ì-§ÊPñm¸šìS>ê¹ç~õ·áª|'OniqÞMF÷£Éâ`~¬<OGC+—Ø[J&!šÄ¾ý†µï3ÅÆÈŒt7d«=›âæ0Äai–pWRâ öƒáîòCôÝ¶±t	´=g÷WQe´ËfwSQÒqÛ²6
“…–uá!)0%›­"e†áu¶;¶\ÃkÞÌÒY‚‚EúwêÌ…_¾)ø—³EyÅ©Ã•S;“>® rWâv‚H“	ˆK+[¶°E™–¥,v6Ür s?Fe‰Ö»òSõ¹Jê‘(<çKØ}Ñ–ÛAk®åý,’Kz.tíÅüŠ}zÑ^±;/Â•zR@6°^E‰u/Í`$n˜â¾ú¦Ð;•WÞ~Ík–UŒÃ\.<ïŸQ<#• b¯Oƒ?%só¬ÞæÉ•Òˆ"&4^¡Aå™ãêm â—?Žð`U™&´úÅW=ÛS¡l'ŸîãoÒì7’¸7fE9H"ŠAqë^.¡“H¿öæÉ—ÙÏ…¯ÃFÐqc4¼µ`hËóåpªlVÌ#t½ˆfo0Ì|4J¡—©À\A6¬ýô0CâZQ -°•èk	Ê„ÂÒkÝƒÏûVOâ“]‚SòÜ	rH
®,ÔƒvÝ‚…Æ¿·þ¶ó¾Šõ
EïŒ7v ¨ôoFÔôü­1‘·QŠ
¹ ïEAßû
úŒ;B8 É;#„Ÿ1CnP†‡¨6Gkm˜›·Uµ|»Po8–Uâ©Ug*¨{bØËQYÐö\*Þ–w¾ñ/w-£º§N®&ÏÐ·Ž60}ó©ª\>×XåX\SI¤§›±Ò€CnžÒË|ôŽ R„ml(D;åƒÑ¶{uQ4WpÐÓÝø
Ô¬„†uD1
%ÖKµ±]ð¿”m«Î$±ÉìFÉÁÛCr…§¾<q³S7¼4}ç ·\N/Õ»ê˜kO	R©ÌgjA$ÉŸÂWã’YÂmr(ôvBŸB'¹Å[r,"6¼;È@¹ä¸Ÿrª¾©êû°ê¢€ÅúžF	ŒÐ}Œ‹y8ÞeAªbJÆ„ãd8y'	JøÕ7¸w-GðÛ]øE}ŠÞ¾9ûêêÖF×'#j¶j/£Þ~¥°ØK©":<šoÉ&'ºÚ9ºÐ§PêËWÞ³à=¹µ&IjÔÏªV55„Xm¶z¾‰Õ•…²ß0$ŸgÅX0”u;ÔCÄ7(ßæ9Šàé,^¶áª)aß!| &Øà½º\{|¨Ä€qù0tCb­h¬90ŒfÉ:wHx±ðéKW<€‰!ƒÄ£§#D”’®†Ñ<š„Õ!ñÍSÃJXF¦ÕDø”ŽŒƒ4«25¥,7Áæ’e™i»Þ—öfõm¬QßÆ²ú\=mïŠ?’I  .ƒgi:U¯ÑnÅµØ	Âkí¢ï2!Lqsm”i8rÂ„/ýþUCÔAøš"Æµj»åÆã3ª…äÞs¹7¨ÜP‡sŒ¶Ûvy`¬²œr–}æÙ%ŽF“?k‹Õ¿çY¼ß¹´Ö¿5¸ÐaºèâÆ4†
G‹qcp¥0Fâº<¤4ÁK‘F^¸§,èý—È‹È:³5ÔÀ?KOƒ¡•›ª®côÎ†À !¼XÒ×ƒ£Åä,n<]ÌçQÐµH7ƒêÑÓn€4ÏfFØµ¢)é:˜âÕh|ŒÖ]&Ô€=€™O"zÖ
 B·jžh{% P‰õfðÑ `…eñ2–Š¨%›Ó!‰‚:	â+>Ñ,<ƒÜ?9]‡§§t	zBa+Cg°àRpš°È'AÃú¹Ýö‰Ñm“Å¬Äe1:¥âYt†
Ä†Qá~ÐÕ>¥.>)$F˜Åz0K‡Ã$SdÏ¾ iâ'gç×0œÎRAuöÓË"YY	ÔEâôH®Ž¢ØôH	¬§Î@& ”®ƒ8óuÃÎÄÄ$`cÖO“½=3,·öÝ~3p?èIxk4™,R°©˜}‘¸Þ‹y
|U¯˜7Rf4‡•YvyžL§{ºÑÄ4pTµŒcPjCÜMxS.4Ñ`°À°9Ð8èJh‰ÁóaÍIò=’“ˆk›T¥!e
zw5DÑxŒ[ÎC*:Gq_RTæ5QEå3XÔLæÃ=Â.‰.óØ¢=¸hgÛ.Úÿ>ÀE5±–S†ÊÔ
ÃÎ²V3¤>@ÅÎ($4{Qz%VZ¢„&œƒpD8:BÚz§¬gaì'ÐS1®ç3@sÜŒ,fÁª]ÖÏ€ýH £!°õ­§|/lÅ…š´Æ`½6„¯³3Ôºì	µQZó+ãÖçÇ¬Xƒ*3øfØÃsšþV-é³MÖe†âª=N	²<½ª™zO:àMO@ƒŠ‰¸£²¶eVÈ;Ïµ…Gh³ø[í‰AU*}%æÃ³E2Œ	ezàµ"”R’8Äé—ø¦íÀÌ¢è•&ËLÅP‚8
àns[Aò! iÛÕ¿Fø®«†ÖOâÌ0ë¦¸£g<HÝ¡yXK24pí$ ¤4¨ øK!äÃôr‚¨vÎc'^ˆ‰“|.Cíô!~Fsk	šjÛi]/o™oÛŠp2H÷4¹HñòdÿfÀ£Ïh •àŽ~À&0â(6"] 
X¥£â~xFÃ9¨Ž|=ÑË	Z+×<Ðèôª°!¢6·7¤uªiy[Š;ÄhK¾K>p[t·x[cj¤uÐSÕJ¯<Uª‰g¬>Á®?—¢w
œ`:y‚° :©cd†XÛð´­€—’åL«Ã+rŒþdžñ¸*êÄ®›jtLŸÓ762ç'³~‚n¿/ Ö3ZtKWŽã^ÌT0ñÑfø\NMGñLù+àÔÒÅA±®+Ý‡—i†åµ]¡æYZ¥ÁK;!%“4„™%’kü´ø’ÐÚ·¨ºþ^(E®µ½Ý´Ë"¢èÌ@­µ¦h?&ê¾»jåP«Ê?Ç^}UÏ(ül<Ôø§°¸}_ÎÓÉ-6ß„¹ÃÏQt™)tUx8›YÝµÁm@Œ; -×"( sÓ2–p	èdØ™àbh¸@¨Zß’ÐÀPÅ¸“Úuš¢™E°Ä$úõÙu4]LÒ´ÒIŒø‹ã8"i~Žq(µ¡+×O¨4²1ÌÁÜjÿð¯j)‹€º’Ød‚OiÈÊZØ„!UÑ-~DÐ¼"ä©²
—H˜:BÝe?Ðªî®™ŽKñ¾àUÛ!þïž“À„Wñnãæ7­V¼ug« ÁeP¢Áv¯ã&21XãþÏŸB`°F-üŸ›ÄE{¥?ï®óó§Ã%> Âè2°ÕµÊrèT%àžÍ"$ÈÔIü+„ŒzÐ_áP›Ò2Sü{Xh…ˆnE©Ýj „Í°Ô O³Ëjs±de=ÄÌÈ•¯=Ô„!Ô€N„•ÀO‚jAåfè©î%pe°ÓÂ†”S¼‚ â±"þp)P1šãRœ™µúC/Í3æ7¹3C‡Ý÷ÐdSB"FQ±z\½òýöu~\üô}½n×æËyèG¥ŒÅÚ¯Ýìä´ßßtå2®­
]™G.² ðÐ™éæFÁ‚¬4íJÿìbà/Ò²ie4ÊXÆ’êzqÍžö *â_.Î¨×>õÁ-b§H·ŽwÄR¿)V‘K$ä¦(‰Å¬]P¸Ri¾Y¡ ¶%~Þ:)K‰Œè­¶¥W§ ¢°Ðd³+X‘úßt»]iÉä4-@Yÿ`sÒû°? ®­Z—›YV§’è'˜b¨F±ÓzÅÂ)Š_¢Èé=Œ¨þi5[¯l½Èe¶Àö7 ª¸ªQRˆ¸X8¾î<.…¡ÿŠ:Ã"Ã(n””ƒ­—X6C˜ÓGéàÍ
Ö÷ÿWÀße¸Ëþyg-ØAÍo	ŸíÜ·ó"ô¹«•ó-uL£ý^é&`œ.§Ù )˜™å }z]êôqàn§oG¥Ð|¸
u#¨—Bím™P{øÃµç…€1y¥Àæ¦@0ôÏ’w+gÇxM$Å8ö6ÞŸQ¼{<®ç3+…ò·fÄ{Yˆð/Þ‡=ñ¾­"Þcm$À?7yÜ–m¶ŽÄÛ>ì‹v‹ànÖfU7º-ÝS ºÉíƒh Ê[è¡ÇáÝþ<<rzXPÛ}<}ÜE/œ›¶ydwrO‰vKµZc9@U²ÙN?«fÛ==
ßG³ÃŸM³ÉH¶ü„œ¥¸åf£)µ»ÇŽS7m¸Y›s£íZÒ[ªõ½ÖMð;
[.ÖÏ„À…TÌ'3£DîØ[£"W~· µ«ì ‡o@¼]	°ÿ~UTÙ›dð¦¸.fI K^²O_À'UAõ)Cm¹ä…àü|h8Å}D‡ãÑ$"Ä‡"|~d¡´šb®ºL£¦âÇè"}®Mõy:{ã€­Þwðìò‡íèð9EÚW‡ÎEÑ—O¦coŸL4Ÿ£CéÏÅÂÕì7íîxgS„1ëÇxÄ­Nðû×œÓ±ì”;°òªê„ôkuvC‘Dêã{°xÑ=%ÅÒŽ<¯æ`ÜÆŽŒ\^Y©0{›F7OMëËí(rm.M$¦À©}Ö«pî9¾‘~€D·Kåºç¾‰±‹ô0zî<ÍbÉ#öT‡Þž ß‘gØó—9Ÿ¿:	û± ·(Ú+9¥dè~!d&¹Î’‡²Ó³O§kÍ|8GüCçËÝ}ÁÛâ†t]"Ïè…S&	iÆ!9ŒŽØ)»(ºÄ)Fÿˆ¯ }ô¤È…K-È
Â9n7óÜt—)Ëe]‰q‘Ù‘õP:â¤‰ÖëÑ—®ß¿¸!@ž´9ˆ·Ç¸¥‹|#jytk³&POò¶™É~†è6Œ38Ž0dè`‰fÑ4é~T!ÄT‚"
 ëOGÉ4£¡t¶Z?ü+{'±ó–Ì•„ÛØ‡ï‚N38VŽÖ2ôæºŒ±^'¾<ñÕyÒÇƒº÷ÜK÷7áa38ÙŽ2öæAo¡)q¯)ÏžQìøõ@¯^[n=×I<’Ï¼tÄ%
ëfL„þÙ¨–¥·NœÆ—<(2ŒLð†=Å&gÔppl¢û "RP²8`	x k\?YŒ žÝLŽ/cxè¯Þ‡E]Š£ž™7ä©÷cr¹ô-p	î=kbc]ºžœÈé„%Á€}Ws†¡t¿.s¸n"
´·’ÿãS=†î‘n¡Fuû²àXºµ¡SjWtBs´+‘x&îcÐ„“£]öÕ¨±œT«Âã´fÐõÒr6ÍÞ©áŽ3Bn–~¥ÒÅnà ·çR¥à:—¥@ý:†µ/¥ë?-èB¦½÷$6û#*…FÌƒt£(åŽB–5Ô}6É’‡|TÇíº |‡Fµ'BcE 0ÐQ“gûa
zñ>áì‘Å»Ÿ”²ŸG±¸*)wÕ9Þ’]‰&AI¿ˆ:—&QùË¢“mBf#Þ6Lðî0ïþ)Øs Hü	DbñL^›‘8ŒÞ›8)KgßÂøÅÐ‘¸äÇÝcDHJ9ÏŸ¥ˆLÉ”fÀsdš&kP<Il]òNsyÉÇçéLIœè€ÃXjv³u­“ÂÃô`mÈ[1Xñ]{RJ 
ë'èEsEn¡<õãâo½ž4¥ÛÚ%Ð}zOðÎå8‚éŸÜ£qö¤élÃAÇÂêNˆº	Bæ5ð7Æ òCæ1²¦]çX«Eïº× úÉo	¢VÈÃalÄþœ,†g¤ºõÚáOØ€ºs›ÌžÌ4Ý±B†Þî¸³­[¥KÈÜ¹±áa|•bÁyÞÊs%OðRÄ±–ïù@'àßf
°À\ú$Q¡Ÿó¯÷Nµ‰±J(ÁæfÐh4y/x%½àñ½ÆØt— O«œÛs¹;r¹[rî;÷Ž]Dð^‡Ø€Pv·Br6‹Œ(\-Yûõ…u§$
éý–tØ8¾Ø¸|ùõ=ûÙ3¼ÖJÑäZúM’Ñ†–E'˜øð“çÒ°ƒ²4)¢cñ¦]™0‰$¶„È]ü²Œ2“3\!gèË9Z¡Î‘·ÎÑ
uŽ¼u›e™d*T—`ð Ó3Çô&­7Ág•ì\’g”¯g´¬žQ¾¹É¼”"§‘Unå–e•iìJåÞmYN™ÆÎ)6bË2Š$ŠX1ÚäHã€ó’	Š«ñ&†QY,ôØ‰×Íz®yf‡Cv¢ÏëÃð³<â é’Å¸Asø‹¯ªBqË!{*]µB2}&ˆe„QÍ\ÒÂ›“®Jš´Á"-ô’6º9×F«rm´„k#àÚô*OÚÍ¹6Z•k£%\…^Ò¹uÖ\Hä=™”'5‹>]Ô[<üÊQ(UË!öùø×òû=ƒ³¢@7þ¿È„áÿGÑ5Eÿg ‡"©²Ö Èµ'TYB‹­Q”èO4e0v-GàâûŠ´áQ1u«ÞËå	—åé9ä	¥*¯¾=ŒaMQŒœRéEª\ÃÈ_`¥vŸ¡yýƒ§€ï‚³:8øájÈ[–6hK?{€ˆ]0ñ =Qh£ïûB´sÁÄ¹¤É‚´hã8R0€"Œ¸ÿÖ®!<;³Ÿc¼dx™q=UÁ8š¡™èV!É«¾ÿŒ0¸ø£záÏ¶©Žsåj€%’NiMÒ%©*?þ((xDÔ‰D4F‰Ã¢W`jXÌÔ][ö5½ê4SEO‡Ï¬ßf°>Â³øuÛie1—°(Ã;p	Ë fsL‰c8ŒàKmd'
8}åðÿ•=4foºÇóxê màÒâ»@ŽðuZ°”ƒ/ß@2È`Õø+üƒÉúÇ .»æ)1äC.1äC‰Öú:j«pÍÃ9üÃ´ÙIÂ|’ÐIBšÎIåÊñ%ÒÑ²}íêp»:Ü®·«s“v…ËÛ®Ò®p•v…ËÚÕåvu¹]]nWwÕvq%‹ÔK[äë‚V¨×~úÕÌFsÔpN15qŒ’ÜLVâµüÞáïÔâZ~º“S¤]TdEE¢¨¨í#*ôD…Q¡ *ôú‰2ŠŠŒ¢"Q”šNÞZóïãaàÐü„Ë`:6¾@îaSÇ½s	…ÂŒd‹~]…Ø7BÇÝ;èók+Kä9¦,»qñA¿§à£`“@›eR×ÁXÄêO(Z4|Ü×)ƒdcÃ¦¥õ¦]š÷Þ'4ïQ:£#5D[¥p™3z®pî“ûfÆÁ˜·”xåf…kû_nœTÌÜnå8¥\µœ¡¯Þ¼eq¯½Í*-`MœÁ§èà!ŒÓ©—ºš¨Pžæt‘W¿®v€ôzp½ƒ„¼uº‚]0ªœC…{ÆÂ×¯œ8;ONç%(iV["¢¹jÞxp<Dè‡<r£o‹ñt¢7Ãi?Þâ‰Ó’¶Û Ÿ$[yA»P¢K+Ë"¸2úeòµ€àïne™G>éÐÌÇ¿½yyh–žÁ²‡wCØlŽ¿:;öWßœg£Q?UA·ƒp»…Õ¶Zoëtc°ôð#‘zfI˜{›‚UÅ'T}¯Ÿ)jÏbfÔÒú.yÝü«ƒhŠyéNÇ-gHÎÆXH¡4R ”U]êZ¾>x¦ÀuÛyç‰.H×"Á[¸¬C¸RÅ/é Ãò[‰H˜ím‡Ù…Ô!ú‚Ëz°U‚¿`Fì6){ö^±‰â,ëÐÅ,tà0 KïááR|»¶"¡yÆZÒY"šíUzÛ–´ýô´3lµÖj;‰„¿íá»¶Ý"ßí[ØE¶A¥Œ¥{¿ú™† ï… ?‹FèúÚ€uø¨1‰g ±à‹$Á$	>
^P¢àPDC^Ñ!pòçXR £OñÎÖ$Æãf‚ý›¥ƒs0a\Ôaz…á¢ÙU¬®¢i£CÞ±R¿‘4œ8ª‡?ü+=ƒ„‡øED„É0­ý-ÁW}ñ¿‰èy@ÎŽ N~OÇ°6¨Þm´CÉ{ý¸à²"ûû®ŽýÝntïwðû‹ƒãÃ—ÞJQÁ]¾—ÙÆé0&ÇÌèÙãÄVy³Í…ÊÏÑµfwÂmÒ¬úŒ/ÂA?<?«û£zðÇI=x×ƒI=xÙ¯xNq^)R·$qt=ªÁ¬/C(§V‹âÃ†ð%xÎáëðJ,îa¸»jx§ƒï;ðñ´†Ó­ŒŽ«@?¹±ú`ƒ /+W:	NGéeoÀ_`4·h4ú³=(W"£WŸþøÏÿÏæ‹O~üþ?ýøÏÿˆGt«à"Í98.¢°Ç£”ÙàÛE:OÈ;µú©A\û4ú×´*Hb’áÝ@Js#¨lNÕF“Ok+Å —øc«ƒ£	p"¨¦WÉáP…ÏFÙ†ç3¡ËÏÏ£ÑiCÀ`A¾¤jØ©„îØ3‚óšQÐ/Ï¯ƒ‚1«†lƒî‰Ø2št#Ž9Â‚ ðÀÒf¡\$FÚ‹•?6ùuÈ“ZÌŒ€Â¢â|GŸÖAŽP¶ÓS%@™r_œáíOîç%øˆÎ)ŽªÌGBÇD00b¬ÏÍ†éŽgfJ&k8)9ã‰ÍEÄc¦•Æÿ$^ 4:Ê@b¨|NdxÞŠ˜‹46V|>¸Ž&*êyöæzÕ ç”ÏŒxNŒpç*/Öùƒ=Ÿ¯ÎÉyW†æ4BžoyBž÷BoÈó»Û!ÏMgåùeÚèÇÑF–^ç@L)ÄA2,’¹VŒŽ•\ð¤–3F	ëË§$r–lRÑòòƒ!¨¦.•‚ŠJ›ôQ= !FW;VD†³Ë&»(;3ÌAµÌ3Íÿ¿óŒÃÏyæáï<ñwž‰ø;ÏHüg&*ÅˆƒmD[/QÙÜpwZúñ?þï<+1#…»“Šƒ´b†ÓU?ˆFu(Z>ÁµŠÝ¨H8#˜[ÙÂò:æEfjö`nV§9Òq’Ãéôº1d”ô÷¤i?¢FèÉ‘U£¡s>£8•?jÕÇÏ8H™ñb2àä ûÍ‡G2nˆ} ãèî¶9RÖˆ.«ò…~†ÇÁ¾”î™<dÄtìM7 t3 ÚI&‚@?/ÌŽ(d½Ùo ÉïbðŠ	_‚BJiÇ®]èZqÒÓhzþ·Ñê‘ºz³QT<->1GñI.º7Œk§óIQÌõ§…mÜïøMø3…R{â 45
´òiŒ¨ïê[-ì|¡¾¥åò’ ´´«n´›0K¿2ÙQ€ZÙ>L&ƒÆAJ^¸ÔœhŽC”\€“!é,©ÁSÔýVµØJ”–ðn ()‰<­š n¯E Æ¢Š"GQù0Ô5a£>4–^°l.–Å\§x£3mµS–h"#î÷S˜¢´²æ)‹—WÏñ^cŠk¼ôDÝÂÝ”òÈJQ4±“Ä|ÛsAäŒP	ØZÒEvKŽð£0T»­3ìNj•_ÚKÒ’^ñzAÃ—Hj‚þéÎ˜–«›a|J.ó< €Ñ6ÅÀh¶{ÁÓ{x/a˜Æ¸ñ1ÄuÎK¼J©0«ƒk'xÎtI'“xÀ×5}`‹ü¿ÿÇÇèJ2ytX%¹w y“QvÞb\7Upi×'SZ¼ÝË¬Þø•be±¹ŒŒpeŒ·%‹q<ü€ñ½£{¿·ØÞ"²÷²Ý0o|o3º·Ù›âGƒ„½ÁÈL§í;atO½ÁÛ#2–wx·Ó×oÌØÛ§Û§ÑéÀ}'¢nßíFþ¶~)§õiÐý¦³Ýžæß¢ß;–Ü…•Ñv+÷:¥°XsÿnØ1jÎóî¶{=k£ôvð¨¨+E«'‘íêžK‡£‚ï"§þÛ
:Å—f°øàùHÞ%1¼±Ô¦ð’àÝN<»ž|®Ã”©f‚|O¼íÂHÛŠV|ZoØÊòÐ¤N@8AŠ¦í -t¢×Úw¯OšV<kêeçžº™ÍðÓŠ/žHÍÞXy«†™æž.û—Ž¶)-)é—*ÅŽW$gbD+AZ+TžŠÍŒ*Ïß1làˆ¼sä)¥=“IžP«x‰7ƒv‚óo[ÝXìcœXÐžÕø1ž©Ú(–]~yB2ÿä¬VcÜˆ•wÓÁÙîúôD>FñMËwÇzØŽËg¤·¢ÉÞÑY—…“§GêNÝ_ÎD™ÇQŒFDƒ²‚o¶z²ZAcFækÝŒ\™,Æ}0Ü¾.éugö\¢Á×’3:¢%Åa+íxÎfÈCo$^Ùû9Ó7ò“…W Jâ²;‘ŒEù&K9ö“æ¨ª¸$èr_ûçKº©°ÆEäÈ–” ­	ÊHëo©¢{F°Os²šé»Š…‘³%eù¸¦KE§¸WõØ]!XI”,¢féey÷®º»8¸¦¢¶‹ÈNëòAp-#Ó¥ta½ƒód4$Î*ƒ¢U‹y‘s=S:ÿëÔtãRçdÆ+-dB	y‰Ðâ(öHÑ°ôô{AßlnðŠGË/¸ö-ZÞÇ6É)ƒe_:»ÎÅ‹þ«M˜an²s(Ä˜Ïeö¦—¡$·¨NAQRz¤‘¦"XÚÛ4D

CKÖ‰· 5Æ–É0ÀEÔSŒVb,i¦¢iÓdOßìEƒˆòLDÛÛ®~Äåî\ëF{¦»™’³E9àÔˆ
¤P—õ?ò»0Rp>ÐbI¬`Œ¼º[‹;øþtÏtj9tœ/ŽäéŒÞö##ÀÖ:§¹a¸`óµµö0c÷Q€q—J„ÎEûµCX¬½wµ`–fK>ï¡‘PÙ£Ó
;UñÙ®y‚UÞg+›`–`¤T)í¯Ëˆ”ÏÏ*{âÀ0ØžŸ‘×]šjvî¯ N_ZÈ>4Wœ4B!û#UH»¹µµj!œT„÷ÄY%”öÇ‰*­Õ¼³riâÊž8ä„BÅF!Ýîª…¼H*{ât
y‘…„½UyÙ¯ì‰cU(äeß(¤ÝYµƒEeOœÇB!YÈF«ÙY¹9ûÐ×t‹tf±Ý*(4õHI°°›
7™•=>FsÄ;\Q¼E3òý‹XçÅZù¿ùžlÕmž`|ùü‡ÿ])Øµ‚DêkŸ°›që®+ðÑ‰5"Ð:
ÉðÄÍ–Ž¶Nexæf>B1N´¨E«S=Úã3LNÙbsyÀÁ›ñØÑ E.3%˜ÍTÉOÌgÜÎmd2ž¶}þÿaøiÖÈït;;øÍÞÝ^ƒ“T<ñÎ×ß‰…æŠ™KŸ]Mb[Â¢é“j†—§…†«FßÖ‚ÿå¿H,úo!ÕJ5ûã¤åRÌÒÖ…É½ëPÙSg¶dØ¿Ìû æ9å+ú„yA¿crá–°”ÕïÖ€Cåxzb8žV'7$æêðS¬–=ŸNi7£ö[V	˜àœh¬/"¬lñzÕ”òUZY|¬ŸEßÖÛ;z­xî¹Ô—³d‚7 bÄ¢>É»(›QoÍƒûŽ)èÂŠ‚­}8Ô+Åy6Ü‘]·èÈòU·/4-úxÌÏA¥Ÿ“JÎ•ÜR(D²¸Ž¦:€ ö€¯‹ˆáè».ãÊLìŽjdS~ïõ C‹|MÕ:@;Æq|ˆ^KUNðâ¡®‹ÝïÍ`&¿%y/Òºr6!‘ŸœˆàêX˜y³Âöiê=¸f_”„åñ¤O2†Ï3ï¾Ø;ÿ˜XQxµ9Î)èóqŠª”ïKÄ'C'›+ámx;®çîz -aï‡=ªÒ;¦ÖÄ3ØKú©$ƒI†Js´(
$g1eìÑÄ®:ý(Ã‹21OÄE]w9.2Ž¨_  Vï.ûâþ(Ù“]¼TxÌh½‚¯ŠrtúÂ!’SŠ^™Ì(J=:TSã£àŒ{7ƒ'ÞFÎE Ž’ÔzI/iºÔ©N|]è14%ZPHï!{”½Œ®™DãB‡ ŒŠe^¤ª[Ðž{V‹îobÇÝìÑŠx÷_»õ}ZhBYAÇyC<hÝ3¦'ßíŸà‡N`Á7Á/jøïh3©¿Ž6~™K_(ýÄ	Ã
IöŽ¯Çý¾æÞ=Ô>«þävâ-67ü6±Ø6rîÏy£Ö&ïþ|¸'8 9†ô»p,‰÷¾*´6ÆQÂŸ¤ùkÁ—¯¾æT›vËUMV=¥ãV¤Ñò»¬¶#U
°ä1¹ÿä÷@Œ]õz»Ùiwƒ ¾VÇéè‡{Z+-÷DeT^ÅÆrF½d?âàË§åTNT†çòâ“×þTÉðúÉnŠ—úH¥~Í¢atoôÝ­zw»@«¡ÑAüã?ÿÒ"?5ûÄ66Õ›/IÐ‘=ûÊýRH	?ð”¿L¡„ŸzH)³K:O$ßƒO>{ùìðØˆdû/2tn?«ÔÉû¿Gg“8Kcx$\ßy7“ì`äÙ¸µÃ»yuyR.|„CÎ‰§|\RÑÎÆû#«Þý‘®w´€Õ§Q­Øÿãj;¢ZÜÿ3ªô‡½¸½´Ú?N¬jñ¢‡¬=ÃU•byh·w*£6ü/ZZå£ØªòQ¬«|2Ã[¢J±·èVÙíUÞÙ¾ÓÞ¸Ur\£Ê‰Uå‹DWù"¼‰GªR±éVöŒJ·ºwºÛý¥•¾ì[•¾ìëJŸjUUŠK®²­ªlwŒ*»wz½­»K«<XXUâíY%;™«JÅòßj'îouö»½Nkyûö€Ù7Ìq2º0ê¤ýP«™¸jÔ‡ñöi«P€¨Â·V|Ú#¹¤~ïÁÃ»[ t CŒÃ,"ÈfFJ}ÉI¸â—Äœ5Ž±œ ÞúFÔÊ¥Ðš[ûÁ?¡Í¨Ò"ÄFg>?±Z
ÐÄ\šÙØsbË,‰4líÓ4a•"Ôd¾Ëb‹7‡þÙÕä!o˜•Æ,ÖûjvÅ¸QpØ*Ë*¶¡òÙ^,Í5Égúti¦o=
«u	˜ÊíÝ¥1ïõQõZAï)%†L’÷Z?9=Íb
vO½‹& B^ê@DÆ+FÎ³ßÑK|t0¬Fõ _=%Â3öƒÝ]HüÖW;” +ÙàwH9u¨üòrfŒF¦QM4NVv¥)ñ¥«S8 î×÷ìLG"~¿ËP"þl8Äì À–Úp‚ï£*ŸIë
o®;‡Ò*±HÍ½C7„ÅÍà:Õ¸Ï ü3¤L;•ciÙÍ¸Üì€ïfX,Žƒ°Ë¾§ ìŠÔ÷TBªŸ#+îqµâç‘Ne/ñÆŠ|÷D/‹™&I%èóÒÄ$˜D=Sž2.MG6MÏŠhøQºj"úÿ¾(ÖŽ!¶2»VeXË<ô­ÁœUÙSÊ ÏKEóbÉ[¬äDýØ›&¾Þ³O
~7±ÀäÀ(Ây7Œ)Lî~pÒaˆ\T!yøåŽ¾øô+Á<›PŸçõ~}àÁo¢QõS|¤izYUƒëAR¬7âKV,x$˜ÕªÕ#hÌ	PÀ·G5qw”žU?­94dóÙþkv%ÛUÚFJüd“Ô+…úæ$oá›ùö­ò¦Š=xJwW±F*»_še`™ÆK_‘ûf‘.n‘ÅØÏÓèiºEfAãÁ¶8žÏdptÍá·|dÇÏˆ=oÕ¹L¨êt*/Ö#*óŸ£ÑVÑÝúz&ËLe¨ŽU>­'uA¾q×óÖ…:à"ŸñÇ‘¹–k¡špÓ!Ì¶Ÿ=±çZi\:±Û—Ì…æ°¦<¯<WÖfy™¹©²¸Pa~:å9³'åyZqF´9"•cYºç”yêŽùšÌ{IÛ¢Nº*%~­ŸÊ…º¯`3Œ×nû^UÌ’_ø˜˜)>õ¥øæT¾Êüÿ(Ÿì¡—,Â¿¡ÞÃ«i:á]<¬}G¿aŠ:5«‘¢Ö×ÎòfZ­ìØ­ÌEèŽÑ—M[S$l&mà‚è Â0nF¸Áõ¹†o
lÄ¦ò|T'—¨á,º<”Å«Wõàº\ÖƒóºXâØÛªŠ`'~'lÒòûž“†Â¦êRkæ{;Ð ¨¹,n”¯ÅíÓŠ™ÑŒ?ØÉ—˜¯³œpµK`Ÿ’T@¿ƒ0DgyÁÔ¢3ï£3&fÇþÜûòX	’Œ“ápW\>àJFÐÃZ½\4]2Õ5|=§°†]§9&™ív!™ªƒÍb»œØ¬vÒ+õnõjÅÄA‚Ž£ÑüÅªâºü€˜ñ‡:ßÊP¿²y4›«¤ÙàœÁŸ“Á›	,»ÜEp¡ÇÌò€"³ÀšF$SK÷tŠ€d\šlª&‹uYta„v››Á'Ó!ÍPG¸;\ Cq¿¹R,Ùjï¶D†7ž¸—FœT“Í8î.n²•íÛE4Ä‹õÑ²uuâ://ÊìèoYåi<‹˜¯V¾5´¼ƒ³ÕæóÕ™ée€]EirO›XAŠ‚#€U.5’ ?C—B±åx•B×¾¹ÎSÊ¦‚*!`T9†jƒÕ`Ûnƒ«‘éª›³xþ©ì…—xw²:mÕƒiþC–»
l€çÉd‘á6Âª¨ÕcÎ€½Ú1ß¶¾O[Í+Nß|ŒHÓ6½šËŸaóJ®×¥E^ym)uO™k²dÃÏ•³dˆÛh„[B!ô jFƒZdÍéyÈÏáµ³ð^{K¹æR®ÝR®¹\ðŸ†`IMÂêæëáUÉ,†4b?I'vë|ŸY ¸Í¦¸™·LlìÆ1fúîRÎ–Ì'4NðØMð*‘ÒñãÚJÂ´UªÐ¼û3¼Š(¤…Æ‹c±”Ï6PÜèúTmé‹mß,«UÃ›ž{k ªºÅ:Ïnº­Þ0Nj™<7‚˜êiOéVƒ4#ÜÐx2'Ÿ\½‹È—ÿü:SÈ2ÈY£ÝZK5â©Úfº]`®5êöÂßå«HNt©×—ÖÚ„ÁeõÛsÇü¢÷°òsHuI&fÇ±ãøýcx/LßžïýKÞãBþªŽ¶·Z˜ëD½­Â%CevÖª½­zÐÞ¾[ÂîvK­•šâÔu5óO­šòë²­òËçòËc°^îâª™+7®{•ìkq9k¹!ã¶§U%üè´T½0uUÝð£æLŽúu‹³÷FaYÒÝíÞË=G©–y)Z}>‰\»u²v0¡R®"·ÂÇJ¦ö¬\À*/Ziížj½e H­s.þøœ?×yŸDláÑwc/Pu@¾H)=%eŠýÀ_{JÕ³„ˆ_k¢óv„Õà¬_Înì£;N'eýe<&ÅÐÍuÌÓ]C®\ÕEKVHqÇy®—`|m[=’[ƒ‹&ÕuU·X}×­eŽ­Ù“Y¬5««5/Æ†²t_áa¸å”GÛÃ[xæqÌïaßÐòì˜R¼Q$¨b¿¹¤ä|	¢è\•®e<€…?²ÇÃ†º4Ùxé(M_2CœöîÆ­þ{Ù ð6­î£Ègä&qð¥GIh`§ûÒä¥Ë©Çò6ŠÊ3hÌ÷ê2,ã‰—~Ûä`)¥³?G×+ìÛðÞræ â	pF4±Îü) 7Yq ßÏFkÞ@VñI>Ø&èúÛî|¸ðª‚|ùƒƒÂvtV2ô=êdéÆ´j„/óþ‹OÕOs°ò˜ž)<†J½xÎ7i?€Ò*îØÜô¸VC¼¹×o‰ÏúX±)¢ëJ¶£–ïkÉÖÐy¨6Hè\v'PÏðØÏÂVþÕ7köJù¡èÖÍÎ!ùÊŠ*_•}¢vQ=zzðþJ?3FU-Øãó3Óï,¥Cy±ê@\¬Rþß*•°`¦1áb+ì¥VsK"1%• ¡š=Xê7{&nÎU«ê<ÙàÊL<&±«‘òüR=Âd;ƒp	üm½$›:ù$ÆÔ¶$ÕÆÒTÒLY=‘ePhÄ¹¯N ËÔ<G£gñDû²ýŸ‘£j 1ÃñÏ‡-8%ÿŒ2hAcï™l øîêÑ/ø~/ŸúÚJ}m¤¾Î§Q+©òÛèÐ+„«ÅÝU(¾ÙÈ‚²q?’vÏwdù0·c|/UwJ·a%ë6vñ­~õÖ¶a:?æH…8_XžÃ 9ÙçÙ=ôÈ÷ïŒ²k÷ É}EþÚØ5ß[ýAþrƒÁ‚®#Ñpl™SµŸTF°ËÅ‹D1ÄyÖ,ë£ûÙ"’GœTÒvB§æxâ¦3âùœÈyÏ›oŠ"…)¨i7ŠºTñ)ô#‰™‘¢VPÐµUÐµ§ k« kS­è-Î”¶Ø÷r¯ë¸P1gKHÕ_—-<ÂCÝ[†iÁÜñN…n¹|ƒj`fŠÉ+´Vå_SŒýð­õË’•]_—ÁfšKóM„Û»Ï5’Ì>zî½€ˆ‚~äÉµ*Óuò­Ú6höÛªÁà3Á]÷ßªóÄÎæhyN-·6Ô¢Û:ŸVËxqB-·Äµ{&˜«†f­ã~ÁjWV¾£*wë“JI	ÂÒØ‘…9°žÔ	86‚*‘Ž7KE×íOã+ìŽç°¦—¼aÍ? ó¤–k²=Ýiöã3A˜ùˆ9o]Ò9u[¦–œXš#ôæPœk7PHÕ-”wËüm2´j#ErÕJÝ_Ë3…™ŠšJ`Ç§|¤â7K/µçœ¶‰žªËN_Âº=Ö´ð“+µÄ0tŽS¬dN]µ[}ëÎ€„Ÿò­µ^Q+uâ‡êÄZí“œk}4^Àôø,¥:‰gÕ[|ƒøV]ùª«®ý:yM·Â|>
ãÏfx®œO;®”…ò@×ÓKOö]»U·œØd.Û±k×¾—ü›§ðûß4ê(n@ÎãQÏçQ_ã›
À–g0oÿûã·2[c'xŒÉáA: ÎÁ¢>”P!^Ü/¼ä ÁNŸju+VÂGxy1Žxúâ¼ÀJb"²ë	üÈºÚÇé$‰~Vh¨wL4Ô-uM4Ô³(kLÏ£,ö2×ŽŠ¬ñ_`àHN\k<H³Á¹—w;Á‹¿ÿ¾z†›OÇâëÿËÂðë?ñ‹Ç h´ò}VkÍÀÄÉ”@1]WOcj
}Sœ£«e „j‡p1*{ð´FîÐ"V¸Æ\å ÁhBâ|<ƒÄ'"ÆzþKØ]Œ¿1¥¸uƒ…ãI&Äˆ°afê<"&0/DdT[3!çX‚}„ó:‡Ô½tÁ½D	_`¤€[©+ 2LMpž^*&%V¼“ª2‰„mŒ±	q¹1Æ
Qøºd€sô£MÜ½1:ã
¹2éÃî¨ˆ4ÅŽð‚)L)È¨Õ§ƒêIrBC†	tIP à 2M‰5jCõ#!Ú®&›JMÆÑYÎ10Ê$¸5§§§–XJBG¸ôŒ¯F
×¸²jhšÑƒ1ðŒHB°‹ã£Ñ"ÕöÍ"C,8Cµ‰A:e-‹ÌGWÉ¦$9Vƒë$†u£Èšx©SÒXÙ¨jŽäB5ÙjP¨ˆ~*‘Pþä,]sšX¨øÛ€B•¯}H¨Fð™Ç?½ãÁ?ínyñOïtÿ>ðOåì9…Ì¥Á!X[‰á=ñ‹HÒ,;œI•†á´“Œ¤Å5|=xLÿî.jv-½Ï£«K„KŽæG“‰*!£0#$iÒDä½Œ(~–¨ò	dÕÿ×ÿó„Òµ7_é*ŸáäF9ûéìy‰ÀÄƒ7TŸ‰ÉÚÇÀÚÌ¯	("T@ÇX?Oo.#PŸu	û-´¢Ô† Ò}.ùÄRæØŸÅgr2µg%6)VŠ¡6¼šŒ™‰'­§r´iP·ôó¹ì[§bWmbOéI­Îý…žÒÄ•Õ/€„Áš¬°Åô9_M£If5[G~yüÙC	Ð€M:Á}:0íÇªÑ|“ÈçØ5O˜ßh=2\×¹yõÜ\'ju Ô† ”À`Í|„0Ö9(AïŒKØ§Œçî™t	¾<] Mðåó¯k«¢¸2Òj·§FìiÀ-}ñ{ò"´@@'CÔKú÷‹ÇJ`ê5 Zo†ßÙiˆ„ßy§•Ã)íéKñ;1nŒ›,.€ëD,åšXä—A}œÀ°k¢Ñœ'6{&~:XŠd
œ÷0â@áWÂ²y•ãF»ér£çCmÍã™>+äÇ+æ…P·Ðþg	IŸP¼¤QÁZ2XÏ+°S=TÈÒ ±%µÑ;c Ò¢Í€ú\
ûÂPø‚˜Ñƒ­JpP9›FB.R
4÷¿€õãŒx³AZý<¨k)5òÌ`2GQ:³¡"@÷!¬e	à&‹@1jj)¾¦-w6´¦Ò‚‡Âd[•;Å€J3°ë˜t!°ñH¢HvÄÅhcTBÎ­^‹gÓ~Ï.bZ#âªJK5NMi”Æ.X´†‹¡»b¡ 1üÜY›ç¸ÂCøÏ~–ÎúqY·Êª¨o¶zþ¾1‘kó]ã(G»o¬yÛ„§µT¿öT†[Df±ó®…ÅÂtÛi|IôMN0ËtÅH,Á@é¾q¨Ÿ‹U'-bÅ˜Ëñ3­n£ÑetåG)ÎnV½ËÏAõ-$åÆj¡7ƒ6HÇ8-…Ð·hV-Âî¾®aÅÉ«Ôw†h›²‘O¢>©·Ó4tiBÑJG×„O…Â
&íùõßðián—uâl|ýÍ  Â›ÍÛÁ‹0¸½é&tÀP)ác_ÂébF[¿´¶»@•ø¸ãIY *ÞÏˆðÓnç´ë—¿ «þ‚®üÐU·~AW]Ž®ºõºê/èªèª¿@ŒZ£[ïb´?Ÿ4P¥ÝXÅ¢â3™ºíð”7¿þ6±o-DÒÂóaâ‰ºÐ¼¸hn5CX~)y·¸³sN–ýw6uKEai³qR™ýföof¶÷Îì/8³¿àÌþê}âÌï›"ÌÊÎCc÷×òéû++»¢üD`³Y2þ@X³¸†	°”MúÙôÿ«=t%W.ø(x*6œ_‰#àŸ
j®Ój	¨¹;-…Ü×SPsÝÞ: }j®‹ë?Zß¤Lõq!ª²8|ø05`†âv(3´gB!è}ÍÞ,Åò¼¯Ùž}PŽî=Ô'é9vHï¯%¬“+·YbA‚ÍÀ$ Ì“°²·!J¦Ay“S-Ïznf}¼rV˜b“óNe¯áAÌ§þ«×K™5Í«g–§•½OÉ@ž®–›|†2ï!ýòå\C Þ?†";9à©·vtxyCD¿i)Vž4)+{íöv3DL°ŒýG®Œc¿#X‘ß¬iì`“•6p†‘Ê^'l	œl3ûÐ ’†Ýp <m^éô&í|3¨ìµš½Ë˜Ç‘üôõà†8’ƒU ’VñyöñÌOÏ¯Ò˜Œò®8Žöç¦áø“‚MrgMº6ð³è²h²Ø™£Ë¼Ÿ‘ß‘š½s“,Èä-£W	ùïÌë,]3êA:+ð®“á-
–ŽÚðŸò¾B/\t'` :ô¶$6Êf8±Á
Jñ·Ðõy†@yÀbà›¶|´±ãÇ‹üØ€WÄÖcÝãh0K³A:%7†l1š4`¢ŸÊóz¨š-\!ä!¼Þ"F—•lÇ$_|-‚44ÍàÃÓSèPølP5¦¹üÛ“ßÖðfø…èæ1)µk¥À­þö«‡é{z|5“û¾:–×yû]ø6xóúA€eáù=57°œFöí½²ù{õ·¯¿›³·ÁWÓY:…ü
ïwòò¡7 LsšÁ£`–gs‡^è8Åy¤)ÏO'ô­`'dÑ_Pý,Éâ EaøªAÕpS21OŠÁõ(!Ïêo__ÓË	]ù‚VgÐ ®˜ÃÊ.ž\rc¾l/6¹™M)¥4JFhsË1#3b¼œ”›ŒÀœÐËäT£rvJõ u¤ol1‰–‹œŸ9Éæ=Ä U/UçO‚£àäíw¯ Ë=hÅ¿…yxr‘Þ¹³úÛ§øÞ|@eoqç„WçÂï¤.G‘í…éÜ @koDÙŽ9¾n/	íÁëÿdÕ~ýÃ_•áK4Ë¿FPÉ/ÑÊþú‡ÿ^#Š×”ÒÀ›W?ü…^cb|2y‰!m~†(Q Xý}49øOéL¤ø×VÓFVCÃ	/›,¨²íÃÖJ†V¿ç©^:sWŸá0.^òVŒ¨·˜–Uºë©TOIÑÜ;gU'i0‰çÆeO@KÄÙrôÊŒ…1¨¾K”Y‚{3ÜPcéÇ}2&7 §éÔT(~bk–xÎl¡ôÞpE•o S¾ÌØ¡|¥þG9õ£¡Iyö—=Ž—:àhÓmP“õA>‚ä2xDz|ÆY9ÒçC‘Lí{Hí^ó´ƒˆÿj²ÆL•åào]15Z1Oi„:};tè3œøÊ©kéÄTI¥€ÎD…¢[p%H¾rt®`‘jf]òÛÚªmFÜpµ:)'Xl#¼”Ãžô¢®óbˆgæ]9C±ßˆÌYví$ÉÎÒqÂ“¶ðCôQú.p¥oíg\4$˜/}c¤ŒÞÑí‘kÛf`m`>­©D¯0J³Ç‰¤8>«)€D4€vÈMa§ú÷ÅãŽ._QY&D"ìgè<'ÊZžãh$ËyjFßóþ-šø\JÎ—ä^¼ð¬­fk;lmé¢^Ey1E]Gàû%^DC«D,™ÒN^ÏâSÁ.ãñSñXEácâÑ<züã"6 G‹â«Ò»rúbßð1´ã¨–ôýt@jÚ§JÒæºÒR|5­6Tµ£{“Œlî_‰þš}~g…T'mè2ì¶NÝûshu õÔF¨fÁâ1ý½\òÇ¾äaarîv3=ã$¯Ê·eV²^‘·m(+ÆŽÓxìtƒÞœã+B‚©^%5áxÍ:¯¼wÈeÄfc†åVä!•æò¯iÞ¢À“É02Sƒ’°Ð5 –šY‚Gw–7º™9º¢Ì*×D2¹Só—¤Üº©$Q”…KŽ…ßî]ñÕÅtS€#&ƒ)q‚ŸPÀª8›¿À Œ?ÖŽ1Æk”	F§Åõ'AÙ qyJb¥ùVoÇÁ‚õÕEÁâSÈ´‘	ã }‹z{`Ç7’½aQáÁ¬“Œ·ÓýÊþ”ÒZÄ#-Œ8³8„é0"XZUg‡6/Ï­<Þ	ÕªuI>qâ …âŽ×Ë²l¼«œ'åëw¥£æ®m¾€§ƒ¥yß<HªË³}ëÉÆ‚K³òÞßÚhªê,v}0UÃÏí;ª|ƒŒIZ‡Ë[§j®FÓS3_ÆœÃ7`E² 2ô~=~Nðvã.n c#í•MÒKA„b¨±ç’*·ì1>nhzÿŒ{x6ÇøIF7¼…ó®y%¯züS@QçN6Ÿ×Ì©þù'Ï^?ß?6¡ÝÛWéæã¶ño:¶ïÈ«Žš°—ò®Ñ¯ÊóµvZªæÉÛH’}öŒ‚×2d&€˜›‹ŸÊHSs{ÛÊ}ÞþRå‚þ‘²½ž8$
»Áïƒ[/Â[ÁNPÅ[!>xLnA«oÕ´êC#o‘€¬Àzhl¬„hè~¤3•ÞÆÝ é‹óU|$GXÓU¨f‹€†6žÓvü×²xÅž° xÝò[Í»-3åõÊ)¡UØáTƒ48N‚/D°ë=	`a8›/¿ÖÓ†Ùˆÿµåàç„#‡qC1RP Cñt¥'ª’àCÕ¸ìî)ú¤à¸É–•ƒ*ìF<QPˆ’ôEMx«Sñj%*xNsˆx¥Â·¶ð™KO¡–ÖÇç·j¾ˆR£dðieRyñ´±K·b”¸,-ü|ÕÂSáfkÅÂÅüª¤»†}[,qqÒìÕÖhÑz•º[^‡<á_¥C~TÛðª-<ÁvµLÙBÉž¨ 8R¬ØÏàF- }Õãl|à€yðt §'ö
Ôñ+´Â!‡„bkEÈô¹²?T„N:"­‹k¿ÉüZ«KÃXq'˜(¦6ŒeLUtêÊ%«§Ò×$ª6˜0¶t’h4=ò×ð”«“µÝ•Ó€±ÞÍÛQ®F~ŽqômÌàYšNmfqt¶ýÉ£ VÁÈzØ ËàRg(¤^Út¸ÄA|VÙ

:;§0Ô]Óà(°îxFa¨V½†ä&ÔŠ“3F—ÖöA¹Í‰†Í	ëI×j-xãåÄÙ¦¸JNxñ¿[¸Úw7ÀhÛ ™&DÉñ8MaÊ>MfžßãúmÔ«HìÓúÜŽš¢B~XôÀz~2Lû%t 9†´BUDßÖé54±4v1é=õè1=Âµ¸õX¨ÔP>×z‰ÛÀìI:iLÏ¯3
°4‰Ï„Ù:#3+ÌoÁÓšE€'Éc3I~·¨%·%[÷yÊæ2O¤bÊãô6Ï>¨__ÚP3òüÎó’Ï×Ø¿(€ôWyÂ(©Aâm±s)s˜õ}ö„ðÏÄ`–¥e³‹ME»Z8šk2cÝìb.û%fW^LV!ONþ§Æk&¸æ§†j†…&Ì£4ÓSBó§n¹Ÿšå~ªËýÔ[î§v¹ö¸HNO¹ÀÔo*)Ê’ ÿec:¦ÚÒ‹x‡ÄŠí‚cU6²Ð.ƒ'cÏí•Oì;‘úDšÑƒy%:Že:yªÄ¦ßÿò_jëSE>S.Qk‘fAõÇùß‚#ÞÈ¼ÂÑ©’SÛ02Žh-ëµ÷ŒÕë7Å®CýÆÇ¤W ;ãxÂÃú¦ƒçâXäUP}Ì8!E	Ô1ÈjV]ÊÁFCá¹xP`Ši<Q
ž~yÇH’…?¦ÝÉ	™®V¥M
"ÝÅÛtkû1íÈN×
ŠÐ O­^Aµ¸ºv“zXû4=P·3‚ÐÉ0Dò pí^=Aõv‚²¹Ý+€„Ó4Q¿0¾n|l©qŠÙy6FG_D¨É ú	õææ%‚Ñ†TvOââô§mÔâ'¸Ýb‹Cêÿ¶-hPDyCË‹BÓ>ª¢™Œ7XÐèHÝã…•Hu¥¬—‰ðxžNÑ¼ûêâkØƒIµÝÝª[øð·ßáI$WMbÑ{[ûê›%…¶u¡Ý.”½u·+ËìæÊloYeºÝ.ëxßÝ¬fçr™ñ1ô¹Õ7òÈ\v©ZÑºNÌ×›AØ³±Pm (»´y·`–*dn:ÙYdYÄ`=åX’]Oö0OÜ»2FðI:•ªð1,1G±ésòq´8‹‹F²3ÝÓ§¨¤Z–È#ÀI Õ}˜;¥àë¾º6ÌbqÛ©»º§½…úÇbÆód’è†?LÈcZZƒùcIÕ¾CUZT9kÏ{ùL_˜™ w& TxÎÜÞ*æ‡ƒ2ñ!Ë¸¥uA¼ø|gä2à8³÷ÿcí
v"bè¯L<ˆ«"«bV=x0!1»1ËÅëDw£‰‚Á=èßÛ7Óa:»jô
¡4Ú¾Ò×¬Vp:–(;)£X±k.-ø+ÓÇrìiK½Ä±H(òd—–[ËLì±ÜZ<ÿ/–df¼Ð˜c4wìXû¾-nÝ|ãÙ?È“3·‘Gqz‡øoÉä¾c—?ÿrù»=¾‰{q3’3™<¬sj9¯ûÿîTÍ£Y)Œl¹É¹UƒI®3å!zÌ3¿%F ¿|¢e tÛHÌ_gêCB)c³A'Ì!ÀíD­5ybBq n€AÑñ’Ž~j6ªÍ XŠÁ–ˆÕpù2Ï-ø'áGÌAJ§AsÛ¡,Ó›¢1ÖÂêHxD|13Ùv*2ã,ZÀ+<þ²n»ýð”¦oõüøTÝÎàémå×YÂ©Ý·€p¦ðDŸôo'`QB FHæ4\úª£‹ƒòE„üwôô²‰’„T½¼bK„Í N·Jê¦„fŽIÏ¸I!DX¯©\kU	lKdzN·mÊ x×Æ c;UÓ¡:g»Ô¥˜±g!¨èÙ6i:¼{Ôf&·Ûw_   ÿÿì½[sI–&øž¿"Š•$ Ä…àM"»y‘RšÒ…%*³2GÒV€ )B $‘Y2këmëÝ‡}Ø}X³yÙ5›?PV=f»ó”û^ýêìOØsñ{x$¥ÊªiY&Døõøñãç¸?†zÃ[P‹Ë¢´çðêÄ„–£Ù‡'«À4˜ÏØÛÇ…ý)Øw21îeµÁO¾¢-“ÀÙEžFü)ì<×ƒbŒŒƒGÄ–‰¾uYŒwOéØ)êËóêå7Î~$?ý–ŸšíÕÆ’ÚŸD§Cq Jž÷Î)=J ˆ-VÇ>ÜÍìap×ùùë)QBŒn…ðIJwã:olMÇyéh4÷‰¶÷,³Q± žØT„mloúû°½éíCýŽ:a©k·èÑgÎÈÌóFfž72ßfFæÛ[t
Éw¯l×rFfž72ó¼‘ù6;2Ÿ¬–;2¢vìó&lIÊWgNÊÊ­zîkô»’íïk˜»fŠ2Õž'$(^£¯AŠQéG–‡oœ’VTðr“Ž‰žÅSxµÈñV¤ÎVÓ`rdpŒ|„&ŽÎäÉš¾6#óçð“{\A·‹›¹]P¢AùT¥“—¢ƒ¥—UÌi 8ILµ›Ö?Ô§¬PyÆLŸÎeó{8M$„L|å‚dª} tp™Þ`Âw|©ÚN*T_Ý”Ðò³aÒ‡ûHC:)Q-sfoêr!ûbÚjÀ€Á_%Ð°0¦mJÓö¦ÑV~þÁ»+­F3#E<<Øø¥¶.¢4àÃDÙ}YƒÄáˆ\š¸ È(^tGa"Ðd,kcoIO¢nÓ™Dší£a³ÑqäŒ¶¯oä@koÈu
1-³6z™¡ß>X¶‹Ø¤—AnHÄ«S¦àDT€Ùt¢Ïû6óßÂ¯¥e>ëõjÆ‰a`¬¬obƒ¿àmƒOóQËC£ÞÝ±Ü¶“tÃ#RX¢7ËB¿Ç¥ªŒâ¡‰øKù ØÌ`v-#ZK%®Á´·•}ÂËŒü+LF0bmž©àÝ‘ðªêÍS	ó ÇáÇ¼fô~Á´r¥‰ä¡VÓlõŒ‚Çh…ù‹ÀF.¡ë/¹û¾ÍB<>†¼ôÆÅÛïð–ö¡À«© ¿ÍÛÏ4d>ÏjäÏ_~U£#dø‘9Èý€§¸UD
/ØÊÌ=5pðÖõ¤|’Lâ0Ù08Å}ºÚs˜çzN’k}@Ôuˆø½>j5}ï0ç=Ìh¾—)ëÁvóP¶Ì@âmÏœý'— A…ï™òË·îq³Œ.`¢—ÿ¨€<ðrÜJM^¶cŸáq¤v>Lìpó‰“ó‰™SìLøs
X#£RtnPyÅ>‚š‚ïœÁØÙ-*ZMcFŠÞê=¢´`(¹úV0rj‡\¢|½m/±'‚Š4Ýs×ýÔ'îl>èä€)[c‹Öc.µ´°ugé?À¸èokæ6ÏùlOÈYu?Xïr•59jÖÌet^ÆKÂ<†âŠÛKb©£,Uô‘/v®ÙŠ"‘Gó)&tQ?ŒöxúBèÙ¯€xÎÏ×*ØeÞè¾ýD«è¾’­m­ðE«n~·Ë×v¸Õ&p±¶†sh_aýÂ<$"§t!°¦üí9©gAk³ë
 åNs²‡mæŠßr7‡¬¦š$É ýnu|ž%³}Œ¥×’ÉáÄCxŽË¢ ]1GUœ)ö½Ûm§™¢9Ì´CÝá5ôŠØÿºjø'}žAå˜c/p2Ngzƒ­YL= ·[ë[‡¤rç:§ÉOì&?Émò«ÉOnÙäÍfA“åöv•)ä…¦ò“N.™	%NÓ™î‘Þ¢ÕÛmK
È¸>ûr7E„€Êé˜65¤¯€:EvrFÊš&­ÅÓäíwÏ1¸mYïP¿­ÍóN·©»ÜD9¸–¿7c¥Q&Ÿgà‡`--$N«µ¡©ãì¶œ“í{ºw‡Oí\¦zðÙ2íùkƒ°ÆWõ~<¾Ö§“ødØE¤!ž%ðÁ0R24›tBàÞÇÂu<LlFÝM&[A[ƒ í³!ÏwºÒh(±+ýA(cø:GUqŽ41»W!ßà¹?;'¡à®@ õN~å£ç†ÝÑh‰ž5Œ¤¸i/_DëÃÃ““Æóý×OON7^?nì7Z˜Óó¼-j@"‘Ïð,Ø-½^o•BºžZÃDwëx¤9ê”E´HW#x,ðTÑ‰Á¨I"„¹,6úâu6ð3µ_±h0âàÆ?%í´f`D‹ñÃdÿöt|iOÖTü›C˜‚0;i¬/ØgW0DJŒüéÿ!^¡O 7|V¾3àI:Õ¢{f<:«!ÀWÿ|Ýý!È­Ú„ü@Š1ëP‹Ãë8ˆ?¡Ëá™ †#Ž2¹2¨<ªL1TÒ£?ÿÓ?è^m©–Â¦¦ÓˆqRtÂˆPæPUÈiGA@ŸEr<Ñ)¡q	t2¨úB‰døú¨«bè¡ˆ¢$#w"ô'Æ¸^¤stE˜47#	&hÃò°ˆÌA	Ž1j>Š.P¥[ÂˆÇÍL…Nìæév_‡ÜÓ£†šƒÕ(z0­õ8š†˜s²f!!0NÈþ¡íJ"VgôYÄÐÕ…’`Ð´™£à 'I•ƒæœ&4?1 ¡u$ô+ìctØ¿ÊÂBoø`¡[^Xèîß,tfåáˆ³s°ºäRP,|kR òíQÈ¦³ƒGcƒùžŠ`-“è4šôù÷³‹±…Q…Ö‚múÛÚ¢,¹½‰•)!&Žôc“±_ë¦e#–|H’ c@ žÐwrÌç*^±P¡+Á LÏxåSP¦@Ÿzo^ÇOÚ7óï78Ža™E$6B—ÆÙJë/ÒÊ¤	¬¼Ã¡œsÌâôk`Ãà9¬jð
Ët%0”qJ¬z"¹ë b‹…% è$ØŒ&½Z5S^Á¯õú xepñ’˜njPdpƒ²ÉÄl‘|cˆc*ÁíËž‹V§ ¯ç¼íÂùfÁ|úC.š/×”^EcÜ‰ Xl}„»ŠÓˆõÞê‚CcvkdÞYßËû5Â	ÎA»Ä f´DAóÖ»0m*ÿökëÕ\$Ø“H† î¤8¬þ•P]‡hÓ¹^Ok¿0+•?ÿËn¯µƒ?ÿÏÿ‚@ÍÍ–”¤ð¡ü+ {ÝwFÓ‚y]ïÞƒ×eé™ùÈP€hïCß}&V€ê.J>-H€ü(ÇréþPôÉ·›É¯ÎçyB>%ÍùÝ‹`ÊÙ›–FŽ!	.hr4¿)½·›ƒÞûéüb<M@Çy^Ægd•"{ÇCvaI¿–èéÓà…¼2ÉÂ¾Ï·:4K:4Mˆ —<›(`2‘>NõD®ÜW~Ój#“¨›•ºHrSòC“réß½9ý©žSHÞe€_‚v`i 4»Å±,éâ¸ÌYc—
ûèH²–;ÔTÉ}˜´Ö
ººPUÛd1(U‚‡¨Œ%Ã	m¤Ÿ@Ï1Fç uômE ƒ6í­NkVñ€Vã–ÔÖ1Ew³ÑÞînýôÙ5ð.%äÃßÖäšŠƒ>S_Lx’·íª¡·kµ‘_@ëQyñô[WýjÂ?]MÂ1Yf³4‰ ø¬ÈæªBÙÀ™‘ÕX¹ÿ[€W6÷`Œ˜¹Újùƒ)/ÀËètþe^¦T,dkŸnd^Wb{š½í­Væ%¨½Ø îvÔ4ûï8È7ÆAîþuà ¤0qÅZ­eq=èvwŠ¼~#lä¿!läs£X0Ù„üï¨ÆKLµŸªñ¿ƒ/jœ²Ý‹x[ê8¸zÕTÕHÇ›K"ƒzÒ½[¨ãI4ŽÂie½†Ò¬ZÈsª¢zûoUycyPå\4ñE Ê7ÄL¶X·ð½š‘Óh\çÃ¿dÁt\ˆ˜[‚Û¹D25˜-o:Ë"	{ØÓ^\21Ó2£µ‹„ ÓÏŒ„—Ílˆ³¿,Ó.°_žÒ?gé8úïQW¾›µÃXÞ
FÕ`œ?Ô7VÕ-ò·[¶òæ …•\$ÎíÆ0Üäe2ŠÍíŸ®¸l×Gßºchq£±åÑÅaíE£6ÛÞHÛÂ\“ÍÌ¸äÏœj³&/3n6û3£ß„?3çþÙAq»šTi(î4kýÑ¢·@öXb½+0·€b ù»Ã‚¾¹£ƒ­;ùìæDºÙ@±x~·&ÎÝžƒq‰Ûq•Ï›ÿÃ[ÜƒÞ’ÂG `xnÄO²ä¯!Ú2‚ra…icY3íö(§fw4?œ°U1
K8a	'Ü2ð™Ë 4sñ¡´?. °@Ð\xÍ_D8S#ÌA6“¢VÆ“`EaçÒ‹ÖÊŸÚs¥E˜»NyNAÍâ¶
JºKš½˜Î"ž®%a—ëíÀËƒ¨O=AäÅÄ¹â‘Ìuÿ“tœŽ_)g‰cò†ºèé¢Iƒˆü^¦ëÛ0§¶K§nmArrß(—¾½	éé¬äc“T^#PnwÁQèÌWÇÓ/¸È"D,eá+²˜BT<Ø¬ì)ÏÛRÊ²_|¤úZ„ë9TÞ4_³7d¼R¸e£Þ^ˆ½K
aÑB ‹bÔ?YVzö”SÀ“ÄªE;k©¶eZ
YŒ–²ÃÑœ?^;IÑ]®Åh§òƒ¾£EÍ,b0ÓËEW7lßš-ô ×+>ÜÍÆÎ`i¨Vû	”9† Ú¸œmnãñ0Æ‘jwÿí=xß…ÐÖ‹z¢µNÇàpâª'ÌéBEd»ŠÚÙÜlÝqão–o³¶nþþ8MSì8_».Ó2ffÝ2ü½Ç¾GŸÐû¹ò¡‡x›JÆôÖàÞy0ÞòÐ´xµç„‘ºo;[XÞÑÂ1ãsòÌø¼*ögØIáóJ³Ö¬~žñÉø\;e¼^{…NÃZð—¿W?oÞ6V¤^i%}ŽÞŸoË_5Ë;‡Sn[IAKð¥•‰õkJ:‚Jî:Ç×"ƒNA´¡fˆç“ý„})žH_
†C“úÏÃÑŒÐ—ÃÁe8êKØhö*úœ	ö9Ø)ãÔvæ"1 °c’‘p_7œ¸É‘Zl
É¡%Ë³& ðy8œ‘³8C>_"€äxOgƒÈô'-Ùeéi*|eAÚ>²œ»Óƒ½ÁÉ¯5FªpœÍ.áÂû;HÆxu¤à½°¬&sòŽÏ mŠðÕtùaH˜ÍoóÿªøìVON½¿›a ÀéÜuý!ú(—Øs}?ë5÷ù[¼ÚÒ;ýñÑáûÛf€¬^QüíRl:hÿãƒŠŠWt&Ãq¢•ú PoÐ9áàt-ën*ßðn°Š,²
ït®óä
V$+@”|‹÷9Hbõœ^p@}èÍÅ¸y¦eo“…Þ,€ÀS†»ð;Úf­¢¼Ú"¶ëy›å27[ÙªŸŽúXÂ¢üÒ’ÌT•Ê/í×lþ#Øu‹r£í—©y»¹(Ûv3“	Äó¢\$“„ô¢l$Û9äg2œ
2+c,S+æ²nQ~–F.tàù{ž3¹y…}âÌñó÷<¥
³¬ÊdãW˜Ô§•¨½¢èè¹¥žlWˆOôOª¥ÙŒz(•ÆlÆ}”:êäÏÓ-dó¨&&ãÕ1x?ž„ˆ•‚FÇšŒë#‹À§gÃÅ›w°ÉJç\‚~Ì–·ßùÛÂWr_‰ë„Á0êÂÔ¡¹È«oìYê“ì§^4fLMGÅÀ›&îJ¿¦–(Œ‹¡¾«Ó‹(Ö_gV@†ˆ´å„¸NäEB…oF:Ûi€éŒ4èÁ›Müe¤Á˜Š\r5x´¢:¢8Jú@ ¢S0$J2Ö<…ñ%»ñÀL“ûÒKø.ú·(Ø=ÞÙÍ»ô?ý¢ÚÓ{µ9q[œdSŸÍ–Œ´0ý´LÕ‚u+9Lz·+Díœä0Õ]”Axè·"ðßóÕar©Æûûœ&S¤Cú	­™jSÝæü4šž
WRbCÉú†î„/x†2åÅØ|AÊR9\	"Ë”òÑ /ÛãÍ{PVh;Þ„ûTª†‘tadÁœÔB³pbîÓŽþŠ•T(nÒº4>Ð×¤âÖßºñtˆP®ñvRYÉkbYµy¬ŸÉ08¾¢Mže
€fW«ZaZ± ú™Ëu¥±7©¼‚³­Ì¶"ïÃÈMßË²èˆ™•C®êÅ}½,Ü¨­×Ü¸Q¼œ©Çõ[6‰ÃYç6Áßr•-FE½§ÑP°î2mµ«(±¤É/WîvÙ‚a^®d\±ËêþrEC†EEË +Ø¡¾´$J3LÖœþL‰,U£oñáÏ¡ƒVœ¬l“e¶ÜHVÍ£Ì›ôNØ>K7² ‡‹ˆ³DÿØóuì·#ilr((N9²,ÈFZébÙÜ)U,j=e‹ec¨¸X[¹á7wEzS„7¥¼ãž³!æ¯jÁyÕ‹ÀÆûÑýR³Þ®œZ rLËö(€üµãâ§Q:<f7Û˜OdIØVíç‰ÎÝ—$¹'*°ä¸ä¢u–+zÀ ™´±8Ç‹†„1F ¬V#Ø¿Ž8¼q^`0Ã²‘íVà¼b|ÙM£é­">‰>UÝZŒ<÷Í<9Yìjj>Ra}Õè<÷òøð’öq3ùˆÃ¿<'ï%Lû‡á+8vÖ8ÇJ-Ë_÷õKõu½š[I!>Ð¶U¾‡âu8Ì*›Ž)rŠ&o£íf‘wÒvrñ5Þ RÛŽ3§O²0>F™¡×·Ï¬ƒ±IÖM±í¢)–˜«›ýë§¾%‰æåø¦°e–ôÔGßU¦¬ûåÊúºD3EéQj7LÙË;åRnä_Y46—•jÁ‚@ÜyÒ¤ÓÝè û“¾tÖÏpmŒþÚê"×µßZ¿•Ð~éZÔA^q©›¸O\£S+7ô#²;¡ýLƒe({³L(Vv4Àh;Ú`lª¨µzÏFéåÕ’JP˜t¼ij†^×‰¾ñ/Áô Õ \áuUo1ß«sN1¨ø‹ÉFÞ¥ËØ#ïæÅU.’ƒ™P•›7»§èÙN”»™¾MÄš ¦øÔÌcÂ¯7_lå,–+qkL=³–¯Á;Ý2çmÇ~•Dû[ª‚;ødê;}+`QŸøöþÝõ)¿µFwÆóe{‚†Ç_d÷¿÷èÒhv2NÃ‘o–¹ó’}ë×qý›è~rƒ:i4E8à£0=¯¼ezý]õc0Ò€",ºï%<½¿YYd˜LÇÞy'$Ãb_l¶,•Ž\ÊeÏ[®6~îÌ[/_G0Ñ]
wÎrobAÁj.Q\6JÁ©êÆ qjJ3Áš øøÌøiÎbÔ2”tIö+˜+F‹íD®û¤XðØ†^¡©WnVèö,àj£á÷u¯KY³oQ¢I€L_ÔYR•ºÛ/½´’VéêJÁìå¦³¬XðŠÖLŸKˆßœÙlö_o“¿ÃálrYH‚ÅM»p¼^äˆt©ØÂU/- !Ä
BŒ‘~¹à^\!ƒUb<æ”¸#¤ØâA&=§b7[¥mläd³rvT”²¦Ê6»,p‡XUªúY8ypAx­Zé -ó3é?”à{HÁ[ÁQ2u†O×5Æ¬«Âú°Ež2c_e)bTòb-6[0ƒ´Õ.Ãf•‘ë<˜…
BÞŒT‹¨ÍhKzé”‘õèa˜c,˜_(ºÚ][üÿ§–\ô{pK¡UÂ_¨¹•TÌ²;Ž¾í8æåñLÊY*ë7êWa?Sõémðb<?¬®x¦zçéBMí#Z¿+¯"ÐiûöXyþîøâ6ÝqƒPïbY1£n†¢à:pÑYl…¿6p„Ë4OêA]D]wQ¾>ytü*è'ñÅŒ]Ñ)üµ¾œ8IùKQDðå,ÈÈ•ÁÌr8~.19Å@·¤#œGÃ¡ôZÇa<j<Ò[ÙÊš
b¼$"÷’Ñ€Ý/¼pýóèÃjË^~0Èq(+ÐmmÐª·ŒïüþâË““ ]o—= âý&ê}ùŒ Ë˜ô’.Áeœb€ß¢	»æ£?~9ÒVh¨«ß„iÈK÷è<»A£†aOƒ6$˜$3 Ôh0“$MƒmŒá,ƒA_þùŸþ©>ùó?ý§Z@3µ Áq^Ö‚ãÃáŸÿéª'éå7ÑcJ‹?ÿYüüOU¢AÃ*¼>ŸDQãû4H&½xª±pÜH’â	to©Ó.]I0z{:Æ`îqIÄ¡ÄÛÀf8C¼h€¤QÖ&³$3€	`Í„òÇÉpŸR§é:%`¯K†Ö¬ˆ{£)YâøñCj¤`[Ú=‰Î£QŠïÏç½I<ˆ-Øˆ ’ŽkÐ—ŸþHÿ•ÿÄÇO,Æp„Ûíx™/[XcTN^TM@ 9·4w¡ÑÏB|J6Ï4Fé‡š[,Ö©y9=Ç Š‡³HÜ›cP’:YYŽ-‹ÃXËê}]#–®ŸË’èÕDr*† ¸Ù!A%jœ5#­æv£ÿùŸÿ7æix²)~sÃïuLaÄg?žDƒ¸oqÕïf(¬ë2máuL‰ C…Ò§‹;m/{ñxÜEqb+Ö´áÑJúÓPpaEÌÅªQI ‡þ<)üŒ¤_¿2šðôÀ@oP	|àûSµ®¸[Ü†îº·akûo·ái±xGBÀ%rŠg0¶ÉÆ0¡ÀÐå­xÔ?_»:¢!	Fäor$è2@°Þ$œPøm¼†¨%£ÈãxÃ’ÐJ'µà5p”à´š8+À}=Éœµà ha¼9ÐŒ>ŠêixUS¥½TlË­>‰1Á{ôáH
TEˆnµ¢”ÔVP n@-ˆø0	ãP_DGˆ]ŸÒeH°åar’ˆGCq„rÊ±£"¤ß
Œè"›Bæ1—GÃ"d¹¶‹…^AhÙ åa§cäR¤V«Ñjó¨Ë¥šG
ƒc³cÉ&ÂŽ myŸã1ÞXÜ­£P[âÚ"vó„%þ’ø0Ê,A×ž!ÍQ‰€EL)_*-«‚`®l<ìXIË¢MH…™~ød}ÅœZK NÈR< ¢éQÀ“eòÄÖbÜ‰\Ô	ŽYÄ^·Ö¶5¤ŠšŒ·Æš`=ß7!Q„ÔpŠhJ‡bA4§…{Óà¤}MÏC¼w.T¾¦±PWkÁþ^ÀƒŠP[úµ@lùMˆ3©"tÄ¶™ÝÂS@<%=×Õ¼U«wd¯ßDV¹nƒÕG¨-¼jc©b‚DögÖÏE²¸	¬‚‡ïìÈþÌNXÿ|HY˜Å#­jèÁ=ÖÜB‹Ô‰hbÎ“Ùðt6añ:œA‰ƒHh"<:,”JYö±M =¨ ³ôgã¹B$­ƒL$–
ySÂP<TÝ2TXg”(«m&¦¥Í…a/ƒ'ó^†`¬X·[4XßD /»c%ÕBw*™M¬’1}0À ­0X{82M^a|aýÀ„Á)hŠÎ".‡íÆ£¶ñQFMk¤ör:]@ƒg(ÊhúcÄ¹–¶RB˜²)´Ý2"`pÞ!Y§x Š$P [+°¼§Ú<¢¢aåuò²ˆ…Ô3 'žéaLÇ¨ nhB³œ"Nb1£À4`ÝŽ®Qkßg´k¤D*ðØz¨Íhó4M©ýƒïCR¹9k4äé(èÖu$
¿Ã{ƒP½Á}áð*œ+Á`
Á–Â‚&]GÊw`@I— .’ƒ`;´]g4íÄ6\U
B@…(¯P±†Z-|'8yspD{tð+XÜôc~ü+ÿèòÿÚ¿È87ùê¯cñ^ müýŒ1:z$UDuæ-¡ÅÁkÖ¯KmˆÔ9RsUÀâ¿a–wŽª{öOè÷ãM±Õ“è,‰‚¯ž®Ö‚WI/™&`w]ÏÏ"P¾¿ê	=«¡_:ÈÜh8üt(™îgc¤.@ñh~<7ð´Dñ‰<Xno0¬3¢Î‡9¬•µÝ0c™ûBõÌËžà­žªt ëE·­ ³-7ÞýÚ½ UðŒÁ9î­ñð|àø€CšùÀ!j½/ ±–yÝEC¤}-D¥êë_d¤}s<‘XPç a\á„!NmwáOÿÐ6_5Âÿ”#¸ Ó/¯¢ÞÙ°~ç%@i¯/¡3.Iÿ/‰^Ò.Œæ|ô’­»;=qIèÉvì…O zÂ¡tÿÂø4h‘¦$‚EkQèü ux>¸ÔÈV¿wN“þ,5tÜH¥Æú¡‚“Ñ^†u
ÐÊ·7Ñ œuÑnÅÿó3\‡…6X`8¡’‰¦‰)?–åäNÕÛxDŠ!™”X[7ÆUŠµŒŠ «´qdÜéÜP÷D™M·@‡&µ9Û°—"zb´€o¦É˜ Ýð}™Èj©4h ì”1Ü€·ÙEýNšÃã’P'vzÑ)Z¡%ú"YheÅ%)/åjc<ânZ(ÜÉŽ‰Cvóê<Ö•—ëdW®f&$ÒŽ¸ÚÜÏ\Þ"•;)s
t‰hM>-ç›
®LUwŠ<&m|¯éÔDN’^ÜTcËª±îªåubÆ,ÈÉR`ÔØO‡´±qs¤ÙRfÃ_RF¨sf{Õ-^D­ŒªÈ’ž‹VeÓðµ×å,0–æ©×¼ñu"Ž‹$Gý%q7¼šÚÖ"^,Àã( V‘-ÖÊâXeg±N‘kÛešÚ)lª=°ÒNFÙ)uMw5Î ‡äôÓ ¸ýÞ µœòPæx é¤ÉR¿Þ±ŒvÙÄv¶mTT‘Ñ¡	:ÇiD*.}ó16®^‰U4p_lªg± äðeÛôü†ªkî
2ìŒ¦ç,x*ÑedÜjËÖÀËÝn-Ð@Éng¤‹:g¨'Â<[¼žûX…WjyÉß¨6§SÖÛØ¢ÍnVéF…pZŒ—·Ñâ1P„VUG2âþ¿)°@üþ‹zÃ+1j¯òSÃ­ó—¸Ÿ¬ŒÛzwEé 8H'ýÝ•óétœî¬­õ£ïÓ9-œÃI„.Ÿká÷áõÚ0î¥kSQèÚ¤ÕÞ¿.â<AÆ6¯lHˆÞ€—“Æ(š®Æ\Æ?4P^£¹]óÍŒ5¨BšÜkVãªnäßMþZù/:`?æ6ó­\Go
òƒC­a<•Hã1uK(ƒdî¦d¡€ìò<speïhžá¡ùEÁïƒ“>ŒÔ¡ß/ºÙ“¤ŠEi›Åß©;Ä ’‡tgeO_J×Œ‚0öGÃÉn¤ƒ”	¹WH¡Ã—í•½ÃpÒƒGGqrMG¢ä£Z}¸ÆI‹ó?Y_w4Ø³}Ê•ðâIgeÏö‚(—ñIû%â‹hçˆrÙŽ‡Ý•½ãó$Ÿ'“Œ*H°°>çÁì„[®¬“Çë0:. ¥Jù&zƒÀ‡ÓG±s2]rNo¨–<e7äŸK7d]6ÄJî+äÿA×°”^ÓÞ‡„ÅÌb¢›%~ô<Õwý0¼P&	o_8%‚ˆ–ànýqìˆ[ˆ‰Ø%AÇ¼MòLy‡È7¡†òä{Œ>‘äñ³%ƒág÷i ®^|D"äÑ„V4ísx,ýiï#54w]Û ¹¸6Ò¢/¢Ó†;(Ó[2åÄÌI¢‰éH¿ÙÅ~e¯¾$ Ë²MžœÁš°<E-fðÑœq3½Yk¥{]zúø­ÎzÂÞ¬ÙÊîµÛòÖ½Y“Ùæã7u¿?ÅU¹JZ€0TÔb!ÁJ´¸ÄJ¥ý>:P…#r¦›g_ÐýªpÄFŒÜJ“Rª$2›PªÄò€DKÝÓ€1ÂãmÌ—ZÐçLÈú ¾À‹KäåNIˆ‚£iæÞÒ*–™Èþû=U(·\‡¹Þ< ²Ì.È§ßñõÐý2fÏé1„H>z “µ¿0]“þŽïêÝ%z»¥Á)ÌÓovàHCÈy˜ŒÎ^«a{Çã¸fe$ô¢ãL†·™!öÓ©òÎ“ÔAw7ä¦¨ÅGèqëÒe /vm	´WHVëð†—NÆç±¯€q°v†9‚ÕÙQ{@qÌa}­dú[Ý1‰%¾ÎL¨¹a¼§Ú÷¯Ž D|=D\m@Ú¸ cÇÈ¨/¤°ói…<•°n– ï·@nö_”¿ëkÁyc‹éšW]{5Š;†Ÿ£ñrQF†/+Õdå}¸†d7ØµÝ0Œ=ÑAtÈ¹ ÝÃóØö…wº°'î'ðµ½d4Ä?‘bÓÑ¬?Œ0â^í[æ…ÉQÀÛ†+nv ¯_ÑÁšsw§Ï×h:“>ílWŒÖ7J¶ÐˆáÜÇ™ã=M’ºŸ<gÓ™HêM¾tÖ»¼¤9(^Ë8ÏÊ»‰ö…@Ë¥V^(D’áX°k­d%Ÿ‹­æ+ž=AŠwÜhªæ:Ûª«Éèn‹}Ø0û`8Ë–“ïô*1Û*ï‰Ë/c(—th„é,-ÔÍ¶))_Þéìv­¦é¢®;ìÜ?Íø'³‹¼7Ç‡© ‰Skº˜Ë·}bnšÑ+KÁ˜JŸ^óÙÄ~@Éöô>üð¼—r?iä¥093ÍKdÚþžåÎŸÐ§ç·ÌÐâÜDðÄ"	¦pÈöpÊ»Ò	9Ø£}@("k«Â£öÒ/šy/x]»Ù[¿ì¾t	‘ßGÜ©Ì+|}é¹}4Ð[$+ï-úK¬Kw«“Û Ûô7sM6¿Û›·ê4m/Ýéå9¼D§ñp~7×o9º¼yW~wéùììÑçî"í¶¾´{2ÐÂ¿tgs!ŸÉ—è™¸¹—?ömuù=g]gé®çrtîÄ_¦ëW‚ÓG^áK¿ÈeymNÜ<ÅöíºÊŠàÒ]Z^Â-î‰£*Þ¦»ðÛVIà©þe÷Ì$§vm-¨×ëÁQ8ƒ“)úbXÞÑž« ’2qx»ç/Ÿ=:üêÙ£°"¥ÇáË¶¾ZÐu1¼Ùm—W)…5·ƒ0'ó‹^‚÷å1þ;S4¯×é_-`Ð/òËSú·"ƒ’£'Æ†¾p$}Ãÿå¿4Ëçøgyåbø=Š®‚×O^=zÔàà¹J‹è«fºfî¸¾zN…ª¾wFÔÐ±IÅ†þycf'h×¤EKß1µ‚@ÚÏ¨Uï`T”CfÈ©wç%p®:®¤cã%o‡ÂS}ÏáŸ¬{˜G‘*®9‹¦†R"°¯+ÕÆE8®\""OÅ¨õ‰5¶íhë´éÔÊnWrl/ÍÚ;0„Õjé¡[7†n}ñÐ(?ªì þô¯Þadå:3/žt<)\ä“¤¼vñ@v»åçÿ²c–ˆ~ÐlÎÇvk£êŽiŽ¸ƒz›ÛY7þín}ºÊëej_$‘¼´DéV]ÀðÉð­Û2|Æ„ºßoz¸þIû¥‡ëÉßfÏ/±Düyä%alnB–—ÕÖ½õ.â7£Y¾é´Å#ŒJ³Z+L\wRûjö1®ZdÛ·d\4ƒoÄªë^N]nÍóòZÀÀÇæ@ŸnovZ%„ö†qùSÔ°“,Ã‡C³þv»ßíF…:–µ¯/·wÑí–X‡=f_ùäOîöoÜmÌØŸ<öéY>¯¼Ã~bÍï°×inåÍï©ê-¥Ž),/?Z®æ¼ž+¯î¤¾ú§­°±Ýe<&ˆŸ¬Özaµ7Òp¤|Z@×§öhËM7±Çt“fî?e¦z¨zæ˜ë²º`~}™#nu»§›‹åêæìVš€²¯© ]qu~kc£lâ:§.Òº>}¡sW,^ÂDÏãp¯•~òx#õ0=©?Õâ*ƒÞ}[ ),Ë€—›-¡'l£º±XOÐ](Ko"ïxþôÇ<­À'«|ú€Ç«ý¯_\ùvÒ>êBù©+”+é§­¯ž©ðv–™\T¥â¥ H¶nøÔ‡|[¬Ô,´vòï`"ÒçKò¨í«i<D7¦/U=lô&¼‚úÎÙ±T3zMg“‘Aò2÷jšë¼ÿÓét%Æý¡Í–‘¬ç¥rÔ9‹ÈñÎºDju½ÀZ¼s(å£ QV™XB•(­HäÄ³.C‡RÍ/“èÎªDÚÂ4 †¼ä9õ$Ž£	ºvñTÂ(£ÂA\ÃDÁ‡¡²Ù¥ì<’B^bL÷ú#¢—o2¶	Ï@)‚þ5—RáL ~ÎH˜‚fdˆÖ`7X‹¡%0ç¹5»Á éÏ°þþˆ[SYå«:^ýn\	Œ¡n«í¼áÐ'èÛUÑòD]SÂ¥çdÀ<2òêhV]û~šê¶¯÷ž5¦ÉÉ¨sV)Û‡B«€ð]mšå8ø?²ÄÎûW0ªbHÍ¾Õìþ8å2hÐêQ8‚üð†:6áª[·l›*3‰7´ÊÁ‹VÝ÷aŠH)XÆ*ˆ£Á0ZÍ€‰$ƒXÃwÀÃžáhç–²™[Š5ª’éwYÅóA2r_bq6‘¡1Š¢ÁWãÎ¤]
<úÀ2";péÄwè—‹N˜8ÛÐ7·OØ£ãìa<ã:¿o®aAØÄ*¦‚EºŒCs®ÖèÖ>£Ýöíç[™©ãšæüs¦f«½e±I‘WJO„Ì<xûM„·Ÿÿ(ûþ¡äŒxûÝ§™œD| c.ˆRF^è¶öX"ÏmŒêr…ˆmÕöa»j5ËeÛx)‰¦³L-ØX÷Ï>7Éí¦–À¹$†~ŽçFèOmæ>±^a{¡öD= £Gãéùë(î§á0•O~ƒ™Ä#0a}µyj©ØíPÙøqƒ‚ú"ì*†„NˆˆôUGpbWÆX”ªõQ*`]¥'}…ñƒnÝú’5ï’‹*õþ¤ÿ<JÏ+n¿†©b=¢œo+\³Pp… iæŒ-Š…4è÷ëK<p(F‘<°à7ïRFg|Wi7è´^@Û—…÷Ñ©TøîTœ*ðÅ§>ð§ÉýÀ«¢äUÁ–”àSe2ç½‚õ-®ªVÑîNpôü¨B}«i0ÕJ+¨S„•T­Buêµz¨·rÿ¼OWitVu³q1NãñpŽ…‡“
sŽ‘”G¼1ž‹élYœm¦Ÿ
µnRï`† VÒYˆ3çñ$¹  ë´Â58\pá¸ò4îR@˜ðôQ£i$"µ^lI€@#”`c«k1gíº*%ïÂ,ƒUªÙ‡u%î‹«ˆJDZ¬È§),®_ „#:"¢¦!Œò@%•a9¾Ä»è5F	ßÕN‚øÍv5ýàüLÀƒ—/Ž~ûìÑ‹/_?! c9)•Áå•Œ> ¢±*ÁïfÑdÎaE€ñVí0¾Õ £Q€~ Ô‰ƒùÓAeÕŒÖb(ÈD[ã-(AC/öÚ‚ã_i^óž±±­¤ÇÑ„z.£Cz[Añ­z2½x\Ë<BjG°0j–¡î`Yyˆ—‡²á†nŽs«ARõJ¼A–&ÒìˆOa¼xã#db‹k9VFˆšÞ^d;÷ÄÖÌbŽãëhø
Y¸B"äDˆ@úä÷:t®j­ûøÆìšø¨âr~c\Ö0¹ˆ£$E#të<b<.GÍV‰\âJð×hvMœúgØÏÔbÐð¢\)ëžº­ûÆà$¶PÉéÃaAÅ³W÷ÄzÞ²Š?’!ƒÃa¶Š-U…Êls*ÀM¾¦¨yíh/j«ØŽN¦m»uhÿ_Ð’vÕƒcÀI(9–|³šGOô¤×’¯(•-‹RÒ²(Y¦kVƒ=]×íô¼´›çã&Ý*‹t¬Hd]I¼\ÉêsZ­zÀyûçxìÂJTÅ¢a¤—s%j0jLƒ.ók!·ÆLôšRuj­Ì¦¬,tIFFµD@QúFé6Ñˆ,Ù=ŠwÚÞ%ÛbðDÉÆˆ¯‹q™“Ño(Í+z`qÜSÆ-	ž[¨ÉepÈêá“õUc6Å¨ÉyãîÈZ9ßGsWÛ çý®v¦i”]`ó¿ÀU¡œ™Í<Ä‚ º†¾áêpP$§ÇÕy¤²glƒâ8‚j Â,ì{A³jK¡Æ$Bäñœ|oš_^T`0‹·tã½(Ú“ÃS®3'¼e;iDù99=u˜Ìå­ÀL J÷åá¢íA¥FËVÔC×j¬ë‡â>;îÛ:$¿ ‹Á±Í~XÙÈ‘´ÁvKŒOüßÕI9Ñkµ'‘Ý±¶
“ûŠÖCaaXÏÔ®¿BP ¬ ~" ®Ý» #!ð(JÙßhåïVf+CÖ5dª¬hzÖŒ¦ép¶Çãzd”fI‡¶»—„Ø‰Œ£`|A?me‹Î´ð”¹o@„¤÷°ä…ýó
Åß°„ °ÚIäA1P ¦i€¢áÛpYÃ2,Z‡AÙ´UU	íÆgÓ9­Ä–-`Yj|«šÅq*•!9”~Î¤ïzø÷¿7ŽY|•,ÃF£Ö\7XÑ*ÝË‰‚F5Ù #«Ì¤õÍ~2ž{F%&Éûý©N£˜Âa„¶¹ù‘ewY^vLqNGï™jÜ~cêg,Dw¬B°úÓ»s(ÐÔÏ€ICª9þÕ€9°á-¯ä¨*ÏørµëT*Ü;¨¢5Y¿IF™ËUƒ89C†Ç5FT9l#šŒ„=‚ÛH_Ê"{‹œô<u²£AdíUºb±£Ä"ðè°ÎŒ‡
ŠxÒ7ôGÂÈx7hg·.iù%tFÚ]Aé)@Óñ0žVVk«ìø¢ÓI|au÷•(ÇÓÁ5í˜êQòl¥ºÒÛ–ÙV5ò~O{«÷ƒÖøš›ÿ{7¿ìîC	v¶7ñ»¢c'ÿA6ÿ÷¥ó—ÚÏd8Špo‚vJhSª¢ö[ƒ{REmÅ?5§ÅÚÁ_è
](7=âÑ,zØå 
î³¯Å‘Â”¾‹t]öôdÿÕáo_í=ýê„ºÞîò9ƒ^“òti5}ä`—hª’$€¹—B¸y ã)õ(.M*:A%@íCÎbuïÅ.6¨šínÕÓ•‹xÀ;üÖ‰6„»H¥ "s¹¦û®9Uß¨÷wæc1Òïp•~ûÝÛÏ”cýá§?èCÈLù'òÀÊ{¬šP3Ï»mñ9‹#•™.‹ÆJgwÇKöõþý¥9½£8‰Ä¢¯½{oñá³eË³mvƒõLù²ô†H_W"]Ç«RzŽD€-Ž
lê³ÊS:-¨ª‹TÚ«Í:“Þâý4+q±J‹—ñ<º¬ÈÉG¥xÝ–a¾6ºåoS9½Åà}Q–w/WÙsã¥q´Þ5_XPË|sO"²ÝÅA²æœœ¾xÕ$A’šì®C-[K§ÍÆ&*/]Õ\”ùÌfè7W•r8Òj‡µÕ copÚZRWM);’4E*”³È§‰¸,ž£Šä)"yÙ3šˆ{Äíd]¤æúÅ»™"påu§Ír‡ vYîÜ@‚…éyäŸ…sÌ,âÑêÚïÎÂ±ze¿1¦“'3ÛLÁÓ£Lw*‚f5Ùa+#>C1È}ê|œNÂ<µU9cRV‹Å¼pâzòÕ|áê¹hS×ˆ,7Ü„“%Õr~·psXÇ{ÎC*•%¸?€)áÔû •„âò­Íþæšnàå
µã'ûKµÇËË>äþâ,ÿòrÅ©]wOqüÎ”N'óQ? }vvº’QÙ•dÊ=ªXêpÄÙ¶÷8”=ÙpÊ2õPJX¢(I#sÓÝ(¡šs
a$±[áž Ø'wënÀçí!å£J¼Ô¾SÊŒäÀñ$ùžÏFA Mâk-]îä Ý%Ž:=1|Ô¡óétŸ^@Z+"]öˆœ[íi%©X'v#Ä!Q2Â3\/A3À&.ÇYz¸v>½î}ÇB?Ngé4¹xzCbjWálz:/,x»f4˜¾oµ;ÿp†Pv¯˜É^ˆ°(×qrÁ.q‰¼MÂ¦Í`,ÛÍöF½¹UowðÂÝäaRÅ¼c_Ô‡qš†ß'³´NŽt©(dO‡] ¯i&
¾ž„ÅÒž'ì¦Ã IªúixÆP±+Ç!RŠÑ?/˜’BJ‚¾Ÿ'|Z1†Iq.ËMÒ~<d¦´ŒÏÃ4
ÒóøtJž˜òD·?(¬lñ N1ä8W=>Ÿ§q_¾J#qÐƒçG*^#Z¦8Q ¥¸þs–oô,ºŒ†˜à	0_pÒ?Oj\oµ«+5 ú1ÌŠ§ÁÉëGÏñ÷WÈ+˜ÕEYP*ToªèÉIýød½ÞÂÔ‡‡''çû¯Ÿ4žœ<n¼~Ü8htE©ÇÜê TPÑ6duÇ“Ì X`øU«*+DÌp|mh¤£à^bäZ5z$i ‘ì<nÄ
KŽJ#Ø Äe Œÿ€3ÈVit.£	Ðôª™¡’Ã9ˆOElç ò§ÿ
É€‰EðÜÎÆŽæ‘†)_ÆŸŽ¡mãé:TökÁÆÏ‘”³³ðæ{1d¸®L«0C÷òæûéÿž‚jû§ÿÊÍó»z×ƒwÕFð8¢]}ˆ‡õiöá«×‚ð7G\õ«„Þ#ðKñÎNã3ÊZií´HëZC×tLÐÚiS{É0\ãdu0ê:ðøý(™â·uŠ#=Œ®EÿÇá,Ö¸`%³OãùíÆìeï{vÅ2.Æ„ÃùÝC1¨’ÎÆÑD›‡Yˆ>²ø¤],B;RRMÝL[!ü€x ¸‹;âÀ;À*&<5I„x‡d1šBéq²€Hu}GÑ.~të$ Š³ía®ª¨›a€ãâ4’ù/¤áâ§@9‘Ü‚h8ŒÇiD­Sç\7t¤®¥zªIv€BÆ4'±s¶6ŠhÆ…Úá1~·™ì›oƒ‹d ¼“Æg4'AÅ:ESÈQf’p6€.„ý1gAQc„l˜ž¥G°~|‰zŒiŒ­§ïçõfärXÇYv–Ô7áçôr„ð­ow›¢[=D­‘7:{g”³Ûl®µšŒb‰¿;U Ê×m™?Æ•‹ò)¨†âÒžnV6¶7Å“U•CÄ Ø	:Âêšb”íh"ž¶ÖÅýK Z4J£×ó1b½ÁQ&‡ðz’À ~V	e:c-Ê%Z0†IAMêƒÇ@ª*Û–C›Òp„1È§DÇvS]Ç†•§×ô«Ñ0¾ˆAAŸšMV8Í©(Æ5!ïÚ
Ìõ’^Hƒ©5‡YxÓÀƒÄùÏ†Éå±…’fÌ§P*NrTà]ægð£”¬ÿoêáuLs6hÕ[MžìßŠ‡=ñPûx6²À6—iQ"N¾[ªóå8-U…w0ôj€°Ò¬²ù[­ä¿v“¤sƒðen³ÑÆÊZÑòËL{T¸C©âý 9zÀ õF:pÁÊK01@ã„BÃ)îý ¤/H´™YÔè÷¡) X¶ÙºÁcKºÿŠ¤;¶%ü!Kx]3höc˜ü8ŽÖäÇû*uœþ„
".ÒŠ@e!ëöÒ`M}Á2Ñä(:gCD•\Ž°oÄAÁßÆoË£h86ØV\#€™æƒë‘”ž˜¼¯"½Xõ$Ð{.ï£9‰&h˜qã™ uð¦¹bÙ0¨0VÍ+Ö%lü¯×ºÏ=¶RÌ@…Âc?¥ØzÔK½î3&S”§¦¹pAs2q|];(ìZ/¨|û³èšZ„KuL3‹§wÇ$ŽìÙí^ÓéÈ
·ÝLÿ~úCnÿŽQÄç]òJ”¦Rc_¤—Ê;!)ž‡CÜëŒ¼,KTÿœ(ÔìÕi:ñE%`ÙãhrŠjFjN•B
™}ûZ5ãAnhôTè]FÀ !x–Æ2‘îD†úž¤VQ”ª<o˜ ç$MO°¶L":3%¼H†°¸Á€;»òþæøU>ûL¢+°œ/éÈ²öyˆÛ‚ühHÛ3 _êËÛRBkZnWPŠ“_~µ`|øVž4;RŽuŠƒEëQÒK#Z´ƒA2ëÑ†V2¤	 Wšêk!AÍËvÎ ´ŠÀL6í•±2Žúx‡"–ŽgNæ#0¸“¥VFu–‘KsX7˜V½;^zÓÐÈO;eXäêÔÑ²hûæ*
/£R¤óÈÞ¹)Ù÷sÉN„yDf¹ÁòÖòÎº2ÞÛ0µJÇÈOÉ~’X%8í­®Ïh4J*´0GæöÛbÈ¨}i®üæ<"(³Œª	¦` š$Ãø …Þ¨ŠôD î°‚‹ò
Íµô"Ip_pÓ ^%ëƒŠ„7>aµî;ÆSÂ~Bõ¾Ôo˜Ù¶élÖø•µ2*ikX–HEÜjARÞÿ§%“5£UÿbŸï¦	V`Ö?A—‰1>Àº¡ÄûÅrdó ­­îfÀ0Uñd‚Q\.Ð¢XÐüË¸Ç–T0á† ’î=‡É-qúdz1ÜÍýFÜ•»ú;Áwqôòðõ·ÇèùÞgñòÑÙîJ„`%´ÍCô¤E£LóéîÊW¯×·VôŒ ¥QÇWH;…*vWèZá.ßª‹«è1{Ë×é”{4G.ˆäÅž»÷¨v®q‚ÏGp.c×ï€É7Uâ¨^kUœã‰HDÔ+Ü	‡÷ð¦µ·;=ý&ì£ï®ÊÈçú5Ù¼òåéÖixÚw^^ÌÈü%ûê—Â@VwÖ[Ý®µ¥|Oµ½—\×AJ’m*òÁ#ånÒ‡'ù`8H‘z‚÷öë§áE<a“qÿ`Þ?û'ôû1dª«'ÑY_=]­¯’^2MjÁËëùY4ª_õ€ñf5´VAFÃ¡y÷ßên}ëî¨+‡²û`™Uô óÆ[Mêj¦£íæX‘CÌîàì*E ø^È›Zt½uv¡Î½Ê«#;ŽG*,‚:GF@E»yynuç È+Ù1j"–)†ÆFm:Å°Of{AÉ­‹+¶ÛMõ\VÐÒfŽaJ‡ÉíIt‘Sò–.Ø¢žÉÇöÉÅ¸‘Îz4ŒÃ$—îÄÅÕÙ¦ w›j(±¡¡~¼ù œ¡Ÿ´I(A$…¿óÐ®ÕÊï.¢ÂÚãŠT[]H¤Ï‡<-5Úz6‰Õa`@¿€cÚã¶âvÀé$è¬Íü`“‚6rêÙzò&EŠÖb¾Ë€h­¶®I±kC?äôðCt$Ãx '—!oª·˜+4,f+r' ¸Àœßï_6ÛÍÖfN‡·Ê2ÀFÓ9eÃÙ4Q¥“Í:)P
èú­zÃ¤ÿ>ËÌ¸OQƒ24ü(ãgrù§¿gªÈ^2Xû­§mnñæ^X<ž$Å§óz_ê"é8Aí^´Õ5"½¹ãLQn1qJ6ý1_”’þ÷†Qè	œvå*ÂÃ¼¶n±¨p¾ƒZz3ô£òóiÑ"ºÃi‘ƒA±Zë.ß*>7$’½Z#ª}ŠM#ëC¯•ú€f'Ó;Œh•Ö³môÈC©sŒó#éÅ¿ÊÔ¾‘¾Ñ›ŽÊÌž[î2dävÆóîH)$5%JÒOb‚ó,æ­õ¾+6}/½%»ñ”ßÙØíÆ5„•)…2Mœåúg! sïtÄó>­ë56r{~Þ.-,îG_÷|Í-Ë7F•c—Ü*W;Gá»Ú†þõèz<)P=“vÅE2JHVçs€#šôøÂXftÅëš0äPÃ&ÞÃ5¶@²[¾bu\€•·Š,FxËÉÆWjÁ+{%U¼›"@™‡mùÌFÝuñv­wŽ®¨ y
*ì®(>"\aNÞ]•nE¨=ücïág³ÀÛ²•Zê®2›„e˜‰Ì«¹“Šù0êXœ›=\£çFf–ÒÔ'>cãÍÔœ.¡]ü€Vc¨‚\¥VöØe*;Dù‡kœ¶ {k§õ[ ‹>À£}AÆ&/•yHÌÍŽ{æ¹ŸÚ`,WRKÚË9%$	Ü?Þi—)­#JS¨‚â²˜NÙbÖE1êL2[Òº§$˜D/p6ò¤Lä;éÛÖãf04~ÅÍK=ZAÜPL·g Rm¼Ig*iTïÀ¢½#´‚|âxO£1=‘£·ò‘{ªþœžÜaOþr=5ÎŽt	°úÈG?9ýd@Ëeºj'q›¢¿Õá®êðvóãôx_9+ìgøbœÏÃær©0îj£-·¡:ÛlãÛøèý= ^öô7Ÿ“oÐßƒ¿|•;É	»<Xý¥g¾^®Çì¨"»,çoç6]Vö‰Ù]aª`•ìÛ~0©^U¥Y=\ãÄþÜ´¶cæ½W¤¼Ž/29€ÌmÕ:±T ÎÛ{O’«ÀÑõÒà7Éä=¨am©çÉºö3®¯qªy‚Þ<A¹ŽÅÑ–ëy‘ðá×ErI{òæ,;öÓù.^†•ø<š4‚×ç‘È’ï-B@klÄõ3ûˆ+¥|e/ÇqUðOMÄ¢Éøl€–>&Win¹Y§WQdCŒÈØ¥!öJ{k¥ç!:(‘sVJÍ1~cpJAäÒ§™Rã½‡#wt¶çœi³Ÿè*ûô:8’§r©ã2J®¡xoy‡âI{»òa:M3òáã<Ž†:R$¸cû´ÕØ×J¯‹ÑJéÓDuO>¤¤Ãt~ÁWôÐÍÏBIÛk‡ÒYTÈ¬g*7U\T†Î¥sªòJ¥Û_ùN©¹]Ùw=¨nP`Tj&›ÆEpiÑüZuØlÜd¯ PPù*âÌ2*¸Æãž]6Ö¥cýÈÛ+¥¢hSJŒu%ÉÈIÊßS¸•S*»JÒ¥Je<°3jÍdanÔ.×ú…™1Q&Ûâc";­;óQ*§§†qWØM#]‚Z_À‚Dv^¹úe•iL&9âý½€Ã¢ST¾·›€ªû‚™4ÞryxBè“‹˜a
¡—-Î—m)é72žH¶ ¬x§xÊSäÏ8}5ÜÀ¤aÅ¼»õtà†ÝÅ{ù¸_ã&ÑGzáú¦ÑãaN+z¶‹¸ŒÚï¦—IxàO8`ØŠ‘Ú™Ò"KpOÅ+Á§-Ã-Ž]hÔŒÎTÇÎµvÒœ–	·[#­žº"±HûÁÚþSå[pÏP·5‰Šãï\ýt	ù@'=ð$=ð'%’9É½´ugõ§?¬Y‘‘œíÄn«*‰‰cÔ.±=×«~"&áUæz¦„n0ñX)„ƒÊ`§á3Öo Ñ•¸’Ùö%øˆâ2)È¿FÆÙáˆÄä#0 ÝcÝ‰CøcÖ‚^9¿Ft¦¿5&Lð
4fc!…]Ÿyoø|9‰Á¾¾+ìež:¹@-óE/ë84c†ácÃø:©‚R`UŽùÜ!²6k’ÚvV	­!ßeúQÉvúP^ïÐö‰ÜÃ¦BÄ¦É#E;—6S€ùÈ!Ÿ›]›]ÀÄ|MÞ”J–=ÀVÓ}tLA„3B8‘e\yò¥„i8ãpøåá.UÀ?îïR;²áºHµœŸ¸ZÃ||ÏÎ?¨fÓL –¹*åÛ NÜë+¥Ç¥˜Q@ð"7µzwÃyêÖYìp]æf„PÉÓ(“Xðˆ›ø3û³˜WØƒ4xÍW|žDá@…v²e'ü¦<õ2´³
ú¶<m	`‚¿¬þòt½sÚVKÌÑpÒ—8	0e+jÁ&Éƒ%­\X›M6™w>ÓCªôsH§È…0Z]ìÊ¶jlÄW+Nùïšã:`&ç„¡6®ø…LCó6»©!‹qrè0D‘Ò^½­šßèõºf,È5wµ­éE´¦—Èš±þ½Sá˜x—ÊÈD<Á’é9ÆevÂ2ûÚ«F‡
ÿÅ®¹ôVË‘AJQ!s¬\åãF+5×Œm)ØPzÍ\¥#¦U+ŠŽ£#ÑÒ”Q‡ø©_ëÙÕ~œB dªÜ¾û:·TÚ¾q¥í›VÚ)Uiç®+]¿q¥ë¥*-š¸’{•uëc]¼§˜™Y¦EõõCùØ¨òlWçúû`•6wWƒø¦ðj6/m%bCüxÚ†ÖhÉêtEZÛ¥{b˜ŠªY=þå¹|¬„?øì¯/ÝoHi·Žvð¨Á	Åq¢“GøúÎ×]ŽÖãd‚þ*†‡ŠÄa^616@§¸³'ÂTSºeÛŸ×øÊì¨è_¢ÐS.4Hg=u“ZDâ øzu¼	0— {3ó®¾’Ã¶á‹µñœ°ÝT´úE¿¸»'õ§GýáP¿Ú¢4E\#À†¬ã¤A9:¥oã‰·!Âßãê‚p¾Eã˜/àxÃIy0Q®÷æuÒÎå hâáå1Ì™1 ŒÏ)É$¢åo4•;ÔÝ7^6ih&h{€†®·›ÅÅG(¹?IRø 0t…šßèM$ÂíµMºØ-®ZÓ°† ùPg…ÉrÖS¼4O'-—{—=I‡so `¿éùE4¥hšáô4)žGá(¨üé¿Ukðu ü
Ÿ'á8ÏÄÍÖ¯#•ûú#¤”±ƒ£è2æ4ðJDÚx…Í¯ ¹‚Ý`ˆzˆFˆ*ËCXë œ€ù
„¯ñOtžÀÀ'0µ@Ÿr'ÃùÆl8ŽEa²æ+vN¡2JE÷8¤P0t‘
 Æ¶(L‰šž‰Tf6¹xà° ’9¾V2 K3ãö?	`³)È+'Ef87i.R´®`Fv!¾žâ=YàÂÙv"%¨ì4øÓ©\ÿ6ëFü§?òéŠàÆ1Â<šwÀtÜ}Y+U€×KÂ	¶·„—øž3š<ß2#j&yÄ61×_ŒÃ>Ÿ,%†X #„ÒbŠ#Âcñô×¯ªx€—BCFÉ¨n%ÁžQ°äŸÊ-ù£+"Œg¼´Q.ò‡HmÿŒøF"_˜,Äûòr¨dËd}Ãdsëo#È3œ7ÎââŠ¤çÒ#ºF&ÊÿZrŽfy0’ÂiÏB)4]yiÎtb/Ca>hA3EcF÷î@Ë§ÑYÂkJE!åJIÅWÊm¨ÇxgJ’ÇÃD_@_92§ó¡1Q¤àÍO¹¤êµK‡É®añhí"¼¤OsrÃ²F+!.mTƒpØ€‰ b*$"OçcŽ£ŒCFÖë-ÓU2ôr/B#4g,]x(@QÔ¼2Áœø2*˜>užè`":~i|¤Ú`äÒ^V6TSŽ#šª(¨@'qõY]q²ÉKèzJ@/ÄÔ”rwÅœKÑÍð™8áÑ%ˆæÊ(^bÓ/Q"z]nÊ0ñBù"èµK9 ^3W”…14$A={÷7jF·D·r{ô,¹‚ÇËí 3a¦äŽ-î‹à__`nyûÒr;ÓjÞ¦7_ÇËöÆœËÿÀÙèþñRÄ|xÉkpBÏ)üª¤Á^‚^Îò87ö²Bé.B~ÐmùkÛØE%‡@¢ú?ÄÐxè™ÄÒŒdHC19‹¤BT¢ÆYƒ08l0ªhXµÃ.Ò­öøDÎ¤•áuÄ‡Ú0¤s*k
‚)Hbì4/¢‚5üFL…ÂH"Æ³ƒ*ÈÚÑ³ˆtê‘,h|}±DTp—ÿM’º26ŽxlrÇó‘-1ˆAšÀgÂ½	–ô	(ŽðŠC(âø0n¥ý?Œ××xåze…S×Ö¡• ÇÜ	“dŒ,BŠŒf³`¼°oªð¼ÁÊûÒ,Œáyöh©>}O¦³$MÊŽÖ‚¸#aðœ,fP€pÅÓyƒÆN0¡3šKè*8 ô¼>:Œ#ŽÁ l\1r]ù_Ký_‘-9ê.Í"\£Ý…\Y•”ü>-¤ƒø¢¨+¥"ÄN,ïâk–Y·¨ÇÒ4üQK^ëuóÅNìBÄ¯Ó	†Ac£ï#w!;Þ]°ŠÑ‹Ngö°Ï6t¨y2Pó$6óˆ–2ªEŽkm÷,	+V:dÊ=4,.£ý¡H6h\¢ºÄˆ62fXî‰ÆcfJE-T Í8Åë!)ž1eˆaÛŽ'I/1¹wCž=™x:BßHöZŒû5l$3ãXMM-Ú¢@®%V¶dØßB’ò¯V`ÒH‚tÒß]9ŸNÇéÎÚZ0«iãËIcM×Fã‹µ¾0¦ð—v‘,l²TH~#nQZGÌ€'ópä‰w"Þs½Ç€'tŠ›}KF?¼·ºÝÓÍÌû³IQáëƒÎövæuB›‡X|o»ÝÉÄS	QE,kå¿ß`*aTˆÙ;Ý[x¥Û¸Ošû¤˜„þÈ(Î­ÕáZ
²”	`·ÁC¥ÕhåFØÌ‰`Ìç‚¸²¤ë&${KÜ%’HD¥À{ä[‹£™´šíu+œIN3rëlwé¿®Ù^2x­ø&wöf¶!pòn}oy.};f.E«ûªVãî:P…(Þ¸éwyÚÏ"( Ý¾ª+Û%È#ˆ ò¬	¥C	}ÜH¹ÅœH›7ŠäaÞs÷7ï³àá{ñÍ}=±Ým÷ËY7²uR>bD;'XÆæVæŽ¾Y²=9Ñ4–•¯Ô¢ugÔï0°‰Ib¹¸d¸›#ØDÍ{²#"µ×ÏÄÙF¥Õé¢³š3%I+©Ö‚_nö;¡A4”õ©] DØê™LÎ:Y2ô‰1š¼½8&
}§ ®ÍFÏXIÊˆƒâåpÓˆbQm?€H"¯ÔUî€n{«ú@–¨öš|ƒãïTN
.d |Ê«ÁêB=›ÎˆÏj5^f˜µIÄåÍ:ŸŽ´nêNáµzÞu§Sõ/)o-¢]Eaíž2@‚ÎÜ[ãŠåaÑÍÕÞÛ¨´k¨6T­†¸‹©GcÙX·ã¯ùÛ³¨òŽ]ù‡•rä—[×ºQP«,²ž«2Ýb”Ð•€Ãƒí[Å@¤ì¸Œ*»eÇÌŸ&´Òb†{ïý0U3Ì7¥É´×]&>ŒÐ¾Žó•í±FfZÉÖZ1l¬¿z˜Ì&¸ëû"ºLüª-’Íêž-”ŒQŸœõÂJ9gk»´×y¼›µ½p½ë.Ž€c3Î€08‡Ö4"Y„kÙÕ$ËW(ýO‡ÉÕNpZ£Ô/ùNiœú	mùäÜ!Á7¶òî	kt•`Ç‚v‡‘hëáPËgC·õAö°>·ƒ:A Úþ~Ãj0Nslƒ\vYiÙÅë”¹¼ëÖkùOçäYéO[K·ý®‰š±ÎJH|_–\l––÷7©Ó»ÆÈ²h²5Ð¦¨·Ý¹ 2vFúêcX«BTnÅ¤­®¦Ý¼]['t_¾þê±¹©¹kÀÖúÍÌ6s*‹ècI1oë<š[U9P,ú‚d¿ÚÑ·Ë<Ö’]MÈå—ýÿçÿþ¿Þ}æŠ»Ç\•±ÌrCŽÙ›B2lÆ/êu®à˜‚ÌÕë¾˜d“A`mŠè€"çí=j—,†£mÈ··‹©B£»ˆÅÈbØÂvÔ05æDP´+â@º¢¨8)Ê!%è›{t&Ê.»IùúüeeÏðLÊE3;{§1j¯3FÍ°7$O:Ý½²·µd¤%ôÞÅPlšM™¦©¨°õqÂï(Ÿ§SðÜîÒ’q²¨KTˆ:ªÛüØ²”cŒÛ¡ðÚîP{ÉhIÜ#,…ƒ5Uô/Ý§vnÄ #¦Oo:’®(+ ¬þ×?j‡rá³†óWGù¹º·„p©*‡èN*Žp'¯º4P›Ø`œ‘"¤ž«Éwùñ‡´|ŽX†ò†L¾ 4MzMA,ÀçÖéŠ\»,Ë>5iCíÁ#qÏ›ÓÔy‰D¸Kå>ïPÐŸ‰Cýé¿»ç¿×¿1®ÁÈŸ—VÍzXÃŠ[i;¬ì5ü"@ÝöÁjøÊÞnÐtGßb]E9ò¸[Úa‘Kî$™ Û™¸Ý"¯ì. ù„Ý–~ÞB–¥ èß)ý À%¨÷<I§Ò%xÊ2²’æð­¤Ôp[ÚùŠX’rÊé.©ç8z-AHL3Ø¹J±h+ß¯ÛÑ3·˜%iêñi»Kêæ¸Ì-Ee ñŸÿå? íÉt ÕÜ’°9…,IVr÷¿SJR‰KÐ[€áI®7A+$_O¸åüe,$œŠlYñÌ³pž€"æ_å]‰<ý‡Œ/µWKnÃ>_ÙÓ®‚ó†¼HGyÓŽBÍV1(KFìéž¸®cÄ–^ÄP·íº&TÄÅÓ¹ðÆ=QNsŸº?™».7ípüÔíW·p‚JæŽÎmXkGw×•€wæÊõHß¶ÄW¼ÕrLî•7îî"—ëNæ‡/þ©)Ãç 5Ã-!ùæÝõ‚:ö”®á=ÇÝàÇâÂ¼ˆÅ§¬ôÂH|*•ÉOÄóB_ÎðzqÎðÚÎiXšE™dv~Ãð+Êo$Saê¸ ¹;R•R¤±«æ-ˆù2¤b;Q.&“Ea:C~<¥ÂBÕt¼üÊN™ô•09ùZ®ÖTæ(ìušœ9ê¯o‰dÓ}m­÷¶ÂÎ¼½Ùim¬RÞwž }'"fþ‘ØË†êSA2™súDFyãìª½Û»t«U3‹‚M^òÁZ3¡Øp\(DÞÓÑ´¢^È{`¥½ˆUjéO0¹?5GV¯ñ\"¸(½™üáµÈï€Û6J-K7ÑÈ+Œ[1Ç×Šƒ‡Á>îß7˜`iCÍä;PûV¹ •]…VÃÇ•‰3pã00ŠÜ3]þ^ƒGž8¥XááIcš<Ž¯£A¥­;kö¡1ž¥ç”UŸ—3SO12~dB•“ÉMo'’â1øÀ^^þÀ[»ÙÊí‘¢2(öSxÕH1ž.4eµª:0®\b,“P_€ÚU#Ýi<œFNú‹8}¾¨\Võ`c@®«wÐ¦ç¨¤msD-và¤šÎ9q¥eäÝ“HìYÉ-+ï2†‚›öÀhóH†KãYîÆ›ã­`_ÐÎu9ïø¢RÁhƒ&†ì©6‹µµ Õ ½0»ÌÙ…Ý¨I4˜õ#(­ß¯—\^¿¼}Iáþì™‹a»TXÂê¨-7Ö-ol²cè¼ý®òöó3<ŠÑ"«p³ÞŽ>¼ýnabÛËSÁ.–Í5&•¨©Ó–—	?Ósž/ÆØ#ôwA›"l5³!÷.âÁÓf§Ã$òƒIsXÜµÙ£ù†ó¼3&y!ù0³§¼K¶¼nrÁÆDÿðîíÛo í`äˆèš¨ÁQk6€ÏìXª™±1í×-x-ÖõŸÑåŠÕçÖ;¨ÜzÒ~Wµ‹¿-ö/ÏÜ^¶¨›AEQG5øë®“®é"•âÃœÖ	NÄ·ù¼ØiÐÎ¡5Ùú¸ÜJÕ`ÑðÍ	3è™1“dÔ¹K;†—õæòŠþñûß#Wß7Çy^'Ø“ÕUzÕkE-ˆ©…HÀ\t±P™/h™I&æÀ-÷Ñ<õW¥Ð}•¾GS¶ŠÖ¾^žqDÐñÇ_Ãè*ðjbª,¢òæ=¿w$ýÞ~öþÃü½üpýö»ªg	-äSè‘‡~D>­ù”o¾Âˆfj¡š _H>£7†$(Dó½cš!ccÄ²ÝàEÂÛÕ•Ù(­²ºjräzCíÈÚëÇï0¸j¯!j'98N®àWV‹ZÐvµ7uÛoW¶`2×«¸îbü×Q”jÊ¥šm­jÕ\aÊŒ¡ìºgß -Ý|Þ-·lT@)‰”/2ºÏö®M%Úì”«Sú»	jš\l)"ðf©§…¸a›ÓÆj¹îçMç†çw}£Á[°®ò5)àB7ß9º]w×ïG¸f9i&b[U¤­‹BË‹äéO<(äGë–X’Kò
%*Qc]"± ´ÕÕÞ,Œ-¨ŒšêYiò–”E‰3×é\:O¼;Z,‹ñJXB‰ï½¬ì Ûâ»¢`šíöò 2È÷"iMæÍ‰éNDR{©ñ(­ôâ‘ÜØèº$c‹WE·ôóbs·(©0mÚ˜kj¹åX=#±ìO&á\µ·ÊÁ}]å]Å›wªŸ5,‹ÉÅ¢JÞ²a«=Æø¿ÐhWAìñ'ªÄÄ™¤bÉ²¥‰‚ERûCž…×æ3X½p±þC]t5u^¤˜ÈRÛÖ‚0=X‘Šª¢ 5–Ê‹ñ¼»ß£ex‘Æ-‡'xçž²Sõ”U°ì”¶Çwïe2›©»nPs:˜Œ^Ž9ðÕ®A4É¼}ŽÿÐ•8÷)(Ã+Æ?Á’ÐiÆÃÙY<2B#ñ8œEèõý£áŸ‰Ùt
ü7M’á4c2}¥¨F·zñ–0>WT[‘ƒVd_(E00K§Û9N«®1ã4î¿ÇçÒsU\’=êÔ.»‰•Â}%à‹vz‚ÇTV~[bön~ƒÚÆ“¨§åêÒ½–Œh®­†5fhçö¾x£NªAöY´Ëé$™ì–Iƒ6ctÅTò·£ÅAÙjµfÆ§èWørUSg·ÃE4‹vh24Ä”2^Ëxa`ÿ(rSJ	C_?ÁúÄÖ°DÍ~%Ü|»Á‡w>b€O¼hNì¬ç=5ýò©­ÎÚ24WoR^¹(EûxïV£€E-ã±,‰r¡¬Y/3c£·ãt“ãh‚·Â3º«Þ´ß÷ù`w^˜ˆ‡û7ÂAÙ÷N5‚ƒG¬InÍ`ógÎ:óyDœff8D<_È2LJ)î0N½¼Çw¥˜ãÍ*)kzÉ)Áê£Ñ`õÝó¦©!Æ	šï
ÇLÞ,`0¾ÔKµÕÂ€C¼Ô®:ùP¥r—A"Fˆ!¹ÜhÛoè‚ª”%ëwÉ9`›«SæŽ‰£,·ÄÑbN‰£’\"N¤½/ÿ2|qÍ&äë7å4œÇÐr¬§æÅ‰U‚ÄtXLÅXØ9ŒË*®M×RR5s”©+­J â3ß÷^Þê68pèæBá.|¸½Ž±)Û‰ gŸªòÛZ‹¾_‚‹ñê¢HY,€Äñr)ä\lÝ@ u>® ¢O/šqr¦í•ÜC2m¡›†ŽU~Ì}]SÎ5å<¡AW"à#ÓÄßK@®HwsÍ9`f Û5›\‚Û‰Ñ¨õ$–'Þ:±}FÿÀ9wýîûÃaž‡ÀjuYb) ³In;7“ø
O	æArþ@ÙgÒY¬‹àÕŒu¨,ÙþÚ .~7“'Ð$ÖÇ~ðbîA¹÷&~m¦]A¸D“à‹à˜³âå¸BœWlUÍÎ\Í”#Ù1˜m:»@P¼>2ž$É©@¸èÏqŒe«)!C;.0,„*ãgˆvaâV|Ù8|Ù8l´Z. ¼ <‹Ìã/5›fÕ_25ç¥À/0
ál*á—Å@ÌM‚Jõ]Cc4äË°ÿ55ŒßÏ“‹^Ì²q8Œ†‘¿¼§øz:	ÇÑI<ãÆóe(Ð-ú!4Êâ|È€(È á¤y%Ê²(FÂo_½JƒÊÉyQŒ]‰{ÀÕJžëÁz›VÁ	ÔÓ?Ç –1ñ{ÿk»)š§§a“&á™<‚X#ÎøÎ³FyÆ-Æ#Ï²f¥²ü¿ÿGpx„[Ø•ƒCü±DHâôýàt†ÁëPÆ†R=&eNcÊEA7ÿü/ÿ×>”‡ˆï´Õüé2ã`ž_„g³ñ4„ÊÅ¸ÚSM†EGú”C¶à¹9w©9À¸Éi<ˆ>)L53ÄéEq	<ÆUzOç5huŠx…Ñ1#„gj†¾„fLã3Šèk´9f„oÕ‹kÙ¶pžVÁ‘ÌúS)1Pšâ¥XDr{8Dçìé¹[|EÄñÍ£à=èàœöµ}Æ@¥8{_Ôæ],Ë§ñä‚ƒÛCM¡NýEcO›K*è)üÉl`”¯ IÉ‰‚tÕ[*SÔfž4ºˆëˆ+Iáà%õËáY`$hÑ]CÂY ÄÈYR€g!s*4z``Y¨>$‹“s8r‹mŒE·íƒ±h·Öÿ6`,ÌU÷D×Á$|-å¡Í×‚ÃZ 2ˆÄ®÷3%$´¤§³8ó¬¥A"Ä‚ _q=˜Áœ;6„Zð«7>_Ëå ¿Æ"ËAr5£µC^ö}¥š£å7Lj`HÖr‡v¬uÂ–CJhÉ$™™…N	]ß3.mî:ÎArc¨” ö€â³ ¶´Âªp*Á£Ž™ºâáYŒôZdH"¿j*#ßÔ8›"G-ZNg-üSuB9¡+”t¬y…\±„a(Ê,lºb[Ä(t¢dxÉ"&G>1`ˆ-ŒàÜe3ú$25Ìi¥É¨æáHï“ ¶`|~$•ì« †ç±0Fù…9[—ÀØ0ZìÙ éyLiAQlÜ»á„S	òó‘ÅÃ­$rÃê­Ac¼ ¹k9®ýÞù–s~±ÞHs‘”T©-F×Á>HÂ½À\<'µüçÍ!	â q¢ß!8Ô/§VAz©¾)È­»ð³¦‚^¶Á‰>Ÿ@£è…vHÄHÀ˜EÒòVIL Q]™ª0>5kpíAéö¼.â(½,4ž†Þ2¨ðŠcéÞ¨ëâõ±/µæ˜âÒ‡ª©Cv¨jÙw:e#qlùGìÖÃ%íÉàdÍ¦çeÇËîp–P¼”j-KÕàÄPUYÞôª9–Ø)(Å(º¾ØçÅ7Qcƒì1(<8àçGúùð
ÁñjYÖÃ‰¥ŽC—·PeFN7)ÀÐZæaß1ce6Æ§L¾øNxŽ™²È1²òA¢”‡…Ô¦ÑÜ»ü3®T<vÚ`™Èˆ¢ÐHNØªÕ¨Á˜è
¶6"±ÞÄ6aj>‰&ÉÈÐT g§±äŒ'«¼ÖhñN“ÙÄÒQ–¼6DÙµ»jc•B©Œ£¼6mÁ"‡‚Ñ	v‚ MB 3NÔŸ‘M Äß8Œ'éßÄ2[”"D¢ƒž¼®‡Ìm €¿ˆtk½o 2ÜVZ)ìbÑRIbŒn²à¡
ÃŠDaXÑ(O"0Ð ©û°\Þ|/ÁÐ6bü9¡(»V3(¼9aa,\Û3$´"]Þ8"¼Ðz ÞQ€q7´¸Pß‚ðø&—U}çá;äÆåùà„‹‡õ=-«Ý k&¾½Ý]' a6¬"TYïM}!Ímnrq0S^ha!Ý11Ù/?¶vNŒò¼¸fìr7Ã8åA¤b;ÔhðÎQM=ÊÉTE£_6›.Ÿ•b…üàÜ:"¼'yCFL¿ë9Ö ©Vr4‘Láå"·uctýÕ¨`ªZ”luíXªž†”‰ë‹Pè„œ`ÙÅÜ¿{—mÆ[½Áx@)äETñ"õ_.£%‚Þ/E9‹IY;eLÍ×döU(z›åw”Zö×>~,ÕÍ˜»FÄènsQÈè»ÒÍ„àµŠ·‘?ìP¼¹Ð4žÐÙ7†mÍJÉãfP žxéÿ£¬{[‹ƒ®ë0ÈQÿ=j«9c\R/zÒõ T)f¥E@.yX$—(L
†/'”s„ÒÍfµ¶ÃÔ³–Àì°¸ÿÎ@¡$i<°¥¾ÓK†/ŸºÌ¾´²[ %ÛG»áuÞýóªÂ­¼ðÜžf;æãB4ƒVx3trçòuOþ ÏºPÊnñÌšEV‹3[g`‹1Ìb+Â,³ã"îD€½¼Yåu½Âä_=ãšý{–³åã¤y£¥zjÔ(§Ç0:úˆ.£ùD½±²ÅewÆp†Ê+¼¤ñmÛ¼E"­0X¼™¶ x7Ê"_¼/µ0l<Ä2X¼ý¬ßÝÊÆÎJŒÈóqw%¥Sª×a¯²‰jV«+{yÑ¡ó«ð—Í›Xò*³
#œh|½´v‚_µôêé³ý×^í?}süìå«G¯DÀF [#;´b6QZ‰‚Ù¨ÐÚZÒ1¡³!äœð{f$9ÜÑ=¤Ÿ+¬^í®l`´nÖP1yÓˆ1'«X\èîÂnçEÖÇ=i\tØweÏ<À¶÷…ÍÚ"…í42ã“óíîJ2¢‚ég¥jÕ°·ŒTÎŽP7}>\ã·…YôÁ»P]£Áž:;.W/¯ì‰sæR™,/Å•=ëdºTèÖ¸²‡GØ¥’+÷Ç•=uà]*£8€XÙ‡ãöÌò‚ŠY.N£¡¨pDúA4¥Q a§#%kÌÕØ”*ÝÖÏ¢?êµËbfä|™›Ú?Ïg‰
$Â`ÜÁ$¼BZeyÖ˜1º„=q*¹?égA œØw×|åHr›èBöÔ×O×rx¹Mó¹€=üžñaØ§k½8^»Mûe{c|Që‹¦ŒiôåNËüAÙ ½pŽÙ+.ŽÒüàÊœôX:Oô“_w‚ú¢lûè(·‡K$öqf™:¬)™Íp×ä#8yÐzÌî~ùmÊë‰Í: ÝpwÅÂEO¢:!#­ìåô óÃjVêFíàðÛÃgOméÄ§±>æSŒ>†FÄµýÜt¢=ôtÕN®ÊÇ5™GÂe_û`U1ÃËs<ÕGt	Óã&F®¢Ä•<¤ ;ãJ]û×†?f>_Š;ÏÀ.ZÙËq"+œ|¢€W8d0ù„WY™,èV†S\:—‘ÃØÂÈö·¤íOT’H4x'³‹ÖÊžÇûgq¾6ås½ƒ>rOm×”½ùíé´E¢z ÊÈÃÐ·ÐÆ˜{zê0™È8Þóx=Äk¼£³=–&hnÓOr=Ùc&a×#åï5Œ#vÝdgzËÕfèXÖ¨ZÜÙûU4·VIx$ßÎÌÙ<Œ÷d‹l§.ÇmG·t	2±¿¶éŒŽµãS‘ÓS¾ÃÓNÇ;2¹ÂÃðâÎpS^g¼^UF‡à‰ëË1*!ÔÜƒÿ1&ß€bv–j92» ø¨¤A=«ôÑã>ªd*£ý×$¸‹±œ*øûÚ¬½¼8¿Øÿúé—û¯Ÿ¾|>S×•õ	¬ÁO|j[pwV±·eq_gw/º6¨ËxIµl‘\F•UÞæXå°e‹Ê*€Q¶Ü-¡€f|^¾ ŽÏðv>w†ƒNëm%±•WªwošïŒšÂÁ@WóÀ.Å½¤oîü@OŠQ*<þ¶BÏ–keë6­”›b‹ÛÈRT´ò³ŸIÎÊÝ«&bi±Vš^ïVa…"×ãŠq^Ì@¾|×ÓÊj{@1ì)¹± k'øñš½V1žTk£IŽÀüx½m?>´wÖùñ‘]>þìƒ¨‰ò5;"î£ó(šòVV9f5ÑLÞiB‘}ÄhwiGyTÅEçm)Å "ô$Þ»¿fg¡«ÐÈþu=ÅFöçõôhŽüì¾ùìÐ~vŸÙyá]¬gµJí|9Ã(ç­ôç¾lµðJ´æÜh¡ùìÐ~vÿÜh¡~VÐBÞPsÚGAéZ8´ƒù‚Š¶æFâ©nŸh	¥’ÍS©ò[gmá©6z	Õj5ES6›FS6­§’Z*ñ}z,[´i<Íon¶EÔô3²-ÒnfÈÍ1Za¦Ìo…Úm,&Ë†—*~ªt¼T±ç7Hìb7GõmÛlŽ»³=[²Þm«9jìºª9(O•Áë“•1b?ˆ`ý"R"Ei<ŸxÛn`0Ìq«qÉsþ1Éh–r“ÀÊ1”vÜ†ÿ;¦XB5„*¯he½iozêMKå2†³Ãqöíðý|z¥"•’âtU§þ½>ª=÷z¨:UÚÁ=hÏ=Ð8=ûIZQ‘BëP­Š0Ú¢ ¦Õ*aP€È†‚èÝñS‡q*wÏaáÿü¿^Ã{»`	n™„á0î‘sñH’ú‘cÂ×9u‡S‹Gs~d¤f/ws3ì¥¬ìå¨S-÷°@ƒâÃhÔ’éyô!5ÈNÔvµ©r„¸9HœÞ'
äd¿Â-]8ë=Ê¤~ˆ$³É‹>Çt7…õÂ¡°µöqáWy)¾Låh´¼‹ƒx@DÜo\Wƒ=üe¾;Tï¬Vö¯¸FQ¢Ð3Ý‚jðÅFBza$”ÏÖ«×„9ce5&¥9©•8Úr6ÂgÅœâ½JïT'n`Ñ©FÅ¤Ûúòó  ”LzøaÞgðžïG5ÚK¢ gæI{+ï¡™BÞ²¦¼Gæ|s„PÿN^¿zzø:xõè×_=}õèù£¯w‚#:šQ—ÇøRÎ\\{ŽõÍ@œ­ƒèlE©jIœ>â·øåDU…Og”|°KÖ)3uP1³àM·ý*r·ûôÀûôÐûô¨* 1Â+êÎ‹jîû!îÅÓ5 ÐËOëŠûñ"Ëš¸%.ÚhÏó;NDë¥xƒDv[q˜àÝÒk(<[¡}T^áÚ«9íW×LQÁº‚\aôxªüžôD£H²æ‡d9CÒÛn¢,÷õÇ7‘$™hÝM¤yQ…÷Óã„slÝžXŒ êkG]Ç¯væÑ™ÌüPg~¨3?Ô™ŠÌ8¼¢^1\Hvà<ôÖc#&¡ZWÅ¼í©%˜–Ã@>³s –o‡´‰òˆnÞ"ÚÈ­´ÍëÜ†žP¸ò¤-Di[‰t=i•¦ gìÚ[g»©ò½ømðÛ1Å»5–\õ#Gì~Ûë{Ó)&Ñ‰‡Ã³Wº‹¼`Ùë“ˆ7žöúH1÷i€d31Ê®ŠN!ùŒîƒC÷Á·ùA’¨^J® Vo0•h†Z‹WØ;aå™ÇI¢N¹íTºd#©p?x`1¦åP Òî0|¦ýÿ  ÿÿì]_sÛF’Ï§@éª,Ò&e‘ú¯¬/E‘òÆ+«5eïm%®HB$Ö Á  $æ*_æ>Á>ÞóÞû}¦ë_÷f IYrìÔÕ½Ø"0˜ééžîé3­VÉ«4&Ä™¶ßØ¸ùB—Ó"±†:wKÁ!ý|ãmÑé0@€;O?Ø¢Ï·Ì¯Ó„)rx‘oZŠò,r‹­éyõê©›]|â×\?©Ì|Ø*ìïúx$<€úðä}÷y­Lï‘3"ã±F*ÑS¨JÏ<RŸžvù/R–žöø¯ýÕeDšŸÉÕè,o$väC”ƒbÞÂIÇ:I|¹s¢“-»B]öËî?r´¡$™yŽµ¤~èhá·)úEÛ;DKË 3¥ üºH®>´	Ö°.IÑ‚±Âêý5~›`6*´g´ç~¤¾…××ô•ú¼™&·“š7Án Ÿ½ÐQ©]l÷¯öKõE³ð…šK7I7Š‡nÃ”Ë×9]XÂ´Íƒ³»x­?}Äzéùö¿\œ»ƒmýú_™ŠôÃA0g—Ô±¸÷ðÈuÛ°eEI#Ÿ~Ca¤Q‚²î¡
rù£P‘ 'á3U*Ãžä7
QMQ§<÷¼*–ªwÜe=¹ÑïØzÏ §¸X2:Ôoý•õÁR>XêHªü@MWŽ®Ä.4ñ	Ò^«ÄÏü<hÞ]v‹Œ–’ì¼C"œºv{Ê7ü™þip”J’ÒšgòR»õ_ÿù¢=›è–½ÆÓ,"‡úâ"5l$µÝ†÷¤ø[ÕùeõKäš1îi‘è­+)KY°mœH@©ªj)»k»¾ƒ*Î‰ªYe÷­m‘?&áh¨2 UÀÅ*H)ærw/v¿öîþ`ã€~?{±‡"w%>á>\Åµ»Æ®z€ÎùAw.Wp²®v‰a—p> ÷w·±tÇuè·¬V•'ºöŠ”&Ö#sGI¦ìº8VÒÉNëBAe'ÑVêv¶±¡r¢‚P‡ûGûÇB(Õ Èpï2nÒ­ýpÐðt%›uHé@haÃs0ÓÅÓîN	'»;Ã‡gÅîzxÚ[ÓúûºmŠ™kí« îGþºJÜTŸ¤h×+×öÞé^B•õ½3g÷¹A¢ûÜ`#—+q¸Crùíà&˜Å£ÑvõNAÈ‘[JŒOÀ6ŒÎêÏá;µM£®<²£ž<²Í£Y²©eúTŒÚ¦ÏžÛúsûVòo%N¼Bk4íLTº8bÒHFž4Z{¨L+I(ÈÝÌÙ’8`Ø:œÚêŸBÏ¦cÅ
óù.ÁFTEƒÜáÁFUE…A˜ÃF’ŒÉ÷™ož[EåÙ¨õ@¢wsBûú¸*±u	4”ÚV^I·ÕSÓ×ôN:`¾A§˜§j³Tm–Òfé¶))ª
ŽÓ@)¬cä'Aœ&«Ô{£KØå–¹¢Tƒ¦Ò ¨MïPŸt7ôÉÑ¥HìêU/…¼ƒaåK!mnº/…èÊX×$×‰rfíK…6K±7ôÁwÏP#{×)(pRJ zÈBž£”Z°|Ï!ý7iÆ‡¬9Ù
ë×ÎXµÂïJQ_¥>î—ÕÇ
ÊâŒÑ¶;S•À³à„yÓjÛ€ó»oùÚz·ƒã¾žQºNI+$è4´²òuiuå2Ê^c|ŸÔçÛ0D_iIƒL8ý¦?ß¿k[ƒY¥c²ÓÙ¨0bF£¼¨•0üýóŽW«¸è­þãOÜœ ý‰öZ§[g G-dÞ€jg=õ®í²â}0¤Åµ‹#d{	ŽH@»fBƒS¾ôË³Š—]ý²[ñ²§_öŠÖGnó]+0¶¶TªŒSåæ‚' üÒ8¸4û^;Ä§?p§2²½DkþñÇK7®éœ5AP8oè`Öi_XE‚v(®€OyÕª¡gÑJÀáÇ!hEàß¶D½(­ý°ýI&@Ëd-hK¬YÞµú&h%ã­Î/A\+ãüÀŽìgÅ„ø’1a ÎãNymÏû>ž5Íeˆz©Ÿjr›@(QºöŒë¶[@þz¿Þ×1uEþ~·×¾/ƒ³üŠ’ä°¦T«9WGÃäÅ6
	M,†¬l5[Ù›åÚÓx‘£øv†B"A®D)‡"„vr×¢{!	š—r³?ÂRpY¥
È¦ÀË§}ßï`ß³Ú,­6Õm²xÎÒ¨ ho…ñÉ×¬À¹~k6N(BîSìžÓ%{)Í-7…ü0j©õ­-J‰bÚsmõØƒæbyÖ®{o¤šÌ–ìÞ0U«"k{×Ê³°Ý
4s¼«¤G}ý ËM¨ÛñÝljÖ-]ÑJšt"\ß®Bçbž×´©ÈãÃ÷*¡±ê ‹÷o};£±»1¥Ñ>nb%5v%«±»*­Q5ceŠíÝ©¤.O‘4Hj‚\ ÏÕÑ®ÎJ”C’¥Ä×°#å±L¥î)c²ÇW»A}7YŒ’Î¹2— Ép]£.¹ŠÏçVQäœ¯¸n Ã¡%°°Iù9ŠÔ?Íµäç:†ï‰FúžÁ¿Ó—3°ñ¤¦úÔ¸qéIq¡Z-K­à»E+V•ÇMh”²3TføÿÁŒßi0£»!šÑ­gt+<^ÝÇ4ºE?Õÿ¡ˆFwmH£{¯˜Fw]PC¿\Õè–\kèätQ2ºU‘®Úè–b¶G¡$þ´­ËÇvV­Îý£ƒƒÃ“‡®N-û¹|Óò¾ÒÃP^–¶gˆ–]ÞÛ~êý†·ÿ¾^	¨<Q~cBÒNGùAv”«]ÏW½îê×]óÚö’oàL÷pV9@O¿î­ ä…ÿªè¯Â‘í‚/ñGµþ ^Mõ½µT_‰N»«JtT4p1^ÑÀÅ˜a×U¯'\[½ÈÄÙ³LÑAÎC¨É(]—øY±µn¦à_ã@·›©É¸­{ÅÖº™H&Q±ûW@mùµW|P Üòs¯ø  »å÷^ñAüÜ^rˆ:º˜íò¬ðŽÏ³bqZBIÔ³ÜçÉÏ£UOwíTŽíú<ËûKµÓ³´ÃØ^OgùŠý2Ÿt\µü†v1Ú›ívÝÌÊj¼4—h|€Æ­ÝºÄS·só½÷Uá*gùâVÎbw‚M&å,ñBDËYÐn°jX1¾ŠqFã«`WÞË‘$ÿ?â–üS7wŽ«õª¦>ÞFÂ[+K#›Ãß%Gåêãœ¤h˜r… ½Ñ+jŸ/{ŽÕ	Qé=ŸÇÇwÓä¥Þí#æÔ}nä˜mÔÕó1÷eÌuƒæçÂ+Ý¼â€+¹yëú°o­Ò—«0ÌYÔ’¥QÙ¡{ ÚU@éQÏ*êé×½•@	P½
 Œ!¥Öªù,(×pÂi«)ý9ÉÌ‘bZÚôõ§ôß`ÈÿÑªÇH\Ÿ¬R8Ë^¥0nÀ3{é8EŠÙÀ™Ö}”7­ûyÜi÷Q”WíE®£-—ÍâaË¥ïj×ZÁiñaƒ{m=>×ø×ìqª½l›‘½Ý8í­ö$çƒU¸7í•_‘Íú à˜.¹­<¥H€OÄÊ§?ÈÈß;T®å©)ãà=ÄÆÆ÷V8ü ï[…ÿIùàtÕâó;.ýAjºê:žE1{”Lejã¡¶ª–Õ_õ».tüÕ{šyp‡‘µ°HÔ ]LûáTKO=óãUL YPßñoýWo_óÉþ¾àP•’3å|iñ(¿ÇÅéÌr03•²6QäµN¼ÔìÂÖ;Ùyûúêoý«Î÷½Î›^ÿÔëpÕ€Û_¹œ³Qs8LÓ&
ù5')ª]4‡-]m¸2PuÑan¢‹5]éÊ²þ 7Ê;‰ì¸ÙÃ½êC÷O?Ç4®[…bî^—:ùø²Ë•å•¥§T”âÛxæóhiÊá
ÐnâÓÂ\©ˆð=¦uˆâ#U…Œ¬×n…!T÷qû÷!Î
y(äéÅÔZ•”4Å‘¹G&µPô(f€ÍKºX»»Lú¦¿·–ðRTÚ!û«¼L-`¯¼ÖåÑÚT{%BN¹ïE?‘{_²¼¬(ÎyÁÌó{_¤J‡ù²xM¹h/œ³+ÊðRÿëŠ5§õOAÔ1®i<ZGÖ¼(¸CØ®)wœç0È¬=uMáL»d¶
¿Ö¿Éß¦SË*‹UmïÀdä1	U)¬4¯áÊO5éåqeycajˆðBp]\Ëª=BÙ?]9âa¤ôçÍ!á¥¹(°s‰ÃƒSÔô]zµ·´;{Gõ"Ñ eYÏ^„Q8HÂj¿èÓÿþÏ, ]&ÙN½Ë$œA™fË*RõÀU„rÚWqe^Q:°Àâ]ÌÇnWûnØð¾›ãp!&NåŸqò–Xûs´ýŽKªƒ¨S8±ÓIx™ƒ‘ªl·úâ¬çzÖ\ˆ3˜Î‘!´H¸üz¦ü—ýžA¿K¤¦-Íš^¶³1ñå$mÎÓVóÐ¥ç·ýæeß<Õ$|\‡(©îå´|£‘áõ¯aÊüþýþG“ðž¼Æ°I±Jz‹Ï¡†TÊv¡œ.Å¯—¡ÔºçL®M“Ž.„Ë÷ÝÆ‹ˆÈAÎpµñ)7ÎµTÔÊ^5Â’+IûH–;ÙÈr'E–#(™Æª¾»H‘s$p$qã¿1—uH%Xþxc?ºñg´õ ”@@‰–¨Ê=¢(m˜Lf~@Rw9…FÞie•¸p$Å5­6W“ò¾(£¸WŒ[ÖÎ¹ÓÞù?ÿÁ5½Ú›«ç³—õhFL6‘zÏšù(fM<žÅö+Yl¿@²s²‡Æœ’ó)‰Cfsb¬3È;ƒ)KØxŽíþÿ¼ŒÖCs²4}–Vq~î›õ‚Ð²£ˆl%9*f9"8rñ §Ò8™ëºÜÌ™‹JZ›ZÅº£`ÌÈLYÌc©¦*¼›YYœÑ`Gz{0³Í'Ë´Ùj.öKìvIoÀF-ÅnûEv{-	d1ô§Å´á‘¥¸@zØ«à¦XH÷e¸¹ŒöÈMÍB‘Jo›æÐ…
:""ÛÄPŽ¤CÐbË7T™Íë§ëOÑéWi¦™:V¿†ù4×â¿½™_ÚyÅd›_ÌS»†²c÷g5øþmÏ©?Oö4¤K«m%fýf2/ßÈ§†=d	ç8æÝK­|\8ø{€-¥leÊD¯ÛIÀœðµ³Ø›™PÐS,"<–ûÍV1ÌSMŒ¿às)%­ûðû ‰¯’c?á;-¤¶5›„óû¿R¸¯ÚRHÒ-Þ-ÍX*ß
ËnaxÍ/R(¼AFÃ˜S
U%g®„·Ž$­ƒ{È§Ãòé°(Ÿú!®ñ¾õI)À&|3×<ñþDHÔ\?‡|Òê ‘"‹®_—µ8²‡—B“™Šƒ­€=S±‚=N”Ô‚eÂa˜­Ýî…äÖF$·ŠHþŽÐ#†#!öê6nöÈÎ›A&2ð5ÛŸÅÚÞCvj)JKâeGÜð¥‘¼K´züºÝƒ–‘ƒl®i¼ÉdÜŒÍv•«±Ù^¥ÁŠºJkI5Ü™«W+ÑäÌg]®½®8j²	é¯É$¾¾&?YDXºoì÷ìšè²€]îÁ$¡à£¯4\»?®F¦-’÷*ErÑöç…ÏÛ	DsóÒG* ´·ð#Z
„ÌN£’ÏU^Iõ#äó§Ð&Ï¥¶w`vDÈ ¥Ij¤ŸÆlv‚‰.TN|Ù;•1õÇ3”Yæt(_]¦1£OÔ€p‚!6K¨9>Fi°ì8›kÜð³Ç‘'"uÿ Dž×}óT“çrgqºœ\´( (’]Bª[â)C€	ƒ´J:¯"Î Œ£xüÒ`óÔJ¾«ÒOâ[oîBži8q™5´mÈ`‹%é¿¦Öì7«è«q\poò—ôEqæÑ'žñKÎÒò¾ÁŠ½^ò’×K¶R±]Çc<Xò¡ÒÙ'ˆ±~
Ô¦I¶¹ý7W„àã¢Ç!	ÇñLWñè)®®²gã•4sbã/…a¬çÌ·?Ñ' S.—$P¢€ä†®”€ÕG$*8ÃrÉÂ¡Žéì”DXLrbJ$•LÕª´À–nˆJóXñßªÔÈ[%ü±I®Ü>pBæ~ø +ié1½f©ÓçÅ"©ð¾þ–» “fäº›—ù„QÏOmDš;½Ê}	¢6º¡@b©qJp¯~–Á¤Z"Øk@/ãüµqšK¬ ³ùE[cªáà1cP¦{\KÆÃ.½‚‰[áÒk"C* öŠõx\û‡C=~i±Ïãä{5#“'ÇâwP‹La¬á½ni›@|qÃtR‰y“çí-‚¯"ÓÏwýóË7<öçL–ƒ$…¿ø¢ÆâyœŒÙ‹øêí%©XbãB:xàlâAv?œ6~4l.ŽË´a¯
pBšã"iiGë×/Ž•†]{‡b°²Hß7ô+âRÕ„Ù  ?Â!$Á%µöç‘?“µrcÀã2”üW’ª¼¯ÓØ¼iæû›©D8	Ì™k„	h^ˆdp¯TìÄ¶¨•äa	8M›Aš¶‹A‹‹~ó¼ßo—¢ŒØ{N +wÕŸ†/l3»ÀÅºö“¸'.øðB.ø›Ç|©ÖÂU·r ÊÖbÆÅ1¼	áŠãP‹ã,÷z˜ç¤ÀNnôcK<¿0ýXMhæ,Š´‰\%ÁXÈ9ŒÂ)"— ÖD«ìþfbýß²@P„ñËˆfOZ±Àá©Â£ŸÝ‡´Š.pé(†W,…2î–O›Õ_Æú‚CGL$²Ef!å&EÂOÆS«°.ºƒE½¡Y°QÏH[ËK›ÃyÓ_“]Óßé^’]T+úA&Ò’Äu@üÞSrhÕ÷ÙËÔÇe#_JÕëi"á.!êã‹Ad*©"ùB¯ÆŽÒ€éCdÒ’Öõe·´'ùCâ‹0e—NlE5™­ïéÏ¸*¶˜IÀ7ÌoàåŸø˜¯è%ã±Aª ¬mÇIcÛÛ&ºã¿YŒ´äu4>º¯›ÙõZ¿Ü¹zYAã7°£gÞíÐ(žx¼ë)û©“½þb‰gë‹iôˆØq°N¬~l.-§Å¨¥}©)$nZM1Ÿ& ÔCä×êÔ˜”ç4’X·“Üf½„e/Ê¼‡ƒhI:~v3}EµgÀøÙOBµöFªí[›HVÊÌù"æïi/Õ!¹/EDTmöIêAžÉ¡„ª•Ä"*K0ƒ} tì©¹ö>ÿ—âÔeêýÏ5P`‹ÿ§ECÿsÚ’‰N‘7[LA¢Ù–Ì6vZX[vÎû÷˜êTçPŸê|xü1	D­ð=Ë+K-yŸ]Ò² Mª5tþm”N÷“Ž61VÏ}%Zm:[d£e¢Ôn‘ÆáˆhÃñÒ9Iz†Ùb$›ã|‚x²ã#iXº5j'÷áG;Á–é½á|´"¶pË@ùR~ÆI¼d*…r::‰#çwÊËÞ~‚l!§‰ãg~b?¹áÒÁˆï³4/~-$þe˜ÒÓ*H	¶óV/Ù;€èðæ—ÂŒLÀöÉ÷‚yFV›¯óxô”æÆÑŒX;dßBgH«bªmF5Ï­³€Õ¤4%‹™ÊÝˆbâßo¯.^XéÃ¢^©lÒ_‚„kWf¾ŠIy×´˜ù¢¦ÚA³€$°¸S`è//òˆ%!{9Ì-QECUñâíÑˆ9UŠrzcøR,&l¾¡d|ö'CNÓik’eóôôùsRÎHQÛYÌRF)ÎZOŸ³7´Ù:8ÚÛ?9Ü;8ií·›ƒãÑñ=ðüö7þ"‹_ˆ÷Éu˜½ ÃiþäçÇ»On_´vÕX…°õNýöˆ.šÀÙ¡¨zAÚ¥öâdV )ÔJ¿&]-áxO‘®¸V1Æ.Ï#âø7Ð^ +P™'ƒƒ²P¼Ÿ0žµcX‰åSÿ	Ëù"!uŠyŸé,ëÇÈÁnNÚÙ€¶Ó_!›µFRênß!Ô}ù·$S“à˜‚^w’ Äñ‡ôA¤ÛÛ?hí·ŽŽš{''ûþáÉÈ$ÆŸ×‘MUM´>)—ø|fïbç|´ãî[‰„ãºBnvP"Ü_h±G„bÏÚq«ÈFó˜2»t^yÀ’§h;%ÝØG6Á6Í‚$# AðaÇ»XA<…ŒÁÌã³9“ )I‰?G‘€µ˜2ÛCÒÏ4{9Žw÷‰ûG‡-úå·NF‡û'‡å¤26µôÿ_   ÿÿ z¤	