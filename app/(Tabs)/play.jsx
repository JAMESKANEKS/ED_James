import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const COLS = 10;
const ROWS = 20;
const START_POS = { x: Math.floor(COLS / 2) - 1, y: 0 };
const INTERVAL = 500; // How fast the blocks fall (in ms)

const TETROMINOS = {
  I: [[1, 1, 1, 1]],
  O: [
    [1, 1],
    [1, 1],
  ],
  T: [
    [0, 1, 0],
    [1, 1, 1],
  ],
  L: [
    [1, 0],
    [1, 0],
    [1, 1],
  ],
  J: [
    [0, 1],
    [0, 1],
    [1, 1],
  ],
};

const randomTetromino = () => {
  const tetrominos = 'IOTLJ';
  const rand = tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return { shape: TETROMINOS[rand], pos: { ...START_POS } };
};

const Tetris = () => {
  const [grid, setGrid] = useState(createGrid());
  const [activeTetromino, setActiveTetromino] = useState(randomTetromino());
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        moveDown();
      }, INTERVAL);
      return () => clearInterval(interval);
    }
  }, [activeTetromino, isRunning]);

  function createGrid() {
    return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  }

  const moveDown = () => {
    let newPos = { ...activeTetromino.pos, y: activeTetromino.pos.y + 1 };
    if (!isValidMove(newPos, activeTetromino.shape)) {
      mergeTetromino();
      return;
    }
    setActiveTetromino({ ...activeTetromino, pos: newPos });
  };

  const isValidMove = (pos, shape) => {
    for (let y = 0; y < shape.length; y++) {
      for (let x = 0; x < shape[y].length; x++) {
        if (shape[y][x] === 1) {
          const newY = y + pos.y;
          const newX = x + pos.x;
          if (newY >= ROWS || newX < 0 || newX >= COLS || (newY >= 0 && grid[newY][newX] === 1)) {
            return false;
          }
        }
      }
    }
    return true;
  };

  const mergeTetromino = () => {
    const newGrid = grid.map((row) => [...row]);
    activeTetromino.shape.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell === 1) {
          const gridX = x + activeTetromino.pos.x;
          const gridY = y + activeTetromino.pos.y;
          if (gridY >= 0) {
            newGrid[gridY][gridX] = 1;
          }
        }
      });
    });
    setGrid(newGrid);
    clearRows(newGrid);
    setActiveTetromino(randomTetromino());
  };

  const clearRows = (grid) => {
    const newGrid = grid.filter((row) => row.some((cell) => cell === 0));
    const clearedRows = ROWS - newGrid.length;
    const newRows = Array.from({ length: clearedRows }, () => Array(COLS).fill(0));
    setGrid([...newRows, ...newGrid]);
  };

  const moveLeft = () => {
    let newPos = { ...activeTetromino.pos, x: activeTetromino.pos.x - 1 };
    if (isValidMove(newPos, activeTetromino.shape)) {
      setActiveTetromino({ ...activeTetromino, pos: newPos });
    }
  };

  const moveRight = () => {
    let newPos = { ...activeTetromino.pos, x: activeTetromino.pos.x + 1 };
    if (isValidMove(newPos, activeTetromino.shape)) {
      setActiveTetromino({ ...activeTetromino, pos: newPos });
    }
  };

  const rotate = () => {
    const rotatedShape = rotateMatrix(activeTetromino.shape);
    if (isValidMove(activeTetromino.pos, rotatedShape)) {
      setActiveTetromino({ ...activeTetromino, shape: rotatedShape });
    }
  };

  const rotateMatrix = (matrix) => {
    return matrix[0].map((_, i) => matrix.map((row) => row[i])).reverse();
  };

  const startGame = () => {
    setGrid(createGrid());
    setActiveTetromino(randomTetromino());
    setIsRunning(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {grid.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((cell, cellIndex) => (
              <View
                key={cellIndex}
                style={[styles.cell, cell === 1 && styles.filledCell]}
              />
            ))}
          </View>
        ))}
      </View>

      <View style={styles.controls}>
        <Button title="Left" onPress={moveLeft} />
        <Button title="Rotate" onPress={rotate} />
        <Button title="Right" onPress={moveRight} />
      </View>

      <View style={styles.startButton}>
        <Button title="Start Game" onPress={startGame} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  grid: {
    width: 200,
    height: 400,
    backgroundColor: '#333',
    flexDirection: 'column',
    borderWidth: 2,
    borderColor: '#fff',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#444',
  },
  filledCell: {
    backgroundColor: '#f00',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  startButton: {
    marginTop: 20,
  },
});

export default Tetris;
