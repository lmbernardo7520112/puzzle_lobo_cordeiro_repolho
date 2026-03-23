import { test, expect } from '@playwright/test';

test.describe('Jogo da Travessia E2E', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to local dev server and enter game
    await page.goto('/');
    await page.click('text=Iniciar Aventura');
  });

  test('Fluxo Feliz (Vitória Perfeita)', async ({ page }) => {
    // Embarca e atravessa Sheep
    await page.locator('[title="Sheep"]').click();
    await page.click('text=Atravessar');
    await page.locator('[title="Sheep"]').click(); // Desembarca

    // Volta Vazio
    await page.click('text=Atravessar');

    // Embarca Wolf
    await page.locator('[title="Wolf"]').click();
    await page.click('text=Atravessar');
    await page.locator('[title="Wolf"]').click(); // Desembarca

    // Traz Sheep de volta
    await page.locator('[title="Sheep"]').click();
    await page.click('text=Atravessar');
    await page.locator('[title="Sheep"]').click(); // Desembarca na esquerda

    // Embarca Cabbage
    await page.locator('[title="Cabbage"]').click();
    await page.click('text=Atravessar');
    await page.locator('[title="Cabbage"]').click(); // Desembarca na direita

    // Volta vazio
    await page.click('text=Atravessar');

    // Busca Sheep final
    await page.locator('[title="Sheep"]').click();
    await page.click('text=Atravessar');
    
    // Vitória ainda não acionada, pois tá no barco
    await expect(page.locator('text=Vitória!')).not.toBeVisible();

    await page.locator('[title="Sheep"]').click(); // Desembarca na direita

    await expect(page.locator('text=Vitória!')).toBeVisible();
    await expect(page.locator('text=Você venceu!')).toBeVisible();
  });

  test('Derrota (Lobo devora Ovelha)', async ({ page }) => {
    // Embarca Cabbage deixando Lobo e Ovelha sozinhos e atravessa
    await page.locator('[title="Cabbage"]').click();
    await page.click('text=Atravessar');

    await expect(page.locator('text=Derrota!')).toBeVisible();
    await expect(page.locator('text=O lobo comeu a ovelha!')).toBeVisible();
  });

  test('Derrota (Ovelha devora Couve)', async ({ page }) => {
    // Embarca Lobo deixando ovelha e couve sozinhas
    await page.locator('[title="Wolf"]').click();
    await page.click('text=Atravessar');

    await expect(page.locator('text=Derrota!')).toBeVisible();
    await expect(page.locator('text=A ovelha comeu a couve!')).toBeVisible();
  });

  test('Reset e Recomeçar o Jogo', async ({ page }) => {
    // Causa derrota proposital
    await page.locator('[title="Wolf"]').click();
    await page.click('text=Atravessar');
    await expect(page.locator('text=Derrota!')).toBeVisible();

    // Clica no modal "Tentar Novamente" (Reset via hook)
    await page.click('text=Tentar Novamente');
    
    // Certifica-se que fechou o modal
    await expect(page.locator('text=Derrota!')).not.toBeVisible();
    
    // Certifica-se que todos voltaram para a Margem Esquerda (.bank.left)
    await expect(page.locator('.bank.left .item[title="Wolf"]')).toBeVisible();
    await expect(page.locator('.bank.left .item[title="Sheep"]')).toBeVisible();
    await expect(page.locator('.bank.left .item[title="Cabbage"]')).toBeVisible();
  });
});
