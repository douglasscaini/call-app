import { Button, Heading, MultiStep, Text } from "@ignite-ui/react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { AuthError, ConnectBox, ConnectItem } from "./styles";
import { Container, Header } from "../styles";

import { ArrowRight, Check } from "phosphor-react";

export default function Register() {
    const session = useSession();
    const router = useRouter();

    const isSignedIn = session.status === "authenticated";
    const hasAuthError = !!router.query.error;

    async function handleConnectCalendar() {
        await signIn("google");
    }

    return (
        <Container>
            <Header>
                <Heading as="strong">Conecte sua agenda!</Heading>
                <Text>
                    Precisamos de algumas informações para criar seu perfil! Ah, você pode editar
                    essas informações depois.
                </Text>

                <MultiStep size={4} currentStep={2} />
            </Header>

            <ConnectBox>
                <ConnectItem>
                    <Text>Google Calendar</Text>

                    {isSignedIn ? (
                        <Button size="sm" disabled>
                            Conectado <Check />
                        </Button>
                    ) : (
                        <Button variant="secondary" size="sm" onClick={handleConnectCalendar}>
                            Conectar
                            <ArrowRight />
                        </Button>
                    )}
                </ConnectItem>

                {hasAuthError && (
                    <AuthError size="sm">
                        Falha ao se conectar ao Google, verifique se você habilitou as permissões de
                        acesso ao Google Calendar
                    </AuthError>
                )}

                <Button type="submit" disabled={!isSignedIn}>
                    Próximo passo
                    <ArrowRight />
                </Button>
            </ConnectBox>
        </Container>
    );
}
