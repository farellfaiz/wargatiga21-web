import { Box, Heading, Text, Link, Button } from "@chakra-ui/react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MotionFlex from "../../components/motion/MotionFlex";
import { useEffect } from "react";

const Booklet = () => {
  return (
    <>
    <Head>
      <title>Booklet | Warga Tiga 2021</title>
    </Head>
    <MotionFlex
      marginY={"2.75rem"}
      as="section"
      variants={{
        before: { opacity: 0, y: 20, transition: { type: "spring" } },
        after: { opacity: 1, y: 0, transition: { type: "spring" } },
      }}
      initial="before"
      animate="after"
    >
      <Box boxSize={[100, 160]}>
        <Image
          width={160}
          height={160}
          src="/app_icons/desbook-pwa.png"
          alt="Warga Tiga 2021"
        />
      </Box>
      <Box
        verticalAlign="center"
        width={["100%", "80%", "60%"]}
        paddingX={22}
        alignSelf={["none", "center"]}
      >
        <Heading as="h1" size="2xl" paddingBottom={11}>
          Booklet 3'2021
        </Heading>
        <Text fontSize="xl">
          Di halaman ini kalian dapat mengakses informasi terkait booklet 3'2021.
           Tahun ini, SMAN 3 Bandung bekerja sama dengan Nawa Factory dalam pembuatan 
           booklet.
        </Text>
      </Box>
    </MotionFlex>
        <Box marginY={22}>
          <Heading as="h2" size="lg">
              Timeline Booklet
          </Heading>
          <Heading as="h3" size="lg">
            November - Desember
          </Heading>
          <Text>
            1. Adanya kegiatan pematangan konsep antara panitia booklet dengan tim nawa.
          </Text>
          <Text>
          2. Pengumpulan data setiap anak untuk dicantumkan di dalam booklet.
          </Text>
          <Text>
          3. Setiap kelas berdikusi mengenai tema, outfit, dan hal lainnya.
          </Text>
          <Text>
          4. Proses input data dan layout design oleh tim Nawa
          </Text>
          
        
        </Box>
        <Box marginY={22}>
          <Heading as="h2" size="lg">
              Termin Pembayaran
          </Heading>
          <Text>
            Termin pembayaran booklet akan segera ditambahkan 
          </Text>
        </Box>
        <Box marginY={22}>
          <Heading as="h2" size="lg">
              Pengisian Data
          </Heading>
            <Link
              href="/booklet/biodata"
              rel="noopener noreferrer"
              marginRight={11}
              isExternal
            >
              <Button>📑 Form Biodata</Button>
            </Link>
        </Box>
    </>
  );
};

export default Booklet;