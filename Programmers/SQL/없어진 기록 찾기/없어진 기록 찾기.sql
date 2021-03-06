SELECT
    ANIMAL_OUTS.ANIMAL_ID,
    ANIMAL_OUTS.NAME
FROM
    ANIMAL_INS,
    ANIMAL_OUTS
where
    ANIMAL_INS.ANIMAL_ID(+) = ANIMAL_OUTS.ANIMAL_ID
and
    ANIMAL_INS.INTAKE_CONDITION is null
order by ANIMAL_OUTS.ANIMAL_ID asc;