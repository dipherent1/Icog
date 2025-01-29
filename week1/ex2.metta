(= (fibonacci-sum $a $b $limit)
    (if (< $a $limit)
        (if (== 0 (% $a 2))
            (+ $a (fibonacci-sum $b (+ $a $b) $limit)) ; Add $a if it's even
            (fibonacci-sum $b (+ $a $b) $limit)        ; Skip $a if it's odd
        )
        0 ; Base case: return 0 when $a exceeds the limit
    )
)

! (fibonacci-sum 1 2 100) ; Call the function with initial values 1, 2, and limit 100