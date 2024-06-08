import { rl, showTopPlayer, handleOption } from '../src/index';

describe('showTopPlayer', () => {
  it('should find the player with the most goals', () => {
    const logSpy = jest.spyOn(console, 'log');
    showTopPlayer('goles', 'Goles');
    expect(logSpy).toHaveBeenCalledWith('La jugadora con más Goles es caroline hansen con 19.');
    logSpy.mockRestore();
  });

  it('should find the player with the most shots', () => {
    const logSpy = jest.spyOn(console, 'log');
    showTopPlayer('disparos', 'Disparos');
    expect(logSpy).toHaveBeenCalledWith('La jugadora con más Disparos es clàudia pina con 41.'); 
    logSpy.mockRestore();
  });

  it('should find the player with the most passes', () => {
    const logSpy = jest.spyOn(console, 'log');
    showTopPlayer('pases', 'Pases');
    expect(logSpy).toHaveBeenCalledWith('La jugadora con más Pases es patri guijarro con 1830.'); 
    logSpy.mockRestore();
  });

  it('should find the player with the most assists', () => {
    const logSpy = jest.spyOn(console, 'log');
    showTopPlayer('asistencias', 'Asistencias');
    expect(logSpy).toHaveBeenCalledWith('La jugadora con más Asistencias es caroline hansen con 18.'); 
    logSpy.mockRestore();
  });

  it('should find the player with the most recoveries', () => {
    const logSpy = jest.spyOn(console, 'log');
    showTopPlayer('recuperaciones', 'Recuperaciones');
    expect(logSpy).toHaveBeenCalledWith('La jugadora con más Recuperaciones es lucy bronze con 30.'); 
    logSpy.mockRestore();
  });

  it('should find the player with the most yellow cards', () => {
    const logSpy = jest.spyOn(console, 'log');
    showTopPlayer('am', 'Tarjetas amarillas');
    expect(logSpy).toHaveBeenCalledWith('La jugadora con más Tarjetas amarillas es lucy bronze con 3.'); 
    logSpy.mockRestore();
  });

  it('should find the player with the most red cards', () => {
    const logSpy = jest.spyOn(console, 'log');
    showTopPlayer('roj', 'Tarjetas rojas');
    expect(logSpy).toHaveBeenCalledWith('No se encontraron jugadoras con Tarjetas rojas.'); 
    logSpy.mockRestore();
  });

  it('should find the player with the most fouls', () => {
    const logSpy = jest.spyOn(console, 'log');
    showTopPlayer('faltas', 'Faltas');
    expect(logSpy).toHaveBeenCalledWith('La jugadora con más Faltas es marta torrejón con 18.');
    logSpy.mockRestore();
  });
});

describe('handleOption', () => {
  it('should handle option 1 correctly', () => {
    const logSpy = jest.spyOn(console, 'log');
    const result = handleOption('1');
    expect(result).toBe(true);
    expect(logSpy).toHaveBeenCalledWith('La jugadora con más Goles es caroline hansen con 19.');
    logSpy.mockRestore();
  });

  it('should handle option 2 correctly', () => {
    const logSpy = jest.spyOn(console, 'log');
    const result = handleOption('2');
    expect(result).toBe(true);
    expect(logSpy).toHaveBeenCalledWith('La jugadora con más Disparos es clàudia pina con 41.'); 
    logSpy.mockRestore();
  });

  it('should handle option 3 correctly', () => {
    const logSpy = jest.spyOn(console, 'log');
    const result = handleOption('3');
    expect(result).toBe(true);
    expect(logSpy).toHaveBeenCalledWith('La jugadora con más Pases es patri guijarro con 1830.'); 
    logSpy.mockRestore();
  });

  it('should handle option 4 correctly', () => {
    const logSpy = jest.spyOn(console, 'log');
    const result = handleOption('4');
    expect(result).toBe(true);
    expect(logSpy).toHaveBeenCalledWith('La jugadora con más Asistencias es caroline hansen con 18.');
    logSpy.mockRestore();
  });

  it('should handle option 5 correctly', () => {
    const logSpy = jest.spyOn(console, 'log');
    const result = handleOption('5');
    expect(result).toBe(true);
    expect(logSpy).toHaveBeenCalledWith('La jugadora con más Recuperaciones es lucy bronze con 30.');
    logSpy.mockRestore();
  });

  it('should handle option 6 correctly', () => {
    const logSpy = jest.spyOn(console, 'log');
    const result = handleOption('6');
    expect(result).toBe(true);
    expect(logSpy).toHaveBeenCalledWith('La jugadora con más Tarjetas amarillas es lucy bronze con 3.');
    logSpy.mockRestore();
  });

  it('should handle option 7 correctly', () => {
    const logSpy = jest.spyOn(console, 'log');
    const result = handleOption('7');
    expect(result).toBe(true);
    expect(logSpy).toHaveBeenCalledWith('No se encontraron jugadoras con Tarjetas rojas.');
    logSpy.mockRestore();
  });

  it('should handle option 8 correctly', () => {
    const logSpy = jest.spyOn(console, 'log');
    const result = handleOption('8');
    expect(result).toBe(true);
    expect(logSpy).toHaveBeenCalledWith('La jugadora con más Faltas es marta torrejón con 18.'); 
    logSpy.mockRestore();
  });

  it('should return false and log exit message for option 9', () => {
    const logSpy = jest.spyOn(console, 'log');
    const closeSpy = jest.spyOn(rl, 'close').mockImplementation(() => {});
    const result = handleOption('9');
    expect(result).toBe(false);
    expect(logSpy).toHaveBeenCalledWith('Saliendo del programa...');
    logSpy.mockRestore();
    closeSpy.mockRestore();
  });

  it('should handle when all players have zero red cards', () => {
    const logSpy = jest.spyOn(console, 'log');
    showTopPlayer('roj', 'Tarjetas rojas');
    expect(logSpy).toHaveBeenCalledWith('No se encontraron jugadoras con Tarjetas rojas.');
    logSpy.mockRestore();
  });

  it('should log invalid option message for invalid option', () => {
    const logSpy = jest.spyOn(console, 'log');
    const result = handleOption('invalid');
    expect(result).toBe(true);
    expect(logSpy).toHaveBeenCalledWith('Opción no válida.');
    logSpy.mockRestore();
  });
});
