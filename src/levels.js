const levels = [
  {
    "id": 1,
    "name": "1. The Conversion",
    "description": "Welcome to Noog. Place a white stone to sandwich the dark enemy stone between two white stones. This is flanking; it converts the enemy to your side!",
    "moves": 3,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "player",
          "value": 1
        },
        {
          "color": "enemy",
          "value": 1
        },
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      1,
      2,
      1
    ]
  },
  {
    "id": 2,
    "name": "2. Liberty Trap",
    "description": "Stones connect and share liberties (empty adjacent spaces). Trap the dark enemy in the corner by placing white stones on all of its adjacent spaces. (0 liberties = captured!)",
    "moves": 2,
    "board": [
      [
        {
          "color": "enemy",
          "value": 1
        },
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      1,
      1,
      1
    ]
  },
  {
    "id": 3,
    "name": "3. Power Siege",
    "description": "An enemy can only be captured if all adjacent player stones are of equal or higher strength. Merge your white 1s by placing them adjacent to each other to form a 2, then surround the Level 2 enemy!",
    "moves": 4,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      1,
      1,
      1,
      1
    ]
  },
  {
    "id": 4,
    "name": "4. Sudoku Barriers",
    "description": "Remember: You cannot place a white stone of value V in a row or column that already contains a white V. Use merging or smart placement to get past this lock!",
    "moves": 4,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "player",
          "value": 1
        },
        {
          "color": "enemy",
          "value": 2
        },
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      1,
      2,
      1,
      2
    ]
  },
  {
    "id": 5,
    "name": "5. Double Enclosure",
    "description": "Two enemy outposts block the grid. You need to flank or surround both. Plan your placements so that your numbers don't conflict in rows/columns.",
    "moves": 6,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 1
        },
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      1,
      1,
      2,
      1,
      2,
      1
    ]
  },
  {
    "id": 6,
    "name": "6. The Wall",
    "description": "A defensive wall of dark level 1 and 2 stones blocking the grid. Flank them to convert the wall, or surround them to clear space.",
    "moves": 7,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 1
        },
        {
          "color": "enemy",
          "value": 2
        },
        {
          "color": "enemy",
          "value": 1
        },
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      1,
      2,
      1,
      2,
      1,
      1,
      2
    ]
  },
  {
    "id": 7,
    "name": "7. The High Citadel",
    "description": "A Level 3 fortress is defended by Level 1 and 2 guards. You will need to build high-level stones (3 or higher) by merging to successfully capture it.",
    "moves": 9,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 1
        },
        {
          "color": "enemy",
          "value": 3
        },
        {
          "color": "enemy",
          "value": 1
        },
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      1,
      1,
      2,
      1,
      2,
      3,
      1,
      1,
      2
    ]
  },
  {
    "id": 8,
    "name": "8. Grand Gridlock",
    "description": "The final puzzle challenge. You have a very limited set of moves and a crowded board. Clear a line (values 1 to 6 in a row/col) to free up space and claim victory!",
    "moves": 8,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        {
          "color": "player",
          "value": 1
        },
        {
          "color": "player",
          "value": 2
        },
        {
          "color": "player",
          "value": 3
        },
        {
          "color": "player",
          "value": 4
        },
        {
          "color": "enemy",
          "value": 1
        },
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      5,
      6,
      1,
      2,
      1,
      2,
      3,
      4
    ]
  },
  {
    "id": 9,
    "name": "9. The Flowing Summit",
    "description": "Isolate the terracotta stones. Merge your white river stones to match the strength of the Level 1 defenses.",
    "moves": 5,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 1
        },
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      2,
      1,
      1,
      2,
      1
    ]
  },
  {
    "id": 10,
    "name": "10. The Tranquil Heron",
    "description": "Isolate the terracotta stones. Merge your white river stones to match the strength of the Level 2 defenses.",
    "moves": 6,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 1
        },
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      2,
      1,
      1,
      2,
      1,
      1
    ]
  },
  {
    "id": 11,
    "name": "11. The Silver Shadow",
    "description": "Isolate the terracotta stones. Merge your white river stones to match the strength of the Level 1 defenses.",
    "moves": 7,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 1
        },
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      2,
      1,
      1,
      2,
      1,
      1,
      2
    ]
  },
  {
    "id": 12,
    "name": "12. The Drifting Morning",
    "description": "Isolate the terracotta stones. Merge your white river stones to match the strength of the Level 2 defenses.",
    "moves": 5,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 1
        },
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      2,
      1,
      1,
      2,
      1
    ]
  },
  {
    "id": 13,
    "name": "13. The Quiet Sakura",
    "description": "Isolate the terracotta stones. Merge your white river stones to match the strength of the Level 1 defenses.",
    "moves": 6,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 1
        },
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      2,
      1,
      1,
      2,
      1,
      1
    ]
  },
  {
    "id": 14,
    "name": "14. The Serene Stream",
    "description": "Isolate the terracotta stones. Merge your white river stones to match the strength of the Level 2 defenses.",
    "moves": 7,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 1
        },
        null,
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      2,
      1,
      1,
      2,
      1,
      1,
      2
    ]
  },
  {
    "id": 15,
    "name": "15. The Mist Valley",
    "description": "Isolate the terracotta stones. Merge your white river stones to match the strength of the Level 1 defenses.",
    "moves": 5,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 1
        },
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      2,
      1,
      1,
      2,
      1
    ]
  },
  {
    "id": 16,
    "name": "16. The Reflected Canyon",
    "description": "Isolate the terracotta stones. Merge your white river stones to match the strength of the Level 2 defenses.",
    "moves": 6,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 1
        },
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      2,
      1,
      1,
      2,
      1,
      1
    ]
  },
  {
    "id": 17,
    "name": "17. The Dewy Moon",
    "description": "Isolate the terracotta stones. Merge your white river stones to match the strength of the Level 1 defenses.",
    "moves": 7,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 1
        },
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      2,
      1,
      1,
      2,
      1,
      1,
      2
    ]
  },
  {
    "id": 18,
    "name": "18. The Soft Lotus",
    "description": "Isolate the terracotta stones. Merge your white river stones to match the strength of the Level 2 defenses.",
    "moves": 5,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 1
        },
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      2,
      1,
      1,
      2,
      1
    ]
  },
  {
    "id": 19,
    "name": "19. The Winding Temple",
    "description": "Isolate the terracotta stones. Merge your white river stones to match the strength of the Level 1 defenses.",
    "moves": 6,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 1
        },
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      2,
      1,
      1,
      2,
      1,
      1
    ]
  },
  {
    "id": 20,
    "name": "20. The Wild Bonsai",
    "description": "Isolate the terracotta stones. Merge your white river stones to match the strength of the Level 2 defenses.",
    "moves": 7,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 1
        },
        null,
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      2,
      1,
      1,
      2,
      1,
      1,
      2
    ]
  },
  {
    "id": 21,
    "name": "21. The Shaded Pebble",
    "description": "A delicate configuration of stones. Use the adjacent merge rules to clear path barriers and surround the central obstacles.",
    "moves": 7,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        {
          "color": "enemy",
          "value": 1
        },
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 3
        },
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      3,
      1,
      2,
      1,
      3,
      1,
      2
    ]
  },
  {
    "id": 22,
    "name": "22. The Still Breeze",
    "description": "A delicate configuration of stones. Use the adjacent merge rules to clear path barriers and surround the central obstacles.",
    "moves": 8,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 3
        },
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      3,
      1,
      2,
      1,
      3,
      1,
      2,
      1
    ]
  },
  {
    "id": 23,
    "name": "23. The Hidden Moss",
    "description": "A delicate configuration of stones. Use the adjacent merge rules to clear path barriers and surround the central obstacles.",
    "moves": 9,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        {
          "color": "enemy",
          "value": 1
        },
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 3
        },
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      3,
      1,
      2,
      1,
      3,
      1,
      2,
      1,
      3
    ]
  },
  {
    "id": 24,
    "name": "24. The Jade Sun",
    "description": "A delicate configuration of stones. Use the adjacent merge rules to clear path barriers and surround the central obstacles.",
    "moves": 6,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 3
        },
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      3,
      1,
      2,
      1,
      3,
      1
    ]
  },
  {
    "id": 25,
    "name": "25. The Whispering Bamboo",
    "description": "A delicate configuration of stones. Use the adjacent merge rules to clear path barriers and surround the central obstacles.",
    "moves": 7,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        {
          "color": "enemy",
          "value": 1
        },
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 3
        },
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      3,
      1,
      2,
      1,
      3,
      1,
      2
    ]
  },
  {
    "id": 26,
    "name": "26. The Gentle Shrine",
    "description": "A delicate configuration of stones. Use the adjacent merge rules to clear path barriers and surround the central obstacles.",
    "moves": 8,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 3
        },
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      3,
      1,
      2,
      1,
      3,
      1,
      2,
      1
    ]
  },
  {
    "id": 27,
    "name": "27. The Peaceful Sand",
    "description": "A delicate configuration of stones. Use the adjacent merge rules to clear path barriers and surround the central obstacles.",
    "moves": 9,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        {
          "color": "enemy",
          "value": 1
        },
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 3
        },
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      3,
      1,
      2,
      1,
      3,
      1,
      2,
      1,
      3
    ]
  },
  {
    "id": 28,
    "name": "28. The Golden Bridge",
    "description": "A delicate configuration of stones. Use the adjacent merge rules to clear path barriers and surround the central obstacles.",
    "moves": 6,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 3
        },
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      3,
      1,
      2,
      1,
      3,
      1
    ]
  },
  {
    "id": 29,
    "name": "29. The Floating Autumn",
    "description": "A delicate configuration of stones. Use the adjacent merge rules to clear path barriers and surround the central obstacles.",
    "moves": 7,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        {
          "color": "enemy",
          "value": 1
        },
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 3
        },
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      3,
      1,
      2,
      1,
      3,
      1,
      2
    ]
  },
  {
    "id": 30,
    "name": "30. The Silent Fern",
    "description": "A delicate configuration of stones. Use the adjacent merge rules to clear path barriers and surround the central obstacles.",
    "moves": 8,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 3
        },
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      3,
      1,
      2,
      1,
      3,
      1,
      2,
      1
    ]
  },
  {
    "id": 31,
    "name": "31. The Restful Dawn",
    "description": "A delicate configuration of stones. Use the adjacent merge rules to clear path barriers and surround the central obstacles.",
    "moves": 9,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        {
          "color": "enemy",
          "value": 1
        },
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 3
        },
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      3,
      1,
      2,
      1,
      3,
      1,
      2,
      1,
      3
    ]
  },
  {
    "id": 32,
    "name": "32. The Deep Mountain",
    "description": "A delicate configuration of stones. Use the adjacent merge rules to clear path barriers and surround the central obstacles.",
    "moves": 6,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 3
        },
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      3,
      1,
      2,
      1,
      3,
      1
    ]
  },
  {
    "id": 33,
    "name": "33. The Solitary Forest",
    "description": "A delicate configuration of stones. Use the adjacent merge rules to clear path barriers and surround the central obstacles.",
    "moves": 7,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        {
          "color": "enemy",
          "value": 1
        },
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 3
        },
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      3,
      1,
      2,
      1,
      3,
      1,
      2
    ]
  },
  {
    "id": 34,
    "name": "34. The Sunlit Rake",
    "description": "A delicate configuration of stones. Use the adjacent merge rules to clear path barriers and surround the central obstacles.",
    "moves": 8,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 3
        },
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      3,
      1,
      2,
      1,
      3,
      1,
      2,
      1
    ]
  },
  {
    "id": 35,
    "name": "35. The Calm Path",
    "description": "A delicate configuration of stones. Use the adjacent merge rules to clear path barriers and surround the central obstacles.",
    "moves": 9,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        {
          "color": "enemy",
          "value": 1
        },
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 3
        },
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      3,
      1,
      2,
      1,
      3,
      1,
      2,
      1,
      3
    ]
  },
  {
    "id": 36,
    "name": "36. The Ancient Spring",
    "description": "An advanced challenge. Plan your merges carefully to build Level 3 and 4 white stones, avoiding row/column conflicts.",
    "moves": 9,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 2
        },
        {
          "color": "enemy",
          "value": 3
        },
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 3
        },
        {
          "color": "enemy",
          "value": 4
        },
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      4,
      1,
      2,
      3,
      2,
      4,
      3,
      1,
      2
    ]
  },
  {
    "id": 37,
    "name": "37. The Earthy Sprout",
    "description": "An advanced challenge. Plan your merges carefully to build Level 3 and 4 white stones, avoiding row/column conflicts.",
    "moves": 10,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 2
        },
        {
          "color": "enemy",
          "value": 3
        },
        {
          "color": "enemy",
          "value": 3
        },
        {
          "color": "enemy",
          "value": 2
        },
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      4,
      1,
      2,
      3,
      2,
      4,
      3,
      1,
      2,
      3
    ]
  },
  {
    "id": 38,
    "name": "38. The Endless Dusk",
    "description": "An advanced challenge. Plan your merges carefully to build Level 3 and 4 white stones, avoiding row/column conflicts.",
    "moves": 11,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 3
        },
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        {
          "color": "enemy",
          "value": 4
        },
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 3
        },
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      4,
      1,
      2,
      3,
      2,
      4,
      3,
      1,
      2,
      3,
      4
    ]
  },
  {
    "id": 39,
    "name": "39. The Flowing Waterfall",
    "description": "An advanced challenge. Plan your merges carefully to build Level 3 and 4 white stones, avoiding row/column conflicts.",
    "moves": 12,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 2
        },
        {
          "color": "enemy",
          "value": 3
        },
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 3
        },
        {
          "color": "enemy",
          "value": 4
        },
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      4,
      1,
      2,
      3,
      2,
      4,
      3,
      1,
      2,
      3,
      4,
      1
    ]
  },
  {
    "id": 40,
    "name": "40. The Tranquil Willow",
    "description": "An advanced challenge. Plan your merges carefully to build Level 3 and 4 white stones, avoiding row/column conflicts.",
    "moves": 8,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 2
        },
        {
          "color": "enemy",
          "value": 3
        },
        {
          "color": "enemy",
          "value": 3
        },
        {
          "color": "enemy",
          "value": 2
        },
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      4,
      1,
      2,
      3,
      2,
      4,
      3,
      1
    ]
  },
  {
    "id": 41,
    "name": "41. The Silver Pond",
    "description": "An advanced challenge. Plan your merges carefully to build Level 3 and 4 white stones, avoiding row/column conflicts.",
    "moves": 9,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 3
        },
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        {
          "color": "enemy",
          "value": 4
        },
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 3
        },
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      4,
      1,
      2,
      3,
      2,
      4,
      3,
      1,
      2
    ]
  },
  {
    "id": 42,
    "name": "42. The Drifting Gate",
    "description": "An advanced challenge. Plan your merges carefully to build Level 3 and 4 white stones, avoiding row/column conflicts.",
    "moves": 10,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 2
        },
        {
          "color": "enemy",
          "value": 3
        },
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 3
        },
        {
          "color": "enemy",
          "value": 4
        },
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      4,
      1,
      2,
      3,
      2,
      4,
      3,
      1,
      2,
      3
    ]
  },
  {
    "id": 43,
    "name": "43. The Quiet Winter",
    "description": "An advanced challenge. Plan your merges carefully to build Level 3 and 4 white stones, avoiding row/column conflicts.",
    "moves": 11,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 2
        },
        {
          "color": "enemy",
          "value": 3
        },
        {
          "color": "enemy",
          "value": 3
        },
        {
          "color": "enemy",
          "value": 2
        },
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      4,
      1,
      2,
      3,
      2,
      4,
      3,
      1,
      2,
      3,
      4
    ]
  },
  {
    "id": 44,
    "name": "44. The Serene Pine",
    "description": "An advanced challenge. Plan your merges carefully to build Level 3 and 4 white stones, avoiding row/column conflicts.",
    "moves": 12,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 3
        },
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        {
          "color": "enemy",
          "value": 4
        },
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 3
        },
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      4,
      1,
      2,
      3,
      2,
      4,
      3,
      1,
      2,
      3,
      4,
      1
    ]
  },
  {
    "id": 45,
    "name": "45. The Mist Garden",
    "description": "An advanced challenge. Plan your merges carefully to build Level 3 and 4 white stones, avoiding row/column conflicts.",
    "moves": 8,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 2
        },
        {
          "color": "enemy",
          "value": 3
        },
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 3
        },
        {
          "color": "enemy",
          "value": 4
        },
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      4,
      1,
      2,
      3,
      2,
      4,
      3,
      1
    ]
  },
  {
    "id": 46,
    "name": "46. The Reflected River",
    "description": "An advanced challenge. Plan your merges carefully to build Level 3 and 4 white stones, avoiding row/column conflicts.",
    "moves": 9,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 2
        },
        {
          "color": "enemy",
          "value": 3
        },
        {
          "color": "enemy",
          "value": 3
        },
        {
          "color": "enemy",
          "value": 2
        },
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      4,
      1,
      2,
      3,
      2,
      4,
      3,
      1,
      2
    ]
  },
  {
    "id": 47,
    "name": "47. The Dewy Lantern",
    "description": "An advanced challenge. Plan your merges carefully to build Level 3 and 4 white stones, avoiding row/column conflicts.",
    "moves": 10,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 3
        },
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        {
          "color": "enemy",
          "value": 4
        },
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 3
        },
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      4,
      1,
      2,
      3,
      2,
      4,
      3,
      1,
      2,
      3
    ]
  },
  {
    "id": 48,
    "name": "48. The Soft Cranes",
    "description": "An advanced challenge. Plan your merges carefully to build Level 3 and 4 white stones, avoiding row/column conflicts.",
    "moves": 11,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 2
        },
        {
          "color": "enemy",
          "value": 3
        },
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 3
        },
        {
          "color": "enemy",
          "value": 4
        },
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      4,
      1,
      2,
      3,
      2,
      4,
      3,
      1,
      2,
      3,
      4
    ]
  },
  {
    "id": 49,
    "name": "49. The Winding Cloud",
    "description": "An advanced challenge. Plan your merges carefully to build Level 3 and 4 white stones, avoiding row/column conflicts.",
    "moves": 12,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 2
        },
        {
          "color": "enemy",
          "value": 3
        },
        {
          "color": "enemy",
          "value": 3
        },
        {
          "color": "enemy",
          "value": 2
        },
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      4,
      1,
      2,
      3,
      2,
      4,
      3,
      1,
      2,
      3,
      4,
      1
    ]
  },
  {
    "id": 50,
    "name": "50. The Wild Summer",
    "description": "An advanced challenge. Plan your merges carefully to build Level 3 and 4 white stones, avoiding row/column conflicts.",
    "moves": 8,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 3
        },
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        {
          "color": "enemy",
          "value": 4
        },
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 3
        },
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      4,
      1,
      2,
      3,
      2,
      4,
      3,
      1
    ]
  },
  {
    "id": 51,
    "name": "51. The Shaded Maple",
    "description": "An advanced challenge. Plan your merges carefully to build Level 3 and 4 white stones, avoiding row/column conflicts.",
    "moves": 9,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 2
        },
        {
          "color": "enemy",
          "value": 3
        },
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 3
        },
        {
          "color": "enemy",
          "value": 4
        },
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      4,
      1,
      2,
      3,
      2,
      4,
      3,
      1,
      2
    ]
  },
  {
    "id": 52,
    "name": "52. The Still Stone",
    "description": "An advanced challenge. Plan your merges carefully to build Level 3 and 4 white stones, avoiding row/column conflicts.",
    "moves": 10,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 2
        },
        {
          "color": "enemy",
          "value": 3
        },
        {
          "color": "enemy",
          "value": 3
        },
        {
          "color": "enemy",
          "value": 2
        },
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      4,
      1,
      2,
      3,
      2,
      4,
      3,
      1,
      2,
      3
    ]
  },
  {
    "id": 53,
    "name": "53. The Hidden Ripple",
    "description": "An advanced challenge. Plan your merges carefully to build Level 3 and 4 white stones, avoiding row/column conflicts.",
    "moves": 11,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 3
        },
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 2
        },
        null,
        {
          "color": "enemy",
          "value": 4
        },
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 3
        },
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      4,
      1,
      2,
      3,
      2,
      4,
      3,
      1,
      2,
      3,
      4
    ]
  },
  {
    "id": 54,
    "name": "54. The Jade Summit",
    "description": "An advanced challenge. Plan your merges carefully to build Level 3 and 4 white stones, avoiding row/column conflicts.",
    "moves": 12,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 2
        },
        {
          "color": "enemy",
          "value": 3
        },
        null,
        null
      ],
      [
        null,
        null,
        {
          "color": "enemy",
          "value": 3
        },
        {
          "color": "enemy",
          "value": 4
        },
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      4,
      1,
      2,
      3,
      2,
      4,
      3,
      1,
      2,
      3,
      4,
      1
    ]
  },
  {
    "id": 55,
    "name": "55. The Whispering Heron",
    "description": "An advanced challenge. Plan your merges carefully to build Level 3 and 4 white stones, avoiding row/column conflicts.",
    "moves": 8,
    "board": [
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        {
          "color": "enemy",
          "value": 2
        },
        {
          "color": "enemy",
          "value": 3
        },
        {
          "color": "enemy",
          "value": 3
        },
        {
          "color": "enemy",
          "value": 2
        },
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    ],
    "deck": [
      4,
      1,
      2,
      3,
      2,
      4,
      3,
      1
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = levels;
} else {
  window.levels = levels;
}
