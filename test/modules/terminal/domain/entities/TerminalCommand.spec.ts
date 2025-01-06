import TerminalCommand from '@src/modules/terminal/domain/entities/TerminalCommand';

describe('TerminalCommand',() => {
    it('Deve ser definido ao passar 4 parâmetros.',() => {
        const comando=new TerminalCommand('1','comando de teste',new Date(),[]);
        expect(comando).toBeDefined();
    });

    it('Deve ser definido ao passar 3 parâmetros.',() => {
        const comando=new TerminalCommand('1','comando de teste',new Date());
        expect(comando).toBeDefined();
    });

    it('Deve retornar a mensagem correta ao executar o comando.',() => {
        const nomeComando='comando de teste';
        const parametros=['arg1','arg2'];
        const comando=new TerminalCommand('1',nomeComando,new Date(),parametros);
        expect(comando.execute()).toBe(`Executando '${nomeComando}' com os seguintes parâmetros: ${parametros.join(' ')}`);
    });
});