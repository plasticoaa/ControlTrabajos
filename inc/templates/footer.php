<script src="js/sweetalert2.all.min.js"></script>

<?php 
$actual = obtenerPagActual();
    if ($actual==='crear-cuenta' || $actual==='login') {
        echo '<script src="js/formulario.js"></script>';
    }
?>

</body>
</html>