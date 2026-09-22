const levels = [

    // =========================
    // LEVEL 1
    // =========================
    {
        name: "Level 1",
        speed: 2,

        gameObjects: [

            // Obstacles - 3
            {
                type: "obstacle",
                kind: "spikes",
                x: 500,
                y: groundY
            },
            {
                type: "obstacle",
                kind: "spikes",
                x: 1000,
                y: groundY
            },
            {
                type: "obstacle",
                kind: "spikes",
                x: 1400,
                y: groundY
            },

            // Enemies - 3
            {
                type: "enemy",
                kind: "bug",
                x: 800,
                y: groundY
            },
            {
                type: "enemy",
                kind: "bug",
                x: 1200,
                y: groundY
            },
            {
                type: "enemy",
                kind: "bug",
                x: 1800,
                y: groundY
            },

            // Powerups - 2
            {
                type: "powerup",
                kind: "healthUp",
                x: 700,
                y: groundY - 100
            },
            {
                type: "powerup",
                kind: "healthUp",
                x: 1500,
                y: groundY - 100
            },

            // Platforms - 4
            {
                type: "platform",
                kind: "basicPlatform",
                x: 600,
                y: groundY - 50
            },
            {
                type: "platform",
                kind: "basicPlatform",
                x: 900,
                y: groundY - 80
            },
            {
                type: "platform",
                kind: "basicPlatform",
                x: 1200,
                y: groundY - 40
            },
            {
                type: "platform",
                kind: "basicPlatform",
                x: 1600,
                y: groundY - 80
            },

            // Goal - exactly 1
            {
                type: "goal",
                kind: "flag",
                x: 2000,
                y: groundY
            }
        ]
    },


    // =========================
    // LEVEL 2
    // =========================
    {
        name: "Level 2: Danger Zone",
        speed: 3,

        gameObjects: [

            // Obstacles - 5
            {
                type: "obstacle",
                kind: "spikes",
                x: 500,
                y: groundY
            },
            {
                type: "obstacle",
                kind: "spikes",
                x: 900,
                y: groundY
            },
            {
                type: "obstacle",
                kind: "spikes",
                x: 1300,
                y: groundY
            },
            {
                type: "obstacle",
                kind: "spikes",
                x: 1700,
                y: groundY
            },
            {
                type: "obstacle",
                kind: "spikes",
                x: 2100,
                y: groundY
            },

            // Platforms - 4
            {
                type: "platform",
                kind: "basicPlatform",
                x: 1000,
                y: groundY - 80
            },
            {
                type: "platform",
                kind: "basicPlatform",
                x: 1200,
                y: groundY - 150
            },
            {
                type: "platform",
                kind: "basicPlatform",
                x: 1400,
                y: groundY - 80
            },
            {
                type: "platform",
                kind: "basicPlatform",
                x: 1600,
                y: groundY - 100
            },

            // Powerups - 3
            {
                type: "powerup",
                kind: "healthUp",
                x: 700,
                y: groundY - 150
            },
            {
                type: "powerup",
                kind: "healthUp",
                x: 1450,
                y: groundY - 130
            },
            {
                type: "powerup",
                kind: "healthUp",
                x: 1950,
                y: groundY - 180
            },

            // Enemies - 5
            {
                type: "enemy",
                kind: "bug",
                x: 800,
                y: groundY
            },
            {
                type: "enemy",
                kind: "bug",
                x: 1200,
                y: groundY
            },
            {
                type: "enemy",
                kind: "bug",
                x: 1500,
                y: groundY
            },
            {
                type: "enemy",
                kind: "bug",
                x: 1900,
                y: groundY
            },
            {
                type: "enemy",
                kind: "bug",
                x: 2200,
                y: groundY
            },

            // Goal - exactly 1
            {
                type: "goal",
                kind: "flag",
                x: 2500,
                y: groundY
            }
        ]
    },


    // =========================
    // LEVEL 3
    // =========================
    {
        name: "Level 3: The Final Challenge",
        speed: 4,

        gameObjects: [

            // Obstacles - 7
            {
                type: "obstacle",
                kind: "spikes",
                x: 400,
                y: groundY
            },
            {
                type: "obstacle",
                kind: "spikes",
                x: 750,
                y: groundY
            },
            {
                type: "obstacle",
                kind: "spikes",
                x: 1100,
                y: groundY
            },
            {
                type: "obstacle",
                kind: "spikes",
                x: 1450,
                y: groundY
            },
            {
                type: "obstacle",
                kind: "spikes",
                x: 1800,
                y: groundY
            },
            {
                type: "obstacle",
                kind: "spikes",
                x: 2150,
                y: groundY
            },
            {
                type: "obstacle",
                kind: "spikes",
                x: 2500,
                y: groundY
            },

            // Platforms - 5
            {
                type: "platform",
                kind: "basicPlatform",
                x: 500,
                y: groundY - 100
            },
            {
                type: "platform",
                kind: "basicPlatform",
                x: 850,
                y: groundY - 160
            },
            {
                type: "platform",
                kind: "basicPlatform",
                x: 1200,
                y: groundY - 100
            },
            {
                type: "platform",
                kind: "basicPlatform",
                x: 1650,
                y: groundY - 180
            },
            {
                type: "platform",
                kind: "basicPlatform",
                x: 2050,
                y: groundY - 120
            },
              {
                type: "platform",
                kind: "basicPlatform",
                x: 2500,
                y: groundY - 80
            },
  
              {
                type: "platform",
                kind: "basicPlatform",
                x: 1500,
                y: groundY - 120
            },
            // Powerups - 4
            {
                type: "powerup",
                kind: "healthUp",
                x: 550,
                y: groundY - 150
            },
            {
                type: "powerup",
                kind: "healthUp",
                x: 1250,
                y: groundY - 150
            },
            {
                type: "powerup",
                kind: "healthUp",
                x: 1700,
                y: groundY - 230
            },
            {
                type: "powerup",
                kind: "healthUp",
                x: 2200,
                y: groundY - 170
            },

            // Enemies - 6
            {
                type: "enemy",
                kind: "bug",
                x: 650,
                y: groundY
            },
            {
                type: "enemy",
                kind: "bug",
                x: 1000,
                y: groundY
            },
            {
                type: "enemy",
                kind: "bug",
                x: 1350,
                y: groundY
            },
            {
                type: "enemy",
                kind: "bug",
                x: 1750,
                y: groundY
            },
            {
                type: "enemy",
                kind: "bug",
                x: 2050,
                y: groundY
            },
            {
                type: "enemy",
                kind: "bug",
                x: 2400,
                y: groundY
            },

            // Goal - exactly 1
            {
                type: "goal",
                kind: "flag",
                x: 2850,
                y: groundY
            }
        ]
    }
];


// Start the game on Level 1
let currentLevel = levels[0];
let currentLevelIndex = 0;