import { SimulationItem } from "../types";

export const RESTORED_SIMULATIONS: SimulationItem[] = [
  // 1. MATHEMATICS: Geometric Transformations & 2D Rotation
  {
    id: "sim-geometric-transformations-rotation",
    title: "Geometric Transformations & 2D Rotation Virtual Lab",
    tagline: "Interactive 2D coordinate geometry exploring rotations, reflections, translations, and dilations with draggable pivot centers",
    discipline: "mathematics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM"],
    standards: ["CCSS.MATH.HSG.CO.A.2", "CCSS.MATH.HSG.CO.A.5", "CCSS.MATH.8.G.A.3"],
    description: "An interactive coordinate plane laboratory for investigating 2D geometric transformations. Perform rotations about arbitrary pivot points, reflections across coordinate axes and diagonal lines, translations with vector readouts, and center-anchored dilations with real-time pre-image and image vertex tracking.",
    learningObjectives: [
      "Distinguish between rigid isometries (rotations, translations, reflections) and non-rigid dilations",
      "Apply algebraic coordinate transformation rules (e.g., 90° CCW rotation (x, y) → (-y, x))",
      "Understand the effect of moving the pivot center on rotational arc paths and vertex coordinates",
      "Analyze orientation, congruence, similarity, and scaling factor k² on 2D polygon areas"
    ],
    thumbnailGradient: "from-blue-600 via-indigo-700 to-slate-950",
    badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    iconName: "RotateCw",
    rating: 4.98,
    reviewCount: 52,
    teacherCount: 210,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive 2D Cartesian grid with draggable polygon vertices and draggable pivot/center anchor",
      "Transformation modes: Rotation (0°-360°), Reflection (X-axis, Y-axis, y = x), Translation (Δx, Δy), and Dilation (k factor)",
      "Real-time pre-image vs image coordinate table and algebraic rule display",
      "Preset geometric figures: Scalene Triangle, Right Triangle, Rectangle, and Irregular Pentagon"
    ],
    parameterDefaults: {
      transformType: "rotation",
      angle: 90
    },
    parameterControls: [
      {
        key: "angle",
        label: "Rotation Angle",
        min: 0,
        max: 360,
        step: 15,
        unit: "°",
        description: "Angle of rotation about pivot point"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-geo-rot-1",
        title: "Execute a 90° CCW Rotation",
        instruction: "Rotate the triangle 90° counterclockwise about the origin (0,0) and observe the coordinate rule (x, y) → (-y, x).",
        targetMetric: "Rotation Completed",
        targetValue: 90,
        tolerance: 0,
        currentValueKey: "rotation_angle",
        rewardBadge: "Rotation Pro"
      }
    ],
    previewFacts: [
      "A 180° rotation about the origin produces the same image as a reflection across both the X and Y axes.",
      "Dilations preserve angle measures and shape proportion but multiply the area of a polygon by k²."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/geometric-transformations-rotation.html"
  },

  // 2. MATHEMATICS: Advanced Multi-Step Geometric Transformation
  {
    id: "sim-advanced-multi-step-geometric-transformation",
    title: "Advanced Multi-Step Geometric Transformations Lab",
    tagline: "Interactive 2D Cartesian transformation pipeline combining translations, rotations, reflections, and matrix dilations",
    discipline: "mathematics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM"],
    standards: ["CCSS.MATH.HSG.CO.A.2", "CCSS.MATH.HSG.CO.A.5", "CCSS.MATH.8.G.A.3"],
    description: "An advanced interactive coordinate geometry laboratory for exploring composite 2D transformations. Perform step-by-step translations (T_v), rotations about arbitrary pivots (R_θ), reflections across coordinate axes or lines (M_L), and matrix scalings (D_k) with real-time coordinate matrix tracking.",
    learningObjectives: [
      "Understand the non-commutative nature of composite geometric transformations (T₁ ∘ T₂ ≠ T₂ ∘ T₁)",
      "Calculate new vertex coordinates using 2D transformation matrices and vector arithmetic",
      "Differentiate between rigid isometries (translations, reflections, rotations) and non-rigid dilations",
      "Verify invariant properties such as orientation, side length ratios, and area scaling factors (k²)"
    ],
    thumbnailGradient: "from-indigo-600 via-purple-700 to-slate-950",
    badgeColor: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
    iconName: "Maximize2",
    rating: 4.97,
    reviewCount: 48,
    teacherCount: 195,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive 2D Cartesian plane with real-time multi-step composite transformation pipeline",
      "Support for translations (Δx, Δy), rotations (0°-360°), reflections (X/Y/y=x), and scalings",
      "Matrix coordinate readouts and transformation history stack with step-by-step playback",
      "Preset geometric figures: Triangle, Quadrilateral, House Polygon, and L-Shape"
    ],
    parameterDefaults: {
      step: 1
    },
    parameterControls: [
      {
        key: "step",
        label: "Transformation Step",
        min: 1,
        max: 4,
        step: 1,
        unit: "step",
        description: "Active composite step in transformation sequence"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-geo-1",
        title: "Execute a Composite Rigid Motion",
        instruction: "Apply a translation followed by a 90° counter-clockwise rotation and verify area preservation.",
        targetMetric: "Isometry Verified",
        targetValue: 1,
        tolerance: 0,
        currentValueKey: "isometry_verified",
        rewardBadge: "Geometry Master"
      }
    ],
    previewFacts: [
      "A composition of two reflections over parallel lines equals a translation by twice the distance between the lines.",
      "A composition of two reflections over intersecting lines equals a rotation by twice the angle between the lines."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/advanced-multi-step-geometric-transformation.html"
  },

  // 2. MATHEMATICS: Unit Circle Trigonometry
  {
    id: "sim-unit-circle-trigonometry",
    title: "Unit Circle & Trigonometric Functions Visualizer",
    tagline: "Interactive unit circle exploring sin, cos, tan, sec, csc, cot, radians/degrees, and synchronized wave generation",
    discipline: "mathematics",
    gradeLevel: ["High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["CCSS.MATH.HSF.TF.A.1", "CCSS.MATH.HSF.TF.A.2", "CCSS.MATH.HSF.TF.B.5"],
    description: "An interactive trigonometry laboratory centered on the Cartesian unit circle (x² + y² = 1). Drag the radius vector to observe real-time projections of sine (y), cosine (x), tangent (t), secant, cosecant, and cotangent with synchronized dynamic sinusoidal wave traces and exact radical values.",
    learningObjectives: [
      "Define trigonometric functions for arbitrary angles using unit circle coordinates (cos θ, sin θ)",
      "Convert seamlessly between degree measure and radian measure (rad = deg · π / 180)",
      "Understand the signs of trigonometric functions across the four Cartesian quadrants (ASTC rule)",
      "Analyze the fundamental Pythagorean trigonometric identity sin²(θ) + cos²(θ) = 1"
    ],
    thumbnailGradient: "from-cyan-600 via-blue-700 to-slate-950",
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
      "Interactive draggable radius phasor on the unit circle with snap-to-special-angles (30°, 45°, 60°, 90°)",
      "Real-time synchronized sinusoidal wave projection canvas (sin θ and cos θ curves)",
      "Exact algebraic radical display (e.g., √3/2, √2/2, 1/2) and quadrant sign indicators",
      "Complete 6-trig function table: sin, cos, tan, csc, sec, cot"
    ],
    parameterDefaults: {
      angle: 45
    },
    parameterControls: [
      {
        key: "angle",
        label: "Angle (θ)",
        min: 0,
        max: 360,
        step: 1,
        unit: "°",
        description: "Rotation angle in degrees"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-trig-1",
        title: "Match Exact Radical Values",
        instruction: "Navigate to 150° (5π/6 rad) and observe the negative cosine coordinate and positive sine value.",
        targetMetric: "Angle Reached",
        targetValue: 150,
        tolerance: 1,
        currentValueKey: "angle_deg",
        rewardBadge: "Trig Explorer"
      }
    ],
    previewFacts: [
      "The coordinates (x, y) of any point on the unit circle are precisely (cos θ, sin θ).",
      "Tangent represents the length of the segment along the line x = 1 tangent to the circle."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/unit-circle-trigonometry.html"
  },

  // 3. MATHEMATICS: Statistical Data Lab
  {
    id: "sim-statistical-data-lab",
    title: "Statistical Data, Box Plots & Variance Analyzer",
    tagline: "Descriptive statistics suite with 5-number summary, 1.5×IQR box-and-whisker plots, and Gaussian histogram distributions",
    discipline: "mathematics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM"],
    standards: ["CCSS.MATH.HSS.ID.A.1", "CCSS.MATH.HSS.ID.A.2", "CCSS.MATH.HSS.ID.A.3"],
    description: "A comprehensive statistical data analysis laboratory. Input custom datasets or generate normal/skewed distributions to calculate sample mean, median, mode, sample variance (s²), standard deviation (s), interquartile range (IQR), and visual 1.5×IQR Tukey outlier detection.",
    learningObjectives: [
      "Calculate and interpret measures of center (mean, median, mode) and spread (IQR, standard deviation)",
      "Construct and read five-number summary box-and-whisker plots (Min, Q1, Median, Q3, Max)",
      "Apply the 1.5 × IQR rule to identify and visualize statistical outliers",
      "Understand how data skewness pulls the mean away from the median toward the tail"
    ],
    thumbnailGradient: "from-teal-600 via-emerald-700 to-slate-950",
    badgeColor: "bg-teal-500/10 text-teal-300 border-teal-500/20",
    iconName: "BarChart3",
    rating: 4.95,
    reviewCount: 54,
    teacherCount: 220,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive 5-number summary box-and-whisker plot with highlighted fences and outliers",
      "Dynamic frequency histogram with adjustable bin sizes (6, 8, 12, 16 bins)",
      "Real-time dataset editor supporting comma-separated numeric inputs",
      "Quick sample distribution generators: Normal Bell Curve, Right-Skewed, and Outlier Injected"
    ],
    parameterDefaults: {
      bins: 8
    },
    parameterControls: [
      {
        key: "bins",
        label: "Histogram Bins",
        min: 6,
        max: 16,
        step: 2,
        unit: "bins",
        description: "Number of frequency distribution classes"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-stats-1",
        title: "Identify a Statistical Outlier",
        instruction: "Add an extreme data point > 100 to the dataset and verify that the box plot flags it with a red outlier dot beyond Q3 + 1.5×IQR.",
        targetMetric: "Outlier Detected",
        targetValue: 1,
        tolerance: 0,
        currentValueKey: "outlier_detected",
        rewardBadge: "Data Detective"
      }
    ],
    previewFacts: [
      "The median and IQR are robust statistics resistant to extreme outliers, whereas the mean and standard deviation are heavily influenced.",
      "For a perfectly symmetric normal distribution, approximately 68.2% of data falls within 1 standard deviation (μ ± 1σ)."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/statistical-data-lab.html"
  },

  // 4. MATHEMATICS: Fourier Series Synthesis
  {
    id: "sim-fourier-series-synthesis",
    title: "Fourier Series & Harmonic Decomposition Lab",
    tagline: "Harmonic synthesis suite with rotating epicycle phasor circles, Gibbs phenomenon analysis, and audio synthesis",
    discipline: "mathematics",
    gradeLevel: ["High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["CCSS.MATH.HSF.TF.B.5", "NGSS HS-PS4-1", "AP Calculus BC"],
    description: "An interactive mathematical laboratory exploring Fourier series harmonic decomposition. Synthesize square, sawtooth, triangle, and pulse waveforms term-by-term using rotating epicycle phasor circles with live Web Audio frequency generation and Gibbs phenomenon overshooting analysis.",
    learningObjectives: [
      "Understand how periodic functions f(t) can be decomposed into an infinite sum of orthogonal sine and cosine harmonics",
      "Analyze the harmonic coefficients b_n for square waves (odd harmonics 1/n) and sawtooth waves (all harmonics 1/n)",
      "Observe the Gibbs phenomenon at jump discontinuities, where the Fourier sum overshoots by ~8.95%",
      "Connect mathematical frequency spectra with audible acoustics and musical timbre"
    ],
    thumbnailGradient: "from-violet-600 via-fuchsia-700 to-slate-950",
    badgeColor: "bg-violet-500/10 text-violet-300 border-violet-500/20",
    iconName: "Activity",
    rating: 4.98,
    reviewCount: 65,
    teacherCount: 280,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Rotating epicycle phasor circles illustrating complex trigonometric series addition",
      "Waveform presets: Square Wave, Sawtooth Wave, Triangle Wave, and Pulse Train",
      "Interactive harmonics slider (1 to 25 terms) and fundamental frequency tuner (110 Hz - 880 Hz)",
      "Real-time Web Audio API harmonic sound synthesizer and power spectrum analyzer"
    ],
    parameterDefaults: {
      harmonics: 5
    },
    parameterControls: [
      {
        key: "harmonics",
        label: "Harmonic Terms (N)",
        min: 1,
        max: 25,
        step: 1,
        unit: "terms",
        description: "Number of Fourier series terms synthesized"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-fourier-1",
        title: "Synthesize a Square Wave",
        instruction: "Increase the number of harmonic terms to 15 and observe how the Fourier approximation sharpens the flat tops while maintaining the Gibbs overshoot.",
        targetMetric: "Harmonics Set",
        targetValue: 15,
        tolerance: 0,
        currentValueKey: "harmonics_count",
        rewardBadge: "Harmonic Master"
      }
    ],
    previewFacts: [
      "Jean-Baptiste Joseph Fourier introduced the series in 1822 to solve the heat conduction equation.",
      "The Wilbraham-Gibbs constant produces an overshoot of approximately 8.948987% regardless of how large N is."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/fourier-series-synthesis.html"
  },

  // 5. MATHEMATICS / PHYSICS: Lissajous Curves
  {
    id: "sim-lissajous-curves",
    title: "Lissajous Curves & Parametric Harmonics Lab",
    tagline: "Parametric orthogonal harmonic oscillations exploring frequency ratios, phase shifts, and 2D phase portraits",
    discipline: "mathematics",
    gradeLevel: ["High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["CCSS.MATH.HSF.TF.B.5", "NGSS HS-PS4-1", "NGSS SEP-5"],
    description: "An interactive parametric curves and orthogonal harmonic oscillations laboratory. Explore curves defined by x(t) = A·sin(a·t + δ) and y(t) = B·sin(b·t) with variable frequency ratios (a:b), phase shifts (δ), continuous phase drift animations, and projection overlays.",
    learningObjectives: [
      "Model 2D parametric equations describing orthogonal simple harmonic motion",
      "Determine frequency ratios (a : b) by counting the number of horizontal and vertical tangency lobes",
      "Analyze the effect of phase shift δ on curve opening, symmetry, and degeneration into line segments",
      "Apply Lissajous figures to oscilloscope frequency calibration and signal phase detection"
    ],
    thumbnailGradient: "from-pink-600 via-rose-700 to-slate-950",
    badgeColor: "bg-pink-500/10 text-pink-300 border-pink-500/20",
    iconName: "Shuffle",
    rating: 4.96,
    reviewCount: 42,
    teacherCount: 180,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive 2D phase portrait canvas with synchronized particle motion tracer and orthogonal projections",
      "Independent frequency ratio sliders for X (a) and Y (b) axes (1 to 9)",
      "Continuous Phase Drift (Δδ) animation mode simulating oscilloscope phase slip",
      "Classical harmonic presets: 1:1 Circle/Ellipse, 1:2 Figure-Eight, 3:2 Pretzel Knot, and 5:6 Resonance Mesh"
    ],
    parameterDefaults: {
      ratioA: 1,
      ratioB: 2,
      phase: 90
    },
    parameterControls: [
      {
        key: "ratioA",
        label: "X Frequency (a)",
        min: 1,
        max: 9,
        step: 1,
        unit: "Hz",
        description: "Horizontal oscillator frequency"
      },
      {
        key: "ratioB",
        label: "Y Frequency (b)",
        min: 1,
        max: 9,
        step: 1,
        unit: "Hz",
        description: "Vertical oscillator frequency"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-liss-1",
        title: "Construct a 1:2 Parabolic Knot",
        instruction: "Set frequency ratio to 1:2 and adjust phase shift to 90° to construct the classical figure-eight curve.",
        targetMetric: "Figure Eight Formed",
        targetValue: 1,
        tolerance: 0,
        currentValueKey: "ratio_1_2_set",
        rewardBadge: "Oscilloscope Pro"
      }
    ],
    previewFacts: [
      "Lissajous figures were first studied by Nathaniel Bowditch in 1815 and later independently by Jules Antoine Lissajous in 1857.",
      "When a:b = 1:1 and δ = 90°, the parametric equations trace a perfect circle of radius A."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/lissajous-curves.html"
  },

  // 6. PHYSICS: Hydraulic Press Lift
  {
    id: "sim-hydraulic-press-lift",
    title: "Hydraulic Press & Pascal's Principle Fluid Mechanics Lab",
    tagline: "Hydrostatic pressure multiplier investigating Pascal's Principle, mechanical advantage, and heavy load lifting",
    discipline: "physics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM"],
    standards: ["NGSS MS-PS1-4", "NGSS HS-PS2-1", "NGSS HS-PS3-3"],
    description: "An interactive fluid mechanics and hydrostatics laboratory simulating a hydraulic press. Investigate Pascal's Principle (P₁ = P₂), piston surface area ratios (A₂/A₁), force multiplication (F₂ = F₁ · A₂/A₁), and the conservation of work (W₁ = W₂ = F₁d₁ = F₂d₂) when lifting heavy sedans, trucks, and cargo.",
    learningObjectives: [
      "Apply Pascal's Principle: pressure applied to an enclosed static fluid is transmitted undiminished in all directions",
      "Calculate mechanical advantage from piston radii (MA = A₂/A₁ = r₂²/r₁²)",
      "Verify work and energy conservation: small force over a large distance lifts a large force over a small distance",
      "Determine the minimum input force F₁ required to lift various vehicle masses in equilibrium"
    ],
    thumbnailGradient: "from-blue-600 via-sky-700 to-slate-950",
    badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    iconName: "Layers",
    rating: 4.97,
    reviewCount: 62,
    teacherCount: 260,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive U-tube hydraulic press rig with dynamic fluid levels, pistons, and load platform",
      "Pump Down Handle action providing realistic stroke displacement and force feedback",
      "Adjustable input force (10 N - 500 N), input radius (1-5 cm), and output radius (4-20 cm)",
      "Selectable heavy loads: Compact Sedan (150 kg), Heavy SUV (400 kg), Cargo Crate (800 kg), Elephant (1500 kg)"
    ],
    parameterDefaults: {
      f1: 150,
      r1: 2.0,
      r2: 8.0
    },
    parameterControls: [
      {
        key: "f1",
        label: "Input Force (F₁)",
        min: 10,
        max: 500,
        step: 10,
        unit: "N",
        description: "Effort force applied on input piston"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-hyd-1",
        title: "Lift a Heavy Sedan",
        instruction: "Configure piston radii and input force to generate at least 1,470 N of upward force on the output piston.",
        targetMetric: "Sedan Lifted",
        targetValue: 1,
        tolerance: 0,
        currentValueKey: "sedan_lifted",
        rewardBadge: "Hydraulics Engineer"
      }
    ],
    previewFacts: [
      "Because liquids are essentially incompressible, the volume displaced by the input piston equals the volume entering the output chamber (V₁ = V₂).",
      "Blaise Pascal discovered this principle in 1647, leading to modern hydraulic brakes and excavators."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/hydraulic-press-lift.html"
  },

  // 7. PHYSICS: Double Pendulum Chaos
  {
    id: "sim-double-pendulum-chaos",
    title: "Double Pendulum & Chaotic Dynamics Simulation",
    tagline: "Coupled non-linear Lagrangian mechanics demonstrating deterministic chaos, Lyapunov divergence, and the butterfly effect",
    discipline: "physics",
    gradeLevel: ["High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["NGSS HS-PS2-1", "NGSS HS-PS3-1", "NGSS SEP-5"],
    description: "An interactive computational physics laboratory simulating a coupled double pendulum using 4th-order Runge-Kutta (RK4) integration of Euler-Lagrange equations of motion. Observe sensitive dependence on initial conditions (the butterfly effect), energy conservation, and trajectory divergence.",
    learningObjectives: [
      "Model coupled non-linear differential equations derived from the Lagrangian L = T - V",
      "Observe deterministic chaos: systems governed by exact physical laws that are practically unpredictable long-term",
      "Measure exponential trajectory divergence governed by the Lyapunov exponent |Δr(t)| ≈ |Δr(0)|e^(λt)",
      "Analyze continuous kinetic and potential energy transfers between coupled harmonic bobs"
    ],
    thumbnailGradient: "from-amber-600 via-orange-700 to-slate-950",
    badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    iconName: "Zap",
    rating: 4.99,
    reviewCount: 94,
    teacherCount: 380,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "High-precision 4th-order Runge-Kutta (RK4) numerical integrator with sub-stepping for exact energy conservation",
      "Butterfly Effect mode simulating two pendulums with a tiny initial deviation (Δθ = 0.0001 rad) to display divergence",
      "Multi-color trailing path visualization tracking chaotic attractor geometries",
      "Initial configuration presets: Orthogonal Drop, Inverted Flip, Linear Small Angle, and High Chaos Whip"
    ],
    parameterDefaults: {
      length: 1.0,
      mass: 1.0
    },
    parameterControls: [
      {
        key: "length",
        label: "Arm Length Ratio",
        min: 0.5,
        max: 2.0,
        step: 0.1,
        unit: "m",
        description: "Length of upper and lower pendulum rods"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-chaos-1",
        title: "Observe Exponential Divergence",
        instruction: "Trigger the Butterfly Effect button and watch the ghost pendulum diverge by > 50 cm after several full rotations.",
        targetMetric: "Chaos Divergence",
        targetValue: 50,
        tolerance: 5,
        currentValueKey: "divergence_cm",
        rewardBadge: "Chaos Theorist"
      }
    ],
    previewFacts: [
      "Unlike a single pendulum which has a regular, predictable period, a double pendulum exhibits chaotic motion at high energies.",
      "The Lyapunov exponent λ quantifies the rate of exponential separation of infinitesimally close trajectories."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/double-pendulum-chaos.html"
  },

  // 8. PHYSICS: Wave Optics & Interference
  {
    id: "sim-wave-optics-interference",
    title: "Wave Optics: Young's Double Slit & Diffraction Grating Lab",
    tagline: "Wave optics suite with wavefront propagation, fringe spacing (Δy = λL/d), diffraction envelopes, and grating lines",
    discipline: "physics",
    gradeLevel: ["High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["NGSS HS-PS4-1", "NGSS HS-PS4-3", "AP Physics 2 Unit 6"],
    description: "An interactive wave optics and physical optics virtual laboratory. Investigate Young's double-slit experiment, single-slit diffraction envelopes, multi-slit interference, and diffraction gratings with monochromatic lasers across the full visible spectrum (380 nm - 750 nm).",
    learningObjectives: [
      "Apply the double-slit fringe spacing equation Δy = (λ · L) / d to calculate laser wavelengths and slit separations",
      "Distinguish between constructive interference (d sin θ = mλ) and destructive interference (d sin θ = (m + 0.5)λ)",
      "Explain the single-slit diffraction envelope modulating double-slit interference intensity patterns",
      "Understand how increasing slit count (diffraction gratings) sharpens principal maxima into distinct spectral lines"
    ],
    thumbnailGradient: "from-emerald-600 via-teal-700 to-slate-950",
    badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    iconName: "Eye",
    rating: 4.98,
    reviewCount: 71,
    teacherCount: 295,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive optical bench canvas with live intensity distribution curves and realistic screen illumination fringes",
      "Aperture modes: Single Slit, Double Slit (Young), 4-Slit, and Multi-Slit Diffraction Grating",
      "Continuous laser wavelength tuner with true spectral color mapping (Red 650nm, Green 532nm, Violet 405nm)",
      "Real-time analytical readout of fringe spacing Δy, central maximum width w₀, and path difference δ"
    ],
    parameterDefaults: {
      wavelength: 532,
      slitDist: 0.25,
      screenDist: 1.25
    },
    parameterControls: [
      {
        key: "wavelength",
        label: "Laser Wavelength (λ)",
        min: 380,
        max: 750,
        step: 2,
        unit: "nm",
        description: "Monochromatic light wavelength"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-optics-1",
        title: "Measure Fringe Spacing",
        instruction: "Change laser wavelength to Red (650 nm) and observe the fringe spacing widen proportional to wavelength.",
        targetMetric: "Fringe Measured",
        targetValue: 3.25,
        tolerance: 0.2,
        currentValueKey: "fringe_mm",
        rewardBadge: "Optics Specialist"
      }
    ],
    previewFacts: [
      "Thomas Young's 1801 double-slit experiment provided definitive experimental proof for the wave nature of light.",
      "Diffraction gratings are the primary optical element used in astronomical spectrometers to identify chemical compositions of stars."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/wave-optics-interference.html"
  },

  // 9. PHYSICS: Rotational Dynamics & Torque Equilibrium
  {
    id: "sim-rotational-torque-equilibrium",
    title: "Rotational Dynamics, Torque & Equilibrium Lab",
    tagline: "Lever equilibrium suite exploring torque balance (Στ = 0), moment of inertia (I = Σmr²), and angular acceleration (α = Στ/I)",
    discipline: "physics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM"],
    standards: ["NGSS MS-PS2-2", "NGSS HS-PS2-1", "AP Physics 1 Unit 7"],
    description: "An interactive rotational mechanics laboratory. Investigate static rotational equilibrium (Στ = τ_cw - τ_ccw = 0), center of mass, moment of inertia (I = Σmr²), and angular acceleration (α = Στ / I) on a balanced lever with movable masses and friction damping.",
    learningObjectives: [
      "Apply the rotational equilibrium condition Στ = 0 and calculate clockwise vs counter-clockwise torques (τ = F · d)",
      "Explain how rotational inertia (I = Σmr²) affects angular acceleration under a non-zero net torque",
      "Demonstrate the law of the lever: a smaller mass at a larger distance can balance a larger mass close to the pivot",
      "Differentiate between stable, unstable, and neutral equilibrium states in physical systems"
    ],
    thumbnailGradient: "from-amber-500 via-yellow-600 to-slate-950",
    badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    iconName: "Sliders",
    rating: 4.96,
    reviewCount: 58,
    teacherCount: 240,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive 2D lever beam with realistic physics tilt animation, angular velocity, and damping",
      "Independent mass (1 - 20 kg) and fulcrum distance (0.5 - 3.5 m) sliders for left and right arms",
      "Auto-Balance button calculating exact equilibrium mass required: m₂ = (m₁ · d₁) / d₂",
      "Lever class presets: See-saw Class 1, 4:1 Heavy Asymmetry, Precision Grams, and High Angular Accel"
    ],
    parameterDefaults: {
      m1: 5.0,
      d1: 2.0,
      m2: 5.0,
      d2: 2.0
    },
    parameterControls: [
      {
        key: "m1",
        label: "Left Mass (m₁)",
        min: 1,
        max: 20,
        step: 0.5,
        unit: "kg",
        description: "Mass placed on left beam"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-torq-1",
        title: "Achieve Static Balance",
        instruction: "Place a 10 kg mass at 1.0 m on the left and balance it using a 2.5 kg mass on the right by adjusting its distance.",
        targetMetric: "Equilibrium Reached",
        targetValue: 1,
        tolerance: 0,
        currentValueKey: "equilibrium_achieved",
        rewardBadge: "Equilibrium Master"
      }
    ],
    previewFacts: [
      "Archimedes famously stated: 'Give me a place to stand, and a lever long enough, and I will move the world.'",
      "Torque is the rotational equivalent of linear force, defined as the vector cross product τ = r × F."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/rotational-torque-equilibrium.html"
  },

  // 10. CHEMISTRY: High Precision Acid-Base Titration
  {
    id: "sim-high-precision-acid-base-titration",
    title: "High Precision Acid-Base Titration & pH Curve Lab",
    tagline: "Volumetric titration suite with burette drop delivery, pH curve generator, buffer regions, and chemical indicators",
    discipline: "chemistry",
    gradeLevel: ["High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["NGSS HS-PS1-2", "NGSS HS-PS1-6", "AP Chemistry Unit 8"],
    description: "A high-precision volumetric titration laboratory. Dispense drop-by-drop strong base titrant (0.100 M NaOH) from a graduated burette into strong acid (HCl) or weak acid (CH₃COOH) analytes. Observe real-time pH changes, Henderson-Hasselbalch buffer zones, sharp equivalence inflection jumps, and indicator color transitions.",
    learningObjectives: [
      "Perform volumetric titration calculations using stoichiometry and molarity (M₁V₁ = M₂V₂)",
      "Analyze titration curves to identify the equivalence point, buffer region, and half-equivalence point (pH = pKa)",
      "Select appropriate chemical indicators (phenolphthalein, methyl orange, bromothymol blue) based on transition ranges",
      "Compare strong acid vs weak acid titration curves regarding initial pH, buffer capacity, and salt hydrolysis at equivalence"
    ],
    thumbnailGradient: "from-emerald-600 via-teal-700 to-slate-950",
    badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    iconName: "FlaskConical",
    rating: 4.99,
    reviewCount: 88,
    teacherCount: 360,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive glassware rig featuring a 50 mL graduated burette, stopcock valve, and Erlenmeyer flask",
      "Dropwise addition (+0.5 mL, +0.1 mL micro-drop) and automated continuous titration playback",
      "Synchronized real-time pH titration curve graph with equivalence point inflection highlighting",
      "Selectable indicators: Phenolphthalein, Methyl Orange, Bromothymol Blue, and Universal Indicator"
    ],
    parameterDefaults: {
      titrantVolume: 0
    },
    parameterControls: [
      {
        key: "titrantVolume",
        label: "Titrant Volume (V_b)",
        min: 0,
        max: 50,
        step: 0.1,
        unit: "mL",
        description: "Volume of NaOH titrant added"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-titr-1",
        title: "Reach Equivalence Point",
        instruction: "Titrate exactly 25.0 mL of NaOH into the 25.0 mL 0.100 M HCl solution to reach the neutral pH 7.00 equivalence point.",
        targetMetric: "Equivalence Volume",
        targetValue: 25.0,
        tolerance: 0.2,
        currentValueKey: "titrant_vol",
        rewardBadge: "Analytical Chemist"
      }
    ],
    previewFacts: [
      "At the half-equivalence point in a weak acid titration, [HA] = [A⁻], meaning pH = pKa according to the Henderson-Hasselbalch equation.",
      "The equivalence point is stoichiometric neutralization, whereas the end point is the visual color change of the indicator."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/high-precision-acid-base-titration.html"
  },

  // 11. CHEMISTRY: Galvanic Cell & Nernst Equation
  {
    id: "sim-galvanic-cell-nernst",
    title: "Galvanic Electrochemical Cell & Nernst Equation Lab",
    tagline: "Electrochemical redox suite with half-cells, standard potential (E°_cell), Nernst concentration equation, and salt bridge",
    discipline: "chemistry",
    gradeLevel: ["High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["NGSS HS-PS1-2", "NGSS HS-PS1-4", "AP Chemistry Unit 9"],
    description: "An interactive electrochemistry laboratory modeling galvanic cells. Explore redox half-reactions (Zn/Cu Daniell cell, Zn/Ag, Cu/Ag), standard reduction potentials (E°_cell = E°_cathode - E°_anode), non-standard potential calculations via the Nernst equation (E = E° - (RT/nF)ln Q), and electron flow across the external circuit.",
    learningObjectives: [
      "Identify the anode (oxidation site) and cathode (reduction site) in a galvanic electrochemical cell",
      "Calculate standard cell potential E°_cell from standard reduction potential tables",
      "Apply the Nernst equation to predict cell voltage changes under varying ion concentrations and temperatures",
      "Explain the role of the salt bridge in maintaining electrical neutrality and completing the circuit"
    ],
    thumbnailGradient: "from-amber-600 via-yellow-700 to-slate-950",
    badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    iconName: "BatteryCharging",
    rating: 4.97,
    reviewCount: 64,
    teacherCount: 275,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive 2-beaker galvanic cell rig with metal electrodes, electrolyte solutions, and U-tube salt bridge",
      "Real-time animated electron flow along top circuit wire and voltmeter dial display",
      "Independent logarithmic concentration sliders for anode and cathode ions (0.001 M - 10 M)",
      "Redox couple presets: Daniell Cell (Zn/Cu), Zinc-Silver (Zn/Ag), and Copper-Silver (Cu/Ag)"
    ],
    parameterDefaults: {
      anodeConc: 1.0,
      cathodeConc: 1.0,
      temp: 298
    },
    parameterControls: [
      {
        key: "anodeConc",
        label: "Anode Ion [M₁ⁿ⁺]",
        min: -3,
        max: 1,
        step: 0.1,
        unit: "log M",
        description: "Logarithm of anode ion molarity"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-cell-1",
        title: "Maximize Cell Voltage via Le Chatelier / Nernst",
        instruction: "Dilute the anode [Zn²⁺] to 0.001 M and concentrate cathode [Cu²⁺] to 1.0 M to increase cell voltage above +1.18 V.",
        targetMetric: "Voltage Boosted",
        targetValue: 1.18,
        tolerance: 0.02,
        currentValueKey: "e_cell",
        rewardBadge: "Electrochemist"
      }
    ],
    previewFacts: [
      "A cell reaction is spontaneous under standard conditions when E°_cell > 0, which corresponds to a negative Gibbs free energy (ΔG° = -nFE°).",
      "Walther Nernst was awarded the 1920 Nobel Prize in Chemistry for his fundamental thermodynamic equations."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/galvanic-cell-nernst.html"
  },

  // 12. CHEMISTRY: Le Chatelier's Principle & Haber-Bosch
  {
    id: "sim-le-chatelier-haber",
    title: "Le Chatelier's Principle & Haber-Bosch Equilibrium Lab",
    tagline: "Industrial ammonia synthesis exploring Le Chatelier shifts, temperature, pressure, equilibrium constant (K_p), and catalysts",
    discipline: "chemistry",
    gradeLevel: ["High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["NGSS HS-PS1-5", "NGSS HS-PS1-6", "AP Chemistry Unit 7"],
    description: "An interactive chemical equilibrium and industrial thermodynamics laboratory. Simulate the Haber-Bosch ammonia synthesis reaction: N₂(g) + 3H₂(g) ⇌ 2NH₃(g) + 92.4 kJ/mol. Manipulate reactor temperature (300°C - 650°C), total pressure (1 - 400 atm), and reactant/product injection to observe Le Chatelier equilibrium shifts and industrial compromises.",
    learningObjectives: [
      "Apply Le Chatelier's Principle to predict equilibrium shifts caused by temperature, pressure, and concentration changes",
      "Explain why increasing pressure favors the side with fewer moles of gas (4 mol reactants ⇌ 2 mol product)",
      "Explain why the exothermic reaction has a smaller equilibrium constant K_p at higher temperatures",
      "Evaluate the industrial compromise between thermodynamic yield (favored by low T) and kinetic reaction rate (favored by high T)"
    ],
    thumbnailGradient: "from-cyan-600 via-sky-700 to-slate-950",
    badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    iconName: "Flame",
    rating: 4.98,
    reviewCount: 79,
    teacherCount: 330,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive autoclave high-pressure steel reactor vessel with heating element glow and catalyst bed",
      "Real-time partial pressure dynamics chart tracking P(NH₃), P(H₂), and P(N₂) over time",
      "Reactant injection (+N₂) and product extraction (-NH₃ condensation) disturbance buttons",
      "Industrial presets: Optimum Haber Compromise (450°C, 200 atm), Thermodynamic Max, and High Temp Shift Left"
    ],
    parameterDefaults: {
      temp: 450,
      pressure: 200
    },
    parameterControls: [
      {
        key: "temp",
        label: "Temperature (T)",
        min: 300,
        max: 650,
        step: 10,
        unit: "°C",
        description: "Autoclave temperature"
      },
      {
        key: "pressure",
        label: "Total Pressure (P)",
        min: 1,
        max: 400,
        step: 10,
        unit: "atm",
        description: "Total reactor vessel pressure"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-haber-1",
        title: "Optimize Industrial Yield",
        instruction: "Set pressure to 350 atm and temperature to 350°C to achieve an equilibrium ammonia yield exceeding 60%.",
        targetMetric: "Yield Achieved",
        targetValue: 60,
        tolerance: 2,
        currentValueKey: "yield_pct",
        rewardBadge: "Process Engineer"
      }
    ],
    previewFacts: [
      "The Haber-Bosch process synthesizes over 150 million tons of ammonia annually, sustaining global food production for nearly half of humanity.",
      "Fritz Haber and Carl Bosch won Nobel Prizes in 1918 and 1931 for developing high-pressure chemical synthesis."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/le-chatelier-haber.html"
  },

  // 13. CHEMISTRY: VSEPR 3D Geometry
  {
    id: "sim-vsepr-3d-geometry",
    title: "VSEPR Theory & 3D Molecular Geometry Lab",
    tagline: "Interactive 3D molecular geometry explorer with steric numbers (2 to 6), lone pair repulsion, and ideal bond angles",
    discipline: "chemistry",
    gradeLevel: ["High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["NGSS HS-PS1-1", "NGSS HS-PS1-2", "AP Chemistry Unit 2"],
    description: "An interactive 3D molecular structure laboratory based on Valence Shell Electron Pair Repulsion (VSEPR) theory. Orbit and inspect 10 fundamental molecular geometries across steric numbers 2 through 6 (Linear, Trigonal Planar, Tetrahedral, Trigonal Pyramidal, Bent, Trigonal Bipyramidal, See-saw, T-Shaped, Octahedral, Square Planar).",
    learningObjectives: [
      "Predict electron domain geometry and molecular geometry from steric number and AXₘEₙ formulation",
      "Explain the repulsion hierarchy: Lone Pair : Lone Pair > Lone Pair : Bonding > Bonding : Bonding",
      "Account for bond angle compressions in molecules with unshared electron pairs (e.g., CH₄ 109.5° vs NH₃ 107° vs H₂O 104.5°)",
      "Correlate steric number with atomic orbital hybridization (sp, sp², sp³, sp³d, sp³d²)"
    ],
    thumbnailGradient: "from-purple-600 via-pink-700 to-slate-950",
    badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    iconName: "Boxes",
    rating: 4.99,
    reviewCount: 96,
    teacherCount: 410,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive 3D canvas with 360° mouse drag orbit controls and automatic rotation mode",
      "Depth-sorted 3D ball-and-stick rendering with realistic radial lighting gradients and CPK element coloring",
      "10 representative molecules: CO₂, BF₃, CH₄, NH₃, H₂O, PCl₅, SF₄, ClF₃, SF₆, XeF₄",
      "Comprehensive VSEPR HUD: AXₘEₙ notation, steric number, lone pair count, ideal bond angles, and hybridization"
    ],
    parameterDefaults: {
      molecule: "ch4"
    },
    parameterControls: [
      {
        key: "molecule",
        label: "Select Molecule",
        min: 1,
        max: 10,
        step: 1,
        unit: "mol",
        description: "Active 3D molecular structure"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-vsepr-1",
        title: "Inspect Lone Pair Compression",
        instruction: "Compare the bond angles of tetrahedral CH₄ (109.5°), trigonal pyramidal NH₃ (107°), and bent H₂O (104.5°).",
        targetMetric: "Molecules Inspected",
        targetValue: 3,
        tolerance: 0,
        currentValueKey: "molecules_inspected",
        rewardBadge: "Stereochemist"
      }
    ],
    previewFacts: [
      "Ronald Gillespie and Ronald Nyholm developed the modern VSEPR rules in 1957.",
      "In trigonal bipyramidal systems (SN=5), lone pairs always occupy equatorial positions because they offer 120° angles rather than more crowded 90° axial angles."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/vsepr-3d-geometry.html"
  }
];
