import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../../App';

describe('Game UI Integration Test', () => {
    it('should complete the game with visual SVG sprites', () => {
        render(<App />);
        
        fireEvent.click(screen.getByText('Iniciar Aventura'));
        
        // Embarca Sheep
        fireEvent.click(screen.getByTitle('Sheep'));
        fireEvent.click(screen.getByText('Atravessar'));
        
        // Desembarca Sheep
        fireEvent.click(screen.getByTitle('Sheep'));
        
        // Volta Vazio
        fireEvent.click(screen.getByText('Atravessar'));
        
        // Embarca Lobo
        fireEvent.click(screen.getByTitle('Wolf'));
        fireEvent.click(screen.getByText('Atravessar'));
        
        // Desembarca Lobo
        fireEvent.click(screen.getByTitle('Wolf'));
        
        // Traz as Sheep de volta
        fireEvent.click(screen.getByTitle('Sheep'));
        fireEvent.click(screen.getByText('Atravessar'));
        
        // Desembarca Sheep
        fireEvent.click(screen.getByTitle('Sheep'));
        
        // Embarca Couve
        fireEvent.click(screen.getByTitle('Cabbage'));
        fireEvent.click(screen.getByText('Atravessar'));
        
        // Desembarca Couve
        fireEvent.click(screen.getByTitle('Cabbage'));
        
        // Volta vazio
        fireEvent.click(screen.getByText('Atravessar'));
        
        // Busca a Sheep
        fireEvent.click(screen.getByTitle('Sheep'));
        fireEvent.click(screen.getByText('Atravessar'));
        
        expect(screen.queryByText('Vitória!')).not.toBeInTheDocument();
        
        // Desembarca Sheep finalizando o jogo
        fireEvent.click(screen.getByTitle('Sheep'));
        
        expect(screen.getByText('Vitória!')).toBeInTheDocument();
    });

    it('should show loss modal if Wolf eats Sheep', () => {
        render(<App />);
        fireEvent.click(screen.getByText('Iniciar Aventura'));
        
        // Embarca Couve deixando ovelha e lobo sozinhos
        fireEvent.click(screen.getByTitle('Cabbage'));
        fireEvent.click(screen.getByText('Atravessar'));
        
        expect(screen.getByText('Derrota!')).toBeInTheDocument();
        expect(screen.getByText('O lobo comeu a ovelha!')).toBeInTheDocument();
    });
});
