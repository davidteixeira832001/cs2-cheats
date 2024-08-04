function showPaymentOptions() {
    document.getElementById('payment-options').classList.remove('hidden');
}

function confirmSubscription(method) {
    alert('Obrigado por escolher o pagamento via ' + method + '! Por favor, complete o pagamento para ativar sua assinatura.');
    // Aqui você pode adicionar lógica adicional para gerenciar a assinatura
}
