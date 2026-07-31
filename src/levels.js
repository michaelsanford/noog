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
    "id": 22,
    "name": "22. The Still Breeze",
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
    "id": 23,
    "name": "23. The Hidden Moss",
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
    "id": 24,
    "name": "24. The Jade Sun",
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
    "id": 25,
    "name": "25. The Whispering Bamboo",
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
    "id": 26,
    "name": "26. The Gentle Shrine",
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
    "id": 27,
    "name": "27. The Peaceful Sand",
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
    "id": 28,
    "name": "28. The Golden Bridge",
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
    "id": 29,
    "name": "29. The Floating Autumn",
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
    "id": 30,
    "name": "30. The Silent Fern",
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
    "id": 31,
    "name": "31. The Restful Dawn",
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
    "id": 32,
    "name": "32. The Deep Mountain",
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
    "id": 33,
    "name": "33. The Solitary Forest",
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
    "id": 34,
    "name": "34. The Sunlit Rake",
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
    "id": 35,
    "name": "35. The Calm Path",
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
    "id": 36,
    "name": "36. The Ancient Spring",
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
    "id": 37,
    "name": "37. The Earthy Sprout",
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
    "id": 38,
    "name": "38. The Endless Dusk",
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
    "id": 39,
    "name": "39. The Flowing Waterfall",
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
    "id": 40,
    "name": "40. The Tranquil Willow",
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
    "id": 41,
    "name": "41. The Silver Pond",
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
    "id": 42,
    "name": "42. The Drifting Gate",
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
    "id": 43,
    "name": "43. The Quiet Winter",
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
    "id": 44,
    "name": "44. The Serene Pine",
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
    "id": 45,
    "name": "45. The Mist Garden",
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
    "id": 46,
    "name": "46. The Reflected River",
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
    "id": 47,
    "name": "47. The Dewy Lantern",
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
    "id": 48,
    "name": "48. The Soft Cranes",
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
    "id": 49,
    "name": "49. The Winding Cloud",
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
    "id": 50,
    "name": "50. The Wild Summer",
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
    "id": 51,
    "name": "51. The Shaded Maple",
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
    "id": 52,
    "name": "52. The Still Stone",
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
    "id": 53,
    "name": "53. The Hidden Ripple",
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
    "id": 54,
    "name": "54. The Jade Summit",
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
    "id": 55,
    "name": "55. The Whispering Heron",
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
    "id": 56,
    "name": "56. The Gentle Shadow",
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
    "id": 57,
    "name": "57. The Peaceful Morning",
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
    "id": 58,
    "name": "58. The Golden Sakura",
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
    "id": 59,
    "name": "59. The Floating Stream",
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
    "id": 60,
    "name": "60. The Silent Valley",
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
    "id": 61,
    "name": "61. The Restful Canyon",
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
    "id": 62,
    "name": "62. The Deep Moon",
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
    "id": 63,
    "name": "63. The Solitary Lotus",
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
    "id": 64,
    "name": "64. The Sunlit Temple",
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
    "id": 65,
    "name": "65. The Calm Bonsai",
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
    "id": 66,
    "name": "66. The Ancient Pebble",
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
    "id": 67,
    "name": "67. The Earthy Breeze",
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
    "id": 68,
    "name": "68. The Endless Moss",
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
    "id": 69,
    "name": "69. The Flowing Sun",
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
    "id": 70,
    "name": "70. The Tranquil Bamboo",
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
    "id": 71,
    "name": "71. The Silver Shrine",
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
    "id": 72,
    "name": "72. The Drifting Sand",
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
    "id": 73,
    "name": "73. The Quiet Bridge",
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
    "id": 74,
    "name": "74. The Serene Autumn",
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
    "id": 75,
    "name": "75. The Mist Fern",
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
    "id": 76,
    "name": "76. The Reflected Dawn",
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
    "id": 77,
    "name": "77. The Dewy Mountain",
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
    "id": 78,
    "name": "78. The Soft Forest",
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
    "id": 79,
    "name": "79. The Winding Rake",
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
    "id": 80,
    "name": "80. The Wild Path",
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
    "id": 81,
    "name": "81. The Shaded Spring",
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
    "id": 82,
    "name": "82. The Still Sprout",
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
    "id": 83,
    "name": "83. The Hidden Dusk",
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
    "id": 84,
    "name": "84. The Jade Waterfall",
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
    "id": 85,
    "name": "85. The Whispering Willow",
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
    "id": 86,
    "name": "86. The Gentle Pond",
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
    "id": 87,
    "name": "87. The Peaceful Gate",
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
    "id": 88,
    "name": "88. The Golden Winter",
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
    "id": 89,
    "name": "89. The Floating Pine",
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
    "id": 90,
    "name": "90. The Silent Garden",
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
    "id": 91,
    "name": "91. The Restful River",
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
    "id": 92,
    "name": "92. The Deep Lantern",
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
    "id": 93,
    "name": "93. The Solitary Cranes",
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
    "id": 94,
    "name": "94. The Sunlit Cloud",
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
    "id": 95,
    "name": "95. The Calm Summer",
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
    "id": 96,
    "name": "96. The Ancient Maple",
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
    "id": 97,
    "name": "97. The Earthy Stone",
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
    "id": 98,
    "name": "98. The Endless Ripple",
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
    "id": 99,
    "name": "99. The Flowing Summit",
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
    "id": 100,
    "name": "100. The Tranquil Heron",
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
    "id": 101,
    "name": "101. The Silver Shadow",
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
    "id": 102,
    "name": "102. The Drifting Morning",
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
    "id": 103,
    "name": "103. The Quiet Sakura",
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
    "id": 104,
    "name": "104. The Serene Stream",
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
    "id": 105,
    "name": "105. The Mist Valley",
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
    "id": 106,
    "name": "106. The Reflected Canyon",
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
    "id": 107,
    "name": "107. The Dewy Moon",
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
    "id": 108,
    "name": "108. The Soft Lotus",
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
    "id": 109,
    "name": "109. The Winding Temple",
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
    "id": 110,
    "name": "110. The Wild Bonsai",
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
    "id": 111,
    "name": "111. The Shaded Pebble",
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
    "id": 112,
    "name": "112. The Still Breeze",
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
    "id": 113,
    "name": "113. The Hidden Moss",
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
    "id": 114,
    "name": "114. The Jade Sun",
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
    "id": 115,
    "name": "115. The Whispering Bamboo",
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
    "id": 116,
    "name": "116. The Gentle Shrine",
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
    "id": 117,
    "name": "117. The Peaceful Sand",
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
    "id": 118,
    "name": "118. The Golden Bridge",
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
    "id": 119,
    "name": "119. The Floating Autumn",
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
    "id": 120,
    "name": "120. The Silent Fern",
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
    "id": 121,
    "name": "121. The Restful Dawn",
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
    "id": 122,
    "name": "122. The Deep Mountain",
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
    "id": 123,
    "name": "123. The Solitary Forest",
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
    "id": 124,
    "name": "124. The Sunlit Rake",
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
    "id": 125,
    "name": "125. The Calm Path",
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
    "id": 126,
    "name": "126. The Ancient Spring",
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
    "id": 127,
    "name": "127. The Earthy Sprout",
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
    "id": 128,
    "name": "128. The Endless Dusk",
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
    "id": 129,
    "name": "129. The Flowing Waterfall",
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
    "id": 130,
    "name": "130. The Tranquil Willow",
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
    "id": 131,
    "name": "131. The Silver Pond",
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
    "id": 132,
    "name": "132. The Drifting Gate",
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
    "id": 133,
    "name": "133. The Quiet Winter",
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
    "id": 134,
    "name": "134. The Serene Pine",
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
    "id": 135,
    "name": "135. The Mist Garden",
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
    "id": 136,
    "name": "136. The Reflected River",
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
    "id": 137,
    "name": "137. The Dewy Lantern",
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
    "id": 138,
    "name": "138. The Soft Cranes",
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
    "id": 139,
    "name": "139. The Winding Cloud",
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
    "id": 140,
    "name": "140. The Wild Summer",
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
    "id": 141,
    "name": "141. The Shaded Maple",
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
    "id": 142,
    "name": "142. The Still Stone",
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
    "id": 143,
    "name": "143. The Hidden Ripple",
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
    "id": 144,
    "name": "144. The Jade Summit",
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
    "id": 145,
    "name": "145. The Whispering Heron",
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
    "id": 146,
    "name": "146. The Gentle Shadow",
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
    "id": 147,
    "name": "147. The Peaceful Morning",
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
    "id": 148,
    "name": "148. The Golden Sakura",
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
    "id": 149,
    "name": "149. The Floating Stream",
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
    "id": 150,
    "name": "150. The Silent Valley",
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
    "id": 151,
    "name": "151. The Restful Canyon",
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
    "id": 152,
    "name": "152. The Deep Moon",
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
    "id": 153,
    "name": "153. The Solitary Lotus",
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
    "id": 154,
    "name": "154. The Sunlit Temple",
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
    "id": 155,
    "name": "155. The Calm Bonsai",
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
    "id": 156,
    "name": "156. The Ancient Pebble",
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
    "id": 157,
    "name": "157. The Earthy Breeze",
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
    "id": 158,
    "name": "158. The Endless Moss",
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
    "id": 159,
    "name": "159. The Flowing Sun",
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
    "id": 160,
    "name": "160. The Tranquil Bamboo",
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
    "id": 161,
    "name": "161. The Silver Shrine",
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
    "id": 162,
    "name": "162. The Drifting Sand",
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
    "id": 163,
    "name": "163. The Quiet Bridge",
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
    "id": 164,
    "name": "164. The Serene Autumn",
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
    "id": 165,
    "name": "165. The Mist Fern",
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
    "id": 166,
    "name": "166. The Reflected Dawn",
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
    "id": 167,
    "name": "167. The Dewy Mountain",
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
    "id": 168,
    "name": "168. The Soft Forest",
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
    "id": 169,
    "name": "169. The Winding Rake",
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
    "id": 170,
    "name": "170. The Wild Path",
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
    "id": 171,
    "name": "171. The Shaded Spring",
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
    "id": 172,
    "name": "172. The Still Sprout",
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
    "id": 173,
    "name": "173. The Hidden Dusk",
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
    "id": 174,
    "name": "174. The Jade Waterfall",
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
    "id": 175,
    "name": "175. The Whispering Willow",
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
    "id": 176,
    "name": "176. The Gentle Pond",
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
    "id": 177,
    "name": "177. The Peaceful Gate",
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
    "id": 178,
    "name": "178. The Golden Winter",
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
    "id": 179,
    "name": "179. The Floating Pine",
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
    "id": 180,
    "name": "180. The Silent Garden",
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
    "id": 181,
    "name": "181. The Restful River",
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
    "id": 182,
    "name": "182. The Deep Lantern",
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
    "id": 183,
    "name": "183. The Solitary Cranes",
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
    "id": 184,
    "name": "184. The Sunlit Cloud",
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
    "id": 185,
    "name": "185. The Calm Summer",
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
    "id": 186,
    "name": "186. The Ancient Maple",
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
    "id": 187,
    "name": "187. The Earthy Stone",
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
    "id": 188,
    "name": "188. The Endless Ripple",
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
    "id": 189,
    "name": "189. The Flowing Summit",
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
    "id": 190,
    "name": "190. The Tranquil Heron",
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
    "id": 191,
    "name": "191. The Silver Shadow",
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
    "id": 192,
    "name": "192. The Drifting Morning",
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
    "id": 193,
    "name": "193. The Quiet Sakura",
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
    "id": 194,
    "name": "194. The Serene Stream",
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
    "id": 195,
    "name": "195. The Mist Valley",
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
    "id": 196,
    "name": "196. The Reflected Canyon",
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
    "id": 197,
    "name": "197. The Dewy Moon",
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
    "id": 198,
    "name": "198. The Soft Lotus",
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
    "id": 199,
    "name": "199. The Winding Temple",
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
    "id": 200,
    "name": "200. The Wild Bonsai",
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
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = levels;
} else {
  window.levels = levels;
}
