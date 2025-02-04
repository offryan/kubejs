// Cria receitas dos itens (POKE BALL)
onEvent('recipes', event => {
    event.shaped('pixelblocksrecaught:poke_block', [
        'AAA',
        'ACA',
        'BBB'
    ], {
        A: 'pixelmon:cooked_red_apricorn',
        B: 'minecraft:iron_ingot',
        C: 'lucky:lucky_block'
    })
});

// Cria receitas dos itens (GREAT BALL)
onEvent('recipes', event => {
    event.shaped('pixelblocksrecaught:great_block', [
        'AAA',
        'ACA',
        'BBB'
    ], {
        A: 'pixelmon:cooked_blue_apricorn',
        B: 'pixelmon:cooked_red_apricorn',
        C: 'pixelblocksrecaught:poke_block'
    })
});

// Cria receitas dos itens (ULTRA BALL)
onEvent('recipes', event => {
    event.shaped('pixelblocksrecaught:ultra_block', [
        'AAA',
        'ACA',
        'BBB'
    ], {
        A: 'pixelmon:cooked_black_apricorn',
        B: 'pixelmon:cooked_yellow_apricorn',
        C: 'pixelblocksrecaught:great_block'
    })
});

// Cria receitas dos itens (EGG BALL)
onEvent('recipes', event => {
    event.shaped('pixelblocksrecaught:egg_block', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:egg',
        B: 'pixelblocksrecaught:poke_block',
    })
});

// Cria receitas dos itens (MASTER BALL)
onEvent('recipes', event => {
    event.shaped('pixelblocksrecaught:master_block', [
        'ABA',
        'ACA',
        'ABA'
    ], {
        A: 'minecraft:gold_ingot',
        B: 'minecraft:gold_block',
        C: 'pixelblocksrecaught:ultra_block'
    })
});

// Cria receitas dos itens (SHINY BALL)
onEvent('recipes', event => {
    event.shaped('pixelblocksrecaught:shiny_block', [
        'ABA',
        'ACA',
        'ABA'
    ], {
        A: 'minecraft:iron_ingot',
        B: 'minecraft:iron_block',
        C: 'pixelblocksrecaught:ultra_block'
    })
});

// Cria receitas dos itens (LEGEND BALL)
onEvent('recipes', event => {
    event.shaped('pixelblocksrecaught:legend_block', [
        'ABA',
        'ACA',
        'ABA'
    ], {
        A: 'minecraft:diamond',
        B: 'minecraft:diamond_block',
        C: 'pixelblocksrecaught:master_block'
    })
});

// Cria receitas dos itens (BOSS BALL)
onEvent('recipes', event => {
    event.shaped('pixelblocksrecaught:boss_block', [
        'ABA',
        'ACA',
        'ABA'
    ], {
        A: 'minecraft:emerald',
        B: 'minecraft:emerald_block',
        C: 'pixelblocksrecaught:shiny_block'
    })
});

