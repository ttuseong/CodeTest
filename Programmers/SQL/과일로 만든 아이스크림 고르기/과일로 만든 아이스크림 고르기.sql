SELECT INFO.FLAVOR
    FROM FIRST_HALF AS HALF
        INNER JOIN ICECREAM_INFO AS INFO
        ON HALF.FLAVOR = INFO.FLAVOR
    WHERE 3000 < HALF.TOTAL_ORDER
        AND INFO.INGREDIENT_TYPE = 'fruit_based'
    ORDER BY HALF.TOTAL_ORDER DESC